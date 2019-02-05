import Vue from "nativescript-vue";

import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router"

Vue.prototype.$router = router
Vue.use(VueAxios, axios)

const applicationSettings = require("tns-core-modules/application-settings");

applicationSettings.setString("Name", "John Doe");

new Vue({
    render: h => h('frame', [h(router['login'])])

}).$start()
