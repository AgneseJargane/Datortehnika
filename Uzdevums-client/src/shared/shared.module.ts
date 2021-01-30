import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MenuItem} from 'primeng/api'
import {ButtonModule} from 'primeng/button'
import {CardModule} from 'primeng/card'
import {DropdownModule} from 'primeng/dropdown'
import {InputTextModule} from 'primeng/inputtext'
import {MenubarModule} from 'primeng/menubar'
import {TableModule} from 'primeng/table'
import {ToolbarModule} from 'primeng/toolbar'
import {HttpRequestService} from '../app/http-request/http-request.service'

//Angular moduļi, ko izmanto vairākas komponentes
@NgModule({
  declarations: [],

  imports: [
    HttpClientModule
  ],
  exports: [
    InputTextModule,
    ButtonModule,
    CardModule,
    TableModule,
    DropdownModule,
    ToolbarModule,
    FormsModule,
    MenubarModule
  ],
  providers: [
    HttpRequestService
  ]
})

export class SharedModule {

}
