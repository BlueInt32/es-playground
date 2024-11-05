import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-code-samples',
  standalone: true,
  imports: [NgFor, Highlight, HighlightLineNumbers],
  templateUrl: './code-samples.component.html',
  styleUrl: './code-samples.component.scss',
})
export class CodeSamplesComponent {
  constructor(private http: HttpClient) {}
  full = '';
  simple = '';
  codeSamplesMap: Array<any> = [];
  codeSamplesPaths = [
    {
      path: '/indexCreations/createServer.txt',
      label: 'Create docker',
      hl: '',
    },
    {
      path: '/indexCreations/simple.json',
      label: 'Simple index',
      hl: 'json',
    },
    {
      path: '/indexCreations/full.json',
      label: 'Full index',
      hl: 'json',
    },
  ] as any;

  currentCode = '';
  currentCodeHighlight = '';
  sampleClickHandler(codeToLoad: string, hl: string) {
    this.currentCode = codeToLoad;
    this.currentCodeHighlight = hl;
  }
  async ngOnInit() {
    for (let index = 0; index < this.codeSamplesPaths.length; index++) {
      const element = this.codeSamplesPaths[index];
      await this.http
        .get(element.path, { responseType: 'text' })
        .subscribe((data: any) => {
          this.codeSamplesMap.push({
            label: element.label,
            code: data,
            hl: 'json',
          });
        });
    }
  }
}
