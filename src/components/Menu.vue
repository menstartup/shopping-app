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
                <tr v-for="(item, index) in desserts" :key="index">
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
                <tr v-for="(item, index) in basketItem" :key="index">
                  <td>
                    <v-icon color="orange" @click="increaseQtn(item)">mdi-plus-box</v-icon>
                    <span id="item_name">{{item.quantity}}</span>
                    <v-icon color="orange" @click="deIncreaseQtn(item)">mdi-minus-box</v-icon>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{item.price}}</td>
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
              <p>{{totalPrice}} DDK</p>
              <p>{{shippingCharge}} DDK</p>
              <p>
                <b>{{totalAmount}} DDK</b>
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn color="orange">Check out</v-btn>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <!-- <div id="manhnguyen" style="height: 1000px; background-color: yellow">
      <h1>haksagaljsgasgl</h1>
    </div> -->
  </v-container>
</template>

<script>
import {dbMenuAdd} from '../../firebase'
export default {
  data: () => ({
    desserts: [ ],
    shippingCharge: 10,
    testTotal: 0
  }),
  beforeCreate() {
    this.$store.dispatch('setMenuItems')
  },
  created() {
    dbMenuAdd.onSnapshot((querySnapshot) => {
      let menuItems = []
      querySnapshot.forEach(doc => {
        var itemMenu = doc.data()
        menuItems.push(
          {
            ...itemMenu,
            id: doc.id
          }
        )
      })
      this.desserts = menuItems
      console.log(menuItems, 'menuItems ne')
    })
  },
  mounted() {
    console.log(this.$store.state.menuItems,'testing menu item')
  },
  computed: {
    // desserts() {
    //   return this.$store.getters.getMenuItem
    // },
    basketItem() {
      return this.$store.state.basketItem
    },
    totalPrice() {
      var subTotal = 0;
      this.basketItem.forEach(res => {
        subTotal += res.stablePrice * res.quantity;
      });
      return subTotal;
    },
    totalAmount() {
      if (this.totalPrice == 0) {
        return 0;
      } else {
        return this.totalPrice + this.shippingCharge;
      }
    },
  },
  methods: {
    addItemToBasket(item) {
        this.$store.commit('addItemToBasket', item)
    },
    increaseQtn(item) {
      item.quantity++;
      item.price = item.quantity * item.stablePrice;
    },
    deIncreaseQtn(item) {
      item.quantity--;
      item.price = item.quantity * item.stablePrice;
      if (item.quantity === 0) {
        this.basketItem.splice(this.basketItem.indexOf(item), 1);
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
  text-align: center;
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
#basketCheckout {
  font-size: 14px;
}
#basketCheckout p:first-child {
  line-height: 2px;
}
</style>