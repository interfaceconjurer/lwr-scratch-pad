import { LightningElement, api, track } from 'lwc';

export default class CommentList extends LightningElement {
    
    @track state = {};
    @api comments;
    loading = true;
    constructor() {
        super();
        this.state.comments = [];
    }
    get isLoading () {
        return this.loading;
    }

    async connectedCallback() {
        this.state.comments = await this.comments;
        setTimeout(() => {
            this.loading = false;
        },500)
        
    }
}