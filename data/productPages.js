const productPages = {
  gin: {
    title: "Gin Flavora",
    image: "/images/gin.jpg",
    category: "Distillate",
    abv: "43%",
    sugar: "No sugar",
    description:
      "A masterpiece of cold distillation, our gin captures the pure essence of nature in every drop. The bold aroma of juniper, the subtle sweetness of licorice, the warmth of coriander, and the delicate notes of cinnamon and lavender blend harmoniously with fennel, angelica, and the enchanting touch of calamus. A hint of cardamom adds spice, creating a uniquely balanced and aromatic spirit that embodies the true soul of gin.",
    usage: "Perfect for sipping neat or in classic cocktails.",
    cocktail: {
      name: "Negroni",
      ingredients: [
        { name: "Gin", amount: "30 ml" },
        { name: "Sweet Vermouth", amount: "30 ml" },
        { name: "Campari", amount: "30 ml" },
      ],
      instructions:
        "Stir all ingredients with ice and strain into a chilled glass. Garnish with an orange peel.",
    },
  },
  herbal: {
    title: "Herbal Liqueur",
    image: "/images/herbal.jpg",
    category: "Liqueur",
    abv: "55%",
    sugar: "20%",
    description:
      "A refined and intricate blend where bold herbal notes intertwine with delicate floral undertones and warm spice accents. Each sip reveals a harmonious balance of botanicals, citrus, and spices, leaving a deep and lingering finish. A true embodiment of craftsmanship for those who appreciate complexity and elegance.",
    usage: "Enjoy neat or as a base for creative herbal cocktails.",
    cocktail: {
      name: "Herbal Sour",
      ingredients: [
        { name: "Herbal Liqueur", amount: "50 ml" },
        { name: "Fresh Lemon Juice", amount: "20 ml" },
        { name: "Simple Syrup", amount: "10 ml" },
      ],
      instructions:
        "Shake all ingredients with ice and strain into a chilled glass. Garnish with a sprig of thyme.",
    },
  },
  "triple-sec": {
    title: "Triple Sec",
    image: "/images/tripleSec.jpg",
    category: "Liqueur",
    abv: "40%",
    sugar: "20%",
    description:
      "A harmonious blend of tradition and craftsmanship, Triple Sec is crafted through cold distillation using carefully selected ingredients. Its vibrant citrus aroma and rich flavor evoke the warmth of sun-drenched orchards. Each sip reveals a symphony of zesty notes, bringing freshness and brightness to every moment.",
    usage: "Ideal for use in Margaritas and other citrus-forward cocktails.",
    cocktail: {
      name: "Classic Margarita",
      ingredients: [
        { name: "Tequila", amount: "50 ml" },
        { name: "Triple Sec", amount: "25 ml" },
        { name: "Fresh Lime Juice", amount: "20 ml" },
      ],
      instructions:
        "Shake all ingredients with ice and strain into a salt-rimmed glass. Garnish with a lime wedge.",
    },
  },
  bergamot: {
    title: "Bergamot Liqueur",
    image: "/images/bergamot.jpg",
    category: "Liqueur",
    abv: "34%",
    sugar: "25%",
    description:
      "An elegant and refined liqueur crafted from natural ingredients using cold distillation. The distinctive citrus aroma and delicate bitterness of bergamot unfold in a perfectly balanced flavor profile. Each sip offers a sophisticated experience, unveiling the essence of fine liqueurs.",
    usage: "Perfect for refreshing and aromatic cocktails.",
    cocktail: {
      name: "Bergamot Spritz",
      ingredients: [
        { name: "Bergamot Liqueur", amount: "50 ml" },
        { name: "Prosecco", amount: "100 ml" },
        { name: "Soda Water", amount: "20 ml" },
      ],
      instructions:
        "Combine ingredients in a glass with ice. Garnish with a twist of bergamot peel.",
    },
  },
  elderflower: {
    title: "Elderflower Liqueur",
    image: "/images/elderflowers.jpg",
    category: "Liqueur",
    abv: "20%",
    sugar: "25%",
    description:
      "A delicate and aromatic liqueur crafted from handpicked elderflowers through the meticulous process of cold distillation. This method preserves the flower's natural elegance, resulting in a refined and sophisticated taste. Each sip is not just a pleasure but a true expression of craftsmanship, capturing the essence of fine liqueurs.",
    usage: "A versatile addition to light and refreshing cocktails.",
    cocktail: {
      name: "Elderflower Collins",
      ingredients: [
        { name: "Elderflower Liqueur", amount: "40 ml" },
        { name: "Gin", amount: "30 ml" },
        { name: "Soda Water", amount: "100 ml" },
      ],
      instructions:
        "Mix liqueur and gin in a glass with ice. Top with soda water and garnish with a lemon slice.",
    },
  },
  feijoa: {
    title: "Feijoa Distillate",
    image: "/images/feijoa.jpg",
    category: "Distillate",
    abv: "40%",
    sugar: "No sugar",
    description:
      "A pristine expression of nature, our feijoa distillate is crafted using advanced cold distillation technology. Each note captures the fruit's essence, delivering a uniquely fresh and vibrant taste experience. More than just a drink—it's the true soul of distillation.",
    usage: "Perfect as a strong base for creative cocktails.",
    cocktail: {
      name: "Feijoa Martini",
      ingredients: [
        { name: "Feijoa Distillate", amount: "50 ml" },
        { name: "Dry Vermouth", amount: "10 ml" },
        { name: "Orange Bitters", amount: "2 dashes" },
      ],
      instructions:
        "Stir all ingredients with ice and strain into a chilled martini glass. Garnish with a twist of orange peel.",
    },
  },
};

export default productPages;
