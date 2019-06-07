<template>
  <div
      :style="styles"
  >
    <div v-for="elem in items"
         :key="elem.id"
         :style="contentStyle"
         @click="deleteItem(elem)"
    >
      {{elem}}
    </div>
  </div>
</template>

<script>
  import {events} from "../events"
  import {formatDirection, generateId, getColor} from "../utils";

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
        default: 6000
      },
      color: {
        type: String,
        default: "#32b7f1"
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
      contentStyle() {
        console.log(this.color)
        return {
          'background-color': getColor(this.color),
          color: "white",
          padding: ".5em",
          "border-left": "6px solid red"
        }
      },
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

</style>
