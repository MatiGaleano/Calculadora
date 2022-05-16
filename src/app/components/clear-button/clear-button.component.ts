import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.css']
})
export class ClearButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handlerClick(){
    this.onClick.emit();
  }

}
