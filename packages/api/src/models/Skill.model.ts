import { Model, Modifiers } from 'objection'
import User from './User.model'

export default class Skill extends Model {
    name!: string
    users?: User[]

    static relationMappings = () => ({
        users: {
            relation: Model.ManyToManyRelation,
            modelClass: User,
            join: {
                from: 'skills.id',
                through: {
                    from: 'userSkills.skillName',
                    to: 'userSkills.userId',
                },
                to: 'users.name',
            },
        },
    })
}