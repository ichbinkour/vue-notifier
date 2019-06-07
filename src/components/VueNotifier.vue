<template>
  <div
      :style="styles"
  >
    <div v-for="elem in items"
         :key="elem.id"
         style="border: 1px solid red"
    >
      {{elem}}
    </div>
  </div>
</template>

<script>
  import {events} from "../events"
  import {formatDirection, generateId} from "../utils";

  export default {
    name: "VueNotifier",
    props: {
      position: {
        type: String,
        default: "top right"
      },
      width: {
        type: [Number, String],
        default: 300
      },
      group: {
        type: String,
        default: null
      },
      timeout: {
        type: Number,
        default: 3000
      }
    },
    data: function () {
      return {
        items: []
      }
    },
    methods: {
      deleteItem(item) {
        this.items = this.items.filter((v) => {
          console.log(item.id, v.id)
          return item.id !== v.id
        })
      },
      addItem(event) {
        let vm = this

        event.group = event.group || ''
        if (this.group !== event.group) {
          return
        }

        let item = {
          text: event.text || null,
          title: event.title || null,
          timeout: event.timeout || this.timeout,
          id: generateId(this.items),
          isActive: true
        }

        this.items.push(item)
        if (this.timeout >= 0) {
          let interval = setInterval(function () {
            vm.deleteItem(item)
            console.log("DELETE")
            clearInterval(interval)
          }, item.timeout)
        }
      }
    },
    computed: {
      styles() {
        const {x, y} = formatDirection(this.position)
        const width = this.width
        console.log("style =>", x, y)

        let styles = {
          width: '300px',
          [y]: '8px',
          position: "absolute"
        }

        if (x === 'center') {
          styles['left'] = `calc(50% - ${width/2}px)`
        } else {
          styles[x] = '18px'
        }
        return styles
      }
    },
    mounted() {
      events.$on('add', this.addItem)
    },
    created() {
      console.log(this.position)
    }
  }
</script>

<style lang="scss" scoped>
  @mixin position($position, $top: null,  $right: null, $bottom: null, $left: null) {
    position: $position;
    top: $top;
    right: $right;
    bottom: $bottom;
    left: $left;
    min-width: 300px;
    min-height: 80px;
  }

  .overall--top-right {
    position:fixed;
    right: 16px;
    top: 8px;
  }
  .overall--top-left {
    position:fixed;
    left: 16px;
    top: 8px;
  }
  .overall--bottom-right {
    position:fixed;
    right: 16px;
    bottom: 8px;
  }
  .overall--bottom-left {
    position:fixed;
    left: 16px;
    bottom: 8px;
  }
  .notifier--top-left {
    border: 1px solid red;
    @include position(absolute, $left: 16px, $top: 8px)
  }
  .notifier--top-right {
    border: 1px solid red;
    @include position(absolute, $right: 16px, $top: 8px)
  }
  .notifier--bottom-left {
    border: 1px solid red;
    @include position(absolute, $left: 16px, $bottom: 8px)
  }
  .notifier--bottom-right {
    border: 1px solid red;
    @include position(absolute, $right: 16px, $bottom: 8px)
  }
</style>
