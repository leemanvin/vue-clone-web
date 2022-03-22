<template>
	<!-- <div class="container mt-3 mb-3">
		<el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'rank'}">
			<el-table-column prop="rank" label="#" sortable width="60" fixed="left"></el-table-column>
			<el-table-column prop="name" label="Name" sortable fixed="left"></el-table-column>
			<el-table-column prop="price" label="Price" sortable></el-table-column>
			<el-table-column prop="24" label="24h" sortable></el-table-column>
			<el-table-column prop="7" label="7d" sortable></el-table-column>
			<el-table-column prop="marketcap" sortable>
				<template slot="header" slot-scope="scope">
					<span>Market cap</span>
					<el-tooltip class="item" effect="dark" content="The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.Market Cap = Current Price x Circulating Supply." placement="top">
						<i class="bi bi-info-circle-fill"></i>
					</el-tooltip>
				</template>
			</el-table-column>
			<el-table-column sortable>
				<template slot="header" slot-scope="scope">
					<span>Volume</span>
					<el-tooltip class="item" effect="dark" content="A measure of how much of a cryptocurrency was traded in the last 24 hours." placement="top">
						<i class="bi bi-info-circle-fill"></i>
					</el-tooltip>
				</template>
				<template slot-scope="scope">
					<a class="d-block">${{scope.row.vol[0]}}</a>
					<span class="d-block">{{scope.row.vol[1]}}</span>
				</template>
			</el-table-column>
			<el-table-column sortable>
				<template slot="header" slot-scope="scope">
					<span>Circulation Supply</span>
					<el-tooltip class="item" effect="dark" content="The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market." placement="top">
						<i class="bi bi-info-circle-fill"></i>
					</el-tooltip>
				</template>
				<template slot-scope="scope">
					<div v-if="scope.row.nopercen==false">
						<i class="bi bi-info-circle-fill" :id="scope.row.ID"></i>
						<b-popover :target="scope.row.ID" triggers="hover" placement="bottom">
							<div class="d-flex justify-content-between font-size-12 mb-1">
								<span>percentag:</span><span>{{scope.row.supply[0]}}%</span>
							</div>
							<el-progress :percentage="scope.row.supply[0]" :show-text="false" style="width: 242px;"></el-progress>
							<div class="d-flex justify-content-between font-size-12 mt-2">
								<span class="font-size-12">Circulation Supply:</span>
								<span>{{scope.row.supply[1]}}</span>
							</div>
							<div class="d-flex justify-content-between font-size-12">
								<span class="font-size-12">Max Supply:</span>
								<span>{{scope.row.supply[2]}}</span>
							</div>
						</b-popover>
						<span>{{scope.row.supply[1]}}</span>
						<el-progress :percentage="scope.row.supply[0]" :show-text="false"></el-progress>
					</div>
					<span v-else>{{scope.row.supply}}</span>
				</template>
			</el-table-column>
			<el-table-column label="Last 7 Days">
				<template slot-scope="scope">
						<span class="s-line2-green" :data-peity='qqq()'>{{scope.row.chartData}}</span>
				</template>
			</el-table-column>
		</el-table>
	</div> -->
	<div class="container mt-3 mb-3">
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
						<td class="td1">{{data.rank}}</td>
						<td class="td2">{{data.name}}</td>
						<td class="td3">${{data.price}}</td>
						<td class="td4">{{data.percent_change_24h}}</td>
						<td class="td5">{{data.percent_change_7d}}</td>
						<td class="td6">${{data.marketcap}}</td>
						<td class="td7">
							<div>${{data.vol[0]}}</div>
							<div>{{data.vol[1]}}</div>
						</td>
						<td class="td8">18,960,693 BTC</td>
						<td class="td9"><span class="s-line2-green" :data-peity='qqq()'>{{data.chartData}}</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import {peity} from "../jquery.peity.min.js"
export default {
  data () {
    return {
		tableData: [
			{
				rank: '1',
				name: 'Bitcoin',
				price: '46,849.8',
				percent_change_24h: '0.99%',
				percent_change_7d: '4.25%',
				marketcap: '788,532,140,259',
				vol: [
					'22,146,450,978',
					'527,943.833 BTC'
				],
				supply: [
					'89.48',
					'18,790,493 BTC',
					'21000000 BTC'
				],
				ID: 'popover-target-1',
				nopercen: false,
				chartData: '10.71,10.95,10.87,11.95,12.90,12.85,12.61,12.73,11.87,11.66,11.18,11.43,11.70,11.34,11.85,12.10,11.54,10.89,12.55,12.69,10.90,11.58,12.38,11.94,12.72,16.18,16.02,16.16'
			},
			{
				rank: '2',
				name: 'Ethereum',
				price: '3,801.23',
				percent_change_24h: '0.69%',
				percent_change_7d: '12.55%',
				marketcap: '387,657,094,273',
				vol: [
					'17,327,904,516',
					'413,543.999 BTC'
				],
				supply: '119,058,610 ETH',
				ID: 'popover-target-2',
				nopercen: true,
				chartData: '0.96,0.96,0.95,0.95,0.95,0.95,0.92,0.93,0.92,0.94,0.94,0.94,0.93,0.91,0.91,0.93,0.92,0.96,0.96,0.96,0.97,1,1,0.99,1,0.98,0.97,0.97,0.98'
			},
			{
				rank: '3',
				name: 'Binance Coin',
				price: '524.83',
				percent_change_24h: '0.59%',
				percent_change_7d: '12.55%',
				marketcap: '76,683,939,378',
				vol: [
					'3,148,292,116',
					'75,098.435 BTC'
				],
				supply: [
					'69.48',
					'28,490,583 BTC',
					'21000000 BTC'
				],
				ID: 'popover-target-3',
				nopercen: false,
				chartData: '0.92,0.93,0.93,0.92,0.93,0.93,0.89,0.9,0.89,0.9,0.9,0.91,0.89,0.87,0.87,0.89,0.92,0.95,0.95,0.94,0.95,0.99,1,0.98,0.99,0.97,0.98,0.99,1'
			},
			{
				rank: '4',
				name: 'Tether',
				price: '1',
				percent_change_24h: '0.79%',
				percent_change_7d: '0.08%',
				marketcap: '78,612,851,515',
				vol: [
					'61,294,980,178',
					'1,465,437.769 BTC'
				],
				supply: '78,542,163,568 USDT',
				ID: 'popover-target-4',
				nopercen: true,
				chartData: '1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1'
			}
		]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/sass/data-table.scss"
</style>
