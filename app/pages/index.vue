<template>
      <!-- <button @click="refresh" style="padding: 8px 16px; background-color: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer;">
    升级测试
  </button> -->
  <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh;">
  <span>我是版本2</span>
    <button @click="refresh" style="padding: 8px 16px; background-color: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer;">
    刷新_v0.2
  </button>
  <div>
   请点击刷新按钮: {{ msg }}
  </div>
  </div>

</template>

<script lang="ts" setup>
const msg = ref('')

const refresh =async () => {
  msg.value = '刷新中...'
  const resp = await $fetch('/api/test')
  msg.value = resp as string
}
</script>

<style>

</style>