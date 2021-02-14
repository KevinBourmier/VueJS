<template>
<MatchsComponent/>
</template>

<script>
import MatchsComponent from "@/components/MatchsComponent";
import {Options, Vue} from "vue-class-component";

@Options({
  components: {
    MatchsComponent
  },
})
export default class Matches extends Vue {}

</script>

<style scoped>

</style>