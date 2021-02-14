<template>
  <ChampionnatComponent/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ChampionnatComponent from "../components/ChampionnatComponent.vue";

@Options({
  components: {
    ChampionnatComponent
  },
})
export default class Championnat extends Vue {}
</script>

<style lang="scss" scoped>

</style>
