/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="home">
    <header class="hero">
      <h1 class="title">WELCOME TO VISEVEN <span>IMAGESTOCK</span></h1>
    </header>

		<GalleryPage/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GalleryPage from '@/components/GalleryPage.vue';

@Component({
  name: 'HomeView',
  components: { GalleryPage },
})
export default class HomeView extends Vue {
}
</script>

<style scoped lang="scss">
.hero {
	@include header-margins;
}

.title {
	@include title;

	span {
		color: $color-green;
	}
}
</style>