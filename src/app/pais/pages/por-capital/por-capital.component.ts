import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError:boolean = false;
  Capitales:Country[]= [];

  constructor(private paisService: PaisService){}

  Buscar(termino:string){
    this.paisService.buscarCapital(termino).subscribe(capitales=>{
      console.log(capitales);
      this.Capitales = capitales;

    },(err)=>{
      console.log('error');
      console.log(err);
      this.hayError = true
    })
  }

  sugerencias(termino:string){
    this.hayError = false;
    console.log(termino);


  }

}
