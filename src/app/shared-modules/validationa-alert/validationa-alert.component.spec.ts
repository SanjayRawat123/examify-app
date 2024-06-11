import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationalAlertComponent } from './validationa-alert.component';

describe('ValidationalAlertComponent', () => {
  let component: ValidationalAlertComponent;
  let fixture: ComponentFixture<ValidationalAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationalAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
