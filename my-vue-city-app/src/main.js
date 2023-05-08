// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 뷰엑스 스토어 JS 불러오기!!
import store from './store'


/* 🔥뷰 인스턴스 생성하기🔥 */
new Vue({
  el: '#app',
  store, // 스토어 사용 인스턴스 등록 : 이 app안에서 스토어를 쓸 것이니까 쓴다고 등록해야함
  components: { App },
  template: '<App/>',
  created(){
    // 스토어에 있는 initSet 메서드는 어떻게 호출하지??
    // 스토어 호출 메서드가 따로 있음!
    // store.commit("메서드명", 파라미터값)
    // 1.메서드명은 반드시 문자형으로 입력하기
    // 2.파라미터는 단일값 또는 객체형식으로 보낼 수 있음 (=파라미터 값을 여러개 보내고 싶을 땐 객체로도 보낼 수 있음)
    // 인스턴스 내부 구역에 코딩시에는 store에 $를 붙이지 않음
    // store.commit("initSet", "https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg"); // 👉 파라미터로 단일값 보낸 경우
    store.commit("initSet",
    {
        url:"https://img.freepik.com/premium-vector/city-illustration_23-2147514701.jpg",
        txt:"도시 소개에 오신 것을 환영합니다."
    }
    );

    // actions 메서드 호출하기 : dispatch("메서드명", "전달값") 사용하기
    store.dispatch("myAct", "나야나");
    
}, //////////////// created 구역 ///////////////////
  // name을 바꾸면 바꾼 것으로 템플릿의 태그명을 지어주면 됨
})
