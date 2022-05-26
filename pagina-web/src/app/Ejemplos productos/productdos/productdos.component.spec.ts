import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdosComponent } from './productdos.component';

describe('ProductdosComponent', () => {
  let component: ProductdosComponent;
  let fixture: ComponentFixture<ProductdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
