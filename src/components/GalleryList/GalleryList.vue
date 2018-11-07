<template>
<div class="gallery-list">
    <card v-for="painting in paintings" :key="painting.id" 
    :painting="painting" v-bind:getPainting="getPainting"> {{painting}}</card>
</div>
</template>

<script>
import { fetchPaintings } from '@/utilities/apiCalls';
import Card from '../Card/Card';

export default {
  name: 'gallery-list',
  props: ['getPainting'],
  components: {
    Card
  },
  methods: {
    fetchPaintings
  },
  created() {
    this.fetchPaintings().then(response => (this.paintings = response));
  },
  data() {
    return {
      paintings: []
    };
  }
};
</script>

<style scoped>
.gallery-list {
  background-color: #474853;
  border-top: solid black 2.5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 91.1vh;
  margin-top: 0.5em;
  overflow: scroll;
  width: 50vw;
}
</style>
