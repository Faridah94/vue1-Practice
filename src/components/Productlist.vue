<template>
<div>  
  <v-menu offset-y :close-on-content-click="closeOnContentClick">
    <template v-slot:activator="{ on }">
        <v-btn
        color="primary"
        dark
        v-on="on"
            @click="$event.stopPropagation()" 
        >
        Choose a sample
        </v-btn>
    </template> 
    <div id="card" class="overflow-y-auto"  @click="$event.stopPropagation()" >
     
        <div id="search" class="mt-4 mb-4 ml-4"  @click="$event.stopPropagation()" >
            <input type="text" v-model="search" placeholder="search Product"/>  
        </div> 
        <ProductCard  v-for="Product in filteredProducts" :key="Product.id" :Product="Product"  @click="$event.stopPropagation()" />  
       
    </div>
  </v-menu>
</div>
    
</template>

<script>
import ProductCard from './ProductCard'
export default {
    props:["Product"],
     data: () => ({
         search:''
     }),

    components:{
        ProductCard,
    },
    computed:{
        Products(){
            return this.$store.state.Products
        },
       filteredProducts(){
           
            return this.Products.filter((Product) => {
                return Product.title.match(this.search);
            });
        }
    },
    mounted(){
        this.$store.dispatch('getProducts')

    },
    methods:{
        toggleDropdown (event) {
                event.currentTarget.classList.toggle('is-active')
            },
    }
}
</script>
<style scoped>

#card{
  height: 300px;
  width: 300px;
  overflow: hidden;
}
</style>