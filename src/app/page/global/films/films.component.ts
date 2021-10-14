import { Component, Input, OnInit } from '@angular/core';
import { Action, SciFi } from '../models/netflix-model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements
 OnInit {
   @Input() public scifi!: SciFi;
   @Input() public action!: Action;

  constructor() { }

  ngOnInit(): void {
  }

}
