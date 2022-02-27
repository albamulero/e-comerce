import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email2';
}

function Modificar_texto() {
  document.getElementById("hex_1").innerHTML = "Prueba"
  alert("Funcion de modificar texto")
}
