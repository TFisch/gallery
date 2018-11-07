<template>
  <div class="card" v-on:click="fetchPaintingObject(painting)">
    <img v-bind:src="this.painting.image" class="image" />
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['painting', 'getPainting'],
  methods: {
    fetchPaintingObject: async function(painting) {
      await this.getPainting(painting);
    }
  },
  data() {
    return {
      selected: {}
    };
  }
};
</script>

<style scoped>
.card {
  align-items: center;
  background-color: #aaa0a0;
  border: solid black 2.5px;
  cursor: pointer;
  box-shadow: 6px 6px 2px 1px rgba(11, 11, 24, 0.2);
  display: flex;
  height: 20em;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  width: 16em;
  overflow: hidden;
}

.card:hover {
  border: solid lightgray 2.5px;
}

.image {
  align-items: center;
  width: auto;
  height: auto;
  max-width: 90%;
  max-height: 90%;
}
</style>
