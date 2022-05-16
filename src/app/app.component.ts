import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  entrada: string = '0';

  addInput(valor: string){

    if(valor === '='){
      console.log(this.entrada);
      this.entrada = evaluate(this.entrada);
    } else if(valor == '0'){
      this.entrada == '';
  } else {
      this.entrada += valor;
    }
}

  clear(){
    this.entrada = '0';
  }

}