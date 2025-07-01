<script>
  import Hero from '$lib/Hero.svelte';
  import TitleBlock from '$lib/TitleBlock.svelte';
  import ListSection from '$lib/ListSection.svelte';
  import TitleBlock2 from '$lib/TitleBlock2.svelte';
  import PartnerShips from '$lib/PartnerShips.svelte';
  import FAQs from '$lib/FAQs.svelte';
  import PreFooter from '$lib/PreFooter.svelte';
  import Footer from '$lib/Footer.svelte';

  let openIndex = null; // equivalent of useState(null)
</script>

<div class="bg-[#0D0B1F] text-white">
  <Hero />

  <div class="w-[1440px] mx-auto">
    <img src="https://a.storyblok.com/f/285465492957969/1440x32/141830d9b5/brandlogos.png" alt="Brand Logos" />
  </div>

  <TitleBlock />
  <ListSection />
  <TitleBlock2 />
  <PartnerShips />
  <FAQs />
  <PreFooter />
  <Footer />
</div>
