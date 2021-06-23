<template>
  <div id="todoApp">
    <h1>TodoApp</h1>
    <form>
      <label for="text_field">入力してください</label>
      <input type="text" id="text_field" v-model="text">
    </form>
    <pre>{{$data}}</pre>
  </div>
</template>
<script>
export default {
  name: 'todoApp',
  data: function () {
    return {
      text: ""
    }
  }
}
</script>