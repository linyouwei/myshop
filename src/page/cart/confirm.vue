<template>
    <div>

        <div id="doc" class="container">
            <div id="doc-header" class="navbar-cart">
                <a href="javascript:void(0);" class="back-home"></a>
                <div class="navbar-title">确认购买</div>
                <div class="compile"></div>
            </div>
            <div id="doc-body">
                <div class="address-container">
                    <div class="notYet hidden">请填写收货地址</div>
                    <div class="alreadly hidden">
                        <div class="alreadly-container">
                            <div class="alreadly_top">
                                <div class="name"></div>
                                <div class="number"></div>
                            </div>
                            <div class="alreadly_bottom">
                                <div class="tacitly hidden">[默认]</div>
                                <div class="address nowrap-content"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="shopOrderList"></div>
            </div>
            <div id="doc-foot" class="navbar-fixed-top navbar-fixed-foot container ">
                <div class="select"></div>
                <div class="all-pay-container">
                    <div class="all-pay">
                        <span>应付总额：</span><span class="all-price"></span>
                    </div>
                    <div class='carriage'>共<span class="num"></span>件商品</div>
                </div>
                <div class="accounts" id="pay">
                    <span>提交订单</span>
                </div>
            </div>
        </div>
        <div id="noLogining" class="hidden">
            <a href="/shop/PublicPage/login.html" class="theme-text">尚未登录，请点击这里登录</a>
        </div>
        <div id="loadingContainer" class="hidden">
            <div id="loading">
                <div class="cssload-loader">
                    <div class="cssload-inner cssload-one"></div>
                    <div class="cssload-inner cssload-two"></div>
                    <div class="cssload-inner cssload-three"></div>
                </div>
            </div>
        </div>
        <script type="text/html" id="templateOrder">
            <div class="store-container">
                <div class="store-head">
                    <div class="store-name"></div>
                </div>
                <div class="store-goods"></div>
                <div class="store-send-content">
                    <div class="store-send">运费</div>
                    <div class="store-send-pay">
                        <span>￥</span><span class="pay"></span>
                    </div>
                </div>
                <div class="store-message-content">
                    <div class="store-send">留言</div>
                    <div class="store-message">
                        <input name="" placeholder="给卖家留言"></input>
                    </div>
                </div>
                <div class="store-foot">
                    <div class="store-pay">
                        <span>合计：</span><span class="pay"></span>
                    </div>
                    <div class="store-check">
                        <span>已选</span><span class="choice">1</span>件商品
                    </div>
                </div>
            </div>
        </script>
        <script type="text/html" id="templateGoodsList">
            <div class="store-goods-list">
                <div class="goods-img-content">
                    <div class="goods-picture">
                        <div class="goods-picture-cover"></div>
                    </div>
                </div>
                <div class="goods-represent">
                    <div class="represent-top">
                        <div class="represent-dec"></div>
                    </div>
                    <div class="represent-foot">
                        <div class="represent-price">
                            <span>￥</span><span class="price"></span>
                        </div>
                        <div class="sum">
                            <span>x</span><span class="scalar">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </script>
        <script type="text/html" id="templateOrderEmpty">
            <div class="centeral-container vertical-middle-block">
                <div class="centeral-content vertical-middle-block-cell">
                    <div class="col-xs-12 text-center theme-text" >没有选择商品</div>
                </div>
            </div>
        </script>

    </div>


</template>

<script>
    import Swiper from 'swiper';
    export default {
        data(){
            return {

            }
        },
        mounted:function(){

        },
        computed:{

        },


        methods:{
         }


    };
</script>

