import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { payload } from '../payloads/indexCreations/full';

@Component({
  selector: 'app-index-management',
  standalone: true,
  imports: [],
  templateUrl: './index-management.component.html',
  styleUrl: './index-management.component.scss'
})
export class IndexManagementComponent {
  constructor(private http: HttpClient) {}
  baseUrl= 'http://localhost:9200';
  errorText = '';

  createIndex() {
    this.http.put(`${this.baseUrl}/sentences`, payload).subscribe({
      next: () => {
        console.log('ok');
      },
      error: () => {
        console.log('not ok');
      },
    });
  }
  removeIndex() {
    this.http.delete(`${this.baseUrl}/sentences`).subscribe({
      next: () => {
        console.log('ok');
      },
      error: () => {
        console.log('not ok');
      },
    });
  }
}
