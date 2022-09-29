<template>
  <template v-if="note">
    <carbon-checkmark-outline class="text-emerald-500 dark:text-emerald-300 relative -right-1"/>
    <sub class="relative -bottom-2 left-2">{{ note }}</sub>
  </template>
  <template v-else>
    <carbon-checkmark-outline class="text-emerald-500 dark:text-emerald-300"/>
  </template>  
</template>

<script lang="ts" setup>
defineProps<{
  note?: string,
}>();
</script>