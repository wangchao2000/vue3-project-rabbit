<template>
  <div>
    首页
    <div>
      <button @click="increment" class="test">{{ count }}</button>--{{ doubleCount }}
    </div>
    <!-- 二级路由出口 -->
    <RouterView />
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";


const { count, doubleCount } = storeToRefs(useCounterStore());
const { increment } = useCounterStore();
</script>

<style lang="scss" scoped>
.test{
    color: $priceColor;
}
</style>