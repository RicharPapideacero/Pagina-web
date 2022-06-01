import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoonceComponent } from './productoonce.component';

describe('ProductoonceComponent', () => {
  let component: ProductoonceComponent;
  let fixture: ComponentFixture<ProductoonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
