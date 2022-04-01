import { LightningElement, api } from 'lwc'

export default class DataTable extends LightningElement {
  get dummyData() {
    return Array(5)
      .fill()
      .map((element, index) => {
        return index
      })
  }
}
