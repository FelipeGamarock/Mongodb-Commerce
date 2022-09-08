db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: { $type: "timestamp" } } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: false, nome: true },
);