import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Red Velvet Cake",
    description:
      "Dreamy creamy red velvet cake with cheese cream & white chocolate garnish on top is finally here! From its flaky, red velvet crumbs on its sides to its creamy crown, everything about this cake is sure to leave you drooling.",
    price: 649,
    discount: 50,
    categoryName: "CAKES",
    image: "assets/product-red-velvet-cake.webp",
    rating: 5,
    tag: "BESTSELLER",
    careInstructions: `Store cream cakes in a refrigerator.
    Fondant cakes should be stored in an air conditioned environment.
    Slice and serve the cake at room temperature and make sure it is not exposed to heat.
    Use a serrated knife to cut a fondant cake.
    Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.
    Please check the placement of these items before serving them to small children.
    The cake should be consumed within 24 hours.
    Enjoy your cake!`,
    deliveryInformation: `Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.
    The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
    Since cakes are perishable in nature, we attempt delivery of your order only once. The delivery cannot be redirected to any other address.
    This product is hand delivered and will not be delivered along with courier products.`,
  },
  {
    _id: uuid(),
    title: "Ravishing Truffle Chocolate Cake",
    description:
      "Enriched with the finest exotic chocolates, this delicious cake is garnished with white fondant, chocolate sponge crumb and dusted with cocoa powder.",
    price: 699,
    discount: 50,
    categoryName: "CAKES",
    image: "assets/ravishing-truffle-chocolate-cake.webp",
    rating: 4.4,
    tag: "",
    careInstructions: `Store cream cakes in a refrigerator.
    Fondant cakes should be stored in an air conditioned environment.
    Slice and serve the cake at room temperature and make sure it is not exposed to heat.
    Use a serrated knife to cut a fondant cake.
    Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.
    Please check the placement of these items before serving them to small children.
    The cake should be consumed within 24 hours.
    Enjoy your cake!`,
    deliveryInformation: `Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.
    The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
    Since cakes are perishable in nature, we attempt delivery of your order only once. The delivery cannot be redirected to any other address.
    This product is hand delivered and will not be delivered along with courier products.`,
  },
  {
    _id: uuid(),
    title: "Choco Chip Truffle N Kit Kat Delight Pastries",
    description:
      "Make the best impressions on your sweet tooth loved ones on special occasions with a lip-smacking chocolate chip truffle Kit Kat pastries. These heart-warming gift comes in a salivating arrangement in three parts that has two pastries decorated with Chocolate chips, truffle, and Kit Kat Bars.",
    price: 649,
    discount: 25,
    categoryName: "PASTRIES",
    image: "assets/choco-chip-truffle-n-kitkat-delight-pastries.webp",
    rating: 3.3,
    tag: "",
    careInstructions: `Store pastry in a refrigerator. Serve the pastry at room temperature and make sure it is not exposed to heat.
    The pastry should be consumed within 24 hours.
    Enjoy your pastry!`,
    deliveryInformation: `Every pastry we offer is handcrafted and since each chef has his/her own way of baking and designing a pastry, there might be slight variation in the product in terms of design and shape.
    The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
    Since pastries are perishable in nature, we attempt delivery of your order only once.
    The delivery cannot be redirected to any other address.
    This product is hand delivered and will not be delivered along with courier products.`,
  },
  {
    _id: uuid(),
    title: "Red Velvet Single Jar Cake",
    description:
      "Nothing matches to the goodness of a delectable red velvet jar cake and when it comes as a jar cake, it is sure to spread happiness and other good feelings to your loved ones. So, what's the wait for? Be it, any special occasion turn it into the best possible one by celebrating it over a rich, velvety smooth jar cake, like this.",
    price: 149,
    discount: 50,
    categoryName: "JAR DESERTS",
    image: "assets/red-velvet-single-jar-cake.webp",
    rating: 2.4,
    tag: "BESTSELLER",
    careInstructions: "",
    deliveryInformation: `Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.
    The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
    Since cakes are perishable in nature, we attempt delivery of your order only once. The delivery cannot be redirected to any other address.
    This product is hand delivered and will not be delivered along with courier products.`,
  },
  {
    _id: uuid(),
    title: "Chocolaty Creamy Round Cake",
    description:
      "This round chocolaty cake is the perfect treat for someone who is absolutely in love with chocolate cakes. This cake covered in rich chocolate ganache and decorated with chocolate shavings is the best gift one can have on their special day.",
    price: 699,
    discount: 25,
    categoryName: "CAKES",
    image: "assets/chocolaty-creamy-round-cake.webp",
    rating: 4.3,
    tag: "",
    careInstructions: `Store cream cakes in a refrigerator.
    Fondant cakes should be stored in an air conditioned environment.
    Slice and serve the cake at room temperature and make sure it is not exposed to heat.
    Use a serrated knife to cut a fondant cake.
    Sculptural elements and figurines may contain wire supports or toothpicks or wooden skewers for support.
    Please check the placement of these items before serving them to small children.
    The cake should be consumed within 24 hours.
    Enjoy your cake!`,
    deliveryInformation: `Every cake we offer is handcrafted and since each chef has his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.
    The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
    Since cakes are perishable in nature, we attempt delivery of your order only once. The delivery cannot be redirected to any other address.
    This product is hand delivered and will not be delivered along with courier products.`,
  },
  {
    _id: uuid(),
    title: "Chocolate Truffle Pastry",
    description:
      "This pastry is all about perfection. Made from the finest quality of chocolate, this delicious pastry proudly boasts lips-smacking chocolate covering and cherry decoration. This pastry has been given an awesome touch with the liquid chocolate cream.",
    price: 149,
    discount: 25,
    categoryName: "PASTRIES",
    image: "assets/chocolate-truffle-pastry.webp",
    rating: 4,
    tag: "",
    careInstructions: `Store pastry in a refrigerator. Serve the pastry at room temperature and make sure it is not exposed to heat.
    The pastry should be consumed within 24 hours.
    Enjoy your pastry!`,
    deliveryInformation: `Every pastry we offer is handcrafted and since each chef has his/her own way of baking and designing a pastry, there might be slight variation in the product in terms of design and shape.
    The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
    Since pastries are perishable in nature, we attempt delivery of your order only once.
    The delivery cannot be redirected to any other address.
    This product is hand delivered and will not be delivered along with courier products.`,
  },
  {
    _id: uuid(),
    title: "Set Of 6 Choco Love Brownies",
    description:
      "A perfectly baked set of six delicious and dense chocolate brownies can take your taste buds on a sweetly scrumptious ride. Two brownies are topped with colorful sprinkles, two are decorated with edible hearts, and the other two delights with red cream spread over them in zig-zag.",
    price: 649,
    discount: 25,
    categoryName: "BROWNIES",
    image: "assets/set-of-6-choco-love-brownies.webp",
    rating: 4.6,
    tag: "",
    careInstructions: `Place the brownies in an airtight container that is large enough to fit the brownies in layers.
    Between each layer place wax paper or sheets of parchment/baking paper to keep the layers separated.
    It is recommended that you let it come to room temperature and then consume it.`,
    deliveryInformation: `The image displayed is indicative in nature.
    Actual product may vary in shape or design as per the availability.
    The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
    Since cookies are perishable in nature, we will be able to attempt delivery of your order only once.
    The delivery cannot be redirected to any other address.
    This product is hand delivered and will not be delivered along with courier products.`,
  },
  {
    _id: uuid(),
    title: "Delicious Cake and Cookie Hamper",
    description:
      "Celebrate birthdays, holidays or just everyday occasions with this delicious berry almond dry cake (300 gm) and cookie hamper. It's packed with tasty favorites like cookies, cakes, and jar cakes (200 ml each). A perfect and happy delight for all ages. This is a perfect gift hamper to surprise your loved ones.",
    price: 1499,
    discount: 100,
    categoryName: "GIFT HAMPER",
    image: "assets/delicious-cake-and-cookie-hamper.webp",
    rating: 4.1,
    tag: "",
    careInstructions: `Store the eatables in an air tight container at room temperature.
    Please consume them before the expiry date.`,
    deliveryInformation: `We will be more than happy to replace a defective product, please inform us at the earliest and we shall do the needful.
    Deliveries may not be possible on Sundays and National Holidays.
    Kindly provide an address where someone would be available at all times since our courier partners do not call prior to delivering an order.
    Redirection to any other address is not possible.
    Exchange and Returns are not possible.`,
  },
  {
    _id: uuid(),
    title: "6 Blueberry Pineapple Vanilla Cupcakes",
    description:
      "Treat your taste buds with an assortment of 6 delicious and moist cupcakes. Satiate your senses to the rich flavours of blueberry, pineapple, and vanilla with thick dollops of vanilla frosting and alluring toppers. Get a hit of pure flavour in every bite!",
    price: 599,
    discount: 50,
    categoryName: "PASTRIES",
    image: "assets/6-blueberry-pineapple-vanilla-cupcakes.webp",
    rating: 4.3,
    tag: "",
    careInstructions: `Store pastry in a refrigerator. Serve the pastry at room temperature and make sure it is not exposed to heat.
    The pastry should be consumed within 24 hours.
    Enjoy your pastry!`,
    deliveryInformation: `Every pastry we offer is handcrafted and since each chef has his/her own way of baking and designing a pastry, there might be slight variation in the product in terms of design and shape.
    The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
    Since pastries are perishable in nature, we attempt delivery of your order only once.
    The delivery cannot be redirected to any other address.
    This product is hand delivered and will not be delivered along with courier products.`,
  },
  {
    _id: uuid(),
    title: "Layered Cocoa Choco Chip Pastry",
    description:
      "Grab this fantastic and classic chocolate pastry for the cocoa lovers in your life. layered with soft choco frosting on the top and sprinkled with incredibly tasty chocolate chips, this pastry is divine to the core, giving hints of signature flavors in every bite!",
    price: 199,
    discount: 25,
    categoryName: "PASTRIES",
    image: "assets/layered-cocoa-choco-chip-pastry.webp",
    rating: 4.8,
    tag: "",
    careInstructions: `Store pastry in a refrigerator. Serve the pastry at room temperature and make sure it is not exposed to heat.
    The pastry should be consumed within 24 hours.
    Enjoy your pastry!`,
    deliveryInformation: `Every pastry we offer is handcrafted and since each chef has his/her own way of baking and designing a pastry, there might be slight variation in the product in terms of design and shape.
    The chosen delivery time is an estimate and depends on the availability of the product and the destination to which you want the product to be delivered.
    Since pastries are perishable in nature, we attempt delivery of your order only once.
    The delivery cannot be redirected to any other address.
    This product is hand delivered and will not be delivered along with courier products.`,
  },
  {
    _id: uuid(),
    title: "Celebration Round Chocolate Box",
    description:
      "Box Contains- Love Shape Dark Chocolate Praline, Almond & Black Currant Rocher with Edible Gold Dust, 5 Spiced Dark Chocolate Truffles, Pistachio Truffle, Chocolate Fudge, Salted Caramel Chocolate Praline, Peanut Butter White Chocolate, Red Velvet, Hazelnut, Lemon Citrus, Coconut Bounty, Lips Shape Strawberry Truffle, 2 Berry Pralines, 2 Biscoffs , 2 Dark Chocolate, Velvet Milk Chocolate Pralines and Double Chocolate Pralines.",
    price: 499,
    discount: 25,
    categoryName: "CHOCOLATES",
    image: "assets/celebration-round-chocolate-box.webp",
    rating: 3.8,
    tag: "",
    careInstructions: `Store your chocolates in the refrigerator.
    If they are exposed to high temperatures, they may begin to soften, compromising the appearance and flavor.
    Please refer to the expiration date on the package and consume your chocolates before that.`,
    deliveryInformation: `Kindly provide an address where someone would be available at all times since our courier partners do not call prior to delivering an order.
    Redirection to any other address is not possible.
    Exchange and Returns are not possible.`,
  },
];
