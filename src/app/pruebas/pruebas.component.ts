import {Component, HostBinding, OnInit} from '@angular/core';
import {fadeInAnimation} from '../_animations/fade-in.animation';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css'],
  animations: [fadeInAnimation]
})
export class PruebasComponent implements OnInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = '';

  constructor() { }

  ngOnInit() {
  }

}
