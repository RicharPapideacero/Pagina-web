import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcincoComponent } from './productcinco.component';

describe('ProductcincoComponent', () => {
  let component: ProductcincoComponent;
  let fixture: ComponentFixture<ProductcincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcincoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
