<template>
    <el-container>
        <el-header >
            <div>首页</div>
        </el-header>
        <el-main>
            <el-tabs v-model="activeName"   class="el_tabs " >
                <el-tab-pane label="店铺介绍" name="first" width="400px" class="tab-width">
                    <div id="manage-panel"  >
                        <div class="panel">
                            <div class="panel-body" style="text-align: center">
                                <!-- 右上角的义卖总额显示，收藏人数显示-->
                                <div class="collect-container">
                                    <div class="rummageSale-box theme-text">
                                        <span>义卖总额：￥</span><span class="rummageSale">{{shop.charity}}</span>
                                    </div>
                                    <div class="collect-box">
                                        <span class="collect">{{shop.like}}</span>人收藏
                                    </div>
                                </div>
                                <div class="main-pic-start">
                                    <div class="main-pic" :style='{backgroundImage:"url("+shop.managerhead+")",backgroundSize:"cover",backgroudPosition:"center"}'></div>
                                </div>
                                <div class="vertical-margin nowrap-content"><span class="hotel-panel-contact">{{shop.managername}}</span></div>
                                <div class="vertical-margin nowrap-content " style="height: 0.38rem;">
                                    <div class="sign-content" >
                                        <div class="sign" v-for="item of shop.label">{{item}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-outside-title left" ><span class="title-before"></span>店铺信息</div>
                        <div class="panel left">
                            <div class="panel-body">
                                <div class="vertical-margin nowrap-content">
                                    地址：{{shop.shopaddress}}
                                    <span class="stores-panel-address"></span>
                                </div>
                                <div class="vertical-margin nowrap-content">
                                    电话：
                                    <span class="stores-panel-mobile">{{shop.managermobile}}</span>
                                </div>
                                <div class="stores-more-info" v-bind:class="{'hidden':!revert}">
                                    <div class="vertical-margin nowrap-content">微信：<span class="stores-panel-wechat">{{shop.managerwechat}}</span></div>
                                    <div class="vertical-margin">简介：<span class="stores-description">{{shop.shopdescription}}</span></div>
                                </div>
                                <!-- class="stores-more-info-trigger text-center"-->
                                <div v-bind:class="{'revert':revert}" @click="revert=!revert" class="stores-more-info-trigger text-center">
                                    <span class="iconfont"></span>
                                </div>
                            </div>
                        </div>
                        <div class="content-outside-title left"><span class="title-before"></span>店长笔记</div>
                        <div class="panel left">
                            <div class="panel-body" id="hotel-panel-special-container">
                                <div class="hotel-panel-special">g h</div>
                                <div class="hotel-panel-special-img">
                                    <img class="background-cover" style="width: 100%;" src="http://booking.uclbrt.com/api/uploads/noteImage/20170914/f63e6d5345af4ac833348325cc1ccfb3.jpg">
                                </div>
                                <div class="vertical-margin"><a href="#" class="theme-text more-zhangGui-info">阅读全文</a></div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="掌柜优品" name="second"  width="400px"  class="tab-width" >
                    <div id="shop-panel">
                        <div class="content-outside-title"><span class="title-before"></span>商家推荐</div>
                        <div class="content-panel">
                            <div class="content-panel-body shop-panel-content clearfix" >
                                <div id="shopContent" >
                                    <!--获取推荐的数据-->
                                        <div class="col-xs-6 shopItem"  v-for="(item,index) of shopGoods.recommend" :class="{hidden:item.hidden,borderNone:item.borderNone}">
                                            <div class="shop-img-content">
                                                <div class="panel-shop-img">
                                                    <div class="shop-cover" :style='{backgroundImage:"url("+item.cover+")"}'>
                                                    </div>
                                                    <div class="rummage-sale hidden"></div>
                                                </div>
                                            </div>
                                            <div class="layout-content">
                                                <div class="layout">
                                                    <div class="nowrap-content shop-dec">{{item.name}}</div>
                                                    <div class="nowrap-content">
                                                        <div class="col-xs-6 shopPirce-content">
                                                            <span>￥</span><span class="shopPirce">{{item.price}}</span>
                                                        </div>
                                                        <div class="col-xs-6 shopSales-content">
                                                            <span>销量</span><span class="shopSales">{{item.sales}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class="more-content"><div class="more" @click="showMoreRecommendGoods">更多</div></div>
                            </div>
                        </div>
                        <div class="content-outside-title"><span class="title-before"></span>热销商品</div>
                        <!--热销的数据-->
                        <div class="content-panel">
                            <div class="content-panel-body hotsale-panel-content clearfix" >
                                <div id="hotsaleContent" >
                                    <!--获取热销的数据-->
                                    <div class="col-xs-6 shopItem"  v-for="(item,index) of shopGoods.hotSale" :class="{hidden:item.hidden,borderNone:item.borderNone}">
                                        <div class="shop-img-content">
                                            <div class="panel-shop-img">
                                                <div class="shop-cover" :style='{backgroundImage:"url("+item.cover+")"}'>
                                                </div>
                                                <div class="rummage-sale hidden"></div>
                                            </div>
                                        </div>
                                        <div class="layout-content">
                                            <div class="layout">
                                                <div class="nowrap-content shop-dec">{{item.name}}</div>
                                                <div class="nowrap-content">
                                                    <div class="col-xs-6 shopPirce-content">
                                                        <span>￥</span><span class="shopPirce">{{item.price}}</span>
                                                    </div>
                                                    <div class="col-xs-6 shopSales-content">
                                                        <span>销量</span><span class="shopSales">{{item.sales}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="more-content"><div class="more" @click="showMoreHotGoods">更多</div></div>
                            </div>
                        </div>
                        <div id="doc-foot" class="navbar-fixed-bottom navbar-fixed-foot container">
                            <div class="shop-classify">
                                <div class="icon"></div>
                                <div class="introduce">分类</div>
                            </div>
                            <a class="shop-contact btn-link" href="tel:13480251015">
                                <div class="icon"></div>
                                <div class="introduce">联系卖家</div>
                            </a>
                            <div class="shop-enshrine">
                                <div class="icon"></div>
                                <div class="introduce">收藏</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name:'Toast',
                data(){
            return {
                activeName:'first',
                revert:false,
                shop:{
                    'id':'',
                    'label':[],
                    'managerhead':'',
                    'charity':'',
                    'like':'',
                    'managermobile':'',
                    'shopaddress':'',
                    'managername':'',
                    'managerwechat':'',
                    'shopdescription':'',
                    'note':{}
                },
                shopGoods:{
                    'hotSale':[],
                    'recommend':[],
                }

            }
        },
        created(){
            console.log(123)


        },
        mounted(){
            this.getIndexInfo()
            this.getGoodsInfo()


//            var _this = this;
//            this.shop.recommend.map(function(index,item){
//                console.log(index,item)
//                if(index>1){
//                    _this.$set(item,'hidden',false);
//                }else{
//                    _this.$set(item,'hidden',true);
//                }
//            })

        },
        methods:{
            onSubmit:function(){
                var that = this
                var mobile = that.form.mobile
                var password = that.form.password
                var params = {}
                params.mobile = mobile
                params.password = password
                params.areaCode = '86'
                var url = '/api/user/login'
                this.$api.post(url,params,
                  r=>{
                    this.$router.push({name: 'center',params:{ id:'1'}});
                  },
                  r=>{
                    var data = r.message
                    this.$toast(data);
                  })
         },
            getIndexInfo:function(){
                this.shop.id = '5'
                let url = '/api/shop/intro/'+this.shop.id
                this.$api.get(url,null,
                    r=>{
                        var data = r.data
                        this.shop.managerhead=data.managerhead
                        this.shop.like=data.like
                        this.shop.charity=data.charity
                        this.shop.managermobile=data.managermobile
                        this.shop.shopaddress=data.shopaddress
                        this.shop.managermobile=data.managermobile
                        this.shop.managerwechat=data.managerwechat
                        this.shop.shopdescription=data.shopdescription
                        this.shop.managername=data.managername
                        for(let x of data.label){
                                //for of 遍历属性值x，for in 遍历属性x
                                this.shop.label.push(x)
                        }
                        console.log(this.shop.label)
                    },
                    r=>{})
            },
            getGoodsInfo:function(){
                var that = this
                console.log(0)
                let url = '/api/goods/show/'+this.shop.id
                this.$api.get(url,null,
                    r=>{
                        let data = r.data
                        console.log(data)
                        for(let x of data.recommend){
                            //for of 遍历属性值x，for in 遍历属性x
                            this.shopGoods.recommend.push(x)
                        }
                        for(let x of data.hotSale){
                            //for of 遍历属性值x，for in 遍历属性x
                            this.shopGoods.hotSale.push(x)
                        }
                        console.log('111')
                        console.log(that.shopGoods)
                        console.log('111')
                        for(let item in that.shopGoods){
                            console.log(item)
                            that.shopGoods[item].forEach(function(goodItems,index){
                                if(index<2){
                                    that.$set(goodItems,'hidden',false)
                                    that.$set(goodItems,'borderNone',true)
                                }else{
                                    that.$set(goodItems,'hidden',true)
                                    that.$set(goodItems,'borderNone',false)
                                }
                            })
                        }
                     },
                     r=>{})
                },
                showMoreRecommendGoods:function(){
                            for(let x in this.shopGoods.recommend){
                                this.$set(this.shopGoods.recommend[x],'hidden',false)
                            }
                },
                showMoreHotGoods:function(){
                    for(let x in this.shopGoods.hotSale){
                        this.$set(this.shopGoods.hotSale[x],'hidden',false)
                    }
                }
    }


    };
</script>

<style lang="less" >
    .el-tabs__nav.is-top{
        float: none!important;
    }
    .el-tabs__active-bar{
        width: 0!important;
    }
    .el-header{
        line-height: 60px;
    }
    .collect-container{
        font-size: 12px;
        position: absolute;
        top: .2rem;
        width: 50%;
        right: .4rem;
        text-align: right;
    }
    .main-pic-start{
        position: relative;
        height: 1rem;
        width: 1rem;
        background: url(../../../static/images/user_headimage.png) no-repeat;
        background-size: 100%;
        border-radius: 50%;
        margin: .2rem auto .24rem;
        line-height: 1rem;
        text-align: center;
        border:1px solid red;
    }
    .vertical-margin {
        font-size: 14px;
        margin: 0;
        margin-bottom: 8px;
    }
    .sign-content{
        width: 3.88rem;
        position: absolute;
        left: 50%;/*没有设置top，就是为了居中*/
        margin-left: -1.94rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        justify-content: center;
    .sign{
        font-size: 12px;
        text-align: center;
        background: #666;
        color: #fff;
        width: 1.16rem;
        height: .4rem;
        margin-right: .1rem;
        line-height: .4rem;
        border-radius: 4px;
    }
    }
    .title-before{
        display: inline-block;
        width: 0.06rem;
        height: 16px;
        background: #DF3E0E;
        margin-right: 10px;
        margin-bottom: -3px;
    }
    #hotel-panel-special-container{
    .hotel-panel-special-img{
        width: 100%;
        min-height: 3.5rem;
        background: #f1f1f1;
        background-size:100% ;
        margin-bottom: 0.16rem;
    }
    .more-zhangGui-info {
        text-align: right;
        display: block;
    }
    }
    .left{
        text-align: left;
    }
    .stores-more-info-trigger {
        will-change: transform;
        transition-duration: .3s;
        transition-timing-function: ease-in;
        cursor: pointer;
        position: relative;
        height: .4rem;
        .iconfont {
            display: block;
            width: .4rem;
            height: .4rem;
            position: absolute;
            top: 0;
            left: 50%;
            margin-left: -.2rem;
            background: url(../../../static/images/down.png) right center no-repeat;
            background-size: 100% 100%;
        }
    }
    .revert{
        transform:rotate(180deg)
    }

    #shop-panel{
        padding-bottom:0.74rem ;
        #hotsaleContent,#shopContent{
            overflow: hidden;
        }
        .hotsale-panel-content,.shop-panel-content{
            .shopItem{
                 padding: 0;
                 height: 4.72rem;
                 border-bottom: 1px solid #ccc ;
                 cursor: pointer;
            }
            .shop-dec{
                font-size: 12px;
                padding: 0 .16rem;
                height: .74rem;
                line-height: .74rem;
            }
            .shopPirce-content{
                font-size: 12px;
                text-align: left;
                color: #f26438;
            }
            .shopSales-content{
                font-size: 12px;
                text-align: right;
                color: #f26438;
            }
            .shop-img-content{
                width: 100%;
                height: 3.24rem;
                margin-top: 0.2rem;
            }
            .panel-shop-img{

                position: absolute;/* col-xs-6 包含  position:relative;*/
                top: 0.2rem;
                right: 0;
                height: 3.24rem;
                width:3.24rem;
                /*
                      background: url("../image/shopdemo.jpg") center no-repeat;
                */
                background-size:3.24rem;
                .rummage-sale{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    font-size:12px;
                    padding: 0.02rem 0.06rem;
                    border:1px solid #DF3E0F;
                    color: #DF3E0E;
                    background: #fff;
                }
            }
            .shop-cover{
                height: 100%;
                width:100%;
                background-size:100% 100%;
            }
            /* .shopItem:nth-child(1),.shopItem:nth-child(2){
               height: 4.52rem;
               .panel-shop-img{
                 top: 0;
               }
               .shop-img-content{
                 margin-top: 0;
               }
             }*/
            .layout-content{
                width: 100%;
                overflow: hidden;
            }
            .layout{
                width:3.24rem;
                float: right;
            }
            .shopItem:nth-of-type(odd){
                border-right: 1px solid #ccc;
                .panel-shop-img{
                    left: 0;
                }
                .layout{
                    float: left;
                }
             }
            .shopItem:nth-of-type(even){
                height: 4.72rem;
                /*
                      border-bottom: 1px solid #ccc ;
                */
            }
            .more-content{
                width: 100%;
                height: 0.9rem;
                position: relative;
            .more{
                height: 0.9rem;
                width: 1.6rem;
                line-height: 1rem;
                font-size: 12px;
                text-align: center;
                position: absolute;
                left: 50%;
                margin-left: -0.8rem;
            }
            }
            .borderNone{
                border-bottom:0 !important;
            }

        }
    }



</style>