<template>
<div>
  <NavBar :title="title">
  </NavBar>
  <div class="my-24 flex flex-col justify-center items-center">
    <h1 class="text-xl">Score</h1>
    <h1 class="text-8xl">{{score}}</h1>
  </div>
  <div class="flex justify-center items-center">
    <div class="w-11/12 h-96 bg-gray-100 p-4 rounded-2xl overflow-scroll">
      <div class="mb-4">
        <p class="text-2xl">Corrected answers</p>
        <div class="w-full flex flex-wrap justify-start items-center gap-3">
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-green-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-green-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-green-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-green-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-green-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-green-500">1</div>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-2xl">Incorrect answers</p>
        <div class="w-full flex flex-wrap justify-start items-center gap-3">
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500">1</div>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-2xl">Answers left</p>
        <div class="w-full flex flex-wrap justify-start items-center gap-3">
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-gray-300">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-gray-300">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-gray-300">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-gray-300">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-gray-300">1</div>
          <div class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-gray-300">1</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
export default {
    name: "IndexPage",
    data(){
      return {
        title: "BlackSlash",
        score: 18,
      }
    },
    methods: {
        logout() {
            this.$fire.auth.signOut();
        },
    },
    components: { NavBar }
}
</script>
