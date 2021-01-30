import {DatePipe} from '@angular/common'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router'
import {SharedModule} from '../shared/shared.module'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {EquipmentService} from './equipment/equipment.service'
import {RequestComponent} from './request/request.component'
import '@angular/compiler'
import {RequestListComponent} from './requestList/requestList.component'

//Navigāciju komponentes
const routes: Routes = [
  {path: '', component: RequestComponent},
  {path: 'request-list', component: RequestListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    RequestListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [EquipmentService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
