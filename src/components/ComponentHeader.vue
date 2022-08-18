<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Home", icon: "pi pi-fw pi-file" },
        { label: "Edit", icon: "pi pi-fw pi-pencil" },
        {
          label: "Users",
          icon: "pi pi-fw pi-user",
          items: [
            {
              label: "New",
              icon: "pi pi-fw pi-user-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-user-minus",
            },
            {
              label: "Search",
              icon: "pi pi-fw pi-users",
              items: [
                {
                  label: "Filter",
                  icon: "pi pi-fw pi-filter",
                  items: [
                    {
                      label: "Print",
                      icon: "pi pi-fw pi-print",
                    },
                  ],
                },
                {
                  icon: "pi pi-fw pi-bars",
                  label: "List",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {},
};
</script>

<template>
  <div>
    <pMenubar :model="menuItems" />
  </div>
</template>

<style></style>
