<template>
  <div class="chat chat-start">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <GptLogo class="m-2"></GptLogo>
      </div>
    </div>
    <div class="chat-header">
      ChatGpt
    </div>
    <div class="chat-bubble bg-primary/70">{{ messageContent }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GptLogo from "./GptLogo.vue";

export default defineComponent({
  name: 'GptMessageItem',
  components: {GptLogo},
  props: {
    messageContent: {
      type: String,
      require: true
    }
  }
})
</script>

<style scoped>

</style>