import { Component, OnInit } from '@angular/core';
import { Kpr } from 'src/app/kpr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-simulation-forms',
  templateUrl: './simulation-forms.component.html',
  styleUrls: ['./simulation-forms.component.css']
})
export class SimulationFormsComponent implements OnInit {


  dp = [0, 10, 20];
  tenor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
          18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  bunga = [6, 8, 10, 12];
  model = new Kpr(1, 2000000000, 20, 1600000000, 10, 12);
  simulated = false;

  dpRp: number;


  // calDP = (this.model.harga) *  (this.model.dp) / 100 ;

  onSimulate() {this.simulated = true;}

  get diagnostic() {return JSON.stringify(this.model);}
  constructor(private titleService: Title) { }

  ngOnInit() {
  }

  calDP(harga, dp) {
    return this.dpRp = (harga * dp / 100);
  }

  calPokok(harga, dpRp) {
    return this.model.pokok = (harga - dpRp);
  }

  resetKpr() {
    this.model = new Kpr(1, 0, 0, 0, 0, 0);
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


}
