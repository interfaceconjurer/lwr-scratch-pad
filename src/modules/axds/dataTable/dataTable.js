import { LightningElement, api } from 'lwc'

export default class CommentList extends LightningElement {
  @api loading
  @api comments

  synced = false

  get dummyData() {
    return Array(5)
      .fill()
      .map((element, index) => {
        return index
      })
  }

  get isSynced() {
    return this.synced
  }

  toggleSync() {
    this.synced = !this.synced
  }
}
