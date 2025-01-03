import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GategoriesComponent } from './gategories.component';

describe('GategoriesComponent', () => {
  let component: GategoriesComponent;
  let fixture: ComponentFixture<GategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
