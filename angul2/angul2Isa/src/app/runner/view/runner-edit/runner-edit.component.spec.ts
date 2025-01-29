import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerEditComponent } from './runner-edit.component';

describe('RunnerEditComponent', () => {
  let component: RunnerEditComponent;
  let fixture: ComponentFixture<RunnerEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunnerEditComponent]
    });
    fixture = TestBed.createComponent(RunnerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

