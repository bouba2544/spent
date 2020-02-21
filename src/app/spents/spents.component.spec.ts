import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpentsComponent } from './spents.component';

describe('SpentsComponent', () => {
  let component: SpentsComponent;
  let fixture: ComponentFixture<SpentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
