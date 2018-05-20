import {Component, HostBinding, OnInit} from '@angular/core';
import {fadeInAnimation} from '../_animations/fade-in.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInAnimation]
})
export class AboutComponent implements OnInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = '';

  constructor() { }

  ngOnInit() {
  }

}
