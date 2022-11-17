import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliGeneratorComponent } from './cli-generator.component';

describe('CliGeneratorComponent', () => {
  let component: CliGeneratorComponent;
  let fixture: ComponentFixture<CliGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CliGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CliGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
