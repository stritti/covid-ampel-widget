<template>
  <teleport
    v-if="metaInfo"
    to="head"
  >
    <title>{{ metaInfo.title }}</title>
    <template v-if="metaInfo.meta">
      <meta
        v-if="metaInfo.meta.description"
        property="og:description"
        :content="metaInfo.meta.description"
      >

      <template v-if="metaInfo.meta.img">
        <meta
          property="og:image:url"
          :content="metaInfo.meta.img.url"
        >
      </template>
    </template>
  </teleport>
</template>

<script>
export default {
  props: {
    metaInfo: {
      type: Object,
      required: false,
      default: null
    }
  },
}
</script>

<style>

</style>
