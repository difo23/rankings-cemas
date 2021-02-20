const getData = async (curso, periodo) => {

	/**
	 * @description: Obtener todos los reportes por curso y periodo. 
	 * @param	{String}	curso Ejemplo: "4A"
	 * @param	{String}	Periodo Ejemplo: "2020-2021"
	 * @URL https://cemasapi.herokuapp.com/reportes/boletin/4A:2020-2021:
	 * @return  {Array}		data  Retorna un array  de objetos.
	 */


	const url = `/reportes`;
	let string_params = `/boletin/${curso}:${periodo}:`;
	const URL_API = 'https://cemasapi.herokuapp.com/';


	const urlComplete = `${URL_API}${url}${encodeURI(string_params)}`;
	const resp = await fetch(urlComplete);

	console.info("URL: ", urlComplete)
	const { data } = await resp.json();
	console.info("Data: ", urlComplete)
	return data;
};

export default getData;