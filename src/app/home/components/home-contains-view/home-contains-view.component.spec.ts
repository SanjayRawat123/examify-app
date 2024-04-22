import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContainsViewComponent } from './home-contains-view.component';

describe('HomeContainsViewComponent', () => {
  let component: HomeContainsViewComponent;
  let fixture: ComponentFixture<HomeContainsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContainsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeContainsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
