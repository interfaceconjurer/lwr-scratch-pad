import { LightningElement, api, track } from 'lwc';
import { presentationHelper } from '../../../utils/presentationHelper';


export default class Image extends LightningElement {

    @api imageSrc;
    @api loading;
    imageLoaded = false;
    notReadyToLoad = true;
    error;
    @track presentationState = {};

    handleLoading() {
        this.imageLoaded = false;
        if(!this.loading && !this.imageLoaded) this.notReadyToLoad = false;
        this.presentationState = {
            loading: this.notReadyToLoad,
            error: this.error,
        }
        presentationHelper.call(this);
    }

    renderedCallback() {
        if(this.loading || !this.imageLoaded) this.notReadyToLoad = true;
        this.presentationState = {
            loading: this.notReadyToLoad,
            error: this.error,
        }
        presentationHelper.call(this);
    }
}