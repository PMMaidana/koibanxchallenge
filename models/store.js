const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  name: { type: String, required: true},
  cuit: { type: String, required: true},
  concepts1: { type: Array, required: true},
  concepts2: { type: Array},
  concepts3: { type: Array},
  concepts4: { type: Array},
  concepts5: { type: Array},
  concepts6: { type: Array},
  currentBalance: { type: Number, required: true},
  active: { type: Boolean, required: true},
  lastSale: { type: Date, required: true}
}, {
  versionKey: false
});

StoreSchema.pre('save', async function (callback) {
  //completar de ser necesario
});

module.exports = mongoose.model('Store', StoreSchema);
