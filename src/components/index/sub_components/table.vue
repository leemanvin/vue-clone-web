<template>
	<div class="index-table">
		<table id="scroll-horizontal-datatable" class="w-100 stripe row-border order-column nowrap">
			<thead>
				<tr>
					<td class="td1">#</td>
					<td class="td2">Name</td>
					<td class="td3">Price</td>
					<td class="td4">24h%</td>
					<td class="td5">7d%</td>
					<td class="td6">Market cap</td>
					<td class="td7">Volume</td>
					<td class="td8">Circulation Supply</td>
					<td class="td9">Last 7 Days</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="data in tableData" :key="data.index">
					<td class="td1">{{data.rankno}}</td>
					<td class="td2">
						<a class="d-flex" href="">
							<img :src="data.logo" width="20" height="20" />
							<span class="ml-1 mr-1">{{data.coinname}}</span>
							<span class="text-gray">{{data.symbol}}</span>
						</a>
						
					</td>
					<td class="td3">${{data.price_usd}}</td>
					<td class="td4" :class="{green:data.changerate>=0,red:data.changerate<0}">
						<i class="iconfont" :class="{'icon-solid-arrow-up':data.changerate>=0,'icon-solid-arrow-down':data.changerate<0}"></i>
						{{data.changerate}}%
					</td>
					<td class="td5" :class="{green:data.changerate_7d>=0,red:data.changerate_7d<0}">
						<i class="iconfont" :class="{'icon-solid-arrow-up':data.changerate_7d>=0,'icon-solid-arrow-down':data.changerate_7d<0}"></i>
						{{data.changerate_7d}}%
					</td>
					<td class="td6">${{data.marketcap_usd}}</td>
					<td class="td7">
						<div>${{data.vol[0]}}</div>
						<div class="font-size-12 text-gray">{{data.vol[1]}}</div>
					</td>
					<td class="td8">{{data.marketcap_btc}} {{data.symbol}}</td>
					<td class="td9"><span class="s-line2-green" :data-peity='qqq()'>{{data.chartData}}</span></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import $ from 'jquery'
