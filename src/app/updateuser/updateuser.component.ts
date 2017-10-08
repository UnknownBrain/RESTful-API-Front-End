import { Component, OnInit } from '@angular/core';
import { ViewService } from '../services/services.viewService';
import { HttpClient } from '@angular/common/http';

import { DatabaseContextService } from '../services/services.dbcontext';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private view: ViewService, private dbContext: DatabaseContextService, private http: HttpClient) { }

  alertPointer: number = 0;
  submitted: boolean = false;

  ngOnInit() {
  }

  onUpdateUser(userData: string) {
    //console.log(this.dbContext.getUserData());
    this.submitted = true;
    this.dbContext.setUserData(userData);

    this.http.put("http://localhost:52899/api/Student/UpdateStudent", this.dbContext.getUserData()).subscribe(response => {
      switch(response["Message"]) {
        case "student_updated": this.alertPointer = 1; break;
        default: this.alertPointer = 2; break;
      }

        setTimeout(() => {
          this.alertPointer = 0;
          this.view.setViewModel(1);
        }, 2000);
    });
  }

  onCancelUpdate() {
    this.view.setViewModel(1);
  }
}
