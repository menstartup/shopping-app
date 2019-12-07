<template>
<div>
    <v-navigation-drawer 
    color="blue-grey darken-4"
    v-model="drawer" 
    app>
      <ul>
          <router-link to="/home" tag="li">
            <v-icon color="orange" style="margin-right: 8px">mdi-home</v-icon><span class="font-weight-light">Home</span>
          </router-link>
          <router-link to="/menu" tag="li">
            <v-icon color="orange" style="margin-right: 8px">mdi-silverware</v-icon><span class="font-weight-light">Menu</span>
          </router-link>
          <router-link to="/about" tag="li">
            <v-icon color="orange" style="margin-right: 8px">mdi-account-card-details-outline</v-icon><span class="font-weight-light">About</span>
          </router-link>
      </ul>
    </v-navigation-drawer>
    <v-app-bar 
    app 
    color="orange" 
    dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-light">Manh mini mart</v-toolbar-title>
    </v-app-bar>
</div>
  
</template>

<script>
export default {
 data:() => ({
    drawer: null
 })
}
</script>
<style lang="scss" scoped>
nav ul {
    padding: 0;
    margin-top: 20px;
    text-decoration: none
}
nav li {
    color: orangered;
    margin-left: 15%;
    padding: 5px 20px;
    list-style-type: none;
    cursor: pointer
}
nav li:last-child{
    position: absolute;
    bottom: 40px
}
</style>