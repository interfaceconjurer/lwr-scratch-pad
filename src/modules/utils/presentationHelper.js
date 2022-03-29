export function presentationHelper() {
  // PRESENTATION TYPE: SKELETON LOADING ///
  const parentElement = this.template.childNodes[0]
  if (this.presentationState.loading) {
    parentElement.setAttribute('presentation-provider', 'loading')
    const elements = parentElement.querySelectorAll('[presentation]')
    elements.forEach((item) => {
      item.setAttribute('presentation', 'loading-item')
    })
  }
  if (!this.presentationState.loading) {
    parentElement.setAttribute('presentation-provider', 'base')
    const elements = this.template.querySelectorAll('[presentation]')
    elements.forEach((item) => {
      item.setAttribute('presentation', 'base')
    })
  }
  // TODO: PRESENTATION TYPE: SPINNER LOADING ///

  // TODO: PRESENTATION TYPE: ERROR ///
}
