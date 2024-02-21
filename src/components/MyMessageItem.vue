<template>
  <div class="chat chat-end">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img alt="logo" src="http://q1.qlogo.cn/g?b=qq&nk=25569983&s=640" />
      </div>
    </div>
    <div class="chat-header">
      My
    </div>
    <div class="chat-bubble">{{ messageContent }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyMessageItem',
  props: {
    messageContent: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>

</style>