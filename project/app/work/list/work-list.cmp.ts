import { Component } from '@angular/core'

import { ProjectSvc } from '../../../service/project/project.svc'
import { WorkSvc } from '../../../service/work/work.svc'
import { TaskSvc } from '../../../service/task/task.svc'
import { WorkTypeSvc } from '../../../service/work-type/work-type.svc'

@Component({
  selector: 'work-list',
  templateUrl: 'project/app/work/list/work-list.cmp.html'
})
export class WorkListCmp {

  private firstLoad: boolean = true

  constructor(private workSvc: WorkSvc, private taskSvc: TaskSvc, private projectSvc: ProjectSvc, private workTypeSvc: WorkTypeSvc) {
    taskSvc.itemSelected$.subscribe(item => { this.firstLoad = true; this.getList() })
    taskSvc.itemChecked$.subscribe(items => { this.firstLoad = true; this.getList() })
    workSvc.onFiltered$.subscribe(items => this.getList())
    workSvc.onCreated$.subscribe(items => this.getList())
    workSvc.onEdited$.subscribe(items => this.getList())
    workSvc.onDeleted$.subscribe(items => this.getList())
  }

  getList() {
    console.log('WorkListCmp:getList')
    let query = {}
    let checkedIds = this.taskSvc.getCheckedItemsIds()
    if (this.taskSvc.selectedItem.id) {
      query = {
        task_id: '0|' + this.taskSvc.selectedItem.id
      }
    } else {
      if (checkedIds.length)
        query = { task_id: '0|' + checkedIds.join('|') }
      else
        query = { task_id: '0' }
    }
    checkedIds = this.projectSvc.getCheckedItemsIds()
    if (this.projectSvc.selectedItem.id) {
      query.project_id = '0|' + this.projectSvc.selectedItem.id
    } else {
      if (checkedIds.length)
        query.project_id = '0|' + checkedIds.join('|')
      else
        query.project_id = '0'
    }

    if (this.firstLoad) {
      this.workSvc.filteredWorkType = this.projectSvc.getCheckedsWorkTypeIds()
      this.firstLoad = false
    }
    
    if (this.workSvc.filteredWorkType.length)
      query.work_type_id = this.workSvc.filteredWorkType.join('|')
    else
      query.work_type_id = '0'
      
    this.workSvc.loaded = false    
    this.workSvc.getList(query)
  }
}