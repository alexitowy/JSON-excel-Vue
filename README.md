# Vue Export Json Excel

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

## Props List

| Nombre             | Tipo  | Descripción |
| :---             | :---: | ---         |
| data  | Array  | datos que serán exportados | 
| fields  | Array  | listado de objetos que forman la cabecera todos los objetos que se definana aquí serán mostrarán en el excel | 
| name    | string | nombre del archivo a exportar deault: data.xlsx |
| worksheet | string | Nombre de la hoja de trabajo.  default: 'Sheet1' |
| beforeExport  | Function | Función que se ejecuta antes de descargar el fichero |
| afterExport  | Function | Función que se ejecuta despues de descarga del fichero |


## Example

```js
import Vue from "vue";
import "export-json-excel";

const app = new Vue({
    el: '#app',
    data: {
        fields: [
            {
              'title': '#',
              'name': 'id', 
            },
            {
              'title': 'Nombre',
              'name': 'name', 
            },
            {
              'title': 'Ciudad',
              'name': 'city', 
            },
            {
              'title': 'País',
              'name': 'country', 
            },
            {
              'title': 'birthdate',
              'name': 'F. Nacimiento',
              'type': 'Date',
              'format': 'DD/MM/YYYY'
            }
        ]
        data: [
            {
                'id': 1,
                'name': 'Tony Peña',
                'city': 'New York',
                'country': 'United States',
                'birthdate': '1978-03-15'
            },
            {
                'id': 2,
                'name': 'Thessaloniki',
                'city': 'Athens',
                'country': 'Greece',
                'birthdate': '1987-11-23'
            },
            {
                'id': 3,
                'name': 'Jhon Doe',
                'city': 'Mexico',
                'country': 'Mexico',
                'birthdate': '1987-11-23'
            }
        ]
    },
    methods:{
      startDownload(){
          console.log('show loading');
      },
      finishDownload(){
          console.log('hide loading');
      }
    }
})
```

In your HTML call it like

```html
<export-json-excel
	:data="data"
	:fields="fields"
	worksheet="My Worksheet"
	name="filename"
  :beforeExport="startDownload"
  :afterExport="finishDownload">

	Descargar excel (tu puedes cambiar este código por el que quieras)

</export-json-excel>
```
Requerido
- data: Contiene los datos que quieres exportar,
- fields: Contiene las cabeceras de las columnas.
```js
