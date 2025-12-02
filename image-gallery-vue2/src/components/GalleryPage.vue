<template>
  <div class="gallery-page">
    <div class="gallery">
        <div v-if="images && images.length === 0" class="add-button-top">
        <AddButton @add="addImage" />
      </div>
      <img
        v-for="img in images"
        :key="img.id"
        :src="img.src"
        class="gallery-img"
      />

			<div v-if="images && images.length > 0" class="add-button-wrapper">
        <AddButton @add="addImage" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import AddButton from '@/components/AddButton.vue';
import { GalleryItem } from '@/interfaces/galleryItem.interface';

const imagesModule = namespace('images');

@Component({
  name: 'GalleryPage',
  components: { AddButton },
})
export default class GalleryPage extends Vue {
  nextImageIndex = 0;

  @imagesModule.Getter('items')
  images!: GalleryItem[];

  @imagesModule.Mutation('add')
  addImageMutation!: (payload: { src: string }) => void;

  addImage(): void {
    const sampleImages: string[] = [
      '/images/image1.png',
      '/images/image2.png',
      '/images/image3.png',
      '/images/image4.png',
      '/images/image5.png',
    ];
    const src = sampleImages[this.nextImageIndex];
    this.addImageMutation({ src });
    this.nextImageIndex = (this.nextImageIndex + 1) % sampleImages.length;
  }
}
</script>

<style scoped lang="scss">
.gallery-page {
	@include gallery-page;
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
  background: $scrollbar-color;
  border-radius: 4px;
}
.gallery-page::-webkit-scrollbar-thumb {
  background-color: $scrollbar-thumb-color;
  border-radius: 4px;
}
.gallery-page::-webkit-scrollbar-thumb:hover {
  background-color: $scrollbar-thumb-color-hover;
}
</style>
