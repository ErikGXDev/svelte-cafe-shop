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

<div class="min-h-screen h-screen max-h-screen w-screen flex overflow-x-hidden">
  <div class="border-r border-r-gray-300 w-1/5">
    <h1
      class="font-droid text-6xl pt-4 pb-4 h-24 flex items-center justify-center dotted-bg"
    >
      Erik's Café
    </h1>
    <div class="border-b border-b-gray-300" />
    <CategoryList />
  </div>
  <div class="w-3/5 relative h-screen overflow-scroll">
    <div
      class="h-24 flex flex-col items-center justify-center overflow-hidden dotted-bg w-full bg-white"
    >
      <p class="text-6xl font-droid">Refreshness since 1989</p>
    </div>
    <div class="border-b border-b-gray-300" />
    <ProductList bind:ordered />
  </div>
  <div class="border-l border-l-gray-300 w-1/4 h-screen relative">
    <h1
      class="font-droid text-6xl pt-4 pb-4 h-24 flex items-center justify-center dotted-bg"
    >
      Ordered Items
    </h1>
    <div class="border-b border-b-gray-300" />
    <OrderedList bind:ordered />
    <div
      class="absolute bottom-0 right-0 border-t border-t-gray-300 p-4 flex flex-col gap-2 w-full dotted-bg"
    >
      <p class="text-neutral-700">
        You may only order 10 items. ({ordered.length}/10)
      </p>
      <div class="flex justify-between">
        <p class="text-2xl font-semibold">Total:</p>
        <p class="text-2xl font-bold">
          {ordered.reduce((total, { price }) => total + price, 0).toFixed(2)}€
        </p>
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
