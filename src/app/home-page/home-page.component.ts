import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { esServerContainerCreationScript } from '../code-samples/dockers/es';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Highlight,
    HighlightLineNumbers,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:9200';
  elasticServerVersion = '';
  errorText = '';
  esServerContainerCreationScript = esServerContainerCreationScript;

  esServerConnectionClickHandler() {
    this.http.get(`${this.baseUrl}`).subscribe({
      next: (result: any) => {
        this.elasticServerVersion = result.version.number;
        this.errorText = '';
      },
      error: (error: any) => {
        console.error('Nope', error);
        this.errorText = error.message;
      },
    });
  }
}
