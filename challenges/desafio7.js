db.produtos.find({
  $and: [
    { vendidos: { $ne: 50 } },
    { tags: { $exists: false } },
  ],
}, { _id: false, nome: true, vendidos: true })
.sort({ vendidos: 1 });