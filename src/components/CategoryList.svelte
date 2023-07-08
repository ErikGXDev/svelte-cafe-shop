<script lang="ts">
  import categories, { type Category } from "$lib/categories";
</script>

<li class="list-none text-lg">
  {#each categories as category}
    <ul
      class="border-b border-b-gray-300 font-semibold text-1xl hover:bg-neutral-50 cursor-pointer"
    >
      <a href={"#" + category.slug} class="h-full w-full text-start">
        <div class="p-4">{category.name}</div></a
      >
    </ul>
  {/each}
</li>
