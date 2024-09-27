import type { User } from '#auth-utils'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const body = await readBody(event)

  try {
    const resp = await $fetch.raw(`${runtimeConfig.API_URL}/auth`, { method: 'POST', body })

    const authorizationHeader = resp.headers.get('Authorization') || resp.headers.get('authorization')

    if (!authorizationHeader) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized',
      })
    }

    const tokenMatch = authorizationHeader.match(/token=(\S+)/)

    if (!tokenMatch) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized',
      })
    }

    const token = tokenMatch[1]

    const response = await $fetch(`${runtimeConfig.API_URL}/profile`, {
      headers: {
        Authorization: `Token token="${token}"`,
      },

    })

    await setUserSession(event, {
      user: response as User,
      // Private data accessible on server/ routes
      secure: {
        authToken: token,
      },
      loggedInAt: new Date(),
    })

    return { success: true }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (error) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }
})
