<template>
  <div id="app">
    <!-- 组件第三步  起的名称请放入此位置 -->
  <v_header :seller="seller"></v_header>
  <div class="tabs">
    <router-link to="/shangpin" class="tab-item">商品</router-link>
    <router-link to="/pinglun" class="tab-item">评价</router-link>
    <router-link to="/shangjia" class="tab-item">商家</router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script type='text/ecmascript-6'>
  // 第一步 import 引入进来
  import v_header from 'headers/header'
  let ERR_OK = 0;
export default {
  // 第二部  注册组件
  components:{
    v_header
  },
  data(){
    return{
      seller:{}
    }
  },
  created(){
    this.$http.get('/api/seller').then((response)=>{
      response = response.body;
      console.log(response)
      if(response.errno == ERR_OK){
        this.seller = response.data;
        console.log(this.seller);
      }
    })
  }
}
</script>

<style lang = "scss" scoped>
@import './common/scss/tongyongyangshi';
    #app{
      overflow: hidden;
      .tabs{
        @include wg(100%,0.8rem);
        display: flex;
        border-bottom: 1px solid rgba(7,17,21,0.1);
        float: left;
        .tab-item{
          flex: 1;
          @include ta;
          @include lh(0.8rem);
        }
      .router-link-active{
        color: red;
      }
    }
    }
</style>
