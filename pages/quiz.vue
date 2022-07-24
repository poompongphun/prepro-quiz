<template>
  <div v-if="getQuizById($route.query.id)" class="px-5">
    <div class="text-center my-10">
      <GlitchText text="QUIZ" size="30px" />
    </div>
    <v-card
      class="mx-auto rounded-xl"
      elevation="0"
      style="
        background-color: none;
        position: sticky;
        top: 20px;
        z-index: 1;
        backdrop-filter: blur(5px);
      "
      width="100%"
      max-width="500"
      min-height="25"
    >
      <v-card
        class="rounded-xl"
        width="100%"
        height="100%"
        style="
          background-color: #fe721080;
          position: absolute;
          transform: translateX(-3px) translateY(3px);
        "
      ></v-card>
      <v-card
        class="rounded-xl"
        width="100%"
        height="100%"
        style="
          background-color: #50accb80;
          position: absolute;
          transform: translateX(3px) translateY(-3px);
        "
      ></v-card>
      <v-card
        class="rounded-xl"
        width="100%"
        height="100%"
        style="background-color: #818b8e; position: absolute"
      ></v-card>
      <v-chip
        class="font-weight-bold primary--text elevation-1"
        color="white"
        light
        style="
          position: absolute;
          left: calc(50% - 20px);
          transform: translateY(-16px);
          z-index: 1;
        "
      >
        {{ getQuizById($route.query.id).no }}
      </v-chip>
      <v-card
        class="rounded-xl overflow-hidden"
        elevation="0"
        width="100%"
        height="100%"
        style="background: none"
      >
        <v-expand-transition>
          <div
            v-show="show"
            class="pa-4 quiz"
            v-html="getQuizById($route.query.id).description"
          ></div>
        </v-expand-transition>
      </v-card>
      <v-btn
        color="white"
        light
        depressed
        class="elevation-1"
        fab
        absolute
        x-small
        right
        bottom
        @click="show = !show"
      >
        <v-icon v-if="show">mdi-chevron-up</v-icon>
        <v-icon v-else>mdi-chevron-down</v-icon>
      </v-btn>
    </v-card>
    <v-card
      v-if="
        !getQuizById($route.query.id).submited_user.includes(
          $store.state.user.id
        )
      "
      class="mx-auto rounded-xl mt-10"
      elevation="0"
      style="background: none; position: relative"
      width="100%"
      max-width="500"
    >
      <v-card
        v-for="(item, i) in getQuizById($route.query.id).choice"
        :key="i"
        class="my-3 px-5 py-3 text-center rounded-xl secondary--text"
        color=""
        elevation="0"
        style="background: none; border: 1px solid #ff8f00"
        width="100%"
        @click="clickBtn(item)"
      >
        {{ item.value }}
      </v-card>
    </v-card>
    <v-card
      v-else
      class="mx-auto rounded-xl mt-10 text-center"
      elevation="0"
      style="background: none; position: relative"
      width="100%"
      max-width="500"
    >
      <v-chip>You have already submitted this quiz.</v-chip>
    </v-card>
    <ConfirmDialog ref="ConfirmDialog" />
    <TFDialog ref="TFDialog" :data="getQuizById($route.query.id)" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ConfirmDialog from '../components/ConfirmDialog.vue'
import GlitchText from '~/components/GlitchText.vue'
import TFDialog from '~/components/TFDialog.vue'
export default {
  name: 'QuizPage',
  components: { GlitchText, ConfirmDialog, TFDialog },
  layout: 'auth',
  async validate({ params, query, store, redirect, $fire }) {
    if (query.id) {
      if ($fire.auth.currentUser) {
        const validate = $fire.firestore.collection('quiz').doc(query.id)
        const getValidate = await validate.get()
        const validateData = getValidate.data()
        if (validateData) {
          return true
          //   if (validateData.submited_user.includes(store.state.user.id)) {
          //     console.log('already scanned')
          //     return false
          //   } else {
          //     console.log(validateData)
          //     // validate.update({
          //     //   scanned_user: [
          //     //     ...validateData.scanned_user,
          //     //     store.state.user.uid,
          //     //   ],
          //     // })
          //     // console.log('first time scan')
          //     return true
          //   }
        }
        return false
      }
      redirect('/login?redirect=quiz?id=' + query.id)
    }
    return false
  },
  data: () => ({
    show: true,
  }),
  computed: {
    ...mapGetters(['getQuizById']),
  },
  methods: {
    async clickBtn(item) {
      const confirm = await this.$refs.ConfirmDialog.open(
        `Are you sure to answer`,
        item.value,
        {
          width: 340,
          color: 'success',
        }
      )
      if (confirm) {
        await this.$fire.firestore
          .collection('quiz')
          .doc(this.$route.query.id)
          .update({
            submited_user: [
              ...this.$store.getters.getQuizById(this.$route.query.id)
                .submited_user,
              this.$store.state.user.id,
            ],
          })
        const me = this.$fire.firestore
          .collection('users')
          .doc(this.$store.state.user.id)
        const meGet = await me.get()
        const meData = await meGet.data()
        if (item.status) {
          await me.update({
            correct_aws: [
              ...meData.correct_aws,
              this.$store.getters.getQuizById(this.$route.query.id).id,
            ],
            score:
              meData.score +
              this.$store.getters.getQuizById(this.$route.query.id).point,
          })
        } else {
          await me.update({
            wrong_aws: [
              ...meData.wrong_aws,
              this.$store.getters.getQuizById(this.$route.query.id).id,
            ],
            score:
              meData.score +
              this.$store.getters.getQuizById(this.$route.query.id).del_point,
          })
        }
        this.$refs.TFDialog.open(item.status)
        setTimeout(() => {
          this.$refs.TFDialog.close()
          this.$router.push('/')
        }, 5000)
      }
    },
  },
}
</script>

<style>
.stroke-text {
  font-size: 30px;
  color: white;
  -webkit-text-fill-color: rgba(
    255,
    255,
    255,
    0
  ); /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #03a9f4;
  font-weight: 900;
}
.chip {
  background: rgba(255, 255, 255, 1);
  padding: 10px;
  border-radius: 50%;
}
.quiz {
  max-height: 50vh;
  overflow: auto;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgb(255, 255, 255);
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);
}
</style>
