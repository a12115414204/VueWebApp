<template>
  <div class="star" :class="starType">
      <span v-for="itemClass in itemClasses" :class="itemClass" id="star-item"></span>

  </div>
</template>
<script>
    let LENGTH = 5,CLS_ON = 'on',CLS_HALF = 'half',CLS_OFF = 'off'
export default {
  props:{
    size:{
        type:Number
    },
    score:{
        type:Number
    }  
  },
  computed:{
      starType(){
          return "star-"+this.size;
      },
      itemClasses(){
          let result = [];
          let scores = Math.floor(this.score *2) / 2;
          let xiaoshu = scores % 1 !== 0;
          let zhengshu = Math.floor(scores);
        //   循环出多个星星
          for (var i = 0; i < zhengshu; i++) {
              result.push(CLS_ON);
              
          }
        //  判断半个星星
          if (xiaoshu) {
              result.push(CLS_HALF);
          }
        // 剩下的星星 用while 循环判断 打印
        while (result.length<LENGTH) {
            result.push(CLS_OFF);
        }
        return  result;
      }
  }
}
</script>
<style lang="scss" scoped>
    @import '../../common/scss/tongyongyangshi';
    .star{
        #star-item{
            display: inline-block;
            @include bg;
            @include wg(0.4rem,0.4rem);
            @include mr(0.44rem);
        }
    }
    .star-48{ 
        span:last-child{
            @include mr(0);
        }
        .on{
        @include bg-img('star48_on');
        }
        .half{
            @include bg-img('star48_half');
        }
        .off{
            @include bg-img('star48_off');
        }
    }
    .star-36{
        #star-item{
            @include wg(0.3rem,0.3rem);
            @include mr(0.12rem);
        }
        span:last-child{
            @include mr(0);
        }
        .on{
        @include bg-img('star36_on');
        }
        .half{
            @include bg-img('star36_half');
        }
        .off{
            @include bg-img('star36_off');
        }
    }
    .star-24{
        #star-item{
            @include wg(0.2rem,0.2rem);
            @include mr(0.06rem);
        }
        span:last-child{
            @include mr(0);
        }
        .on{
        @include bg-img('star24_on');
        }
        .half{
            @include bg-img('star24_half');
        }
        .off{
            @include bg-img('star24_off');
        }   
    }
</style>


