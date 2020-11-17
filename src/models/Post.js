import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      const { Author, Tag } = models

      Post.belongsTo(Author, { foreignKey: 'authorId' })
      Post.belongsToMany(Tag, { through: 'PostTag' })
    }
  }

  Post.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    authorId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Post',
    timestamps: false,
  })

  return Post
}
