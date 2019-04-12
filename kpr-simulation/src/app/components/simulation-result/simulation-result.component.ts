import { Component, OnInit } from '@angular/core';
import { KprService } from 'src/app/services/kpr.service';
// import { Res } from 'src/app/result-kpr';

import { Res, Kpr } from 'src/app/kpr';


@Component({
  selector: 'app-simulation-result',
  templateUrl: './simulation-result.component.html',
  // providers: [KprService],
  styleUrls: ['./simulation-result.component.css']
})
export class SimulationResultComponent implements OnInit {

  kprs: Kpr[];
  ress: Res[];

  constructor(private kprService: KprService) { }


  ngOnInit() {
    this.getRess();
    // this.getKprs();
  }

  getRess(): void {
    this.kprService.getRess()
      .subscribe(ress => this.ress = JSON.parse(ress as any));
  }

  // getKprs(): void {
  //   this.kprService.getKprs()
  //     .subscribe(kprs => this.kprs = kprs);
  // }
}
