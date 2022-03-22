<template>
	<div id="app">
		<div class="container-fluid app-nav">
			<b-navbar class="container" variant="light">
				<div class="d-flex app-nav-left">
					<b-navbar-brand class="app-logo" href="/"></b-navbar-brand>
					<ul class="navbar-nav">
						<li class="nav-item" v-for="list in navList" :key="list.index" @mouseover="navDropdown(list)" @mouseout="navDropdown(list)">
							<router-link class="nav-link font-weight-bold font-size-14" :to="{ path: list.path }">{{list.name}}</router-link>
							<div class="dropdown-menu dropdown-menu-right hover-dropdown" :class="{show:list.hover === false}" v-if="list.isDropdown == true">
								<router-link v-for="item in list.dropdownList" :key="item.index" :to="{ path: item.listPath }" class="dropdown-item rounded font-weight-bold">{{ item.listName }}</router-link>
							</div>
						</li>
					</ul>
					<!--pc-nav //-->
					<div class="phone-menu">
						<button class="phone-search-btn border-0 bg-light align-middle" @click="searchOpen">
							<i class="bi bi-search"></i>
						</button>
						<button class="phone-menu-btn border-0 bg-light align-middle" @click="menuOpen">
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
					<!-- <div v-else class="dropdown-menu dropdown-animated shadow search-dropdown pt-3 pb-3" :class="{search_show:this.SearchDropdown}">
							<b-tabs class="pl-3 pr-3" pills nav-class="search-pills" nav-wrapper-class="gray-light font-size-12 text-body" align="center" no-nav-style>
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
					</div> --><!--input不为空时显示结果-->
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
		<div class="bg-light phone-search-list pb-3" :class="{phone_search_open: this.searchIsOpen}">
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
		<router-view/>
		<!--router-->
		<div class="footer">
			<div class="container p-0">
				<div class="row">
					<div class="col-xl-6 about-div">
						<a class="footer-brand"></a>
						<p class="mt-3">CoinCarp provide crypto prices ,analysis, news and charts. We try our best to be the world's leading cryptocurrency market data provider.</p>
						<div class="copyright">© 2022 <a>www.coincarp.com</a> All Rights Reserved.</div>
					</div>
					<div class="col-xl-6 footer-list">
						<div class="row">
							<div class="col-xl-6 d-flex justify-content-around">
								<div class="footer-link d-flex flex-column">
									<b class="font-size-16">About Us</b>
									<router-link v-for="list in aboutUs" :key="list.i" :to="list.path" class="mt-2">{{list.name}}</router-link>
								</div>
								<div class="footer-link d-flex flex-column">
									<b class="font-size-16">Crypto Price</b>
									<router-link v-for="list in cryptoPrice" :key="list.i" :to="list.path" class="mt-2">{{list.name}}</router-link>
								</div>
							</div>
							<div class="col-xl-6 d-flex justify-content-around">
								<div class="footer-link d-flex flex-column">
									<b class="font-size-16">Support</b>
									<router-link v-for="list in support" :key="list.i" :to="list.path" class="mt-2">{{list.name}}</router-link>
								</div>
								<div class="footer-link d-flex flex-column">
									<b class="font-size-16">Donate Us</b>
									<div class="mt-2">
										<a v-b-modal.modal-1>Bitcion</a>
										<b-modal id="modal-1" title="Bitcion Address" hide-footer>
											<div class="my-4 text-center">
												<img src="//s1.coincarp.com/static/images/qrcode/btc.png">
											</div>
										</b-modal>
									</div>
									<div class="mt-2">
										<a v-b-modal.modal-2>Ethereum</a>
										<b-modal id="modal-2" title="Ethereum Address" hide-footer>
											<div class="my-4 text-center">
												<img src="//s1.coincarp.com/static/images/qrcode/eth.png">
											</div>
										</b-modal>
									</div>
									<div class="mt-2">
										<a v-b-modal.modal-3>Trx</a>
										<b-modal id="modal-3" title="Trx Address" hide-footer>
											<div class="my-4 text-center">
												<img src="//s1.coincarp.com/static/images/qrcode/trn.png">
											</div>
										</b-modal>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--footer-->
	</div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'App',
	data() {
		return {
			input: '',
			navList: [
				{
					name: 'Coins',
					path: '/',
					isDropdown: true,
					hover: true,
					dropdownList: [
						{ listName: 'Ranking', listPath: '/' },
						{ listName: 'Recently Added', listPath: '/new-crypto' },
						{ listName: 'Global Charts', listPath: '/charts' },
						{ listName: 'Spotlight', listPath: '/best-cryptos' },
						{ listName: 'Gainers & Losers', listPath: '/gainers-losers' }
					]
				},
				{
					name: 'Exchanges',
					path: '/exchanges',
					isDropdown: true,
					hover: true,
					dropdownList: [
						{ listName: 'Spot', listPath: '/exchanges' },
						{ listName: 'Derivatives', listPath: '/exchanges/derivatives' },
						{ listName: 'Dex', listPath: '/exchanges/dex' }
					]
				},
				{
					name: 'Converter',
					path: '/test',
					isDropdown: false,
					hover: false,
					dropdown: false,
					dropdownList: []
				},
				{
					name: 'Charts',
					path: './src/LineChart',
					isDropdown: false,
					hover: false,
					dropdown: false,
					dropdownList: []
				}
			],
			trendingList: [
				{
					logo: 'https://s1.coincarp.com/logo/1/bitcoin.png?style=36',
					name: 'Bitcoin',
					symbol: 'BTC',
					ranking: '1'
				},
				{
					logo: 'https://s1.coincarp.com/logo/1/ethereum.png?style=36',
					name: 'Ethereum',
					symbol: 'ETH',
					ranking: '2'
				},
				{
					logo: 'https://s1.coincarp.com/logo/1/binance-coin.png?style=36',
					name: 'Binance Coin',
					symbol: 'BNB',
					ranking: '3'
				},
				{
					logo: 'https://s1.coincarp.com/logo/1/tether.png?style=36',
					name: 'Tether',
					symbol: 'USDT',
					ranking: '4'
				},
				{
					logo: 'https://s1.coincarp.com/logo/1/solana.png?style=36',
					name: 'Solana',
					symbol: 'SOL',
					ranking: '5'
				}
			],
			aboutUs: [
				{
					name: 'About Us',
					path: '/about'
				},
				{
					name: 'Terms of use',
					path: '/terms'
				},
				{
					name: 'Privacy policy',
					path: '/privacy'
				},
				{
					name: 'Disclaimer',
					path: '/declare'
				}
			],
			cryptoPrice: [
				{
					name: 'Bitcoin Price',
					path: '/bitcoin'
				},
				{
					name: 'Ethereum Price',
					path: '/ethereum'
				},
				{
					name: 'BNB Price',
					path: '/binance-coin'
				},
				{
					name: 'DogeCoin Price',
					path: '/dogecoin'
				}
			],
			support: [
				{
					name: 'Request Form',
					path: 'https://docs.google.com/forms/d/e/1FAIpQLSdWgmf8KDMgMMmUP311I9XQTcnVVizTKrpfCtNMfqGX77HZdA/viewform'
				},
				{
					name: 'Contact Support',
					path: '/contact'
				},
				{
					name: 'FAQ',
					path: '/FAQ'
				}
			],
			menuIsOpen: false,
			searchIsOpen: false,
			SearchDropdown: false,
			searchStr: '',
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
		}
	},
	created() {
		this.getData()
	},
	mounted() {
		this.hideBox()
	},
	methods: {
		getData: function() {
			var allData = []
			axios.get('https://sapi.coincarp.com/api/v1/market/data/alllist?lang=en-US').then(result => {
				if (result.data.msg === 'success') {
					// if (allData == null) {
					// 	var all_data = []
					// }
					if (allData.length === 0) {
						allData.push(result.data.data)
						// console.log(allData)
						localStorage.setItem('all_data', JSON.stringify(allData))
						console.log('a')
					}
				}
			})
			this.searchData = JSON.parse(localStorage.getItem('all_data'))
			//	隔5分钟更新localstorage
			// setInterval(function() {
			// 	this.searchData = JSON.parse(localStorage.getItem('all_data'))
			// 	console.log('b')
			// }, 300000)
		},
		navDropdown: function(list) {
			list.hover = !list.hover
			// console.log(list.dropdownList)
		},
		searchDropdown: function() {
			this.SearchDropdown = !this.SearchDropdown
		},
		getSearchRes: function() {
			this.cryptoNameArr = []
			this.exchangesNameArr = []
			this.walletsNameArr = []
			this.searchAllCryptoRes = []
			this.searchAllExchangesRes = []
			this.searchAllWalletsRes = []
			this.searchCryptoRes = []
			this.searchExchangesRes = []
			this.searchWalletsRes = []
			var coinsName = ''
			var symbol = ''
			var exchangesName = ''
			var walletsName = ''
			// axios.get('https://sapi.coincarp.com/api/v1/market/data/alllist?lang=en-US').then(result => {
				// if (result.data.msg === 'success') {
			//	coins data
			for (var i = 0; i < this.searchData[0].coins.length; i++) {
				coinsName = this.searchData[0].coins[i][1]
				symbol = this.searchData[0].coins[i][2]
				if (symbol === '') {
					symbol = this.searchData[0].coins[i][1]
				}
				if ((this.searchData[0].coins[i][1].toLowerCase() + this.searchData[0].coins[i][2].toLowerCase()).indexOf(this.searchStr.toLowerCase()) !== -1) {
					this.cryptoNameArr.push({
						name: coinsName,
						symbol: symbol,
						logo: '//s1.coincarp.com/logo/1/' + coinsName.toLowerCase().replace(/\s+/g, '-') + '.png?style=36'
					})
				}
			}
			for (var b = 0; b < this.cryptoNameArr.length && b < 100; b++) {
				this.searchCryptoRes.push(
					this.cryptoNameArr[b]
				)
			}
			for (var g = 0; g < this.cryptoNameArr.length && g < 5; g++) {
				this.searchAllCryptoRes.push(
					this.cryptoNameArr[g]
				)
			}
			//	exchanges data
			for (var c = 0; c < this.searchData[0].exchanges.length; c++) {
				exchangesName = this.searchData[0].exchanges[c][1]
				if (exchangesName.toLowerCase().indexOf(this.searchStr.toLowerCase()) !== -1) {
					this.exchangesNameArr.push({
						name: exchangesName,
						logo: '//s1.coincarp.com/logo/2/' + exchangesName.toLowerCase().replace(/\s+/g, '-') + '.png?style=36'
					})
				}
			}
			for (var d = 0; d < this.exchangesNameArr.length && d < 100; d++) {
				this.searchExchangesRes.push(
					this.exchangesNameArr[d]
				)
			}
			for (var h = 0; h < this.exchangesNameArr.length && h < 5; h++) {
				this.searchAllExchangesRes.push(
					this.exchangesNameArr[h]
				)
			}
			//	wallets data
			for (var e = 0; e < this.searchData[0].wallets.length; e++) {
				walletsName = this.searchData[0].wallets[e][1]
				if (walletsName.toLowerCase().indexOf(this.searchStr.toLowerCase()) !== -1) {
					// console.log(walletsName)
					this.walletsNameArr.push({
						name: walletsName,
						logo: '//s1.coincarp.com/logo/wallet/' + walletsName.toLowerCase().replace(/\s+/g, '-') + '.png?style=36'
					})
				}
			}
			for (var f = 0; f < this.walletsNameArr.length && f < 100; f++) {
				this.searchWalletsRes.push(
					this.walletsNameArr[f]
				)
			}
			for (var j = 0; j < this.walletsNameArr.length && j < 5; j++) {
				this.searchAllWalletsRes.push(
					this.walletsNameArr[j]
				)
			}
			// console.log(this.searchWalletsRes)
				// }
			// })
		},
		menuOpen: function() {
			this.menuIsOpen = !this.menuIsOpen
		},
		searchOpen: function() {
			this.searchIsOpen = !this.searchIsOpen
			this.searchStr = ''
		},
		hideBox() {
			document.addEventListener('click', (e) => {
					// 如果当前点击的这个对象是这个模态框的话
				if ((e.target).closest('.search_show') || (e.target).closest('.search-input')) {
				//  那么这个模态框还是显示的
					this.SearchDropdown = true
					// console.log('a')
				} else if (!(e.target).closest('.search-dropdown')) {
				// 如果当前点击的这个对象是这个show按钮以外的对象，那么这个模态框就隐藏
					this.SearchDropdown = false
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@import "./assets/sass/nav.scss";
@import "./assets/sass/footer.scss"
</style>
