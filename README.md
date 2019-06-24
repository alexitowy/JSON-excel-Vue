# DonwloadComponent

Componente de vuejs para exportar json a excel con opciónes personalizadas.

## Getting started

Get the package:
```bash
npm install export-json-excel
```

Register export-json-excel in your app entrypoint:
```js
import Vue from "vue";
import "export-json-excel";
```

In your template
```html
<export-json-excel
    :data="exportData">
    Download Data
    <img src="download_icon.png">
</export-json-excel>
```
