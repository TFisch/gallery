<template>
<div class="gallery-list">
    <card v-for="painting in paintings" :key="painting.id" :painting="painting"> {{painting}}</card>
</div>
</template>

<script>
import { fetchPaintings } from '@/utilities/apiCalls';
import Card from '../Card/Card';

export default {
  name: 'gallery-list',
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
  background-color: lime;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 91.1vh;
  margin-top: 0.5em;
  overflow: scroll;
  width: 50vw;
}
</style>
