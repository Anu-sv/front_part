import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderProductPageComponent } from './vender-product-page.component';

describe('VenderProductPageComponent', () => {
  let component: VenderProductPageComponent;
  let fixture: ComponentFixture<VenderProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenderProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
