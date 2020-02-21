import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpentsComponent } from './spents/spents.component';
import { NewSpentComponent } from './new-spent/new-spent.component';
import { HttpClientModule } from '@angular/common/http';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { SpentListComponent } from './spent-list/spent-list.component';
import { SpentService } from './shared/spent.service';
import { FormsModule,ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    SpentsComponent,
    NewSpentComponent,
    SpentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [SpentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
