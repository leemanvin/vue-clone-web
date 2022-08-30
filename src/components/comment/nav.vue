<template>
	<div class="nav-content">
		<div class="d-flex nav-content-c">
			<div class="top-bar pt-2 pb-2">
			<div class="container p-0 d-flex justify-content-between">
				<div class="topbar-l">
					<span class="font-size-10 mr-2" v-for="(list,index) in topbar" :key="index">
						<i class="iconfont icon-gas-station mr-1 font-weight-normal font-size-14" v-if="index==5"></i>
							{{list.title}}:
							<a v-if="typeof(list.value)=='number'">
								{{list.value}}
							</a>
							<a v-if="typeof(list.value)=='object'">
								<span v-for="item in list.value" :key="item.index">
								{{item.coin}} {{item.change_rate}} %
								</span>
							</a>
					</span>
				</div>
				<div class="topbar-r d-flex">
					<div class="toggle position-relative" :class="{show_toggle:this.toggle}">
						<span class="font-size-10" @click="toggledown()">
							English
							<i class="iconfont icon-down font-size-12"></i>
						</span>
						<ul class="dropdown-menu dropdown-animated shadow toggle-item font-size-12"  :class="{show_toggle:this.toggle}">
							<li class="dropdown-item rounded" @click="toggledown()">English</li>
							<li class="dropdown-item rounded" @click="toggledown()">简体中文</li>
						</ul>
					</div>
					<div class="ml-3 fait-dropdown position-relative" :class="{show_fait_drop:this.faitDropdown}">
						<span class="font-size-10" @click="faitDropdownToggle()">
							USD
							<i class="iconfont icon-down font-size-12"></i>
						</span>
						<div class="fait-dropdown-menu dropdown-menu dropdown-animated shadow position-absolute" :class="{show_fait_drop:this.faitDropdown}">
							<select_currency></select_currency>
						</div>
					</div>
					<div class="ml-3"><span><i class="iconfont icon-moon"></i></span></div>
				</div>
			</div>
		</div>
		<!--topbar//-->
		<div class="container-fluid app-nav">
			<b-navbar class="container">
				<div class="d-flex app-nav-left">
					<b-navbar-brand class="app-logo" href="/"></b-navbar-brand>
					<ul class="navbar-nav">
						<li class="nav-item" v-for="list in navList" :key="list.index" @mouseover="navDropdown(list)" @mouseout="navDropdown(list)">
							<router-link class="nav-link font-weight-bold font-size-14" :to="{ path: list.path }">
								{{list.name}}
								<i class="iconfont icon-down font-size-10 ml-1" v-if="list.isDropdown == true"></i>
							</router-link>
							<div class="dropdown-menu dropdown-menu-right hover-dropdown" :class="{show:list.hover === false}" v-if="list.isDropdown == true">
								<router-link v-for="item in list.dropdownList" :key="item.index" :to="{ path: item.listPath }" class="dropdown-item rounded font-weight-bold">{{ item.listName }}</router-link>
							</div>
						</li>
					</ul>
					<!--pc-nav //-->
					<div class="phone-menu">
						<button class="phone-search-btn border-0 align-middle" @click="searchOpen">
							<i class="bi bi-search"></i>
						</button>
						<button class="phone-menu-btn border-0 align-middle" @click="menuOpen">
							<i class="bi bi-list"></i>
						</button>
					</div>
					<!--phone-menu //-->
				</div>
				<div class="nav-search p-2 rounded" :class="{search_show:this.SearchDropdown}">
					<i class="bi bi-search align-self-center mx-1"></i>
					<b-form-input id="dropdown-right__BV_toggle_" v-model="searchStr" class="search-input mr-sm-2 border-0 p-0" placeholder="Search" @click="searchDropdown" @input="getSearchRes"></b-form-input>
					<div v-if="!searchStr" class="dropdown-menu dropdown-animated shadow search-dropdown" :class="{search_show:this.SearchDropdown}">
						<h4 class="font-size-12 font-weight-bold pl-3 mt-2 text-gray"><i class="bi bi-bookmark-heart text-red mr-1"></i>Trending</h4>
						<ul>
							<li class="dropdown-item" v-for="item in trendingList" :key="item.i" @click="searchDropdown">
								<a class="font-size-12 d-flex justify-content-between">
									<div class="d-flex align-items-center">
										<img class="mr-1" :src="item.logo" width="20" height="20">
										<span class="font-weight-bold mr-1 name">{{item.name}}</span>
										<span class="symbol">({{item.symbol}})</span>
									</div>
									<span class="ranking text-gray">#{{item.ranking}}</span>
								</a>
							</li>
						</ul>
					</div><!--input为空时显示trending-->
					
					<div v-else class="dropdown-menu dropdown-animated shadow search-dropdown p-2" :class="{search_show:this.SearchDropdown}">
						<ul class="search-tabs d-flex font-size-12 gray-light">
							<li>
								<a @click="active=0" :class="{active:active==0}">All</a>
							</li>
							<li>
								<a @click="active=1" :class="{active:active==1}">Cryptoassets</a>
							</li>
							<li>
								<a @click="active=2" :class="{active:active==2}">Exchanges</a>
							</li>
							<li>
								<a @click="active=3" :class="{active:active==3}">Wallets</a>
							</li>
						</ul>
						<div v-show="active==0" class="tab-content">
							<div class="all-res">
								<h4 class="font-size-12 text-gray">Cryptoassets</h4>
								<ul>
									<li class="dropdown-item" v-for="list in searchAllCryptoRes" :key="list.i" @click="searchDropdown">
										<a class="font-size-12 d-flex justify-content-between">
											<div class="d-flex align-items-center">
												<img class="mr-1" :src="list.logo" width="20" height="20">
												<span class="font-weight-bold mr-1 name">{{list.name}}</span>
												<span class="symbol">({{list.symbol}})</span>
											</div>
										</a>
									</li>
								</ul>
								<button @click="active=1" class="text-blue font-size-12 border-0 bg-light">see all results({{this.searchCryptoRes.length}})</button>
							</div>
							<div class="all-res">
								<h4 class="font-size-12 text-gray">Exchanges</h4>
								<ul>
									<li class="dropdown-item" v-for="list in searchAllExchangesRes" :key="list.i" @click="searchDropdown">
										<a class="font-size-12 d-flex justify-content-between">
											<div class="d-flex align-items-center">
												<img class="mr-1" :src="list.logo" width="20" height="20">
												<span class="font-weight-bold mr-1 name">{{list.name}}</span>
											</div>
										</a>
									</li>
								</ul>
								<button @click="active=2" class="text-blue font-size-12 border-0 bg-light">see all results({{this.searchExchangesRes.length}})</button>
							</div>
							<div class="all-res">
								<h4 class="font-size-12 text-gray">Wallets</h4>
								<ul>
									<li class="dropdown-item" v-for="list in searchAllWalletsRes" :key="list.i" @click="searchDropdown">
										<a class="font-size-12 d-flex justify-content-between">
											<div class="d-flex align-items-center">
												<img class="mr-1" :src="list.logo" width="20" height="20">
												<span class="font-weight-bold mr-1 name">{{list.name}}</span>
											</div>
										</a>
									</li>
								</ul>
								<button @click="active=3" class="text-blue font-size-12 border-0 bg-light">see all results({{this.searchWalletsRes.length}})</button>
							</div>
						</div>
						<div v-show="active==1" class="tab-content">
							<ul class="crypto-res">
								<li class="dropdown-item" v-for="list in searchCryptoRes" :key="list.i">
									<a class="font-size-12 d-flex justify-content-between">
										<div class="d-flex align-items-center">
											<img class="mr-1" :src="list.logo" width="20" height="20">
											<span class="font-weight-bold mr-1 name">{{list.name}}</span>
											<span class="symbol">({{list.symbol}})</span>
										</div>
										<span class="ranking text-gray"></span>
									</a>
								</li>
							</ul>
						</div>
						<div v-show="active==2" class="tab-content">
							<ul class="exchanges-res">
								<li class="dropdown-item" v-for="list in searchExchangesRes" :key="list.i">
									<a class="font-size-12 d-flex justify-content-between">
										<div class="d-flex align-items-center">
											<img class="mr-1" :src="list.logo" width="20" height="20">
											<span class="font-weight-bold mr-1 name">{{list.name}}</span>
										</div>
										<span class="ranking text-gray"></span>
									</a>
								</li>
							</ul>
						</div>
						<div v-show="active==3" class="tab-content">
							<ul class="wallets-res">
								<li class="dropdown-item" v-for="list in walletsNameArr" :key="list.i">
									<a class="font-size-12 d-flex">
										<div class="d-flex align-items-center">
											<img class="mr-1" :src="list.logo" width="20" height="20">
											<span class="font-weight-bold mr-1 name">{{list.name}}</span>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div><!-- pc-search //-->
			</b-navbar>
		</div>
		<!--pc //-->
		</div>
		<div class="phone-menu-list bg-light" :class="{phone_menu_open: this.menuIsOpen}">
			<div class="menu-brand d-flex justify-content-between container">
				<a class="app-logo"></a>
				<button class="close-menu border-0 bg-light font-size-20" @click="menuOpen">×</button>
			</div>
			<ul class="container mt-2">
				<li class="phone-menu-item" v-for="list in navList" :key="list.index" @click="navDropdown(list)">
					<span v-if="list.dropdownList.length==0">
						<router-link class="font-weight-bold font-size-16 d-flex justify-content-between" :to="{ path:list.path }" @click.native="menuOpen">
							{{list.name}}
						</router-link>
					</span>
					<span v-else>
						<a class="font-weight-bold font-size-16 d-flex justify-content-between">
							<span>{{list.name}}</span>
							<i class="bi bi-chevron-down"></i>
						</a>
					</span>
					<div class="phone-menu-item-son" :class="{show:list.hover === false}" v-if="list.isDropdown == true">
						<router-link v-for="item in list.dropdownList" :key="item.index" :to="{ path: item.listPath }" class="dropdown-item font-weight-bold" @click.native="menuOpen">{{ item.listName }}</router-link>
					</div>
				</li>
			</ul>
		</div>
		<!--phone-menu //-->
		<div class="bg-light phone-search-list p-0" :class="{phone_search_open: this.searchIsOpen}">
			<div class="phone-search-head d-flex justify-content-between p-3">
				<div class="nav-search p-2 rounded w-100 mr-2">
					<i class="bi bi-search align-self-center mx-1"></i>
					<b-form-input class="mr-sm-2 border-0 p-0" placeholder="Search" v-model="searchStr" @input="getSearchRes"></b-form-input>
				</div>
				<b-button class="font-size-12" variant="light" @click="searchOpen">Cancel</b-button>
			</div>
			<div v-if="!searchStr" class="container phone-search-res mt-3">
				<h4 class="font-size-14 font-weight-bold"><i class="bi bi-bookmark-heart text-red mr-1"></i>Trending</h4>
				<ul>
					<li v-for="item in trendingList" :key="item.i">
						<a class="d-flex justify-content-between" @click="searchOpen">
							<div class="d-flex align-items-center">
								<img class="mr-1" :src="item.logo" width="18" height="18">
								<span class="name font-weight-bold align-middle mr-1">{{item.name}}</span>
								<span class="symbol align-middle">({{item.symbol}})</span>
							</div>
							<span class="rank">#{{item.ranking}}</span>
						</a>
					</li>
				</ul>
			</div>
			<div v-else class="container phone-search-res mt-3">
				<b-tabs pills nav-class="search-pills" nav-wrapper-class="gray-light font-size-12 text-body" align="center" no-nav-style>
					<b-tab title="All" active>
						<div class="all-res">
							<h4 class="font-size-12 text-gray">Cryptoassets</h4>
							<ul>
								<li class="dropdown-item" v-for="list in searchAllCryptoRes" :key="list.i" @click="searchDropdown">
									<a class="font-size-12 d-flex justify-content-between">
										<div class="d-flex align-items-center">
											<img class="mr-1" :src="list.logo" width="20" height="20">
											<span class="font-weight-bold mr-1 name">{{list.name}}</span>
											<span class="symbol">({{list.symbol}})</span>
										</div>
									</a>
								</li>
							</ul>
							<button class="text-blue font-size-12 border-0 bg-light">see all results({{this.searchCryptoRes.length}})</button>
						</div>
						<div class="all-res">
							<h4 class="font-size-12 text-gray">Exchanges</h4>
							<ul>
								<li class="dropdown-item" v-for="list in searchAllExchangesRes" :key="list.i" @click="searchDropdown">
									<a class="font-size-12 d-flex justify-content-between">
										<div class="d-flex align-items-center">
											<img class="mr-1" :src="list.logo" width="20" height="20">
											<span class="font-weight-bold mr-1 name">{{list.name}}</span>
										</div>
									</a>
								</li>
							</ul>
							<button class="text-blue font-size-12 border-0 bg-light">see all results({{this.searchExchangesRes.length}})</button>
						</div>
						<div class="all-res">
							<h4 class="font-size-12 text-gray">Wallets</h4>
							<ul>
								<li class="dropdown-item" v-for="list in searchAllWalletsRes" :key="list.i" @click="searchDropdown">
									<a class="font-size-12 d-flex justify-content-between">
										<div class="d-flex align-items-center">
											<img class="mr-1" :src="list.logo" width="20" height="20">
											<span class="font-weight-bold mr-1 name">{{list.name}}</span>
										</div>
									</a>
								</li>
							</ul>
							<button class="text-blue font-size-12 border-0 bg-light">see all results({{this.searchWalletsRes.length}})</button>
						</div>
					</b-tab>
					<b-tab title="Cryptoassets">
						<ul class="crypto-res">
							<li class="dropdown-item" v-for="list in searchCryptoRes" :key="list.i">
								<a class="font-size-12 d-flex justify-content-between">
									<div class="d-flex align-items-center">
										<img class="mr-1" :src="list.logo" width="20" height="20">
										<span class="font-weight-bold mr-1 name">{{list.name}}</span>
										<span class="symbol">({{list.symbol}})</span>
									</div>
									<span class="ranking text-gray"></span>
								</a>
							</li>
						</ul>
					</b-tab>
					<b-tab title="Exchanges">
						<ul class="exchanges-res">
							<li class="dropdown-item" v-for="list in searchExchangesRes" :key="list.i">
								<a class="font-size-12 d-flex justify-content-between">
									<div class="d-flex align-items-center">
										<img class="mr-1" :src="list.logo" width="20" height="20">
										<span class="font-weight-bold mr-1 name">{{list.name}}</span>
									</div>
									<span class="ranking text-gray"></span>
								</a>
							</li>
						</ul>
					</b-tab>
					<b-tab title="Wallets">
						<ul class="wallets-res">
							<li class="dropdown-item" v-for="list in walletsNameArr" :key="list.i">
								<a class="font-size-12 d-flex">
									<div class="d-flex align-items-center">
										<img class="mr-1" :src="list.logo" width="20" height="20">
										<span class="font-weight-bold mr-1 name">{{list.name}}</span>
									</div>
								</a>
							</li>
						</ul>
					</b-tab>
				</b-tabs>
			</div>
			<!--phone-search //-->
		</div>
	</div>
