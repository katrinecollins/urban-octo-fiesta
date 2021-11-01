const { Model, DataTypes } = require("sequelize");
//const { Votes } = require(".");
const sequelize = require("../config/connections");

class Votes extends Model {}

Votes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "votes"
  }
);

module.exports = Votes;