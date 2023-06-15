const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect("mongodb+srv://gowthamkbaalaji4:wd93zMsBtWzPRbCS@clustercorizon.eo7ynms.mongodb.net/", {useNewUrlParser: true});

var db = mongoose.connection;

const products = {
	productname: String,
	productprice: Number,
  	available: Number
}

const authentication = new mongoose.Schema({
	username: String,
	password: String
})

const collection = new mongoose.model("Collection1",authentication);

const Note = mongoose.model("Products", products);

app.get('/add-to-cart/product', (req, res) => {
	const productname = req.params.productname;
	productsCollection.updateOne(
		{ name: productname },
		{ $inc: { available: -1 } },
		(err, result) => {
		  	if (err) {
				console.error('Error updating quantity:', err);
				res.status(500).send('Error updating quantity');
				return;
		  	}
		  	else{
				res.send('Product added to cart successfully!');
		  	}
		}
	);
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/main.html'));
});

app.get('/signin',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/signin.html'));
});

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/signup.html'));
});

app.get('/cart',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/cart.html'));
});

app.post('/signup',(req,res)=>{
	const data = {
		username: req.body.username,
		password: req.body.password
	}
	collection.insertOne([data]);
	res.redirect('/signin');
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




