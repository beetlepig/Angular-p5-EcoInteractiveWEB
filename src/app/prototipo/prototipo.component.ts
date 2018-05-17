import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prototipo',
  templateUrl: './prototipo.component.html',
  styleUrls: ['./prototipo.component.css']
})
export class PrototipoComponent implements OnInit {
  tituloSlide: string;
  descripcionSlide: string;
  subSlideNumber: number;
  slideNumber: number;

  constructor() {
    this.tituloSlide = 'EL SAPO';
    this.descripcionSlide = 'Como prototipo se desarrollo una variante de un juego típico de colombia, el Sapo. Se adaptaron sensores, ' +
      'un altavoz y una pantalla con el objetivo de brindar una interacción enriquecida al usuario, al tiempo que se le proporcionada ' +
      'información sobre la labor medioambiental de Smurfit Kappa';
    this.slideNumber = 0;
    this.subSlideNumber = 0;
  }

  ngOnInit() {
    setInterval(() => {
      if (this.slideNumber === 0) {
        this.subSlideNumber++;
        if (this.subSlideNumber > 1) {
           this.subSlideNumber = 0;
           this.slideNumber = 1;
           this.tituloSlide = 'COMIENZO';
           this.descripcionSlide = 'Cuando el usuario se ubique entre 1 m y 1.3 m enfrente del sapo, el juego iniciará mostrando una ' +
             'introduccion de la labor ambiental de Smurfit Kappa, por medio del altavoz y la pantalla.';
        }
      }

    }, 10000);
  }

}
