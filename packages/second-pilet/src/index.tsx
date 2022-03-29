import * as React from "react";
import { Link } from "react-router-dom";
import { PiletApi } from "app-shell";
import { AppModule } from "./app/app.module";
import { baseRoute } from "./app/constants";
import "./styles.css";

export function setup(app: PiletApi) {
  app.registerMenu(() => <Link to={`${baseRoute}/dashboard`}>Foo Page</Link>);
  app.registerMenu(() => <Link to={`${baseRoute}/detail/15`}>Magneta</Link>);
  app.registerPage("/bar", () => (
    <>
      <h1>React Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        consequatur, quos optio alias officiis sunt eligendi eaque numquam
        repudiandae ratione omnis ducimus placeat autem perferendis blanditiis
        iure quae aut sequi.
      </p>
    </>
  ));
  app.registerPage(`${baseRoute}/*`, app.fromNg(AppModule));
}
