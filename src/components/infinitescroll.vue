<template>
 <div style="margin-top: 5px;" class="pa-7">
        <ul style="display: grid;grid-template-columns:repeat(2,1fr);" ref="listEl">
            <li v-for="(item,index) in items" style="display:inline">
                <img v-bind:src="item.img" height="450px" class="ma-5">
                <v-card class="px-5 mx-5" max-width="300" elevation="4">
                {{item.desc}}
                <v-divider></v-divider>
                    <div>
                        <p>SIZES: XS,S,M,L,XL,XXL</p>
                    </div>
                </v-card>
            </li>
        </ul>
    </div> 
</template>
<script setup>
import {ref} from "vue";
import getProducts from "../api/getProducts.js";

const listEl =ref(null);
const prodToShow=10;
const productList= ref(await getProducts(prodToShow,0));

</script>