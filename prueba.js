let data = [
    {
      "id": 1,
      "description": "Mesa de algarrobo",
      "quantity": 1,
      "image": "https://i.ibb.co/QvK1hgw/IMG-20230504-WA0079.jpg",
      "additionalPhotos": [
        "https://i.ibb.co/hKk52WW/IMG-20230504-WA0046.jpg",
        "https://i.ibb.co/ys5WxVg/IMG-20230504-WA0047.jpg",
        "https://i.ibb.co/Fq5pCDD/IMG-20230504-WA0052.jpg"
      ],
      "price": 5000,
      "available": true
    },
    {
      "id": 2,
      "description": "Ventilador Liliana",
      "quantity": 0,
      "image": "https://i.ibb.co/17c33K8/IMG-20230504-WA0074.jpg",
      "price": 10000,
      "available": false
    },
    {
      "id": 3,
      "description": "Silla algarrobo",
      "quantity": 4,
      "image": "https://i.ibb.co/QmJDBjc/silla-algarrobo.jpg",
      "price": 5000,
      "available": true
    },
    {
      "id": 4,
      "description": "Aire acondicionado Philco",
      "quantity": 1,
      "image": "https://i.ibb.co/ScM4G70/Aire-acondicionado-philco.jpg",
      "price": 150000,
      "available": true
    },
    {
      "id": 5,
      "description": "Cable subterráneo 2 x 2,5mm (30 mts)",
      "quantity": 1,
      "image": "https://i.ibb.co/Kw6Zvvm/Cable-subterraneo.png",
      "price": 20000,
      "available": true
    }
  ]  


  let newData = data.filter(item => item.id == 1)

  console.log(newData[0].additionalPhotos)
  