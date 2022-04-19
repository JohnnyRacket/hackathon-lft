import { Model, Modifiers } from 'objection'
import User from './User.model'

export default class Invitations extends Model {
    id!: string
    team!: string
    status!: string
    message?: string

    senderId: string
    sendingUser: User
    receiverId: string
    receivingUser: User


    // Table name is the only required property.
    static tableName = 'invitations'

    // Optional JSON schema. This is not the database schema! Nothing is generated
    // based on this. This is only used for validation. Whenever a model instance
    // is created it is checked against this schema. http://json-schema.org/.
    static jsonSchema = {
        type: 'object',
        required: ['firstName', 'lastName'],

        properties: {
            id: { type: 'integer' },
            parentId: { type: ['string', 'null'] },
            firstName: { type: 'string', minLength: 1, maxLength: 255 },
            lastName: { type: 'string', minLength: 1, maxLength: 255 },
            team: { type: 'string' },

            address: {
                type: 'object',
                properties: {
                    street: { type: 'string' },
                    city: { type: 'string' },
                    zipCode: { type: 'string' },
                },
            },
        },
    };

    // This object defines the relations to other models. The relationMappings
    // property can be a thunk to prevent circular dependencies.
    static relationMappings = () => ({
        sendingUser: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'invitations.senderId',
                to: 'roles.name',
            },
        },

        receiverUser: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'invitations.receiverId',
                to: 'roles.name',
            },
        },
    })
}