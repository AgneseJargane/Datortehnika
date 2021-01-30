import {HttpClient, HttpParams} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {HttpRequest} from './http-request'

@Injectable()
export class HttpRequestService {
//rest pamats, kas tiek izmantots visos izsaukumos
  REST_BASE = 'rest'

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Post request sagatave
   * @param request pieprasījums
   */
  public post(request: HttpRequest) {
    this.execute(request, 'POST')
  }

  /**
   * Delete request sagatave
   * @param request
   */
  public delete(request: HttpRequest) {
    this.execute(request, 'DELETE')
  }

  /**
   * Get Request sagatave
   * @param request
   */
  public get(request: HttpRequest) {
    this.execute(request, 'GET')
  }

  /**
   * Sagatavo REST pieprasījumu, uztaisīts pamats izsaukumam
   * @param request pieprasījums
   * @param method pieprasījuma metode
   */
  private execute(request: HttpRequest, method: string) {

    this.httpClient.request(method, this.REST_BASE + request.url, {
      body: request.body,
      params: request.params,
      responseType: request.responseType ? request.responseType : 'json'
    }).toPromise().then((response: Response) => {
      request.onSuccess(response)
    })
  }

  /**
   * REST parametru sagatavošanas metode, tiek noteikti key un values
   * @param params nosaka parametru key un values
   */
  public prepareParams(params: { key: string, value: any }[]): HttpParams {
    let httpParams: HttpParams = new HttpParams()
    params.forEach((keyValuePair) => {
      if (keyValuePair.value != null) {
        httpParams = httpParams.set(keyValuePair.key, keyValuePair.value)
      }
    })
    return httpParams
  }

}
