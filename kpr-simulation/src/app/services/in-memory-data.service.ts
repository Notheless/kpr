import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Kpr } from '../kpr';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const kprs = [
      { id: 1, harga: 1000000000, dp: 20, pokok: 800000000, tenor: 10, bunga: 12 },
      { id: 2, harga: 1000000000, dp: 10, pokok: 900000000, tenor: 10, bunga: 12 },
      { id: 3, harga: 1000000000, dp: 0, pokok: 1000000000, tenor: 10, bunga: 12 }
    ];

    return {kprs};

  }

  genId(kprs: Kpr[]): number {
    return kprs.length > 0 ? Math.max(...kprs.map(kpr => kpr.id)) + 1 : 1;
  }
}

