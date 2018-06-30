Vue.component('login-modal', {
    template: "#login-modal",
});

Vue.component('new-post-modal', {
    template: "#new-post-modal",
});

Vue.component('post-modal', {
    template: "#post-modal",
});

Vue.component('body-grid', {
    template: "#body-grid",
});

Vue.component('page', {
    template: '#page'
});

new Vue({
    el: '#app',
    data: {
        title: 'PROJETO: Vuejs',
        login: false,
        showModalLogin: false,
        showModalPost: false,
        showModalNewPost: false,
        showPostCards: true,
        tag_items: 5,
        items: ['TAG1', 'TAG2', 'TAG2', 'TAG4','TAG5']
    },
    components: {
    },
    methods: {
        showLoginModal: function () {
            this.showModalLogin = true;
        },
        showPostModal: function () {
            this.showModalPost = true;
        },
        showNewPostModal: function () {
            this.showModalNewPost = true;
        },
        submitLogin: function(event) {
            event.preventDefault();
            document.getElementById('login-form').submit();
        },
        submiNewUser: function (event) {
            event.preventDefault();
            document.getElementById('login-form').submit();
        },
        submitPost: function event() {
            event.preventDefault();
            document.getElementById('new-post-form').submit();
        }
    }

})