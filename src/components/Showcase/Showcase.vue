<template>
<div class="showcase">
  <div class="display">
    <img v-bind:src="displayPainting.image" class="art-display" />
  <article class="art-info">
    <h3>{{displayPainting.title}}</h3>
    <h3>{{displayPainting.period}}</h3>
    <h3>{{displayPainting.century}}</h3>
</article>
  </div>


</div>
</template>

<script>
export default {
  name: 'showcase',
  props: ['displayPainting'],
  data() {
    return {
      art: this.displayPainting
    };
  }
};
</script>

<style scoped>
.showcase {
  align-items: center;
  background-color: #474853;
  display: flex;
  height: 45em;
  justify-content: center;
  overflow: scroll;
  width: 50vw;
}

.display {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20em;
  margin: auto 0;
}

.art-info {
  color: #86b3d1;
  text-shadow: 2px 2px black;
  display: flex;
  flex-direction: column;
}

.art-display {
  align-items: center;
  width: 20em;
  max-width: 14em;
}
</style>