import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { CategoryComponent } from "./category/category.component";
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';

import { AppService } from "./app.service"


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        CategoryComponent,
        ListComponent,
        ItemComponent,
        DetailComponent,
        HomeComponent
    ],
    providers: [
        AppService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
