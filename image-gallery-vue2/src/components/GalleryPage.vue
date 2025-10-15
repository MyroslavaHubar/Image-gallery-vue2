<template>
  <div class="gallery-wrap">
    <div class="gallery">
      <ImageCard
        v-for="image in visibleGallery"
        :key="image.id"
        :image="image"
      />

      <div class="add-card" @click="addNextImage">
        <div class="plus">+</div>
        <p>Add your Picture</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ImageCard from "./ImageCard.vue";
import { GalleryItem } from "@/store"; 

export default Vue.extend({
  components: { ImageCard },

  data() {
    return {
      initialCount: 8,
    };
  },

  computed: {
    gallery(): GalleryItem[] {
      return (this as any).$store.getters.gallery;
    },

    visibleGallery(): GalleryItem[] {
      return this.gallery.slice(0, this.initialCount);
    },
  },

  mounted() {
    this.$store.dispatch("fetchGallery");
  },

  methods: {
    addNextImage() {
      if (this.initialCount < this.gallery.length) {
        this.initialCount += 1;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.gallery-wrap {
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px;
  border-radius: 6px;
  min-width: 1024px;
  margin: 0 auto;
  height: 600px;

  &::-webkit-scrollbar {
    height: 12px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f8f9;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #21b8c6;
    border-radius: 6px;
  }
}

.gallery {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 260px;
  grid-template-rows: repeat(2, 250px);
  grid-gap: 16px;
  align-items: start;
	width: max-content;
}

.add-card {
  position: fixed;
  bottom: 112px;
  right: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  color: #8499a7;
  background: #fff;
  min-height: 150px;
  min-width: 220px;
  transition: all 0.2s ease;
  box-shadow: -7px -3px 50px -17px rgba(102, 102, 105, 1);
  border-radius: 12px;

  .plus {
    font-size: 60px;
    font-weight: 700;
    line-height: 1;
    color: #21b8c6;
  }

  p {
    margin: 6px 0 0;
    font-size: 0.95rem;
  }

  &:hover {
    background: #eaf8fb;
    border-color: #1fb6c1;
  }
}
</style>
