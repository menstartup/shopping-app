<template>
<div>
    <v-navigation-drawer 
    color="blue-grey darken-4"
    v-model="drawer" 
    app>
    <p v-if="information != null">
    {{information.email}}
    </p>
      <ul>
          <router-link 
          to="/home" 
          tag="li"
          active-class="active">
            <v-icon color="orange" style="margin-right: 8px">mdi-home</v-icon><span class="font-weight-light">Home</span>
          </router-link>
          <router-link to="/menu" tag="li" active-class="active">
            <v-icon color="orange" style="margin-right: 8px">mdi-silverware</v-icon><span class="font-weight-light">Menu</span>
          </router-link>
          <router-link to="/admin" tag="li" active-class="active">
            <v-icon color="orange" style="margin-right: 8px">mdi-account-tie</v-icon><span class="font-weight-light">Admin</span>
          </router-link>
          <router-link to="/login" tag="li" active-class="active">
            <v-icon color="orange" style="margin-right: 8px">mdi-alarm-light-outline</v-icon><span class="font-weight-light">Login</span>
          </router-link>
          <router-link to="/about" tag="li" active-class="active">
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
import firebase from 'firebase'
export default {
 data:() => ({
    drawer: null,
    information: ''
 }),
 created() {
   var user = firebase.auth().currentUser
   if(user) {
     console.log(user, 'user in navigation')
     this.information = user
   } else {
     console.log('no user available')
   }
 },
//  computed: {
//    inforMation() {
//       var infor = firebase.auth().currentUser
//       return infor
//    }
//  }

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
.router-link-exact-active {
  color: green;
  background-color: yellow
}
</style>