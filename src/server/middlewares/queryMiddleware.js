
const charTable = [
  {id:0, pron:'a', hira:'a-h', kata:'a-k'},
  {id:1, pron:'i', hira:'i-h', kata:'i-k'},
  {id:2, pron:'u', hira:'u-h', kata:'u-k'},
  {id:3, pron:'e', hira:'e-h', kata:'e-k'},
  {id:4, pron:'o', hira:'o-h', kata:'o-k'},
];

export const queryAll = (req, res, next) => {
  res.charTable = charTable
  next()
}

export const queryChar = (req, res, next) => {
  res.char = charTable.filter(v => v.pron === req.params.pron)
  next()
}
