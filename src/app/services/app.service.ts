import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpsService } from './https.service';

@Injectable({
  providedIn: 'root',
})
export class AppService extends HttpsService {
  public ARTICLES = 'articles';
  public USERS = 'users';

  public REGISTER = 'auth/register';

  public LANGUAGES = 'options/languages';

  constructor(public http: HttpClient) {
    super();
  }

  public getList(params: any = {}, route_url): Observable<any> {
    return this.get(this.http, route_url, params);
  }

  public getItem(id: number, route_url): Observable<any> {
    return this.get(this.http, `${route_url}/${id}`, null);
  }

  /**
   * Post methods
   * @param params
   */
  public postdata(params: any = {}, route): Observable<any> {
    if (params.id) {
      return this.put(this.http, `${route}/${params.id}`, params);
    } else {
      return this.post(this.http, route, params);
    }
  }

  public postPlainData(params: any = {}, route): Observable<any> {
    if (params.id) {
      return this.put(this.http, `${route}/${params.id}`, params, {
        responseType: 'text',
      });
    } else {
      return this.post(this.http, route, params, {
        responseType: 'text',
      });
    }
  }

  public postFormData(params: any = {}, files, route): Observable<any> {
    const formData = new FormData();

    Object.entries(params).forEach((element) => {
      formData.append(element[0], String(element[1]));
    });
    files.forEach((file) => {
      formData.append(file.fileName, file);
    });
    if (params.id) {
      return this.post(this.http, `${route}/${params.id}`, formData);
    } else {
      return this.post(this.http, route, formData);
    }
  }
  public deleteData(id: number, route): Observable<any> {
    return this.delete(this.http, `${route}/${id}`, {});
  }
}
