import { GalleryItem } from '@/types/gallery';

export interface ImagesState {
  items: GalleryItem[];
}

const state: ImagesState = {
  items: [],
};

const mutations = {
  add(state: ImagesState, payload: { src: string }) {
    const id = (state.items.length + 1).toString();
    state.items.push({ id, src: payload.src });
  },
};

const getters = {
  items: (state: ImagesState) => state.items,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
