import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlugService } from '../../services/slug.service';

@Component({
  selector: 'app-slug',
  templateUrl: './slug.component.html',
  styleUrl: './slug.component.scss'
})
export class SlugComponent {
  slugData: { id: number; title: string } = {id: 404, title: 'Not Found'};
  
  constructor(
    private slugService: SlugService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const slugId : number = this.activatedRoute.snapshot.params['id'];
    this.slugData = {id: slugId, title: this.slugService.getSlug(slugId) };
    this.setSlug();
  }

  dashers(string: string) {
    return string.replace(/[ ]/g, '-').toLowerCase();
  }

  setSlug() {
    const postSlug = this.activatedRoute.snapshot.params['slug'];
    if (!postSlug) {
      let slug = this.dashers(this.slugData.title);
      this.router
        .navigate([slug], { relativeTo: this.activatedRoute, replaceUrl: true })
        .then();
    }
  }
}
