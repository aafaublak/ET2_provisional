class articulo extends EntidadAbstracta {
    constructor(esTest) {
        super(esTest);
        this.nombreentidad = 'articulo';
        this.columnasamostrar = ['CodigoA', 'AutoresA', 'TituloA', 'ISSN', 'EstadoA', 'FicheropdfA'];
        this.mostrarespecial = ['FicheropdfA'];
        this.attributes = [
            'CodigoA',
            'AutoresA',
            'TituloA',
            'ISSN',
            'EstadoA',
            'FicheropdfA',
            'nuevo_FicheropdfA'
        ];
        this.estadoPermitidos = ['BORRADOR', 'EN_REVISION', 'PUBLICADO'];
        this.pdfNameRegex = '^[A-Za-z0-9_.-]{7,60}$';
        this.pdfMaxSize = 4000000; // ~4MB
        this.pdfMimeTypes = ['application/pdf'];
    }

    manual_form_creation() {
        return `
            <form id='form_iu' action="" method="POST" enctype="multipart/form-data" class='formulario'>
                <label id='label_CodigoA' class='label_CodigoA'>Codigo</label>
                <input type='text' id='CodigoA' name='CodigoA' class='CodigoA_placeholder'>
                <span id='span_error_CodigoA'><a id='error_CodigoA'></a></span>
                <br>

                <label id='label_AutoresA' class='label_AutoresA'>Autores</label>
                <textarea id='AutoresA' name='AutoresA' rows='4' class='AutoresA_placeholder'></textarea>
                <span id='span_error_AutoresA'><a id='error_AutoresA'></a></span>
                <br>

                <label id='label_TituloA' class='label_TituloA'>Titulo</label>
                <input type='text' id='TituloA' name='TituloA' class='TituloA_placeholder'>
                <span id='span_error_TituloA'><a id='error_TituloA'></a></span>
                <br>

                <label id='label_ISSN' class='label_ISSN'>ISSN</label>
                <input type='text' id='ISSN' name='ISSN' class='ISSN_placeholder'>
                <span id='span_error_ISSN'><a id='error_ISSN'></a></span>
                <br>

                <label id='label_EstadoA' class='label_EstadoA'>Estado</label>
                <select id='EstadoA' name='EstadoA'>
                    <option value='BORRADOR' class='EstadoA_option_borrador'>Borrador</option>
                    <option value='EN_REVISION' class='EstadoA_option_revision'>En revisión</option>
                    <option value='PUBLICADO' class='EstadoA_option_publicado'>Publicado</option>
                </select>
                <span id='span_error_EstadoA'><a id='error_EstadoA'></a></span>
                <br>

                <label id='label_FicheropdfA' class='label_FicheropdfA'>Fichero PDF</label>
                <input type='text' id='FicheropdfA' name='FicheropdfA' class='FicheropdfA_placeholder' readonly>
                <a id='link_FicheropdfA' class='link_FicheropdfA' href='http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/' target='_blank' rel='noopener'>
                    <img src='./iconos/FILE.png' class='icon_file_link'/>
                </a>
                <span id='span_error_FicheropdfA'><a id='error_FicheropdfA'></a></span>
                <br>

                <label id='label_nuevo_FicheropdfA' class='label_nuevo_FicheropdfA'>Nuevo PDF</label>
                <input type='file' id='nuevo_FicheropdfA' name='nuevo_FicheropdfA' class='nuevo_FicheropdfA_placeholder'>
                <span id='span_error_nuevo_FicheropdfA'><a id='error_nuevo_FicheropdfA'></a></span>
                <br>
            </form>
        `;
    }

    createForm_ADD() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_ADD');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        this.dom.hide_element('label_CodigoA');
        this.dom.hide_element_form('CodigoA');
        this.dom.hide_element('span_error_CodigoA');

        this.dom.hide_element_form('FicheropdfA');
        this.dom.hide_element('link_FicheropdfA');

        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }

    createForm_SEARCH() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_SEARCH');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

        this.dom.hide_element_form('FicheropdfA');
        this.dom.hide_element('link_FicheropdfA');
        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.replaceSelectXEmptyInput('EstadoA');
        this.dom.assign_class_value('EstadoA', 'EstadoA_placeholder_search');

        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang();
    }

    createForm_EDIT(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_EDIT');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        this.dom.rellenarvaloresform(fila);
        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/' + fila.FicheropdfA);
        if (fila.FicheropdfA) {
            this.dom.show_element('link_FicheropdfA', 'inline-block');
        } else {
            this.dom.hide_element('link_FicheropdfA');
        }
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('CodigoA', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
        setLang();
    }

    createForm_DELETE(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_DELETE');

        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.rellenarvaloresform(fila);
        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/' + fila.FicheropdfA);
        if (fila.FicheropdfA) {
            this.dom.show_element('link_FicheropdfA', 'inline-block');
        } else {
            this.dom.hide_element('link_FicheropdfA');
        }
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang();
    }

    createForm_SHOWCURRENT(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_articulo_SHOWCURRENT');

        this.dom.hide_element_form('nuevo_FicheropdfA');
        this.dom.rellenarvaloresform(fila);
        this.dom.assign_property_value('link_FicheropdfA', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/' + fila.FicheropdfA);
        if (fila.FicheropdfA) {
            this.dom.show_element('link_FicheropdfA', 'inline-block');
        } else {
            this.dom.hide_element('link_FicheropdfA');
        }
        this.dom.colocartodosreadonly('form_iu');
        setLang();
    }

    mostrarcambioatributo(atributo, valorentrada) {
        switch (atributo) {
            case 'FicheropdfA':
                if (valorentrada && valorentrada !== '') {
                    return `${valorentrada} <a class="link_FicheropdfA" href="http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/${valorentrada}" target="_blank"><img src="./iconos/FILE.png" class="icon_file_link"/></a>`;
                }
                return '-';
            default:
                return valorentrada;
        }
    }

    ADD_CodigoA_validation() {
        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }

    ADD_AutoresA_validation() {
        const value = this._getValue('AutoresA');
        if (value.trim().length < 5) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_min_size_KO');
            return 'AutoresA_min_size_KO';
        }
        if (value.length > 200) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO');
            return 'AutoresA_max_size_KO';
        }
        if (!(this.validations.format('AutoresA', "^[A-Za-zÁÉÍÓÚáéíóúÑñ ,.-]+$"))) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO');
            return 'AutoresA_format_KO';
        }
        this.dom.mostrar_exito_campo('AutoresA');
        return true;
    }

    ADD_TituloA_validation() {
        if (!(this.validations.min_size('TituloA', 5))) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_min_size_KO');
            return 'TituloA_min_size_KO';
        }
        if (!(this.validations.max_size('TituloA', 150))) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO');
            return 'TituloA_max_size_KO';
        }
        if (!(this.validations.format('TituloA', "^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,.:;\-()'\"]+$"))) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO');
            return 'TituloA_format_KO';
        }
        this.dom.mostrar_exito_campo('TituloA');
        return true;
    }

    ADD_ISSN_validation() {
        if (!(this.validations.format('ISSN', '^\\d{4}-\\d{3}[\\dXx]$'))) {
            this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO');
            return 'ISSN_format_KO';
        }
        this.dom.mostrar_exito_campo('ISSN');
        return true;
    }

    ADD_EstadoA_validation() {
        const value = document.getElementById('EstadoA').value;
        if (!this.estadoPermitidos.includes(value)) {
            this.dom.mostrar_error_campo('EstadoA', 'EstadoA_value_KO');
            return 'EstadoA_value_KO';
        }
        this.dom.mostrar_exito_campo('EstadoA');
        return true;
    }

    ADD_nuevo_FicheropdfA_validation() {
        if (!(this.validations.not_exist_file('nuevo_FicheropdfA'))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'FicheropdfA_required_KO');
            return 'FicheropdfA_required_KO';
        }
        if (!(this.validations.max_size_file('nuevo_FicheropdfA', this.pdfMaxSize))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'FicheropdfA_max_size_KO');
            return 'FicheropdfA_max_size_KO';
        }
        if (!(this.validations.type_file('nuevo_FicheropdfA', this.pdfMimeTypes))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'FicheropdfA_type_KO');
            return 'FicheropdfA_type_KO';
        }
        if (!(this.validations.format_name_file('nuevo_FicheropdfA', this.pdfNameRegex))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'FicheropdfA_name_KO');
            return 'FicheropdfA_name_KO';
        }
        this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
        return true;
    }

    EDIT_CodigoA_validation() {
        return this._validateCodigoAStored();
    }

    EDIT_AutoresA_validation() {
        return this.ADD_AutoresA_validation();
    }

    EDIT_TituloA_validation() {
        return this.ADD_TituloA_validation();
    }

    EDIT_ISSN_validation() {
        return this.ADD_ISSN_validation();
    }

    EDIT_EstadoA_validation() {
        return this.ADD_EstadoA_validation();
    }

    EDIT_nuevo_FicheropdfA_validation() {
        if (!(this.validations.not_exist_file('nuevo_FicheropdfA'))) {
            this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
            return true;
        }
        if (!(this.validations.max_size_file('nuevo_FicheropdfA', this.pdfMaxSize))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'FicheropdfA_max_size_KO');
            return 'FicheropdfA_max_size_KO';
        }
        if (!(this.validations.type_file('nuevo_FicheropdfA', this.pdfMimeTypes))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'FicheropdfA_type_KO');
            return 'FicheropdfA_type_KO';
        }
        if (!(this.validations.format_name_file('nuevo_FicheropdfA', this.pdfNameRegex))) {
            this.dom.mostrar_error_campo('nuevo_FicheropdfA', 'FicheropdfA_name_KO');
            return 'FicheropdfA_name_KO';
        }
        this.dom.mostrar_exito_campo('nuevo_FicheropdfA');
        return true;
    }

    SEARCH_CodigoA_validation() {
        if (this._isEmpty('CodigoA')) {
            this.dom.mostrar_exito_campo('CodigoA');
            return true;
        }
        if (!(this.validations.max_size('CodigoA', 12))) {
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_max_size_KO');
            return 'CodigoA_max_size_KO';
        }
        if (!(this.validations.format('CodigoA', '^[A-Z0-9]{0,12}$'))) {
            this.dom.mostrar_error_campo('CodigoA', 'CodigoA_format_KO');
            return 'CodigoA_format_KO';
        }
        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }

    SEARCH_AutoresA_validation() {
        const value = this._getValue('AutoresA');
        if (value.trim() === '') {
            this.dom.mostrar_exito_campo('AutoresA');
            return true;
        }
        if (value.length > 200) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_max_size_KO');
            return 'AutoresA_max_size_KO';
        }
        if (!(this.validations.format('AutoresA', "^[A-Za-zÁÉÍÓÚáéíóúÑñ ,.-]*$"))) {
            this.dom.mostrar_error_campo('AutoresA', 'AutoresA_format_KO');
            return 'AutoresA_format_KO';
        }
        this.dom.mostrar_exito_campo('AutoresA');
        return true;
    }

    SEARCH_TituloA_validation() {
        if (this._isEmpty('TituloA')) {
            this.dom.mostrar_exito_campo('TituloA');
            return true;
        }
        if (!(this.validations.max_size('TituloA', 150))) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_max_size_KO');
            return 'TituloA_max_size_KO';
        }
        if (!(this.validations.format('TituloA', "^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,.:;\-()'\"]*$"))) {
            this.dom.mostrar_error_campo('TituloA', 'TituloA_format_KO');
            return 'TituloA_format_KO';
        }
        this.dom.mostrar_exito_campo('TituloA');
        return true;
    }

    SEARCH_ISSN_validation() {
        if (this._isEmpty('ISSN')) {
            this.dom.mostrar_exito_campo('ISSN');
            return true;
        }
        if (!(this.validations.format('ISSN', '^\\d{0,4}-?\\d{0,4}$'))) {
            this.dom.mostrar_error_campo('ISSN', 'ISSN_format_KO');
            return 'ISSN_format_KO';
        }
        this.dom.mostrar_exito_campo('ISSN');
        return true;
    }

    SEARCH_EstadoA_validation() {
        const value = document.getElementById('EstadoA').value;
        if (value === '') {
            this.dom.mostrar_exito_campo('EstadoA');
            return true;
        }
        if (!this.estadoPermitidos.includes(value)) {
            this.dom.mostrar_error_campo('EstadoA', 'EstadoA_value_KO');
            return 'EstadoA_value_KO';
        }
        this.dom.mostrar_exito_campo('EstadoA');
        return true;
    }

    ADD_submit_articulo() {
        let result = (
            this.ADD_AutoresA_validation() &
            this.ADD_TituloA_validation() &
            this.ADD_ISSN_validation() &
            this.ADD_EstadoA_validation() &
            this.ADD_nuevo_FicheropdfA_validation()
        );
        return Boolean(result);
    }

    EDIT_submit_articulo() {
        let result = (
            this.EDIT_CodigoA_validation() &
            this.EDIT_AutoresA_validation() &
            this.EDIT_TituloA_validation() &
            this.EDIT_ISSN_validation() &
            this.EDIT_EstadoA_validation() &
            this.EDIT_nuevo_FicheropdfA_validation()
        );
        return Boolean(result);
    }

    SEARCH_submit_articulo() {
        let result = (
            this.SEARCH_CodigoA_validation() &
            this.SEARCH_AutoresA_validation() &
            this.SEARCH_TituloA_validation() &
            this.SEARCH_ISSN_validation() &
            this.SEARCH_EstadoA_validation()
        );
        return Boolean(result);
    }

    _validateCodigoAStored() {
        this.dom.mostrar_exito_campo('CodigoA');
        return true;
    }

    _isEmpty(id) {
        const value = document.getElementById(id).value;
        return value === null || value.trim() === '';
    }

    _getValue(id) {
        const element = document.getElementById(id);
        return element ? element.value : '';
    }
}