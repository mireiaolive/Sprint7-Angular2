import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home.component";
import { PanellComponent } from "./componentes/panell/panell.component";

@NgModule({
    declarations: [HomeComponent, PanellComponent],
    exports: [HomeComponent],
    imports: [CommonModule, ReactiveFormsModule],
})
export class HomeModule {}
