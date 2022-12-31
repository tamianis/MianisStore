
let prodcat = [
	{
		id: "1",
		name: "INFUSION CAT WEIGHT CONTROL",
		category: "comida",
		stock: "25",
		price: "19.500",
		description: 'Nutrience Infusion Cat Weight Control es un alimento para gatos adultos con tendencia al sobrepeso. Combina pollo fresco nunca congelado, granos enteros de bajo índice glucémico, verduras, frutas y productos botánicos ricos en nutrientes.',
		image: 'https://petstorechile.cl/wp-content/uploads/2020/08/infusion-cat-weight-control.jpg'
	},
	{
		id: "2",
		name: "ACANA BOUNTIFUL CATCH CAT",
		category: "comida",
		stock: "10",
		price: "23.375",
		description: 'Acana Bountiful Catch Cat es un alimento completo para gatos adultos formulado con una combinación de distintos pescados frescos, combinado con otros ingredientes llenos de proteínas y nutrientes que proporcionan a su gato todo lo que necesita para que esté sano y enérgico.',
		image: 'https://dojiw2m9tvv09.cloudfront.net/11787/product/acanacatbountifulcatch1-8kg6595.jpg'
	},
	{
		id: "3",
		name: "Bravery Gato Adulto - Salmon 7 kg",
		category: "comida",
		stock: "15",
		price: "45.990",
		description: 'Bravery Salmon Adult Cat Sterilized es un alimento para gatos adultos esterilizados. Libres de grano y cereales, los alimentos Bravery son mono proteicos, con carne siempre como primer ingrediente y enriquecidos con antioxidantes, hipo alergénicos y 100% naturales.',
		image: 'https://www.labodeguitaonline.cl/wp-content/uploads/2022/03/Bravery-GS7K.png'
	},
	
	{
		id: "4",
		name: "TIDY CATS ARENA AGLUTINANTE SCOOP",
		category: "arena",
		stock: "10",
		price: "13.000",
		description: 'Tidy Cats Scoop es una arena para gatos aglutinante de grano medio. Con alto poder desodorizante gracias a la capacidad de neutralizar el olor de las deposiciones.',
		image: 'https://dojiw2m9tvv09.cloudfront.net/11787/product/tidycatsinstantaction9056.jpg'
	},
	{
		id: "5",
		name: "Arena Para Gatos Aglutinante 9kg Traper",
		category: "arena",
		stock: "6",
		price: "23.190",
		description: 'Producto natural de calidad superior que entrega la higiene y confort que tú y tu gato merecen, es 99% libre de polvo Máxima Fuerza y Rapidez Aglomerante',
		image: 'https://falabella.scene7.com/is/image/Falabella/gsc_113939684_826383_1?wid=800&hei=800&qlt=70'
	},
	
	{
		id: "6",
		name: "Varilla Feather Teaser GiGwi",
		category: "juguete",
		stock: "12",
		price: "4.500",
		description: 'La Varilla Feather Teaser GiGwi es parte de la linea de juguetes Feather Teaser de Gigwi, esta buscan imitar aves reales para despertar el instintos de cazador de los gatos, y al mismo tiempo, proveer de un momento de sana diversión para el felino y el dueño.',
		image: 'https://www.tusmascotas.cl/wp-content/uploads/2021/04/varilla-1.png'
	},
	{
		id: "7",
		name: "Arco Purrfect Automasajeador Felino",
		category: "juguete",
		stock: "5",
		price: "6.590",
		description: 'Es el juguete perfecto para mantener a tu amigo felino entretenido por largas horas, gracias a su masajeador y rascador todo en uno.',
		image: 'https://www.tusmascotas.cl/wp-content/uploads/2020/10/Purrfect-Automasajeador-Felino.png.webp'
	},
	{
		id: "8",
		name: "Rascador 3 niveles play palace",
		category: "rascador",
		stock: "3",
		price: "54.990",
		description: 'El Rascador 3 Niveles Play Palace es un rasguñador para gatos con base de madera y pensado para tu mascota. Mantén a tu mascota sana y entretenida con Prevue.',
		image: 'https://dojiw2m9tvv09.cloudfront.net/40932/product/2000x2000-11300.png'
	},
	{
		id: "9",
		name: "Rascador con guarida Gris",
		category: "rascador",
		stock: "8",
		price: "37.190",
		description: 'Combina la suavidad de la felpa con el yute duradero, generando el espacio perfecto para que tu gato pueda recostarse, dormir y rascar.',
		image: 'https://www.tusmascotas.cl/wp-content/uploads/2020/10/60-min.png'
	},
];


export const gFetch = (id) => {
    return new Promise( (res, rej)=>{
        const condition = true
        if (condition) {    
            setTimeout(()=>{
                res(prodcat )            
            }, 1000)
        } else {
            rej( 'error' )        
        }
    } )
}