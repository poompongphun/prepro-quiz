<template>
  <div class="px-5">
    <div class="text-center my-10">
      <GlitchText text="QUIZ" size="30px" />
    </div>
    <v-card
      class="mx-auto rounded-xl"
      elevation="0"
      style="
        background-color: rgba(255, 255, 255, 0.5);
        position: sticky;
        top: 20px;
        z-index: 1;
        backdrop-filter: blur(5px);
      "
      width="100%"
      max-width="500"
      min-height="25"
    >
      <v-chip
        class="font-weight-bold primary--text"
        color="white"
        light
        style="
          position: absolute;
          left: calc(50% - 20px);
          transform: translateY(-16px);
        "
      >
        12
      </v-chip>
      <v-expand-transition>
        <div v-show="show" class="pa-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          soluta recusandae, esse a unde velit eveniet veritatis harum cum
          maiores quae earum, accusamus sequi alias eum? Dolore aspernatur
          similique soluta. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Assumenda soluta recusandae, esse a unde velit eveniet veritatis
          harum cum maiores quae earum, accusamus sequi alias eum? Dolore
          aspernatur similique soluta.
        </div>
      </v-expand-transition>
      <v-btn
        color="white"
        light
        depressed
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
      class="mx-auto rounded-xl mt-10"
      elevation="0"
      style="background: none; position: relative"
      width="100%"
      max-width="500"
    >
      <v-btn
        v-for="(item, i) in 100"
        :key="i"
        class="my-3"
        color="secondary"
        rounded
        block
        large
        outlined
        @click="clickBtn(item)"
      >
        item
      </v-btn>
    </v-card>
    <ConfirmDialog ref="ConfirmDialog" />
  </div>
</template>
<script>
import ConfirmDialog from '../components/ConfirmDialog.vue'
import GlitchText from '~/components/GlitchText.vue'
export default {
  name: 'QuizPage',
  components: { GlitchText, ConfirmDialog },
  data: () => ({
    show: true,
  }),
  methods: {
    async clickBtn(item) {
      const confirm = await this.$refs.ConfirmDialog.open(
        `Are you sure to answer`,
        item,
        {
          width: 340,
          color: 'success',
        }
      )
      if (confirm) {
        this.$store.dispatch('delAds', item)
        // this.$store.commit('delAds', num)
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
</style>