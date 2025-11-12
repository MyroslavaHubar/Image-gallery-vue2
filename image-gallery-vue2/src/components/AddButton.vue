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
	box-shadow: 0px 2px 10px #C2CDD8;
  width: 100%;
  max-width: 190px;
	max-height: 64px;
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 3px;
  text-align: center;
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
  font-size: 14px;
	color: #a0b0ba;
	font-weight: 700;
	width: 75px;
}

</style>
