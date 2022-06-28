import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  constructor(private paisService: PaisService) {}

  termino: string = '';
  hayError: boolean = false;
  Paises: Country[] = [];

  sugerencias(termino:string){
    this.hayError = false;
  }

  Buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe(
      (paises) => {
        console.log(paises);
        this.Paises = paises;
      },
      (err) => {
        console.log('ERROR');
        console.log(err);
        this.hayError = true;
        this.Paises = []
      }
    );
  }
}
