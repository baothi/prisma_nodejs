import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();


//get all jokes
app.get('/', async (req: Request, res: Response) => {
  const jokes = await prisma.joke.findMany({
    include: { creator: true }
  });
  console.log("get all jokes : ", jokes)
  res.json({ jokes })
});

// create a joke
app.post('/', async (req: Request, res: Response) => {
  // const text = req.body.text;
  // const userId = req.body.userId;
  const joke = await prisma.joke.create({
    data: {
      text: "['hip','hip']",
      userId: "clfaw0q950000vp0syrqz9kv5"
    }
  })
  return res.json({ joke })

});
//get a single joke
app.get('/:joke_id', async (req: Request, res: Response) => {

});
//delete a single
app.delete('/:joke_id', async (req: Request, res: Response) => {

});


app.listen(3000)