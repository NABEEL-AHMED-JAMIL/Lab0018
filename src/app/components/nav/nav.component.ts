import { Component, Input } from '@angular/core';
import { NavItem } from './nav-item';


@Component({
  selector: 'btas-nav',
  templateUrl: 'nav.component.pug',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input() public logoUrl: string;
  @Input() public navItems: NavItem[];
}
