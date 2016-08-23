import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import { Wine } from './wine';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class WineService {

  constructor(private http:Http) { }

  getWines(): Observable<Wine[]> {
    console.log("getWines()");
    return this.http.get("/api/v1/Wine")
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
      console.log(res);
      let body = res.json();
      return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
