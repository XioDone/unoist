<script setup lang="ts"></script>

<template>
  <div class="dark">
    <header fs-center pt-10>
      <h1 fs-8xl font-extrabold bg-gradient-to-br from="#d566c2" to="#009ff7" bg-clip-text c-transparent inline-block>
        Unoist
      </h1>
      <p fs-xl pt-5>
        Make using UnoCSS simpler and easier.
      </p>
    </header>
    <main py-10>
      <div feed-box>
        <ContentDoc v-for="(doc, i) in docs" :key="i" :doc />
      </div>
    </main>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 15px;
  display: block;
  background: transparent;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  min-height: 100px;
  border: 6px solid transparent;
  display: block;
  background: #787878;
  border-radius: 10px;
  background-clip: padding-box;
}

html {
  scroll-behavior: smooth;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --at-apply: 'bg-cool-gray-950 c-light-9 font-nunito';
}
</style>
