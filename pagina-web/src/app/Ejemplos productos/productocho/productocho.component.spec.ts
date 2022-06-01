import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductochoComponent } from './productocho.component';

describe('ProductochoComponent', () => {
  let component: ProductochoComponent;
  let fixture: ComponentFixture<ProductochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductochoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
