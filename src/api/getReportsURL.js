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
	const URL_API = 'https://cemasapi.herokuapp.com/';


	const urlComplete = `${URL_API}${url}${encodeURI(string_params)}`;

	return urlComplete;
};

export default getReportsURL;