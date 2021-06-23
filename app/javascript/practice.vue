<template>
  <div id="todoApp">
    <h1>hello</h1>
    <pre>{{$data}}</pre>
  </div>
</template>
<script>
export default {
  name: 'todoApp',
  data: function () {
    return {
      message: "hello"
    }
  }
}
</script>