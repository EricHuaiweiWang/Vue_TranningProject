<template>
  <div class="wrapper">
    this is home vue
    <v-Hello></v-Hello>
  </div>
</template>

<script>
import vHello from './Hello.vue'
export default {
  data () {
    return {
      name: 'Home page'
    }
  },
  components: {
    vHello
  }
}
</script>
