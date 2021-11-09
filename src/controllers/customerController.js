const controller = {};

controller.compras = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM users', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('lista', {
        data: customers
     });
    });
  });
};

controller.productos = (req, res) => {
  res.render('customers')
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO users set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM users WHERE id = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.detalle = (req, res) => {
  res.render('detalle')
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE users set ? where id = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
