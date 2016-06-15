import { Component }       from '@angular/core'

import {WorkSvc} from '../../../service/work/work.svc'
import {WorkModalCreateCmp} from './create/work-modal-create.cmp'
import {WorkModalEditCmp} from './edit/work-modal-edit.cmp'
import {WorkModalDeleteCmp} from './delete/work-modal-delete.cmp'

@Component({
  selector: 'work-modal',
  templateUrl: 'project/app/work/modal/work-modal.cmp.html',
  directives: [WorkModalCreateCmp, WorkModalEditCmp, WorkModalDeleteCmp]
})
export class WorkModalCmp {
  constructor(private workSvc: WorkSvc) { }
}