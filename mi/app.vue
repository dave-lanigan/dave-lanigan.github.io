<template>
  <div :data-theme="theme" class="h-max min-h-screen">
    <div class="w-100 flex justify-end p-2"><UiThemeController /></div>
    <NuxtPage />
  </div>
</template>
<script setup>
const theme = useState('theme');
theme.value = "dim";
</script>
