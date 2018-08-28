<template>
    <div>

        <div id="doc" class="container">
            <div id="doc-header" class="navbar-cart">
                <a href="/shop/index.html" class="back-home">首页</a>
                <div class="navbar-title">购物车</div>
                <div class="compile" editor='1' ></div>
            </div>
            <div id="doc-body" class="">
                <div id="shopOrderList">
                    <div class="store-container" v-for="(shopItem,shopIndex) in cartList">
                        <div class="store-head">
                            <div class="select"
                                 :class="{'isChecked':shopItem.isSelect,'unChecked':!shopItem.isSelect}"
                                @click="shopItem.isSelect=!shopItem.isSelect"
                                    ></div>
                            <div class="store-name">{{shopItem.shopName}}</div>
                            <div class="lose-efficacy"></div>
                        </div>
                        <div class="store-goods">
                            <div class="store-goods-list" v-for="(goodItem,goodIndex) in shopItem.goods">
                                <div class="select" :class="{'isChecked':goodItem.isSelect,'unChecked':!goodItem.isSelect}"
                                     @click="goodItem.isSelect=!goodItem.isSelect"></div>

                                <div class="goods-img-content">
                                    <div class="goods-picture">
                                        <div class="goods-picture-cover"
                                             :style='{backgroundImage:"url("+goodItem.cover+")"}'></div>
                                    </div>
                                </div>
                                <div class="goods-represent">
                                    <div class="represent-top">
                                        <div class="represent-free">包邮</div>
                                        <div class="represent-dec"></div>
                                    </div>
                                    <div class="represent-mid">
                                        <div class="model">型号：</div>
                                        <div class="represent-model">{{goodItem.skuName}}</div>
                                    </div>
                                    <div class="represent-foot">
                                        <div class="represent-price">
                                            <span>￥</span><span class="price">{{goodItem.price}}</span>
                                        </div>
                                        <div class="sum">
                                            <div class="reduceSum" @click="goodItem.pro_num--">-</div>
                                            <input type="" v-model="goodItem.pro_num" />
                                            <div class="addSum" @click="goodItem.pro_num++">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        {{shopIndex}}

        <div class="store-foot">
                            <div class="store-pay "
                                 :class="{'hidden':getShopTotal.totalPrice>0?false:true}"
                                    >
                                <span>应付：</span><span class="pay" :shopIndex=shopIndex">{{getShopTotal.totalPrice}}</span>
                            </div>
                            <div class="store-check">
                                <span>已选</span><span class="choice">{{shopItem.singleSelectNum>0?shopItem.singleSelectNum:0}}</span>件商品
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="noLogining" class="hidden">
                <a href="/shop/PublicPage/login.html" class="theme-text">尚未登录，请点击这里登录</a>
            </div>
            <div id="doc-foot" class="navbar-fixed-top navbar-fixed-foot container">
                <!--:class="[isSelectAll?'isChecked':'unChecked']"-->
                <div class="select" :class="[isSelectAll?'isChecked':'unChecked']"
                    @click="changeCartSelect"></div>
                <div class="all-choice">全选</div>
                <div class="all-pay-container">
                    <div class="all-pay">
                        <span>总计：</span><span class="all-price">{{totalPrice}}</span>
                    </div>
                    <div class='carriage'>不含运费</div>
                </div>
                <div class="accounts" id="pay">
                    <span>去结算(</span><span class="num">{{totalNum}}</span>)
                    <div class="masking"></div>
                </div>
                <div class="accounts hidden" id="delete">
                    <span>删除</span>
                </div>
            </div>
        </div>
        <div class="modal-box hidden" id="deleteCartModal">
            <div class="modal-box-body">
                <div class="modal-body-top">
                    <div class="tip-mid">删除选中的商品吗？</div>
                </div>
                <div class="modal-body-bottom">
                    <div class="bottom-left">取消</div>
                    <div class="bottom-right">确定</div>
                </div>
            </div>
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
    </div>


