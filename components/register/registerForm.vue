<template>
    <form class="registration-form" @submit.prevent="handleSubmit">
        <div class="registration-form__field">
            <label for="username" class="registration-form__label">{{
                t("username")
            }}</label>
            <BaseInput
                v-model="form.username"
                :placeholder="t('username')"
                :error-message="errors.username"
                :show-errors="showErrors"
                @input="inputHandler"
            />
            <div class="registration-form__icon">
                <Icon icon-name="icon-username" icon-class="icon" />
            </div>
        </div>

        <div class="registration-form__field">
            <label for="email" class="registration-form__label">{{
                t("email")
            }}</label>
            <BaseInput
                v-model="form.email"
                :error-message="errors.email"
                :show-errors="showErrors"
                placeholder="name@mail.com"
                @input="inputHandler"
                type="email"
            />
            <div class="registration-form__icon">
                <Icon icon-name="icon-mail" icon-class="icon" />
            </div>
        </div>

        <div class="registration-form__field">
            <label for="password" class="registration-form__label">{{
                t("password")
            }}</label>
            <BaseInput
                v-model="form.password"
                type="password"
                placeholder="******"
                @input="inputHandler"
            />
        </div>

        <div class="registration-form__field">
            <label for="confirmPassword" class="registration-form__label">{{
                t("confirmPassword")
            }}</label>
            <BaseInput
                v-model="form.confirm"
                type="password"
                placeholder="******"
                @input="inputHandler"
            />
        </div>

        <div class="registration-form__progress">
            <div class="registration-form__progress-bar">
                <div
                    class="registration-form__progress-fill"
                    :style="{
                        width: progress + '%',
                        backgroundColor: progressColor,
                    }"
                ></div>
            </div>
            <div class="registration-form__rules">
                <div
                    v-for="(rule, index) in passwordRules"
                    :key="index"
                    :class="{ 'registration-form__rule--valid': rule.valid }"
                    class="registration-form__rule"
                >
                    <Icon
                        v-if="!rule.valid"
                        icon-name="icon-exclamation"
                        class="registration-form__rule-icon--invalid"
                    />
                    <Icon
                        v-if="rule.valid"
                        icon-name="icon-check"
                        class="registration-form__rule-icon--valid"
                    />
                    <span class="registration-form__rule-text">{{
                        rule.text
                    }}</span>
                </div>
            </div>
        </div>

        <BaseButton type="submit" class="registration-form__button">{{
            t("register")
        }}</BaseButton>
    </form>

    <Modal v-model="showModal" id="registerModal">
        <h2 class="modal__title">{{ t(modalValue) }}</h2>
        <p v-if="modalValue === 'emailExist'">{{ t("checkEmail") }}</p>
        <p v-else>Link</p>
    </Modal>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import BaseInput from "@/UI/BaseInput.vue";
import BaseButton from "@/UI/BaseButton.vue";
import Icon from "@/utils/Icon.vue";
import Modal from "@/UI/Modal.vue";
import { useUserStore } from "@/stores/authStore";
import {
    confirmPassword,
    isEmail,
    minLength,
    required,
} from "@/utils/validationRules";
import { validateInput } from "@/utils/validation";

const { t } = useI18n();

const form = reactive({
    username: "",
    email: "",
    password: "",
    confirm: "",
});
const modalValue = ref("");
const errors = ref({ username: "", email: "" });
const showErrors = ref(false);
const showModal = ref(false);

const passwordRules = computed(() => [
    {
        text: t("passwordCase"),
        valid: /[a-z]/.test(form.password) && /[A-Z]/.test(form.password),
    },
    { text: t("passwordNumber"), valid: /[0-9]/.test(form.password) },
    {
        text: t("passwordSpecial", { value: "(!@#$%^&*)" }),
        valid: /[!@#$%^&*]/.test(form.password),
    },
    { text: t("passwordLength", { min: 6 }), valid: form.password.length >= 6 },
    {
        text: t("passwordConfirm"),
        valid: form.password === form.confirm && form.confirm.length > 0,
    },
]);

const progress = computed(() => {
    const startProgress = form.password.length > 0 ? 10 : 0;
    return (
        startProgress +
        (passwordRules.value.filter((rule) => rule.valid).length / 5) * 100
    );
});

const progressColor = computed(() => {
    if (progress.value < 20) return "#da1e28";
    if (progress.value < 40) return "#8e6a00";
    if (progress.value < 60) return "#ba4e00";
    if (progress.value < 80) return "#ff832b";
    return "#28a745";
});

const inputHandler = () => {
    errors.value.username = validateInput(form.username, [
        required,
        minLength(3),
    ]);
    errors.value.email = validateInput(form.email, [required, isEmail]);
};

const handleSubmit = async () => {
    inputHandler();
    if (
        !Object.values(errors.value).every((error) => !error) ||
        progress.value < 100
    ) {
        showErrors.value = true;
        return;
    }
    // Submit logic here
};
</script>

<style>
.registration-form {
    max-width: 400px;
    margin: auto;
}
.registration-form__field {
    position: relative;
    margin-bottom: 20px;
}
.registration-form__label {
    position: absolute;
    top: -10px;
    left: 15px;
    background: white;
    padding: 0 5px;
    font-weight: bold;
}
.registration-form__icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
.registration-form__progress {
    margin-bottom: 20px;
}
.registration-form__progress-bar {
    width: 100%;
    height: 5px;
    background: #ccc;
    border-radius: 3px;
    overflow: hidden;
}
.registration-form__progress-fill {
    height: 100%;
    transition: width 0.3s ease;
}
.registration-form__rules {
    font-size: 14px;
}
.registration-form__rule {
    display: flex;
    align-items: center;
}
.registration-form__rule--valid {
    color: green;
}
.registration-form__rule-icon--invalid {
    color: red;
}
.registration-form__rule-icon--valid {
    color: green;
}
.modal__title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
}
</style>
