import Vue from 'vue'
import App from './app.vue'

import './assets/styles/test.css'
import './assets/styles/test-stylus.styl'
import './assets/images/3361f3a540b3707d6bf9c8018c0f0a79.jpg'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: (h) => h(App)
}).$mount(root);