<style lang="less">
.container{
    background-color: #f2f2f2;
}
#doc-body{
.address-container{
    padding: 0 0.32rem;
    background-color:#fff ;
    margin: 0.2rem 0;
.notYet{
    height: 0.68rem;
    background:url(../../../static/images/right.png) right center no-repeat;
    line-height: 0.68rem;
    cursor: pointer;
}
.alreadly{
    height: 1.08rem;
    font-size:13px ;
    background:url(../../../static/images/right.png) right center no-repeat;
    position: relative;
    cursor: pointer;
.alreadly-container{
    position: absolute;
    top: 50%;
    height: 0.78rem;
    margin-top: -0.39rem;
    width: 100%;
}
.alreadly_top{
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
.name{
    float: left;
    margin-right: 0.5rem;
}
.number{
    float: left;
}
}
.alreadly_bottom{
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
.tacitly{
    float: left;
    margin-right: 0.16rem;
}
.address{
    float: left;
    width: 5.8rem;
}
}
}
}
#shopOrderList{
    overflow: hidden;
}
background-color: #f2f2f2;
padding-top: 0.68rem;
padding-bottom: 0.98rem;
font-size:14px ;
.store-container{
    background-color: #fff;
    margin-bottom: 0.2rem;
.store-head{
    height: 0.68rem;
    border-bottom:1px solid #ccc ;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 0.32rem;
    position: relative;
.store-name{
    height: 0.68rem;
    line-height: 0.68rem;
    padding-right: 0.38rem;
    background:url(/shop/run/dist/image/right.png) right center no-repeat;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    max-width: 5.4rem;
}
}
.store-goods{
.store-goods-list{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 2.1rem;
    border-bottom:1px solid #ccc ;
    position: relative;
.goods-img-content{
    height: 2.1rem;
    margin-left: 2.38rem;
.goods-picture{
    position: absolute;
    top: 0.2rem;
    left: 0.78rem;
    height: 1.57rem;
    width: 1.6rem;
    background: url(/uclbrt/image/shili.png) center no-repeat;
    background-size: 1.6rem 1.57rem;
.goods-picture-cover{
    width: 100%;
    height: 100%;
    background-size:100% ;
}
}
}
.goods-represent{
    min-height: 1.16rem;
    padding:0.28rem 0.32rem  0.32rem;
    font-size:13px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
.represent-top{
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-bottom: 0.84rem;
.represent-free{
    height: 0.32rem;
    width: 0.62rem;
    color: #df3e0f;
    border:1px solid #df3e0f;
    border-radius: 4px;
    margin-right: 0.1rem;
    line-height: 0.32rem;
    text-align: center;
}
.represent-dec{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 0.32rem;
    line-height: 0.34rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
}
.represent-foot{
    overflow: hidden;
.represent-price{
    float: left;
    height: 0.38rem;
    line-height: 0.38rem;
    color: #df3e0f;
}
.sum{
    float: right;
    height: 0.38rem;
    line-height: 0.38rem;
}
}
}
}
}
.store-send-content{
    height: 0.68rem;
    border-bottom: 1px solid #ccc ;
    padding: 0 0.32rem;
.store-send{
    float: left;
    height: 0.68rem;
    line-height: 0.68rem;
}
.store-send-pay{
    float: right;
    height: 0.68rem;
    line-height: 0.68rem;
}

}
.store-message-content{
    height: 0.68rem;
    border-bottom: 1px solid #ccc ;
    padding: 0 0.32rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
.store-send{
    width: 0.8rem;
    text-align: left;
    height: 0.68rem;
    line-height: 0.68rem;
}
.store-message{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
input{
    width: 100%;
    height: 100%;
    border: 0;
    height: 0.68rem;
    line-height: 0.68rem;
    outline: none;
    text-indent: 0.2rem;
}
}
}
.store-foot{
    height: 0.68rem;
    padding: 0 0.32rem;
.store-check{
    height: 0.68rem;
    line-height: 0.68rem;
    float: right;
}
.store-pay{
    height: 0.68rem;
    line-height: 0.68rem;
    float: right;
    margin-left: 0.2rem;
.pay{
    color:#df3e0f ;
}
}
}
}
}
#doc-foot{
    font-size:14px ;
    background: #fff;
    height: 0.98rem;
.all-pay-container{
    position: absolute;
    height: 0.98rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    right: 2.34rem;
.all-pay{
    margin-top: 0.16rem;
}
.all-price{
    color: #df3e0f;
}
.carriage{
    font-size:12px ;
    text-align: right;
    color: #666;
}
}
.accounts{
    width: 1.7rem;
    height: 0.58rem;
    line-height: 0.58rem;
    background: #df3e0f;
    color: #fff;
    position: absolute;
    right: 0.32rem;
    top: 0.20rem;
    text-align: center;
    border-radius:4px ;
    cursor: pointer;
}
}

</style>
