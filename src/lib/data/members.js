import { browser } from '$app/environment'
import { load } from 'js-yaml'
import { readFileSync } from 'fs'

// we require some server-side APIs to parse all metadata
if (browser) {
  throw new Error(`members can only be imported server-side`)
}

export const members = [load(readFileSync('./members/index.yml'))]
	.map((memberList) => {
		return memberList.map((member) => {
			member.img = 'members/' + member.img;
			return member;
		});
	})[0]

/*export const members = Object.entries(import.meta.glob('/members/index.yml', { eager: true }))
  .map(([filepath, member]) => {
    const html = parse(member.default.render().html)

    return {
      ...member.metadata,

      // generate the slug from the file path
      slug: filepath
        .replace(/(\/index)?\.md/, '')
        .split('/')
        .pop(),

      // whether or not this file is `my-member.md` or `my-member/index.md`
      // (needed to do correct dynamic import in members/[slug].svelte)
      isIndexFile: filepath.endsWith('/index.md'),

      // format date as yyyy-MM-dd
      date: member.metadata.date
        ? format(
            // offset by timezone so that the date is correct
            addTimezoneOffset(new Date(member.metadata.date)),
            'yyyy-MM-dd'
          )
        : undefined,
    }
  })
  // sort by date
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  // add references to the next/previous member
  .map((member, index, allPosts) => ({
    ...member,
    next: allPosts[index - 1],
    previous: allPosts[index + 1]
  }))*/
