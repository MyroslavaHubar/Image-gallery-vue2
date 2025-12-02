import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import { GalleryItem } from '@/interfaces/galleryItem.interface';
export interface ImagesState {
  items: GalleryItem[];
}

const state: ImagesState = {
  items: []
};

const getters: GetterTree<ImagesState, unknown> = {
  items: (state): GalleryItem[] => state.items
};

const mutations: MutationTree<ImagesState> = {
  add(state, payload: { src: string }) {
    const id = (state.items.length + 1).toString();
    state.items.push({ id, src: payload.src });
  }
};

const actions: ActionTree<ImagesState, unknown> = {};

const imagesModule: Module<ImagesState, unknown> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default imagesModule;
