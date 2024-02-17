const productList = [
  {
    status: "Pre appraisal",
    statusnew:'grey',
    type: "Apartment",
    name: "221 Baker Street",
    address: "71 Cherry Court Southampton, So53 5Pd Uk ",
    rooms: 3,
    baths: 2,
    area: "3333 Sqft",
    rent: "£850/ month",
    img:"https://s3-alpha-sig.figma.com/img/89be/301e/050e4bbb0692f19cfad61c16edb5c9f2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQIDJMpifBORQCtdFi6B4PosRRajRaRUrGNOl1sywpjVAJPnTYF2OlWTwEfhCgE04tUxR69COlnrXsN4NNLMxBTSb7s-4Ksv6Rc0eYZM2V3EzzmwOyoKDwg-lGkoHscVe~vF0h79k1rcI~kufu7szz4OIq4y4HujM6p3ZYrAh7ZNM0RZkeORByjZcn8osHpV1itxm5eEhz3ooqGwDgwiIzF4-qLRmtTQrXXw0L27Jodz~zZYcsjAcRW2HSArhnN8XljfQjT4jpqoQwHxgKARTACOhgK7ac-OvhN~v-37rOn0a0ehnbaF740IAKmtPXLrcq7v8xyUogIVxHR9WH0vdg__"
  },
  {
    status: "To-Let Available",
    statusnew:'red',
    type: "Flat",
    name: "The Ritz- Carlton Residences",
    address: "71 Cherry Court Southampton, So53 5Pd Uk  ",
    rooms: 3,
    baths: 2,
    area: "3333 Sqft",
    rent: "£850/ month",
    img:"https://s3-alpha-sig.figma.com/img/d2a5/510c/739cfacea58ef1eb0bf2d8f0ef1309e8?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHdgizLY~My52W4Wq3r-zpo6AzCVfjgorWKkaC-PAgrw2sBJlRXrGwHskc2DU7hzgKP50KA8MOwNATrAJx7AcuUjoztJyMGRlzqELPJ7mJr9SXVVz4SwKUWErE474vRB5wSNFjhV2TSMkz25XIMfS-75PqusvVt--CDcapBLSevlzjv11j~uA8D4PJ4pDp1He1bgN09xyQbwRkJKA-zNxXF7sqS5V3lDZWrkeqL37zaiDavWz~Ejy4gvURaxsPlX3ZIJXexf6Vpp5cTyDMIYouhl5SumN0bjVMhySPMZkaLA7yOdkjerl2Wws~N8iJ-7TmAjR3Ol-vk03Nlw7v-E2A__"
  },
  {
    status: "Current Tenency",
    statusnew:'yellow',
    type: "Villa",
    name: "The Ritz- Carlton Residences",
    address: "71 Cherry Court Southampton, So53 5Pd Uk  ",
    rooms: 3,
    baths: 2,
    area: "3333 Sqft",
    rent: "£850/ month",
    img:"https://s3-alpha-sig.figma.com/img/34ad/1208/f56a55e60e10b5d7ea8f59ee633d5345?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pdm9Yt8AzdA-1VmdcsKjPFnuPa4Xl99gFGKaIUUZidgyM15kQDHrNdBqj~sBCGYX0pvBGSsNceBqb3tjUkXgjiDtTY4TBdv7F2QNH9YpUoIy58rVN4x2Sjjlm8fZKkx~rLoQtf~Q-uyIE493yiD0dks7mXYcv1TZqLjJ4CNS96EZBsQ593NKaxX1X0MRasX9BhayAsXl1Zo-3IqgGkV9xrnM9Trkkd-7udu6l0ELoEHcqHfOCzDzHZDxoW3zW1iCfKCi66003LSBBVwA0rYyJtxZ9m51kfTgjtXYiTFv0OnxssjdJCkF68OqrgEbxzU-2tLLbKhfAAlV1A3fEyuWIg__"
  },
  {
    status: "Active Tenency",
    statusnew:'green',
    type: "Apartment",
    name: "221 Baker Street",
    address: "71 Cherry Court Southampton, So53 5Pd Uk ",
    rooms: 3,
    baths: 2,
    area: "3333 Sqft",
    rent: "£850/ month",
    img:"https://s3-alpha-sig.figma.com/img/89be/301e/050e4bbb0692f19cfad61c16edb5c9f2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQIDJMpifBORQCtdFi6B4PosRRajRaRUrGNOl1sywpjVAJPnTYF2OlWTwEfhCgE04tUxR69COlnrXsN4NNLMxBTSb7s-4Ksv6Rc0eYZM2V3EzzmwOyoKDwg-lGkoHscVe~vF0h79k1rcI~kufu7szz4OIq4y4HujM6p3ZYrAh7ZNM0RZkeORByjZcn8osHpV1itxm5eEhz3ooqGwDgwiIzF4-qLRmtTQrXXw0L27Jodz~zZYcsjAcRW2HSArhnN8XljfQjT4jpqoQwHxgKARTACOhgK7ac-OvhN~v-37rOn0a0ehnbaF740IAKmtPXLrcq7v8xyUogIVxHR9WH0vdg__"
  
  },
  {
    status: "Current Tenency",
    statusnew:'yellow',
    type: "Villa",
    name: "The Ritz- Carlton Residences",
    address: "71 Cherry Court Southampton, So53 5Pd Uk  ",
    rooms: 3,
    baths: 2,
    area: "3333 Sqft",
    rent: "£850/ month",
    img:"https://s3-alpha-sig.figma.com/img/34ad/1208/f56a55e60e10b5d7ea8f59ee633d5345?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pdm9Yt8AzdA-1VmdcsKjPFnuPa4Xl99gFGKaIUUZidgyM15kQDHrNdBqj~sBCGYX0pvBGSsNceBqb3tjUkXgjiDtTY4TBdv7F2QNH9YpUoIy58rVN4x2Sjjlm8fZKkx~rLoQtf~Q-uyIE493yiD0dks7mXYcv1TZqLjJ4CNS96EZBsQ593NKaxX1X0MRasX9BhayAsXl1Zo-3IqgGkV9xrnM9Trkkd-7udu6l0ELoEHcqHfOCzDzHZDxoW3zW1iCfKCi66003LSBBVwA0rYyJtxZ9m51kfTgjtXYiTFv0OnxssjdJCkF68OqrgEbxzU-2tLLbKhfAAlV1A3fEyuWIg__"
 
  },

  {
    status: "Market appraisal",
    statusnew:'blue',
    type: "Flat",
    name: "The Ritz- Carlton Residences",
    address: "71 Cherry Court Southampton, So53 5Pd Uk  ",
    rooms: 3,
    baths: 2,
    area: "3333 Sqft",
    rent: "£850/ month",
    img:"https://s3-alpha-sig.figma.com/img/d2a5/510c/739cfacea58ef1eb0bf2d8f0ef1309e8?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHdgizLY~My52W4Wq3r-zpo6AzCVfjgorWKkaC-PAgrw2sBJlRXrGwHskc2DU7hzgKP50KA8MOwNATrAJx7AcuUjoztJyMGRlzqELPJ7mJr9SXVVz4SwKUWErE474vRB5wSNFjhV2TSMkz25XIMfS-75PqusvVt--CDcapBLSevlzjv11j~uA8D4PJ4pDp1He1bgN09xyQbwRkJKA-zNxXF7sqS5V3lDZWrkeqL37zaiDavWz~Ejy4gvURaxsPlX3ZIJXexf6Vpp5cTyDMIYouhl5SumN0bjVMhySPMZkaLA7yOdkjerl2Wws~N8iJ-7TmAjR3Ol-vk03Nlw7v-E2A__"
  
  },
];

export default productList
