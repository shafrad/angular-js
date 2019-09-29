import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:3000/business';

  constructor(private http: HttpClient) { }

  getAllBusinesses() {
    return this.http.get(`${this.uri}`);
  }

  deleteBusiness(id) {
    return this
                .http
                .get(`${this.uri}/delete/${id}`)
  }

  getDetailBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }
}