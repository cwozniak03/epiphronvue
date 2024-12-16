<script setup lang="ts">
import {useInputStore} from '@/stores/input'
import {FormWizard, TabContent} from 'vue3-form-wizard'
import {watch} from 'vue'
import 'vue3-form-wizard/dist/style.css'
import SliderChart from '@/components/SliderChart.vue'
import { storeToRefs } from 'pinia'
//component code
components: {
  FormWizard
  TabContent
}

const inputStore = useInputStore()


</script>

<template>
  <div id="main"><FormWizard stepSize="xs" shape="square" finishButtonText="Run" @on-complete="onComplete(inputStore)">
    <TabContent title="Simulation Length">
      How many years should be simulated?<br>
      <input type="number" v-model="inputStore.Period">
    </TabContent>
  </FormWizard></div>  
</template>
<style scoped>

#main{
  place-items:center;
}

</style>