import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FirstPageComponent } from "./first.component";
import { SecondPageComponent } from "./second.component";

const routes: Routes = [
  { path: "", redirectTo: "one", pathMatch: "full" },
  { path: "one", component: FirstPageComponent },
  { path: "two", component: SecondPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
