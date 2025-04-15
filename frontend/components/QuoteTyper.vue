  
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import quotes from '../utils/quotes'; // імпортуй правильний шлях до файлу
import { useI18n } from 'vue-i18n'

// get language from i18n
const { locale } = useI18n();
const lang = useState<'en' | 'uk'>('lang', () => 'en');

const displayedText = ref('');
const currentQuote = ref('');
const index = ref(0);

function pickRandomQuote() {
  console.log(locale);
  
  const list = quotes[locale.value] || quotes.en;
  return list[Math.floor(Math.random() * list.length)];
}

function typeWriter(text: string, speed = 50) {
  displayedText.value = '';
  index.value = 0;

  function type() {
    if (index.value < text.length) {
      displayedText.value += text.charAt(index.value);
      index.value++;
      setTimeout(type, speed);
    }
  }
  type();
}

onMounted(() => {
  currentQuote.value = pickRandomQuote();
  typeWriter(currentQuote.value);
});

watch(lang, () => {
  currentQuote.value = pickRandomQuote();
  typeWriter(currentQuote.value);
});
</script>

<template>
    <div class="typewriter-block">
      <span class="text">{{ displayedText }}<span class="cursor">|</span></span>
      
    </div>
</template>

  
  <style scoped>
  .typewriter-block {
    display: flex;
    align-items: center;
    width: 80%;
    min-height: 4em;
    height: 100%;

    font-size: 5rem;
    font-weight: 500;
    color: #333;
    white-space: pre-line;
    font-family: 'Courier New', Courier, monospace;

  }
  
  .cursor {
    display: inline-block;
    width: 1ch;
    /* background-color: currentColor; */
    color: currentColor;
    animation: blink 1s steps(2, start) infinite;
  }
  
  @keyframes blink {
    to {
      /* background-color: transparent; */
      color: transparent;
    }
  }
  </style>
  