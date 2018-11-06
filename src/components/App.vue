<template>
  <div id="app">
    <Header></Header>
    <GalleryList></GalleryList>
  </div>
</template>

<script>
import Header from './Header/Header';
import GalleryList from './GalleryList/GalleryList';

export default {
  name: 'app',
  components: {
    Header,
    GalleryList
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>

