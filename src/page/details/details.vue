<template>
    <div id="doc" class="container">
        <div id="doc-header" class="navbar-cart">
            <a href="javascript:void(0);"></a>
            <div class="navbar-title">商品详情</div>
            <div class="compile"></div>
        </div>
        <div id="doc-body">
            <div class="tabs">
                <div class="banner-container">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item,index) in img "
                                 :style='{backgroundImage:"url("+item.imgurl+")"}'
                                    ></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
            <div class="tabs ulite-js-tabs ulite-js-ripple-effect">
                <div class="referral-container">
                    <div class="referral">{{goods.name}}</div>
                    <div class="referral-price">￥<span class="price">{{goods.price}}</span></div>
                    <!--<div class="referral-postage">
                        <div class="postage">包邮</div>
                    </div>-->
                </div>
            </div>
            <div class="segmentation-first"></div>
            <div class="segmentation"></div>
            <div class="tabs">
                <div class="gift-container" @click="mask_hidden=!mask_hidden;mask_content=!mask_content">
                    <div class="gift-box">请选择商品型号</div>
                    <div class="gift-right"></div>
                </div>
            </div>
            <div class="segmentation"></div>
            <div class="tabs ">
                <div class="details-container">
                    <div class="details-head">商品详情</div>
                    <div class="details"></div>
                </div>
            </div>
            <div id="doc-foot" class="navbar-fixed-top navbar-fixed-foot container">
                <a class="shop-contact btn-link">
                    <div class="icon"></div>
                    <div class="introduce">联系卖家</div>
                </a>
                <div class="shop-classify">
                    <div class="icon"></div>
                    <div class="introduce">进店</div>
                </div>
                <div class="shop-enshrine">
                    <div class="icon"></div>
                    <div class="introduce">收藏</div>
                </div>
                <div class="shop-foot">
                    <div class="addToCart">加入购物车</div>
                    <div class="buyImmediately">立即购买</div>
                </div>
            </div>
        </div>
        <div id="mask-body" class="modal-box" :class="{'hidden':mask_hidden}"></div>
        <transition name="fade">
        <div class="version-content"  v-if="mask_content">
            <div class="version-box">
                <div class="version-head">
                    <div class="version-portrait">
                        <div class="portrait"
                             :style='{backgroundImage:"url("+img[0].imgurl+")"}'></div>
                    </div>
                    <div class="version-pirce">
                        <span>￥</span><span class="price">{{sku[skuIndex].price}}</span>
                    </div>
                    <div class="version-close" @click="mask_content=!mask_content">&times;</div>
                    <div class="rummage-sale hidden">该价格中将有<span class="rummage"></span>元用于捐赠慈善机构</div>
                </div>
                <div class="version-size-content">
                    <div class="size">尺寸类型</div>
                    <div class="size-content">
                        <div class="size-list" v-for="(item,index) in sku"
                                @click="changeSize(index)"
                                >{{item.modelnumber}}</div>
                    </div>
                    <div class="size">数量</div>
                    <div class="sum-content">
                        <div class="sum">
                            <div class="reduceSum" @click="reduceSum">-</div>
                            <input type=""  v-model="shopSum" @blur="checkSum" />
                            <div class="addSum" @click="addSum">+</div>
                        </div>
                        <div class="repertory-content">
                            <span>库存&nbsp;</span><span class="repertory">{{sku[skuIndex].stock}}</span>
                        </div>
                    </div>
                </div>
                <div class="version-foot">
                    <div id="addToCart">加入购物车</div>
                    <div id="buyImmediately">立即购买</div>
                </div>
            </div>
        </div>
        </transition>
        <transition name="show">
            <div class="car-content" v-if="mask_content">
                <div class="knob-car" @click="toCart">
                    <a href="#"></a>
                </div>
            </div>
        </transition>


    </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        data(){
            return {
                shop:{
                    id:this.$route.params.shopId,
                    goodsId:this.$route.params.goodsId,
                    index:this.$route.params.index
                },
                goods:{

                },
                img:[],
                sku:[],
                shopmobile:{},
                mask_hidden:true,
                mask_content:false,
                skuIndex:0,
                shopSum:1,

            }
        },
        mounted:function(){
            this.createSwiper()
            this.goodsDetails()

        },
        computed:{



        },


        methods:{
            createSwiper(){
                new Swiper ('.swiper-container', {
                    pagination: '.swiper-pagination',
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    pagination: '.swiper-pagination',
                    autoplayDisableOnInteraction : false,
                    autoplay:3000,
                    coverflow: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows : true
                    }
                })
            },
            goodsDetails(){
                //获取id和token
                //请求接口
                var that = this
                let url = '/api/goods/detail/'+this.shop.id
                let id = localStorage.getItem('id')
                let token = localStorage.getItem('token')
                console.log(id,token)
                if(id && token){
                    let params={}
                    params.goodsId = this.shop.goodsId
                    params.id = id
                    params.token = token
                    this.$api.post(url,params,r=>{
                        let goods = r.data.goods
                        //商品
                        for(let x in goods){
                            console.log(x)
                            that.$set(that.goods,x,goods[x])
                        }
                        console.log(this.goods)
                        //图片
                        let imgList =  r.data.img
                        imgList.forEach(function(item){
                            that.img.push(item)
                        })
                        console.log(that.img)
                        let skuList = r.data.sku
                        skuList.forEach(function(item){
                            that.sku.push(item)
                        })
                        console.log(that.img)

                },r=>{
                        var data = r.message
                        this.$toast(data);
                    })
                }else{
                    this.$router.push({name: 'login'})
                }

             },
            changeSize:function(index){
                console.log(index)
                this.skuIndex = index
            },
            reduceSum:function(){
                this.shopSum--
                if(this.shopSum<1){
                    this.shopSum = 1
                }

            },
            addSum:function(){
                this.shopSum++
                if(this.shopSum>this.sku[this.skuIndex].stock){
                    this.shopSum = this.sku[this.skuIndex].stock
                }
            },
            checkSum:function(){
                if(this.shopSum<1||this.shopSum==''){
                    this.shopSum = 1
                }else if(this.shopSum>this.sku[this.skuIndex].stock){
                    this.shopSum = this.sku[this.skuIndex].stock
                }
            },
            toCart:function(){
                this.$router.push({name: 'cart',params:{'shopId':this.shop.id}});
            }



    }


    };
