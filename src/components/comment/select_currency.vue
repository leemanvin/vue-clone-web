<template>
  <div class="select-currency">
    <h4 class="font-size-16 font-weight-bold">Seclect Currency</h4>
    <input class="form-control" type="text" v-model="searchStr" @input="searchRes" placeholder="Search currency" />
    <!-- <p>{{searchStr}}</p> -->
    <div class="select-list-wrap mt-3">
    <div class="fiat">
        <h6 class="font-size-16 font-weight-bold">Fiat currencies</h6>
        <ul class="currencies-list">
            <li class="d-flex align-items-center currencies-list-item" v-for="item in faits" :key="item.index">
                <img :src="item.logo" width="20" height="20" />
                <div class="ml-2 font-size-12 font-weight-bold">
                   <span class="d-block">{{item.name}}</span>
                   <span class="d-block">{{item.cur}}-{{item.symbol}}</span>
                </div>
        </li>
        </ul>
    </div>
    <div class="crypto mt-3">
        <h6 class="font-size-16 font-weight-bold">Cryptocurrencies</h6>
        <ul class="currencies-list">
            <li class="d-flex align-items-center currencies-list-item" v-for="item in coins" :key="item.index">
                <img class="border" :src="item.logo" width="20" height="20" />
                <div class="ml-2 font-size-12 font-weight-bold">
                   <span class="d-block">{{item.name}}</span>
                   <span class="d-block">{{item.symbol}}</span>
                </div>
        </li>
        </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            searchStr: '',
            faitsArry: [],
            coinsArry: [],
            faits:[
                        {
                            cur:"USD",
                            name:"US Dollar",
                            symbol:"$",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/usd.svg",
                            rate:1
                        },
                        {
                            cur:"CNY",
                            name:"Chinese Yuan",
                            symbol:"\u00A5",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/cny.svg",
                            rate:0.148275555291955
                        },
                        {
                            cur:"EUR",
                            name:"Euro",
                            symbol:"\u20AC",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/eur.svg",
                            rate:1.02288
                        },
                        {
                            cur:"GBP",
                            name:"Pound Sterling",
                            symbol:"\u00A3",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/gbp.svg",
                            rate:1.2011
                        },
                        {
                            cur:"JPY",
                            name:"Japanese Yen",
                            symbol:"\u00A5",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/jpy.svg",
                            rate:0.007264
                        },
                        {
                            cur:"AUD",
                            name:"Australian Dollar",
                            symbol:"A$",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/aud.svg",
                            rate:0.6892
                        },
                        {
                            cur:"KRW",
                            name:"South Korean Won",
                            symbol:"\u20A9",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/krw.svg",
                            rate:0.000759
                        },
                        {
                            cur:"TRY",
                            name:"Turkish Lira",
                            symbol:"\u20BA",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/try.svg",
                            rate:0.05638
                        },
                        {
                            cur:"ARS",
                            name:"Argentine Peso",
                            symbol:"ARS ",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/ars.svg",
                            rate:0.00727
                        },
                        {
                            cur:"SGD",
                            name:"Singapore Dollar",
                            symbol:"S$",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/sgd.svg",
                            rate:0.718
                        },
                        {
                            cur:"RUB",
                            name:"Russian Ruble",
                            symbol:"\u20BD",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/rub.svg",
                            rate:0.017684
                        },
                        {
                            cur:"HKD",
                            name:"Hong Kong Dollar",
                            symbol:"HK$",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/hkd.svg",
                            rate:0.12733
                        },
                        {
                            cur:"UAH",
                            name:"Ukrainian hryvnia",
                            symbol:"\u20B4",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/uah.svg",
                            rate:0.033703
                        },
                        {
                            cur:"BRL",
                            name:"Brazilian Real",
                            symbol:"R$",
                            fait:true,
                            logo:"//s1.coincarp.com/logo/faits/brl.svg",
                            rate:0.1843
                        },
                        {cur:"CAD",name:"Canadian Dollar",symbol:"C$",fait:true,logo:"//s1.coincarp.com/logo/faits/cad.svg",rate:0.77244},
                        {cur:"CLP",name:"Chilean Peso",symbol:"CLP",fait:true,logo:"//s1.coincarp.com/logo/faits/clp.svg",rate:0.001057},
                        {cur:"CZK",name:"Czech Koruna",symbol:"K\u010D",fait:true,logo:"//s1.coincarp.com/logo/faits/czk.svg",rate:0.041603},
                        {cur:"IDR",name:"Indonesian Rupiah",symbol:"Rp",fait:true,logo:"//s1.coincarp.com/logo/faits/idr.svg",rate:0.000067},
                        {cur:"TWD",name:"New Taiwan Dollar",symbol:"NT$",fait:true,logo:"//s1.coincarp.com/logo/faits/cny.svg",rate:0.033449},
                        {cur:"NZD",name:"New Zealand Dollar",symbol:"NZ$",fait:true,logo:"//s1.coincarp.com/logo/faits/nzd.svg",rate:0.62277},
                        {cur:"MXN",name:"Mexican Peso",symbol:"MXN",fait:true,logo:"//s1.coincarp.com/logo/faits/mxn.svg",rate:0.049071},
                        {cur:"CHF",name:"Swiss Franc",symbol:"\u20A3",fait:true,logo:"//s1.coincarp.com/logo/faits/chf.svg",rate:1.03301},
                        {cur:"INR",name:"Indian Rupee",symbol:"\u20B9",fait:true,logo:"//s1.coincarp.com/logo/faits/inr.svg",rate:0.012505},
                        {cur:"ZAR",name:"South African Rand",symbol:"R",fait:true,logo:"//s1.coincarp.com/logo/faits/zar.svg",rate:0.0581},
                        {cur:"THB",name:"Thai Baht",symbol:"\u0E3F",fait:true,logo:"//s1.coincarp.com/logo/faits/thb.svg",rate:0.02727},
                        {cur:"SEK",name:"Swedish Krona",symbol:"kr",fait:true,logo:"//s1.coincarp.com/logo/faits/sek.svg",rate:0.0969},
                        {cur:"PLN",name:"Polish Z\u0142oty",symbol:"z\u0142",fait:true,logo:"//s1.coincarp.com/logo/faits/pln.svg",rate:0.21407},
                        {cur:"PHP",name:"Philippine Peso",symbol:"\u20B1",fait:true,logo:"//s1.coincarp.com/logo/faits/php.svg",rate:0.01773},
                        {cur:"NOK",name:"Norwegian Krone",symbol:"kr",fait:true,logo:"//s1.coincarp.com/logo/faits/nok.svg",rate:0.100469},
                        {cur:"VND",name:"Vietnamese \u0111\u1ED3ng",symbol:"\u20AB",fait:true,logo:"//s1.coincarp.com/logo/faits/vnd.svg",rate:0.000043},
                        {cur:"HUF",name:"Hungarian Forint",symbol:"Ft",fait:true,logo:"//s1.coincarp.com/logo/faits/huf.svg",rate:0.002531},
                        {cur:"ILS",name:"Israeli New Shekel",symbol:"\u20AA",fait:true,logo:"//s1.coincarp.com/logo/faits/ils.svg",rate:0.28954},
                        {cur:"DKK",name:"Danish Krone",symbol:"kr",fait:true,logo:"//s1.coincarp.com/logo/faits/dkk.svg",rate:0.137363},
                        {cur:"MYR",name:"Malaysian Ringgit",symbol:"RM",fait:true,logo:"//s1.coincarp.com/logo/faits/myr.svg",rate:0.2242},
                        {cur:"AED",name:"United Arab Emirates Dirham",symbol:"AED",fait:true,logo:"//s1.coincarp.com/logo/faits/aed.svg",rate:0.27173},
                        {cur:"NGN",name:"Nigerian Naira",symbol:"\u20A6",fait:true,logo:"//s1.coincarp.com/logo/faits/ngn.svg",rate:0.002162},
                        {cur:"PKR",name:"Pakistani Rupee",symbol:"rs",fait:true,logo:"//s1.coincarp.com/logo/faits/pkr.svg",rate:0.00447}
                    ],
                        coins:[
                            {cur:"ETH",name:"Ethereum",symbol:"ETH",fait:false,logo:"//s1.coincarp.com/logo/1/ethereum.png",rate:1559.84},
                            {cur:"XRP",name:"Ripple",symbol:"XRP",fait:false,logo:"//s1.coincarp.com/logo/1/ripple.png",rate:0.3637},
                            {cur:"BCH",name:"Bitcoin Cash",symbol:"BCH",fait:false,logo:"//s1.coincarp.com/logo/1/bitcoin-cash.png",rate:123.66},
                            {cur:"LTC",name:"Litecoin",symbol:"LTC",fait:false,logo:"//s1.coincarp.com/logo/1/litecoin.png",rate:57.523},
                            {cur:"BTC",name:"Bitcoin",symbol:"BTC",fait:false,logo:"//s1.coincarp.com/logo/1/bitcoin.png",rate:22180.82}
                            ]
        }
    },
    mounted() {
        // console.log(this.searchStr);
    },
    methods: {
        searchRes: function() {
            this.faits=[];
            var faitsName = '';
            var coinsName = '';
            for (let index = 0; index < this.faits.length; index++) {
                faitsName = this.faits[index].name + this.faits[index].cur;
                // coinsName = this.coins[index].name + this.coins[index].symbol;
                // console.log(faitsName);
                // console.log(coinsName);
                if(faitsName.toLocaleLowerCase().indexOf(this.searchStr.toLocaleLowerCase())!= -1){
                    // this.faits.push(
                    //     {
                    //         cur:this.faits[index].cur,
                    //         name:this.faits[index].name,
                    //         symbol:this.faits[index].symbol,
                    //         fait:true,
                    //         logo:this.faits[index].logo,
                    //     }
                    // );
                    console.log("aaaaa"+this.faits);
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.select-currency {
				width: 601px; padding: 0.5rem 1rem;
                h6 {color: $gray-600;}
				.currencies-list{
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-gap: 10px;
					.currencies-list-item {
                        img {border-radius: 30px; border: 1px solid #eee;}
						span:last-child{
							 color: $gray-600;
						}
					}
				}
                .select-list-wrap{
                    max-height: 360px;
                    overflow-y: scroll;
                }
			}
</style>