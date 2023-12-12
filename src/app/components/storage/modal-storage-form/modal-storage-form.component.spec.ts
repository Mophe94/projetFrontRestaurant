import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStorageFormComponent } from './modal-storage-form.component';

describe('ModalStorageFormComponent', () => {
  let component: ModalStorageFormComponent;
  let fixture: ComponentFixture<ModalStorageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalStorageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalStorageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
