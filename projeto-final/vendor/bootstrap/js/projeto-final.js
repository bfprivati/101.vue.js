function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
            }
        } 
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
        }
    }
}

Vue.component('Modal', {
    template: '#modal-template',
    props: ['show'],
    methods: {
        close: function () {
        this.$emit('close');
        }
    },
    mounted: function () {
        document.addEventListener("keydown", (e) => {
        if (this.show && e.keyCode == 27) {
            this.close();
        }
        });
    }
});
  
Vue.component('ShowAboutModal', {
    template: '#show-about-modal-template',
    props: ['show'],
    data: function () {
        return {
        title: '',
        body: ''
        };
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

Vue.component('ShowContactModal', {
    template: '#show-contact-modal-template',
    props: ['show'],
    data: function () {
        return {
        comment: ''
        };
    },
    methods: {
        close: function () {
        this.$emit('close');
        this.comment = '';
        },
        postComment: function () {
        // Some save logic goes here...
        
        this.close();
        }
    }
});

new Vue({
    el: '#app',
    data: {
        ShowAboutModal: false,
        ShowContactModal: false
    }
});