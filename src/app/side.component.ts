import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector : 'side-component',
    templateUrl : './side.component.html'
})

export class SideComponent{
    count = 3;

    onClick(): void{
        alert("Clicked "+this.count);
    }
}