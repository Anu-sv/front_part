import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVenderComponent } from './update-vender.component';

describe('UpdateVenderComponent', () => {
  let component: UpdateVenderComponent;
  let fixture: ComponentFixture<UpdateVenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
