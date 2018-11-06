<template>
  <div class="card">
    <img v-bind:src="this.painting.image[0].baseimageurl" class="image" />
  </div>
</template>

<script>
export default {
  name: 'card',
  props: ['painting']
};
</script>

<style scoped>
.card {
  align-items: center;
  background-color: magenta;
  border: solid black 1px;
  display: flex;
  height: 20em;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  width: 16em;
  overflow: hidden;
}

.image {
  align-items: center;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>