import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface GalleryItem {
  id: number;
  url: string;
  title?: string;
  comments: string[];
  likes: number;
  dislikes: number;
}

export default new Vuex.Store({
  state: {
    gallery: [] as GalleryItem[],
  },
  getters: {
    gallery: state => state.gallery,
  },
  mutations: {
    addImage(state, image: GalleryItem) {
      state.gallery.push(image);
    },
    updateImage(state, updatedImage: GalleryItem) {
      const index = state.gallery.findIndex(i => i.id === updatedImage.id);
      if (index !== -1) Vue.set(state.gallery, index, updatedImage);
    },
  },
  actions: {},
  modules: {},
});
