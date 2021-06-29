<template>
  <div id="todoApp">
    <h1>TodoApp</h1>
    <form v-on:submit.prevent>
      <label for="text_field">入力してください</label>
      <input type="text" id="text_field" v-model="text">
      <button v-on:click="addTodo">保存する</button>
    </form>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.isDone">
        <span v-bind:class="{done: todo.isDone}"> {{todo.text}}</span>
        <button v-on:click="deleteTodos">delete</button>
      </li>
    </ul>
    <pre>{{$data}}</pre>
  </div>
</template>
<script>
export default {
  name: 'todoApp',
  data: function () {
    return {
      text: "",
      todos: [],
    }
  },
  methods: {
    addTodo: function () {
      var todo = {
        text: this.text,
        isDone: false
      }
      if (this.text == '')
        return;
      this.todos.push(todo)
      this.text = ""
    },
    deleteTodos: function (index) {
      this.todos.splice(index,1)
    }
  }
}
</script>
<style lang="scss">

li {
  span.done {
    color: red;
    text-decoration: underline;
  }
}

</style>