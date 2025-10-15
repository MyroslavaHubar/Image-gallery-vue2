<template>
  <div
    class="card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <img :src="image.url" :alt="image.title" />
    <div class="description" :class="{ visible: hover }">
      <div class="icons">
        <span class="bubble">
					<img src="/comment.svg" alt="comments" />
					{{ image.comments.length }}</span>
        <span class="like">
					<img src="/like.svg" alt="comments" />
					{{ image.likes }}</span>
        <span class="dislike">
					<img src="/dislike.svg" alt="comments" />
					{{ image.dislikes }}
				</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    image: { type: Object, required: true },
  },
  data() {
    return { hover: false };
  },
 
});
</script>

<style scoped lang="scss">
.card {
  position: relative;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
	width: 200px;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .description {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 0 10px;
    opacity: 0;
    transition: opacity 0.25s ease;

    .icons span {
			align-items: center;         
			display: flex;               
			background: rgba(0, 0, 0, 0.05);
			padding: 4px 8px;
			border-radius: 4px;
			font-size: 0.9rem;
			user-select: none;
			gap: 6px;                    

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
    display: block;
  }
}

    &.visible {
      opacity: 1;
    }
  }

  &:hover {
    transform: scale(1.02);
  }
}

</style>
