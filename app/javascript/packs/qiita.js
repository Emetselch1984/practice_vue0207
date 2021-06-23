import Vue from 'vue'
import Qiita from '../qiita.vue'
document.addEventListener('DOMContentLoaded', () => {
    const qiita = new Vue({
        render: h => h(Qiita)
    }).$mount()
    document.body.appendChild(qiita.$el)
    console.log("hello")
})
