import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

export interface IUser {
  username: string;
  lastLogin: Date
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * @property user$
   * @type {BehaviorSubject<IUser>}
   * @public
   */
  public user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  /**
   * @method assignUser
   * @param {IUser} user
   * @return void
   */
  public assignUser(user:IUser): void{
    this.user$.next(user);
  }

  /**
   * Getter for user property  (returns a value of user$ behaviour subject)
   *
   * @property user
   * @return {IUser}
   */
  public get user():IUser {
    return this.user$.value;
  }
}
