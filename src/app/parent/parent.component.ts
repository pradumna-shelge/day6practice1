import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  mainArray=['1','2']

  addItem1(newItem: string) {
    this.mainArray.push(newItem);
  }
}
