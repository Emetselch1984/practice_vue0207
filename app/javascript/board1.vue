<template>
  <div id="board1">
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
          <form :listIndex="listIndex" class="addcard" @submit.prevent="addCardToList">
            <input v-model="body"
                   type="text"
                   class="text-input"
                   placeholder="Add new card"
            />
            <button type="submit" class="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    </main>
    <pre>{{$data}}</pre>
    <pre>{{$props}}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "board1",
  data: function() {
    return {
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
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
    removeList: function () {
      this.$store.dispatch('removelist',{listIndex: this.listIndex})
    },
    addCardToList: function() {
      this.$store.dispatch('addCardToList', { body: this.body, listIndex: this.listIndex })
      this.body = ''
    }
  },
  computed: {
    ...mapState([
      'lists'
    ]),
  },
  components: {

  },
}
</script>
