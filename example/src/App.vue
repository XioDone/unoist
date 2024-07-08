<script setup lang="ts"></script>

<template>
  <div class="dark">
    <header fs-center pt-10 relative>
      <h1 fs-8xl font-extrabold bg-gradient-to-br from="#d566c2" to="#009ff7" bg-clip-text c-transparent inline-block>
        Unoist
      </h1>
      <p fs-xl pt-5>
        Make using UnoCSS simpler and easier.
      </p>
      <a
        href="https://github.com/XioDone/unoist"
        target="_blank"
        aria-label="github page"
        title="github page"
        rel="noopener noreferrer nofollow"
        absolute
        top-10
        right-10
      >
        <svg
          width="26"
          height="26"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
          fill-current
        >
          <path
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
          />
        </svg>
      </a>
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
