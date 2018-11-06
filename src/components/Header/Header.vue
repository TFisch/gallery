<template>
<div class="header">
   <h1 class="text">{{text}}</h1>
</div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      text: 'Japanese Paintings'
    };
  }
};
</script>

<style scoped>
.header {
  background-color: lime;
  border-bottom: 1px solid black;
  height: 3em;
  margin: auto;
}

.text {
  color: brown;
  margin: auto;
}
</style>
