<template>
  <v-container>
    <v-snackbar
      top
      v-model="snackbar"
    >
      {{ text }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
     <v-row>
         <v-col offset-md="1" md="8">
             <div>
                 <div>
                     <h1>Admin table</h1>
                     <v-spacer></v-spacer>
                 <v-btn color="orange" to="/Add">
                     <v-icon>mdi-plus</v-icon>Add new item
                 </v-btn>
                 </div>
                 <v-simple-table>
                      <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left" width="60%">Name of items</th>
                            <th class="text-center" width="20%">Prices</th>
                            <th class="text-center" width="10%">Edit</th>
                            <th class="text-center" width="10%">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in adminData" :key="index">
                            <td>
                                <span id="item_name">{{ item.name }}</span>
                                <br />
                                <span id="item_description">{{item.description}}</span>
                            </td>
                            <td style="text-align: center">{{ item.price }}</td>
                            <td style="text-align: center">
                                <v-btn text @click.stop="editItem(item)">
                                <v-icon color="orange">mdi-pencil</v-icon>
                                </v-btn>
                            </td>
                            <td style="text-align: center">
                                <v-btn text @click="deleteItem(item)">
                                <v-icon color="orange">mdi-delete</v-icon>
                                </v-btn>
                            </td>
                            </tr>
                        </tbody>
                       </template>
                 </v-simple-table>
             </div>
         </v-col>
     </v-row> 
     <v-row>
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <v-card>
                <h1>Edit item</h1>
                 <div class="pa-2">
                     <v-text-field
                     placeholder="Name of item"
                     v-model="item.name"
                     required
                     >
                     </v-text-field>
                     <v-text-field
                     placeholder="Description"
                     v-model="item.description"
                     required
                     >
                     </v-text-field>
                     <v-text-field
                     placeholder="Price of item"
                     v-model="item.price"
                     required
                     >
                     </v-text-field>
                 </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                  >
                    Disagree
                  </v-btn>

                  <v-btn
                    color="green darken-1"
                    text
                    @click="onUpdateItem(item)"
                  >
                    Agree
                  </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
     </v-row>
  </v-container>
</template>

<script>
import { dbMenuAdd } from '../../firebase'
export default {
    data: () => ({
    // adminData: [ ],
    dialog: false,
    item: [],
    text: 'item has been updated',
    snackbar: false
    }
    ),
    beforeCreate() {
      this.$store.dispatch('setMenuItems')
      console.log('test beforecreate')
    },
    updated() {
      console.log(this.adminData, '1212121212')
    },
    computed: {
      adminData() {
        return this.$store.getters.getMenuItem
      }
    },
    methods: {
      deleteItem(item) {
        dbMenuAdd.doc(item.id).delete().then(() => {
          console.log("delete thanh cong r nha")
        }).catch((error) => {
          console.log(error, "loi~ ne")
        })
      },
      editItem(item) {
        this.dialog = true
        const itemEach = item
        this.item = itemEach
      },
      onUpdateItem(item) {
        console.log(item, 'item')
        dbMenuAdd.doc(item.id).update({
          ...item
        }).then(() => {
          console.log('update successfull')
          this.snackbar = true
        }).catch((error) => {
          console.error("some thing might went wrong", error);
          
        })
        this.dialog = false
      }
    }
}
</script>

<style>

</style>