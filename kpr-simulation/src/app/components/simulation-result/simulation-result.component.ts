import { Component, OnInit } from '@angular/core';
import { KprService } from 'src/app/services/kpr.service';
import { Res } from 'src/app/result-kpr';


@Component({
  selector: 'app-simulation-result',
  templateUrl: './simulation-result.component.html',
  providers: [KprService],
  styleUrls: ['./simulation-result.component.css']
})
export class SimulationResultComponent implements OnInit {

  res: Res[];

  constructor(private kprService: KprService) { }


  ngOnInit() {
    this.getResult();
  }

  getResult(): void {
    this.kprService.getRes().subscribe(
      res => this.res = res
    );
  }
}
