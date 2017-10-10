"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_service_1 = require("../app.service");
var CategoryComponent = (function () {
    function CategoryComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categories = [];
        this.appService.getData().subscribe(function (data) {
            data.data.children.forEach(function (child) {
                // If category already exists, do not push.
                if (child.data.advertiser_category == null)
                    child.data.advertiser_category = "Uncategorized";
                _this.categories.indexOf(child.data.advertiser_category) === -1 ? _this.categories.push(child.data.advertiser_category) : console.log("This item already exists");
            });
        }, function (error) { return console.log("Error: " + error); }, function () { return console.log("completed category service"); });
    };
    CategoryComponent.prototype.goToCategory = function (_category) {
        console.log(_category);
        this.router.navigate([
            '/home/category', { outlets: { categoryoutlet: [_category] } }
        ]);
    };
    CategoryComponent.prototype.showAppItemsOnSelection = function (category) {
        var _this = this;
        this.selectedCategory = category;
        this.appsFromCategory = [];
        this.categoryLoading = true;
        this.appService.getData().subscribe(function (data) {
            data.data.children.forEach(function (child) {
                console.log(child);
                console.log(category);
                if (child.data.advertiser_category == category) {
                    if (child.data.advertiser_category == null)
                        child.data.advertiser_category = "Uncategorized";
                    _this.appsFromCategory.push(child);
                }
            });
            _this.categoryLoading = false;
        });
    };
    CategoryComponent = __decorate([
        core_1.Component({
            selector: 'category',
            moduleId: module.id,
            templateUrl: './category.component.html',
            styleUrls: ['./category.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService,
            router_1.Router])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0ZWdvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3QztBQUl4Qyw4Q0FBNEM7QUFTNUM7SUFRRSwyQkFDVSxVQUFzQixFQUN0QixNQUFlO1FBRGYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFTO0lBQ3JCLENBQUM7SUFFTCxvQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBckJDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsVUFBQSxLQUFLO2dCQUUvQiwyQ0FBMkM7Z0JBRTNDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDO29CQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxDQUFDO2dCQUU1RixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUVsSyxDQUFDLENBQUMsQ0FBQTtRQUVKLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUE5QixDQUE4QixFQUN2QyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxFQUF6QyxDQUF5QyxDQUdoRCxDQUFBO0lBRUQsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxTQUFTO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbkIsZ0JBQWdCLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFO1NBQy9ELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxtREFBdUIsR0FBdkIsVUFBd0IsUUFBUTtRQUFoQyxpQkFxQkM7UUFuQkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBRSxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRTdCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsVUFBQSxLQUFLO2dCQUUvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixJQUFJLFFBQVEsQ0FBQyxDQUFBLENBQUM7b0JBQzdDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDO3dCQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUMsZUFBZSxDQUFDO29CQUMxRixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUUvQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFsRVUsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQVdzQix3QkFBVTtZQUNiLGVBQU07T0FWZCxpQkFBaUIsQ0FxRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuXG5pbXBvcnQgeyBDaGlsZCB9IGZyb20gJy4uL2FwcC5pbnRlcmZhY2VzJ1xuXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXRlZ29yeScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXRlZ29yeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhdGVnb3J5LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjYXRlZ29yaWVzIDogc3RyaW5nW107XG4gIHNlbGVjdGVkQ2F0ZWdvcnkgOiBzdHJpbmc7XG4gIGFwcHNGcm9tQ2F0ZWdvcnk6IENoaWxkW107XG5cbiAgY2F0ZWdvcnlMb2FkaW5nIDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xuXG4gICAgdGhpcy5hcHBTZXJ2aWNlLmdldERhdGEoKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG5cbiAgICAgIGRhdGEuZGF0YS5jaGlsZHJlbi5mb3JFYWNoKCBjaGlsZCA9PiB7XG5cbiAgICAgICAgLy8gSWYgY2F0ZWdvcnkgYWxyZWFkeSBleGlzdHMsIGRvIG5vdCBwdXNoLlxuXG4gICAgICAgIGlmKGNoaWxkLmRhdGEuYWR2ZXJ0aXNlcl9jYXRlZ29yeSA9PSBudWxsKSBjaGlsZC5kYXRhLmFkdmVydGlzZXJfY2F0ZWdvcnkgPSBcIlVuY2F0ZWdvcml6ZWRcIjtcblxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuaW5kZXhPZihjaGlsZC5kYXRhLmFkdmVydGlzZXJfY2F0ZWdvcnkpID09PSAtMSA/IHRoaXMuY2F0ZWdvcmllcy5wdXNoKGNoaWxkLmRhdGEuYWR2ZXJ0aXNlcl9jYXRlZ29yeSkgOiBjb25zb2xlLmxvZyhcIlRoaXMgaXRlbSBhbHJlYWR5IGV4aXN0c1wiKTtcblxuICAgICAgfSlcblxuICAgIH0sXG4gICAgZXJyb3IgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvciksXG4gICAgKCkgPT4gY29uc29sZS5sb2coXCJjb21wbGV0ZWQgY2F0ZWdvcnkgc2VydmljZVwiKVxuICBcbiAgXG4gIClcblxuICB9XG5cbiAgZ29Ub0NhdGVnb3J5KF9jYXRlZ29yeSl7XG4gICAgY29uc29sZS5sb2coX2NhdGVnb3J5KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAnL2hvbWUvY2F0ZWdvcnknLCB7IG91dGxldHM6IHsgY2F0ZWdvcnlvdXRsZXQ6IFtfY2F0ZWdvcnldIH0gfVxuICAgIF0pXG4gIH1cblxuICBzaG93QXBwSXRlbXNPblNlbGVjdGlvbihjYXRlZ29yeSl7XG4gICAgXG4gICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgdGhpcy5hcHBzRnJvbUNhdGVnb3J5ID0gW107XG4gICAgdGhpcy4gY2F0ZWdvcnlMb2FkaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuYXBwU2VydmljZS5nZXREYXRhKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgZGF0YS5kYXRhLmNoaWxkcmVuLmZvckVhY2goIGNoaWxkID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcbiAgICAgICAgaWYoY2hpbGQuZGF0YS5hZHZlcnRpc2VyX2NhdGVnb3J5ID09IGNhdGVnb3J5KXtcbiAgICAgICAgICBpZihjaGlsZC5kYXRhLmFkdmVydGlzZXJfY2F0ZWdvcnkgPT0gbnVsbCkgY2hpbGQuZGF0YS5hZHZlcnRpc2VyX2NhdGVnb3J5PVwiVW5jYXRlZ29yaXplZFwiO1xuICAgICAgICAgIHRoaXMuYXBwc0Zyb21DYXRlZ29yeS5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jYXRlZ29yeUxvYWRpbmcgPSBmYWxzZTtcblxuICAgIH0pXG4gIH1cblxuXG59XG4iXX0=