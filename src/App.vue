<template>
  <v-app>
    <v-content>

      <div id="app">
          <router-view></router-view>
      </div>
        <app-header/>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'
export default {
  name: 'App',

  components: {
    AppHeader
  },
};
</script>
