import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import {CategoryComponent } from './category/category.component';
import {ItemComponent } from './item/item.component';
import {DetailComponent } from './detail/detail.component';
import {ListComponent} from './list/list.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
    { path: 'home', component: HomeComponent, children: [
        { path: 'categories', component: CategoryComponent, outlet : 'categoryoutlet'},
        { path: 'categories/:category_name', component: ItemComponent, outlet : 'categoryoutlet'},
        { path: 'detail', component: DetailComponent, outlet : 'listoutlet'},
        { path: 'list', component: ListComponent, outlet : 'listoutlet'}
    ]},
    { path: '',   redirectTo: '/home/(categoryoutlet:categories//listoutlet:list)', pathMatch: 'full' },
  ];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }