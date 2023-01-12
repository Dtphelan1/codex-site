<template>
  <a class="flex" target="_blank" :href="link"
    >See Our Work <img class="ml-2" src="~/assets/img/arrow.svg"
  /></a>
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
