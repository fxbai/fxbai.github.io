import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Switch } from '../../shared/ui/switch/switch';
@Component({
  selector: 'app-header',
  imports: [RouterLink, Switch],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
   isMenuOpen = false;
}
