import Vue from 'vue'
import SvgIcon from '../components/SvgIcon'// svg组件
import generateIconsView from '../views/svg-icon/generateIconsView'// just for @/views/icons , you can delete it

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll  = function requireAll (requireContext ){
  let tr = requireContext.keys().map(requireContext);
  return tr;
}
const req = require.context('./svg', false, /\.svg$/)
const iconMap = requireAll(req)
console.log(iconMap)
generateIconsView.generate(iconMap) // just for @/views/icons , you can delete it
