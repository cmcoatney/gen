import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gen-x-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBlockComponent {
  @Input() listingName = '';
  @Input() code = '';
}
