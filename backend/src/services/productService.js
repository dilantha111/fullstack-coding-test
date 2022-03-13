const mysql = require('mysql2');

async function listProducts() {
  const connection = getConnection();
  const query = `SELECT pt.name as productName, c.name as customerName, delivery_status, delivery_address, estimated_delivery_date
  from product p left join product_type pt on p.product_type_id = pt.id left join customer c on p.customer_id = c.id;`;

  return new Promise((resolve, reject) => {
    connection.execute(query, (err, rows, fields) => {
      if (err) reject(err);

      resolve(rows);
    });
  });
}

async function udpateProductStatus(productId, status) {
  const connection = getConnection();
  const query = `UPDATE product SET delivery_status = ? where id = ?;`;

  return new Promise((resolve, reject) => {
    connection.execute(query, [status, productId], (err, rows, fields) => {
      if (err) reject(err);

      resolve(rows);
    });
  });
}

function getConnection() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'empta'
  });

  return connection;
}

module.exports = {
  listProducts,
  udpateProductStatus
};