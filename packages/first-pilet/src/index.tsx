import * as React from 'react';
import { PiletApi } from "app-shell";
import { Link } from "react-router-dom";
import { Tile } from "./Tile";
import { AppModule } from "./app/app.module";
import { baseRoute } from "./app/constants";

export function setup(app: PiletApi) {
  app.registerMenu(() => <Link to={`${baseRoute}/#/one`}>First Page</Link>);
  
  app.registerPage(`${baseRoute}/*`, app.fromNg(AppModule));

  app.registerTile(app.fromNg(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
