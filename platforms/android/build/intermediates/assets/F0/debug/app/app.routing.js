"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var category_component_1 = require("./category/category.component");
var item_component_1 = require("./item/item.component");
var detail_component_1 = require("./detail/detail.component");
var list_component_1 = require("./list/list.component");
var home_component_1 = require("./home/home.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent, children: [
            { path: 'categories', component: category_component_1.CategoryComponent, outlet: 'categoryoutlet' },
            { path: 'categories/:category_name', component: item_component_1.ItemComponent, outlet: 'categoryoutlet' },
            { path: 'detail', component: detail_component_1.DetailComponent, outlet: 'listoutlet' },
            { path: 'list', component: list_component_1.ListComponent, outlet: 'listoutlet' }
        ] },
    { path: '', redirectTo: '/home/(categoryoutlet:categories//listoutlet:list)', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsb0VBQWlFO0FBQ2pFLHdEQUFxRDtBQUNyRCw4REFBMkQ7QUFDM0Qsd0RBQW1EO0FBQ25ELHdEQUFtRDtBQUVuRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsUUFBUSxFQUFFO1lBQ2hELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUUsTUFBTSxFQUFHLGdCQUFnQixFQUFDO1lBQzlFLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLE1BQU0sRUFBRyxnQkFBZ0IsRUFBQztZQUN6RixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsTUFBTSxFQUFHLFlBQVksRUFBQztZQUNwRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsTUFBTSxFQUFHLFlBQVksRUFBQztTQUNuRSxFQUFDO0lBQ0YsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFJLFVBQVUsRUFBRSxvREFBb0QsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0NBQ3BHLENBQUM7QUFNSjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHtDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vZGV0YWlsL2RldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHtMaXN0Q29tcG9uZW50fSBmcm9tICcuL2xpc3QvbGlzdC5jb21wb25lbnQnXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCdcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgeyBwYXRoOiAnY2F0ZWdvcmllcycsIGNvbXBvbmVudDogQ2F0ZWdvcnlDb21wb25lbnQsIG91dGxldCA6ICdjYXRlZ29yeW91dGxldCd9LFxuICAgICAgICB7IHBhdGg6ICdjYXRlZ29yaWVzLzpjYXRlZ29yeV9uYW1lJywgY29tcG9uZW50OiBJdGVtQ29tcG9uZW50LCBvdXRsZXQgOiAnY2F0ZWdvcnlvdXRsZXQnfSxcbiAgICAgICAgeyBwYXRoOiAnZGV0YWlsJywgY29tcG9uZW50OiBEZXRhaWxDb21wb25lbnQsIG91dGxldCA6ICdsaXN0b3V0bGV0J30sXG4gICAgICAgIHsgcGF0aDogJ2xpc3QnLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQsIG91dGxldCA6ICdsaXN0b3V0bGV0J31cbiAgICBdfSxcbiAgICB7IHBhdGg6ICcnLCAgIHJlZGlyZWN0VG86ICcvaG9tZS8oY2F0ZWdvcnlvdXRsZXQ6Y2F0ZWdvcmllcy8vbGlzdG91dGxldDpsaXN0KScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gIF07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19