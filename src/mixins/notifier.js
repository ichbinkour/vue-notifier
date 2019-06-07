import {events} from "../events"

export default {
  methods: {
    notifier(opts) {
      if (typeof opts === 'object') {
        events.$emit('add', opts)
      }
    }
  }
}
