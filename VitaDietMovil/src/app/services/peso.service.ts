import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Peso } from '../interfaces/peso';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PesoService {
  private pesosCollection: AngularFirestoreCollection<Peso>;

  constructor(private afs: AngularFirestore) {
    this.pesosCollection = this.afs.collection<Peso>('Pesos');
  }

  getPesos() {
    return this.pesosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addPeso(peso: Peso) {
    return this.pesosCollection.add(peso);
  }

  getPeso(id: string) {
    return this.pesosCollection.doc<Peso>(id).valueChanges();
  }

  updatePeso(id: string, peso: Peso) {
    return this.pesosCollection.doc<Peso>(id).update(peso);
  }

  deletePeso(id: string) {
    return this.pesosCollection.doc(id).delete();
  }

 

}
