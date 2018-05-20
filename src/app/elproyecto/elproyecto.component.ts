import {Component, HostBinding, OnInit} from '@angular/core';
import {fadeInAnimation} from '../_animations/fade-in.animation';

@Component({
  selector: 'app-elproyecto',
  templateUrl: './elproyecto.component.html',
  styleUrls: ['./elproyecto.component.css'],
  animations: [fadeInAnimation],
})
export class ElproyectoComponent implements OnInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = '';

  constructor() {

  }

  ngOnInit() {
  }

}
