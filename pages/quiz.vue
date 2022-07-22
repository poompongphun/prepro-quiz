<template>
  <div v-if="getQuizById($route.query.id)">
    <!-- {{ $store.state.quiz }} -->
    <!-- <NavBar :title="removead($store.state.user.email)" />
    <div class="flex justify-center items-center h-80">
      <div class="text-center">
        <div class="text-2xl">score</div>
        <div class="text-6xl">10</div>
      </div>
    </div>
    <div class="">

    </div> -->
    <div class="bg-gray-50 w-full h-auto text-2xl font-medium px-8 py-4">
      <div class="text-gray-600">Quiz No.</div>
      <div>12</div>
    </div>
    <div class="p-8">
      <div class="text-2xl text-gray-600">Describe</div>
      <div class="mt-4" v-html="getQuizById($route.query.id).description"></div>
    </div>
    <div class="px-8">
      <ChoiceButton
        v-for="(choice, index) in getQuizById($route.query.id).choice"
        :key="index"
        :choice="choice"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChoiceButton from '../components/ChoiceButton.vue'
export default {
  name: 'QuizPage',
  async validate({ params, query, store, redirect, $fire }) {
    if (query.id) {
      if (store.state.user) {
        const validate = $fire.firestore.collection('quiz').doc(query.id)
        const getValidate = await validate.get()
        const validateData = getValidate.data()
        if (validateData) {
          if (validateData.submited_user.includes(store.state.user.uid)) {
            console.log('already scanned')
            return false
          } else {
            console.log(validateData)
            // validate.update({
            //   scanned_user: [
            //     ...validateData.scanned_user,
            //     store.state.user.uid,
            //   ],
            // })
            // console.log('first time scan')
            return true
          }
        }
        return false
      }
      redirect('/login?redirect=quiz?id=' + query.id)
    }
    return false
  },
  computed: {
    ...mapGetters(['getQuizById']),
  },
  methods: {
    removead(val) {
      return val.split('@')[0]
    },
    choiceClick(choice) {
      if (choice.status) console.log('choiceClick')
    },
  },
  components: { ChoiceButton },
}
</script>

<style></style>
