"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service");
var ListComponent = (function () {
    function ListComponent(appService) {
        this.appService = appService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("List init");
        this.isLoading = true;
        this.appService.getData()
            .subscribe(function (result) { return _this.results = result.data.children; }, function (error) { return console.log("Error: " + error); }, function () {
            _this.isLoading = false;
        });
    };
    ListComponent.prototype.selectApp = function (app) {
        this.selectedApp = app;
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            moduleId: module.id,
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCw4Q0FBMEM7QUFTMUM7SUFRRSx1QkFDVSxVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO0lBQzdCLENBQUM7SUFFTCxnQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFYQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO2FBQ3hCLFNBQVMsQ0FDUixVQUFDLE1BQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQW5DLENBQW1DLEVBQy9DLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUksS0FBSyxDQUFDLEVBQS9CLENBQStCLEVBQ3hDO1lBQVEsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDaEMsQ0FBQyxDQUNBLENBQUM7SUFFSixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLEdBQVU7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQztJQTdCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO3lDQVV1Qix3QkFBVTtPQVR0QixhQUFhLENBK0J6QjtJQUFELG9CQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb290T2JqZWN0ICwgQ2hpbGQgfSBmcm9tICcuLi9hcHAuaW50ZXJmYWNlcyc7XG5pbXBvcnQge0FwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAuc2VydmljZSdcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgXG4gIHJlc3VsdHMgOiBDaGlsZFtdO1xuXG4gIHNlbGVjdGVkQXBwIDogQ2hpbGQ7XG5cbiAgaXNMb2FkaW5nIDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwcFNlcnZpY2UgOiBBcHBTZXJ2aWNlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICBjb25zb2xlLmxvZyhcIkxpc3QgaW5pdFwiKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cbiAgICB0aGlzLmFwcFNlcnZpY2UuZ2V0RGF0YSgpXG4gICAgLnN1YnNjcmliZShcbiAgICAgIChyZXN1bHQpID0+IHRoaXMucmVzdWx0cyA9IHJlc3VsdC5kYXRhLmNoaWxkcmVuLFxuICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyAgZXJyb3IpLFxuICAgICAgKCkgPT4geyB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgfVxuICAgICk7XG5cbiAgfVxuXG4gIHNlbGVjdEFwcChhcHA6IENoaWxkKSA6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRBcHAgPSBhcHA7XG4gIH1cblxufVxuIl19