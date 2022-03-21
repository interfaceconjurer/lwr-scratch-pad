
export function presentationHelper() {
        this.presentationState = {
            loading: this.loading,
            error: this.error,
        }
        if(this.presentationState.loading){
            const element = this.template.querySelectorAll('[presentation]');
            this.template.childNodes[0].setAttribute('presentation', 'loading');
            
            element.forEach((item) => {
                item.setAttribute('presentation', 'loading-item');
            });
        }
    
}