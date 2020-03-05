import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpentsComponent } from './spents/spents.component';
import { NewSpentComponent } from './new-spent/new-spent.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'
// libs of date picker
import { environment } from 'src/environments/environment';
import { SpentListComponent } from './spent-list/spent-list.component';
import { SpentService } from './shared/spent.service';
import { FormsModule,ReactiveFormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    SpentsComponent,
    NewSpentComponent,
    SpentListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
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
