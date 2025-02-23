<template>
  <div>
    <div class="main mb-auto">
      <div class="h-72 bg-darkgrey flex justify-center items-center px-4">
        <div class="text-white text-center md:pt-10">
          <h2
            tabindex="2"
            class="community-page-headline satoshi-black font-bold lg:font-black"
          >
            Our Story
          </h2>
        </div>
      </div>
    </div>
    <div class="bg-white flex">
      <iframe
        tabindex="1"
        id="timeline"
        class="timeline"
        src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=11MDNixyECHr7Qpaxa-cv2vv1XICGoFix_nAF46u0_fU&font=Default&lang=en&initial_zoom=2&start_at_slide=11&height=650"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        frameborder="0"
        title="Timeline"
      ></iframe>
    </div>
    <div class="bg-darkgrey">
      <div class="bg-darkgrey text-white py-16 px-8 sm:px-16 lg:px-60">
        <h1
          tabindex="2"
          class="satoshi-black font-black whitespace-nowrap font-36px mb-4 lg:mb-2"
        >
          Origin Story
        </h1>
        <p tabindex="2" class="font-16px py-2">
          Sometimes innovation needs a lucky spark. For CodeX, this was a chance
          encounter between former colleagues,
          <a
            class="underline"
            target="_blank"
            href="https://www.mitre.org/who-we-are/our-people/jay-schnitzer"
            >Dr. Jay Schnitzer</a
          >
          and
          <a
            class="underline"
            target="_blank"
            href="https://www.cancer.gov/about-nci/leadership/director"
            >Dr. Monica Bertagnolli</a
          >, on an airplane in 2017. Schnitzer and Bertagnolli had trained
          together as surgeons 30+ years before at Brigham and Women’s Hospital.
          Bertagnolli had gone on to be a cancer surgeon at Brigham and Women’s
          and was leading the Alliance for Cancer Trials in Oncology. She was
          passionate about the many opportunities for improvement in the
          efficacy, range, and inclusivity of cancer trials. Specifically, she
          was convinced that the use of Electronic Health Records (EHR) could be
          a powerful tool in addressing all three areas.
        </p>
        <p tabindex="2" class="font-16px py-2">
          Dr. Schnitzer, meanwhile, was leading a diverse research agenda –
          including a focus on healthcare – as the Chief Technology Officer at
          MITRE. At the time, the organization was on a quest to drive data
          standards for EHR systems that could be aggregated and searched to
          enable both better treatments and new therapies.
        </p>
        <p tabindex="2" class="font-16px py-2">
          As the conversation progressed and the synergies became obvious, the
          two began jotting ideas for a standard health record on the back of a
          napkin. They had both been circling around one of the most fundamental
          root cause problems in healthcare and, in their conversation, they
          knew they had something. This spontaneous in-flight brainstorming
          session led to a lasting partnership and the creation of mCODE –
          minimal Common Oncology Data Elements. Those ideas on the back of a
          napkin have become a robust community of stakeholders from across
          healthcare creating clinical specialty standards that are transforming
          cancer patient care and research.
        </p>
        <p tabindex="2" class="font-16px py-2">
          But from the beginning, their vision was even more ambitious. Drs.
          Bertagnolli and Schnitzer and their other partners plan to use data
          standards to achieve a Learning Health System in which each
          interaction between a patient and clinician results in high-quality
          data owned by the patients themselves and usable by all future care
          givers and researchers. The spark that started with that chance
          encounter between two old friends now holds the promise to
          revolutionize healthcare data, lower costs, optimize trials, and
          dramatically improve health outcomes.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'DefaultGrey',
  head() {
    return {
      title: 'CodeX Story',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            "A timeline view of CodeX's story, detailing the inception, development, and impact of the CodeX community.",
        },
      ],
    }
  },
}
</script>
