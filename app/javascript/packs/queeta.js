import Vue from 'vue/dist/vue.esm'
document.addEventListener('DOMContentLoaded', () => {
    console.log("hello")
    var app = new Vue(
        {
            el: "#app",
            data: {
                items: null,
                keyword: "",
                message: ""
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
    )
});