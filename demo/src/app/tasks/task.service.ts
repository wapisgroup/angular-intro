import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs/internal/observable/of";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  list$: Observable<any[]>;


  constructor(private _http: HttpClient){
    // this.list$ = this._http.get<any[]>('http://localhost/get-list');
    this.list$ = of([{id:1, name: 'task number 1', done: true}, {id: 2, name: 'task number 2', done: false},  {id: 3, name: 'task number 3', done: false}]);
  }
}
