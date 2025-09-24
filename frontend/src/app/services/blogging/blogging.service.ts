import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserauthService } from '../userauth/userauth.service';
import { Blog } from '../../interfaces/blog';
import { map, Observable } from 'rxjs';
import { apiURL } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class BloggingService {
  private httpClient: HttpClient = inject(HttpClient);
  private userAuth: UserauthService = inject(UserauthService);

  getBlogs(): Observable<Blog[]> {
    return this.httpClient.get<{ blogs: Blog[]}>(`${apiURL}/blogs/`).pipe(
      map( data => data.blogs )
    );
  }

  getBlog(id: number): Observable<Blog> {
    return this.httpClient.get<Blog>(`${apiURL}/blogs/${id}`);
  }
} 
