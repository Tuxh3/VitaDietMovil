import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { DatetimeChangeEventDetail } from '@ionic/core';
import { IonDatetime } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ordersCollection: AngularFirestoreCollection<any>;
  private orders: Observable<any>;
  private citasCollection: AngularFirestoreCollection<any>;
  private citas: Observable<any>;

  constructor(private authFB : AngularFireAuth,
    db: AngularFirestore) { 
    this.ordersCollection = db.collection<any>('pedido');
    this.citasCollection = db.collection<any>('cita');
    this.orders = this.ordersCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      },
      {query:{
        orderByChild: 'nombre',
        equalTo: 'laura'
      }} 
    ));
    this.citas = this.citasCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      },
      {query:{
        orderByChild: 'nombre',
        equalTo: 'laura'
      }} 
    ));
    }
  

  obtenerPedidos(){
    return this.orders;
  }

  obtenerCitas(){
    return this.citas;
  }

  obtenerPedido(id: string){
    return this.ordersCollection.doc<any>(id).valueChanges();
  }

  obtenerCita(id: string){
    return this.citasCollection.doc<any>(id).valueChanges();
  }

  removerPedido(id: string){
    alert(id);
    return this.ordersCollection.doc(id).delete();
  }

  login(usuario:string, password:string){

    return new Promise((resolve, rejected) => {
      this.authFB.auth.signInWithEmailAndPassword(usuario, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  register(usuario:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.authFB.auth.createUserWithEmailAndPassword(usuario, password).then(res =>{
        resolve(res);
      }).catch( err => rejected(err));
    });
  }

  agendarcita(nutricionista:string, fecha:IonDatetime){
    this.citasCollection.add(nutricionista);
  
  }


  getOrders(usuario:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.authFB.auth.createUserWithEmailAndPassword(usuario, password).then(res =>{
        resolve(res);
      }).catch( err => rejected(err));
    });
  }

}
