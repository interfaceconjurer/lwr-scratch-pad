import { LightningElement, api, track } from 'lwc'
import { presentationHelper } from '../../../utils/presentationHelper'

export default class Image extends LightningElement {
  @api imageSrc
  @api loading
  imageLoaded = false
  imageLoading = true
  error
  @track presentationState = {}

  handleLoading() {
    this.imageLoaded = true
    this.imageLoading = this.getImageLoadingState()

    this.presentationState = {
      loading: this.imageLoading,
      error: this.error,
    }

    presentationHelper.call(this)
  }

  renderedCallback() {
    this.presentationState = {
      loading: this.imageLoading,
      error: this.error,
    }

    presentationHelper.call(this)
  }

  getImageLoadingState() {
    if (!this.loading && this.imageLoaded) this.imageLoading = false
    return this.imageLoading
  }
}
