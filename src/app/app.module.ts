import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

import { ViewService } from './services/services.viewService';
import { DatabaseContextService } from './services/services.dbcontext';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    AdduserComponent,
    ListusersComponent,
    UpdateuserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ViewService, DatabaseContextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
