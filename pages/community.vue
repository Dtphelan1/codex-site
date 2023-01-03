<template>
  <div>
    <div
      class="community-header-block bg-darkgrey flex justify-center items-center px-4"
    >
      <div class="text-white text-center md:pt-10">
        <h2
          tabindex="2"
          class="community-page-headline satoshi-black font-bold lg:font-black"
        >
          Community
        </h2>
        <div
          tabindex="2"
          class="community-page-subheader max-w-xl font-normal satoshi-light"
        >
          Partnering clinicians, industry, patients, and philanthropy to create
          better data for health.
        </div>
      </div>
    </div>
    <div class="bg-white pb-8">
      <div class="text-center py-8 lg:px-16 px-10 font-18px">
        <p tabindex="2" class="satoshi-bold pb-4 lg:pb-2">
          We are driven by the vision of an equitable future enabled by
          open-source innovation, owned by patients, and empowered by the
          healthcare community.
        </p>
        We are dedicated to radical improvements in patient outcomes and
        supercharging the capability of care teams and researchers by
        harmonizing health data that is expert-validated, trusted, consistent,
        usable, and shareable.
      </div>
    </div>
    <LeadersSection :leaders="leaders" />
    <div class="px-16 bg-white">
      <h1
        tabindex="2"
        class="pt-16 pb-7 satoshi-black font-bold font-36px text-darkbrown"
      >
        Managing Committees
      </h1>
      <CommitteeMembers
        :steering-members="steeringMembers"
        :operating-members="operatingMembers"
      />
    </div>
    <div class="px-16 pt-20 bg-white">
      <h1 tabindex="2" class="satoshi-black font-bold font-36px text-darkbrown">
        Community of Practice
      </h1>
      <p tabindex="2" class="pt-2.5 w-full lg:w-3/4">
        The
        <span class="underline"
          ><a
            target="_blank"
            href="https://confluence.hl7.org/display/COD/mCODE+Community+of+Practice"
            >Community of Practice (CoP)</a
          ></span
        >
        aims to improve cancer care and research by gathering health systems to
        develop best practices for implementing mCODE and use-case-based
        extensions into production EHRs and other systems. There is no cost for
        participation in the CoP's monthly calls.
      </p>
      <div class="flex lg:flex-row flex-col">
        <div>
          <a
            tabindex="2"
            class="flex underline mt-2"
            target="_blank"
            href="https://confluence.hl7.org/display/COD/mCODE+Community+of+Practice"
            >Sign Up Here <img class="ml-2" src="~/assets/img/arrow.svg"
          /></a>
        </div>
        <div>
          <a
            tabindex="2"
            class="lg:ml-8 underline flex mt-2"
            target="_blank"
            href="https://confluence.hl7.org/display/COD/CodeX+Calendar"
            >Our Events <img class="ml-2" src="~/assets/img/arrow.svg"
          /></a>
        </div>
      </div>
    </div>
    <div class="pl-16 pr-8 pt-6 bg-white">
      <div class="flex flex-row flex-wrap gap-x-4 justify-between lg:gap-x-0">
        <CommunityMemberGridItem
          v-for="communityMemberType in communityOfPractice.communityMemberTypes"
          :key="communityMemberType.name"
          :community-member-type="communityMemberType"
        />
      </div>
    </div>
    <div class="px-16 py-20 bg-white">
      <h1 tabindex="2" class="satoshi-black font-bold font-36px text-darkbrown">
        Membership
      </h1>
      <p tabindex="2" class="py-2 w-full lg:w-3/4">
        Paying, government, and sponsored CodeX Members are recognized as
        leaders through CodeX decision-making, thought leadership, conference
        key notes, and more.
      </p>
      <p>
        <NuxtLink to="/contact" class="underline">
          Contact Us <img class="ml-2 inline" src="~/assets/img/arrow.svg" />
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'DefaultGrey',
  async asyncData({ $content, params }) {
    const communityOfPractice = await $content('communityOfPractice').fetch()
    const leaders = await $content('leaders').sortBy('sortPriority').fetch()

    const steeringMembersObjs = await $content('committeeMembers')
      .where({ slug: 'steering' })
      .fetch()
    const steeringMembers = steeringMembersObjs.map(
      (memberObj) => memberObj.name
    )
    const operatingMembersObjs = await $content('committeeMembers')
      .sortBy('name')
      .where({ slug: 'operating' })
      .fetch()
    const operatingMembers = operatingMembersObjs.map(
      (memberObj) => memberObj.name
    )
    return {
      leaders,
      steeringMembers,
      operatingMembers,
      communityOfPractice,
    }
  },
  head() {
    return {
      title: 'CodeX Community',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            "A compilation of CodeX's community leaders, managing committees, and communities of practice, as well as guidance on how to become a CodeX community member yourself.",
        },
      ],
    }
  },
}
</script>
