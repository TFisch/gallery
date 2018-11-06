<template>
  <div class="card">
    <p v-bind="painting.title">{{painting.title}}</p>
    <img v-bind:src="this.painting.image[0].baseimageurl" class="image" />
  </div>
</template>

<script>
export default {
  name: 'card',
  mounted() {
    console.log(this.painting.image[0].baseimageurl);
  },
  props: ['painting']
};
</script>

<style scoped>
.card {
  background-color: magenta;
  border: solid black 1px;
  height: 20em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  width: 16em;
  overflow: hidden;
}

.image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 90%;
}
</style>