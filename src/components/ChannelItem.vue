<template>
  <button @click="onButtonClick" class="btn btn-ghost rounded-box p-3 w-full bg-base-100 shadow-xl">
    {{ channelTitle }}
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChannelItem',
  props: {
    channelTitle: {
      type: String,
      required: true
    }
  },
  emits: ['clicked'],
  setup(props, { emit }) {
    const onButtonClick = () => {
      emit('clicked');
    }
    return {onButtonClick}
  }
});
</script>

<style scoped>

</style>