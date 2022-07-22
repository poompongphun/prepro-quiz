<template>
  <div v-if="$store.state.user">
    <NavBar :title="title"> </NavBar>
    <div class="my-24 flex flex-col justify-center items-center">
      <h1 class="text-xl">Score</h1>
      <h1 class="text-8xl">{{ $store.state.user.score }}</h1>
    </div>
    <div class="flex justify-center items-center">
      <div class="w-11/12 h-96 bg-gray-100 p-4 rounded-2xl overflow-scroll">
        <div class="mb-4">
          <p class="text-2xl">Corrected answers</p>
          <div class="w-full flex flex-wrap justify-start items-center gap-3">
            <div
              v-for="(item, index) in $store.state.user.correct_aws"
              :key="index"
              class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-green-500"
            >
              {{ getQuizById(item.id).no }}
            </div>
            <div v-if="!$store.state.user.correct_aws.length > 0">- None</div>
          </div>
        </div>
        <div class="mb-4">
          <p class="text-2xl">Incorrect answers</p>
          <div class="w-full flex flex-wrap justify-start items-center gap-3">
            <div
              v-for="(item, index) in $store.state.user.wrong_aws"
              :key="index"
              class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-red-500"
            >
              {{ getQuizById(item.id).no }}
            </div>
            <div v-if="!$store.state.user.wrong_aws.length > 0">- None</div>
          </div>
        </div>
        <div class="mb-4">
          <p class="text-2xl">Answers left</p>
          <div class="w-full flex flex-wrap justify-start items-center gap-3">
            <div
              v-for="(item, index) in $store.getters.awsLeft"
              :key="index"
              class="w-10 h-10 flex items-center justify-center text-white rounded-xl bg-gray-300"
            >
              {{ getQuizById(item.id).no }}
            </div>
            <div v-if="!$store.getters.awsLeft.length > 0">- None</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '~/components/NavBar.vue'
export default {
  name: 'IndexPage',
  components: { NavBar },
  validate({ params, query, store, redirect, $fire }) {
    if (!$fire.auth.currentUser) {
      redirect('/login')
    }
    return true
  },
  data() {
    return {
      title: 'BlackSlash',
      list_left: ['test', 'test'],
    }
  },
  computed: {
    ...mapGetters(['getQuizById']),
  },
}
</script>
