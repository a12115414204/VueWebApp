<template>
  <div class="header">
      <div class="neirong">
        <div class="touxiang" v-bind:style="{'background-image':'url('+seller.avatar+')'}">
        </div>
        <div class="content">
          <div class="title">
            <span class="pinpai"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="miaoshu">
            {{seller.description}}/{{seller.deliveryTime}}分钟送达
          </div>
          <div v-if="seller.supports" class="support">
            <span class="icon" :class="classMap[seller.supports[1].type]"></span>
            <span class="text">{{seller.supports[1].description}}</span>
          </div>
          <div v-if="seller.supports" class="wuge" @click="Showfuceng">
            <span class="wuge_content">{{seller.supports.length}}个</span>
            <svg class="icons youjiantou" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use>
            </svg>
          </div>
        </div>
      </div>
      <div class="gonggao" @click="Showfuceng">
        <span class="gonggao_title"></span>
        <span class="gonggao_text">{{seller.bulletin}}</span>
        <svg class="icons youjiantou jiantou_gonggao" aria-hidden="true">
              <use xlink:href="#icon-jiantou-copy"></use>
        </svg>
      </div>
      <div class="head_background" v-bind:style="{'background-image':'url('+seller.avatar+')'}">
      </div>
      <transition name="fade">
        <div v-show="fucengShow" class="header_fucheng">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="names">{{seller.name}}</h1>
              <div class="star-wrapper">
                <wuxing v-if="seller.score" :size="48" :score="seller.score"></wuxing>
              </div>
              <div class="wuxing_title">
                <div class="wuxing_line"></div>
                <div class="wuxing_text">优惠信息</div>
                <div class="wuxing_line "></div>
              </div>
              <ul v-if="seller.supports" class="ul_youhui">
                <!-- v-for vue2.0语法 更改  直接使用item -->
                <li class="li_youhui" v-for="item in seller.supports">
                  <span class="youhui_icon" :class="classMap[item.type]" ></span>
                  <span class="youhui_text">{{item.description}}</span>
                </li>
              </ul>
              <div class="wuxing_title">
                <div class="wuxing_line"></div>
                <div class="wuxing_text">商家公告</div>
                <div class="wuxing_line"></div>
              </div>
              <div class="shangjia_content">
                <p>{{seller.bulletin}}</p>
              </div>
            </div>
          </div>
          <div class="detail-close" @click="guanbi">
            <svg class="icons chas" aria-hidden="true">
                <use xlink:href="#icon-cha"></use>
              </svg>
          </div>
      </div>
    </transition>
  </div>
