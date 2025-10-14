/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="home">
    <header class="hero">
      <h1 class="title">WELCOME TO VISEVEN <span>IMAGESTOCK</span></h1>
    </header>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
};

</script>

<style scoped lang="scss">
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

