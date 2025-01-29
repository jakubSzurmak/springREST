import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerAddComponent } from './runner-add.component';

describe('RunnerAddComponent', () => {
  let component: RunnerAddComponent;
  let fixture: ComponentFixture<RunnerAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunnerAddComponent]
    });
    fixture = TestBed.createComponent(RunnerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
