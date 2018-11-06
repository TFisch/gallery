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
  background-color: #8e8268;
  height: 3em;
  margin: auto;
}

.text {
  color: #86b3d1;
  text-shadow: 2px 2px black;
  margin: auto;
}
</style>
