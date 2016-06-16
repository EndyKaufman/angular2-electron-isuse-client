import { Component, EventEmitter }       from '@angular/core'

import {UiSvc} from '../../../../service/ui.svc'

import {Work} from '../../../../service/work/work'
import {WorkSvc} from '../../../../service/work/work.svc'
import {WorkInputsCmp} from '../../inputs/work-inputs.cmp'

@Component({
  selector: 'work-modal-edit',
  templateUrl: 'project/app/work/modal/edit/work-modal-edit.cmp.html',
  directives: [WorkInputsCmp]
})
export class WorkModalEditCmp {
  private item: Work
  private spent_on_for_input: string

  constructor(private workSvc: WorkSvc, private uiSvc: UiSvc) {
    workSvc.onEdit$.subscribe(item => this.onEdit(item))
    workSvc.onDeleted$.subscribe(item => this.uiSvc.hideModal('work-modal-edit'))
  }

  onEdit(item: Work) {
    this.item = item
    this.item.spent_on_for_input = this.workSvc.getSpentOnForInput(item.spent_on)
    this.uiSvc.showModal('work-modal-edit', (action) => {
      if (action == 'delete') {
        this.workSvc.onDelete(this.item)
        return false
      }
      return true
    }).then(
      action => {
        this.item.spent_on = this.workSvc.getSpentOnFromInput(this.item.spent_on_for_input)
        this.workSvc.edit(this.item)
      }, action => { })
  }
}