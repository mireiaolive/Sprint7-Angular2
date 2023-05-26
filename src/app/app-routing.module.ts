import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BienvenidaComponent } from "../app/bienvenida/bienvenida.component";
import { HomeComponent } from "./home/pages/home.component";

const routes: Routes = [
    { path: "", component: BienvenidaComponent },
    { path: "home", component: HomeComponent },
    { path: "**", redirectTo: "" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
