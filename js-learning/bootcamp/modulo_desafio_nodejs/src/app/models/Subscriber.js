import { Model } from 'sequelize';

class Subscriber extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Meetup, { foreignKey: 'meetup_id' });
  }
}

export default Subscriber;
