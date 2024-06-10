'use server'

import { redis } from "@/lib/redis"

type APIError = {
  error: string
}

type APISuccess = {
  isProfanity: boolean
  score: number
  flaggedFor: string[] | undefined
}

export const checkProfanity = async ({ message }: { message: string }) => {
  try {
    if (message.trim().split(/\s+/).length <= 1) {
      return { error: 'Sila letakkan minimum 2 perkataan' }
    }

    if (message.trim().split(/\s+/).length > 35) {
      return {
        error:
          "Maksimum 35 perkataan sahaja",
      }
    }

    const res = await fetch('https://katakesat-api.codeaiman77.workers.dev/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })

    await redis.incr('served-requests')

    const json = await res.json()

    if (!res.ok) {
      const { error } = json as APIError
      return { error }
    }

    return json as APISuccess
  } catch (err) {
    return { error: 'Sila cuba lagi.' }
  }
}