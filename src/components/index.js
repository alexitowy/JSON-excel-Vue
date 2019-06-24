import Vue from "vue";
import ExportJSONExcel from "./ExportDataComponent";

const components = {
  ExportJSONExcel
};

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
});

export default ExportJSONExcel;
