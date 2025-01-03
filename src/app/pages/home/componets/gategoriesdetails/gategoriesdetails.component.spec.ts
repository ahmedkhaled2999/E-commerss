import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GategoriesdetailsComponent } from './gategoriesdetails.component';

describe('GategoriesdetailsComponent', () => {
  let component: GategoriesdetailsComponent;
  let fixture: ComponentFixture<GategoriesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GategoriesdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GategoriesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
