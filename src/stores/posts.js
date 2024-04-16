import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const usePostsStore = defineStore('posts-store', {
  //Data
  state() {
    return {
      posts: [
        {
          id: 1,
          title: 'lorem',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ea deserunt itaque non illum error hic tempora, magni consequatur enim, dolorum laboriosam labore veniam tenetur. Placeat quasi eos mollitia soluta',
          author: 'Name Surname',
          created_at: '12/30/2022',
          isSaved: false
        },
        {
          id: 2,
          title: 'lorem 2',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ea deserunt itaque non illum error hic tempora, magni consequatur enim, dolorum laboriosam labore veniam tenetur. Placeat quasi eos mollitia soluta',
          author: 'Name Surname',
          created_at: '12/30/2022',
          isSaved: false
        },
        {
          id: 3,
          title: 'lorem 3',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ea deserunt itaque non illum error hic tempora, magni consequatur enim, dolorum laboriosam labore veniam tenetur. Placeat quasi eos mollitia soluta',
          author: 'Name Surname',
          created_at: '12/30/2022',
          isSaved: false
        },
        {
          id: 4,
          title: 'lorem 4',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ea deserunt itaque non illum error hic tempora, magni consequatur enim, dolorum laboriosam labore veniam tenetur. Placeat quasi eos mollitia soluta',
          author: 'Name Surname',
          created_at: '12/30/2022',
          isSaved: false
        }
      ]
    }
  },
  //Methods
  actions: {
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Randome Name',
        created_at: new Date().toLocaleDateString(),
        isSaved: false
      })
    }
  }
})
