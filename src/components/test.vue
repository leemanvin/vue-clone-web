<template>
	<div class="container mt-4">
		<b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
	</div>
</template>

<script>
	export default{
		name: 'test',
		data() {
			return {
				text: ''
			}
		}
	}
</script>

<style>
.el-container {
    width: 80%; margin: 0 auto;
  }
</style>
