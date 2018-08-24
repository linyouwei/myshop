<template>
    <el-container>
        <el-header>
            <div>首页</div>
        </el-header>
        <el-main>
            <el-tabs v-model="activeName"   class="el_tabs" >
                <el-tab-pane label="店铺介绍" name="first" width="400px" class="tab-width">
                    <el-form ref="form" :model="form" >
                        <el-form-item label="手机号">
                            <el-input v-model="form.mobile"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form ref="form" :model="form">
                        <el-form-item label="密码">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">登陆</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="掌柜优品" name="second"  width="400px"  class="tab-width">
                    <el-form ref="form" :model="form" >
                        <el-form-item label="手机号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form ref="form" :model="form" >
                        <el-form-item label="密码">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">登陆</el-button>
                        </el-form-item>
                    </el-form>
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
                form: {
                    mobile: '',
                    password:''
                },
                activeName:'first',
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
                var url = '/api/user/login'
                this.$api.post(url,params,r=>{
                    this.$router.push({name: 'center',params:{ id:'1'}});
            },r=>{
                var data = r.message
                this.$toast(data);
            })

        }
    }


    };
</script>

<style>
    .el-tabs__nav.is-top{
        float: none!important;
    }
    .el-tabs__active-bar{
        width: 0!important;
    }
    .el-header{
        line-height: 60px;
    }

</style>
