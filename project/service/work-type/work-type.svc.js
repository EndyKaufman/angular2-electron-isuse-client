"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var items_svc_1 = require('../items.svc');
var work_type_resource_svc_1 = require('./work-type-resource.svc');
var work_type_1 = require('./work-type');
var WorkTypeSvc = (function (_super) {
    __extends(WorkTypeSvc, _super);
    function WorkTypeSvc(http) {
        _super.call(this, http);
        this.http = http;
        this.items = [];
        this.selectedItem = new work_type_1.WorkType();
        this.resource = new work_type_resource_svc_1.WorkTypeResourceSvc(http);
    }
    WorkTypeSvc.prototype.getList = function (query) {
        return _super.prototype.getList.call(this, query);
    };
    WorkTypeSvc = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WorkTypeSvc);
    return WorkTypeSvc;
}(items_svc_1.ItemsSvc));
exports.WorkTypeSvc = WorkTypeSvc;
//# sourceMappingURL=work-type.svc.js.map