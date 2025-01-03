import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranditemComponent } from './branditem.component';

describe('BranditemComponent', () => {
  let component: BranditemComponent;
  let fixture: ComponentFixture<BranditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranditemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BranditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
