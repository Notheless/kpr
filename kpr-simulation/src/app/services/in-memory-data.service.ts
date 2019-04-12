import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Res, Kpr } from '../kpr';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const res = [
      { id: 1, bulan: 1, pokok: 10000, bunga: 10, cicilan: 100, total: 100, sisa: 10 },
      { id: 2, bulan: 5, pokok: 1000, bunga: 10, cicilan: 100, total: 100, sisa: 10 },
      { id: 3, bulan: 10, pokok: 100, bunga: 10, cicilan: 100, total: 100, sisa: 10 },
      { id: 4, bulan: 14, pokok: 10, bunga: 10, cicilan: 100, total: 100, sisa: 10 },
      { id: 5, bulan: 17, pokok: 1, bunga: 10, cicilan: 100, total: 100, sisa: 10 },
    ];

    const ress = JSON.stringify(res);

    const kpr = [
      { harga: 100, dp: 0, pokok: 100, tenor: 1, bunga: 6},
    ];

    const kprs = JSON.stringify(kpr);

    return {ress, kprs}
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(ress: Res[]): number {
    return ress.length > 0 ? Math.max(...ress.map(res => res.id)) + 1 : 1;
  }

}
