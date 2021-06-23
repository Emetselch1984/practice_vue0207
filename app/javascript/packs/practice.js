import Vue from 'vue';
import Practice0623 from '../practice.vue';

document.addEventListener('DOMContentLoaded', () => {
    const practice0623 = new Vue({
        render: h => h(Practice0623)
    }).$mount();
    document.body.appendChild(practice0623.$el);
})