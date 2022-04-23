import { Model, Modifiers } from "objection";
import User from "../users/user.model";

export default class Invitation extends Model {
  id!: string;
  team!: string;
  status!: string;
  message?: string;

  senderId: string;
  sendingUser: User;
  receiverId: string;
  receivingUser: User;

  // Table name is the only required property.
  static tableName = "invitations";

  // This object defines the relations to other models. The relationMappings
  // property can be a thunk to prevent circular dependencies.
  static relationMappings = () => ({
    sendingUser: {
      relation: Model.HasOneRelation,
      modelClass: User,
      join: {
        from: "invitations.senderId",
        to: "users.id",
      },
    },

    receivingUser: {
      relation: Model.HasOneRelation,
      modelClass: User,
      join: {
        from: "invitations.receiverId",
        to: "users.id",
      },
    },
  });
}
