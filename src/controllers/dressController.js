const Dress = require('../models/Dress');

const dressController = {
  getAllDresses: async (req, res) => {
    try {
      const dresses = await Dress.find();
      res.status(200).json(dresses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar os vestidos.' });
    }
  },

  getDressById: async (req, res) => {
    const dressId = req.params.id;
    try {
      const dress = await Dress.findById(dressId);
      if (!dress) {
        return res.status(404).json({ error: 'Vestido não encontrado.' });
      }
      res.status(200).json(dress);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar o vestido.' });
    }
  },

  createDress: async (req, res) => {
    const { name, size, color, property1, property2, property3, property4, property5, property6, property7 } = req.body;
    const newDress = new Dress({
      name,
      size,
      color,
      property1,
      property2,
      property3,
      property4,
      property5,
      property6,
      property7,
    });

    try {
      const savedDress = await newDress.save();
      res.status(201).json(savedDress);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar o vestido.' });
    }
  },

  updateDress: async (req, res) => {
    const dressId = req.params.id;
    const updateData = req.body;

    try {
      const updatedDress = await Dress.findByIdAndUpdate(dressId, updateData, { new: true });
      if (!updatedDress) {
        return res.status(404).json({ error: 'Vestido não encontrado.' });
      }
      res.status(200).json(updatedDress);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao atualizar o vestido.' });
    }
  },

  deleteDress: async (req, res) => {
    const dressId = req.params.id;
    try {
      const deletedDress = await Dress.findByIdAndDelete(dressId);
      if (!deletedDress) {
        return res.status(404).json({ error: 'Vestido não encontrado.' });
      }
      res.status(200).json({ message: 'Vestido excluído com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir o vestido.' });
    }
  },
};

module.exports = dressController;


