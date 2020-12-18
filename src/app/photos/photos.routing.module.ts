import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { PhotoCreateComponent } from "./photo-create/photo-create.component";
import { PhotoEditComponent } from "./photo-edit/photo-edit.component";
import { PhotosComponent } from "./photos.component";

const routes: Routes = [
    {
        path: 'photos',
        pathMatch: 'full',
        component: PhotosComponent,
    },
    {
        path: 'photos/edit',
        component: PhotoEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'photos/add',
        component: PhotoCreateComponent,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PhotosRoutingModule {

}