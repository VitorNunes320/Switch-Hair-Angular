import { Component, OnInit } from '@angular/core';

export interface Tile {
  image: string;
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  titulo: string = 'Sobre nós';
  tiles: Tile[] = [
    {cols: 2, rows: 2, image: '../../assets/image.jpg'},
    {cols: 2, rows: 2, image: '../../assets/image.jpg'},
    {cols: 3, rows: 2, image: '../../assets/image.jpg'},
    {cols: 1, rows: 1, image: '../../assets/image.jpg'},
    {cols: 1, rows: 1, image: '../../assets/image.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
