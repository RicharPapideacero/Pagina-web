import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcuatroComponent } from './productcuatro.component';

describe('ProductcuatroComponent', () => {
  let component: ProductcuatroComponent;
  let fixture: ComponentFixture<ProductcuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
