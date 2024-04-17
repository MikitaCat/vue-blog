import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const usePostsStore = defineStore('posts-store', {
  //Data
  state() {
    return {
      posts: []
    }
  },
  //Computeds
  getters: {
    sorted() {
      return this.posts.sort((a, b) => {
        const dateA = new Date(a.created_at.split('.').reverse().join('-'))
        const dateB = new Date(b.created_at.split('.').reverse().join('-'))
        return dateB - dateA
      })
    },
    arrowSorted: (state) => {
      return state.posts.sort((a, b) => {
        const dateA = new Date(a.created_at.split('.').reverse().join('-'))
        const dateB = new Date(b.created_at.split('.').reverse().join('-'))
        return dateB - dateA
      })
    },
    savedAndSorted() {
      return this.sorted.filter((el) => el.isSaved === true)
    }
  },
  //Methods
  actions: {
    getPosts() {
      fetch(`${import.meta.env.VITE_JSON_SERVER_URL}/posts`)
        .then((res) => res.json())
        .then((data) => (this.posts = data))
    },
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: 'Randome Name',
        created_at: new Date().toLocaleDateString(),
        isSaved: false
      })
    },

    deletePost(id) {
      this.posts = this.posts.filter((item) => item.id !== id)
    },

    savePost(id) {
      const post = this.posts.find((item) => item.id === id)
      post.isSaved = !post.isSaved
    }
  }
})
