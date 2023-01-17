<template>
  <div class="px-16 bg-white">
    <h1 tabindex="2" class="satoshi-black font-bold font-36px text-darkbrown">
      Leadership
    </h1>
    <div
      id="leaderApp"
      class="pt-2.5 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-11 justify-between"
    >
      <ul
        v-for="leader in leaders"
        :key="leader['title']"
        class="w-full pb-4 flex flex-col"
      >
        <img
          :title="leader['image-alt']"
          :alt="leader['image-alt']"
          class="pb-2.5"
          :src="require(`~/assets/img/headshots/${leader['image']}`)"
        />
        <a
          tabindex="2"
          class="satoshi-bold underline"
          target="_blank"
          :href="leader['link']"
          >{{ leader['name'] }}</a
        >
        <h3 tabindex="2" class="font-medium text-medgrey">
          {{ leader['title'] }}
        </h3>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    leaders: {
      type: Array,
      required: true,
    },
  },
}
</script>
