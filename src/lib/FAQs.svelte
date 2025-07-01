<script>
  import Icon from "@iconify/svelte";

  let openIndex = 0; // First one open

  const faqs = [
    {
      question: "This is a frequently asked question?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maecenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa.",
    },
    {
      question: "This is a frequently asked question?",
      answer: "",
    },
    {
      question:
        "This is a very long frequently asked question about our services with more than one line?",
      answer: "",
    },
    {
      question: "This is a frequently asked question?",
      answer: "",
    },
    {
      question: "This is a question?",
      answer: "",
    },
    {
      question: "This is a question?",
      answer: "",
    },
  ];

  // @ts-ignore
  const toggleFaq = (index) => {
    openIndex = openIndex === index ? null : index;
  };
</script>

<section class="bg-[#FAF8FF] py-20 px-4 text-black text-center">
  <div class="max-w-3xl mx-auto">
    <p class="text-sm font-semibold text-orange-500 mb-2">FAQ’s</p>
    <h2 class="text-3xl md:text-4xl font-bold mb-10">
      We want to help you <br /> with all your doubts
    </h2>

    <div class="space-y-4 text-left">
      {#each faqs as faq, index}
        <button
          class="w-full bg-white rounded-xl px-6 py-4 shadow-sm cursor-pointer transition"
          on:click={() => toggleFaq(index)}
        >
          <div class="flex justify-between items-center gap-4">
            <h3
              class="flex-1 font-medium text-base {openIndex === index
                ? 'font-semibold'
                : ''}"
            >
              {faq.question}
            </h3>
            <Icon
              icon="mdi:chevron-down"
              class="w-6 h-6 flex-shrink-0 transform transition-transform duration-300 {openIndex ===
              index
                ? 'rotate-180'
                : ''}"
            />
          </div>

          {#if openIndex === index && faq.answer}
            <p class="mt-3 text-sm text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          {/if}
        </button>
      {/each}
    </div>
  </div>
</section>
