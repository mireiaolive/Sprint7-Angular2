import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./pages/home.component";
import { PanellComponent } from "./componentes/panell/panell.component";
import { ListComponent } from "../list/list.component";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "../filter.pipe";

@NgModule({
    declarations: [HomeComponent, PanellComponent, ListComponent, FilterPipe],
    exports: [HomeComponent, ListComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class HomeModule {}
