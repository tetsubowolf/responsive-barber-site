import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgPictureComponent } from './bg-picture.component';

describe('BgPictureComponent', () => {
  let component: BgPictureComponent;
  let fixture: ComponentFixture<BgPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
