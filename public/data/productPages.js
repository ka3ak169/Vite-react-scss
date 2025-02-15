const productPages = {
  gin: {
    title: "Gin Flavora",
    image: "/images/new_image/O1A8779.jpg",
    category: "Distillate",
    abv: "43%",
    sugar: "No sugar",
    description: "An exquisite handcrafted gin with a delicate balance of botanicals. Its crisp and refreshing taste makes it a versatile choice for cocktails or enjoying neat.",
    usage: "Perfect for sipping neat or in classic cocktails.",
    cocktail: {
      name: "Negroni",
      ingredients: [
        { name: "Gin", amount: "30 ml" },
        { name: "Sweet Vermouth", amount: "30 ml" },
        { name: "Campari", amount: "30 ml" }
      ],
      instructions: "Stir all ingredients with ice and strain into a chilled glass. Garnish with an orange peel."
    }
  },
  herbal: {
    title: "Herbal Liqueur",
    image: "/images/new_image/O1A8824new.png",
    category: "Liqueur",
    abv: "55%",
    sugar: "20%",
    description: "A rich and aromatic herbal liqueur, bursting with complex flavors and a velvety texture.",
    usage: "Enjoy neat or as a base for creative herbal cocktails.",
    cocktail: {
      name: "Herbal Sour",
      ingredients: [
        { name: "Herbal Liqueur", amount: "50 ml" },
        { name: "Fresh Lemon Juice", amount: "20 ml" },
        { name: "Simple Syrup", amount: "10 ml" }
      ],
      instructions: "Shake all ingredients with ice and strain into a chilled glass. Garnish with a sprig of thyme."
    }
  },
  "triple-sec": {
    title: "Triple Sec",
    image: "/images/new_image/O1A8939new.jpg",
    category: "Liqueur",
    abv: "40%",
    sugar: "20%",
    description: "A classic orange-flavored liqueur, perfect for brightening up cocktails with its zesty and sweet notes.",
    usage: "Ideal for use in Margaritas and other citrus-forward cocktails.",
    cocktail: {
      name: "Classic Margarita",
      ingredients: [
        { name: "Tequila", amount: "50 ml" },
        { name: "Triple Sec", amount: "25 ml" },
        { name: "Fresh Lime Juice", amount: "20 ml" }
      ],
      instructions: "Shake all ingredients with ice and strain into a salt-rimmed glass. Garnish with a lime wedge."
    }
  },
  bergamot: {
    title: "Bergamot Liqueur",
    image: "/images/new_image/O1A8838new.png",
    category: "Liqueur",
    abv: "34%",
    sugar: "25%",
    description: "A sophisticated cocktail liqueur with bright and aromatic bergamot notes.",
    usage: "Perfect for refreshing and aromatic cocktails.",
    cocktail: {
      name: "Bergamot Spritz",
      ingredients: [
        { name: "Bergamot Liqueur", amount: "50 ml" },
        { name: "Prosecco", amount: "100 ml" },
        { name: "Soda Water", amount: "20 ml" }
      ],
      instructions: "Combine ingredients in a glass with ice. Garnish with a twist of bergamot peel."
    }
  },
  elderflower: {
    title: "Elderflower Liqueur",
    image: "/images/new_image/O1A8837new.png",
    category: "Liqueur",
    abv: "20%",
    sugar: "25%",
    description: "A sweet and delicate liqueur with the enchanting floral aroma of elderflowers.",
    usage: "A versatile addition to light and refreshing cocktails.",
    cocktail: {
      name: "Elderflower Collins",
      ingredients: [
        { name: "Elderflower Liqueur", amount: "40 ml" },
        { name: "Gin", amount: "30 ml" },
        { name: "Soda Water", amount: "100 ml" }
      ],
      instructions: "Mix liqueur and gin in a glass with ice. Top with soda water and garnish with a lemon slice."
    }
  },
  feijoa: {
    title: "Feijoa Distillate",
    image: "/images/new_image/O1A8836new.png",
    category: "Distillate",
    abv: "40%",
    sugar: "No sugar",
    description: "A unique distillate crafted from fresh feijoa fruits, capturing their aromatic and tangy essence.",
    usage: "Perfect as a strong base for creative cocktails.",
    cocktail: {
      name: "Feijoa Martini",
      ingredients: [
        { name: "Feijoa Distillate", amount: "50 ml" },
        { name: "Dry Vermouth", amount: "10 ml" },
        { name: "Orange Bitters", amount: "2 dashes" }
      ],
      instructions: "Stir all ingredients with ice and strain into a chilled martini glass. Garnish with a twist of orange peel."
    }
  }
};

export default productPages;
