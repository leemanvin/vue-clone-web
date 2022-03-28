<template>
  <div class="chart-mask">
    <div class="chart">
      <div class="title">Answer Result</div>
      <ul class="bars" :class="{more: list.length > 3}">
        <li v-for="(item, index) in list" :class="{selected: item.selected, correct: item.correct}">
          <div :data-height="item.val / maxValue * 100" class="bar" :style='{height:item.val / maxValue * 100 +"%"}'>
            <div class="per">{{item.val}}</div>
          </div>
          <span class="name">{{item.name}}</span>
        </li>
      </ul>
      <a href="#none" class="close-btn" @click="onClose" :style="{background: 'url(' + chartClose + ') no-repeat 0 0'}"></a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'vueSimpleChart',
    data() {
      return {
        maxValue: 0,
        chartClose: require('./assets/button_close.svg')
      }
    },
    props: ['list'],
    methods: {
      updateMaxValue() {
        for (var i in this.list) {
          if (this.list[i].val > this.maxValue) {
            this.maxValue = this.list[i].val
          }
        }
        this.maxValue = Math.ceil((this.maxValue / 10) * 1.1) * 10
      },
      onClose() {
        this.$emit('close_me')
      }
    },
    mounted() {
      this.updateMaxValue()
    },
    watch: {
      list() {
        this.updateMaxValue()
      }
    }
  }
</script>
<style lang='less' scoped>
  .chart-mask {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .title {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    color: #cae0ff;
    width: 100%;
  }

  .chart {
    position: absolute;
    left: 36px;
    top: 90px;
    width: 900px;
    height: 520px;
    z-index: 5;
    font-size: 28px;
    color: #FFF;
  }

  .chart .close-btn {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0px;
    top: 0px;
    background: no-repeat 0 0;
    cursor: pointer;
    pointer-events: auto;
  }

  .chart .bars {
    text-align: center;
    height: 220px;
    padding: 0;
    margin-top: 160px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);

    &.more li {
      width: 60px;

      .bar {
        width: 30px;
        left: 15px;
      }

      .per {
        width: 60px;
      }
    }
  }

  .chart .bars li {
    display: inline-block;
    width: 120px;
    height: 100%;
    text-align: center;
    position: relative;
    list-style: none;

    &.selected .name:before {
      width: 36px;
      height: 36px;
      border: solid 6px #448fd3;
      position: absolute;
      margin-left: -24px;
      margin-top: -25px;
      left: 50%;
      top: 50%;
      content: '';
      border-radius: 50%;
    }

    &.correct {
      .bar {
        background-color: #9cd344;
      }

      .name:after {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -17px;
        margin-top: 5px;
        content: '';
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlpJREFUWAnt2M9LFFEcAPDv923uEl38wSYIEnQQ/AFC0CUC7eBusnToLIRrHewYEUIdgk4dPHQIvOhGh/6BRBENCTp11dUgQbQOHjpIhGaLM9++33RkdGdmZ5v3ZkD2wbLzvu/NfD/73Z2ZNwvQaI0KJFsBTDb9UfY3a/nbFllPEbAfiHZQqdlsS+b5nY7Z/cSBpfLQS5to4myhEGH9cuvF66mzA3H2Z1aHJgnoiU/O7O8/diYx4DHusQ/uKEzUlggwFI6JiJhWgZ/AwGBY3HEJV2I9SerDAaRSWIitgvXilFKTxZ6l+VgqWC8OUb2637f4SL5m48AoOOPAqDijQB04Y0BdOCNAnbhTwLdf7rZZ9v5NAGpHtFdGu5c+85WcZFLYphsnef+dxTNruRGw7desaXYwjFtuQire6/3wzYkFvZvAST4sreZu2EifeB1WddFm5HdMpwfHuuY2k8BJTkVIL7xwMkhEnVSpfCx9LVyVvlczVTknlyKCa07H6z0IaRonHoVAu14wd8wLGQdODMiJpnhVO+4G+W3LbzJFF25ZcPiQ9wlebLoO4r63usKhNvHddqHl4FelzFXqCLMHP9jsMe5SmLkyJwpO9lcjV+Z2SWGeE/+QQK0WJ04sJ6uZ6fVcH1q0zIBsLWSY8aiVc3KcACWgC6kLJ6ZTQB1InThPYBSkbpwv8H+QJnCBwHqQpnA1gWGQJnGSv2oFI0F3e9CzWG4CGuDrZNkd577Fr2fO05d7TOd21Vnsd/D5jeHMTuUwDwT9fMv7yX+RvS92L2z5zW/EGxU4LxX4C32JQ/wighNUAAAAAElFTkSuQmCC);
      }
    }
  }

  .chart .bars li .bar {
    width: 60px;
    border-radius: 6px 6px 0 0;
    background: #cae0ff;
    position: absolute;
    bottom: 0;
    left: 30px;
    transition: height 1s;
  }

  .chart .bars li .per {
    position: absolute;
    width: 120px;
    text-align: center;
    top: -28px;
    font-size: 20px;
    left: -50%;
  }

  .chart .bars li span {
    width: 100%;
    position: absolute;
    bottom: -2em;
    left: 0;
    font-size: 30px;
    text-align: center;
  }
</style>
