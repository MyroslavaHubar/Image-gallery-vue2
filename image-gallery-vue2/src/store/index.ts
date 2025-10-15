import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface GalleryItem {
  id: string | number;
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
  actions: {
		async fetchGallery({ commit }) {
      try {
				const accessKey = process.env.VUE_APP_UNSPLASH_ACCESS_KEY;
				const response = await fetch(`https://api.unsplash.com/photos?client_id=${accessKey}&per_page=10`);
				const data = await response.json();
        const galleryItems = data.map((item: any) => ({
          id: item.id,
          url: item.urls.small,           
          title: item.description || '',
          likes: item.likes || 0,
          dislikes: 0,
          comments: ["Nice!"],
        }));

        galleryItems.forEach((item: GalleryItem) => commit('addImage', item));
      } catch (error) {
        console.error('Sorry', error);
      }
    },
	},
  modules: {},
});
