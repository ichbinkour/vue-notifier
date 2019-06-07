<template>
  <div id="app">
    <vue-notifier group="topLeft" position="top left"/>
    <vue-notifier group="topRight" position="top right"/>
    <vue-notifier group="bottomLeft" position="bottom left"/>
    <vue-notifier group="bottomRight" position="bottom right"/>
    <div style="position: absolute; top: 45%; left: 40%">
      <h2 style="text-align: center">vue-notifications</h2>
      <button @click="triggerNotifierTopLeft()">top left</button>
      <button @click="triggerNotifierTopRight()">top right</button>
      <button @click="triggerNotifierBottomLeft()">bottom left</button>
      <button @click="triggerNotifierBottomRight()">bottom right</button>
    </div>
  </div>
</template>

<script>
  import VueNotifier from "./components/VueNotifier"

  export default {
    name: 'app',
    components: {
      VueNotifier
    },
    methods: {
      triggerNotifierTopLeft() {
        this.notifier({group: "topLeft", text: "Je suis en haut à gauche"})
      },
      triggerNotifierTopRight() {
        this.notifier({group: "topRight", text: "Je suis en haut à droite"})
      },
      triggerNotifierBottomLeft() {
        this.notifier({group: "bottomLeft", text: "Je suis en bas à gauche"})
      },
      triggerNotifierBottomRight() {
        this.notifier({group: "bottomRight", text: "Je suis en bas à droite"})
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
