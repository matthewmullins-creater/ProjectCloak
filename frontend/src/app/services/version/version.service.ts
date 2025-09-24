import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Version } from '../../interfaces/version';
import { apiURL } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private httpClient = inject(HttpClient);

  getSpringVersion() {
    return this.httpClient.get<Version>(`${apiURL}/version/spring`);
  }
  
  getJavaVersion() {
    return this.httpClient.get<Version>(`${apiURL}/version/java`);
  }
  
}
