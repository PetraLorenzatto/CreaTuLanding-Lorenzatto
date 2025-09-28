const products = [
    {
        "id": 1,
        "title": "Smartphone Alta Gama",
        "img": "https://i.pinimg.com/736x/ef/af/53/efaf532699eab5ce8de4fef86a42953d.jpg",
        "description": "Un smartphone de última generación con cámara de alta resolución y batería de larga duración.",
        "price": 250000.00,
        "stock": 15,
        "category": "Electrónica"
    },
    {
        "id": 2,
        "title": "Remera de Algodón Clásica",
        "img": "https://i.pinimg.com/736x/f3/61/e2/f361e2e04d24746c24b71523c3d73f33.jpg",
        "description": "Remera clásica de algodón suave, perfecta para el uso diario. Disponible en varios colores.",
        "price": 18500.50,
        "stock": 50,
        "category": "Ropa"
    },
    {
        "id": 3,
        "title": "Juego de Sábanas Queen",
        "img": "https://i.pinimg.com/736x/ab/a8/68/aba868430e1ca6b643863bdc5c998f60.jpg",
        "description": "Juego de sábanas de 400 hilos, fabricadas con algodón egipcio para máximo confort.",
        "price": 45000.00,
        "stock": 30,
        "category": "Hogar"
    },
    {
        "id": 4,
        "title": "Novela de Ficción Histórica",
        "img": "https://i.pinimg.com/1200x/f9/52/88/f95288c982bfd65d04fcd16491bc9a50.jpg",
        "description": "El último bestseller del aclamado autor, una historia atrapante ambientada en el siglo XIX.",
        "price": 15999.00,
        "stock": 100,
        "category": "Libros"
    },
    {
        "id": 5,
        "title": "Auriculares Inalámbricos Pro",
        "img": "https://i.pinimg.com/736x/32/47/43/3247431e2f8aa0254a5f92a11d324749.jpg",
        "description": "Auriculares con cancelación de ruido activa, hasta 24 horas de autonomía y sonido de alta fidelidad.",
        "price": 98000.00,
        "stock": 25,
        "category": "Electrónica"
    },
    {
        "id": 6,
        "title": "Pantalón Jean Slim Fit",
        "img": "https://i.pinimg.com/1200x/62/a2/16/62a216b26686045adb74862fac959b05.jpg",
        "description": "Jean de corte moderno y tela elastizada para mayor comodidad y estilo.",
        "price": 35000.00,
        "stock": 40,
        "category": "Ropa"
    },
    {
        "id": 7,
        "title": "Cafetera de Cápsulas",
        "img": "https://i.pinimg.com/736x/41/dd/e5/41dde5ff9a164ec5de52adbc659539e1.jpg",
        "description": "Prepara tu café favorito en segundos. Compatible con las principales marcas de cápsulas.",
        "price": 75000.00,
        "stock": 22,
        "category": "Hogar"
    },
    {
        "id": 8,
        "title": "Libro de Cocina Vegana",
        "img": "https://i.pinimg.com/1200x/b9/43/38/b943385d8a4e262338db89da591c7430.jpg",
        "description": "Más de 100 recetas fáciles y deliciosas para una alimentación basada en plantas.",
        "price": 21000.00,
        "stock": 60,
        "category": "Libros"
    },
    {
        "id": 9,
        "title": "Smartwatch De",
        "img": "https://i.pinimg.com/1200x/8b/8e/73/8b8e73e0421d2722772bcd271d6810a9.jpg",
        "description": "Monitor de actividad, GPS incorporado, medidor de frecuencia cardíaca y resistente al agua.",
        "price": 120000.00,
        "stock": 18,
        "category": "Electrónica"
    },
    {
        "id": 10,
        "title": "Buzo con Capucha",
        "img": "https://i.pinimg.com/1200x/1b/12/7f/1b127fa1fd830bd7ff6a89beba63d457.jpg",
        "description": "Buzo de frisa abrigado, ideal para el invierno. Diseño unisex.",
        "price": 42000.00,
        "stock": 35,
        "category": "Ropa"
    },
    {
        "id": 11,
        "title": "Robot Aspiradora Inteligente",
        "img": "https://i.pinimg.com/1200x/ad/19/44/ad1944206b3a3820b704cb15d602862a.jpg",
        "description": "Mapea tu casa y limpia de forma autónoma. Controlable desde una app móvil.",
        "price": 310000.00,
        "stock": 10,
        "category": "Hogar"
    },
    {
        "id": 12,
        "title": "Biografía de un Emprendedor",
        "img": "https://i.pinimg.com/1200x/23/37/d8/2337d8786d3183a055720a8aa00380c0.jpg",
        "description": "La inspiradora historia de cómo se construyó un imperio tecnológico desde cero.",
        "price": 19500.00,
        "stock": 80,
        "category": "Libros"
    },
    {
        "id": 13,
        "title": "Tablet 10 Pulgadas",
        "img": "https://via.placeholder.com/250",
        "description": "Ideal para trabajar, estudiar o consumir contenido multimedia. Incluye lápiz óptico.",
        "price": 185000.00,
        "stock": 20,
        "category": "Electrónica"
    },
    {
        "id": 14,
        "title": "Zapatillas Urbanas de Cuero",
        "img": "https://i.pinimg.com/1200x/8e/3a/97/8e3a971acbb17c69417eeeb963ab69dd.jpg",
        "description": "Zapatillas de diseño minimalista, fabricadas en cuero genuino para mayor durabilidad.",
        "price": 70000.00,
        "stock": 28,
        "category": "Ropa"
    },
    {
        "id": 15,
        "title": "Set de Cuchillos de Chef",
        "img": "https://via.placeholder.com/250",
        "description": "Juego de 5 cuchillos de acero inoxidable de alta calidad con base de madera.",
        "price": 55000.00,
        "stock": 33,
        "category": "Hogar"
    },
    {
        "id": 16,
        "title": "Manual de Finanzas Personales",
        "img": "https://via.placeholder.com/250",
        "description": "Aprende a gestionar tu dinero, invertir y planificar tu futuro financiero.",
        "price": 17800.00,
        "stock": 120,
        "category": "Libros"
    },
    {
        "id": 17,
        "title": "Cámara de Seguridad WiFi",
        "img": "https://via.placeholder.com/250",
        "description": "Vigila tu hogar desde tu celular con esta cámara con visión nocturna y detección de movimiento.",
        "price": 65000.00,
        "stock": 45,
        "category": "Electrónica"
    },
    {
        "id": 18,
        "title": "Campera Rompevientos",
        "img": "https://via.placeholder.com/250",
        "description": "Campera ultraligera e impermeable, ideal para actividades al aire libre.",
        "price": 52000.00,
        "stock": 38,
        "category": "Ropa"
    },
    {
        "id": 19,
        "title": "Lámpara de Escritorio LED",
        "img": "https://via.placeholder.com/250",
        "description": "Luz LED regulable en intensidad y temperatura de color. Diseño moderno y minimalista.",
        "price": 28000.00,
        "stock": 55,
        "category": "Hogar"
    },
    {
        "id": 20,
        "title": "Antología de Cuentos Cortos",
        "img": "https://via.placeholder.com/250",
        "description": "Una colección de los mejores cuentos de autores contemporáneos.",
        "price": 14500.00,
        "stock": 90,
        "category": "Libros"
    }
];

export default products;