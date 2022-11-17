import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gen-x-configure-generator',
  templateUrl: './configure-generator.component.html',
  styleUrls: ['./configure-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigureGeneratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
