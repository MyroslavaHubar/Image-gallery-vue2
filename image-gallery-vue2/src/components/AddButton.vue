<template>
  <div class="button-container" @click="onAddClick">
		<img src="/add-icon.png" alt="plus" class="plus-image" />
		<p class="title-button">Add your Picture</p>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component
export default class AddButton extends Vue {
  @Emit('add')
	// eslint-disable-next-line @typescript-eslint/no-empty-function
  public  onAddClick(): void {
		  // emit event only
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.button-container {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 220px;
  padding: 40px 20px;
  margin-bottom: 10px;
  background: #eef6f8;
  border: 2px dashed #21b8c6;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  color: #21b8c6;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  break-inside: avoid;
}

.plus-image {
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
}

.title-button {
  margin: 0;
  font-size: 16px;
  color: #21b8c6;
}

</style>
