import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSenderComponent } from './form-sender.component';

describe('FormSenderComponent', () => {
  let component: FormSenderComponent;
  let fixture: ComponentFixture<FormSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
