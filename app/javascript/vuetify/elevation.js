document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: '#elevation',
        vuetify: new Vuetify(),
        data: () => ({
            elevations: [6, 12, 18],
        }),
    })
})