import {peity} from "../../../jquery.peity.min.js"
export default {
  data () {
    return {
		tableData: [
            {
                "coincode": "bitcoin",
                "coinname": "Bitcoin",
                "symbol": "BTC",
                "logo": "https://s1.coincarp.com/logo/1/bitcoin.png",
                "price_usd": 21535.79,
                "price_btc": 1,
                "changerate": 1.07,
				"changerate_7d":0.40,
                "rankno": 1,
                "marketcap_usd": 412002533708,
                "marketcap_btc": 19131061.99,
				"vol": [
					'22,146,450,978',
					'527,943.833 BTC'
				],
				"supply": [
					'89.48',
					'18,790,493 BTC',
					'21000000 BTC'
				],
				"chartData": '10.71,10.95,10.87,11.95,12.90,12.85,12.61,12.73,11.87,11.66,11.18,11.43,11.70,11.34,11.85,12.10,11.54,10.89,12.55,12.69,10.90,11.58,12.38,11.94,12.72,16.18,16.02,16.16'
            },
            {
                "coincode": "ethereum",
                "coinname": "Ethereum",
                "symbol": "ETH",
                "logo": "https://s1.coincarp.com/logo/1/ethereum.png",
                "price_usd": 1673.86,
                "price_btc": 0.077724,
                "changerate": 2.76,
				"changerate_7d":0.40,
                "rankno": 2,
                "marketcap_usd": 204376297368,
                "marketcap_btc": 9490007.13,
				"vol": [
					'17,327,904,516',
					'413,543.999 BTC'
				],
				"supply": '119,058,610 ETH',
				"chartData": '0.96,0.96,0.95,0.95,0.95,0.95,0.92,0.93,0.92,0.94,0.94,0.94,0.93,0.91,0.91,0.93,0.92,0.96,0.96,0.96,0.97,1,1,0.99,1,0.98,0.97,0.97,0.98'
            },
            {
                "coincode": "tether",
                "coinname": "Tether",
                "symbol": "USDT",
                "logo": "https://s1.coincarp.com/logo/1/tether.png",
                "price_usd": 0.9998,
                "price_btc": 0.00004642,
                "changerate": 0.01,
				"changerate_7d":0.40,
                "rankno": 3,
                "marketcap_usd": 67552449462,
                "marketcap_btc": 3136411.98,
				"vol": [
					'61,294,980,178',
					'1,465,437.769 BTC'
				],
				"supply": '78,542,163,568 USDT',
				"chartData": '1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1'
            },
            {
                "coincode": "usdc",
                "coinname": "USD Coin",
                "symbol": "USDC",
                "logo": "https://s1.coincarp.com/logo/1/usdc.png",
                "price_usd": 1.0006,
                "price_btc": 0.00004646,
                "changerate": 0.09,
				"changerate_7d":0.40,
                "rankno": 4,
                "marketcap_usd": 52558322148,
                "marketcap_btc": 2440395.4,
				"vol": [
					'61,294,980,178',
					'1,465,437.769 BTC'
				],
				"supply": '78,542,163,568 USDT',
				"chartData": '1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1'
            },
            {
                "coincode": "binance-coin",
                "coinname": "Binance Coin",
                "symbol": "BNB",
                "logo": "https://s1.coincarp.com/logo/1/binance-coin.png?v=1658909552",
                "price_usd": 297.56,
                "price_btc": 0.013816,
                "changerate": 0.38,
				"changerate_7d":0.40,
                "rankno": 5,
                "marketcap_usd": 48007515383,
                "marketcap_btc": 2229035.59,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "binanceusd",
                "coinname": "Binance USD",
                "symbol": "BUSD",
                "logo": "https://s1.coincarp.com/logo/1/binanceusd.png",
                "price_usd": 0.9999,
                "price_btc": 0.00004643,
                "changerate": -0.01,
				"changerate_7d":0.40,
                "rankno": 6,
                "marketcap_usd": 19134671439,
                "marketcap_btc": 888511.64,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "ripple",
                "coinname": "XRP",
                "symbol": "XRP",
                "logo": "https://s1.coincarp.com/logo/1/ripple.png",
                "price_usd": 0.3451,
                "price_btc": 0.00001602,
                "changerate": 1.29,
				"changerate_7d":0.40,
                "rankno": 7,
                "marketcap_usd": 17095295887,
                "marketcap_btc": 793586.32,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "cardano",
                "coinname": "Cardano",
                "symbol": "ADA",
                "logo": "https://s1.coincarp.com/logo/1/cardano.png",
                "price_usd": 0.4609,
                "price_btc": 0.0000214,
                "changerate": 0.85,
				"changerate_7d":0.40,
                "rankno": 8,
                "marketcap_usd": 15756693358,
                "marketcap_btc": 731597.39,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "solana",
                "coinname": "Solana",
                "symbol": "SOL",
                "logo": "https://s1.coincarp.com/logo/1/solana.png",
                "price_usd": 35.4613,
                "price_btc": 0.001646,
                "changerate": 1.85,
				"changerate_7d":0.40,
                "rankno": 9,
                "marketcap_usd": 12384915940,
                "marketcap_btc": 574868.14,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "dai",
                "coinname": "Dai Stablecoin",
                "symbol": "DAI",
                "logo": "https://s1.coincarp.com/logo/1/dai.png",
                "price_usd": 1.0001,
                "price_btc": 0.00004643,
                "changerate": 0.01,
				"changerate_7d":0.40,
                "rankno": 10,
                "marketcap_usd": 10221567240,
                "marketcap_btc": 474539.91,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "dogecoin",
                "coinname": "Dogecoin",
                "symbol": "DOGE",
                "logo": "https://s1.coincarp.com/logo/1/dogecoin.png",
                "price_usd": 0.068496,
                "price_btc": 0.00000318,
                "changerate": 1.36,
				"changerate_7d":0.40,
                "rankno": 11,
                "marketcap_usd": 9087416671,
                "marketcap_btc": 421893.03,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "polkadot100",
                "coinname": "Polkadot",
                "symbol": "DOT",
                "logo": "https://s1.coincarp.com/logo/1/polkadot100.png",
                "price_usd": 7.6379,
                "price_btc": 0.000354,
                "changerate": 1.74,
				"changerate_7d":0.40,
                "rankno": 12,
                "marketcap_usd": 8782152336,
                "marketcap_btc": 407033.59,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "shibainu",
                "coinname": "Shiba Inu",
                "symbol": "SHIB",
                "logo": "https://s1.coincarp.com/logo/1/shibainu.png",
                "price_usd": 0.00001313,
                "price_btc": 0.0000000006096,
                "changerate": 0.23,
				"changerate_7d":0.40,
                "rankno": 13,
                "marketcap_usd": 7742377484,
                "marketcap_btc": 359463.31,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "tron",
                "coinname": "TRON",
                "symbol": "TRX",
                "logo": "https://s1.coincarp.com/logo/1/tron.png",
                "price_usd": 0.065247,
                "price_btc": 0.00000302,
                "changerate": -0.50,
				"changerate_7d":0.40,
                "rankno": 14,
                "marketcap_usd": 6641074200,
                "marketcap_btc": 307386.45,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "avalanche",
                "coinname": "Avalanche",
                "symbol": "AVAX",
                "logo": "https://s1.coincarp.com/logo/1/avalanche.png",
                "price_usd": 23.1606,
                "price_btc": 0.001075,
                "changerate": 0.33,
				"changerate_7d":0.40,
                "rankno": 15,
                "marketcap_usd": 6622137672,
                "marketcap_btc": 307366.73,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "matictoken",
                "coinname": "Polygon",
                "symbol": "MATIC",
                "logo": "https://s1.coincarp.com/logo/1/matictoken.png",
                "price_usd": 0.8193,
                "price_btc": 0.00003804,
                "changerate": 1.19,
				"changerate_7d":0.40,
                "rankno": 16,
                "marketcap_usd": 6588912744,
                "marketcap_btc": 305922.42,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "wrapped-bitcoin",
                "coinname": "Wrapped Bitcoin",
                "symbol": "WBTC",
                "logo": "https://s1.coincarp.com/logo/1/wrapped-bitcoin.png",
                "price_usd": 21543.77,
                "price_btc": 1.0003,
                "changerate": 1.18,
				"changerate_7d":0.40,
                "rankno": 17,
                "marketcap_usd": 6142215002,
                "marketcap_btc": 285211.76,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "uniswap",
                "coinname": "Uniswap",
                "symbol": "UNI",
                "logo": "https://s1.coincarp.com/logo/1/uniswap.png",
                "price_usd": 7.1075,
                "price_btc": 0.00033,
                "changerate": 1.80,
				"changerate_7d":0.40,
                "rankno": 18,
                "marketcap_usd": 5300492071,
                "marketcap_btc": 246100.93,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "leotoken",
                "coinname": "Unus Sed LEO",
                "symbol": "LEO",
                "logo": "https://s1.coincarp.com/logo/1/leotoken.png",
                "price_usd": 5.2151,
                "price_btc": 0.000242,
                "changerate": -1.34,
				"changerate_7d":0.40,
                "rankno": 19,
                "marketcap_usd": 4974966183,
                "marketcap_btc": 230856.89,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            },
            {
                "coincode": "ethereum-classic",
                "coinname": "Ethereum Classic",
                "symbol": "ETC",
                "logo": "https://s1.coincarp.com/logo/1/ethereum-classic.png",
                "price_usd": 36.4114,
                "price_btc": 0.00169,
                "changerate": 9.12,
				"changerate_7d":0.40,
                "rankno": 20,
                "marketcap_usd": 4970578180,
                "marketcap_btc": 230704.59,
				"vol": [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				"supply": [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				"chartData": '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
            }
        ],
	}
  },
  created() {
	  //datable init
	  $(document).ready(function() {
	  	"use strict"; 
	  	$('#scroll-horizontal-datatable').DataTable({
	  		// "scrollX": true,
	  		searching:false, 
	  		bLengthChange:false,
	  		"paging": false,
	  		"info": false, 
	  		// fixedColumns:   {
	  		//     leftColumns: 1,
	  		// },
	  		"language": {
	  			"paginate": {
	  				"previous": "<i class='mdi mdi-chevron-left'>",
	  				"next": "<i class='mdi mdi-chevron-right'>"
	  			}
	  		},
	  		columnDefs: [
	  					 { type: 'num-html', targets: 7 }
	  				   ],
	  		"drawCallback": function () {
	  			$('.dataTables_paginate > .pagination').addClass('pagination-rounded');
	  		}
	  	});
	  })
  },
  mounted() {
	  
  },
  methods: {
	  qqq(){
		this.$nextTick(()=>{
			  console.log($('.cell').html())
			  $('.s-line2-green').peity('line', {
				width: 154,
				height: 48,
				fill: '',
				strokeWidth: 2,
				min: 2500,
				stroke: '#16c784'
			  })
			  $('.s-line2-red').peity('line', {
			  	width: 154,
			  	height: 48,
			  	fill: '',
			  	strokeWidth: 2,
			  	min: 2500,
			  	stroke: '#e04a59',
			  })
		})
	  }
	  
  }
}
</script>

<style lang='scss' scoped>
@import "../../../assets/sass/data-table.scss"
</style>