import {Injectable, Injector} from '@angular/core'
import {Base} from '../../shared/base/base'
import {Equipment} from './model/equipment'

@Injectable()
export class EquipmentService extends Base {
  private readonly BASE_URL = '/eqRequest'
  private readonly GET_EQUIPMENT_LIST = this.BASE_URL + '/createEquipmentList'
  private readonly GET_EQUIPMENT_REQUEST_LIST = this.BASE_URL + '/getEquipmentList'
  private readonly SAVE_EQUIPMENT_REQUEST = this.BASE_URL + '/createEquipmentReq'
  private readonly DELETE_REQUEST = this.BASE_URL + '/deleteRequest/'
  private readonly APPROVE_REQUEST = this.BASE_URL + '/approveRequest/'
  private readonly DENIED_REQUEST = this.BASE_URL + '/deniedRequest/'

  constructor(injector: Injector) {
    super(injector)
  }

  //Pieprasījums dropdown vērtībām
  public getEquipmentLists(onSuccess: any) {
    this.requestService.get({
      url: this.GET_EQUIPMENT_LIST,
      onSuccess: onSuccess
    })
  }

  // pieprasījums ierakstu sarakstam
  public getEquipmentRequestList(onSuccess: any) {
    this.requestService.get({
      url: this.GET_EQUIPMENT_REQUEST_LIST,
      onSuccess: onSuccess
    })
  }
// datortehnikas pieprasījuma saglabāšana
  public saveEquipmentRequest(equipment: Equipment, onSuccess: any) {
    this.requestService.post({
      url: this.SAVE_EQUIPMENT_REQUEST,
      body: equipment,
      onSuccess: onSuccess
    })

  }
// ieraksta dzēšanas pieprasījums
  public deleteRequest(requestId: any, onSuccess: any) {
    this.requestService.delete({
      url: this.DELETE_REQUEST + requestId,
      onSuccess: onSuccess
    })
  }

  // ieraksta apstiprināšanas pieprasījums
  public approveRecord(requestId: any, approved: boolean, onSuccess: any) {
    this.requestService.post({
      url: this.APPROVE_REQUEST,
      params: this.requestService.prepareParams([
        {key: 'id', value: requestId},
        {key: 'approved', value: approved},
      ]),
      onSuccess: onSuccess
    })
  }

  // ieraksta noraidīšanas pieprasījums
  public deniedRecord(requestId: any, denied: boolean, onSuccess: any) {
    this.requestService.post({
      url: this.DENIED_REQUEST,
      params: this.requestService.prepareParams([
        {key: 'id', value: requestId},
        {key: 'denied', value: denied},
      ]),
      onSuccess: onSuccess
    })
  }

}
