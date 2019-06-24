<template>
  <export-data-component
    :fields="fields"
    :data="items"
    :name="name"
    :worksheet="worksheet"
    :beforeExport="beforeExportData"
    :afterExport="afterExportData"
  >
  Exportar datos a excel
  </export-data-component>
</template>

<script>
import ExportDataComponent from "./components/ExportDataComponent.vue";

export default {
  components: {
    ExportDataComponent
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: "Victor Plains",
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: "Romaguera-Crona",
          active: "true",
          birthdate: "1987-11-23"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: "Victor Plains",
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: "Deckow-Crist",
          active: "false",
          birthdate: "1987-11-23"
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: "Douglas Extension",
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: "Romaguera-Jacobson",
          active: "true",
          birthdate: "1987-11-23"
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          address: "Hoeger Mall",
          phone: "493-170-9623 x156",
          website: "kale.biz",
          company: "Robel-Corkery",
          active: "false",
          birthdate: "1987-11-23"
        }
      ],
      fields: [
        {
          title: "#",
          name: "id"
        },
        {
          title: "Nombre",
          name: "name"
        },
        {
          title: "Usuario",
          name: "username"
        },
        {
          title: "Activo",
          name: "active",
          type: "Boolean"
        },
        {
          title: "F. Nacimiento",
          name: "birthdate",
          type: "Date",
          format: "DD/MM/YYYY"
        }
      ],
      name: "Usuarios",
      worksheet: "Listado de usuarios"
    };
  },
  methods: {
    beforeExportData() {
      // eslint-disable-next-line no-console
      console.log("exportando los datos");
    },
    afterExportData() {
      // eslint-disable-next-line no-console
      console.log("se han exportado los datos correctament");
    }
  }
};
</script>

<style>
</style>
