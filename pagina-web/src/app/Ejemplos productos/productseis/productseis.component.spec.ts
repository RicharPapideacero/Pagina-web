import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductseisComponent } from './productseis.component';

describe('ProductseisComponent', () => {
  let component: ProductseisComponent;
  let fixture: ComponentFixture<ProductseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductseisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
