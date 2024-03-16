import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RendezPipe } from './rendez.pipe';
import { KeresoPipe } from './kereso.pipe';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { Environments } from 'src/environments';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    UpdateComponent,
    NavComponent,
    RendezPipe,
    KeresoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
