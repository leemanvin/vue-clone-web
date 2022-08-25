<template>
    <!-- <div class="btn-group mb-3 index-tabs">
        <a class="btn btn-light font-size-12 font-weight-bold" v-for="list,index in tabsList" :key="index" :class="{current: currentBtn==index}" @click="currentState(index)">{{list}}</a>
    </div> -->
    <div>
      <b-button-group>
        <b-button class="font-size-12 font-weight-bold mb-3" variant="light" v-for="list,index in tabsList" :key="index" :class="{current: currentBtn==index}" @click="currentState(index)">{{list}}</b-button>
      </b-button-group>
    </div>
</template>

<script>
export default {
  data() {
    return {
        currentBtn: 0,
        tabsList: [
            'Cryptocurrencies',
            'Categories',
            'Metaverse',
            'GameFi',
            'Defi',
            'NFT',
            'Web3',
            'Solana Eco',
            'Play to Earn',
            'OEC Ecosystem',
        ],
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
    
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    currentState: function(index){
		this.currentBtn = index;
		console.log(index)
	},
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='scss' scoped>
  .current {background-color: $blue; color: $white;}
  @media (max-width:1024px){
	.index-tabs {
		overflow-x: scroll; width: 100%;
        .btn {white-space: nowrap;}
	}
}
</style>