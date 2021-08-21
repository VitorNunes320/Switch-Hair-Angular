import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  titulo: string = 'Nossos serviços';
  colums: number = 5;
  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  products: Product[] = [
    {
      id: 1,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend dictum justo ac faucibus. Cras ac neque eu mi suscipit.'
    },
    {
      id: 2,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices velit id dapibus accumsan. Proin sed ipsum ultricies diam tincidunt.'
    },
    {
      id: 3,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a condimentum velit. Sed vel mauris sit amet dolor cursus posuere.'
    },
    {
      id: 4,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet feugiat est, vitae eleifend tortor. Aenean id libero tortor.'
    },
    {
      id: 5,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui odio, ultricies id sodales id, euismod ut dui. Praesent commodo.'
    },
    {
      id: 6,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam facilisis tellus vel felis mattis, ac facilisis tellus tempus. Nunc nec.'
    },
    {
      id: 7,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus vulputate eros sed interdum. Sed lobortis molestie ante eget blandit.'
    },
    {
      id: 8,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque varius malesuada. Sed erat risus, ullamcorper in laoreet porttitor, blandit.'
    },
    {
      id: 9,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo massa quis massa placerat porta. Maecenas mauris risus, egestas nec.'
    },
    {
      id: 10,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in risus lacus. Suspendisse et nisi at libero aliquet semper ut.'
    },
    {
      id: 11,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed ex ut metus sodales commodo nec vel metus. Donec id.'
    },
    {
      id: 12,
      name: 'Husky',
      image: '../../assets/image.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare urna elit, sed laoreet sem tincidunt nec. Proin vulputate magna.'
    },
  ];

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

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
