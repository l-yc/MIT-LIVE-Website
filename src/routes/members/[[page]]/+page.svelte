<script>
  import { name } from '$lib/info.js'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'

  /** @type {import('./$types').PageData} */
  export let data

  $: isFirstPage = data.page === 1
  $: hasNextPage = data.members[data.members.length - 1]?.previous
</script>

<svelte:head>
  <title>{name} | Posts</title>
</svelte:head>

<div class="flex flex-col flex-grow">
  <header class="pt-4">
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
			Members
    </h1>
    <p class="mt-6"></p>
  </header>

  <div class="mt-16 sm:mt-20">
		<!--{JSON.stringify(data.members)}-->
			<!--<PostsList posts={data.posts} />-->
		<ul class="grid items-center grid-cols-4 gap-8">
			{#each data.members as member}
				<li class="flex flex-col items-center">
					<!--<PostDate class="flex-col hidden md:flex text-sm" {member} />-->
					<img src={member.img} alt={member.name} class="rounded" />
					<h2 class="font-bold">{member.name}</h2>
					<h3>{member.role}</h3>
					<!--<h3>{member.class}</h3>-->

					<p>{member.bio}</p>
				</li>
			{/each}
		</ul>
  </div>

  <!-- pagination -->
  <!--<div class="flex items-center justify-between pt-16 pb-8">
    {#if !isFirstPage}
      <a href={`/posts/${data.page - 1}`} data-sveltekit-prefetch>
        <ArrowLeftIcon class="w-4 h-4" />
        Previous
      </a>
    {:else}
      <div />
    {/if}

    {#if hasNextPage}
      <a href={`/posts/${data.page + 1}`} data-sveltekit-prefetch
        >Next
        <ArrowRightIcon class="w-4 h-4" />
      </a>
    {/if}
  </div>-->
</div>

<style>
  a {
    @apply flex items-center gap-2 font-medium text-zinc-700;
  }

  :global(.dark) a {
    @apply text-zinc-300;
  }
</style>
