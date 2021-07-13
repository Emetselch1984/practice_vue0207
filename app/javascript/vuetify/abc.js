document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#app',
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
            elevations: [6, 12, 18],
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