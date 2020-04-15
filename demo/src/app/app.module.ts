import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthService} from "src/app/auth/auth.service";
import {AuthProvider} from "src/app/auth/auth.provider";
import {UserService} from "src/app/users/user.service";
import {HttpClientModule} from "@angular/common/http";
import {TaskService} from "src/app/tasks/task.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthProvider, UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
