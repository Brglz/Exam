import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { FilmAddComponent } from "./film-add/film-add.component";
import { FilmEditComponent } from "./film-edit/film-edit.component";
import { FilmSingleEditComponent } from "./film-single-edit/film-single-edit.component";
import { FilmsComponent } from "./films.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: FilmsComponent
    },
    {
        path: 'add',
        component: FilmAddComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'edit',
        component: FilmEditComponent,
        canActivate: [AuthGuard]

    },
    {
        path: 'edit/:id',
        component: FilmSingleEditComponent,
        canActivate: [AuthGuard]

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FilmsRoutingModule {

}