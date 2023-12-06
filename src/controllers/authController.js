

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports = {
    register: async (req, res) => {
        const { username, password, property1, property2, property3, property4, property5, property6, property7 } = req.body;

        try {
            
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ error: 'Nome de usuário já em uso.' });
            }

            
            const newUser = new User({
                username,
                password,
                property1,
                property2,
                property3,
                property4,
                property5,
                property6,
                property7,
            });

            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newUser.password, salt);
            newUser.password = hashedPassword;

            
            const savedUser = await newUser.save();

            res.status(201).json(savedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao registrar o usuário.' });
        }
    },

    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ error: 'Credenciais inválidas.' });
            }

        
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Credenciais inválidas.' });
            }

            
            const token = jwt.sign({ userId: user._id }, 'secretpass', { expiresIn: '1h' });

            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao autenticar o usuário.' });
        }
    },
};



const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authController = {
  register: async (req, res) => {
    const { username, password } = req.body;

    try {
      
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Nome de usuário já em uso' });
      }

      
      const newUser = new User({ username, password });

      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newUser.password, salt);
      newUser.password = hashedPassword;

      
      await newUser.save();

      res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao registrar o usuário' });
    }
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    try {
    
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
      }

      
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Senha incorreta' });
      }

      
      const token = jwt.sign({ userId: user._id }, 'secretpass', { expiresIn: '1h' });

      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao autenticar o usuário' });
    }
  },
};

module.exports = {
    register: async (req, res) => {
        const { username, password, property1, property2, property3, property4, property5, property6, property7 } = req.body;

        try {
            
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ error: 'Nome de usuário já em uso.' });
            }

            
            const newUser = new User({
                username,
                password,
                property1,
                property2,
                property3,
                property4,
                property5,
                property6,
                property7,
            });

            
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newUser.password, salt);
            newUser.password = hashedPassword;

            
            const savedUser = await newUser.save();

            res.status(201).json(savedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao registrar o usuário.' });
        }
    },

    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ error: 'Credenciais inválidas.' });
            }

        
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ error: 'Credenciais inválidas.' });
            }

            
            const token = jwt.sign({ userId: user._id }, 'secretpass', { expiresIn: '1h' });

            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao autenticar o usuário.' });
        }
    },
};
