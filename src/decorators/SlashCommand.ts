import SlashCommandEntity from '../entities/SlashCommandEntity'
import { Context } from '../types/SlashCommand'

export default function SlashCommand (context: Context) {
  return (target: Function) => {
    return class SlashCommand extends SlashCommandEntity {
      constructor () {
        super(context.scope, context.roles, context.options, target.prototype.run)
      }
    }
  }
}