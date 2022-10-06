import cpx from 'cpx'
import { log } from 'console'

// Copy the SDS resources to the assets dir
cpx.copy(
  './node_modules/@salesforce-ux/wes-styling-hooks/dist/hooks.custom-props.css',
  'src/assets/css',
  () => log(`Done copying SDS stylehooks`)
)
