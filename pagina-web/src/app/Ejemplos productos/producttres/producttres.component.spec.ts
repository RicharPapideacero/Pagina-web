import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttresComponent } from './producttres.component';

describe('ProducttresComponent', () => {
  let component: ProducttresComponent;
  let fixture: ComponentFixture<ProducttresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
