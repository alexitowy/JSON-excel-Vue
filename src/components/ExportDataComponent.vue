<template>
  <button @click="exportData">
    <slot>Donwload {{ name }}</slot>
  </button>
</template>

<script>
import moment from "moment";
import ExcelJS from "exceljs/dist/es5/exceljs.browser.js";
import _ from "lodash";
import { saveAs } from "file-saver";
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: null
    },
    fields: {
      type: Array,
      required: false
    },
    name: {
      type: String,
      default: "data"
    },
    worksheet: {
      type: String,
      default: "Sheet1"
    },
    beforeExport: {
      type: Function
    },
    afterExport: {
      type: Function
    }
  },
  methods: {
    async exportData() {
      if (typeof this.beforeExport === "function") {
        await this.beforeExport();
      }
      const wb = new ExcelJS.Workbook();
      const ws = wb.addWorksheet(this.worksheet);
      let fieldsTranslate = [];
      let fieldsTypes = [];
      if (!_.isNil(this.fields) && !_.isEmpty(this.fields)) {
        this.fields.map(item => {
          if (typeof item.title === "function") {
            item.title = item.title();
          }
          let fieldType = {
            header: item.title,
            key: item.name
          };
          if (item.width) fieldType.width = item.width;
          if (item.style) fieldType.style = item.style;
          fieldsTranslate.push(fieldType);
          if (item.type) fieldType.type = item.type;
          if (item.format) fieldType.format = item.format;
          fieldsTypes.push(fieldType);
        });
        ws.columns = fieldsTranslate;
      } else {
        ws.columns = this.createHeader();
      }
      ws.addRows(this.data);
      if (!_.isNil(fieldsTypes) && !_.isEmpty(fieldsTypes)) {
        fieldsTypes.forEach(field => {
          let row = ws.getColumn(field.key);
          row.eachCell(function(cell, rowNumber) {
            if (rowNumber === 1) {
              cell.style.font = { bold: true };
            } else if (rowNumber > 1) {
              cell.style.font = { bold: false };
              switch (field.type) {
                case "Date":
                  cell.value = moment(cell).format(field.format);
                  break;
                case "Boolean":
                  if (typeof cell.value === "string") {
                    if (cell.value.toLowerCase() === "true") cell.value = "SI";
                    else cell.value = "NO";
                  } else if (typeof cell.value === "boolean") {
                    cell.value = cell.value ? "SI" : "NO";
                  }
                  break;
                case "Number":
                  cell.value = parseInt(cell.value);
                  break;
                default:
                  break;
              }
            }
          });
        });
      }
      const buf = await wb.xlsx.writeBuffer();
      saveAs(new Blob([buf]), `${this.name}.xlsx`);
      if (typeof this.afterExport === "function") await this.afterExport();
    },
    createHeader() {
      let dataHeader = [];
      Object.keys(this.data[0]).forEach(element => {
        let currentItem = {
          header: element,
          key: element
        };
        dataHeader.push(currentItem);
      });
      return dataHeader;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
