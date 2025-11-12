<template>
  <div class="gallery-page">
    <div class="gallery">
        <div v-if="images.length === 0" class="add-button-top">
        <AddButton @add="addImage" />
      </div>
      <img
        v-for="img in images"
        :key="img.id"
        :src="img.src"
        class="gallery-img"
      />

			<div v-if="images.length > 0" class="add-button-wrapper">
        <AddButton @add="addImage" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import AddButton from '@/components/AddButton.vue';
import { GalleryItem } from '@/types/gallery';

export default Vue.extend({
  name: 'GalleryPage',
  components: { AddButton },
	  data() {
    return {
      nextImageIndex: 0, 
    };
  },
  computed: {
    ...mapGetters('images', ['items']),
    images(): GalleryItem[] {
      return this.items;
    },
  },
  methods: {
    ...mapMutations('images', ['add']),
    addImage(): void {
      const sampleImages: string[] = [
        '/images/image1.png',
        '/images/image2.png',
        '/images/image3.png',
        '/images/image4.png',
        '/images/image5.png',
      ];
        const src = sampleImages[this.nextImageIndex];
      	this.add({ src });
      	this.nextImageIndex = (this.nextImageIndex + 1) % sampleImages.length;
    },
  },
});
</script>

<style scoped>
.gallery-page {
  height: 670px;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  padding: 10px;
}


.gallery {
  display: grid;
  grid-auto-flow: column; 
  grid-auto-rows: max-content;
  gap: 10px;
  height: 100%;
  align-items: start;
}

.gallery-img {
  width: auto;
  height: auto;
  max-height: 100%;
  display: block;
  border-radius: 6px;
}

.add-button-top {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.add-button-wrapper {
  position: fixed;
  bottom: 35px;
  right: 60px;
  z-index: 10;
}
.gallery-page::-webkit-scrollbar {
  height: 8px;
}
.gallery-page::-webkit-scrollbar-track {
  background: #d1dae3;
  border-radius: 4px;
}
.gallery-page::-webkit-scrollbar-thumb {
  background-color: #21b8c6;
  border-radius: 4px;
}
.gallery-page::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
</style>
