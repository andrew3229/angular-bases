import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({ providedIn: 'root' })
export class DbzService {

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9000
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        }
    ];

    // onDeleteId(index: number) {
    deleteCharacterByID(id: string) {
        //TODO: Emitir el index del personaje 
        this.characters = this.characters.filter(character => character.id !== id);
    }



    onNewCharacter(character: Character): void {
        const newCharacters: Character = { id: uuid(), ...character }

        this.characters.push(character);
    }

}