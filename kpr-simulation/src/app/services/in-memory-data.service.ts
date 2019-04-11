import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Res } from '../result-kpr';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const res = [
      { id: 1, bulan: 10, pokok: 10, bunga: 0, cicilan: 0, total: 0, sisa: 10 },
      { id: 2, bulan: 10, pokok: 100, bunga: 0, cicilan: 0, total: 0, sisa: 100 },
      { id: 3, bulan: 10, pokok: 1000, bunga: 0, cicilan: 0, total: 0, sisa: 1000 },
      { id: 4, bulan: 10, pokok: 10000, bunga: 0, cicilan: 0, total: 0, sisa: 10000 }
    ]
    return {kprs: res};
  }

  genId(kprs: Res[]): number {
    return kprs.length > 0 ? Math.max(...kprs.map(res => res.id)) + 1 : 1;
  }
}

