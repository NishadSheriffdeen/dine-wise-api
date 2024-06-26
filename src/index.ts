import express, {
  type Application,
  type Request,
  type Response,
} from 'express';

// Boot express
const app: Application = express();
const port = 5000;

// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Hello From Dine Wise' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
