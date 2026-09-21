const GITHUB_API = 'https://api.github.com'
const CONTRIBUTIONS_API = 'https://github-contributions-api.jogruber.de/v4'
const REVALIDATE = 3600

export interface GithubProfile {
   avatarUrl: string
   name: string
   bio: string | null
   followers: number
   publicRepos: number
   url: string
}

export interface ContributionDay {
   date: string
   count: number
   level: number
}

export interface Contributions {
   total: number
   days: ContributionDay[]
}

export const getGithubProfile = async (username: string): Promise<GithubProfile | null> => {
   try {
      const res = await fetch(`${GITHUB_API}/users/${username}`, {
         next: { revalidate: REVALIDATE },
      })
      if (!res.ok) return null

      const data = await res.json() as {
         avatar_url: string
         name: string
         bio: string | null
         followers: number
         public_repos: number
         html_url: string
      }

      return {
         avatarUrl: data.avatar_url,
         name: data.name,
         bio: data.bio,
         followers: data.followers,
         publicRepos: data.public_repos,
         url: data.html_url,
      }
   } catch {
      return null
   }
}

export const getContributions = async (username: string): Promise<Contributions | null> => {
   try {
      const res = await fetch(`${CONTRIBUTIONS_API}/${username}?y=last`, {
         next: { revalidate: REVALIDATE },
      })
      if (!res.ok) return null

      const data = await res.json() as {
         total?: { lastYear?: number }
         contributions?: ContributionDay[]
      }
      const days = data.contributions ?? []
      if (!days.length) return null

      return {
         total: data.total?.lastYear ?? days.reduce((sum, day) => sum + day.count, 0),
         days,
      }
   } catch {
      return null
   }
}
