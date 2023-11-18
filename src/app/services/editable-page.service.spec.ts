import { TestBed } from '@angular/core/testing';

import { EditablePageService } from './editable-page.service';

describe('EditablePageService', () => {
  let service: EditablePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditablePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
