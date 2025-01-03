import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentbrandComponent } from './recentbrand.component';

describe('RecentbrandComponent', () => {
  let component: RecentbrandComponent;
  let fixture: ComponentFixture<RecentbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentbrandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
