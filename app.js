import f_navegation from "./components/menu";
import f_modal from "./components/modal";
import f_message from "./components/message";
import f_table from "./components/table";
import f_image from "./components/image";


/**
 * Agregando componente menu al objeto window
 *
 * @param {*}
 */
(function (window) {
    const _init = (params) => {
        f_navegation.menu(params);
    }
    window.f_menu = {
        init: _init
    }
})(window);


/**
 * Agregando componente ventana modal al objeto window
 *
 * @param {*}
 */
 (function (window) {
    const _init = (params) => {
        f_modal.generate(params);
    }
    window.f_modal = {
        init: _init
    }
})(window);


/**
 * Agregando componente mensaje al objeto window
 *
 * @param {*}
 */
 (function (window) {
    const _generate = (params) => {
        f_message.generate(params);
    }
	const _convert = (params) => {
        f_message.convert(params);
    }
    window.f_message = {
        generate: _generate,
		convert: _convert
    }
})(window);


/**
 * Agregando componente para manipular tablas al objeto window
 *
 * @param {*}
 */
(function (window) {
    const _resizable = (idTable) => {
        f_table.resizable(idTable);
    }
    window.f_table = {
        resizable: _resizable
    }
})(window);


/**
 * Agregando componente para manipular imagen al objeto window
 *
 * @param {*}
 */
 (function (window) {
    const _show = (params) => {
        f_image.show(params);
    }
    window.f_image = {
        show: _show
    }
})(window);


/**
 * Agregando componente para manipular checkbox al objeto window
 *
 * @param {*}
 */
 (function (window) {
    const _checkAll = (params) => {
        f_checkbox.checkAll(params);
    }
    window.f_checkbox = {
        checkAll: _checkAll
    }
})(window);