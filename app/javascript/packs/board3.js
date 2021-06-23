import Vue from 'vue'
import Board3 from '../board3.vue'
Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
    const board3 = new Vue({
        render: h => h(Board3)
    }).$mount()
    document.body.appendChild(board3.$el)

    console.log(board3)
})