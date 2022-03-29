import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FirstPageComponent } from "./first.component";
import { SecondPageComponent } from "./second.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, FirstPageComponent, SecondPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
