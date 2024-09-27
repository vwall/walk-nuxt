export default defineAppConfig({
  ui: {
    primary: 'sky',
    gray: 'cool',
    header: {
      height: '4rem',
      container:
        'flex items-center max-w-full justify-between gap-3 h-[--header-height]',
    },
    card: {
      header: {
        base: 'flex flex-wrap items-center justify-between',
      },
      body: {
        base: 'space-y-4s',
      },
    },
    footer: {
      top: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
        container: 'py-8 lg:py-16',
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
    page: {
      hero: {
        wrapper: 'lg:py-24',
      },
    },
    // dropdown: {
    //   width: 'w-full',
    //   popper: {
    //     strategy: 'absolute',
    //   },
    // },
  },
})
