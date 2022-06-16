import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentComponent } from './common-component/common-component.component';
import { StudentslistComponent } from './studentslist/studentslist.component';

@NgModule({
  declarations: [AppComponent, StudentslistComponent, CommonComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
