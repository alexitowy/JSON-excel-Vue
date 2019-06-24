import Vue from "vue";
import ExportJsonExcel from "./ExportDataComponent";

const Components = {
  ExportJsonExcel
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
