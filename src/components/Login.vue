<template>
  <v-container>
      <v-row>
          <v-col offset-md="1" md="5">
              <v-text-field
              placeholder="fill your email here"
              v-model="email"
              >
              </v-text-field>
              <v-text-field
              placeholder="fill your password here"
              v-model="password"
              type="password"
              >
              </v-text-field>
              <v-row>
                  <v-col>
                    <v-btn @click.prevent="logIn()">
                    Login
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn @click.prevent="logOut()">
                    Log out
                    </v-btn>
                  </v-col>
              </v-row>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
    data: () => (
        {
            email: '',
            password: ''
        }
    ),
    methods: {
        logIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                console.log('login thanh cong r ne =))))')
                this.$router.replace('/admin')
            }).catch((error) => {
                console.log(error, 'err')
            })
        },
        logOut() {
            firebase.auth().signOut().then(() => {
                console.log('sign out r ne')
            })
        }
    }
}
</script>

<style>

</style>