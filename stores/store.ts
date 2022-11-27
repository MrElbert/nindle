import create from 'zustand'

type State = {
  accessToken: string
}

type Action = {
  setAccessToken: (firstName: State['accessToken']) => void
}

// Create your store, which includes both state and (optionally) actions
export const useStore = create<State & Action>((set) => ({
  accessToken: '',
  setAccessToken: (token) => set(() => ({ accessToken: token })),
}))