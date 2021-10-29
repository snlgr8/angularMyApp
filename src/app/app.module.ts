import { UserModule } from "./user/user.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
