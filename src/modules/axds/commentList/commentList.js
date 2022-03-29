import { LightningElement, api } from 'lwc'

export default class CommentList extends LightningElement {
  @api loading
  @api comments
}
