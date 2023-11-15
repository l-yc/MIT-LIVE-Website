import { members } from '$lib/data/members'
import { paginate } from '$lib/util'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let page = params.page ? parseInt(params.page) : 1
  let limit = 10

  const membersForPage = paginate(members, { limit, page })

  // if page doesn't exist, 404
  if (membersForPage.length === 0 && page > 1) {
    throw error(404, 'Page not found')
  }

  return {
    members: membersForPage,
    page,
    limit
  }
}
