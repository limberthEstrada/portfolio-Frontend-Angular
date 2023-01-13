import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any;
  skillsImg:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.skillsImg = data.Sobre_mi.skills;
      console.log("##########")
      console.log(data.Sobre_mi.skills)
    })

    this.datosPortfolio.obtenerDatosSkills().subscribe(data => {
      this.skills = data;
      console.log("-------------SKILSS")
      console.log(data)
      console.log("---------------fin skilss")
    })
  }
}
