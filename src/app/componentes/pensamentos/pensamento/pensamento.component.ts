import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit{

  @Input() pensamento: Pensamento ={
    id:0,
    conteudo: 'i love angular',
    autoria: 'Arthur',
    modelo: 'modelo3'
  }


    constructor() { }

    ngOnInit(): void {

    }

    larguraPensamento(): string{
      if(this.pensamento.conteudo.length  >= 256){
        return 'pensamento-g'
      }
      return 'pensamento-p'
    }
}
