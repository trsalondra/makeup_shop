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
      { $inc: { inCart: 1 } },
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

app.get("/cart", async (req, res) => {
  Product.find({ inCart: { $gt: 0 } }, (err, cartProducts) => {
    if (!err) {
      res.render("Cart", {
        products: cartProducts,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

const manyProducts = [
  {
    displayName: "obsinian",
    description: "Rich Black Eyeliner Pencil.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-fullspectrum-eyeliner-obsidian-closeup-webphoto_900x.jpg",
    category: "eye",
    subCategory: "eyeliner pencil",
    price: "10.89",
    quantity: 4,
    inCart: 2,
  },
  {
    displayName: "desire",
    description:
      "Deep marsala blush. This shade is perfect for caramel to deep skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/MGR-blush-desire-assembled-webphoto_900x.jpg",
    category: "face",
    subCategory: "blush",
    price: "9.99",
    quantity: 50,
    inCart: 2,
  },
  {
    displayName: "summer fling",
    description:
      "Deep terracotta blush. This shade is perfect for caramel to deep skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/MGR-blush-summerfling-assembled-webphoto_900x.png",
    category: "face",
    subCategory: "blush",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "passion",
    description:
      "Light pink blush. This shade is perfect for fair to medium skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/MGR-blush-passion-assembled-webphoto_900x.jpg",
    category: "face",
    subCategory: "blush",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "electrify",
    description:
      "Cream base highlighter with butter yellow duochrome reflects. This shade is perfect for medium skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-highlighter-electrify-assembled-web_900x.jpg",
    category: "face",
    subCategory: "highlighter",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "rekindle",
    description:
      "Rose gold highlighter. This shade is perfect for medium skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-highlighter-rekindle-assembled-web_900x.jpg",
    category: "face",
    subCategory: "highlighter",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "ignite",
    description:
      "Golden bronze highlighter. This shade is perfect for caramel skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-highlighter-ignite-assembled-web_900x.jpg",
    category: "face",
    subCategory: "highlighter",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "tawny",
    description:
      "Warm medium brown bronzer. This shade is perfect for medium skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/MGR-bronzers-tawny-assembled-webphoto_900x.jpg",
    category: "face",
    subCategory: "bronzer",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "burnished",
    description:
      "Warm deep brown bronzer. This shade is perfect for caramel skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/MGR-bronzers-burnished-assembled-webphoto_900x.jpg",
    category: "face",
    subCategory: "bronzer",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "sunkissed",
    description:
      "Warm light brown bronzer. This shade is perfect for porcelain to fair skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/MGR-bronzers-sunkissed-assembled-webphoto_900x.jpg",
    category: "face",
    subCategory: "bronzer",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "sangria",
    description: "Berry lip glaze. This shade is perfect for all skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-healinglipglaze-sangria-web_fd6862fe-8893-45aa-a4b9-d86554f595cd_900x.jpg",
    category: "lip",
    subCategory: "lip gloss",
    price: "4.99",
    quantity: 7,
    inCart: 1,
  },
  {
    displayName: "pink bubbly",
    description:
      "Pink lip glaze. This shade is the perfect for all skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/web-lip-glaze-pink-bubbly_900x.jpg",
    category: "lip",
    subCategory: "lip gloss",
    price: "4.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "creamsicle delight",
    description:
      "Nude lip glaze. This shade is the perfect for all skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/web-lip-glaze-creamsicle-delight_900x.jpg",
    category: "lip",
    subCategory: "lip gloss",
    price: "4.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "matrix color palette",
    description:
      "The Matrix System color palette includes 28 matte eyeshadows. 7 columns of brilliant colors ~ each column contains four shades of the same hue designed to give you a variety of shades to create color combinations. Compliments all eye colors and skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-colormatrixmegavault-open-web-updated_900x.jpg",
    category: "palette",
    subCategory: "",
    price: "124.99",
    quantity: 5,
    inCart: 0,
  },
  {
    displayName: "matrix neutral palette",
    description:
      "The Matrix System Neutral palette includes 28 eyeshadows. 7 columns of neutral shades ~ each column contains four shades of the same hue designed to give you a variety of shades to create color combinations. Compliments all eye colors and skin tones.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-neutralmatrixmegavault-open_900x.jpg?v=1619701131",
    category: "palette",
    subCategory: "",
    price: "124.99",
    quantity: 10,
    inCart: 1,
  },
  {
    displayName: "angled stippling brush",
    description:
      "The Angled Stippling Brush has an angled tip for optimal application and precision. Applies both liquid or cream foundations fast and streak free. The large quantity of bristles picks up just the right amount of product, evenly dispersing it onto the skin for an airbrushed finish. The size and angled tip fit perfectly around the eyes, nose, edges of the face, and along the hairline for precise and flawless coverage.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-brushes-angledstippling-web-photo-02_900x.jpg",
    category: "tool",
    subCategory: "",
    price: "16.49",
    quantity: 50,
    inCart: 1,
  },
  {
    displayName: "face buffer brush",
    description:
      "Buff it out! Designed for buffing powder into the skin, buffing out any harsh Blush, Bronzer - and/or foundation lines, and leaving your skin looking naturally flawless. This versatile brush also works well softening the edges of contour lines, or doubling as a Blush - brush in a pinch, adding Blush - to the apples of your cheeks. The soft yet firm (synthetic) bristles are densely packed for optimal buffing power. The rounded edges are ideal for flawless blending and working around the nose/eyes areas of the face. Once you've worked with this brush and it's many uses, you won't be able to imagine your collection without it!",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-brushes-facebufferbrush-web-photo-02_900x.jpg",
    category: "tool",
    subCategory: "",
    price: "16.49",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "round blending sponge - raspberry",
    description:
      "Create flawless looks with our Round Blending Sponge. Our latex-free sponge works great with blush, bronzers, highlighters, primers, concealers, and foundations.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/beauty-blender-raspberry-round-01_900x.jpg",
    category: "tool",
    subCategory: "",
    price: "5.99",
    quantity: 50,
    inCart: 1,
  },
  {
    displayName: "eyelash curcler",
    description:
      "The Makeup Geek Eyelash Curler is designed to fit all eye shapes and sizes. Its technical design allows for each lash to be lifted and curled within seconds. The super-soft silicone pads and durable structure eliminates tugging, pulling, and pinching allowing you to curl your lashes without damage to the natural lash. Pair with our Extension Effect Mascara to keep your lashes perfectly curled all day!",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-eyelashcurler-web-photo-01_900x.png",
    category: "tool",
    subCategory: "",
    price: "7.89",
    quantity: 47,
    inCart: 0,
  },
  {
    displayName: "concealer brush",
    description:
      "The Concealer Brush is the perfect go-to brush for tackling redness and covering dark circles in delicate areas. This allows you to cover any imperfections while leaving a smooth flawless finish. The full, soft bristles allow you to apply the right amount of product and simply blend for the perfect coverage.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-brushes-concealerbrush-web-photo-02_076f2667-c2bb-4ad8-acbe-e419aa4fc609_900x.jpg",
    category: "tool",
    subCategory: "",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "angled brush",
    description:
      "The Defined Crease Brush is designed to precisely and evenly deliver products to the area of application. We love this brush for adding depth and definition to the crease without over blending.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-brushes-definedcreasebrush-web-photo-02_900x.jpg",
    category: "tool",
    subCategory: "",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "soft dome brush",
    description:
      "The Soft Dome Brush is the ultimate multi-talented brush. Its soft bristles are perfect for picking up the desired amount of product and buffing out harsh lines. Meanwhile, its dome shape allows for easy blending and is perfect for setting concealer.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-brushes-softdomebrush-web-photo-02_900x.jpg",
    category: "tool",
    subCategory: "",
    price: "9.99",
    quantity: 50,
    inCart: 1,
  },
  {
    displayName: "outer v brush",
    description:
      "The Outer V Brush is designed to specifically apply pigment directly to the outer corner of the eye in a V-like shape, otherwise known as the Outer V. We love this brush for adding defined lines, depth, and dimension to your looks. Our favorite brush for blending and feathering eyeshadows to create the perfect smoky eye look!",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-brushes-outervbrush-web-photo-02_900x.jpg",
    category: "tool",
    subCategory: "",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    _id: "639b5c5bea4401f3968c87b7",
    displayName: "multi-purpose eye brush",
    description:
      "The Multi-Purpose Eye Brush creates a showstopping finish. Its perfect-sized paddle allows you to shade, smudge, and diffuse edges creating the perfect finished look. This brush diffuses high color payoff and effortless blending.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-brushes-multipurposebrush-web-photo-02_900x.jpg?v=1641390057",
    category: "tool",
    subCategory: "",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "dual-ended brow brush",
    description:
      "The Dual-Ended Brow Brush is the must-have tool for any collection. It has serious brow-shaping power for creating arches, defining tails, and adding fullness to your brows. One side is a firm, thin angled brush that defines brows with precision for a flawless finish. The other side is a spoolie perfect for managing brow shape and dispersing products.",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-brushes-dualendedbrush-web-photo-03_900x.jpg",
    category: "tool",
    subCategory: "",
    price: "9.99",
    quantity: 50,
    inCart: 0,
  },
  {
    displayName: "espresso",
    description: "Rich Chocolate Brown Eyeliner Pencil. ",
    imageLink:
      "https://cdn.shopify.com/s/files/1/2130/2551/products/mgr-fullspectrum-eyeliner-espresso-closeup-webphoto_600x.jpg?v=1615207838",
    category: "eye",
    subCategory: "eye pencil",
    price: "10.89",
    quantity: 65,
    inCart: 0,
  },
];

// Product.insertMany(manyProducts)
//   // if database transaction succeeds
//   .then((tweets) => {
//     console.log(tweets);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     mongoose.connection.close();
//   });
