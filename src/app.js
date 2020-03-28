import Vue from 'vue'
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from "./Button-Group"

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);


new Vue({
  el: '#app',
  data: {
    loading1: true
  }
});