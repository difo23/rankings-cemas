# Algoritmo Ranking:

## Descripcion del algoritmo  
Describimos el algoritmo para crear los rakings de estudiantes a partir de los JSON de reportes.

 El primer paso del algoritmo es obtener los reportes por curso y periodo:      
 `4A:2020-2021`
 
 ## Creacion de la URL para obtener los cursos: 
 La siguiente funcion nos sirve para formar la URL para el pedido de reportes: 
 ```js
 const getReportsURL = (curso, periodo) => {

	/**
	 * @description: Obtener todos los reportes por curso y periodo. 
	 * @param	{String}	curso Ejemplo: "4A"
	 * @param	{String}	Periodo Ejemplo: "2020-2021"
	 * @URL https://cemasapi.herokuapp.com/reportes/boletin/4A:2020-2021:
	 * @return  {String}	URL	 String URL .
	 */


	const url = `/reportes`;
	let string_params = `/boletin/${curso}:${periodo}:`;
	const URL_API = 'https://cemasapi.herokuapp.com';


	const urlComplete = `${URL_API}${url}${encodeURI(string_params)}`;
	return urlComplete;
};
 ```
 
 El hook 
 
2. 
