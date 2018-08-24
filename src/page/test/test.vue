<!-- 提示框 -->
<template>

    <div id="doc" class="container">
        <div id="doc-header" class="navbar navbar-fixed-top">
            <a href="/view/PublicPage/center.html" class="pull-right navbar-icon"><span class="iconfont icon-chevronleft"></span></a>
        </div>
        <div id="doc-body">
            <div class="tabs ulite-js-tabs ulite-js-ripple-effect">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img class="cover-images" src="">
                        </div>
                    </div>
                    <div class="title-container">
                        <div class="navbar-title typo-text-white-deep"></div>
                    </div>
                </div>
                <div class="tabs-tab-bar">
                    <a href="#manage-panel" class="col-xs-6 tabs-tab is-active" id="personalCenter">店铺介绍</a>
                    <a href="#shop-panel" class="col-xs-6 tabs-tab shop-pogoing " id="shop-pogoing">掌柜优品</a>
                </div>
                <div id="manage-panel" class="tabs-panel is-active" >
                    <div class="panel">
                        <div class="panel-body" style="text-align: center">
                            <!-- 右上角的义卖总额显示，收藏人数显示-->
                            <div class="collect-container">
                                <div class="rummageSale-box theme-text">
                                    <span>义卖总额：￥</span><span class="rummageSale"></span>
                                </div>
                                <div class="collect-box">
                                    <span class="collect"></span>人收藏
                                </div>
                            </div>
                            <div class="main-pic-start">
                                <div class="main-pic"></div>
                            </div>
                            <div class="vertical-margin nowrap-content"><span class="hotel-panel-contact">畅联科技</span></div>
                            <div class="vertical-margin nowrap-content " style="height: 0.38rem;">
                                <div class="sign-content">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-outside-title"><span class="title-before"></span>店铺信息</div>
                    <div class="panel">
                        <div class="panel-body">
                            <div class="vertical-margin nowrap-content">
                                地址：
                                <span class="stores-panel-address"></span>
                            </div>
                            <div class="vertical-margin nowrap-content">
                                电话：
                                <span class="stores-panel-mobile"></span>
                            </div>
                            <div class="stores-more-info hidden">
                                <div class="vertical-margin nowrap-content">微信：<span class="stores-panel-wechat"></span></div>
                                <div class="vertical-margin">简介：<span class="stores-description"></span></div>
                            </div>
                            <div class="stores-more-info-trigger text-center">
                                <span class="iconfont"></span>
                            </div>
                        </div>
                    </div>
                    <div class="content-outside-title"><span class="title-before"></span>店长笔记</div>
                    <div class="panel">
                        <div class="panel-body" id="hotel-panel-special-container">
                            <div class="hotel-panel-special">g h</div>
                            <div class="hotel-panel-special-img">
                                <img class="background-cover" style="width: 100%;" src="http://booking.uclbrt.com/api/uploads/noteImage/20170914/f63e6d5345af4ac833348325cc1ccfb3.jpg">
                            </div>
                            <div class="vertical-margin"><a href="#" class="theme-text more-zhangGui-info">阅读全文</a></div>
                        </div>
                    </div>


                </div>
                <div id="shop-panel" class="tabs-panel">
                    <div class="content-outside-title"><span class="title-before"></span>商家推荐</div>
                    <div class="content-panel">
                        <div class="content-panel-body shop-panel-content clearfix" >
                            <div id="shopContent" ></div>
                            <div class="more-content"><div class="more">更多</div></div>
                        </div>
                    </div>
                    <div class="content-outside-title"><span class="title-before"></span>热销商品</div>
                    <div class="content-panel">
                        <div class="content-panel-body hotsale-panel-content clearfix" >
                            <div id="hotsaleContent" ></div>
                            <div class="more-content"><div class="more">更多</div></div>
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
            <div id="mask-body" class="modal-box hidden"></div>
            <div class="classify-content ">
                <div class="classify-box">
                    <div class="search-content">
                        <input type="text" name="" id="searchInfo" value="" placeholder="请输入商品名" />
                        <div class="search">搜索</div>
                    </div>
                    <div id="classifyContent">
                        <div class="shop-content">
                            <div class="classify-mian">
                                <div class="mian-left">商品</div>
                                <div class="mian-right revert"></div>
                            </div>
                            <div class="shop-list-content classify-shop"></div>
                        </div>
                        <div class="shop-content">
                            <div class="classify-mian ">
                                <div class="mian-left">服务</div>
                                <div class="mian-right"></div>
                            </div>
                            <div class="shop-list-content classify-serve"></div>
                        </div>
                        <div class="shop-content">
                            <div class="classify-mian ">
                                <div class="mian-left">义卖</div>
                                <div class="mian-right"></div>
                            </div>
                            <div class="shop-list-content classify-other"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        标签列表<!---->
        <script type="text/html" id="templateLabel">
            <div class="sign">
            </div>
        </script>
        <script type="text/html" id="templateGoodsContent">
            <div class="col-xs-6 shopItem">
                <div class="shop-img-content">
                    <div class="panel-shop-img">
                        <div class="shop-cover">
                        </div>
                        <div class="rummage-sale hidden"></div>
                    </div>
                </div>
                <div class="layout-content">
                    <div class="layout">
                        <div class="nowrap-content shop-dec"></div>
                        <div class="nowrap-content">
                            <div class="col-xs-6 shopPirce-content">
                                <span>￥</span><span class="shopPirce"></span>
                            </div>
                            <div class="col-xs-6 shopSales-content">
                                <span>销量</span><span class="shopSales"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </script>

    </div>

</template>

<script>
    export default {
        name: 'Toast',
                data(){
            return {
                //
            }
        },
        methods:{
            openTop(){
                this.$toast.top('top');
            },
            openCenter(){
                this.$toast.center('center');
            },
            openBottom(){
                this.$toast('bottom');  // or this.$toast.bottom('bottom');
            },
            openLoading(){
                this.$loading('loading...');
                let self = this;
                setTimeout(function () {
                    self.closeLoading()
                }, 2000)
            },
            closeLoading(){
                this.$loading.close();
            }
        }
    }
</script>

<style lang="less" >
    .status-content{
        height: 1.88rem;
        font-size:13px ;
    .status-list{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        height: 1.88rem;
        position: relative;
    .status-icon{
        left: 50%;
        margin-left: -0.38rem;
        position: absolute;
        height:0.76rem;
        width: 0.76rem;
        top:0.3rem;
    .num{
        position: absolute;
        right: -.24rem;
        top: -.1rem;
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        color: #df3e0f;
    }
    }
    .status-type{
        text-align: center;
        margin-top: 1.2rem;
    }
    .payment-icon{
        background: url("../../../static/images/payment1.png") center no-repeat; ;
        background-size:contain;
    }
    .shipments-icon{
        background: url("../../../static/images/shipments1.png") center no-repeat; ;
        background-size:contain;
    }
    .gathering-icon{
        background: url("../../../static/images/gathering1.png") center no-repeat; ;
        background-size:contain;
    }
    .aftersale-icon{
        background: url("../../../static/images/aftersale1.png") center no-repeat; ;
        background-size:contain;
    }
    }
    }

</style>