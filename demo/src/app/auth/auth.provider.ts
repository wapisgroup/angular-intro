import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IUser} from "src/app/users/user.service";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class AuthProvider {


  constructor(private readonly _http: HttpClient) {
  }

  /**
   * @property checkLogin
   * @public
   */
  public checkLogin(): Observable<IUser> {
    // return this._http.get<IUser>('http://localhost/check-token');

    const mockResponse: IUser = {
      username: 'Zbynek',
      lastLogin: new Date()
    }

    return of(mockResponse)
  }
}
