<template>
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
</template>

<script>

export default {
    name:'v-footer',
  // 定义属性
  data() {
    return {
      aboutUs: [
                {
                    name: "About Us",
                    path: "/about"
                },
                {
                    name: "Terms of use",
                    path: "/terms"
                },
                {
                    name: "Privacy policy",
                    path: "/privacy"
                },
                {
                    name: "Disclaimer",
                    path: "/declare"
                }
            ],
            cryptoPrice: [
                {
                    name: "Bitcoin Price",
                    path: "/bitcoin"
                },
                {
                    name: "Ethereum Price",
                    path: "/ethereum"
                },
                {
                    name: "BNB Price",
                    path: "/binance-coin"
                },
                {
                    name: "DogeCoin Price",
                    path: "/dogecoin"
                }
            ],
            support: [
                {
                    name: "Request Form",
                    path: "https://docs.google.com/forms/d/e/1FAIpQLSdWgmf8KDMgMMmUP311I9XQTcnVVizTKrpfCtNMfqGX77HZdA/viewform"
                },
                {
                    name: "Contact Support",
                    path: "/contact"
                },
                {
                    name: "FAQ",
                    path: "/FAQ"
                }
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
  @import "../../assets/sass/footer.scss";
</style>