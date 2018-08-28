<template>
    <div class="box">
        <div v-for="aa in aas">{{aa}}</div>
        <button @click="change"></button>
    </div>
</template>

<script>
    export default {
        data(){
            aas:['ss','ddd','fff','bbb']
        },
        methods:{
            change(){
                this.ass.splice(3,1,'444')

            }
        }
    }
</script>
<style scoped>

</style>