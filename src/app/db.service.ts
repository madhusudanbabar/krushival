import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { db } from 'src/app/db.model';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private dbM: AngularFireDatabaseModule) { }


}
