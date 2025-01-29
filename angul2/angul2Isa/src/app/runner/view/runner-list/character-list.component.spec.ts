import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerListComponent } from './runner-list.component';

describe('RunnerListComponent', () => {
  let component: RunnerListComponent;
  let fixture: ComponentFixture<RunnerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RunnerListComponent]
    });
    fixture = TestBed.createComponent(RunnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
