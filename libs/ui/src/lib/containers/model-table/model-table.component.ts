import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'gen-x-model-table',
  templateUrl: './model-table.component.html',
  styleUrls: ['./model-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
