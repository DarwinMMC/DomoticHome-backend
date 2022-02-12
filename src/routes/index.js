const fs = require('fs');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

/**
 * Remove extension of files.
 * @param {string} nameFile Name file.
 * @return {string} Name file without extension.
 */
function removeExtension(nameFile) {
  return (nameFile.split('.'))[0];
}

const files = fs.readdirSync(__dirname);

files.forEach((file) => {
  const name = removeExtension(file);
  if (name!=='index') {
    router.use(`/${name}`, require(`./${name}`));
  }
});

module.exports = router;
