import { Injectable } from '@angular/core';

import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class UploadsService {

  constructor(private storage: AngularFireStorage) { }

  // Devuelve un observable de una string, que es la URL donde se puede ver el archivo subido
  uploadPhoto(filePath,file) {
    const task = this.storage.upload(filePath, file);
    return task.downloadURL()
  }

}
