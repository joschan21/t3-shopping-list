// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'
import { itemRouter } from './itemRouter'

export const appRouter = createRouter().transformer(superjson).merge('items.', itemRouter)

// export type definition of API
export type AppRouter = typeof appRouter
