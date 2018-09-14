<template>
  <div class="about">
    <h1 v-for="val in items" :key="val" >
      {{val}}
    </h1>
  </div>
</template>

<script>
export default {
  // asyncData({store,route}){
  //   return store.commit("increment")
  // },
  computed:{
    list(){
      return this.$store.state.items
    }
  }
}
</script>

