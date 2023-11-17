import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteId(index: number): void {
  //   //TODO: Emitir el index del personaje 
  //   this.onDelete.emit(index);
  // }


  onDeleteId(id?: string): void {
    //TODO: Emitir el index del personaje 
    if (!id) return;
    this.onDelete.emit(id);
  }

  onDeleteCharacter(index: number): void {
    //TODO: Emitir el index del personaje 
    console.log({ index });

  }
}