</script>

<style lang="less">
#doc-body{
    padding-top: 0.68rem;
    padding-bottom:0.98rem ;
}
.banner-container{
    position: relative;
    .swiper-slide{
        background: url(../../../static/images/placeholder.png) center no-repeat;
        width: 100%;
        background-size:100% 100%;
        height: 4.8rem;
        .cover-images{
            width: 100%;
            height: 100%;
            background-size:100% 100%;
        }
    }
    .swiper-pagination-bullet-active{
        background: #fff;
    }
    .sales-container{
        position: absolute;
        left: 0.32rem;
        bottom: 0;
        font-size:13px;
        color: #fff;
        padding: 0.05rem 0.14rem;
        background: #000;
        z-index: 10000;
    }
}
    .referral-container{
        font-size:14px ;
        padding: 0.38rem 0.32rem 0.01rem;
        overflow: hidden;
        text-align:left;
        .referral{
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    .referral-price{
        margin:0.1rem 0;
        color: #df3e0f;
        font-size:16px ;
    }
//  .referral-postage{
//      .postage{
        //          float: left;
        //          padding: 0 0.18rem;
        //          height: 0.34rem;
        //          line-height: 0.34rem;
        //          text-align: center;
        //          color: #df3e0f;
        //          border: 1px solid #df3e0f;
        //      }
//  }
}
    .segmentation{
        height: 0.14rem;
        background: #f1f1f1;
    }
    .segmentation-first{
        height: 0.05rem;
        background: #f1f1f1;
    }
    .gift-container{
        padding: 0 0.32rem;
        height: 0.88rem;
        font-size:14px ;
        overflow: hidden;
        cursor: pointer;
    .gift-box{
        height: 0.88rem;
        line-height: 0.88rem;
        float: left;
    }
    .gift-right{
        height: 0.88rem;
        width: 0.88rem;
        float: right;
        background:url(/shop/run/dist/image/right.png) right center no-repeat;
    }
    }
    .postage-container{
        padding: 0 0.32rem;
        height: 0.88rem;
        font-size:14px ;
        overflow: hidden;
        cursor: pointer;
    .postage-box{
        height: 0.88rem;
        line-height: 0.88rem;
        float: left;
    }
    .postage-right{
        height: 0.88rem;
        width: 0.88rem;
        float: right;
        background:url(/shop/run/dist/image/right.png) right center no-repeat;
    }
}
.details-container{
    font-size: 14px;
    padding: 0.2rem 0.32rem;
    overflow: hidden;
    margin-bottom: 0.04rem;
    .details-head{
        text-align: center;
        margin-bottom: 0.3rem;
    }
//  .details{
    //      text-indent: 24px;
    //      text-overflow: -o-ellipsis-lastline;
    //      overflow: hidden;
    //      text-overflow: ellipsis;
    //      display: -webkit-box;
    //      -webkit-line-clamp: 2;
    //      -webkit-box-orient: vertical;
    //  }
}

.pic-list{
    margin-bottom: 0.18rem;
    img{
        width: 100%;
    }
}
.navbar-fixed-foot{

    .shop-enshrine{
        float: left;
        margin-left: 0.14rem;
    }
    .shop-classify,.shop-enshrine{
        width: 0.8rem;
    }
    .shop-contact{
        width: 1.4rem;
    }
    .shop-foot{
        float: right;
        margin-right: 0.32rem;
        font-size: 14px;
        width: 3.62rem;
        position: relative;
        .addToCart,.buyImmediately{
            position: absolute;
            top:0.18rem;
            height: 0.58rem;
            width: 1.7rem;
            text-align: center;
            line-height:0.58rem ;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
        }
        .addToCart{
            background: #ff781e;
            left: 0;
        }
        .buyImmediately{
            right: 0;
            background: #df3e0f;
        }
    }
}
    .version-content{
        font-size: 14px;
        position: fixed;
        bottom:0;
        z-index: 10000;
        width: 100%;
        overflow: hidden;
        height: 9rem;
        background-color:transparent ;
        .version-box{
            display: flex;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-direction:column;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            width: 100%;
            position: absolute;
            background: #fff;
            left: 0;
            bottom: 0;
        .version-head{
            width: 100%;
            position: relative;
            height: 1.88rem;
            border-bottom:1px solid #ccc ;
        .version-portrait{
            position: absolute;
            left: 0.32rem;
            top: -0.7rem;
            height: 2.2rem;
            width: 2.2rem;
            background: url(../../../static/images/shili.png) center no-repeat;
            background-size:2.2rem;
            .portrait{
                height: 2.2rem;
                width: 2.2rem;
                background-size:2.2rem;
            }
        }
    .version-pirce{
        position: absolute;
        left: 2.82rem;
        top: 0.28rem;
        color: #df3e0f;
    }
    .version-close{
        position: absolute;
        height: 0.9rem;
        line-height: 0.9rem;
        width: 0.9rem;
        text-align: center;
        font-size: 30px;
        right: 0;
        top: 0;
        cursor: pointer;
    }
.rummage-sale{
    position: absolute;
    left: 2.82rem;
    top: 0.8rem;
    color: #df3e0f;
    font-size:12px ;
}
}
.version-size-content{
    flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    overflow-y:scroll ;
    padding: 0.32rem 0.36rem;
.size{
    margin-bottom: 0.3rem;
}
.size-content{
    overflow: hidden;
    margin-bottom: 0.26rem;
    flex-wrap: nowrap;
.size-list{
    line-height: 0.44rem;
    border: 1px solid #ccc;
    padding: 0 0.16rem;
    margin-right: 0.4rem;
    margin-bottom: 0.20rem;
    cursor: pointer;
    float: left;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    max-width: 6.4rem;
}
.active{
    border: 1px solid #df3e0f;
    color: #df3e0f;
}
}
}
.sum-content{
    height: 0.62rem;
    font-size:14px ;
.sum{
    float: left;
    height: 0.60rem;
    width: 2.8rem;
    border:1px solid #ccc;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction:row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
.reduceSum,.addSum{
    height: 0.60rem;
    line-height: 0.60rem;
    color: #df3e0f;
    text-align: center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 16px;
    cursor: pointer;
}
input{
    outline: none;
    text-align: center;
    border: 0;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    height: 0.60rem;
    line-height: 0.60rem;
    width: 1rem;
}
}
.repertory-content{
    height: 0.62rem;
    float: left;
    overflow: hidden;
    margin-left: 0.3rem;
span{
    float: left;
    display: block;
    height: 0.62rem;
    line-height: 0.62rem;
}
}
}
.version-foot{
    height: 1.9rem;
    position: relative;
    border-top: 1px solid #ccc;
.addToCart,.buyImmediately,#addToCart,#buyImmediately{
    position: absolute;
    bottom: 0.56rem;
    height: 0.58rem;
    width: 1.8rem;
    text-align: center;
    line-height:0.58rem ;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}
.addToCart,#addToCart{
    right: 2.34rem;
    background: #ff781e;
}
.buyImmediately,#buyImmediately{
    right: 0.32rem;
    background: #df3e0f;
}
}
}

}
.postage-content{
    position: fixed;
    height: 0;
    bottom:0;
    z-index: 10000;
    transition: all .3s ease;
    width: 100%;
    overflow: hidden;
    background-color:transparent ;
.swiper-slide {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.postage-content-box{
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    flex-direction:column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    height: 8.61rem;
    position: absolute;
    background: #fff;
    left: 0;
    bottom: 0;
.postage-content-head{
    text-align: center;
    height: 1.5rem;
}
.postage-title{
    width: 100%;
    line-height: 1.5rem;
    text-align: center;
    font-size: 0.38rem;
    color:rgb(51,51,51);
    cursor: pointer;
}
.postage-content-body{
    width: 90%;
    font-size: 0.33rem;
    cursor: pointer;
    margin: 0 auto;
.remote, .freight{
    margin-top: 0.416rem;
}
.describe-top, .remote-area, .freight{
    line-height: 0.48rem;
    font-size: 0.33rem;
    color:rgb(102,102,102);
}
.remote-area-describe{
    margin-top: 0.05rem;
    line-height: 0.58rem;
    font-size: 0.31rem;
    color:rgb(153,153,153);
}
.freight-area{
    margin-top: 0.05rem;
}
.freight-area, .freight-descibe{
    line-height: 0.45rem;
    font-size: 0.31rem;
    color:rgb(153,153,153);
}
}
}
.postage-content-foot{
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 0.36rem;
    background-color: rgb(242,100,56);
    text-align: center;
    z-index: 99999;
    height: 1.22rem;
    line-height: 1.22rem;
span{
    color:rgb(255, 255, 255);
    font-size: 0.36rem;
}
}
}
@media (max-width: 320px) {
    .navbar-fixed-foot{
    .shop-classify,.shop-enshrine{
        width: 0.9rem;
    }
    .addToCart,#addToCart{
        font-size: 12px;
    }
}
}
@media (min-width:768px) {
    .version-content{
        width: 750px;
        left: 0;
        right: 0;
        margin: 0 auto
    }
}



.swiper-container {
    width: 100%;
    height: 300px;
}
.fade-enter-active,.fade-leave-active{
    height: 0px;
    transition:all 1s;
}

.modal-box{
    height: 0;
}
.fade-enter-to,.fade-leave{
    height: 9rem;
}
.show-enter-active,.show-leave-active{
    top: 15rem;
    transition:all 1s;
}
.show-enter-to,.show-leave{
    top: 4rem;
}







</style>
