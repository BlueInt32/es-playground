import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { bulkPayload } from '../../../public/indexCreations/bulk';
// import { full } from '../code-samples/indexCreations/full';

@Component({
  selector: 'app-index-management',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './index-management.component.html',
  styleUrl: './index-management.component.scss',
})
export class IndexManagementComponent {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:9200';
  errorText = '';
  state = '';
  items = [];
  loading = false;

  ngOnInit() {
    this.checkIndex();
  }
  checkIndex() {
    this.http.get(`${this.baseUrl}/sentences/_search`).subscribe({
      next: (body: any) => {
        console.log(body);
        this.state = `✅ Index exists (${body.hits.hits.length} hits)`;
        this.items = body.hits.hits.map((h: any) => h._source.name);
      },
      error: () => {
        this.state = '❌ No index';
        this.items = [];
      },
    });
  }
  populateIndex() {
    this.loading = true;
    this.http
      .post(`${this.baseUrl}/_bulk`, bulkPayload, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe({
        next: (body: any) => {
          setTimeout(() => {
            this.checkIndex();
            this.loading = false;
          }, 1000);
        },
        error: () => {
          this.checkIndex();
        },
      });
  }

  createIndex() {
    this.http.put(`${this.baseUrl}/sentences`, '').subscribe({
      next: () => {
        this.checkIndex();
      },
      error: () => {
        this.checkIndex();
      },
    });
  }
  removeIndex() {
    this.http.delete(`${this.baseUrl}/sentences`).subscribe({
      next: () => {
        this.checkIndex();
      },
      error: () => {
        this.checkIndex();
      },
    });
  }
}
