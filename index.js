import app from './src/app.js';
import sequelize from './src/database/database.js';

import './src/models/SoilSampleActivity.js';
import './src/models/FertilizationAreaActivity.js';

const PORT = 5173

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(PORT);
    console.log('Server is listening on port: ', PORT);
  } catch (error) {
    console.log('Unable to connect to the database: ', error);
  }
}

main();