import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinishFailedComponent } from './list-finish-failed.component';

describe('ListFinishFailedComponent', () => {
  let component: ListFinishFailedComponent;
  let fixture: ComponentFixture<ListFinishFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFinishFailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFinishFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
