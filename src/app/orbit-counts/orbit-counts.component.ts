import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  types = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station'];
  constructor() { }

  ngOnInit() {
  }

  numType(type: string) {
    let numItems = 0;
    for(let i = 0; i < this.satellites.length; i++)
      if (this.satellites[i].type === type) {
        numItems++;
      }
    return (numItems);  
  }
}
