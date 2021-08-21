import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { Unity } from 'src/app/models/Unity';

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {

  titulo: string = 'Unidades';
  colums: number = 5;
  destroyed = new Subject<void>();
  currentScreenSize: string = '';
  units: Unity[] = [
    {
      id: 1,
      name: 'Switch Hair - Salão Ar Doce',
      image: '../../assets/image.jpg',
      adress: 'Travessa Otto Glória, 699 - Vila Maria Baixa, São Paulo - SP, 02112-009'
    },
    {
      id: 2,
      name: 'Switch Hair - Salão Veneza',
      image: '../../assets/image.jpg',
      adress: 'Rua Floriano de Freitas, 370 - Núcleo do Engordador, São Paulo - SP, 02368-025'
    },  
    {
      id: 3,
      name: 'Switch Hair - Sweet Lab',
      image: '../../assets/image.jpg',
      adress: 'Rua Capitão João de Godoy, 408 - Vila Cruzeiro, São Paulo - SP, 04727-020'
    },  
    {
      id: 4,
      name: 'Switch Hair - Style Lab',
      image: '../../assets/image.jpg',
      adress: 'Rua Santo Antônio do Pinhal, 454 - Guaiaúna, São Paulo - SP, 03630-070'
    },
    {
      id: 5,
      name: 'Switch Hair - Pink Phoenix',
      image: '../../assets/image.jpg',
      adress: 'Avenida Anastácio de Trancoso, 491 - Jardim Nélia, São Paulo - SP, 08142-020'
    },
    {
      id: 6,
      name: 'Switch Hair - Sweet Lady',
      image: '../../assets/image.jpg',
      adress: 'Rua Manuel da Costa Vale, 796 - Piqueri, São Paulo - SP, 02912-050'
    },
  ]

  ngOnInit() {}

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).pipe(takeUntil(this.destroyed)).subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            switch (query)
            {
              case Breakpoints.XSmall:
                this.colums = 1;
                break;
              case Breakpoints.Small:
                this.colums = 2;
                break;
              case Breakpoints.Medium:
                this.colums = 3;
                break;
              case Breakpoints.Large:
                this.colums = 4;
                break;
              case Breakpoints.XLarge:
                this.colums = 4;
                break;
            }
          }
        }
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
