import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReadStoreComponent } from './read.store.component';

describe('Read.StoreComponent', () => {
  let component: ReadStoreComponent;
  let fixture: ComponentFixture<ReadStoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