</template>
<script> 
import tubiao from '../../common/js/iconfont.js';
// 引入  五星的组件
import wuxing from 'com/star/star';
export default {
  components:{
    wuxing
  },
  data(){
    return{
      msg:this.seller,
      fucengShow:false
    }
  },
  methods:{
    Showfuceng(){
      this.fucengShow = true;
    },
    guanbi(){
      this.fucengShow = false;
    }
  },
  mounted(){
    console.log(this.seller);
  },
  props:["seller"],
  created(){
    this.classMap = ['decrease','discount','special','invoice','guarantee']
  }
}
</script>
<style lang="scss" scoped>
  /* 写scss 第一步 需要在style 标签里
   写入  lang=‘scss’ 
   scoped 是当前区域内有效
  */

  /* 第二部  引入我们的公共样式 
      tongyongyangshi.scss 
  */
  @import '../../common/scss/tongyongyangshi';
  
  .icons {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
   color: white;
}
  .header{
    @include wg(100%,2.66rem);
    @include color(white);
    @include background(rgba(7,17,27,0.5));
    @include dingwei(1,auto,auto,auto,auto);
    @include fd;
    // 头部区域的内容区域
    .neirong{
      @include padd(0.48rem,0.32rem,0.36rem,0.48rem);
      @include fd;
      @include dingwei(1,auto,auto,auto,auto);
      .touxiang{
        @include wg(1.28rem,1.28rem);
        @include bg;
        @include float(1);
        border-radius: 0.04rem
      }
      .content{
        @include float(1);
        @include ml(0.32rem);
        @include mt(0.04rem);
        margin-bottom: 0.04rem;
        .title{
          @include fd;
          .pinpai{
            @include wg(0.6rem,0.36rem);
            @include float(1);
            @include bg-img('brand');
            @include bg;
          }
          .name{
            @include fs(0.32rem);
            font-weight: bold;
            @include lh(0.36rem);
            @include float(1);
            @include ml(0.12rem);
          }
        }
        .miaoshu{
          @include mt(0.16rem);
          @include fs(0.24rem);
          font-weight: 288;
          @include lh(0.24rem);
        }
        .support{
          @include mt(0.2rem);
          @include fs(0.2rem);
          font-weight: 200;
          @include lh(0.24rem);

          .icon{
            display: inline-block;
            @include wg(0.24rem,0.24rem);
            margin-right: 0.08rem;
            @include bg;
            vertical-align: top;

            &.decrease{
              @include bg-img('decrease_1');
            }
            &.discount{
              @include bg-img('discount_1');
            }
            &.guarantee{
              @include bg-img('guarantee_1');
            }
            &.invoice{
              @include bg-img('invoice_1');
            }
            &.special{
              @include bg-img('special_1');
            }
          }
          .text{
            @include fs(0.2);
            font-weight: 200;
            @include lh(0.24rem);
            vertical-align: top;
          }
        }
        .wuge{
          @include dingwei(2,auto,0.24rem,0.36rem,auto);
          height: 0.48rem;
          @include fs(0.2rem);
          padding: 0 0.16rem;
          border-radius: 14px;
          @include background(rgba(0,0,0,0.2));
          @include ta;
          vertical-align: top;
          .wuge_content{
            font-weight: 200;
            @include lh(0.48rem);
          }
          .youjiantou{
            vertical-align: center;
            @include lh(0.48rem);
            @include ml(0.04rem);
          }
        }
      }
    }
    // 当前区域为头部的公告区域
    .gonggao{
      @include background(rgba(7,17,27,0.2));
      @include wg(auto,0.56rem);
      @include lh(0.56rem);
      padding: 0 0.24rem;
      white-space: nowrap;
      @include fd;
      text-overflow: ellipsis;
      @include dingwei(1,auto,auto,auto,auto); 
      .gonggao_title{
        display: inline-block;
        @include wg(0.44rem,0.24rem);
        @include bg-img(bulletin);
        @include bg;
        @include mt(0.14rem);
        vertical-align: top;
      }
      .gonggao_text{
        @include ml(0.08rem);
        @include fs(0.2rem);
        vertical-align: top;
      }
      .jiantou_gonggao{
        @include dingwei(2,0.2rem,0.12rem,auto,auto);
        z-index: 2;
      }
    }
    .head_background{
      @include dingwei(2,0,auto,auto,0);
      @include wg(100%,100%);
      @include bg;
      z-index: -1;
      // 阴影过滤
      filter: blur(10px);
    }
    // 5个 覆层区域
    .header_fucheng{
      @include dingwei(3,0,auto,auto,0);
      @include wg(100%,100%);
      z-index: 100;
      overflow: auto;
      @include background(rgba(7,17,27,0.8));
      transition: all 0.5 ease; 
    // 清除浮动的基本样式.
      .clearfix{
        display: inline-block;
        :after{
          display: block;
          content: ".";
          height: 0;
          @include lh(0);
          clear: both;
          visibility: hidden;
        }
      }
      .detail-wrapper{
        width: 100%;
        min-height: 100%;
        .detail-main{
          @include mt(1.28rem);
          padding-bottom: 0.64rem;
          .names{
            @include fs(0.32rem);
            font-weight: 700;
            @include lh(0.32rem);
          }
          .star-wrapper{
            @include mt(0.32rem);
            @include ta;
          }
          .wuxing_title{
            display: flex;
            width: 80%;
            @include margins(0.56rem,auto,0.48rem,auto);
            .wuxing_line{
              flex: 1;
              transform: translateY(-0.12rem);
              border-bottom: 1px solid rgba(255,255,255,0.2);
            }
            .wuxing_text{
              flex: 1;
              @include ta;
              padding: 0,0.24rem;
              @inlcude fs(0.28rem);
              font-weight: 700
            }
          }
          .ul_youhui{
            @include wg(80%,auto);
            @include margins(0.48rem,auto,0,auto);
            .li_youhui{
              @include margins(0.24rem,0.24rem,0.24rem,0.24rem);
              .youhui_icon{
                display: inline-block;
                vertical-align: top;
                @include wg(0.32rem,0.32rem);
                @include mr(0.12rem);
                @include bg;
              }
              .youhui_text{
                display: inline-block;
                @include wg(auto,0.32rem);
                vertical-align: top;
                @include lh(0.32rem);
                @include fs(0.24rem);
                font-weight: 200;
              }
            }
          }
          .shangjia_content{
            @include margin(0);
            @include mt(0.48rem);
            @include wg(80%,auto);
            
            p{
              padding: 0 0.24rem;
              @include fs(0.24rem);
              font-weight: 200;
              @include lh(0.48rem);
            }
          }
        }
      }
      // head 头部区域 当中  v-for循环图片类名
      .decrease{
        @include bg-img('decrease_1');
      }
      .discount{
        @include bg-img('discount_1');
      }
      .guarantee{
        @include bg-img('guarantee_1');
      }
      .invoice{
        @include bg-img('invoice_1');
      }
      .special{
        @include bg-img('special_1');
      }
      .detail-close{
        @include dingwei(1,auto,auto,auto,auto);
        @include wg(0.64rem,0.64rem);
        @include margins(-0.64rem,auto,0.64rem,auto);
        clear: both;
        @include fs(0.64rem);
        .chas{
          color: gray;
        }
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: all 0.5s ease
    }
    .fade-enter, .fade-leave-active {
      opacity: 0;
      @include background(rgba(7,17,27,0));
    }
  }

</style>




