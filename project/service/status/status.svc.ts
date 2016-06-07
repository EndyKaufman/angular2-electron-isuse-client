import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ResourceSvc } from '../resource.svc';
import { Status } from './status';

@Injectable()
export class StatusSvc extends ResourceSvc {
    private resourceUrl = 'app/status';  // URL to web api

    private post(item: Status): Promise<Status> {
        return super.post(item);
    }
    
    private put(item: Status) {
        return super.put(item);
    }

    constructor(private http: Http) {
        super();
    };

    delete(item: Status) {
        return super.delete(item);
    }
    
    getList(): Promise<Status[]> {
        return super.getList();

    }
}