
let prodcat = [
	{
		id: "1",
		name: "INFUSION CAT WEIGHT CONTROL",
		categoria: "comida",
		stock: "25",
		precio: "19.500",
		descripcion: 'Nutrience Infusion Cat Weight Control es un alimento para gatos adultos con tendencia al sobrepeso. Combina pollo fresco nunca congelado, granos enteros de bajo índice glucémico, verduras, frutas y productos botánicos ricos en nutrientes.',
		imagen: 'https://petstorechile.cl/wp-content/uploads/2020/08/infusion-cat-weight-control.jpg'
	},
	{
		id: "2",
		name: "ACANA BOUNTIFUL CATCH CAT",
		categoria: "comida",
		stock: "10",
		precio: "23.375",
		descripcion: 'Acana Bountiful Catch Cat es un alimento completo para gatos adultos formulado con una combinación de distintos pescados frescos, combinado con otros ingredientes llenos de proteínas y nutrientes que proporcionan a su gato todo lo que necesita para que esté sano y enérgico.',
		imagen: 'https://dojiw2m9tvv09.cloudfront.net/11787/product/acanacatbountifulcatch1-8kg6595.jpg'
	},
	{
		id: "3",
		name: "Bravery Gato Adulto - Salmon 7 kg",
		categoria: "comida",
		stock: "15",
		precio: "45.990",
		descripcion: 'Bravery Salmon Adult Cat Sterilized es un alimento para gatos adultos esterilizados. Libres de grano y cereales, los alimentos Bravery son mono proteicos, con carne siempre como primer ingrediente y enriquecidos con antioxidantes, hipo alergénicos y 100% naturales.',
		imagen: 'https://www.labodeguitaonline.cl/wp-content/uploads/2022/03/Bravery-GS7K.png'
	},
	
	{
		id: "4",
		name: "TIDY CATS ARENA AGLUTINANTE SCOOP",
		categoria: "arena",
		stock: "10",
		precio: "13.000",
		descripcion: 'Tidy Cats Scoop es una arena para gatos aglutinante de grano medio. Con alto poder desodorizante gracias a la capacidad de neutralizar el olor de las deposiciones.',
		imagen: 'https://dojiw2m9tvv09.cloudfront.net/11787/product/tidycatsinstantaction9056.jpg'
	},
	{
		id: "5",
		name: "Arena Para Gatos Aglutinante 9kg Traper",
		categoria: "arena",
		stock: "6",
		precio: "23.190",
		descripcion: 'Producto natural de calidad superior que entrega la higiene y confort que tú y tu gato merecen, es 99% libre de polvo Máxima Fuerza y Rapidez Aglomerante',
		imagen: 'https://falabella.scene7.com/is/image/Falabella/gsc_113939684_826383_1?wid=800&hei=800&qlt=70'
	},
	
	{
		id: "6",
		name: "Varilla Feather Teaser GiGwi",
		categoria: "juguete",
		stock: "12",
		precio: "4.500",
		descripcion: 'La Varilla Feather Teaser GiGwi es parte de la linea de juguetes Feather Teaser de Gigwi, esta buscan imitar aves reales para despertar el instintos de cazador de los gatos, y al mismo tiempo, proveer de un momento de sana diversión para el felino y el dueño.',
		imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2021/04/varilla-1.png'
	},
	{
		id: "7",
		name: "Arco Purrfect Automasajeador Felino",
		categoria: "juguete",
		stock: "5",
		precio: "6.590",
		descripcion: 'Es el juguete perfecto para mantener a tu amigo felino entretenido por largas horas, gracias a su masajeador y rascador todo en uno.',
		imagen: 'https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2022/02/09102029/foto-11.jpg'
	},
	{
		id: "8",
		name: "Rascador 3 niveles play palace",
		categoria: "rascador",
		stock: "3",
		precio: "54.990",
		descripcion: 'El Rascador 3 Niveles Play Palace es un rasguñador para gatos con base de madera y pensado para tu mascota. Mantén a tu mascota sana y entretenida con Prevue.',
		imagen: 'https://dojiw2m9tvv09.cloudfront.net/40932/product/2000x2000-11300.png'
	},
	{
		id: "9",
		name: "Rascador con guarida Gris",
		categoria: "rascador",
		stock: "8",
		precio: "37.190",
		descripcion: 'Combina la suavidad de la felpa con el yute duradero, generando el espacio perfecto para que tu gato pueda recostarse, dormir y rascar.',
		imagen: 'https://www.tusmascotas.cl/wp-content/uploads/2020/10/60-min.png'
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