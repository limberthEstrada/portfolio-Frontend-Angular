import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json')
  }
  
  obtenerDatosCursos():Observable<any>{
    return this.http.get('https://argentina-programa-api-backend-production.up.railway.app/cursos/list')
  }

  obtenerDatosPersonaImgAuxPortfolio():Observable<any>{
    return this.http.get('https://argentina-programa-api-backend-production.up.railway.app/imgauxportfolio/list')
  }
  obtenerDatosImagenProyecto():Observable<any>{
    return this.http.get('https://argentina-programa-api-backend-production.up.railway.app/imgproyectos/list')
  }
  obtenerDatosPersona():Observable<any>{
    return this.http.get('https://argentina-programa-api-backend-production.up.railway.app/personas/list')
  }
  obtenerDatosProyecto():Observable<any>{
    return this.http.get('https://argentina-programa-api-backend-production.up.railway.app/proyectos/list')
  }
  obtenerDatosRed():Observable<any>{
    return this.http.get('https://argentina-programa-api-backend-production.up.railway.app/redes/list')
  }
  obtenerDatosSkills():Observable<any>{
    return this.http.get('https://argentina-programa-api-backend-production.up.railway.app/skills/list')
  }
  
  
}