</template>

<script>
    import Swiper from 'swiper';
    export default {
        data(){
            return {
                shop:{
                    id:this.$route.params.shopId,
                },
                cartList:[],
                totalNum:0,
                totalPrice:0,
                isSelectAll:false,
            }
        },
        mounted:function(){
            this.getCartShow()
            this.addAttribute()

        },
        computed:{
            getShopTotal:function(index){
                let shopIndex = 0
                let _this = this
                let singleSelectNum = 0 //单个店铺的选择的商品总数
                let singleTotalPrice = 0//单个店铺总价
                _this.cartList[shopIndex].goods.forEach(function(goodsItem,goodsIndex){
                    if(goodsItem.isSelect){
                        //当前商品选择的个数
                        singleSelectNum =singleSelectNum+parseInt(goodsItem.pro_num)
                        singleTotalPrice = singleTotalPrice +parseInt(goodsItem.pro_num)*goodsItem.price
                    }
                })
                return {'totalPrice':singleTotalPrice}
            },

        },


        methods:{

            getCartShow:function(){
                //获取id和token
                //请求接口
                var _this = this
                let url = '/api/cart/show'
                let id = localStorage.getItem('id')
                let token = localStorage.getItem('token')
                if(id && token){
                    let params={}
                    params.id = id
                    params.token = token
                    this.$api.post(url,params,r=>{
                        let cartList = r.data

                    //商品
                        cartList.forEach(function(item){
                                _this.cartList.push(item)
                            })
                    _this.cartList.forEach(function(shopItem,shopIndex){
                        _this.$set(_this.cartList[shopIndex],'singleTotalPrice',0)
                        _this.$set(_this.cartList[shopIndex],'singleSelectNum',0)
                        shopItem.goods.forEach(function(goodsItem,goodsIndex){
                            _this.$set(_this.cartList[shopIndex].goods[goodsIndex],'pro_num',1)
                        })
                    })
                    //cartList的商店和商品添加isSelect属性
                    _this.cartList.forEach(function(shopItem,shopIndex){
                        _this.$set(_this.cartList[shopIndex],'isSelect',false)
                        shopItem.goods.forEach(function(goodsItem,goodsIndex){
                            _this.$set(_this.cartList[shopIndex].goods[goodsIndex],'isSelect',false)
                        })
                    })
                    console.log(cartList)
                },r=>{
                    var data = r.message
                    _this.$toast(data);
                })
            }else{
                _this.$router.push({name: 'login'})
            }
            },
            addAttribute:function(){
                let _this = this
                //cartList添加pro_num 商品数的属性
                /*_this.cartList.forEach(function(shopItem,shopIndex){
                    _this.$set(_this.cartList[shopIndex],'singleTotalPrice',0)
                    _this.$set(_this.cartList[shopIndex],'singleSelectNum',0)
                    shopItem.goods.forEach(function(goodsItem,goodsIndex){
                        _this.$set(_this.cartList[shopIndex].goods[goodsIndex],'pro_num',1)
                    })
                })
                //cartList的商店和商品添加isSelect属性
                _this.cartList.forEach(function(shopItem,shopIndex){
                    _this.$set(_this.cartList[shopIndex],'isSelect',false)
                    shopItem.goods.forEach(function(goodsItem,goodsIndex){
                        _this.$set(_this.cartList[shopIndex].goods[goodsIndex],'isSelect',false)
                    })
                })*/


            },
            changeGoodsSelectStatus:function(shopIndex,goodsIndex){//改变商品的选择状态
                let _this = this
                let currentState = _this.cartList[shopIndex].goods[goodsIndex].isSelect
                _this.cartList[shopIndex].goods[goodsIndex].isSelect = !currentState

                //检查是否需要改变单个店铺的全选按钮
                _this.checkSingleShopSelectState(shopIndex)

                //检查是否需要改变购物车全选按钮
                _this.checkCartState()

                //统计单个商店勾选的个数
                _this.countGoodsSelectNum(shopIndex)
                //统计多个店铺的数量
                _this.countCartSelectNum()

            },
            changeSingleShopStatus:function(shopItem,shopIndex){  //改变单个店铺的选择状态
                let _this = this
                _this.cartList[shopIndex].isSelect = !_this.cartList[shopIndex].isSelect
                _this.cartList[shopIndex].goods.forEach(function(goodItem,goodindex){
                    _this.cartList[shopIndex].goods[goodindex].isSelect = _this.cartList[shopIndex].isSelect
                })
                //统计单个商店勾选的个数，并显示单个店铺的总价
                _this.countGoodsSelectNum(shopIndex)
                //统计多个店铺的数量，并显示多个店铺的总价
                _this.countCartSelectNum()
                //检查是否需要改变购物车全选按钮
                _this.checkCartState()
            },
            changeCartSelect:function () { //勾
            // 选全选
                let _this = this
                _this.cartList.forEach(function(shopItem,shopIndex){
                    _this.cartList[shopIndex].isSelect = !_this.isSelectAll
                    shopItem.goods.forEach(function(goodsItem,goodsIndex){
                        _this.cartList[shopIndex].goods[goodsIndex].isSelect = !_this.isSelectAll
                    })
                    _this.countGoodsSelectNum(shopIndex)
                })
                //统计多个店铺的数量
                _this.countCartSelectNum()
                _this.isSelectAll = !_this.isSelectAll

            },
        checkSingleShopSelectState:function (shopIndex) {//检查是否需要改变单个店铺的全选按钮
                let _this = this
                let shop = _this.cartList[shopIndex].goods
                let shopSelect = true
                shop.forEach(function(item,index){
                    if(!item.isSelect){
                        shopSelect = false
                    }
                })
                _this.cartList[shopIndex].isSelect = shopSelect
            },
            checkCartState:function () {//点击商品，检查购物车的全选是否需要改变
                let _this = this
                let cartSelect = true
                 _this.cartList.forEach(function(shopItem,shopIndex){
                    shopItem.goods.forEach(function(goodsItem,goodsIndex){
                        if(!_this.cartList[shopIndex].goods[goodsIndex].isSelect){
                            cartSelect = false
                        }
                    })
                })
                //统计多个店铺的数量
                _this.isSelectAll = cartSelect

            },
             countGoodsSelectNum:function(shopIndex){//统计该商店勾选的个数
                let that = this
                let singleSelectNum = 0 //单个店铺的选择的商品总数
                let singleTotalPrice = 0//单个店铺总价
                that.cartList[shopIndex].goods.forEach(function(goodsItem,goodsIndex){
                    if(goodsItem.isSelect){
                        //当前商品选择的个数
                        singleSelectNum =singleSelectNum+parseInt(goodsItem.pro_num)
                        singleTotalPrice = singleTotalPrice +parseInt(goodsItem.pro_num)*goodsItem.price
                    }
                })
                that.$set(that.cartList[shopIndex],'singleTotalPrice',singleTotalPrice)
                that.$set(that.cartList[shopIndex],'singleSelectNum',singleSelectNum)

            },
            countCartSelectNum:function(){//统计多个店铺勾选的总数量
                let totalNum =0//多个店铺选择的商品总数
                let totalPrice = 0//多个店铺总价
                let that = this
                that.cartList.forEach(function(shopItem,shopIndex){
                    if(shopItem.hasOwnProperty('singleSelectNum')&&shopItem.hasOwnProperty('singleTotalPrice')){
                        totalPrice =  totalPrice +parseFloat(shopItem.singleTotalPrice)
                        totalNum = totalNum +parseInt(shopItem.singleSelectNum)
                    }
                })
                this.totalNum = totalNum
                this.totalPrice = totalPrice
            },
            reduceSum:function(shopIndex,goodsIndex){
                let pro_num = --this.cartList[shopIndex].goods[goodsIndex].pro_num
                if(pro_num<1){
                    this.cartList[shopIndex].goods[goodsIndex].pro_num = 1
                }
                this.countGoodsSelectNum(shopIndex)
                //统计多个店铺的数量
                this.countCartSelectNum()


            },
            addSum:function(shopIndex,goodsIndex){
                let pro_num = ++this.cartList[shopIndex].goods[goodsIndex].pro_num
                let stock = this.cartList[shopIndex].goods[goodsIndex].stock
                if(pro_num>stock){
                    this.cartList[shopIndex].goods[goodsIndex].pro_num = stock
                }
                this.countGoodsSelectNum(shopIndex)
                //统计多个店铺的数量
                this.countCartSelectNum()
            },
         }


    };
