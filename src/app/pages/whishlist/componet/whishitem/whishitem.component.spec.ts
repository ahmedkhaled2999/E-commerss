import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishitemComponent } from './whishitem.component';

describe('WhishitemComponent', () => {
  let component: WhishitemComponent;
  let fixture: ComponentFixture<WhishitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhishitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhishitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
