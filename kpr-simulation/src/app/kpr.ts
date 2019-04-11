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

export interface Kpr {
  id: number,
  harga: number,
  dp: number,
  pokok: number,
  tenor: number,
  bunga: number
}

