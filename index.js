import express from "express";
import cors from "cors";
import helmet from "helmet";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
// for adding extra layers of security
zomato.use(helmet());
// this will help whle deplyment, at deployment it will handle error that occura at ports
zomato.use(cors());

zomato.get("/", (req, res) => {
    res.json({ message: "Setup Success !" });
}); 

zomato.listen(4000, () => console.log("Server is up and running"));