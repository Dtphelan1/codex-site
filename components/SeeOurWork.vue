<template>
  <a class="flex underline items-center text-base" target="_blank" :href="link">
    See Our Work
    <img class="ml-2 w-4" src="~/assets/img/arrow.svg" />
  </a>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
