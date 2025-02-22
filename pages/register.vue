<template>
    <div class="register-page">
        <h1 class="register-page__title">{{ t("register") }}</h1>
        <FormRegister />
        <div class="register-page__link">
            {{ t("haveAccount") }}
            <NuxtLink to="/login">{{ t("login") }}</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

definePageMeta({
    layout: "empty",
});
</script>
