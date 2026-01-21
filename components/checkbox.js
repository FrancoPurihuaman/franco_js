/**
 * Libreria para manipular checkbox
 * Author: Franco Purihuaman
 * 
 */

 const f_checkbox = {};

/**
 * Función para marcar todos los checkbox de una lista
 *
 * @param { 
 *        	idCheckAll => String - Id del checkbox "marcar todo"
 *			classCheckItems  => String - Clase de los checkbox a seleccionar
 *        }
 */
f_checkbox.checkAll = ({idCheckAll = "", classCheckItems = ""}) => {
	
	const checkAll = (idCheckAll !== "") ? document.getElementById(idCheckAll) : null;
    const items = (classCheckItems !== "") ? document.querySelectorAll(`.${classCheckItems}`) : null;

	if(checkAll && items){
		
		checkAll.addEventListener('change', () => {
	        items.forEach(item => item.checked = checkAll.checked);
	    });

	    items.forEach(item => {
	        item.addEventListener('change', () => {
	            checkAll.checked = [...items].every(i => i.checked);
	        });
	    });
	    
	}else{console.error("Checkbox marcar todo o lista de items no encontrados")}
    
}

export default f_checkbox;