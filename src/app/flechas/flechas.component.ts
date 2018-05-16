import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-flechas',
  templateUrl: './flechas.component.html',
  styleUrls: ['./flechas.component.css']
})
export class FlechasComponent implements OnInit {
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
         // this.router.navigate(['proyecto']);
        } else if (dir === 'iz') {
          this.router.navigate(['about']);
        }
        break;
    }

  }

}
