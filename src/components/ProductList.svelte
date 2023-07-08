<script lang="ts">
  import type { Category } from "$lib/categories";
  import products, { type Product } from "$lib/products";
  import categories from "$lib/categories";

  export let ordered: Product[];
</script>

<div class="px-8 pt-8 flex flex-col gap-8 mb-32">
  {#each categories as category}
    <section id={category.slug}>
      <h2 class="text-3xl font-semibold mb-8">{category.name}</h2>

      <li
        class="list-none grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 mb-2"
      >
        {#each products[category.slug] as product}
          <ul
            class="border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 active:bg-gray-100 select-none"
          >
            <button
              on:click={() => {
                ordered = [...ordered, product];
              }}
              class="px-2 py-4 flex items-center justify-center min-w-full h-full"
            >
              <div class="flex flex-col items-center">
                <p class="text-4xl">{product.emoji}</p>
                <h2 class="text-xl font-semibold">{product.display}</h2>
              </div>
            </button>
          </ul>
        {/each}
      </li>
    </section>
  {/each}
</div>
