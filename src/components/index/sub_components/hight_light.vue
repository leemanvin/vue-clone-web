<template>
    <div class="index-topcoin mb-4 d-flex justify-content-between">
        <div class="coin">
            <h1 class="font-size-24 font-weight-bold">Today's Bitcoin (BTC) Price</h1>
            <p class="mb-0">The price of Bitcoin (BTC) is <span class="text-red font-weight-bold">$23,456.25</span> ,a <span class="text-red font-weight-bold">1.86%</span> decrease over the last 24 hours. <a v-b-toggle.collapse-2>Read more</a></p>
            <b-collapse id="collapse-2">Today's global crypto market cap is $1,396.6B, which is down 1.78% over the last 24 hours. The total cryptocurrency market volume in the last 24 hours is $127.94B,which is up 16.97% over the last 24 hours. Bitcoin's price now is currently $23,456. Bitcoin's dominance is currently 32.1%, which makes a 0.00% increase compared to the last day.</b-collapse>
        </div>
        <div class="hight-light align-self-end">
            <span>hightlights</span>
            <el-switch v-model="value1"></el-switch>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1: true,
        }
    },
}
</script>
<style lang="scss" scoped>
    .index-topcoin{
        .coin {
            p{color: $gray-600;}
            a {color: $body-color;}
        }
    }
</style>