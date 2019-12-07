<template>
  <v-container>
    <v-row>
      <v-col offset-md="1" md="5">
        <div class="pa-2" id="info">
            <h1>Menu items</h1>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">NAME OF ITEMS</th>
                  <th class="text-left">PRICES</th>
                  <th class="text-left">ADD TO BASKET</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>
                    <span id="item_name">{{ item.name }}</span>
                    <br />
                    <span id="item_description">{{item.description}}</span>
                  </td>
                  <td style="text-align: center">{{ item.price }}</td>
                  <td style="text-align: center">
                    <v-btn text @click="addItemToBasket(item)">
                      <v-icon color="orange">mdi-plus</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
      <v-col offset-md="1" md="4">
        <div class="pa-2">
            <h1>Basket</h1>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" style="width: 30%">QUANTITY</th>
                  <th class="text-left" style="width: 50%">NAME OF ITEMS</th>
                  <th class="text-left" style="width: 20%">PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in basketItem" :key="item.name">
                  <td>
                      <v-icon color="orange" @click="increaseQtn(item)">mdi-plus-box</v-icon>
                    <span id="item_name">{{item.quantity}}</span>
                      <v-icon color="orange" @click="deIncreaseQtn(item)">mdi-minus-box</v-icon>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>
                      {{item.price}}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider></v-divider>
          <v-row id="basketCheckout" class="pa-2">
             <v-col>
                 <p>Subtotal:</p>
                 <p>Delivery:</p>
                 <p>Total amount:</p>
             </v-col>
             <v-col class="text-right">
                 <p>100 DDK</p>
                 <p>10 DDK</p>
                 <p><b>110 DDK</b></p>
             </v-col>
          </v-row>
          <v-row>
              <v-spacer></v-spacer>
              <v-btn color="orange">Check out</v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    desserts: [
      {
        name: "apple",
        price: 100,
        description:
          "The border-radius property defines the radius of the elements corners.",
        add: null
      },
      {
        name: "orange",
        price: 200,
        description:
          "The border-radius property defines the radius of the elements corners.",
        add: null
      },
      {
        name: "strawberry",
        price: 400,
        description:
          "The border-radius property defines the radius of the elements corners.",
        add: null
      },
      {
        name: "banana",
        price: 800,
        description:
          "The border-radius property defines the radius of the elements corners.",
        add: null
      }
    ],
    basketItem: []
  }),
  methods: {
      addItemToBasket(item) {
          console.log(item, 'item')
          if(this.basketItem.find(res => {
              res.name === item.name
          })) {
              item = this.basketItem.find(res => {
              res.name === item.name
          })
            
          }
          
          this.basketItem.push({
              name: item.name,
              price: item.price,
              quantity: 1
          });
          console.log(this.basketItem)
      },
      increaseQtn(item) {
        item.quantity++
      },
      deIncreaseQtn(item) {
          console.log(item, 'item deIncrese')
          item.quantity--
          if(item.quantity === 0){
              console.log(item, 'ressss')
              this.basketItem.find(res => {
                  res.name == item.name
                  const index = this.basketItem.indexOf(item.name)
                  console.log(index,'index')
                    if(index == -1) {
                        this.basketItem.splice(index, 1)
                    }
                    // console.log(this.basketItem)
              })
              
          }
          
      }
  }
};
</script>

<style>
h1 {
    
    border: solid 5px white;
    padding: 10px;
    margin-bottom: 5px;
    color: orangered;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center  
}
.col {
  background-color: white;
}
tr th {
  font-weight: 300;
}
#item_name {
  font-weight: bold;
}
tr td {
  padding: 10px 10px 10px 16px;
}
#item_description {
  font-style: italic;
  font-weight: 300;
  color: darkgrey;
  font-size: 13px;
}
#basketCheckout  {
    font-size: 14px
}
#basketCheckout p:first-child {
    line-height: 2px
}
</style>