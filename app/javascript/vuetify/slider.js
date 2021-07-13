document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#slider',
        vuetify: new Vuetify(),
        data: () => ({
            model: 3,
            rounded: [
                '0',
                'sm',
                'md',
                'lg',
                'xl',
                'pill',
                'circle',
            ],
        }),

        computed: {
            radius () {
                let rounded = 'rounded'
                const value = this.rounded[this.model]

                if (value !== 'md') {
                    rounded += `-${value}`
                }

                return rounded
            },
        },
    })
})