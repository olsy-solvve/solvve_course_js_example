import PrimeVue from "primevue/config";

import Dialog from "primevue/dialog";
import Menubar from "primevue/menubar";
import Button from 'primevue/button';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export default (app) => {
  app.component("pDialog", Dialog);
  app.component("pMenubar", Menubar);
  app.component("pButton", Button);
  app.use(PrimeVue, { ripple: true });
};
