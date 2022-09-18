import { Connection } from 'mongoose'

interface IMigratorOptions {
  templatePath?: string
  migrationsPath?: string
  uri: string
  collection?: string
  autosync: boolean
  cli?: boolean
  connection?: Connection
}

export default IMigratorOptions
