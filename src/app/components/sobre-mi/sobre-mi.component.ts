import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  descripcion:any;
  contacto:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersona().subscribe(data => {
      this.descripcion = data[0].presentacion;
      console.log(")))))))))))))")
      console.log(data)
    })

    this.datosPortfolio.obtenerDatosRed().subscribe(data => {
      this.contacto = data;
      console.log("NDEAAAAAAAAaa")
      console.log(data)
    })
  }
}
