<template>
  <teleport
    v-if="metaInfo"
    to="head"
  >
    <title>{{ metaInfo.title }}</title>

    <meta
      v-if="metaInfo.title"
      property="og:title"
      :content="metaInfo.title"
    >
    <meta
      v-if="metaInfo.title"
      property="twitter:title"
      :content="metaInfo.title"
    >
    <template v-if="metaInfo.meta">
      <meta
        v-if="metaInfo.meta.description"
        property="description"
        :content="metaInfo.meta.description"
      >
      <meta
        v-if="metaInfo.meta.description"
        property="og:description"
        :content="metaInfo.meta.description"
      >
      <meta
        v-if="metaInfo.meta.description"
        property="twitter:description"
        :content="metaInfo.meta.description"
      >
      <template v-if="metaInfo.meta.image">
        <meta
          property="og:image"
          :content="metaInfo.meta.image"
        >
        <meta
          property="twitter:image"
          :content="metaInfo.meta.image"
        >
        <meta
          property="twitter:card"
          content="summary_large_image"
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
  }
}
</script>

<style>

</style>
