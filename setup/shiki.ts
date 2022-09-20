import { defineShikiSetup } from '@slidev/types'

// https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
export default defineShikiSetup(() => {
  return {
    theme: {
      // dark: 'one-dark-pro',
      dark: 'dark-plus',
      light: 'light-plus',
    },
  }
})