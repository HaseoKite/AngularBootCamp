import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'AngularBootcamp';

  private http: HttpClient = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('/api/products').subscribe((data) => {});
  }
}
