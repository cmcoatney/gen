import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGeneratorComponent } from './feature-generator.component';

describe('FeatureGeneratorComponent', () => {
  let component: FeatureGeneratorComponent;
  let fixture: ComponentFixture<FeatureGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
