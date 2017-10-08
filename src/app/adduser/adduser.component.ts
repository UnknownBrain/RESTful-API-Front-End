import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewService } from '../services/services.viewService';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private http: HttpClient, private view: ViewService) { }

  private alertPointer: number = 0;
  private submitted: boolean = false;

  ngOnInit() {
  }

  onAddUser(inputData: any): void {
    this.submitted = true;
    this.http.post("http://localhost:52899/api/Student/RegisterStudent", inputData).subscribe(response => {
      switch(response["Message"]) {
        case "student_registered": this.alertPointer = 1; break;
        default: this.alertPointer = 2; break;
      }

        setTimeout(() => {
          this.alertPointer = 0;
          this.view.setViewModel(1);
        }, 2000);
    });
  }
}
