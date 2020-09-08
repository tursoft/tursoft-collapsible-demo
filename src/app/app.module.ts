import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TursoftCollapsibleModule } from 'tursoft-collapsible';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    TursoftCollapsibleModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
