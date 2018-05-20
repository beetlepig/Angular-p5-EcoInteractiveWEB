import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {fadeInAnimation} from '../_animations/fade-in.animation';

@Component({
  selector: 'app-flechas',
  templateUrl: './flechas.component.html',
  styleUrls: ['./flechas.component.css'],
  animations: [fadeInAnimation]
})
export class FlechasComponent implements OnInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = '';
  actualRoute: string;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

  }

  redireccionar(dir) {
    this.actualRoute = this.route.root.firstChild.snapshot.data['state'];
    switch (this.actualRoute) {
      case 'home':
        if (dir === 'der') {
          this.router.navigate(['about']);
        }
        if (dir === 'iz') {
          this.router.navigate(['equipo']);
        }
        break;
      case 'about':
        if (dir === 'der') {
          this.router.navigate(['proyecto']);
        } else if (dir === 'iz') {
          this.router.navigate(['']);
        }
        break;
      case 'proyecto':
        if (dir === 'der') {
          this.router.navigate(['prototipo']);
        } else if (dir === 'iz') {
          this.router.navigate(['about']);
        }
        break;
      case 'prototipo':
        if (dir === 'der') {
          this.router.navigate(['pruebas']);
        } else if (dir === 'iz') {
          this.router.navigate(['proyecto']);
        }
        break;
      case 'pruebas':
        if (dir === 'der') {
          this.router.navigate(['equipo']);
        } else if (dir === 'iz') {
          this.router.navigate(['prototipo']);
        }
        break;
      case 'equipo':
        if (dir === 'der') {
          this.router.navigate(['']);
        } else if (dir === 'iz') {
          this.router.navigate(['pruebas']);
        }
        break;
    }

  }

}
