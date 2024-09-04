import { NgModule } from '@angular/core';
import { QyrusAppComponent } from './qyrus-app.component';
import { CalculatorComponent } from './calculator/calculator.component';



@NgModule({
  declarations: [
    QyrusAppComponent,
    CalculatorComponent
  ],
  imports: [
  ],
  exports: [
    QyrusAppComponent
  ]
})
export class QyrusAppModule { }
