<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              color="primary"
              dark
              v-on="on"
            >
              {{ cartItemCount }} cart
            </v-btn>
          </template>
          <v-list min-width="320px">
            <v-list-item
              v-for="item in cart"
              :key="item.Product.id"  
              @click="$event.stopPropagation()" 
            >
              <v-list-item-title>{{ item.quantity }}</v-list-item-title>
              <v-list-item-title>$ {{ item.Product.price }}</v-list-item-title>
              <v-list-item-title>{{ item.Product.title }}</v-list-item-title>
               <v-list-item-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click.prevent="removeProductFromCart(item.Product)"
              >
                <v-icon>mdi-delete</v-icon>  
              </v-btn>
            </v-list-item-action>
            </v-list-item>
            <hr/>
            <div @click="$event.stopPropagation()">
              <span>Total :{{ cartTotalPrice }}</span>
              <a href="#" style="float:right">Clear Cart</a>
          </div>
          </v-list>
          
        </v-menu>
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
      ],
    }),
    computed:{
      cart(){
        return this.$store.state.cart
      },
      cartItemCount(){
        return this.$store.getters.cartItemCount;
      },
      cartTotalPrice( ) {
        return this.$store.getters.cartTotalPrice;
          
        },      
    },
    methods:{
      removeProductFromCart(Product){
        this.$store.dispatch("removeProductFromCart" ,Product);

      }
    }
  }
</script>

<style scoped>

</style>