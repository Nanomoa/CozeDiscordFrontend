<template>
  <div class="flex h-screen bg-base-200">
    <!--  Channel List  -->
    <div class="w-1/4 p-3">
      <div class="card h-full bg-accent/60">
        <div class="card-title ml-4 mt-4 mb-4">
          <div class="avatar">
            <div class="w-10 mask mask-squircle">
              <img src="http://q1.qlogo.cn/g?b=qq&nk=25569983&s=640"  alt="avatar"/>
            </div>
          </div>
          Channel
        </div>
        <!--  ChannelItem  -->
        <div class="card-body overflow-y-auto scrollbar-rounded">

          <ChannelItem channel-title="TestChannel" @clicked="clickA('test')"></ChannelItem>

        </div>
        <!--  ChannelOpr  -->
        <div class="rounded-box p-2 border-0 glass m-4">
          <button class="btn btn-block bg-warning/80 mt-1 mb-1">
            <FaIcon :icon="['fas', 'plus']"></FaIcon>
            New Channel
          </button>
          <button class="btn btn-block bg-error/80 mt-1 mb-1">
            <FaIcon :icon="['fas', 'trash-alt']"></FaIcon>
            Delete All Channel
          </button>
        </div>
      </div>
    </div>

    <!--  Chat  -->
    <div class="w-3/4 p-3">
      <div class="card p-4 h-full bg-accent/60">
        <div class="card-title ml-4">
          <FaIcon :icon="['fas', 'comment-alt']"></FaIcon>
          Chat
        </div>
        <div class="card-body">
          <div class="card w-full h-full bg-base-100 shadow-xl">
            <!--  ChannelTitle  -->
            <h2 class="card-title ml-6 mt-4">TestChannel</h2>
            <!--  MessageList  -->
            <div class="card-body overflow-y-auto scrollbar-rounded">

              <MyMessageItem message-content="Hello"></MyMessageItem>

              <GptMessageItem message-content="Hello there! How can I assist you today?"></GptMessageItem>

            </div>
            <!--  MessageSend  -->
            <div class="card-actions justify-end ml-4 mr-4 mt-2 mb-4">
              <div class="flex w-full">
                <div class="flex-1">
                  <input type="text" placeholder="Please enter the message you want to send" class="input input-bordered input-primary w-full font-bold" />
                </div>
                <div class="ml-2">
                  <button class="btn btn-primary">
                    Send
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
/* 自定义滚动条的样式 */
.scrollbar-rounded {
  scrollbar-width: thin; /* 对于 Firefox */
  scrollbar-color: #b8b8b8 #e0e0e0; /* 对于 Firefox，设置滑块和轨道颜色 */
}
/* 对于 Webkit 浏览器 */
.scrollbar-rounded::-webkit-scrollbar {
  width: 12px;
}
.scrollbar-rounded::-webkit-scrollbar-track {
  background: #e0e0e0;
  border-radius: 10px; /* 使轨道两端为圆角 */
}
.scrollbar-rounded::-webkit-scrollbar-thumb {
  background-color: #b8b8b8; /* 滑块颜色 */
  border-radius: 10px; /* 滑块圆角 */
  border: 3px solid #e0e0e0; /* 添加与轨道相同颜色的边框，让滑块更"圆润" */
}
/* hover效果 */
.scrollbar-rounded::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a0; /* 滑块hover颜色 */
}
</style>

<script setup>
import ChannelItem from "./components/ChannelItem.vue";
import MyMessageItem from "./components/MyMessageItem.vue";
import GptMessageItem from "./components/GptMessageItem.vue";

function clickA(msg) {
  alert(msg);
}

</script>