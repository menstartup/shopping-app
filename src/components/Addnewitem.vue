<template>
  <v-container>
     <v-row>
         <v-col offset-md="1" md="5">
                 <h1>Admin table</h1>
                 <div class="pa-2">
                     <v-text-field
                     placeholder="Name of item"
                     v-model="name"
                     required
                     >
                     </v-text-field>
                     <v-text-field
                     placeholder="Description"
                     v-model="description"
                     required
                     >
                     </v-text-field>
                     <v-text-field
                     placeholder="Price of item"
                     v-model="price"
                     required
                     >
                     </v-text-field>
                 </div>
                 <v-row>
                     <v-col>
                         <v-btn color="green" @click="addItem()">Submit</v-btn>
                     </v-col>
                     <v-col class="text-right">
                         <v-btn color="red">Cancel</v-btn>
                     </v-col>
                 </v-row>
         </v-col>
    <!-- demo itemmenu -->
         <v-col offset-md="1" md="4">
                 <h1>Demo item</h1>
                 <v-simple-table>
                      <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left" width="60%">Name of items</th>
                            <th class="text-center" width="20%">Prices</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>
                                <span id="item_name">{{ name }}</span>
                                <br />
                                <span id="item_description">{{description}}</span>
                            </td>
                            <td style="text-align: center">{{ price }}</td>
                            </tr>
                        </tbody>
                       </template>
                 </v-simple-table>
         </v-col>
     </v-row> 
  </v-container>
</template>

<script>
import { dbMenuAdd } from '../../firebase'
export default {
    data: () => ({
        adminData: [],
        name: '',
        description: '',
        price: ''
    }
    ),
    methods: {
        addItem() {
            dbMenuAdd.add({
                name: this.name,
                description: this.description,
                price: this.price
            })
            this.name = ''
            this.description = ''
            this.price = ''
        }
    }
}
</script>

<style>

</style>