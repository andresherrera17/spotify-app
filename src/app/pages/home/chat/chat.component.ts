import { Component, OnInit } from '@angular/core';
import { IMensaje } from 'src/app/interfaces/mensaje.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  mensajesChat: IMensaje[] = [];
  elemento: any;
  constructor(private _serviceChat: ChatService, public _serviceAuth: AuthService) {
    this._serviceChat.cargarMensajes().subscribe((mensajes: IMensaje[]) => {
      this.mensajesChat = mensajes;
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    })
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }


  enviarMensaje() {
    if (this.mensaje == "") {
      return;
    }

    this._serviceChat.agregarMensajes(this.mensaje)
      .then(() => this.mensaje = "")
      .catch((err) => console.error(err))
  }

}
