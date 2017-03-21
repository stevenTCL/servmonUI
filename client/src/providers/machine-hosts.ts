import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Hosts } from '../models/hosts';

/*
  Generated class for the Hosts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.

  This provider provides the brief host data retrieved from the gateway server
  using Http service
*/
@Injectable()
export class MachineHosts {

  constructor(public http: Http) {
   
  }

  getHosts(): Observable<Hosts[]> {

    // Set the URL
    const url = 'http://localhost:5000/api/hosts'; 

    // Set Content-Type to application/json'
    const headers = new Headers({ 'Content-Type': 'application/json' });

    // Set query params
    const params = new URLSearchParams();

    const options = new RequestOptions({ headers: headers, search: params });

    // Return the get result;
    return this.http.get(url, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let json = res.json();
    return <Hosts[]>json || { };
  }

  private handleError(error: Response | any) {

    console.log(error);

    if (error instanceof Response) {
        return Observable.throw(error.json());
    } else {
        return Observable.throw({error: error.toString()}); 
    }
  }

}
