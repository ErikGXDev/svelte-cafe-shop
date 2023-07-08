<script lang="ts">
  import type { Category } from "$lib/categories";
  import products, { type Product } from "$lib/products";
  import CategoryList from "../components/CategoryList.svelte";
  import OrderedList from "../components/OrderedList.svelte";
  import ProductList from "../components/ProductList.svelte";

  /**
   * @type {Product[]}
   */
  $: ordered = [];
</script>

<div class="min-h-screen w-screen flex">
  <div class="border-r border-r-gray-300 w-1/5">
    <div class="sticky top-0">
      <h1
        class="font-droid text-6xl pt-4 pb-4 h-24 flex items-center justify-center dotted-bg"
      >
        Erik's Café
      </h1>
      <div class="border-b border-b-gray-300" />
      <CategoryList />
    </div>
  </div>
  <div class="w-3/5">
    <div
      class="h-24 flex flex-col items-center justify-center overflow-hidden font-semibold dotted-bg w-full bg-white"
    >
      <p class="text-6xl font-droid">Refreshness since 1989</p>
    </div>
    <div class="border-b border-b-gray-300" />

    <div class="overflow-scroll">
      <ProductList bind:ordered />
    </div>
  </div>
  <div class="border-l border-l-gray-300 w-1/4">
    <div class="sticky top-0 h-screen">
      <div class="relative h-full">
        <h1
          class="font-droid text-6xl pt-4 pb-4 h-24 flex items-center justify-center dotted-bg"
        >
          Ordered Items
        </h1>
        <div class="border-b border-b-gray-300" />
        <div class="h-full relative">
          <OrderedList bind:ordered />
        </div>
        <div
          class="absolute bottom-0 right-0 border-t border-t-gray-300 flex justify-between p-4 w-full dotted-bg"
        >
          <p class="text-2xl font-semibold">Total:</p>
          <p class="text-2xl font-bold">
            {ordered.reduce((total, { price }) => total + price, 0).toFixed(2)}€
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  :global(.dotted-bg) {
    background-image: radial-gradient(
      theme(colors.gray.300) 1px,
      transparent 0
    );
    background-size: 20px 20px;
    background-position: -1px -1px;
  }
</style>
