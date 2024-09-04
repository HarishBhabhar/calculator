import { TestBed } from '@angular/core/testing';

import { QyrusAppService } from './qyrus-app.service';

describe('QyrusAppService', () => {
  let service: QyrusAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QyrusAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
