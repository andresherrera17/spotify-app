import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { IMensaje } from '../interfaces/mensaje.interface';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<IMensaje>;
  private chats: IMensaje[] = [];

  constructor(private afs: AngularFirestore, private _serviceAuth: AuthService) {
    this.itemsCollection = afs.collection<IMensaje>('chats');
  }


  cargarMensajes() {
    this.itemsCollection = this.afs.collection<IMensaje>('chats', ref => ref
      .orderBy('fecha', 'desc')
      .limit(5)
    )
    return this.itemsCollection.valueChanges()
      .pipe(
        map((mensajes: IMensaje[]) => {
          this.chats = [];
          for (let mensaje of mensajes) {
            this.chats.unshift(mensaje);
          }
          return this.chats;
        })
      )
  }

  agregarMensajes(texto: string) {
    let mensaje: IMensaje = {
      nombre: this._serviceAuth.user.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this._serviceAuth.user.uid
    }
    return this.itemsCollection.add(mensaje);
  }
}
