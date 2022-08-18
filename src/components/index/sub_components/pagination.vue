<template>
  <div class="mt-3">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>
<script>
export default {
    data() {
        return {
            rows: 100,
            perPage: 10,
            currentPage: 1
        }
    },
}
</script>
<style lang="">
    
</style>