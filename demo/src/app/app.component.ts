import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {IUser, UserService} from "src/app/users/user.service";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {AuthService} from "src/app/auth/auth.service";
import {TaskService} from "src/app/tasks/task.service";
import {Observable} from "rxjs/internal/Observable";
import {filter, map, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public userDetails: IUser;

  constructor(private readonly _userService: UserService,
              private readonly _authService: AuthService,
              private readonly _taskService: TaskService) {
  }

  public get user$(): BehaviorSubject<IUser> {
    return this._userService.user$
  }


  public ngOnInit(): void {
    this._userService.user$.subscribe((user: IUser) => {
      this.userDetails = user;
      console.log('User:', user);
    });
  }

  public get taskList$():Observable<any[]> {
    return this._taskService.list$
  }

  public get taskListDone$():Observable<any[]> {
    return this._taskService.list$.pipe(
      tap((item) => console.log(item)),
      map((result: any[]) => result.filter((item:any) => item.done === true))
    )
  }

  public ngOnDestroy(): void {
    this._userService.user$.unsubscribe();
  }


}
