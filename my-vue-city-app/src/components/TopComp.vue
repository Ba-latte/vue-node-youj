<template>
  <header>
    <ul class="gnb">
      <!-- 배열에서는 v : 값, i는 속성명 -->
      <!-- 👇리액티브 데이터인 뷰엑스 스토어 cityData변수를 컴포넌트 변수인 sdata에 할당하여 사용하면, 처음에만 할당된 변수로 세팅이 되고 cityData가 변경될 때 반영되지 않음! 따라서 리액티브 데이터인 실제 데이터를 직접 해당 자리에 사용해야함 -->
      <!-- <li v-for="(v, i) in sdata " v-bind:key="i" v-if="i!='인트로'"> -->
      <li v-for="(v, i) in this.$store.state.cityData " v-bind:key="i" v-if="i!='인트로'">
        <a href="#" v-on:click="chgData(i)">{{ i }}</a>
      </li>
    </ul>
    <!-- 메뉴 선택 이동 링크 -->
    <div class="m2">
      <a href="#" v-on:click="chgMenu(num)" v-text="'메뉴'+num"></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopArea",
  data() {
    return {
      // 1.도시정보 객체 변수 : sdata
      sdata: this.$store.state.cityData,
      // : 이렇게 실제 데이터를 담은 변수는 처음에만 할당된 변수로 세팅이 되고, 실시간 업데이트가 되지 않기 때문에 리액티브 데이터인 실제 데이터를 해당 자리에 직접 써야함
      // 2.메뉴 번호 : num (처음에 다음 메뉴인 2번 넣어둠)
      num: 2
    };
  },
  methods: {
    // 스토어 변수 업데이트 메서드
    chgData(pm) {
      console.log("업데이트!", pm);
      // 뮤테이션 메서드 호출하기!
      this.$store.commit("chgData", pm);
    },
    // 메뉴 변경하기 메서드
    chgMenu(n){
      // n - 메뉴번호 전달
      console.log("메뉴변경 : ", n);
      // 뮤테이션 메서드 호출하기!
      this.$store.commit('chgMenu', n);

      // 메뉴1/메뉴2 전환을 위한 변수 변경하기
      // 컴포넌트 변수인 num을 변경한다!
      n===1? this.num=2 : this.num=1;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m2{
  display: block;
  text-align: right;
}
.m2 a{
  font-size: 20px;
}
.m2 a:hover{
  text-decoration: underline;
  text-decoration-style: double;
  color: green;
}
header {
  padding: 15px;
  border: 2px solid #ccc;
}
header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0 15px;
}
header a {
  font-size: 30px;
  color: #222;
  text-decoration: none;
}
header a:hover,
header a.on {
  color: orangered;
  text-decoration: overline;
  text-decoration-style: wavy;
}
</style>
