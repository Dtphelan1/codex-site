<template>
  <div class="flex flex-col justify-between">
    <div class="flex justify-left items-left place-items-center home-banner">
      <div class="text-white pl-28 text-left banner-container mt-64 mdx:hidden">
        <h1 tabindex="0" class="h1 font-black satoshi-bold leading-none">
          Better Data.
        </h1>
        <h1 tabindex="0" class="h1 font-black satoshi-bold leading-none">
          Better Health.
        </h1>
        <div tabindex="0" class="banner-text pt-8 font-24px">
          The CodeX community is singularly focused on bringing standards to
          healthcare data so patients have the care and research journey they
          deserve and should expect.
        </div>
        <div class="mt-8 flex">
          <!-- Anchor tag on the same page doesn't need NuxtLink -->
          <a class="basis-1/2" tabindex="0" href="#news">
            <div
              class="font-black satoshi-bold font-24px mt-2 mb-2 mr-2 bg-white border-3 border-white rounded-5px p-4 px-8 text-black text-center"
            >
              CodeX in the News
            </div>
          </a>
          <NuxtLink
            to="contact"
            class="basis-1/2 font-black satoshi-bold font-24px text-white p-4 px-8 text-center rounded-5px border-3 m-2 border-white bg-transparent"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
    <div
      class="flex justify-center text-black bg-white banner-container md:hidden"
    >
      <div class="flex flex-col mt-14 mb-6 max-w-[350px]">
        <h2 class="font-40px font-black satoshi-black leading-none">
          Better Data,
        </h2>
        <h2 class="font-40px font-black satoshi-black leading-none mt-2">
          Better Health
        </h2>
        <div class="banner-text font-20px mt-4">
          The CodeX community is singularly focused on bringing standards to
          healthcare data so patients have the care and research journey they
          deserve and should expect.
        </div>
        <div class="mt-5 flex">
          <a class="grow" href="#news">
            <div
              class="satoshi-black font-16px font-black bg-black border-3 border-black rounded-5px mr-2.5 p-4 px-8 text-white text-center"
            >
              In the News
            </div>
          </a>
          <NuxtLink
            to="/contact"
            class="grow satoshi-black font-16px font-black p-4 px-8 text-center rounded-5px border-3 border-black bg-transparent"
          >
            Contact Us
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="bg-backgroundgrey">
      <div class="text-center mx-8 my-10">
        <h2 tabindex="0" class="h2 satoshi-black leading-42px">
          For Our Future
        </h2>
      </div>
    </div>
    <div class="flex flex-row justify-center py-12 mb-10 md:mb-0 bg-offwhite">
      <div class="flex flex-col max-w-[350px] md:max-w-max md:px-12">
        <div tabindex="0" class="satoshi-bold font-20px mb-6 lg:mb-1">
          In our healthcare system, 65% of data belonging to patients is siloed,
          unstructured and is held in different forms across patient care,
          research and payment ecosystems.
          <span class="font-14px">
            — Source: Health Information Technology Advisory Committee (HITAC)
          </span>
        </div>
        <div tabindex="0" class="font-20px">
          Today, a consistent patient health story is nearly impossible to track
          and share because data are unreliable, lack standardization, and are
          largely unusable. CodeX is the only member-driven community focused on
          solving the problem of silos endemic to our current healthcare system
          for specialty health data. We enable high-quality computable data —
          using Health Level Seven International (HL7) and Fast Healthcare
          Interoperability Resource (FHIR) standards — to create an open common
          language for patients, care teams, and researchers to advance data
          ownership, sharing, and reliability.
        </div>
      </div>
    </div>
    <div class="bg-backgroundgrey grid blurb-grid">
      <div class="xlx:hidden">&nbsp;</div>
      <div class="text-center mx-8 my-10">
        <h2 tabindex="0" class="h2 satoshi-black leading-42px">
          Building data unity
        </h2>
        <h2 tabindex="0" class="h2 satoshi-black leading-42px">
          for patients, clinicians, and research.
        </h2>
        <p tabindex="0" class="font-[21px] mt-3">
          Common data definitions drive high-quality computable data that are
          trusted, consistent, and usable.
        </p>
      </div>
      <div class="mt-auto max-w-[160px] xlx:hidden">
        <img
          title="Icon of person climbing rising steps"
          alt="Icon of person climbing rising steps"
          src="~/assets/img/stairs.svg"
        />
      </div>
    </div>
    <div
      class="bg-white flex flex-col mt-8 mb-16 xl:grid xl:grid-cols-3 xl:mt-16 xl:mb-36 xl:mx-60 xl:gap-x-48"
    >
      <div class="flex flex-col items-center pb-10 xl:pb-0">
        <div class="grid step-container1 content-end xl:h-[280px]">
          <img
            title="Elderly patient, nurse, and clinician chatting with one another."
            alt="Elderly patient, nurse, and clinician chatting with one another."
            src="~/assets/img/step1.png"
          />
        </div>
        <div class="flex flex-row step-text mt-4 xl:mt-2">
          <img class="p-1 mb-auto mr-3" src="~/assets/img/bullet1.svg" />
          <div>
            <h1 tabindex="0" class="font-16px satoshi-bold font-black">
              Caring for Every Patient
            </h1>
            <p tabindex="0">
              Break down silos and manual processes for efficient care and
              research across all settings, building trust with your care team
              and accurate data.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center pb-10 xl:pb-0">
        <div
          class="grid step-container2 content-end xl:pb-4 xl:mb-0 xl:h-[280px]"
        >
          <img
            title="Clinician and nurse looking at x-ray to assess their patient's condition."
            alt="Clinician and nurse looking at x-ray to assess their patient's condition."
            src="~/assets/img/step2.png"
          />
        </div>
        <div class="flex flex-row step-text mt-6 xl:mt-2">
          <img class="p-1 mb-auto mr-3" src="~/assets/img/bullet2.svg" />
          <div>
            <h1 tabindex="0" class="font-16px satoshi-bold font-black">
              Learning with Every Patient
            </h1>
            <p tabindex="0">
              Create easily accessible, accurate, and longitudinal patient
              stories that caregivers can use to personalize treatment and care.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="grid step-container2 content-end xl:mb-0 xl:h-[280px]">
          <img
            title="Group of people working with each other to fit puzzle pieces together"
            alt="Group of people working with each other to fit puzzle pieces together."
            src="~/assets/img/step3.png"
          />
        </div>
        <div class="flex flex-row step-text mt-4 xl:mt-2">
          <img class="p-1 mb-auto mr-3" src="~/assets/img/bullet3.svg" />
          <div>
            <h1 tabindex="0" class="font-16px satoshi-bold font-black">
              Transforming Care for All
            </h1>
            <p tabindex="0">
              Revolutionize healthcare and research by leveraging standardized
              data of individual patients to contribute to the health of all
              future patients.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-darkbrown flex flex-col md:flex-row px-8 py-12 lg:py-16 justify-center"
    >
      <div class="quote ml-2 mb-6 place-self-center md:place-self-auto">
        <img src="~/assets/img/quote.png" />
      </div>
      <div>
        <div>
          <h1
            tabindex="0"
            class="pb-4 text-white satoshi-bold font-bold font-24px"
          >
            People's lives are depending on what we do and what these data tell
            us
          </h1>
        </div>
        <div>
          <h2 tabindex="0" class="text-white font-bold font-20px">
            Dr. Monica Bertagnolli
          </h2>
          <h3
            tabindex="0"
            class="p text-white satoshi-light font-light font-16px"
          >
            Prior President of American Society of Clinical Oncology, Prior
            Group Chair of Alliance for Clinical Trials in Oncology
          </h3>
        </div>
      </div>
    </div>
    <div
      class="bg-backgroundgrey py-14 lg:py-24 flex flex-col items-center lg:flex-row lg:justify-evenly"
    >
      <div class="health-cta lg:pr-10">
        <h2
          tabindex="0"
          class="h2 font-black satoshi-black leading-none pb-0.5"
        >
          Health Data.
        </h2>
        <h2
          tabindex="0"
          class="h2 font-black satoshi-black leading-none pb-0.5"
        >
          Collect Once,
        </h2>
        <h2
          tabindex="0"
          class="h2 font-black satoshi-black leading-none pb-0.5"
        >
          Use Everywhere.
        </h2>
        <p tabindex="0" class="mt-5 mb-2">
          CodeX is a global community of healthcare stakeholders currently
          working on data standards in three domains. We build and implement in
          the field and on-site.
        </p>
        <img
          class="pt-8"
          title="Data elements of patient connected together in a digital format."
          alt="Data elements of patient connected together in a digital format."
          src="~/assets/img/boxes.svg"
        />
      </div>
      <div class="flex flex-col gap-y-4 health-domains my-10">
        <div id="cancer-first-section">
          <h2 tabindex="0" class="font-black satoshi-bold font-20px pb-2">
            Cancer
          </h2>
          <p tabindex="0">
            The first domain that the CodeX community tackled is cancer. Using
            the minimal Common Oncology Data Elements (mCODE), an open data
            standard enabling high-quality data capture for cancer that can be
            widely adopted.
          </p>
          <p tabindex="0">
            <span class="satoshi-bold">70+ oncology elements</span> in use at
            Dana-Farber Cancer Institute, MD Anderson Center, Massachusetts
            General Hospital and 44 other institutions. Versions of the mCODE
            and associated modeling tools are currently operational in over 250
            organizations.
          </p>
        </div>
        <SeeOurWork link="https://confluence.hl7.org/display/COD/Oncology" />
        <div class="border-b border-solid border-faintgrey pb-2 lg:pt-0"></div>
        <div id="genomics-first-section">
          <div class="mb-3 mt-1 lg:mb-0">
            <span class="domain-badge whitespace-nowrap">NEW DOMAIN</span>
          </div>
          <h2 tabindex="0" class="font-black satoshi-bold font-20px pb-2">
            Genomics
          </h2>
          <p tabindex="0">
            This team is advancing the standardization, interoperability, and
            exchange of genomic data to improve care processes, clinical
            workflows, and patient outcomes from all areas of clinical care.
          </p>
        </div>
        <SeeOurWork link="https://confluence.hl7.org/display/COD/Genomics" />
        <div class="border-b border-solid border-faintgrey pt-1 lg:pt-0"></div>
        <div id="cardiovascular-health-first-section">
          <div class="mb-3 mt-1 lg:mb-0">
            <span class="domain-badge whitespace-nowrap">NEW DOMAIN</span>
          </div>
          <h2 tabindex="0" class="font-black satoshi-bold font-20px pb-2">
            Cardiovascular Health
          </h2>
          <p tabindex="0">
            This team is engaging patients, as well as clinical and research
            stakeholders, to create standard representations of heart health to
            enable standards-based interoperability in cardiovascular health and
            healthcare.
          </p>
        </div>
        <SeeOurWork
          link="https://confluence.hl7.org/display/COD/Cardiovascular"
        />
      </div>
    </div>
    <div class="bg-darkgrey text-white">
      <div
        class="flex flex-col lg:flex-row mx-14 lg:mx-56 my-20 justify-center"
      >
        <div class="basis-2/5 mr-14 mb-9 lg:mb-0">
          <h1
            tabindex="0"
            class="satoshi-black font-black font-36px whitespace-nowrap mb-4 lg:mb-2"
          >
            Our Traction
          </h1>
          <p tabindex="0" class="font-16px">
            Since 2019, CodeX has been working in partnership with our
            community, building interoperable systems to positively impact the
            lives of real patients.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-y-6">
          <div class="w-1/2 lg:w-full">
            <h1
              tabindex="0"
              class="satoshi-bold font-black font-40px leading-9"
            >
              11
            </h1>
            <h2 tabindex="0" lass="font-16px">
              <NuxtLink to="/uses">
                <a class="underline">Use Cases Underway</a>
              </NuxtLink>
            </h2>
          </div>
          <div class="sm:w-1/2 md:w-full">
            <h1
              tabindex="0"
              class="satoshi-bold font-black font-40px leading-9"
            >
              6
            </h1>
            <h2 tabindex="0" class="font-16px">External Sources of Funding</h2>
          </div>
          <div class="w-1/2 lg:w-full">
            <h1
              tabindex="0"
              class="satoshi-bold font-black font-40px leading-9"
            >
              44
            </h1>
            <h2 tabindex="0" class="font-16px">
              <a
                class="underline"
                target="_blank"
                href="https://confluence.hl7.org/display/COD/CodeX+Membership"
                >Member Organizations</a
              >
            </h2>
          </div>
          <div class="w-1/2 lg:w-full">
            <h1
              tabindex="0"
              class="satoshi-bold font-black font-40px leading-9"
            >
              200+
            </h1>
            <h2 tabindex="0" class="font-16px">
              <NuxtLink to="/community">
                <a class="underline">Community Members</a>
              </NuxtLink>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-white flex flex-col items-center text-center px-10 lg:px-20 pt-10"
    >
      <h1 tabindex="0" class="font-black satoshi-black font-40px pb-10">
        The CodeX Community
      </h1>
      <img
        tabindex="0"
        width="900px"
        src="~/assets/img/patient.jpg"
        title="The CodeX Community stakeholder map which includes patients, researchers, providers, payers, pharmaceuticals, health systems, public health, advocacy groups, global community, health IT, regulators, and philanthropy."
        alt="The CodeX Community stakeholder map which includes patients, researchers, providers, payers, pharmaceuticals, health systems, public health, advocacy groups, global community, health IT, regulators, and philanthropy."
      />
    </div>
    <div
      tabindex="0"
      class="pt-12 px-10 lg:px-16 xl:px-24 lg:grid lg:grid-cols-4"
    >
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-patient.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Patients</h2>
          <div tabindex="0" class="font-12px font-normal">
            Growing a high-resolution longitudinal health record with easier
            access to care, research, clinical trials, and your health data.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-providers.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Providers</h2>
          <div tabindex="0" class="font-12px font-normal">
            Improving care continuity with standards-based clinical specialty
            data, spending more time on care than administration.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-healthcenter.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Health Centers</h2>
          <div tabindex="0" class="font-12px font-normal">
            Assuring efficient, interoperable data exchange and reporting, and
            improved patient and care team satisfaction.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-pharma.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">
            Pharma and Life Science
          </h2>
          <div tabindex="0" class="font-12px font-normal">
            Increasing diversity and accessibility in clinical trial enrollment,
            improving treatment and drug safety monitoring.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-healthit.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Health IT</h2>
          <div tabindex="0" class="font-12px font-normal">
            Removing data inaccuracies by embedding structured CodeX data in
            real-world innovative solutions.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-research.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Research</h2>
          <div tabindex="0" class="font-12px font-normal">
            Improving diversity and equity in clinical research with improved
            trial matching, common data sets, and targeted population research.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-regulator.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Regulators</h2>
          <div tabindex="0" class="font-12px font-normal">
            Advancing healthcare policy decisions with timely, high-quality data
            in registries and adverse events reporting.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-philanthropy.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Philanthropy</h2>
          <div tabindex="0" class="font-12px font-normal">
            Building collective impact to accelerate health equity, research,
            and care outcomes.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-pubhealth.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Public Health</h2>
          <div tabindex="0" class="font-12px font-normal">
            Assuring real-time public health data and solutions for diverse
            populations across care and research settings.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-payers.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Payers</h2>
          <div tabindex="0" class="font-12px font-normal">
            Gaining insights to drive effective value-based care models and
            fraud reduction.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-advocacy.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Advocacy Groups</h2>
          <div tabindex="0" class="font-12px font-normal">
            Mobilizing efforts by understanding the healthcare and research
            needs and challenges in the communities you serve.
          </div>
        </div>
      </div>
      <div class="flex items-center pb-8 lg:pb-4 lg:px-4">
        <img src="~/assets/img/icon-global.svg" />
        <div class="pl-6">
          <h2 tabindex="0" class="font-14px satoshi-bold">Global Community</h2>
          <div tabindex="0" class="font-12px font-normal">
            Growing a global learning health system through open-standards
            clinical specialty data.
          </div>
        </div>
      </div>
    </div>

    <div class="bg-darkgrey py-16 mt-6">
      <div
        class="flex flex-col lg:flex-row justify-around bg-white text-black px-12 py-16 mx-11 lg:mx-56"
      >
        <div class="mb-8 lg:mb-0">
          <span tabindex="0" class="research-badge">RESEARCH</span>
          <h3 tabindex="0" class="satoshi-bold font-bold font-20px mt-4 mb-0">
            Use Case Spotlight:
          </h3>
          <h3 tabindex="0" class="satoshi-bold font-bold font-20px">
            ICAREdata
          </h3>
        </div>
        <div class="basis-3/5">
          <p tabindex="0" class="font-16px">
            Clinical trials are the gold standard for clinical care
            interventions. 92% of cancer patients in the United States are not
            enrolled in clinical trials due to poor data collection of their
            cancer therapies. This project focuses on collecting key outcome
            data that is standardized, research-grade, and longitudinal across
            organizations to promote health equity and reduce burden on health
            sites. This novel approach to data collection has already been
            adopted by over 13 health sites.
          </p>
          <p tabindex="0" class="mt-4">
            <NuxtLink to="/uses">
              <a class="underline">Read more use cases</a>
            </NuxtLink>
            <img class="inline ml-2" src="~/assets/img/arrow.svg" />
          </p>
        </div>
      </div>
    </div>
    <NewsSection :news-items="newsItems" />
    <div
      class="bg-darkgrey flex flex-col md:flex-row px-8 py-12 lg:py-16 justify-center"
    >
      <div class="quote ml-2 mb-6 place-self-center md:place-self-auto">
        <img src="~/assets/img/quote.png" />
      </div>
      <div class="">
        <div>
          <h1
            tabindex="0"
            class="pb-4 text-white satoshi-bold font-bold font-24px lg:max-w-5xl"
          >
            Cancer patients are willing to share their data in hopes of finding
            solutions, not just for themselves but for patients in the future
          </h1>
        </div>
        <div>
          <h2 tabindex="0" class="text-white font-bold font-20px pt-1">
            Debi Willis
          </h2>
          <h3
            tabindex="0"
            class="p text-white satoshi-light font-light font-16px"
          >
            CEO and Founder of PatientLink Enterprises, Cancer Survivor
          </h3>
        </div>
      </div>
    </div>
    <div class="bg-backgroundgrey">
      <div class="flex flex-col my-16 mx-12 lg:px-24 lg:flex-row">
        <div class="place-self-center mb-10 lg:mb-0">
          <img
            width="340px;"
            tabindex="0"
            class="min-w-[340px]"
            src="~/assets/img/equity.svg"
          />
        </div>
        <div class="lg:ml-16 lg:mr-24">
          <h1 tabindex="0" class="font-32px satoshi-black font-black pb-3">
            Check Out Our Latest White-Paper
          </h1>
          <p tabindex="0" class="pb-3">
            This white paper explores how the minimal Common Oncology Data
            Elements (mCODE™) standard could be leveraged to achieve more
            equitable health outcomes for cancer patients from diverse
            populations.
          </p>
          <p tabindex="0" class="">
            <a
              tabindex="0"
              class="underline"
              target="_blank"
              href="https://confluence.hl7.org/display/COD/CodeX+White+Papers+and+Reports?preview=/81012483/81015633/Health-Equity-Codex-12-09%5B74%5D.pdf"
              >Read Here</a
            ><img class="inline ml-2" src="~/assets/img/arrow.svg" />
          </p>
        </div>
      </div>
    </div>
    <div class="bg-darkbrown text-white px-8 py-12 md:p-32">
      <h1
        tabindex="0"
        class="satoshi-black font-black font-32px pb-7 lg:pb-2 lg:pt-0"
      >
        Build and Innovate on Our Work
      </h1>
      <p tabindex="0" class="pb-9 lg:pb-14">
        We enable high-quality computable data using Health Level Seven
        International (HL7) and Fast Healthcare Interoperability Resource (FHIR)
        standards to create a common language.
      </p>
      <div
        class="flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0 justify-between"
      >
        <div class="basis-1/3 p-11 bg-white text-black">
          <h2
            tabindex="0"
            class="satoshi-bold font-black build-innovate-cards-header-text pb-4 lg:pb-2"
          >
            Get Engaged
          </h2>
          <p tabindex="0">
            CodeX hosts events every month to keep our community informed and
            engaged, and to make sure the public’s opinions are heard.
          </p>
          <p class="mt-4">
            <a
              tabindex="0"
              target="_blank"
              class="underline"
              href="https://confluence.hl7.org/display/COD/CodeX+Calendar"
              >Attend Upcoming Events</a
            ><img class="inline ml-2" src="~/assets/img/arrow.svg" />
          </p>
        </div>
        <div class="basis-1/3 p-11 bg-white text-black">
          <h2
            tabindex="0"
            class="satoshi-bold font-black build-innovate-cards-header-text pb-4 lg:pb-2"
          >
            Expand Our Reach
          </h2>
          <p tabindex="0">
            There are currently over 250+ stakeholders involved in CodeX. Become
            a member today or join our community of practice. We also are
            looking to expand our partnerships across various health systems to
            include small community health centers. Spread the word and
            implement CodeX at your institution.
          </p>
          <p class="mt-4">
            <NuxtLink to="/contact">
              <a tabindex="0" class="underline">Contact Us</a>
            </NuxtLink>
            <img class="inline ml-2" src="~/assets/img/arrow.svg" />
          </p>
        </div>
        <div class="basis-1/3 p-11 bg-white text-black">
          <h2
            tabindex="0"
            class="satoshi-bold font-black build-innovate-cards-header-text pb-4 lg:pb-2"
          >
            Support Our Mission
          </h2>
          <p tabindex="0">
            Funding from foundations, philanthropies, and government
            organizations will allow us to further scale and drive maximum
            adoption across systems. Your support will also allow us to expand
            our work into new domains such as genomics and cardiovascular
            disease.
          </p>
          <p class="mt-4">
            <NuxtLink to="/contact">
              <a tabindex="0" class="underline">Contact Us</a>
            </NuxtLink>
            <img class="inline ml-2" src="~/assets/img/arrow.svg" />
          </p>
          <p class="">
            <a
              tabindex="0"
              class="underline"
              target="_blank"
              href="https://confluence.hl7.org/display/COD/CodeX+Membership"
              >See Who's Involved</a
            ><img class="inline ml-2" src="~/assets/img/arrow.svg" />
          </p>
        </div>
      </div>
      <div class="bg-white text-black mt-5 p-10">
        <h2
          tabindex="0"
          class="satoshi-bold font-black build-innovate-cards-header-text pb-4 lg:pb-2"
        >
          Open Source
        </h2>
        <p tabindex="0">
          CodeX tools and implementations are open source under the Apache 2.0
          license. CodeX data standards are available under the Creative Commons
          0 license (CC0). Take a closer look at our technical work at our
          <a
            class="underline font-black"
            target="_blank"
            href="https://github.com/HL7/fhir-mCODE-ig"
            >GitHub.</a
          >
        </p>
        <p tabindex="0" class="mt-4">
          <a
            tabindex="0"
            class="underline"
            target="_blank"
            href="http://hl7.org/fhir/us/mcode/index.html"
            >Read the mCODE Implementation Guide</a
          ><img class="inline ml-2" src="~/assets/img/arrow.svg" />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content }) {
    const newsItemCSV = await $content('newsItems').fetch()
    return {
      newsItems: newsItemCSV.body,
    }
  },
  head() {
    return {
      title: 'CodeX Home',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'The homepage for learning more about CodeX, the only member-driven community focused on solving the problem of silos endemic to our current healthcare system for specialty health data. We enable high-quality computable data — using Health Level Seven International (HL7) and Fast Healthcare Interoperability Resource (FHIR) standards — to create an open common language for patients, care teams, and researchers to advance data ownership, sharing, and reliability.',
        },
      ],
    }
  },
}
</script>
