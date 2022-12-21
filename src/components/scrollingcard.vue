<template >
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="shopping-card" id="infinite-list">       
        <ul style="display: grid;grid-template-columns:repeat(2,1fr);" ref="listE1">
            <div v-for="(card, idx) in data" :key="idx" style="margin-top: 5px;" class="pa-7" >
                <div v-if="!Array.isArray(card)">
                <div v-if="card.image && card.name && card.price" class="card-img"><img :src="card.image" alt=""></div>
                <div v-if="card.image && card.name && card.price" class="card-name">{{ card.name }}</div>
                <div v-if="card.image && card.name && card.price" class="card-price"> Rs. {{ card.price }}</div>
                </div>
            <div v-if="Array.isArray(card)">
                <div v-for="(cards, idx) in card" :key="idx">
                <div v-if="cards.image && cards.name && cards.price" class="card-img"><img :src="cards.image" alt=""></div>
                <div v-if="cards.image && cards.name && cards.price" class="card-name">{{ cards.name }}</div>
                <div v-if="cards.image && cards.name && cards.price" class="card-price"> Rs. {{ cards.price }}</div>
                </div>
            </div>
            </div>
        </ul>
    </div>

</template>
<script src="../node_modules/vue-infinite-scroll/vue-infinite-scroll.js"></script>
<script>
import axios from 'axios'
import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll);
export default {
    name: 'ShoppingCard',
    data() {
        return {
            info: '',
            datas: '',
            busy: false
        }
    },
    mounted() {
        axios
            .get('https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=')
            .then(response => {
                this.info = response,
                    this.datas = response.data.result.products
            });
    },
    computed :{
        data(){
            return this.datas
        }
    },
    methods: {
    loadMore: function() {

    console.log("hi i am working here");
      this.busy = true;
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
            this.datas[i].similar_products ? this.datas.push(this.datas[i].similar_products) : '';
                }
        this.busy = false;
      }, 1000);
    
    }
  }
}
</script>
<style scoped>
.shopping-card {
    display: flex;
    gap: 9rem;
    flex-wrap: wrap;
}
.card-name {
    max-width: 18rem;
    white-space: nowrap;
    width: 18rem;
    overflow: hidden;
    text-overflow: clip;
}
.card-img {
    width: 290px;
}
</style>