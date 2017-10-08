import { Component, OnInit, Input } from '@angular/core';

import { ViewService } from '../services/services.viewService';

import { DatabaseContextService } from '../services/services.dbcontext';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  constructor(private view: ViewService, private singleUserData: DatabaseContextService, private http: HttpClient) { }

  @Input("users") users: string[];

  deleteItem: boolean;
  deleteUser: number;
  alertPointer: number;

  ngOnInit() {
    this.http.get("http://localhost:52899/api/Student/ListStudents").subscribe(response => {
      this.users = response["Users"];
    });

    this.alertPointer = 0;
  }

  onUpdateUser(userData: string) {
    //console.log(userData);
    
    this.singleUserData.setUserData(userData);
    this.view.setViewModel(3);
  }

  onDeleteUser(studentId: number) {
    this.deleteUser = studentId;
    this.deleteItem = true;
  }

  onCancelDelete(): void {
    this.deleteItem = false;
  }

  onDeleteItem() {
    this.deleteItem = false;

    this.http.delete("http://localhost:52899/api/Student/DeleteStudent?studentId=" + this.deleteUser).subscribe(response => {
      switch(response["Message"]) {
        case "student_deleted": 
          this.http.get("http://localhost:52899/api/Student/ListStudents").subscribe(response => {
            this.users = response["Users"];
          });

          this.alertPointer = 1; 
          break;
        default: this.alertPointer = 2; break;
      }

        setTimeout(() => {
          this.alertPointer = 0;
        }, 2000);
    });
  }
}
