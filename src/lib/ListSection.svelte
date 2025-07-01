<script>
  import { FaCoins, FaUserFriends, FaLaptopCode, FaClock, FaChalkboardTeacher, FaChartBar, FaBook, FaHeadset, FaMoneyBillWave } from 'svelte-icons/fa';

  const partnerItems = [
    {
      icon: FaCoins,
      title: "Free credits",
      desc: "Empowering partners to scale.",
    },
    {
      icon: FaUserFriends,
      title: "Revenue share",
      desc: "Get monthly recurring revenues when you refer clients.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Training and mentoring sessions",
      desc: "Enabling partners to deliver the best experience.",
    },
    {
      icon: FaLaptopCode,
      title: "Special developer access",
      desc: "Get an all-access account to build unlimited PoCs for your clients.",
    },
    {
      icon: FaClock,
      title: "Reduced time",
      desc: "Deliver your products much faster with our partners’ programs.",
    },
    {
      icon: FaChartBar,
      title: "Value addition to your users",
      desc: "We need a 2 line text here",
    },
    {
      icon: FaBook,
      title: "Knowledge sessions",
      desc: "Access to product and market sessions.",
    },
    {
      icon: FaHeadset,
      title: "On-demand support",
      desc: "Technical assistance for implementation.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Significant passive income",
      desc: "We need a 2 line text here",
    },
  ];
</script>

<section class="bg-[#0D0B1F] text-white px-6 md:px-16 py-16">
  <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    {#each partnerItems as item}
      <div class="items-start gap-[64px]">
        <div class="p-[10px] w-[38px] rounded-full bg-orange-800 text-white text-lg">
          <svelte:component this={item.icon} class="w-5 h-5" />
        </div>
        <div>
          <h3 class="font-semibold text-base mb-1">{item.title}</h3>
          <p class="text-gray-400 text-sm">{item.desc}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
