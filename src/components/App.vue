<template>
  <div id="app">
    <Header></Header>
    <GalleryList></GalleryList>
  </div>
</template>

<script>
import Header from './Header/Header';
import GalleryList from './GalleryList/GalleryList';
import { fetchPaintings } from '../utilities/apiCalls';

export default {
  name: 'app',
  mounted() {
    fetchPaintings();
  },
  components: {
    Header,
    GalleryList
  },
  methods: {
    fetchPaintings
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

