import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductodiesComponent } from './productodies.component';

describe('ProductodiesComponent', () => {
  let component: ProductodiesComponent;
  let fixture: ComponentFixture<ProductodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductodiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
