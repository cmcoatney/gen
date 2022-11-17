import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gen-x-cli-generator',
  templateUrl: './cli-generator.component.html',
  styleUrls: ['./cli-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CliGeneratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
