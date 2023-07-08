<script lang="ts">
  import type { Product } from "$lib/products";
  import { afterUpdate, onMount } from "svelte";

  export let ordered: Product[];

  interface FormattedProduct {
    display: string;
    emoji: string;
    count: number;
    price: number;
  }

  let a: FormattedProduct[] = [];
  $: formattedOrder = [...a];

  function formatOrder() {
    const productCounts: { [key: string]: FormattedProduct } = {};

    ordered.forEach((order, i) => {
      let key = order.display;

      if (key in productCounts) {
        productCounts[key].count++;
      } else {
        productCounts[key] = {
          display: key,
          emoji: order.emoji,
          count: 1,
          price: order.price,
        };
      }
    });

    const formattedButNotAlphabeticallyOrderedYetAlsoSorryForTheLongVariableName =
      Object.values(productCounts).sort(function (a, b) {
        var textA = a.display.toUpperCase();
        var textB = b.display.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

    formattedOrder =
      formattedButNotAlphabeticallyOrderedYetAlsoSorryForTheLongVariableName;
  }

  onMount(formatOrder);

  afterUpdate(() => {
    formatOrder();
  });
</script>

<div class="flex flex-col justify-between h-full overflow-scroll">
  <li class="list-none text-lg">
    {#each formattedOrder as product, i}
      <ul
        class="border-b bg-white border-b-gray-300 font-semibold text-lg select-none"
      >
        <div class="h-full w-full text-start">
          <div class="p-4 flex justify-between gap-2">
            <div class="flex items-center gap-2">
              <div
                class="flex justify-between items-center border border-gray-300 rounded-md bg-white overflow-hidden w-24 h-8"
              >
                <button
                  class="px-2 border-r border-r-gray-300 hover:bg-neutral-50 active:bg-neutral-100 cursor-pointer"
                  on:click={(e) => {
                    const index = ordered.findIndex(
                      (order) => order.display == product.display
                    );
                    if (index > -1) {
                      ordered.splice(index, 1);
                      ordered = [...ordered];
                    }
                  }}
                >
                  -
                </button>
                <div class="px-3">{product.count}</div>
                <button
                  class="px-2 border-l border-l-gray-300 hover:bg-neutral-50 active:bg-neutral-100 cursor-pointer"
                  on:click={() => {
                    ordered.push({
                      display: product.display,
                      emoji: product.emoji,
                      price: product.price,
                    });
                    ordered = [...ordered];
                  }}
                >
                  +
                </button>
              </div>
              <p class="text-ellipsis flex items-center gap-1">
                <span class="text-2xl">{product.emoji}</span>
                {product.display}
              </p>
            </div>
            <div class="flex items-center">
              {(product.price * product.count).toFixed(2)}€
            </div>
          </div>
        </div>
      </ul>
    {/each}
  </li>
</div>
