import {
  Component, OnInit
} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { BreadcrumbService } from '@btas/services/breadcrumb';
import { Breadcrumb } from './breadcrumb';
import { L } from '@btas/lang';

@Component({
  selector: 'btas-breadcrumb',
  templateUrl: './breadcrumb.component.pug',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: Breadcrumb[] = [
    new Breadcrumb(L('About You'), '/about-you')
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: BreadcrumbService
  ) {}

  public ngOnInit(): void {
    this.router.events
      .filter((e) => e instanceof NavigationEnd)
      .subscribe((e) => {
        this.breadcrumbs = this.service.getBreadcrumbs(this.activatedRoute);
      });
  }
}
