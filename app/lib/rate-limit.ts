import { LRUCache } from 'lru-cache'

type Options = {
  interval: number
  uniqueTokenPerInterval: number
}

export function createRateLimiter(options?: Partial<Options>) {
  const {
    interval = 60 * 1000, // 1 minute
    uniqueTokenPerInterval = 500, // Max users per interval
  } = options || {}

  const tokenCache = new LRUCache<string, number[]>({
    max: uniqueTokenPerInterval,
    ttl: interval,
  })

  return {
    check: (token: string, limit: number = 3) => {
      const tokenCount = tokenCache.get(token) || [0]
      if (tokenCount[0] === 0) {
        tokenCache.set(token, tokenCount)
      }
      tokenCount[0] += 1

      if (tokenCount[0] > limit) {
        throw new Error('Rate limit exceeded')
      }
    },
  }
}

// Create a default rate limiter instance
export const limiter = createRateLimiter()
