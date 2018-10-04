import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JediModule } from './jedi/jedi.module';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    JediModule,
    CounterModule,
    FormsModule,
    BrowserModule,
    StoreModule.forRoot({ })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
