<template>
  <v-app>
    <Navigation />
    <v-content>
          <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({

  })
};
</script>
<style>
.m {
  color: red
}
main {
  background-image: url('https://images.pexels.com/photos/3171151/pexels-photo-3171151.jpeg?cs=srgb&dl=selective-focus-photography-of-man-preparing-food-beside-3171151.jpg&fm=jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
