const getAllProducts = (req, res) => {
  throw new Error("dummy");
  res.send({ msg: "all products" });
};
const getAllStaticProducts = (req, res) => res.send({ msg: "static products" });

module.exports = { getAllProducts, getAllStaticProducts };
