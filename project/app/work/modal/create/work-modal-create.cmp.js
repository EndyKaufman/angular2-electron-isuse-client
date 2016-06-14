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
var ui_svc_1 = require('../../../../service/ui.svc');
var work_type_svc_1 = require('../../../../service/work-type/work-type.svc');
var project_svc_1 = require('../../../../service/project/project.svc');
var task_svc_1 = require('../../../../service/task/task.svc');
var work_svc_1 = require('../../../../service/work/work.svc');
var work_inputs_cmp_1 = require('../../inputs/work-inputs.cmp');
var WorkModalCreateCmp = (function () {
    function WorkModalCreateCmp(projectSvc, taskSvc, workSvc, workTypeSvc, uiSvc) {
        var _this = this;
        this.projectSvc = projectSvc;
        this.taskSvc = taskSvc;
        this.workSvc = workSvc;
        this.workTypeSvc = workTypeSvc;
        this.uiSvc = uiSvc;
        workSvc.onCreate$.subscribe(function (active) { return _this.onCreate(active); });
    }
    WorkModalCreateCmp.prototype.onCreate = function (active) {
        var _this = this;
        this.tasksByProject = { 0: [] };
        this.workTypesByProject = { 0: [] };
        var _loop_1 = function(project) {
            this_1.tasksByProject[project.id] = this_1.taskSvc.items.filter(function (item) { return item.project_id == project.id; });
            this_1.workTypesByProject[project.id] = this_1.workTypeSvc.items.filter(function (item) { return project.work_type.indexOf(item.id) != -1; });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.projectSvc.items; _i < _a.length; _i++) {
            var project = _a[_i];
            _loop_1(project);
        }
        if (this.projectSvc.items.length && !this.workSvc.editItem.project_id) {
            var project = this.projectSvc.items[0];
            this.workSvc.editItem.project_id = project.id;
            if (this.tasksByProject[project.id][0])
                this.workSvc.editItem.task_id = this.tasksByProject[project.id][0].id;
            else
                this.workSvc.editItem.task_id = 0;
            if (this.workTypesByProject[project.id][0])
                this.workSvc.editItem.work_type_id = this.workTypesByProject[project.id][0].id;
            else
                this.workSvc.editItem.work_type_id = 0;
        }
        if (this.projectSvc.selectedItem.id)
            this.workSvc.editItem.project_id = this.projectSvc.selectedItem.id;
        if (this.taskSvc.selectedItem.id)
            this.workSvc.editItem.task_id = this.taskSvc.selectedItem.id;
        if (this.workSvc.filteredWorkType.length)
            this.workSvc.editItem.work_type_id = this.workSvc.filteredWorkType[0];
        this.uiSvc.showModal('work-modal-create').then(function (el) {
            _this.workSvc.create(_this.workSvc.editItem);
        });
    };
    WorkModalCreateCmp = __decorate([
        core_1.Component({
            selector: 'work-modal-create',
            templateUrl: 'project/app/work/modal/create/work-modal-create.cmp.html',
            directives: [work_inputs_cmp_1.WorkInputsCmp]
        }), 
        __metadata('design:paramtypes', [project_svc_1.ProjectSvc, task_svc_1.TaskSvc, work_svc_1.WorkSvc, work_type_svc_1.WorkTypeSvc, ui_svc_1.UiSvc])
    ], WorkModalCreateCmp);
    return WorkModalCreateCmp;
}());
exports.WorkModalCreateCmp = WorkModalCreateCmp;
//# sourceMappingURL=work-modal-create.cmp.js.map