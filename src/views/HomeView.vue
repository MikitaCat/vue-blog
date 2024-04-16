<script setup>
import MyWrapper from '@/components/MyWrapper.vue';
import PostItem from '@/components/PostItem.vue';
import { usePostsStore } from "@/stores/posts"

const postStore = usePostsStore()

// const emitTestFunction = (id) => {
//   console.log("Log from HomeView:", id);
// }

</script>

<template>
  <div v-for="post in postStore.posts" v-bind:key="post.id">
    <MyWrapper>
      <PostItem :post="post" @myEmit="(id) => console.log('Log from HomeView', id)" />
    </MyWrapper>
  </div>
</template>

