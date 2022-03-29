import { LightningElement, api, track } from 'lwc'

export default class CommentList extends LightningElement {
  @api loading
  @api comments
  @api skeletons = '5'

  get skeleton() {
    const output = Array(Number(this.skeletons))
      .fill()
      .map((element, index) => index)
    return output
  }
}
