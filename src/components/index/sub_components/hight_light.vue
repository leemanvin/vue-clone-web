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
                <div class="spotlight-item rounded border p-3" v-for="list,index in hightlightData" :key="index">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h4 class="h4 mb-0">{{list.listname}}</h4>
                        <a class="border btn-outline-primary rounded pl-2 pr-2 pointer" v-if="list.listname!='Trending'">see more</a>
                    </div>
                    <ul>
                        <li v-for="item in list.list">
                            <a class="d-flex justify-content-between pt-1 pb-1">
                                <div class="coin font-size-12">
                                    <img :src="item.logo" width="18" height="18" />
                                    <span>{{item.name}}</span>
                                    <span class="coin-symbol">{{item.symbol}}</span>
                                </div>
                                <span class="font-size-12" :class="{green:item.changerate>=0,red:item.changerate<0}" v-if="list.listname=='Trending'||list.listname=='Biggest Gainners'">{{item.changerate}}%</span>
                                <span class="font-size-12" v-if="list.listname=='Recently Added'|| list.listname=='Events Calendar'">{{item.date}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>

            <!--announcement-->
            <div class="news rounded border d-flex justify-content-between pt-2 pb-2 pl-3 pr-3 mt-3">
                <!-- <ul>
                    <li>
                        <a class="d-flex justify-contetn-between">
                            <p class="mb-0">Seiren Games (SERG) to be Listed on DigiFinex! Come and Join the Events to Share 25,000 SERG!</p>
                            <span>08/19</span>
                        </a>
                    </li>
                </ul> -->
                <div style="width: 100%;">
                    <el-carousel height="24px" direction="vertical" :autoplay="true" indicator-position="none">
                        <el-carousel-item v-for="list in announcelist" :key="list">
                            <ul>
                                <li v-for="item in list">
                                    <a class="d-flex justify-contetn-between">
                                        <p class="mb-0">{{item.newstitle}}</p>
                                        <span class="text-gray">08/19</span>
                                    </a>
                                </li>
                            </ul>
                        </el-carousel-item>
                    </el-carousel>
                </div>
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
            hightlightData:{
                    'trending':{
                        'listname':'Trending',
                        'list':[
                        {
                            'logo':'https://s1.coincarp.com/logo/1/stargate-finance.png?style=36',
                            'name':'Stargate Finance',
                            'symbol':'STG',
                            'changerate':'19.99',
                        },
                        {
                            'logo':'https://s1.coincarp.com/logo/1/terrausd.png?style=36&v=1656495486',
                            'name':'TerraClassicUSD',
                            'symbol':'USTC',
                            'changerate':'-17.44',
                        },
                        {
                            'logo':'https://s1.coincarp.com/logo/1/xinfin.png?style=36',
                            'name':'XDC Network',
                            'symbol':'XDC',
                            'changerate':'16.19',
                        },
                        ]
                    },
                    'gainers':{
                        'listname':'Biggest Gainners',
                        'list':[{
                            'logo':'https://s1.coincarp.com/logo/1/askobarnetwork.png?style=36',
                            'name':'Askobar Network',
                            'symbol':'ASKO',
                            'changerate':391.25,
                        },
                        {
                            'logo':'https://s1.coincarp.com/logo/1/connector-coin.png?style=36',
                            'name':'Connector Coin',
                            'symbol':'CTCO',
                            'changerate':148.59,
                        },
                        {
                            'logo':'https://s1.coincarp.com/logo/1/canadian-inuit-dog.png?style=36',
                            'name':'Canadian Inuit Dog',
                            'symbol':'CADINU',
                            'changerate':127.15,
                        },]
                    },
                    'Recently':{
                        'listname':'Recently Added',
                        'list':[{
                            'logo':'https://s1.coincarp.com/logo/1/kay-pacha.png?style=36&v=1661304269',
                            'name':'Kay Pacha',
                            'symbol':'PACHA',
                            'date':'Today',
                        },
                        {
                            'logo':'https://s1.coincarp.com/logo/1/hisand33.png?style=36',
                            'name':'hiSAND33',
                            'symbol':'HISAND33',
                            'date':'Today',
                        },
                        {
                            'logo':'https://s1.coincarp.com/logo/1/canadian-inuit-dog.png?style=36',
                            'name':'Göztepe S.K. Fan Token',
                            'symbol':'GOZ',
                            'date':'Today',
                        },]
                    },
                    'event':{
                        'listname':'Events Calendar',
                        'list':[{
                            'logo':'https://s1.coincarp.com/logo/1/immutablex.png?style=36&v=1661302535',
                            'name':'AMA',
                            'date':'08/24',
                        },
                        {
                            'logo':'https://s1.coincarp.com/logo/1/hisand33.png?style=36',
                            'name':'New Listing on Kucoin!World Premiere！',
                            'date':'08/24',
                        },
                        {
                            'logo':'https://s1.coincarp.com/logo/1/canadian-inuit-dog.png?style=36',
                            'name':'Binance P2P AMA',
                            'date':'08/25',
                        },]
                    },
            },
            announcelist: [
                [
                    {
                    "newscode": "binance-0a081d532750402bbb383ade7c4855e5",
                    "newstitle": "Hump Day Challenge: Win a Share of $50,000 in Rewards!",
                    "logo": "https://s1.coincarp.com/logo/2/binance.png",
                    "exchangecode": "binance",
                    "exchangename": "Binance",
                    "issuetime": 1661331751,
                    "languagecode": "en-US"
                },
                {
                    "newscode": "kucoin-ioi-trading-tournament-50000-usdt-in-ioi-are-up-for-grabs",
                    "newstitle": "IOI Trading Tournament: $50,000 in IOI Are Up for Grabs!",
                    "logo": "https://s1.coincarp.com/logo/2/kucoin.png",
                    "exchangecode": "kucoin",
                    "exchangename": "KuCoin",
                    "issuetime": 1661331674,
                    "languagecode": "en-US"
                },
                {
                    "newscode": "gate-io-27644-gateio-startup-free-offering-shpingshpingand-announcement-of-free-distribution-rules10000000-shping-free-of-charge",
                    "newstitle": "Gate.io Startup Free Offering: Shping (SHPING) and Announcement of Free Distribution Rules (10,000,000 SHPING free of charge)",
                    "logo": "https://s1.coincarp.com/logo/2/gate-io.png?v=1654130549",
                    "exchangecode": "gate-io",
                    "exchangename": "gate.io",
                    "issuetime": 1661331671,
                    "languagecode": "en-US"
                },
                ],
                [
                    {
                    "newscode": "bitfinex-823",
                    "newstitle": "Bitfinex Adds Margin Trading for 2 Pairs",
                    "logo": "https://s1.coincarp.com/logo/2/bitfinex.png?v=1642558568",
                    "exchangecode": "bitfinex",
                    "exchangename": "Bitfinex",
                    "issuetime": 1661331222,
                    "languagecode": "en-US"
                },
                {
                    "newscode": "mexc-9800368864025-mexc-will-list-okaleido-oka-trade-to-share-10-000-usdt-",
                    "newstitle": "MEXC Will List okaleido (OKA) - Trade to Share 10,000 USDT!",
                    "logo": "https://s1.coincarp.com/logo/2/mexc.png?v=1624346057",
                    "exchangecode": "mexc",
                    "exchangename": "MEXC Global",
                    "issuetime": 1661329881,
                    "languagecode": "en-US"
                },
                {
                    "newscode": "mexc-9813624733721-resumption-of-deposits-withdrawals-and-spot-trading-for-rocki",
                    "newstitle": "Resumption of Deposits, Withdrawals and Spot Trading for ROCKI",
                    "logo": "https://s1.coincarp.com/logo/2/mexc.png?v=1624346057",
                    "exchangecode": "mexc",
                    "exchangename": "MEXC Global",
                    "issuetime": 1661329082,
                    "languagecode": "en-US"
                },
                ],
                [
                    {
                    "newscode": "binance-77099d25affa45b2b544b64e4097fd23",
                    "newstitle": "Binance VIP Includes OTC Trades in Spot Trading Volume Calculation",
                    "logo": "https://s1.coincarp.com/logo/2/binance.png",
                    "exchangecode": "binance",
                    "exchangename": "Binance",
                    "issuetime": 1661328100,
                    "languagecode": "en-US"
                },
                {
                    "newscode": "gate-io-27643-fast-transaction-processing-speed-join-konpaykontrading-competition-share-15000-mega-rewards-in-kon",
                    "newstitle": "Fast Transaction Processing Speed: Join Konpay (KON) Trading Competition, Share $15,000 Mega Rewards in KON!",
                    "logo": "https://s1.coincarp.com/logo/2/gate-io.png?v=1654130549",
                    "exchangecode": "gate-io",
                    "exchangename": "gate.io",
                    "issuetime": 1661326659,
                    "languagecode": "en-US"
                },
                {
                    "newscode": "gate-io-27642-gateio-startup-free-offering-lucky-blocklblockand-announcement-of-free-distribution-rules-101195882-lblockfree-of-charge",
                    "newstitle": "Gate.io Startup Free Offering: Lucky Block (LBLOCK) and Announcement of Free Distribution Rules(101,195,882 LBLOCK) free of charge",
                    "logo": "https://s1.coincarp.com/logo/2/gate-io.png?v=1654130549",
                    "exchangecode": "gate-io",
                    "exchangename": "gate.io",
                    "issuetime": 1661325859,
                    "languagecode": "en-US"
                }
                ],
            ],
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
            .coin {
                .coin-symbol {color: $gray-600;}
                img {border-radius: 30px;}
            }
            
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