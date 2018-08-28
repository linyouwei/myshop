<template>
    <el-container>
        <el-header>
            <div style="float: left;width: 50px">
                <router-link to='/index' tag='a' >
                    返回首页
                </router-link>
            </div>
            <div>订单中心</div>
        </el-header>
        <el-main>
            <div class="nowrap-color"></div>
            <div class="order-content">
                <div class="mine-order">
                    <div class="order-left">我的订单</div>
                    <div  class="right-icon" ></div>
                    <div class="order-right">查看更多</div>
                </div>
                <div class="nowrap-color"></div>
                <div class="status-content flex-direction-row">
                    <div class="status-list flex-1" data-status="0" >
                        <div class="status-icon payment-icon "><div class="num"></div></div>
                        <div class="status-type">待付款</div>
                    </div>
                    <div class="status-list flex-1" data-status="1">
                        <div class="status-icon shipments-icon "><div class="num"></div></div>
                        <div class="status-type">待发货</div>
                    </div>
                    <div class="status-list flex-1" data-status="2">
                        <div class="status-icon gathering-icon "><div class="num"></div></div>
                        <div class="status-type">待收货</div>
                    </div>
                    <div class="status-list flex-1"  data-status="3">
                        <div class="status-icon  aftersale-icon"><div class="num"></div></div>
                        <div class="status-type">退款/售后</div>
                    </div>
                </div>
            </div>
            <div class="feature-content">
                <div class="list collect-goods-list">
                    <div class="icon collect-goods"></div>
                    <div class="list-remark">收藏的商品</div>
                    <div class="right-icon"></div>
                </div>
                <div class="list collect-shop-list">
                    <div class="icon collect-shop"></div>
                    <div class="list-remark">收藏的店铺</div>
                    <div class="right-icon"></div>
                </div>
                <div class="list mycart-list border-none" style="border: 0;">
                    <div class="icon mycart"></div>
                    <div class="list-remark">购物车</div>
                    <div class="right-icon"></div>
                </div>
                <div class="nowrap-color"></div>
                <div class="list take-address-list">
                    <div class="icon take-address"></div>
                    <div class="list-remark">收货地址</div>
                    <div class="right-icon"></div>
                </div>
                <div class="list browse-list" style="border: 0;">
                    <div class="icon browse"></div>
                    <div class="list-remark">浏览记录</div>
                    <div class="right-icon"></div>
                </div>
                <div class="nowrap-color" ></div>
                <div class="list openshop-list" style="border: 0;">
                    <div class="icon openshop"></div>
                    <div class="list-remark">我要开店</div>
                    <div class="right-icon"></div>
                </div>

            </div>

        </el-main>
    </el-container>
</template>

<script>
    export default {
        data(){
            return {
                form: {
                    mobile: '',
                    password:''
                },
                activeName:'first',
//                backgroundRight:{
//                    backgroundImage: 'url(' + require('../../../static/image/right.png') + ')',
//                }
            }
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
                console.log(params)
                var url = '/api/user/login'
                this.$api.post(url,params,r=>{
                },r=>{
                    console.log(r);
                })

            }
        }


    };
</script>

<style lang="less">
    .nowrap-color {
        background: #f2f2f2;
        height: 8px;
        width: 100%;
    }
    .el-header{
        line-height: 60px;
    }
    .order-content{
        font-size: 13px;
        background: #fff;
        margin-top: .2rem;
        .mine-order{
            height: .88rem;
            padding: 0 .32rem;
            cursor: pointer;
            .order-left{
                height: .88rem;
                line-height: .88rem;
                float: left;
            }
            .right-icon{
                width: 0.29rem;
                height: .88rem;
                background: url('../../../static/images/right.png') right 0.29rem no-repeat ;
                float: right;
                background-size:1contain;
            }
            .order-right{
                font-size:12px ;

                height: .88rem;
                line-height: .88rem;
                float: right;
            }
        }
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
    }
    .feature-content{
        font-size: 13px;
        margin-top: 0.2rem;
        padding-bottom: 0.4rem;
    .list{
        height: 0.98rem;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
        position: relative;
    .icon{
        height: 0.4rem;
        width: 0.4rem;
        position: absolute;
        left: 0.32rem;
        top: 0.29rem;
    }
    .list-remark{
        height: 0.98rem;
        line-height: 0.98rem;
        position: absolute;
        left: 0.88rem;
        top: 0;
    }
    .right-icon{
        position: absolute;
        top: 0;
        right: 0.32rem;
        height: 0.98rem;
        width: 0.5rem;
        background:url(../../../static/images/right.png) right center no-repeat;
    }
    .collect-goods{
        background:url(../../../static/images/collect1.png) center no-repeat;
        background-size:contain;
    }
    .collect-shop{
        background:url(../../../static/images/shop1.png) center no-repeat;
        background-size:contain;
    }
    .mycart{
        background:url(../../../static/images/mycart1.png) center no-repeat;
        background-size:contain;
    }
    .take-address{
        background:url(../../../static/images/address1.png) center  no-repeat;
        background-size:contain;
    }
    .browse{
        background:url(../../../static/images/browse1.png) center  no-repeat;
        background-size:contain;
    }
    .openshop{
        background:url(../../../static/images/openshop1.png) center  no-repeat;
        background-size:contain;
    }

    }
    }
    /*公共样式*/
    .flex-1 {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .flex-direction-row {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }

</style>
