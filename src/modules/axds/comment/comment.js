import { LightningElement, api, track } from 'lwc'
import { presentationHelper } from '../../../utils/presentationHelper'

export default class Comment extends LightningElement {
  @api loading
  @api error
  @api comment = { name: '', email: '', body: '', image: '' }
  @track presentationState = {}

  renderedCallback() {
    this.presentationState = {
      loading: this.loading,
      error: this.error,
    }
    presentationHelper.call(this)
  }
}
