import { createStore } from "vuex"
import axios from 'axios'
import VueAxios from 'vue-axios'

const store = createStore({
    state(){
        return{
            users: [],
            comments: [],
            posts: [],
        }
    },
    mutations:{
        SET_USERS(state, users) {
            state.users = users
        },
        SET_COMMENTS(state, comments) {
            state.comments = comments
        },
        SET_POSTS(state, posts) {
            state.posts = posts
        }
    },
    getters:{
        getUsers: (state) => state.users,
        getComments: (state) => state.comments,
        getPosts: (state) => state.posts
    },
    actions:{
        async fetchUsers({ commit }) {
            try {
              const data = await axios.get('https://jsonplaceholder.typicode.com/users')
                commit('SET_USERS', data.data)
              }
              catch (error) {
                  console.log(error)
              }
          },
          async fetchComments({ commit }) {
            try {
              const data = await axios.get('https://jsonplaceholder.typicode.com/comments')
                commit('SET_COMMENTS', data.data)
              }
              catch (error) {
                  console.log(error)
              }
          },
          async fetchPosts({ commit }) {
            try {
              const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
                commit('SET_POSTS', data.data)
              }
              catch (error) {
                  console.log(error)
              }
          }
        
    }

})

export default store