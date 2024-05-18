import { TestBed } from '@angular/core/testing';

import { SidebarCollapseService } from './sidenar-collapse.service';

describe('SidebarCollapseService', () => {
  let service: SidebarCollapseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarCollapseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
