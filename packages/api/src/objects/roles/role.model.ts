import { Model, Modifiers } from "objection";
import User from "../users/user.model";

export default class Role extends Model {
  name!: string;
  users?: User[];

  static tableName = "roles";
  static idColumn = "name";

  static relationMappings = () => ({
    users: {
      relation: Model.HasManyRelation,
      modelClass: User,
      join: {
        from: "roles.name",
        to: "users.id",
      },
    },
  });
}
