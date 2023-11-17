import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Contador: {{counter}}</h3>
        <button (click)=increment(1)>+1</button>
        <button (click)=decrement(1)>-1</button>
        <button (click)="reset()">Reset</button>
        <hr>
    `
})

export class CounterComponent {
    constructor() { }

    public title: string = 'Mi primer test de Angular';
    public counter: number = 10;

    increment(value: number): void {
        this.counter += value;
    }

    decrement(value: number): void {
        this.counter -= value;
    }

    reset(): void {
        this.counter = 10;
    }

}