<template>
  <footer class="footer">
    <p>{{ $t("year", { year: currentYear }) }}</p>
    <ul>
      <li>
        <a href="#">{{ $t("terms") }}</a>
      </li>
      <li>
        <a href="#">{{ $t("privacy") }}</a>
      </li>
      <li>
        <a href="#">{{ $t("cookie") }}</a>
      </li>
      <li>
        <a>{{ $t("report") }}</a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style lang="scss">
.footer {
  margin-left: 100px;
  padding: 15px;
  ul {
    list-style: none;
  }
}
</style>
