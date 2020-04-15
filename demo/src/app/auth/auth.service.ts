import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {HttpClient} from "@angular/common/http";
import {IUser, UserService} from "src/app/users/user.service";
import {AuthProvider} from "src/app/auth/auth.provider";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * @property loggedIn$
   * @type {BehaviorSubject<boolean>}
   */
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);


  /**
   * @constructor
   * @param {HttpClient} _http
   * @param {UserService} _userService
   * @param {AuthProvider} _authProvider
   */
  constructor(private readonly _http: HttpClient,
              private readonly _userService: UserService,
              private readonly _authProvider: AuthProvider) {

    // if (this._tokenExist()) {
      // this._checkLogin(); // or
      this._checkLoginWithProvider();
    // }
  }


  private _tokenExist(): string {
    return localStorage.getItem('token');
  }

  /**
   * @property _checkLogin
   * @private
   */
  private _checkLogin(): void {
    this._http.get('http://localhost/check-token')
      .toPromise().then((user: IUser) => {
      this._userService.assignUser(user);
      this.loggedIn$.next(true)
    })
      .catch((error: Error) => {
        console.error(`Problem with user check: ${error.message}`);
      })
  }

  /**
   * @property _checkLoginWithProvider
   * @private
   */
  private _checkLoginWithProvider(): void {
    this._authProvider.checkLogin().subscribe((user: IUser) => {
        this._userService.assignUser(user);
        this.loggedIn$.next(true)
      },
      (error: Error) => {
        console.error(`Problem with user check: ${error.message}`);
      })
  }
}
