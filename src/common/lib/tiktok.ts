const TIKTOK_OEMBED = 'https://www.tiktok.com/oembed'
const TIKTOK_EMBED = 'https://www.tiktok.com/embed/v2'
const REVALIDATE = 3600

const BROWSER_UA =
   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'

export interface TikTokVideoInfo {
   thumbnailUrl: string | null
   views: number | null
}

const fetchWithRetry = async (url: string, init?: RequestInit, attempts = 3) => {
   for (let attempt = 0; attempt < attempts; attempt++) {
      try {
         const res = await fetch(url, init)
         if (res.ok) return res
      } catch {
         // retry below
      }
      await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1)))
   }
   return null
}

const getThumbnail = async (videoId: string): Promise<string | null> => {
   const res = await fetchWithRetry(`${TIKTOK_OEMBED}?url=https://www.tiktok.com/@dimaspfe/video/${videoId}`, {
      next: { revalidate: REVALIDATE },
   })
   if (!res) return null

   try {
      const data = await res.json() as { thumbnail_url?: string }
      return data.thumbnail_url ?? null
   } catch {
      return null
   }
}

const getViews = async (videoId: string): Promise<number | null> => {
   const res = await fetchWithRetry(`${TIKTOK_EMBED}/${videoId}`, {
      headers: { 'User-Agent': BROWSER_UA },
      next: { revalidate: REVALIDATE },
   })
   if (!res) return null

   try {
      const html = await res.text()
      const match = html.match(/"playCount":(\d+)/)
      return match ? Number(match[1]) : null
   } catch {
      return null
   }
}

export const getTikTokVideoInfo = async (videoId: string): Promise<TikTokVideoInfo> => {
   const [thumbnailUrl, views] = await Promise.all([
      getThumbnail(videoId),
      getViews(videoId),
   ])

   return { thumbnailUrl, views }
}
