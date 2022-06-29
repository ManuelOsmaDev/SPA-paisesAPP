import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
    margin-right:10px;
    }
  `
  ]
})
export class PorRegionComponent {
  regiones:string[]=['UE','EFTA','CARICOM','AP','AU','USAN','UEE','AL','ASEAN','CAIS','CEFTA','TLCAN','SAARC',];
  regionActiva: string = '';
  paises:Country[]=[];

  constructor(private paisService:PaisService){}

  activarRegion(region:string){
    this.regionActiva = region;
    this.paisService.buscarRegion(region).subscribe(paises=>{
      this.paises = paises;
    })
  }

  getClase(region:string):string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

}
