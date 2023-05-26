import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BienvenidaComponent } from "./bienvenida/bienvenida.component";
import { HomeModule } from "./home/home.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [AppComponent, BienvenidaComponent],
    imports: [BrowserModule, HomeModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
