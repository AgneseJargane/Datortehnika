import {Component, Injector, OnInit} from '@angular/core'
import {Base} from '../../shared/base/base'
import {EquipmentService} from '../equipment/equipment.service'
import {Equipment} from '../equipment/model/equipment'
import {EquipmentDropdownOptions} from '../equipment/model/equipmentDropdownOptions'

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
//Datortehnikas pieprasījuma komponente
export class RequestComponent extends Base implements OnInit {

  public equipmentDropdown = new EquipmentDropdownOptions()
  public equipment = new Equipment()
  public isDataLoaded = false
  public errorMessage: any
  public successMessage: string

  constructor(injector: Injector, private equipmentService: EquipmentService) {
    super(injector)
  }

  //metode kas izpildās uz lapas ielādi
  ngOnInit(): void {
    this.getList()
  }

  // pieprasa dropdown sarakstus
  getList(): void {
    if (this.isDataLoaded == false) {
      this.equipmentService.getEquipmentLists((resp) => {
        this.equipmentDropdown = resp
        this.isDataLoaded = true
      })
    }
  }

  // pieprasījuma saglabāšana ar pārbaudēm vai visi lauki ir aizpildīti
  saveEquipmentRequest(): void {
    if (!this.equipment.eqName) {
      this.errorMessage = 'Nav izvēlēts datortehnikas tips'
    } else if (!this.equipment.eqManufacturer) {
      this.errorMessage = 'Nav izvēlēts datortehnikas ražotājs'
    } else if (!this.equipment.eqMemory) {
      this.errorMessage = 'Nav izvēlēta datortehnikas  operatīvā atmiņa'
    } else if (!this.equipment.eqProcessor) {
      this.errorMessage = 'Nav izvēlēts datortehnikas procesors'
    } else if (!this.equipment.eqJustification) {
      this.errorMessage = 'Nav ierakstīts pamatojums'
    } else {
      this.equipmentService.saveEquipmentRequest(this.equipment, () => {
        this.errorMessage = null
        this.successMessage = 'Datortehnikas pieprasījums veiksmīgi saglabāts!'
      })
    }
  }
}
