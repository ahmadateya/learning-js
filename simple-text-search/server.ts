import app from './app';
const dotenv = require('dotenv');
dotenv.config();
export const PORT: number = 3000;

app.listen(PORT, () => {
    console.log(`Express server listening on port: ${PORT}`);
});
