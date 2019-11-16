import Sequelize, { Model } from 'sequelize';

class Membership extends Model {
  static init(sequelize) {
    super.init(
      {
        plan_id: Sequelize.INTEGER,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Stundent, { foreignKey: 'student_id' });
  }
}

export default Membership;
