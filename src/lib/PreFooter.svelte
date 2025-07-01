<script>
//   import Comet1 from '$lib/comets/prefooter/comet1.svg';
//   import Comet2 from '$lib/comets/prefooter/comet2.svg';
//   import Stars from '$lib/comets/prefooter/stars.svg';
</script>

<section class="relative bg-gradient-to-b from-[#1B1A2D] to-[#0D0B1F] text-white py-24 px-4 text-center overflow-hidden">
  <!-- Stars background -->
  <div class="absolute inset-0 z-0">
    <img src="https://a.storyblok.com/f/285465492957969/1389x803/750853c06a/stars.svg" alt="" class="w-full h-full object-cover" srcset=""> 
  </div>

  <!-- Comet 1 - Left side -->
  <div class="absolute top-[-100px] left-[-100px] z-10">
    <img src="https://a.storyblok.com/f/285465492957969/343x636/009f42da0a/comet1.svg" class="w-[400px] h-[400px]" alt="" srcset="" />
  </div>

  <!-- Comet 2 - Right side -->
  <div class="absolute bottom-[-100px] right-[-100px] z-10">
    <img src="https://a.storyblok.com/f/285465492957969/378x540/2a30f34f0f/comet2.svg" class="w-[300px] h-[300px]" alt="" />
  </div>

  <!-- Main Content -->
  <div class="relative z-20">
    <h2 class="text-4xl md:text-5xl font-bold mb-4">Get started for free</h2>
    <p class="text-gray-300 text-lg mb-2">Build and test for as long as you need.</p>
    <p class="text-gray-300 text-lg mb-10">Pick a plan when you're ready.</p>

    <div class="flex justify-center gap-4 flex-wrap">
      <button class="px-6 py-3 bg-black border border-white rounded-lg text-white hover:bg-white hover:text-black transition">
        Start free trial
      </button>
      <button class="px-6 py-3 bg-violet-600 rounded-lg text-white hover:bg-violet-500 transition">
        Schedule a demo
      </button>
    </div>
  </div>
</section>
