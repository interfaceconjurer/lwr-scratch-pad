import { LightningElement, api, track } from 'lwc'
import { generateSkeletons } from '../../../utils/presentationHelper'

export default class CommentListSkeletonGenerator extends LightningElement {
  @api loading
  @api comments
  @api skeletons = '5'

  get data() {
    if (this.comments.length) {
      return this.comments
    } else {
      return generateSkeletons(this.skeletons)
    }
  }
}
