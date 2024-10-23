import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { bulkPayload } from '../payloads/indexCreations/bulk';
import { payload } from '../payloads/indexCreations/full';

@Component({
  selector: 'app-index-management',
  standalone: true,
  imports: [],
  templateUrl: './index-management.component.html',
  styleUrl: './index-management.component.scss',
})
export class IndexManagementComponent {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:9200';
  errorText = '';
  state = '';

  ngOnInit() {
    this.checkIndex();
  }
  checkIndex() {
    this.http.get(`${this.baseUrl}/sentences/_search`).subscribe({
      next: (body: any) => {
        console.log(body);
        this.state = `✅ Index exists (${body.hits.hits.length} hits)`;
      },
      error: () => {
        this.state = '❌ No index';
      },
    });
  }
  populateIndex() {
    this.http
      .post(`${this.baseUrl}/_bulk`, bulkPayload, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .subscribe({
        next: (body: any) => {
          setTimeout(() => {
            this.checkIndex();
          }, 500);
        },
        error: () => {
          this.checkIndex();
        },
      });
  }

  createIndex() {
    this.http.put(`${this.baseUrl}/sentences`, payload).subscribe({
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
