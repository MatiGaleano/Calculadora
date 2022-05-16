import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() valor: string = '';
  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  isOperator(valor: any): boolean {
    return isNaN(valor) && valor != '.' && valor != '=';
  }

  handlerClick(): void {
    this.onClick.emit(this.valor);
  }

}
