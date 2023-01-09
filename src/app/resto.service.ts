import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:3000/Restaurants';

  constructor(private http: HttpClient) {}

  public getList() {
    return this.http.get(this.url);
  }

  public saveResto(data: any) {
    return this.http.post(this.url, data).subscribe((res) => console.log(res));
  }

  public deleteResto(id: string) {
    return this.http
      .delete(`${this.url}/${id}`)
      .subscribe((res) => console.log(res));
  }

  public getCurrentResto(id: string): any {
    return this.http
      .get(`${this.url}/${id}`)
      .subscribe((res) => console.log(res));
  }
}
