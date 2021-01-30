import {DatePipe} from '@angular/common'
import {Injector} from '@angular/core'
import {Router} from '@angular/router'
import {HttpRequestService} from '../../app/http-request/http-request.service'
import {DateUtil} from '../dateUtil'

//Klase satur biežāk izmantotās  lietas
export class Base {

  public requestService: HttpRequestService
  public router: Router
  public DateUtil = DateUtil
  public datePipe: DatePipe

  constructor(injector: Injector) {
    this.requestService = injector.get(HttpRequestService)
    this.router = injector.get(Router)
    this.datePipe = injector.get(DatePipe)
  }
}
