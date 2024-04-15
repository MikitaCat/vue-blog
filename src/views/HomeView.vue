<script setup>
import MyWrapper from '@/components/MyWrapper.vue';
import PostItem from '@/components/PostItem.vue';

const posts = [
  {
    id: 1,
    title: "lorem",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ea deserunt itaque non illum error hic tempora, magni consequatur enim, dolorum laboriosam labore veniam tenetur. Placeat quasi eos mollitia soluta",
    author: "Name Surname",
    created_at: "12/30/2022",
    isSaved: false,
  },
  {
    id: 2,
    title: "lorem 2",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ea deserunt itaque non illum error hic tempora, magni consequatur enim, dolorum laboriosam labore veniam tenetur. Placeat quasi eos mollitia soluta",
    author: "Name Surname",
    created_at: "12/30/2022",
    isSaved: false,
  },
  {
    id: 3,
    title: "lorem 3",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ea deserunt itaque non illum error hic tempora, magni consequatur enim, dolorum laboriosam labore veniam tenetur. Placeat quasi eos mollitia soluta",
    author: "Name Surname",
    created_at: "12/30/2022",
    isSaved: false,
  },
  {
    id: 4,
    title: "lorem 4",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ea deserunt itaque non illum error hic tempora, magni consequatur enim, dolorum laboriosam labore veniam tenetur. Placeat quasi eos mollitia soluta",
    author: "Name Surname",
    created_at: "12/30/2022",
    isSaved: false,
  }
]
</script>

<template>
  <div v-for="post in posts" v-bind:key="post.id">
    <MyWrapper>
      <PostItem :post="post" />
    </MyWrapper>
  </div>
</template>

