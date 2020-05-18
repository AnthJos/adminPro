import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() grafico: Object = {
    'labels': ['Label'],
    'data':  [100],
    'type': 'doughnut',
    'leyenda': 'Leyenda'
  };

  constructor() { }

  ngOnInit() {
  }

}
