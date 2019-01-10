import { TestBed } from '@angular/core/testing';

import { TarikTunaiService } from './tarik-tunai.service';

describe('TarikTunaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarikTunaiService = TestBed.get(TarikTunaiService);
    expect(service).toBeTruthy();
  });
});
