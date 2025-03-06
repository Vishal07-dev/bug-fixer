import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixingBugComponent } from './fixing-bug.component';

describe('FixingBugComponent', () => {
  let component: FixingBugComponent;
  let fixture: ComponentFixture<FixingBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixingBugComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixingBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
