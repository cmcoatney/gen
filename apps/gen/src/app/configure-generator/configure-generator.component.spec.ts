import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureGeneratorComponent } from './configure-generator.component';

describe('ConfigureGeneratorComponent', () => {
  let component: ConfigureGeneratorComponent;
  let fixture: ComponentFixture<ConfigureGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigureGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
