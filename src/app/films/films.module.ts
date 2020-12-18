import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FilmAddComponent } from "./film-add/film-add.component";
import { FilmEditComponent } from "./film-edit/film-edit.component";
import { FilmSingleEditComponent } from "./film-single-edit/film-single-edit.component";
import { FilmComponent } from "./film/film.component";
import { FilmsComponent } from "./films.component";
import { FilmsRoutingModule } from "./films.routing.module";

@NgModule({
    declarations: [
        FilmComponent,
        FilmsComponent,
        FilmEditComponent,
        FilmSingleEditComponent,
        FilmAddComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        FilmsRoutingModule
    ],
    exports: [
        FilmComponent,
        FilmsComponent,
        FilmEditComponent,
        FilmSingleEditComponent,
        FilmAddComponent
    ]
})

export class FilmsModule {

}