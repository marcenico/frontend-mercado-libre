import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPathComponent } from './category-path.component';

describe('CategoryPathComponent', () => {
  let component: CategoryPathComponent;
  let fixture: ComponentFixture<CategoryPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
