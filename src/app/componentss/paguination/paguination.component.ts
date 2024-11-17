import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paguination',
  templateUrl: './paguination.component.html',
  styleUrls: ['./paguination.component.scss']
})
export class PaguinationComponent {
  @Input() totalItems: number = 0;
  @Input() selectOptions: number[] = [];
  @Input() selectedOption: number = 5;
  @Output() optionChange = new EventEmitter<number>();
  onSelectChange(): void {
    this.optionChange.emit(this.selectedOption);
  }
}