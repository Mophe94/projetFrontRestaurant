import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListINPROGRESSComponent } from './list-in-progress.component';

describe('ListINPROGRESSComponent', () => {
  let component: ListINPROGRESSComponent;
  let fixture: ComponentFixture<ListINPROGRESSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListINPROGRESSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListINPROGRESSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
