import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheWipeConfirmationComponent } from './cache-wipe-confirmation.component';

describe('CacheWipeConfirmationComponent', () => {
  let component: CacheWipeConfirmationComponent;
  let fixture: ComponentFixture<CacheWipeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheWipeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheWipeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
