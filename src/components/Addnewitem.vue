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
                        <v-file-input 
                        v-model="files"
                        label="File input"
                        dense
                        counter
                        :show-size="1000"
                        @change="uploadImage()"
                        >
                            <template v-slot:selection="{ index, text }">
                                <v-chip
                                    v-if="index < 2"
                                    color="deep-purple accent-4"
                                    dark
                                    label
                                    small
                                >
                                    {{ text }}
                                </v-chip>

                                <span
                                    v-else-if="index === 2"
                                    class="overline grey--text text--darken-3 mx-2"
                                >
                                    +{{ files.length - 2 }} File(s)
                                </span>
                            </template>
                        </v-file-input>
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
import { dbMenuAdd, fb } from '../../firebase'
export default {
    data: () => ({
        adminData: [],
        name: '',
        description: '',
        price: '',
        img: 'https://firebasestorage.googleapis.com/v0/b/tets4-411d9.appspot.com/o/product%2F48378688_1500181523450351_5421454702829109248_omanhava.jpg?alt=media&token=34cab540-0d45-4de5-b7fd-fae83de802c2',
        files: null
    }
    ),
    mounted() {
        console.log('anh ne', this.img, typeof(this.img))
    },
    methods: {
        uploadImage() {
            console.log(this.files, 'file ne =)))')
            var storageRef = fb.storage().ref('product/'+ this.files.name)
            let uploadTask = storageRef.put(this.files)
            uploadTask.on('state_changed', function(snapshot){
                console.log(snapshot, 'snapshot')
            }, function(error) {
                console.error(error)
            }, function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                //  var dowloadString =  downloadURL.toString()

                console.log('File available at', downloadURL);
                if(typeof(downloadURL) === 'string') {
                    return this.img = downloadURL
                }
                // console.log(typeof(uploadTask, 'type gi nao'))
                //     this.img = dowloadString
                // console.log(this.img)
            });
         });
        },
        addItem() {
            dbMenuAdd.add({
                name: this.name,
                description: this.description,
                price: this.price,
                img: this.img
            })
            this.name = ''
            this.description = ''
            this.price = ''
        },
        
    }
}
</script>

<style>

</style>