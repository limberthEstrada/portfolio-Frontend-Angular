import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  navegacion:any;
  celular:any;
  cursos:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.navegacion = data.navegacion,
      this.celular = data.celular
    })
    
    this.datosPortfolio.obtenerDatosCursos().subscribe(data => {
      this.cursos = data
      console.log(data)
    })
  }

}
