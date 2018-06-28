const MODAL_WIDTH = 656

Vue.component('ShowLoginModal', {
    template: "#login",
    props: ['show'],
    data () {
        return {
        modalWidth: MODAL_WIDTH
        }
    },
    created () {
        this.modalWidth = window.innerWidth < MODAL_WIDTH
        ? MODAL_WIDTH / 2
        : MODAL_WIDTH
    },
    methods: {
        close: function () {
            this.$emit('close');
            this.title = '';
            this.body = '';
        },
        savePost: function () {
            // Some save logic goes here...
            
            this.close();
        }
    }

});

Vue.component('page', {
    template: '#page'
})

new Vue({
    el: '#app',
    data: {
        title: 'PROJETO: Vuejs',
        ShowLoginModal: false,
        menu_list: [
            { title: 'cadastro' },
            { title: 'login' }
        ]
    },

})



