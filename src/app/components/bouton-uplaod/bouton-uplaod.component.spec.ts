import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonUplaodComponent } from './bouton-uplaod.component';

describe('BoutonUplaodComponent', () => {
  let component: BoutonUplaodComponent;
  let fixture: ComponentFixture<BoutonUplaodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonUplaodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutonUplaodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
