<!-- layouts/default.vue -->
<template>
    <div>
      <header>
        <NuxtLink to="/">Головна</NuxtLink>
      </header>
  
      <slot /> <!-- Сюди рендеряться сторінки -->
  
      <footer>
        <p>© 2024</p>
      </footer>
    </div>
  </template>
  