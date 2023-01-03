require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Product = require("./models/productModel");

// express app
const app = express();

// middleware
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.urlencoded({ extended: false }));

// set up view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// connet to bd
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//routes
app.get("/", (req, res) => {
  res.render("Home");
});

// INDEX // get all products
app.get("/products", async (req, res) => {
  Product.find({}, (err, allProducts) => {
    if (!err) {
      res.render("Index", {
        products: allProducts,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// NEW // get a form to create a new product
app.get("/products/new", (req, res) => {
  res.render("New");
});

// DELETE // delete a product
app.delete("/products/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, deletedProduct) => {
    if (!err) {
      res.redirect("/products");
    } else {
      res.send({ msg: err.message });
    }
  });
});

// UPDATE // modify a product
app.put("/products/:id", (req, res) => {
  console.log(req.body);
  if (req.body.inCart === "ADD TO CART") {
    Product.findByIdAndUpdate(
      req.params.id,
      { $inc: { inCart: 1 } },
      (err, updatedItem) => {
        res.redirect(`/products/${req.params.id}`);
      }
    );
  } else if (req.body.inCart === "-") {
    Product.findByIdAndUpdate(
      req.params.id,
      { $inc: { inCart: -1 } },
      (err, updatedItem) => {
        res.redirect(`/products/${req.params.id}`);
      }
    );
  } else if (req.body.inCart === "+") {
    Product.findByIdAndUpdate(
      req.params.id,
        { $inc: { inCart: 1} },
      (err, updatedItem) => {
        res.redirect(`/products/${req.params.id}`);
      }
    );
  } else {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedItem) => {
      res.redirect(`/products/${req.params.id}`);
    });
  }  
});


// EDIT // get a form to edit update a product
app.get("/products/:id/edit", (req, res) => {
  Product.findById(req.params.id, (err, editedProduct) => {
    if (!err) {
      res.render("Edit", { product: editedProduct });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// SHOW // get a single product
app.get("/products/:id", (req, res) => {
  Product.findById(req.params.id, (err, singleProduct) => {
    if (!err) {
      res.render("Show", {
        product: singleProduct,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

app.get("/products/collections/:id", async (req, res) => {
  Product.find({ category: req.params.id }, (err, collectionProducts) => {
    if (!err) {
      res.render("Index", {
        products: collectionProducts,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

app.get('/cart', async (req, res) => {
    Product.find({ inCart: { $gt: 0 } }, (err, cartProducts) => {
        if (!err) {
            res.render('Cart', {
                products: cartProducts
            })
        } else {
            res.send({ msg: err.message })
        }
    })
})




