import Vue from 'vue'
import store from '../store/store.js'
import Board1 from '../board1.vue'
Vue.config.productionTip = false

document.addEventListener('DOMContentLoaded', () => {
    const board1 = new Vue({
        store,
        render: h => h(Board1)
    }).$mount()
    document.body.appendChild(board1.$el)

    console.log(board1)
})