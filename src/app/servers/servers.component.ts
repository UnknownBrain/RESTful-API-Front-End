import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ViewService } from '../services/services.viewService';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  constructor(private http: HttpClient, private view: ViewService) { 
  }

  results: string[];
  viewComponent : number;

  ngOnInit() {
    this.view.setViewModel(1);
  }

  onLoadData(): void {
    this.view.setViewModel(1);
  }

  onAddUser(): void {
    this.view.setViewModel(2);
  }
}
