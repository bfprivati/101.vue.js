Vue.component('page', {
    template: '#page'
})

new Vue({
    el: '#app',
    data: {
        title: 'Vue.js Project',

        menu_list: [
            { title: 'login' },
            { title: 'novo' }
        ]
    }
})



