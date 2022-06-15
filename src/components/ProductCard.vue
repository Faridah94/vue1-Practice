<template>
  <div>        
      <v-card
        class="mx-3 mt-1"
        max-width="200px"
      >
          <v-card-subtitle>
            {{ Product.title }} - {{ Product.id }} 
           
          </v-card-subtitle>
           <v-card-actions>
            <v-btn
              color="purple"
              text
              @click="addToCart()"
            >
                <v-icon color="primary" center green small>Add</v-icon>
            </v-btn>
            </v-card-actions>
      </v-card>    
  </div>
</template>
<script>
export default {
  props:["Product"],
  methods:{
    addToCart(){
      this.$store.dispatch('addToCart' ,{
        Product: this.Product,
        quantity:1
      })
    }
  }
}
</script>

