import Vue from 'vue'
import Todo from '../to-do.vue'

document.addEventListener('DOMContentLoaded', () => {
    const todo = new Vue({
        render: h => h(Todo)
    }).$mount()
    document.body.appendChild(todo.$el)

    console.log(todo)
})
