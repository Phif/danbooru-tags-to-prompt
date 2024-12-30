<template>
  <div>
    <textarea placeholder="Input unformatted tags here" rows="20" cols="40" @input="formatTags"></textarea>
    <textarea placeholder="Copy formatted tags here" rows="20" cols="40" @input="formatTags"></textarea>
  </div>
</template>

<script setup>
function formatTags() {
  console.log('formatting tags');
}
</script>

<style scoped>
</style>