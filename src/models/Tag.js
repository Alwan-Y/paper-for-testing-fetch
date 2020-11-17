import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      const { Post } = models

      Tag.belongsToMany(Post, { through: 'PostTag' })
    }
  }

  Tag.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tag',
    timestamps: false,
  })

  return Tag
}
