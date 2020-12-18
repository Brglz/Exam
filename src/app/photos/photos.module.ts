import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PhotoCreateComponent } from "./photo-create/photo-create.component";
import { PhotoEditComponent } from "./photo-edit/photo-edit.component";
import { PhotoComponent } from "./photo/photo.component";
import { PhotosComponent } from "./photos.component";
import { PhotosRoutingModule } from "./photos.routing.module";

@NgModule({
    declarations: [
        PhotosComponent,
        PhotoComponent,
        PhotoCreateComponent,
        PhotoEditComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        PhotosRoutingModule
    ],
    exports: [
        PhotosComponent,
        PhotoComponent,
        PhotoCreateComponent,
        PhotoEditComponent,
    ]
})

export class PhotosModule {

}