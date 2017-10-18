<template>
  <div class="caidan">
    <div class="caidan_left">
      <ul>
        <li v-for="item in goods" class="caidan_left_item">
          <p class="caidan_text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </p>
        </li>
      </ul>
    </div>
    <div class="caidan_right">
      <ul>
        <li v-for="item in goods" class="caidan_right_item">
          <h1 class="caidan_right_title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="caidan_right_food">
              <div class="icon" v-bind:style="{'background-image':'url('+food.icon+')'}"></div>
              <div class="caidan_right_content">
                <h2 class="caidan_name">{{food.name}}</h2>
                <p class="caidan_miaoshu">{{food.description}}</p>
                <div class="caidan_extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}</span>
                </div>
                <div class="caidan_jiage">
                  <span>¥{{food.price}}</span>
                  <span v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  let ERR_OK = 0;
export default {
  data(){
    return{
      goods:{}
    }
  },
  props:{
    seller:{
      type:Object 
    }
  },
  created(){
    this.$http.get('./api/goods').then((response)=> {
      response = response.body;
      if(response.errno == ERR_OK){
        this.goods = response.data;
        console.log(this.goods);
      }
    });
    this.classMap = ['decrease','discount','special','invoice','guarantee']
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/scss/tongyongyangshi.scss';
@import '../../common/scss/shangpin/shangpin';
</style>


