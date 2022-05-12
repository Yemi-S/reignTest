import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageAreaComponent } from './language-area.component';

describe('LanguageAreaComponent', () => {
  let component: LanguageAreaComponent;
  let fixture: ComponentFixture<LanguageAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
