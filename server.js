import express from 'express';
import cors from 'cors';

const app = express();
const  PORT = 3000;

app.use(cors());
app.use(express.json());


// start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
