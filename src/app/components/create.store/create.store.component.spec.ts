import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Create.StoreComponent } from './create.store.component';

describe('Create.StoreComponent', () => {
  let component: Create.StoreComponent;
  let fixture: ComponentFixture<Create.StoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create.StoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create.StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
