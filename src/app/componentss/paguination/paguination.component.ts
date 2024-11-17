import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paguination',
  templateUrl: './paguination.component.html',
  styleUrls: ['./paguination.component.scss']
})
export class PaguinationComponent {
  @Input() totalItems: number = 0; // Total de elementos a mostrar
  @Input() selectOptions: number[] = []; // Opciones para seleccionar la cantidad de elementos por página
  @Input() selectedOption: number = 5; // Opción seleccionada por defecto
  @Output() optionChange = new EventEmitter<number>(); // Emitir cambios en la opción seleccionada

  onSelectChange(): void {
    this.optionChange.emit(this.selectedOption); // Emitir el cambio al componente padre
  }
}