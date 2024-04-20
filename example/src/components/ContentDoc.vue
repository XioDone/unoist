<script setup lang="ts">
defineProps<{ doc: Record<string, any> }>()
</script>

<template>
  <div mb-10>
    <div flex items-end gap-6>
      <h3 fs-4xl mb-2 c-gray-3 font-600>
        {{ doc.title }}
        <span v-if="doc.alias" fs-2xl>
          <span c-gray-6 ml-5px mr-10px>alias:</span>
          <span c-primary>{{ doc.alias }}</span>
        </span>
      </h3>
      <div py-2 fs-xl c-gray-4>
        {{ doc.desc }}
      </div>
    </div>
    <div card p-5 grid="~ cols-2 gap-5" fs-18px>
      <code>
        <p c-primary mb-2>
          {{ doc.code }}
        </p>
        <div p-10px bg-dark-200 max-w-380px rd>
          <p v-for="item in doc.compiled" :key="item">{{ item }}</p>
        </div>
      </code>

      <div>
        <p pb-2>
          Preview
        </p>
        <div :class="doc.preview" b="~ dark-1 dashed">
          {{ doc.code }}
        </div>
        <span v-if="doc.preview === 'hide'" fs-12px>You can't see me :)</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
