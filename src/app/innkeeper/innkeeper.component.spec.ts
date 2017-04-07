import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnkeeperComponent } from './innkeeper.component';

describe('InnkeeperComponent', () => {
  let component: InnkeeperComponent;
  let fixture: ComponentFixture<InnkeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnkeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnkeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
