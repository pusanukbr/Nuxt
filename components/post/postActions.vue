<template>
    <div class="post-actions">
        <button>❤️ {{ likes }}</button>
        <button>💬 {{ commentsCount }}</button>
        <button>🔁</button>
    </div>
</template>

<script setup>
defineProps(["likes", "commentsCount"]);
</script>
