import {Component, Input} from '@angular/core';
import {SnotifyButton} from '../../interfaces/SnotifyButton.interface';

@Component({
  selector: 'ng-snotify-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

/**
 * Buttons component
 */
export class ButtonsComponent {
  /**
   * Get buttons Array
   */
  @Input() buttons: SnotifyButton[];
  /**
   * Get prompt input value
   */
  @Input() text: string;
  /**
   * Get toast id
   */
  @Input() id: number;
  constructor() {}
}
