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
      const random = sampleImages[Math.floor(Math.random() * sampleImages.length)];
      this.add({ src: random });
    },
  },
});
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  position: relative;
}
.gallery-img {
  width: 100%;
  height: auto; /* зберігаємо пропорції */
  display: block;
  border-radius: 4px;
}
.add-button-top {
  grid-column: 1 / -1; /* кнопка займає весь рядок зверху */
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.add-button-wrapper {
  grid-column: 1 / -1; /* кнопка внизу займає весь рядок */
  display: flex;
  justify-content: flex-end; /* вправо */
  margin-top: 10px;
}
</style>
