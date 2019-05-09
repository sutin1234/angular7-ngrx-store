import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Read.StoreComponent } from './read.store.component';

describe('Read.StoreComponent', () => {
  let component: Read.StoreComponent;
  let fixture: ComponentFixture<Read.StoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Read.StoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Read.StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
