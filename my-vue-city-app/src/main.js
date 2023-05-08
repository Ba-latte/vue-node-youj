// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


/* 🔥뷰 인스턴스 생성하기🔥 */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
  // name을 바꾸면 바꾼 것으로 템플릿의 태그명을 지어주면 됨
})
