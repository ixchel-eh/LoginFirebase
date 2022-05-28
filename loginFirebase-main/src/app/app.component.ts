import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
usuario={
  email:'',
  password:''
}

constructor(private authService: AuthService){

}

ingresar(){
  console.log(this.usuario)
  const {email,password} = this.usuario
  this.authService.login(email,password).then(res=>{
    console.log("Se registro",res);
  })
}

ingresarConGoogle(){
  console.log(this.usuario)
  const {email,password} = this.usuario
  this.authService.loginWithGoogle(email,password).then(res=>{
    console.log("Se registro",res);
  })
}

/*obtenerUsuarioLogeado(){
this.authService.getUserLogged().subscribe(res=>{
  console.log(res?.email)
})
}*/
logout(){
  this.authService.logout();
}
}
