import "core-js/es/reflect";
import "core-js/stable/reflect";
import "core-js/features/reflect";

import "zone.js";

import * as React from "react";
import { render } from "react-dom";
import { createInstance, createStandardApi, Dashboard, Piral } from "piral";
import { createNgApi } from "piral-ng";
import { layout, errors } from "./layout";

const instance = createInstance({
  state: {
    components: {
      ...layout,
    },
    errorComponents: {
      ...errors,
    },
    routes: {
      "/": Dashboard,
    },
  },
  plugins: [createNgApi(), ...createStandardApi()],
  requestPilets() {
    return fetch('./pilets.json')
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

render(<Piral instance={instance} />, document.querySelector("#app"));
