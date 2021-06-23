<template>
  <section id="qiita">
    <h1>qiitaの記事を検索する</h1>
    <label for="keyword">キーワード</label>
    <input type="text" v-model="keyword" id="keyword">
    <p>{{message}}</p>
    <ul>
      <li v-for="item in items">
        <!--      {{item.url}}-->
        <a v-bind:href="item.url" target="_blank">{{item.title}}</a>
        いいね:{{item.likes_count}}
      </li>
    </ul>
    <pre>{{$data}}}</pre>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  name: "qiita",
  data: function (){
    return{
      items: null,
      keyword: "",
      message: ""
    }
  },
  watch: {
    keyword: function (newkey,oldkey) {
      console.log(newkey)
      this.message = "roading-----"
      this.debounceGetanwer()
    }
  },
  created: function () {
    // this.keyword = ''
    this.debounceGetanwer = _.debounce(this.getAnswer,1000)
  },
  methods: {
    getAnswer: function (){
      if (
          this.keyword === ''
      ){
        this.items = null
        return;
      }
      this.message = "roading-----"
      var vm = this;
      var params = {page: 1 , per_page: 20, query: this.keyword};;
      axios.get('https://qiita.com/api/v2/items',{params})
          .then(function (response){
            console.log(response)
            vm.items =response.data
          })
          .catch(function (error){
            vm.message= 'Error!!!' + error
          })
          .finally(function () {
            vm.message = ''
          })
    }
  }
}
</script>
<!--<template>-->
<!--  <h1>heelo</h1>-->
<!--  <div id="qiita">-->
<!--    <label for="keyword">キーワード</label>-->
<!--    <input type="text" v-model="keyword" id="keyword">-->
<!--    <p>{{message}}</p>-->
<!--    <ul>-->
<!--      <li v-for="item in items">-->
<!--        &lt;!&ndash;      {{item.url}}&ndash;&gt;-->
<!--        <a v-bind:href="item.url" target="_blank">{{item.title}}</a>-->
<!--        いいね:{{item.likes_count}}-->
<!--      </li>-->
<!--    </ul>-->
<!--    <pre>{{$data}}</pre>-->
<!--  </div>-->
<!--</template>-->
