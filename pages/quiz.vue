<template>
  <div></div>
</template>

<script>
export default {
  name: 'QuizPage',
  async validate({ params, query, store, redirect, $fire }) {
    if (query.id) {
      if (store.state.user) {
        const validate = $fire.firestore.collection('validate').doc(query.id)
        const getValidate = await validate.get()
        const validateData = getValidate.data()
        if (validateData) {
          if (validateData.scanned_user.includes(store.state.user.uid)) {
            // console.log('already scanned')
            return false
          } else {
            validate.update({
              scanned_user: [
                ...validateData.scanned_user,
                store.state.user.uid,
              ],
            })
            // console.log('first time scan')
            return true
          }
        }
        return false
      }
      redirect('/login?redirect=quiz%3Fid%3D' + query.id)
    }
    return false
  },
}
</script>

<style>
</style>