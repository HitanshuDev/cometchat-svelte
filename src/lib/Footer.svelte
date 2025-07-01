<script>

//   import { onMount } from 'svelte';
  import Icon from "@iconify/svelte";
  
  let openSection = null;

  const toggleSection = (section) => {
    openSection = openSection === section ? null : section;
  };

  const footerData = [
    {
      title: "Platform",
      links: [
        "Features",
        "Chat & Messaging",
        "Voice & Video Calls",
        "Security & Compliance",
        "Extensions",
        "Webhooks & Bots",
        "Moderation",
        "Analytics & Insights",
        "Widgets",
        "UI Kits",
        "SDKs & APIs",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Social Community",
        "Marketplace",
        "Healthcare",
        "Education",
        "Virtual Events",
        "On-Demand Service",
        "Dating Apps",
        "Gaming",
        "Enterprise",
        "Startups",
      ],
    },
    {
      title: "Developers",
      links: [
        "React",
        "Angular",
        "Vue",
        "iOS Swift",
        "Android Kotlin",
        "Android Java",
        "React Native",
        "Ionic/Capacitor",
        "WordPress",
        "Laravel/PHP",
        "Flutter",
        "Next.js",
      ],
    },
    {
      title: "Resources",
      links: [
        "Customer stories",
        "Blog",
        "Give feedback",
        "Community forum",
        "Help center",
        "Partners",
      ],
    },
    {
      title: "Competitors",
      links: ["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Partners", "Pricing", "Chat with us"],
    },
  ];

  let currentYear;

//   onMount(() => {
//     currentYear = new Date().getFullYear();
//   });
</script>

<footer class="text-white p-6">
  <!-- Desktop View -->
  <div class="hidden lg:grid grid-cols-6 gap-8 max-w-7xl mx-auto py-10">
    {#each footerData as section}
      <div>
        <h4 class="font-semibold mb-4 text-[#6852D6]">{section.title}</h4>
        <ul class="space-y-2">
          {#each section.links as link}
            <li class="text-gray-400 hover:text-white cursor-pointer">
              <a href="/">{link}</a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

  <!-- Mobile View -->
  <div class="lg:hidden space-y-4 max-w-2xl mx-auto">
    {#each footerData as section}
      <div>
        <div class="flex justify-between items-center cursor-pointer ">
          <h4  class="font-semibold text-[#6852D6]">{section.title}</h4>
          {#if openSection === section.title}
            <button on:click={() => toggleSection(section.title)}><Icon icon="mingcute:up-fill" width="24" height="24" class="text-[#6852D6]"/></button>
          {:else}
            <button on:click={() => toggleSection(section.title)}><Icon icon="mingcute:down-fill" width="24" height="24" class="text-[#6852D6]" /></button>
          {/if}
        </div>
        {#if openSection === section.title}
          <ul class="mt-2 space-y-2">
            {#each section.links as link}
              <li class="text-gray-400 hover:text-white cursor-pointer">{link}</li>
            {/each}
          </ul>
        {/if}
        </div>
    {/each}
  </div>

  <!-- Social & Footer Bottom -->
  <div class="mt-8 border-t border-gray-700 pt-4 max-w-7xl mx-auto flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
    <div class="flex flex-wrap justify-center gap-x-6 gap-y-2">
      <a href="/" class="flex space-x-1 items-center hover:text-gray-400"><Icon icon="ic:baseline-facebook" width="24" height="24" /><p>Facebook</p></a>
      <a href="/" class="flex space-x-1 items-center hover:text-gray-400"><Icon icon="mdi:linkedin" width="24" height="24" /><p>Linkedin</p></a>
      <a href="/" class="flex space-x-1 items-center hover:text-gray-400"><Icon icon="mdi:instagram" width="24" height="24" /><p>Instagram</p></a>
      <a href="/" class="flex space-x-1 items-center hover:text-gray-400"><Icon icon="mdi:twitter" width="24" height="24" /><p>Twitter</p></a>
      <a href="/" class="flex space-x-1 items-center hover:text-gray-400"><Icon icon="mdi:github" width="24" height="24" /><p>GitHub</p></a>
    </div>

    <div class="text-gray-500 text-sm flex flex-row items-center space-x-6">
      <p>&copy; {currentYear = new Date().getFullYear()} CometChat</p>
      <a href="/" class="hover:text-white">Terms of Use</a>
      <a href="/" class="hover:text-white">Privacy Policy</a>
    </div>
  </div>
</footer>
