<!-- 提示框 -->
<template>

    <div id="manage-panel" class="tabs-panel" >
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

</style>