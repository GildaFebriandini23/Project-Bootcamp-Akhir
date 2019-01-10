import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarikTunaiFormComponent } from './tarik-tunai-form.component';

describe('TarikTunaiFormComponent', () => {
  let component: TarikTunaiFormComponent;
  let fixture: ComponentFixture<TarikTunaiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarikTunaiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarikTunaiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
