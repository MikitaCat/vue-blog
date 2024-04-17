<script setup>
import MyWrapper from '@/components/MyWrapper.vue';
import PostItem from '@/components/PostItem.vue';
import { usePostsStore } from "@/stores/posts"
import { ref, computed } from 'vue';

const postStore = usePostsStore()

const isSavedPostsShown = ref(false)
const changePostsShown = () => {
  isSavedPostsShown.value = !isSavedPostsShown.value
}

const computedHeaderTitle = computed(() => {
  return isSavedPostsShown.value ? "Saved Posts" : "All posts"
})

const computedButtonText = computed(() => {
  return isSavedPostsShown.value ? "Show all posts" : "Show saved posts"
})

// const emitTestFunction = (id) => {
//   console.log("Log from HomeView:", id);
// }
</script>

<template>
  <div class="header">
    <div>
      <h3>{{ computedHeaderTitle }}</h3>
    </div>
    <button @click="changePostsShown(isSavedPostsShown.value)">
      {{ computedButtonText }}
    </button>
  </div>

  <template v-if="!isSavedPostsShown">
    <div v-for="post in postStore.sorted" v-bind:key="post.id">
      <MyWrapper>
        <PostItem :post="post" @myEmit="(id) => console.log('Log from HomeView', id)" />
      </MyWrapper>
    </div>
  </template>

  <template v-if="isSavedPostsShown">
    <div v-for="post in postStore.savedAndSorted" v-bind:key="post.id">
      <MyWrapper>
        <PostItem :post="post" @myEmit="(id) => console.log('Log from HomeView', id)" />
      </MyWrapper>
    </div>
  </template>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      animation: spin 1s linear infinite;
    }
  }

  button {
    color: #fff;
    background: #1e40af;
    padding: 4px 15px;
    border-radius: 5px;

    &:hover {
      background: #0ea5e9;
    }
  }
}

.error {
  margin: 2rem;
  background: #f87171;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>

