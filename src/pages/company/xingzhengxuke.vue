<template>
    <view class="page u-border-top">
        <view class="tab">
            <u-tabs
                    :list="List"
                    :current="current"
                    @change="Change" gutter="90"
                    bar-width="50" font-size="30"
                    active-color="#E12216" bg-color="none" inactive-color="#000000"
            ></u-tabs>
        </view>
    </view>
</template>

<script>
    export default {
        data(){
            return {
                List: [{
                    name: '法院公告1'
                }, {
                    name: '历史开庭公告0'
                }],
                current:0,
            }
        },
        methods:{
            Change(index) {
                this.current = index;
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>