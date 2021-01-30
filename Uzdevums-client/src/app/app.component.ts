import {Component, Injector} from '@angular/core'
import {Base} from '../shared/base/base'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends Base {

  constructor(injector: Injector) {
    super(injector)
  }

  //navigācija uz ierakstu sarakstu
  public moveToList() {
    this.router.navigate(['/request-list'])
  }

  //navigācija uz pieprasījuma izveidi
  public moveToRequest() {
    this.router.navigate([''])
  }
}

