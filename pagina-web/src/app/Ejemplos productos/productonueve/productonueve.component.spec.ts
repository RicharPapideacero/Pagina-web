import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductonueveComponent } from './productonueve.component';

describe('ProductonueveComponent', () => {
  let component: ProductonueveComponent;
  let fixture: ComponentFixture<ProductonueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductonueveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductonueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
