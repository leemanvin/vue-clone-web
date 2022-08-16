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
		<TabsBtn></TabsBtn>
		<IndexTable></IndexTable>
	</div>
</template>

<script>
import IndexTable from './sub_components/table.vue';
import TabsBtn from './sub_components/tabs.vue';
export default {
	data(){
		return{}
	},
	created(){
	},
	mounted(){},
	methods(){},
	components:{IndexTable,TabsBtn}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
