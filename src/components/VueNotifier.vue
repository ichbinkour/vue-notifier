<template>
  <div :class="fixedPositionXY">
    <div :class="positionXY">
      {{positionXY}}
      <h1>ICHBINKOUR</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VueNotifier",
    props: {
      top: {
        type: Boolean
      },
      bottom: {
        type: Boolean
      },
      right: {
        type: Boolean
      },
      left: {
        type: Boolean
      },
      timeout: {
        type: Number,
        default: 6000 //ms
      }
    },
    data: function () {
      return {
        positionX: "top",
        positionY: "right",
      }
    },
    computed: {
      positionXY() {
        var positionX
        var positionY

        if (this.top)
          positionX = "top"
        if (this.bottom)
          positionX = "bottom"
        if (this.right)
          positionY = "right"
        if (this.left)
          positionY = "left"

        return 'notifier--' + positionX + '-' + positionY
      },
      fixedPositionXY() {
        var positionX
        var positionY

        if (this.top)
          positionX = "top"
        if (this.bottom)
          positionX = "bottom"
        if (this.right)
          positionY = "right"
        if (this.left)
          positionY = "left"

        return 'overall--' + positionX + '-' + positionY
      }
    },
    methods: {

    },
    created() {
      console.log("top", this.top)
      console.log("bottom", this.bottom)
      console.log("right", this.right)
      console.log("left", this.left)
      console.log("-----------")
      console.log("timeout", this.timeout, "ms")
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
    background-color: red;
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
