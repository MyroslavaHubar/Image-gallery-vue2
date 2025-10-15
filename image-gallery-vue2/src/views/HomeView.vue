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
import GalleryPage from '@/components/GalleryPage.vue';

export default {
  name: 'HomeView',
	components: {GalleryPage},
};

</script>

<style scoped lang="scss">
.home {
  padding-bottom: 30px;
}

.hero {
	margin-left: 20px;
	margin-top: 10px;
}

.title {
	font-size: 24px;
	font-weight: 700;
	text-align: left;
	color: #8499a7;

	span {
		color: #21b8c6;
	}
}
</style>

