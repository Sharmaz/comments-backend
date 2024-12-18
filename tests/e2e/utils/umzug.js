import { Umzug, SequelizeStorage } from 'umzug';
import sequelize from '../../../src/libs/sequelize';
// const sequelize = require('../../../src/libs/sequelize');

const umzug = new Umzug({
  migrations: { glob: './src/db/seeders/*.js'},
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: undefined,
});

const upSeed = async() => {
  try {
    await sequelize.sync({ force: true });
    await umzug.up();
  } catch (error) {
    console.error(error);
  }
};

const downSeed = async () => {
  await sequelize.drop();
}

export { upSeed, downSeed };
