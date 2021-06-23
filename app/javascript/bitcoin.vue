<template>
  <div id="bitcoin">
    <h1>BitCoin</h1>
    <ul>
      <li v-for="value in bpi">
        {{value.code}}:{{value.rate_float}}
      </li>
    </ul>
    <pre>{{$data}}</pre>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'bitcoin',
  data: function () {
    return {
      bpi:null
    }
  },
  mounted:function () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function (response) {
          // handle success
          console.log(response);
          console.log(response.data.bpi);
          this.bpi = response.data.bpi
        }.bind(this))
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
  }
}
</script>
<style>

</style>