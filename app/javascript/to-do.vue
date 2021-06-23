<template>
  <div id="todo">
    <h2>Todo List</h2>
    <form v-on:submit.prevent>
      <input type="text" v-model="newItem">
      <button v-on:click="addItem">ADD</button>
    </form>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.isDone">
        <span v-bind:class="{done: todo.isDone}"> {{todo.item}}</span>
        <button v-on:click="deleteItem">delete</button>
      </li>
    </ul>
    <pre>{{$data}}</pre>
  </div>
</template>
<script>
export default {
  name: 'todo',
  // el: "#app",
  data: function () {
    return {
        newItem: '',
        todos: []
    }
  },
  methods: {
    addItem: function (event) {
      // alert("hello")
      if (this.newItem == '')
        return ;
      var todo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo)
      this.newItem = ''
    },
    deleteItem: function (index){
      this.todos.splice(index,1)
    }
  }
}
</script>
<style scoped>
#todo ul {
  list-style: none ;
}
#todo li > span.done {
  text-decoration: line-through ;
  color: red ;
}
</style>