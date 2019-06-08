<template>
  <div
      :style="styles"
  >
    <div v-for="elem in items"
         :key="elem.id"
         class="notification"
    >
      <v-notification-transition
          :show="elem.isActive"
      >
        <div
            :style="contentStyle"
            @click="deleteItem(elem)"
        >
          <p class="title">{{elem.title}}</p>
          <p>{{elem.text}}</p>
          <p>{{new Date()}}</p>
        </div>
      </v-notification-transition>
    </div>
  </div>
</template>

<script>
  import VNotificationTransition from "@/components/VNotificationTransition"
  import {events} from "../events"
  import {formatDirection, generateId, getColor} from "../utils";

  export default {
    name: "VueNotifier",
    components: {
      VNotificationTransition
    },
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
        default: 100000
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
          'background-color': getColor(this.color).main,
          color: "white",
          padding: ".5em",
          "border-left": "6px solid " + getColor(this.color).border,
          "-webkit-box-shadow": "-1px 1px 24px 6px rgba(0,0,0,0.75)",
          "-moz-box-shadow": "-1px 1px 24px 6px rgba(0,0,0,0.75)",
          "box-shadow": "-1px 1px 7px 0px " + getColor(this.color).main,
          "font-size": "14px"
        }
      },
      styles() {
        const {x, y} = formatDirection(this.position)
        const width = this.width
        console.log("style =>", x, y)

        let styles = {
          width: '300px',
          [y]: '8px',
          position: "absolute",
          "z-index": "999"
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
  .notification {
    padding: 3px;
  }
  .notification {
    p {
      margin: 0;
      font-size: 12px;
    }
    .title {
      font-weight: bold;
    }
  }
</style>
