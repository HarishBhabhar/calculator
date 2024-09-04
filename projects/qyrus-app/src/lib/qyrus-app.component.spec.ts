import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QyrusAppComponent } from './qyrus-app.component';

describe('QyrusAppComponent', () => {
  let component: QyrusAppComponent;
  let fixture: ComponentFixture<QyrusAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QyrusAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QyrusAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
