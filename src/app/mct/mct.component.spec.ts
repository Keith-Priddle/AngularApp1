import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MctComponent } from './mct.component';

describe('MctComponent', () => {
  let component: MctComponent;
  let fixture: ComponentFixture<MctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
