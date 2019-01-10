import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarikTunaiListComponent } from './tarik-tunai-list.component';

describe('TarikTunaiListComponent', () => {
  let component: TarikTunaiListComponent;
  let fixture: ComponentFixture<TarikTunaiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarikTunaiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarikTunaiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
