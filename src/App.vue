<template>
  <div id="app">
    <vue-notifier group="topLeft" position="top left"  color="success"/>
    <vue-notifier group="topRight" position="top right" color="warning"/>
    <vue-notifier group="bottomLeft" position="bottom left" color="error"/>
    <vue-notifier group="bottomRight" position="bottom right" color="info"/>
    <div style="position: absolute; top: 45%; left: 40%">
      <h2 style="text-align: center">vue-notifications</h2>
      <button @click="triggerNotifierTopLeft()">top left</button>
      <button @click="triggerNotifierTopRight()">top right</button>
      <button @click="triggerNotifierBottomLeft()">bottom left</button>
      <button @click="triggerNotifierBottomRight()">bottom right</button>
    </div>
    <banner></banner>
  </div>
</template>

<script>
  import Banner from "@ichbinkour/vue-banner-test"
  import VueNotifier from "./components/VueNotifier"

  export default {
    name: 'app',
    components: {
      VueNotifier,
      Banner
    },
    methods: {
      // Success notification
      triggerNotifierTopLeft() {
        this.notifier({group: "topLeft", title: "Success notification !", text: "This is a success notification"})
      },
      // Warning notification
      triggerNotifierTopRight() {
        this.notifier({group: "topRight", title: "Warning notification !", text: "This is a warning notification"})
      },
      // Error notification
      triggerNotifierBottomLeft() {
        this.notifier({group: "bottomLeft", title: "Error notification !", text: "This is an error notification"})
      },
      // Info notification
      triggerNotifierBottomRight() {
        this.notifier({group: "bottomRight", title: "Info notification !", text: "This is an info notification"})
      }
    }
  }
</script>

<style>

</style>