</script>

<style lang="less">
.container{
    background-color: #f2f2f2;
}
#doc-body{
#shopOrderList{
    overflow: hidden;
}
background-color: #f2f2f2;
padding-top: 0.88rem;
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
    padding: 0 0.32rem 0 0.78rem;
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
.lose-efficacy{
    height: 0.68rem;
    line-height: 0.68rem;
    position: absolute;
    top: 0;
    right:0.32rem;
    font-size:12px;
    color: #DF3E0F;
}
}
.store-goods{
.store-goods-list{
    height: 2.1rem;
    border-bottom:1px solid #ccc ;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
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
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 0.84rem;
    padding: 0.32rem;
    font-size:13px;
.represent-top{
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
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
.represent-mid{
    overflow: hidden;
    padding: 0.14rem 0;
.model{
    float: left;
}
.represent-model{
    float: left;
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
    width: 1.5rem;
    border:1px solid #ccc;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
.reduceSum,.addSum{
    height: 0.38rem;
    line-height: 0.38rem;
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
    height: 0.38rem;
    line-height: 0.38rem;
    width: 0.6rem;
}
}
}
}
.lose-efficacy{
    position: absolute;
    bottom: 0;
    left: 2.7rem;
    font-size:12px ;
    color: #666;
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
    margin-right: 0.16rem;
}
.rummage-sale{
    height: 0.68rem;
    line-height: 0.68rem;
    float: right;
    color:#df3e0f ;
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
.select{
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    left: 0.18rem;
    top:50%;
    margin-top: -0.25rem;
}
.isChecked{
    background:url(../../../static/images/selected.png) center no-repeat;
    background-size:0.3rem 0.3rem ;
}
.unChecked{
    background:url(../../../static/images/unselected.png) center no-repeat;
    background-size:0.3rem 0.3rem ;
}
#doc-foot{
    font-size:14px ;
    background: #fff;
.all-choice{
    position: absolute;
    width: 0.8rem;
    line-height: 1.28rem;
    height: 1.28rem;
    left: 0.78rem;
}
.all-pay-container{
    position: absolute;
    height: 1.28rem;
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
    text-align: right;
}
.all-price{
    color: #df3e0f;
}
.carriage{
    font-size:12px ;
    text-align: right;
    color: #666;
}
.rummage-sale-total{
    font-size:12px ;
    text-align: right;
    color: #DF3E0F;
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
    top: 0.40rem;
    text-align: center;
    border-radius:4px ;
    cursor: pointer;
.masking{
    width: 100%;
    height: 0.68rem;
    background: #fff;
    opacity: 0.35;
    position: absolute;
    left: 0;
    top: 0;
}
}
#delete{
    width: 1.2rem;
}
}
.order-refresh{
a{
    color: #333;
}
}
.navbar-fixed-foot{
    height: 1.28rem;
}
@media (max-width: 320px) {
    #doc-foot{
        font-size: 12px;
    .all-choice{
        line-height: 1.38rem;
        height: 1.38rem;
    }
    .all-pay-container{
        height: 1.38rem;
    }
}
.navbar-fixed-foot{
    height: 1.38rem;
}
}

</style>
