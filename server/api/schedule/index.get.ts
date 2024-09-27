export default eventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const { user, secure } = await requireUserSession(event)

  if (!user && secure) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized',
    })
  }

  const response = await $fetch(`${runtimeConfig.API_URL}/shift`, {
    headers: {
      Authorization: `Token token="${secure?.authToken}"`,
    },

  })

  return response
})
