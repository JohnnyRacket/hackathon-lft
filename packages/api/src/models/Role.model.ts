import { Model, Modifiers } from 'objection'
import User from './User.model'

export default class Role extends Model {
    name!: string
    users?: User[]

    static relationMappings = () => ({
        users: {
            relation: Model.HasManyRelation,
            modelClass: User,
            join: {
                from: 'roles.name',
                to: 'users.id',
            },
        }
    })
}