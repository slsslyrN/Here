import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
  imports: [IonicModule]
})
export class CameraPage implements OnInit {

  clase:string = ""
  id:string = ""
  horario:string = ""
  
  constructor(private router:Router) { 
    this.clase = this.router.getCurrentNavigation()?.extras.state?.['nombre']
    this.id = this.router.getCurrentNavigation()?.extras.state?.['id']
    this.horario = this.router.getCurrentNavigation()?.extras.state?.['horario']
    }

  ngOnInit() {
  }

}
