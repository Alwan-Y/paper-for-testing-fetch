import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      const { Post } = models

      Author.hasMany(Post, { foreignKey: 'id' })
    }
  }

  Author.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: DataTypes.STRING,
    gender: {
      type: DataTypes.ENUM,
      values: ['m', 'f'],
    },
  }, {
    sequelize,
    modelName: 'Author',
    timestamps: false,
  })

  return Author
}

