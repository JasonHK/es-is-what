// A custom ts-node register script is required due to tsconfig.json is not stored at the root
// directory.
require("ts-node").register({ dir: __dirname });
