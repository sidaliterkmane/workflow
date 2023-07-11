import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  personalNotes: g.string().optional(),
})

const Preferences = {}

export default config({
  schema: g
})
