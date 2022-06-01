import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsieteComponent } from './productsiete.component';

describe('ProductsieteComponent', () => {
  let component: ProductsieteComponent;
  let fixture: ComponentFixture<ProductsieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsieteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
