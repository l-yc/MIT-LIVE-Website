<script>
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import SocialLinks from '$lib/components/SocialLinks.svelte'
  import { avatar, bio, name } from '$lib/info.js'

  /** @type {import('./$types').PageData} */
  export let data
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8 pb-16">
  <!-- bio -->
  <section class="flex flex-col items-center gap-16 pt-8 pb-16">
    <div class="flex flex-col items-center w-full gap-6 rounded-lg">
      <img
        src={avatar}
        alt={name}
				data-sveltekit-prefetch 
        class="mx-auto rounded ring-2 ring-zinc-200 dark:ring-zinc-700"
      />
      <div class="flex gap-6">
        <SocialLinks />
      </div>
      <p class="text-base text-zinc-600 dark:text-zinc-400">
        {bio}
      </p>
      <p class="text-base text-zinc-600 dark:text-zinc-400">
				We're looking for singers, guitarists, pianists, bassists, drummers, or frankly any instrument you can think of!
			</p>
      <div class="flex gap-6">
        <!--<a 
          href="/members"
          class="
          bg-gradient-to-r from-teal-500 to-teal-600 dark:to-teal-400
          px-4 py-2 rounded cursor-pointer ring-zinc-200 dark:ring-zinc-700
          text-white
          ">
          Meet Us
        </a>-->
        <a 
          href="mailto:liveband-exec@mit.edu"
          class="
          bg-gradient-to-r from-teal-500 to-teal-600 dark:to-teal-400
          px-4 py-2 rounded cursor-pointer ring-zinc-200 dark:ring-zinc-700
          text-white
          ">
          Book Us
        </a>
      </div>
    </div>
  </section>
  <section class="w-full">
    <div class="flex items-center justify-between gap-4 mb-8">
      <h2 class="text-sm font-medium sm:text-base text-zinc-500 dark:text-zinc-400">
        News
      </h2>
      <a href="/posts" class="flex items-center gap-1 text-sm font-medium text-teal-500"
        >View All <ArrowRightIcon class="w-4 h-4" /></a
      >
    </div>
    <PostsList posts={data.posts} />
  </section>
</div>
