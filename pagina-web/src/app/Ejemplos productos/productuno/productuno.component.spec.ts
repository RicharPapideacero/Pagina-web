import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductunoComponent } from './productuno.component';

describe('ProductunoComponent', () => {
  let component: ProductunoComponent;
  let fixture: ComponentFixture<ProductunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
