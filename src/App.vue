<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <h1 class="text-2xl font-bold">Tags to Prompt</h1>
    <div class="flex flex-row items-center justify-center gap-3">
      <button type="button" title="Paste tags from clipboard"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="pasteFromClipboard">
        <span class="material-icons p-1">content_paste</span>
      </button>

      <textarea id="input" v-model="inputTags" class="text-black p-2" focus placeholder="Input unformatted tags here"
        rows="20" cols="40"></textarea>

      <span class="material-icons">keyboard_arrow_right</span>

      <textarea id="output" v-model="outputTags" class="p-2" placeholder="Copy formatted tags here" rows="20" cols="40"
        disabled></textarea>

      <button type="button" title="Copy formatted tags to clipboard"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm p-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="copyToClipboard">
        <span class="material-icons p-1">content_copy</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const inputTags = ref('');
const outputTags = computed(() => {
  return separateTags(inputTags.value);
});


function separateTags(string) {
  const regex = /(\? *|\?? *\n)? *(.+) (\d+\.?\d+?\w)/g;
  const matches = string.matchAll(regex);

  const tagsArray = [];
  for (const match of matches) {
    tagsArray.push(match[2]);
  }

  const tagsString = tagsArray.join(', ');
  return tagsString;
}

async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    inputTags.value = text;
  } catch (error) {
    console.log('Failed to read clipboard', error);
  }
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(outputTags.value);
    console.log('Text copied.');
  } catch (error) {
    console.log('Failed to write clipboard');
  }
}
</script>

<style scoped></style>