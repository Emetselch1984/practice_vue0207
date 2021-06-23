<template>
  <div id="board3">
    <header>
      my Trello
    </header>
    <main>
      <p>All: 0 tasks</p>
      <form @submit.prevent="addList">
        <input v-model="title"
               type="text"
        >
        <button type="submit" >
          Add
        </button>
      </form>
      <div class="list-index">
        <div v-for="(item, index) in lists"
             :key="item.id"
             :title="item.title"
             :listIndex="index">
          <p class="list-title">{{ item.title }}</p>
          <div class="deletelist" @click="removeList">×</div>
<!--          <form :listIndex="listIndex" class="addcard" @submit.prevent="addCardToList">-->
<!--            <input v-model="body"-->
<!--                   type="text"-->
<!--                   class="text-input"-->
<!--                   placeholder="Add new card"-->
<!--            />-->
<!--            <button type="submit" class="add-button">-->
<!--              Add-->
<!--            </button>-->
<!--          </form>-->
        </div>
      </div>
    </main>
    <pre>{{$data}}</pre>
    <pre>{{$props}}</pre>
  </div>
</template>

<script>


export default {
  name: "board3",
  data: function() {
    return {
      lists: [],
      list_date: [],
      title: '',
      body: '',
      listIndex: '',
    }
  },
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   listIndex: {
  //     type: Number,
  //     required: true
  //   }
  // },
  methods: {
    addList: function () {
      this.list_date.push({title: this.title})
      this.list_date.push({listIndex: this.listIndex})
      this.lists.push(this.list_date)
      this.title = ''
    },
    removeList: function () {
      this.lists.splice(this.listIndex, 1)
    },
    // addCardToList: function() {
    //   this.$store.dispatch('addCardToList', { body: this.body, listIndex: this.listIndex })
    //   this.body = ''
    // }
  },
}
</script>
