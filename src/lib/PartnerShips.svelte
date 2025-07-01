<script>
  import { FaCheckCircle, FaCodeBranch, FaRocket } from 'svelte-icons/fa';
  import Icon from '@iconify/svelte';

  const partnerships = [
    {
      icon: "material-symbols:check-circle",
      title: "Affiliate partner program",
      desc: `Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.`,
    },
    {
      icon: "uil:code-branch",
      title: "Technology partner program",
      desc: `Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It’s simple, safe and secure!`,
    },
    {
      icon: "mingcute:rocket-fill",
      title: "Start up growth program",
      desc: `We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.`,
    },
  ];
</script>

<section class="bg-white text-black py-20 px-6">
  <div class="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
    {#each partnerships as item}
      <div class="flex items-start gap-4">
        <div class="p-3 rounded-full bg-violet-100 text-violet-600 text-lg">
          <Icon icon={item.icon} class="w-6 h-6 text-violet-600" />
        </div>
        <div>
          <h3 class="font-semibold text-base mb-2">{item.title}</h3>
          <p class="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
