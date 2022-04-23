import { Model, Modifiers } from "objection";
import User from "../users/user.model";

export default class Skill extends Model {
  name!: string;
  users?: User[];

  static tableName = "skills";
  static idColumn = "name";

  static relationMappings = () => ({
    users: {
      relation: Model.ManyToManyRelation,
      modelClass: User,
      join: {
        from: "skills.name",
        through: {
          from: "userSkills.skillName",
          to: "userSkills.userId",
        },
        to: "users.id",
      },
    },
  });
}
