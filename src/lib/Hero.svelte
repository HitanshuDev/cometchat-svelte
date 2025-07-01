<script>
  import Navbar from '$lib/Navbar.svelte';
</script>

<!-- Background Section -->
<div class="relative min-h-screen bg-gradient-to-b from-[#1B1A2D] to-[#0D0B1F] text-white overflow-hidden">

  <!-- Stars Background -->
  <div class="absolute inset-0 z-0">
    <img src="https://a.storyblok.com/f/285465492957969/1389x646/d933fbf46f/stars.svg" alt="Stars background" class="w-full h-full object-cover" />
  </div>

  <!-- Page Content -->
  <Navbar />

  <section class="relative flex items-center justify-center px-4 py-16 min-h-[calc(100vh-80px)]">
  <!-- Comets: Absolutely positioned, behind content -->
  <div class="absolute inset-0 z-10 pointer-events-none">
    <img src="https://a.storyblok.com/f/285465492957969/141x142/9870842917/comet1.svg" alt="" class="absolute top-10 left-10 w-20" />
    <img src="https://a.storyblok.com/f/285465492957969/360x611/36b256981e/comet2.svg" alt="" class="absolute top-20 right-10 w-24" />
    <img src="https://a.storyblok.com/f/285465492957969/728x579/bd8623f019/comet3.svg" alt="" class="absolute bottom-10 left-16 w-32" />
    <img src="https://a.storyblok.com/f/285465492957969/480x368/16e848f69a/comet4.svg" alt="" class="absolute top-1/3 left-1/4 w-28" />
    <img src="https://a.storyblok.com/f/285465492957969/320x442/851f85d3a7/comet5.svg" alt="" class="absolute bottom-1/4 right-1/4 w-20" />
    <img src="https://a.storyblok.com/f/285465492957969/124x125/6ebf6fd3b0/comet6.svg" alt="" class="absolute top-5 right-1/3 w-16" />
  </div>

  <!-- Main Content (above comets) -->
  <div class="relative z-20 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
    <!-- Left Text Block -->
    <div class="w-full">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
        Join the CometChat partner universe
      </h1>
      <p class="text-lg text-gray-300">
        Create value for your clients, leveraging our world-class
        technology. Partner with us and grow your business!
      </p>
    </div>

    <!-- Right Form -->
    <div class="bg-[#1E1C35]/70 backdrop-blur-md rounded-2xl p-8 shadow-xl w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-6">Become a partner</h2>
      <form class="space-y-5" on:submit|preventDefault={() => console.log('Form submitted')}>
        <div>
          <label for="name" class="block text-sm mb-1">Full name</label>
          <input
            type="text"
            placeholder="Type your name here..."
            class="w-full px-4 py-2 rounded-md bg-[#2A2843] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
          />
        </div>
        <div>
          <label for="email" class="block text-sm mb-1">Email address</label>
          <input
            type="email"
            placeholder="✉️ Type your email..."
            class="w-full px-4 py-2 rounded-md bg-[#2A2843] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
          />
        </div>
        <div>
          <label for="company" class="block text-sm mb-1">Company name</label>
          <input
            type="text"
            placeholder="Type your company's name"
            class="w-full px-4 py-2 rounded-md bg-[#2A2843] text-white border border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
          />
        </div>
        <button
          type="submit"
          class="bg-violet-600 hover:bg-violet-500 text-white py-2 px-6 rounded-md font-medium"
        >
          Submit application
        </button>
      </form>
    </div>
  </div>
</section>

</div>
