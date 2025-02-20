<template>
    <NuxtImg :src="src" class="avatar" />
</template>

<script setup>
defineProps(["src"]);
</script>

<style scoped>
.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}
</style>
