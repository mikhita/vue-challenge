<script setup>


    import { ref, onMounted, computed } from "vue";
    //import the global store object from Vuex
    import { useStore } from "vuex";
    // declare the store variable

    


    const store = useStore();

    const msg = ref("Welcome to my Vuex Store");

    const getUsers = computed(() => {
      return store.getters.getUsers
    })

    const users = computed(() => {
      return store.state.users;
    });

    const comments = computed(() => {
      return store.state.comments;
    });

    const posts = computed(() => {
      return store.state.posts;
    });



    onMounted(() => {
      // dispatch the fetchUsers action which commits a mutation to update the state
      store.dispatch("fetchUsers");
      store.dispatch("fetchComments");
      store.dispatch("fetchPosts");
    });

</script>

<template>
  
    <div class="hello">
    
    <div class="posts" v-for="gettersUser in gettersUsers" :key="gettersUser.id">
      {{ gettersUser.id }} {{ gettersUser.name }} {{ gettersUser.address }}
    </div>
    <div class="posts" v-for="gettersUser in gettersUsers" :key="gettersUser.id">
      {{ gettersUser.id }} {{ gettersUser.name }} {{ gettersUser.address }}
    </div>
    <div class="posts" v-for="gettersUser in gettersUsers" :key="gettersUser.id">
      {{ gettersUser.id }} {{ gettersUser.name }} {{ gettersUser.address }}
    </div>
    
    <div class="posts" v-for="user in users" :key="user.id">
      {{ user.id }} {{ user.name }} {{ user.address }}
    </div>
    <div class="posts" v-for="comment in comments" :key="comment.id">
      {{ comment.id }} {{ comment.name }} {{ comment.email }}
    </div>
    <div  class="posts" v-for="post in posts" :key="post.id">
      {{ post.id }} {{ post.title }}
    </div>
  </div>
</template>



<style scoped>
  .posts{
    width: 20%;
    height: 30%;
    padding: 10px;
    margin: 10px;
  }
  .hello{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
</style>
