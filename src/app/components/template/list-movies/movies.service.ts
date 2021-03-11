import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = "https://sky-frontend.herokuapp.com/movies";

  constructor(private http: HttpClient) { }


  read(): any {
    // try {
    //   return this.http.get(this.baseUrl)
    // .map((response: Response) => response.json());
    // } catch (error) {
    //   console.log('ERROR: ', error);
    // }

    return this.http.get(this.baseUrl).pipe(
      map((response) => response),
      catchError((e) => e)
    );
  }
}
