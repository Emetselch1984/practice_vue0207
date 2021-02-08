<template>
  <div id="app">
    <h2>Todo List</h2>
    <form v-on:submit.prevent>
      <input type="text" v-model="newItem">
      <button v-on:click = "addItem">
        ADD
      </button> <pre>{{$data}}</pre> </form>
    <li v-for= "todo in todos ">
      <input type="checkbox" v-model="todo.isDone">
      <span v-bind:class="{done: todo.isDone}">{{todo.item}}</span>
  </div>
</template>

<script>
export default {
  addItem: function(event) {
    if (this.newItem == '') return;
    // alert("Fuccccck");
    var todo = {
      item: this.newItem,
      isDone: false
    }
    this.todos.push(todo)
    this.newItem = ''
  }
}
</script>

<style scoped>
#app ul {
  list-style: none;
}
#app li > span.done {
  text-decoration: line-through ;
  color: red ;
}
</style>
