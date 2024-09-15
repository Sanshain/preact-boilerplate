// import { atom } from 'jotai'

// export const countAtom = atom(0)

import { proxy, useSnapshot } from 'valtio'

export const globalState = proxy({ count: 0, text: 'hello' })