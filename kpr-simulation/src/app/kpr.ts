export class Model {

  constructor(
    public id: number,
    public harga: number,
    public dp: number,
    public pokok: number,
    public tenor: number,
    public bunga: number
  ) {}
}

export class Kpr {
  // id: number;
  harga: number;
  dp: number;
  pokok: number;
  tenor: number;
  bunga: number
}

export class Res {

  id: number;
  bulan: number;
  pokok: number;
  bunga: number;
  cicilan: number;
  total: number;
  sisa: number

}

