import {Component, Injector, OnInit} from '@angular/core'
import {Base} from '../../shared/base/base'
import {EquipmentService} from '../equipment/equipment.service'
import {Equipment} from '../equipment/model/equipment'

@Component({
  selector: 'request-list',
  templateUrl: './requestList.component.html',
  styleUrls: ['./requestList.component.css']
})
export class RequestListComponent extends Base implements OnInit {

  public equipmentRequest: Equipment[]

  private isDataLoaded = false
  public message: string
  private location: Location

  //tabulas kolonnu nosaukumi
  readonly columns = [
    {field: 'insertDate', header: 'Pieteikuma laiks'},
    {field: 'status', header: 'Pieteikuma statuss'},
    {field: 'eqName', header: 'Datortehnikas veids'},
    {field: 'eqManufacturer', header: 'Ražotājs'},
    {field: 'eqProcessor', header: 'Procesors'},
    {field: 'eqMemory', header: 'Operatīvā atmiņa'},
    {field: 'eqJustification', header: 'Pamatojums'},
    {field: 'approve', header: 'Apstiprināt'},
    {field: 'denied', header: 'Noraidīt'},
    {field: 'delete', header: 'Dzēst'}
  ]

  constructor(injector: Injector, public equipmentService: EquipmentService) {
    super(injector)
  }

  // metode kas izpildās uz lapas ielādi
  ngOnInit(): void {
    this.equipmentList()
  }

  // pieprasa  ierakstu sarakstu
  equipmentList(): void {
    if (this.isDataLoaded == false) {
      this.equipmentService.getEquipmentRequestList((resp) => {
        this.equipmentRequest = resp
      })
      this.isDataLoaded = true
    }
  }

  /**
   * Dzēšanas pieprasījums
   * @param rowData tabulas rindas vērtība
   */
  public deleteRecord(rowData: any) {
    this.equipmentService.deleteRequest(rowData.id, () => {
      this.equipmentRequest.splice(this.equipmentRequest.indexOf(rowData), 1)
      // this.message = 'Ieraksts veiksmīgi dzēsts'
    })
    // this.message = null;
  }

  /**
   * Pieprasījuma apstiprināšana, pēc apstiprināsānas tiek pārlādēta lapa
   * @param rowData tabulas rinda vērtība
   */
  public approveRequest(rowData: any) {
    this.equipmentService.approveRecord(rowData.id, true, () => {
      // this.message = 'Pieprasījums veiksmīgi apstiprināts'
      location.reload()
    })
  }

  /**
   * Pieprasījuma noraidīšana, pēc apstiprināšanas tiek pārlādēta lapa
   * @param rowData tabulas rindas vērtība
   */
  public deniedRequest(rowData: any) {
    this.equipmentService.deniedRecord(rowData.id, true, () => {
      location.reload()
    })
  }

}
