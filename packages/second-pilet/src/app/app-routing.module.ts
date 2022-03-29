import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: "foo", redirectTo: "/foo/dashboard", pathMatch: "full" },
  { path: "foo/dashboard", component: DashboardComponent },
  { path: "foo/detail/:id", component: HeroDetailComponent },
  { path: "foo/heroes", component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
