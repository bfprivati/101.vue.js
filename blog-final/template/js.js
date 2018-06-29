const MODAL_WIDTH = 656

Vue.component('login-modal', {
    template: "#login-modal",
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
});

Vue.component('post-modal', {
    template: "#post-modal",
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
});

Vue.component('new-post-modal', {
    template: "#new-post-modal",
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
});


Vue.component('page', {
    template: '#page'
})



new Vue({
    el: '#app',
    data: {
        page: 1,
        title: 'PROJETO: Vuejs',
        login: false,
        showModal: false,
        menu_list: [
            { title: 'cadastro' },
            { title: 'login' }
        ]
    },
    components: {
    },
    methods: {
        showLoginModal: function () {
            this.showModal = true;
        },
        showPostModal: function () {
            this.showModal = true;
        },
        showNewPostModal: function () {
            this.showModal = true;
        },
        submitLogin: function(event) {
            event.preventDefault();
            document.getElementById('login-form').submit();
        },
        submiNewUser: function (event) {
            event.preventDefault();
            document.getElementById('login-form').submit();
        }
    }

})



