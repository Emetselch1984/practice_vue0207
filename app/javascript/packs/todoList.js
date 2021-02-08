
import Vue from 'vue/dist/vue.esm'
import TodoList from '../todoList.vue'

document.addEventListener('DOMContentLoaded', () => {
    var app = new Vue({
        el: '#app' ,
        data: {
            newItem: '',
            todos: []
        },
        methods: {
            addItem: function(event) {
                /*   alert("Fuccccck");  */
                if (this.newItem == '') return;
                var todo = {
                    item: this.newItem,
                    isDone: false
                };
                this.todos.push(todo);
                this.newItem = ''
            },
            deleteItem:function (index){
                this.todos.splice(index,1)
            }
        },
        components:{TodoList}
    })
})