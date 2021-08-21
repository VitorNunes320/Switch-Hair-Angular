import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Sobre',
      icon: 'people',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      link: '/about'
    },
    {
      label: 'Nossos Serviços',
      icon: 'shopping_basket',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      link: '/products'
    },
    {
      label: 'Unidades',
      icon: 'store',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      link: '/units'
    },
    {
      label: 'Agendar',
      icon: 'calendar_today',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      link: '/schedule'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
