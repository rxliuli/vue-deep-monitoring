<template>
  <v-app>
    <v-content>
      <v-container>
        <normal-watch />
        <br />
        <deep-watch />
        <br />
        <deep-watch-for-var />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NormalWatch from './components/NormalWatch'
import DeepWatch from './components/DeepWatch'
import DeepWatchForVar from './components/DeepWatchForVar'
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'bubble_chart', title: 'Inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  components: {
    NormalWatch,
    DeepWatch,
    DeepWatchForVar
  }
}
</script>
