import { Injectable } from '@angular/core';
import { Sugerencia } from '../interfaces/sugerencia';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

  private sugerenciaCollection: AngularFirestoreCollection<Sugerencia>;

  constructor(private afs: AngularFirestore) {
    this.sugerenciaCollection = this.afs.collection<Sugerencia>('Sugerencias');
  }

  getSugerencias() {
    return this.sugerenciaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addSugerencia(sugerencia: Sugerencia) {
    return this.sugerenciaCollection.add(sugerencia);
  }

  getSugerencia(id: string) {
    return this.sugerenciaCollection.doc<Sugerencia>(id).valueChanges();
  }

  updateSugerencia(id: string, sugerencia: Sugerencia) {
    return this.sugerenciaCollection.doc<Sugerencia>(id).update(sugerencia);
  }

  deleteSugerencia(id: string) {
    return this.sugerenciaCollection.doc(id).delete();
  }

  
}
