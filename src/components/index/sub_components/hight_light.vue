<template>
    <div class="index-topcoin mb-4">
        
        <!--top coin-->
        <div class="d-flex justify-content-between">
            <div class="coin">
                <h1 class="font-size-24 font-weight-bold">Today's Bitcoin (BTC) Price</h1>
                <p class="mb-0">The price of Bitcoin (BTC) is <span class="text-red font-weight-bold">$23,456.25</span> ,a <span class="text-red font-weight-bold">1.86%</span> decrease over the last 24 hours. <a class="pointer" v-b-toggle.collapse-2>Read more</a></p>
            </div>
            <div class="hight-light align-self-center">
                <span>hightlights</span>
                <el-switch v-model="value1"  v-b-toggle.collapse-1></el-switch>
            </div>
        </div>
        <b-collapse id="collapse-2">Today's global crypto market cap is $1,396.6B, which is down 1.78% over the last 24 hours. The total cryptocurrency market volume in the last 24 hours is $127.94B,which is up 16.97% over the last 24 hours. Bitcoin's price now is currently $23,456. Bitcoin's dominance is currently 32.1%, which makes a 0.00% increase compared to the last day.</b-collapse>

        <!--hight light-->
        <b-collapse id="collapse-1">
            <!--spotlight-->
            <div class="spotlight mt-4">
                <div class="spotlight-item rounded border p-3">
                    <h4 class="h4">Trending</h4>
                    <ul>
                        <li>
                            <a class="d-flex justify-content-between">
                                <div>
                                    <span>Blox</span>
                                    <span>CDT</span>
                                </div>
                                <span>4.36%</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="spotlight-item rounded border p-3">
                    <h4 class="h4">Trending</h4>
                    <ul>
                        <li>
                            <a class="d-flex justify-content-between">
                                <div>
                                    <span>Blox</span>
                                    <span>CDT</span>
                                </div>
                                <span>4.36%</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="spotlight-item rounded border p-3">
                    <h4 class="h4">Trending</h4>
                    <ul>
                        <li>
                            <a class="d-flex justify-content-between">
                                <div>
                                    <span>Blox</span>
                                    <span>CDT</span>
                                </div>
                                <span>4.36%</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="spotlight-item rounded border p-3">
                    <h4 class="h4">Trending</h4>
                    <ul>
                        <li>
                            <a class="d-flex justify-content-between">
                                <div>
                                    <span>Blox</span>
                                    <span>CDT</span>
                                </div>
                                <span>4.36%</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!--announcement-->
            <div class="news rounded border d-flex justify-content-between pt-2 pb-2 pl-3 pr-3 mt-3">
                <ul>
                    <li>
                        <a class="d-flex justify-contetn-between">
                            <p class="mb-0">Seiren Games (SERG) to be Listed on DigiFinex! Come and Join the Events to Share 25,000 SERG!</p>
                            <span>08/19</span>
                        </a>
                    </li>
                </ul>
                <a class="border btn-outline-primary rounded pl-2 pr-2 pointer">more</a>
            </div>
        </b-collapse>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1: false,
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
    .spotlight {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 15px;
        .spotlight-item {
            
        }
    }
    .news {
        ul{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 15px;
            li {
                a {
                    p {width: 350px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
                }
            }
        }
    }
</style>