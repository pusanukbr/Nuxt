<template>
    <div class="post-header">
        <UserAvatar :src="user.avatar" />
        <div>
            <strong>{{ user.name }}</strong>
            <span>@{{ user.username }} · {{ formatDate(createdAt) }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps(["user", "createdAt"]);
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(date);
};
</script>
