<template>
  <div>
    <!-- {{ window.location }} -->
    <button>download</button>
    <div v-for="(quiz, i) in $store.state.quiz" :key="i">
      <button @click="$router.push(`/quiz?id=${quiz.id}`)">
        {{ quiz.id }}
      </button>
      <img
        :src="`https://api.qrserver.com/v1/create-qr-code/?size=720x720&data=${url}?id=${quiz.id}`"
        width="200"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'LinkGen',
  data: () => ({
    url: 'http://localhost:3000/prepro-quiz',
  }),
}
</script>