import {Component, HostBinding, OnInit} from '@angular/core';
import {fadeInAnimation} from '../_animations/fade-in.animation';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-prototipo',
  templateUrl: './prototipo.component.html',
  styleUrls: ['./prototipo.component.css'],
  animations: [
    fadeInAnimation,

    trigger('fadeSlide', [
      transition(
        ':enter', [
        style({opacity: 0}),
        animate('0.5s', style({opacity: 1}))
      ])
    ])

  ]
})
export class PrototipoComponent implements OnInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = '';
  tituloSlide: string;
  descripcionSlide: string;
  subSlideNumber: number;
  slideNumber: number;

  constructor() {
    this.slideNumber = 0;
    this.subSlideNumber = 0;
    this.setInfo(0);
  }

  ngOnInit() {
    setInterval(() => {
      if (this.slideNumber === 0) {
        this.subSlideNumber++;

        if (this.subSlideNumber > 1) {
           this.subSlideNumber = 0;
           this.slideNumber = 1;
           this.setInfo(1);
        }
      } else if (this.slideNumber === 1) {
        this.subSlideNumber++;
        if (this.subSlideNumber === 1) {
          this.tituloSlide = 'INTRODUCCIÓN';
          this.descripcionSlide = 'Mientras el usuario no se ubique en rango, se mostrará la pantalla de la izquierda; Una vez esté en ' +
            'rango, se mostrará la pantalla de la derecha. Una vez dicha toda la informacion, el usuario podrá lanzar';
        } else if (this.subSlideNumber > 1) {
          this.subSlideNumber = 0;
          this.slideNumber = 2;
          this.setInfo(2);
        }
      } else if (this.slideNumber === 2) {
        this.subSlideNumber++;
        if (this.subSlideNumber === 1) {
          this.tituloSlide = 'LANZAR';
          this.descripcionSlide = 'El usuario despues de acertar dos veces, escuchará información relacionada con la etapa, y ' +
            'luego pasará a la siguiente etapa de reciclaje';
        } else if (this.subSlideNumber > 1) {
          this.subSlideNumber = 0;
          this.slideNumber = 3;
          this.setInfo(3);
        }
      } else if (this.slideNumber === 3) {
        this.subSlideNumber++;
        if (this.subSlideNumber === 1) {
          this.tituloSlide = 'ETAPAS';
          this.descripcionSlide = 'Al terminar el juego se mostrará la puntuación y posteriormente el juego se reinicia.';
        } else if (this.subSlideNumber > 1) {
          this.subSlideNumber = 0;
          this.slideNumber = 0;
          this.setInfo(0);
        }
      }

    }, 10000);
  }

  setInfo(slide: number) {
    switch (slide) {

      case 0:
        this.tituloSlide = 'EL SAPO';
        this.descripcionSlide = 'Como prototipo se desarrollo una variante de un juego típico de colombia, el Sapo. Se adaptaron ' +
          'sensores, un altavoz y una pantalla con el objetivo de brindar una interacción enriquecida al usuario, al tiempo que se ' +
          'le proporcionada información (visual y auditiva) sobre la labor medioambiental de Smurfit Kappa';
        break;

      case 1:
        this.tituloSlide = 'COMIENZO';
        this.descripcionSlide = 'Cuando el usuario se ubique entre 1 m y 1.3 m enfrente del sapo, el juego iniciará mostrando una ' +
          'introducción de la labor ambiental de Smurfit Kappa, por medio del altavoz y la pantalla.';
        break;

      case 2:
        this.tituloSlide = 'LANZAR';
        this.descripcionSlide = 'El usuario debera acertar dos veces la bola en alguno de los agujeros; dependiendo' +
          ' de los agujeros que acierte, sera su puntaje.';
        break;

      case 3:
        this.tituloSlide = 'ETAPAS';
        this.descripcionSlide = 'Hay un total de 4 etapas. El usuario tiene que acertar un total de 8 veces para completar el juego.';
        break;
    }
  }

  changeSlider(slide: number) {
    this.slideNumber = slide;
    this.setInfo(slide);
  }

}