</template>

<script>
import select_currency from './select_currency.vue';
const axios = require('axios')
export default {
  components: { select_currency },
    data(){
        return {
            toggle: false,
			faitDropdown:false,
			input: "",
			topbar: [
				{
					title: "Cryptocurrencies",
					value: 19827
				},
				{
					title: "Exchanges",
					value: 818
				},
				{
					title: "Market Cap",
					value: 963379185136
				},
				{
					title: "24h Vol",
					value: 94039233565
				},
				{
					title: "Dominance",
					value: [
						{
							coin:"BTC",
							change_rate: 40.4
						},
						{
							coin: "ETH",
							change_rate: 14.9
						}
					]
				},
				{
					title: "ETH Gas",
					value: 35
				}
			],
            navList: [
                {
                    name: "Cryptocurrencies",
                    path: "/",
                    isDropdown: true,
                    hover: true,
                    dropdownList: [
                        { listName: "Ranking", listPath: "/" },
                        { listName: "Recently Added", listPath: "/new-crypto" },
                        { listName: "Global Charts", listPath: "/charts" },
                        { listName: "Spotlight", listPath: "/best-cryptos" },
                        { listName: "Gainers & Losers", listPath: "/gainers-losers" }
                    ]
                },
                {
                    name: "Exchanges",
                    path: "/exchanges",
                    isDropdown: true,
                    hover: true,
                    dropdownList: [
                        { listName: "Spot", listPath: "/exchanges" },
                        { listName: "Derivatives", listPath: "/exchanges/derivatives" },
                        { listName: "Dex", listPath: "/exchanges/dex" }
                    ]
                },
                {
                    name: "Converter",
                    path: "/test",
                    isDropdown: false,
                    hover: false,
                    dropdown: false,
                    dropdownList: []
                },
                {
                    name: "Charts",
                    path: "./src/LineChart",
                    isDropdown: false,
                    hover: false,
                    dropdown: false,
                    dropdownList: []
                }
            ],
            trendingList: [
                {
                    logo: "https://s1.coincarp.com/logo/1/bitcoin.png?style=36",
                    name: "Bitcoin",
                    symbol: "BTC",
                    ranking: "1"
                },
                {
                    logo: "https://s1.coincarp.com/logo/1/ethereum.png?style=36",
                    name: "Ethereum",
                    symbol: "ETH",
                    ranking: "2"
                },
                {
                    logo: "https://s1.coincarp.com/logo/1/binance-coin.png?style=36",
                    name: "Binance Coin",
                    symbol: "BNB",
                    ranking: "3"
                },
                {
                    logo: "https://s1.coincarp.com/logo/1/tether.png?style=36",
                    name: "Tether",
                    symbol: "USDT",
                    ranking: "4"
                },
                {
                    logo: "https://s1.coincarp.com/logo/1/solana.png?style=36",
                    name: "Solana",
                    symbol: "SOL",
                    ranking: "5"
                }
            ],
            
            menuIsOpen: false,
            searchIsOpen: false,
            SearchDropdown: false,
            searchStr: "",
            searchAllCryptoRes: [],
            searchAllExchangesRes: [],
            searchAllWalletsRes: [],
            searchCryptoRes: [],
            searchExchangesRes: [],
            searchWalletsRes: [],
            allCryptoNameArr: [],
            allExchangesNameArr: [],
            allWalletsNameArr: [],
            cryptoNameArr: [],
            exchangesNameArr: [],
            walletsNameArr: [],
            searchData: [],
            active: 0
        };
    },
    created() {
        this.getData();
    },
    mounted() {
        this.hideBox();
		this.toggleControll();
		this.faitDropToggle();
		this.valueList();
    },
    methods: {
		toggledown: function(){
			this.toggle = !this.toggle;
		},
		faitDropdownToggle:function(){
			this.faitDropdown = !this.faitDropdown;
		},
        getData: function () {
            var allData = [];
            axios.get("https://sapi.coincarp.com/api/v1/market/data/alllist?lang=en-US").then(result => {
                if (result.data.msg === "success") {
                    // if (allData == null) {
                    // 	var all_data = []
                    // }
                    if (allData.length === 0) {
                        allData.push(result.data.data);
                        // console.log(allData)
                        localStorage.setItem("all_data", JSON.stringify(allData));
                        console.log("a");
                    }
                }
            });
            this.searchData = JSON.parse(localStorage.getItem("all_data"));
            //	隔5分钟更新localstorage
            // setInterval(function() {
            // 	this.searchData = JSON.parse(localStorage.getItem('all_data'))
            // 	console.log('b')
            // }, 300000)
        },
		valueList: function(){
			console.log(typeof (this.topbar[4].value));
		},
        navDropdown: function (list) {
            list.hover = !list.hover;
            // console.log(list.dropdownList)
        },
        searchDropdown: function () {
            this.SearchDropdown = !this.SearchDropdown;
        },
        getSearchRes: function () {
            this.cryptoNameArr = [];
            this.exchangesNameArr = [];
            this.walletsNameArr = [];
            this.searchAllCryptoRes = [];
            this.searchAllExchangesRes = [];
            this.searchAllWalletsRes = [];
            this.searchCryptoRes = [];
            this.searchExchangesRes = [];
            this.searchWalletsRes = [];
            var coinsName = "";
            var symbol = "";
            var exchangesName = "";
            var walletsName = "";
            // axios.get('https://sapi.coincarp.com/api/v1/market/data/alllist?lang=en-US').then(result => {
            // if (result.data.msg === 'success') {
            //	coins data
            for (var i = 0; i < this.searchData[0].coins.length; i++) {
                coinsName = this.searchData[0].coins[i][1];
                symbol = this.searchData[0].coins[i][2];
                if (symbol === "") {
                    symbol = this.searchData[0].coins[i][1];
                }
                if ((this.searchData[0].coins[i][1].toLowerCase() + this.searchData[0].coins[i][2].toLowerCase()).indexOf(this.searchStr.toLowerCase()) !== -1) {
                    this.cryptoNameArr.push({
                        name: coinsName,
                        symbol: symbol,
                        logo: "//s1.coincarp.com/logo/1/" + coinsName.toLowerCase().replace(/\s+/g, "-") + ".png?style=36"
                    });
                }
            }
            for (var b = 0; b < this.cryptoNameArr.length && b < 100; b++) {
                this.searchCryptoRes.push(this.cryptoNameArr[b]);
            }
            for (var g = 0; g < this.cryptoNameArr.length && g < 5; g++) {
                this.searchAllCryptoRes.push(this.cryptoNameArr[g]);
            }
            //	exchanges data
            for (var c = 0; c < this.searchData[0].exchanges.length; c++) {
                exchangesName = this.searchData[0].exchanges[c][1];
                if (exchangesName.toLowerCase().indexOf(this.searchStr.toLowerCase()) !== -1) {
                    this.exchangesNameArr.push({
                        name: exchangesName,
                        logo: "//s1.coincarp.com/logo/2/" + exchangesName.toLowerCase().replace(/\s+/g, "-") + ".png?style=36"
                    });
                }
            }
            for (var d = 0; d < this.exchangesNameArr.length && d < 100; d++) {
                this.searchExchangesRes.push(this.exchangesNameArr[d]);
            }
            for (var h = 0; h < this.exchangesNameArr.length && h < 5; h++) {
                this.searchAllExchangesRes.push(this.exchangesNameArr[h]);
            }
            //	wallets data
            for (var e = 0; e < this.searchData[0].wallets.length; e++) {
                walletsName = this.searchData[0].wallets[e][1];
                if (walletsName.toLowerCase().indexOf(this.searchStr.toLowerCase()) !== -1) {
                    // console.log(walletsName)
                    this.walletsNameArr.push({
                        name: walletsName,
                        logo: "//s1.coincarp.com/logo/wallet/" + walletsName.toLowerCase().replace(/\s+/g, "-") + ".png?style=36"
                    });
                }
            }
            for (var f = 0; f < this.walletsNameArr.length && f < 100; f++) {
                this.searchWalletsRes.push(this.walletsNameArr[f]);
            }
            for (var j = 0; j < this.walletsNameArr.length && j < 5; j++) {
                this.searchAllWalletsRes.push(this.walletsNameArr[j]);
            }
            // console.log(this.searchWalletsRes)
            // }
            // })
        },
        menuOpen: function () {
            this.menuIsOpen = !this.menuIsOpen;
        },
        searchOpen: function () {
            this.searchIsOpen = !this.searchIsOpen;
            this.searchStr = "";
        },
        hideBox() {
            document.addEventListener("click", (e) => {
                // 如果当前点击的这个对象是这个模态框的话
                if ((e.target).closest(".search_show") || (e.target).closest(".search-input")) {
                    //  那么这个模态框还是显示的
                    this.SearchDropdown = true;
                    // console.log('a')
                }
                else if (!(e.target).closest(".search-dropdown")) {
                    // 如果当前点击的这个对象是这个show按钮以外的对象，那么这个模态框就隐藏
                    this.SearchDropdown = false;
                }
            });
        },
		toggleControll(){
			document.addEventListener("click", (e) => {
                // 如果当前点击的这个对象是这个模态框的话
                if ((e.target).closest(".show_toggle")) {
                    //  那么这个模态框还是显示的
                    this.toggle = true;
                }
                else if (!(e.target).closest(".show_toggle")) {
                    // 如果当前点击的这个对象是这个show按钮以外的对象，那么这个模态框就隐藏
                    this.toggle = false;
                }
            });
		},
		faitDropToggle(){
			document.addEventListener("click", (e) => {
                // 如果当前点击的这个对象是这个模态框的话
                if ((e.target).closest(".show_fait_drop")) {
                    //  那么这个模态框还是显示的
                    this.faitDropdown = true;
                }
                else if (!(e.target).closest(".fait-dropdown-menu")) {
                    // 如果当前点击的这个对象是这个show按钮以外的对象，那么这个模态框就隐藏
                    this.faitDropdown = false;
                }
            });
		}
    },
}
</script>

<style lang='scss' scoped>
@import "../../assets/sass/nav.scss";
</style>