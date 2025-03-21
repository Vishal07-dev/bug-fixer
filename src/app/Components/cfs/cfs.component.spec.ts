import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfsComponent } from './cfs.component';

describe('CfsComponent', () => {
  let component: CfsComponent;
  let fixture: ComponentFixture<CfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CfsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
