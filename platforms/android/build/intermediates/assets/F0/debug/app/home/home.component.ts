import { Component } from "@angular/core";

export class DataItem {
    constructor(public itemDesc: string) {}
}

@Component({
    moduleId: module.id,
    selector: "home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    public tabSelectedIndex: number;

    onSelectedIndexChanged(){
        
    }


}