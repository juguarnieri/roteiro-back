const Post = require("../models/Post");
const PostList = require("../models/PostList");
const lista = new PostList();


lista.addPost(new Post(5000, 760, "Palmeiras", "https://www.palmeiras.com"));
lista.addPost(new Post(3000, 20000, "Babi Cristina", "https://www.babiCris.com"));

const router = {
  getAllPosts: (req, res) => {
    res.json(lista.getAllPosts());
  },

  getPostById: (req, res) => {
    try {
      res.json(lista.getPostById(req.params.id));
    } catch (error) {
      res.status(404).json({ message: "Este post não existe!", error });
    }
  },

  addPost: (req, res) => {
    try {
      const { idUser, like, comment, description, image } = req.body;
      if (!idUser, !like, !comment, !description, !image) {
        throw new Error("É necessário preencher todos os campos para criar um post!");
      }
      const newPost = new Post(idUser, like, comment, description, image);
      lista.addPost(newPost);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: error.message, error });
    }
  },

  updatePost: (req, res) => {
    try {
      res.json(lista.updatePost(req.params.id, req.body));
    } catch (error) {
      res.status(404).json({ message: "Erro ao atualizar o usuário!", error });
    }
  },

  deletePost: (req, res) => {
    lista.deletePost(req.params.id);
    res.status(200).json({ message: "Post deletado com sucesso!", IdDeletado: req.params.id });
  }
};

module.exports = router;