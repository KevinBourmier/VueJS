<template>
<AddChampionnatComponent/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import AddChampionnatComponent from '../components/AddChampionnatComponent.vue';

@Options({
  components: {
    AddChampionnatComponent
  },
})

export default class AddChampionnat extends Vue {}


</script>

<style scoped>

</style>