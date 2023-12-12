import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFailedComponent } from './list-failed.component';

describe('ListFailedComponent', () => {
  let component: ListFailedComponent;
  let fixture: ComponentFixture<ListFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFailedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
