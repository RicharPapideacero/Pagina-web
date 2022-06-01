import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductodoceComponent } from './productodoce.component';

describe('ProductodoceComponent', () => {
  let component: ProductodoceComponent;
  let fixture: ComponentFixture<ProductodoceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductodoceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductodoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
