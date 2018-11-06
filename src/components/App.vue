<template>
  <div id="app">
    <Header></Header>
    <div class="main-wrap">
      <GalleryList v-bind:getPainting="getPainting"></GalleryList>
      <Showcase :displayPainting="displayPainting">{{displayPainting}}</Showcase>
    </div>
  </div>
</template>

<script>
import Header from './Header/Header';
import GalleryList from './GalleryList/GalleryList';
import Showcase from './Showcase/Showcase';
export default {
  name: 'app',
  components: {
    Header,
    GalleryList,
    Showcase
  },
  methods: {
    getPainting: function(painting) {
      this.displayPainting = painting;
    }
  },
  data() {
    return {
      displayPainting: ''
    };
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
  background-color: #8e8268;
  height: 100%;
  width: 100%;
}
.main-wrap {
  display: flex;
}
</style>

