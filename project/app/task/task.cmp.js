"use strict";
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
var project_svc_1 = require('../../service/project/project.svc');
var task_header_cmp_1 = require('./header/task-header.cmp');
var task_header_buttons_cmp_1 = require('./header/buttons/task-header-buttons.cmp');
var task_list_cmp_1 = require('./list/task-list.cmp');
var TaskCmp = (function () {
    function TaskCmp(projectSvc) {
        this.projectSvc = projectSvc;
    }
    TaskCmp = __decorate([
        core_1.Component({
            selector: 'task',
            templateUrl: 'project/app/task/task.cmp.html',
            directives: [task_header_cmp_1.TaskHeaderCmp, task_list_cmp_1.TaskListCmp, task_header_buttons_cmp_1.TaskHeaderButtonsCmp]
        }), 
        __metadata('design:paramtypes', [project_svc_1.ProjectSvc])
    ], TaskCmp);
    return TaskCmp;
}());
exports.TaskCmp = TaskCmp;
//# sourceMappingURL=task.cmp.js.map