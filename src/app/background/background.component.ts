import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import 'p5';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('sketchPlane', {read: ElementRef}) containerSketch: ElementRef;
  sketchP: p5;
  constructor() { }

  ngOnInit() {
    const sketch = (p: p5) => {


      const piecesImages = [];
      const piecesObjects = [];

      p.preload = () => {
        piecesImages.push(p.loadImage('assets/piezasSapo/piezaUno.svg'));
        piecesImages.push(p.loadImage('assets/piezasSapo/piezaDos.svg'));
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth , p.windowHeight);
        p.imageMode(p.CENTER);
        p.background(245, 245, 245);
        const cantidad = p.width / 150;
        for (let i = 0; i < cantidad; i++) {
          piecesObjects.push(new PiezaDeSapo(p, piecesImages));
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        p.background(245, 245, 245);

        for (const object of piecesObjects) {
          object.movimiento();
          object.edgeCheck();
          object.display();
        }
      };



    };

    this.sketchP = new p5(sketch, this.containerSketch.nativeElement);

  }

  ngOnDestroy(): void {
    console.log('destroying canvas');
    this.sketchP.noCanvas();
  }


}

class PiezaDeSapo {
  pos: p5.Vector;
  vel: p5.Vector;
  reference: p5;
  imgCube: p5.Image;
  tam: number;
  tamX: number;
  tamY: number;
  r: number;
  rVel: number;
  mouseDist: number;
  hover: boolean;

  constructor(reference5: p5, images: p5.Image[]) {
    this.reference = reference5;
    this.pos = this.reference.createVector((Math.random() * (0.9 - 0.1) + 0.1) * this.reference.windowWidth,
      (Math.random() * (0.9 - 0.1) + 0.1) * this.reference.windowHeight);
    this.vel = this.reference.createVector(this.reference.random(-1, 1), this.reference.random(-1, 1));
    this.imgCube = images[Math.round(Math.random())];
    this.tam = this.reference.random(3, 6);
    this.tamX = this.imgCube.width / this.tam;
    this.tamY = this.imgCube.height / this.tam;
    this.r = 0;
    this.rVel = this.reference.random(-0.02, 0.02);
    this.hover = false;
  }

  display() {
    this.reference.push();
    this.reference.translate(this.pos.x, this.pos.y);
    this.reference.rotate(this.r);
    this.reference.image(this.imgCube, 0, 0, this.tamX, this.tamY);
    this.reference.pop();
  }

  movimiento() {
    this.pos.add(this.vel);
    this.r += this.rVel;
    this.mouseDist = this.reference.dist(this.reference.mouseX, this.reference.mouseY, this.pos.x, this.pos.y);
    if (this.mouseDist < 100 && this.hover === false) {
      this.hover = true;
      this.rVel = this.reference.random(-0.10, 0.10);
    } else if (this.mouseDist > 100 && this.hover === true) {
      this.hover = false;
    }
  }

  edgeCheck() {
    if (this.pos.x < this.tamX / 2) {
      this.pos.x = this.tamX / 2;
      this.vel.x = -1 * this.vel.x;
      this.rVel = this.reference.random(-0.03, 0.03);
    }
    if (this.pos.x > this.reference.width - (this.tamX / 2)) {
      this.pos.x = this.reference.width - (this.tamX / 2);
      this.vel.x = -1 * this.vel.x;
      this.rVel = this.reference.random(-0.03, 0.03);
    }
    if (this.pos.y < this.tamY / 2) {
      this.pos.y = this.tamY / 2;
      this.vel.y = -1 * this.vel.y;
      this.rVel = this.reference.random(-0.03, 0.03);
    }
    if (this.pos.y > this.reference.height - (this.tamY / 2)) {
      this.pos.y = this.reference.height - (this.tamY / 2);
      this.vel.y = -1 * this.vel.y;
      this.rVel = this.reference.random(-0.03, 0.03);
    }
  }

}
