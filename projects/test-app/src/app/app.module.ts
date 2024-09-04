import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { QyrusAppModule } from 'qyrus-app';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    QyrusAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
