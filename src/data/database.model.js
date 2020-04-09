const { Product } = require('./product.model');
const { sequelize } = require('./sequelize');

/**
 * The Database helper that includes all functionalities related to the database and all of it's models.
 * @summary All database models should be registered in this class.
 * @summary All database models should be accessed only through this class as central point of database functionality.
 */
class Database {
  /**
   * The Product model that maps the `products table` in the database.
   */
  get Products() {
    return Product;
  }

  /**
   * A singleton instance of sequelize that will be used across the application.
   *
   * @summary It's important to not use any other instances of sequelize other than this instance unless you have more than one database.
   */
  get sequelize() {
    return sequelize;
  }

  /**
   * Drops the database tables if exist and recreate them with a seeding data.
   * If the db server isn't ready yet, it keeps try every 10 seconds until .
   */
  async initialize() {
    try {
      /**
       * Drop all tables if exist and re-create them.
       */
      await this.sequelize.sync({ force: true });

      const products = [
        {
          name: 'Samsung Galaxy S5',
          price: 4500,
        },
        {
          name: 'Samsung Galaxy S6',
          price: 5000,
        },
        {
          name: 'Huawei P10 Lite',
          price: 5200,
        },
        {
          name: 'Huawei P30',
          price: 6500,
        },
        {
          name: 'Huawei P30 Lite',
          price: 5800,
        },
      ];

      /* Save the new products to the database. */
      return this.Products.bulkCreate(products);
    } catch (error) {
      console.log(`Can't connect to the database, retrying im 30 second.`);

      /*
       * If the db server isn't ready yet, an error will occur.
       * Then we need to try again after some time.
       */
      setTimeout(() => {
        this.initialize();
      }, 10000);
    }
  }
}

module.exports.Database = Database;
