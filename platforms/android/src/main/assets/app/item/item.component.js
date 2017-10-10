"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_service_1 = require("../app.service");
var ItemComponent = (function () {
    function ItemComponent(route, appService) {
        this.route = route;
        this.appService = appService;
    }
    ItemComponent.prototype.ngOnInit = function () {
        console.log('Item Component ' + this.route.snapshot.params['category_name']);
        this.getCategoryApps(this.route.snapshot.params['category_name']);
        console.log(this.appsFromCategory.length);
    };
    ItemComponent.prototype.getCategoryApps = function (category_name) {
        var _this = this;
        this.appService.getData().subscribe(function (data) {
            data.data.children.forEach(function (child) {
                if (child.data.advertiser_category == category_name) {
                    _this.appsFromCategory.push(child);
                }
            });
        });
    };
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'item',
            moduleId: module.id,
            templateUrl: './item.component.html',
            styleUrls: ['./item.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            app_service_1.AppService])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBeUQ7QUFHekQsOENBQTJDO0FBUTNDO0lBSUUsdUJBQ1UsS0FBcUIsRUFDckIsVUFBc0I7UUFEdEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM1QixDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBR08sdUNBQWUsR0FBdkIsVUFBd0IsYUFBYTtRQUFyQyxpQkFjQztRQVpDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsVUFBQSxLQUFLO2dCQUUvQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLGFBQWEsQ0FBQyxDQUFBLENBQUM7b0JBQ2xELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7WUFFSCxDQUFDLENBQUMsQ0FBQztRQUdOLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQWhDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO3lDQU1pQix1QkFBYztZQUNULHdCQUFVO09BTnJCLGFBQWEsQ0FrQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENoaWxkIH0gZnJvbSAnLi4vYXBwLmludGVyZmFjZXMnXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0nLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgYXBwc0Zyb21DYXRlZ29yeSA6IENoaWxkW107XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIGNvbnNvbGUubG9nKCdJdGVtIENvbXBvbmVudCAnICsgdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2NhdGVnb3J5X25hbWUnXSk7XG4gICAgdGhpcy5nZXRDYXRlZ29yeUFwcHModGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ2NhdGVnb3J5X25hbWUnXSk7XG4gICAgY29uc29sZS5sb2codGhpcy5hcHBzRnJvbUNhdGVnb3J5Lmxlbmd0aCk7XG5cbiAgfVxuXG5cbiAgcHJpdmF0ZSBnZXRDYXRlZ29yeUFwcHMoY2F0ZWdvcnlfbmFtZSl7XG5cbiAgICB0aGlzLmFwcFNlcnZpY2UuZ2V0RGF0YSgpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGRhdGEuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKCBjaGlsZCA9PiB7XG5cbiAgICAgICAgaWYoY2hpbGQuZGF0YS5hZHZlcnRpc2VyX2NhdGVnb3J5ID09IGNhdGVnb3J5X25hbWUpe1xuICAgICAgICAgIHRoaXMuYXBwc0Zyb21DYXRlZ29yeS5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuXG4gICB9KTtcblxuICB9XG5cbn0iXX0=