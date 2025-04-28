import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercomandsComponent } from './othercomands.component';

describe('OthercomandsComponent', () => {
  let component: OthercomandsComponent;
  let fixture: ComponentFixture<OthercomandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthercomandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthercomandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
