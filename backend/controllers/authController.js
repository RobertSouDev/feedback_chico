const db = require('../db');
const jwt = require('jsonwebtoken');

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)

    try {
      const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
      console.log('Resultado da query:', rows);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      const user = rows[0];

      if (password !== user.password) {
        return res.status(401).json({ message: 'Senha incorreta.' });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({
        message: 'Login bem-sucedido!',
        token,
        user: { id: user.id, username: user.username },
      });
    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({ message: 'Erro interno no servidor.' });
    }
  },
};

module.exports = authController;
