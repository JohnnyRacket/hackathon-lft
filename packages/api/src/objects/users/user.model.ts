import { Model, Modifiers } from "objection";
import Role from "../roles/role.model";
import Skill from "../skills/skill.model";

export default class User extends Model {
  id!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  team?: string;
  createdAt: string;
  updatedAt: string;

  role?: Role;
  skills?: Skill[];

  // Table name is the only required property.
  static tableName = "users";

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  // static jsonSchema = {
  //     type: 'object',
  //     required: ['firstName', 'lastName'],

  //     properties: {
  //         id: { type: 'integer' },
  //         parentId: { type: ['string', 'null'] },
  //         firstName: { type: 'string', minLength: 1, maxLength: 255 },
  //         lastName: { type: 'string', minLength: 1, maxLength: 255 },
  //         team: { type: ['string', 'null'] },

  //         role: {
  //             type: 'object',
  //             properties: {
  //                 name: { type: 'string' },
  //             },
  //         },
  //         skills: {
  //             type: 'object',
  //             properties: {
  //                 name: { type: 'string' },
  //             },
  //         },
  //     },
  // }

  // Modifiers are reusable query snippets that can be used in various places.
  static modifiers: Modifiers = {
    // Our example modifier is a a semi-dumb fuzzy name match. We split the
    // name into pieces using whitespace and then try to partially match
    // each of those pieces to both the `firstName` and the `lastName`
    // fields.
    searchByName(query, name) {
      // This `where` simply creates parentheses so that other `where`
      // statements don't get mixed with the these.
      query.where((query) => {
        for (const namePart of name.trim().split(/\s+/)) {
          for (const column of ["firstName", "lastName"]) {
            query.orWhereRaw("lower(??) like ?", [column, namePart.toLowerCase() + "%"]);
          }
        }
      });
    },
  };

  // This object defines the relations to other models. The relationMappings
  // property can be a thunk to prevent circular dependencies.
  static relationMappings = () => ({
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: Role,
      join: {
        from: "users.roleName",
        to: "roles.name",
      },
    },

    skills: {
      relation: Model.ManyToManyRelation,
      modelClass: Skill,
      join: {
        from: "users.id",
        through: {
          from: "userSkills.userId",
          to: "userSkills.skillName",
        },
        to: "skills.name",
      },
    },
  });
}
