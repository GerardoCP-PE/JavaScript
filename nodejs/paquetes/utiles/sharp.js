const sharp = require('sharp')
sharp('voucher.png')
.resize(40)
.toFile('resize.png');