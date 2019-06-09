<template>
  <transition-group name="fade-in">
    <slot/>
  </transition-group>
</template>

<script>
  export default {
    name: "VNotificationTransition",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
