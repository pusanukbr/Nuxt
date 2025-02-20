<template>
    <div class="feed-page">
        <h1>{{ t("feed") }}</h1>
        <div>
            <PostCard
                v-for="post in posts"
                :key="post.id"
                :post="post"
                :user="post.user"
            />
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { data: posts } = await useFetch("/api/posts");

const { t } = useI18n();
</script>

<style lang="scss"></style>
