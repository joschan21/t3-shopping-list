import { createRouter } from './context'
import { z } from 'zod'

export const itemRouter = createRouter()
  .mutation('addItem', {
    input: z.object({
      name: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
      const { name } = input

      const item = await ctx.prisma.shoppingItem.create({
        data: {
          name,
        },
      })

      return item
    },
  })

  .query('getAllItems', {
    resolve: async ({ ctx }) => {
      const items = await ctx.prisma.shoppingItem.findMany()
      return items
    },
  })

  .mutation('deleteItem', {
    input: z.object({
      id: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id } = input

      const item = await ctx.prisma.shoppingItem.delete({
        where: {
          id,
        },
      })

      return item
    },
  })

  .mutation('toggleChecked', {
    input: z.object({
      id: z.string(),
      checked: z.boolean(),
    }),
    resolve: async ({ input, ctx }) => {
      const { id, checked } = input

      const item = await ctx.prisma.shoppingItem.update({
        where: {
          id,
        },
        data: {
          checked,
        },
      })

      return item
    },
  })
