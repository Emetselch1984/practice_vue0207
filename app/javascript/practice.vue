<template>
  <div id="todoApp">
    <h1>TodoApp</h1>
    <form v-on:submit.prevent>
      <label for="text_field">入力してください</label>
      <input type="text" id="text_field" v-model="text">
      <button v-on:click="addTodo">保存する</button>
    </form>
    <pre>{{$data}}</pre>
  </div>
</template>
<script>
export default {
  name: 'todoApp',
  data: function () {
    return {
      text: "",
      todos: []
    }
  },
  methods: {
    addTodo: function () {
      var todo = {
        text: this.text
      }
      if (this.text == '')
        return;
      this.todos.push(todo)
      this.text = ""
    }
  }
}
</script>