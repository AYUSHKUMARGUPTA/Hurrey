import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomKendoMultiselectFilterComponent } from './custom-kendo-multiselect-filter.component';

describe('CustomKendoMultiselectFilterComponent', () => {
  let component: CustomKendoMultiselectFilterComponent;
  let fixture: ComponentFixture<CustomKendoMultiselectFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomKendoMultiselectFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomKendoMultiselectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
