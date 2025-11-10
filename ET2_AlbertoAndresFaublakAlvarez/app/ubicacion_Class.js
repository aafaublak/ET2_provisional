class ubicacion extends EntidadAbstracta {
    constructor(esTest) {
        super(esTest);
        this.nombreentidad = 'ubicacion';
        this.photoFields = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
        this.coreFields = ['site_latitud', 'site_longitud', 'site_altitude', 'site_locality', 'site_provider_login'];
        this.columnasamostrar = ['id_site', ...this.coreFields, ...this.photoFields];
        this.mostrarespecial = [...this.photoFields];
        this.attributes = [
            'id_site',
            ...this.coreFields,
            ...this.photoFields,
            ...this.photoFields.map((field) => `nuevo_${field}`)
        ];
        this.imageMimeTypes = ['image/jpeg', 'image/png'];
        this.imageNameRegex = '^[A-Za-z0-9_.-]{5,80}$';
        this.imageMaxSize = 3000000;
    }

    manual_form_creation() {
        const photoBlocks = this.photoFields
            .map((field) => `
                <label id='label_${field}' class='label_${field}'>${this._defaultPhotoLabel(field)}</label>
                <input type='text' id='${field}' name='${field}' class='${field}_placeholder' readonly>
                <a id='link_${field}' class='link_${field}' href='http://193.147.87.202/ET2/filesuploaded/files_${field}/' target='_blank' rel='noopener'>
                    <img src='./iconos/FILE.png' class='icon_file_link'/>
                </a>
                <span id='span_error_${field}'><a id='error_${field}'></a></span>
                <br>

                <label id='label_nuevo_${field}' class='label_nuevo_${field}'>${this._defaultNewPhotoLabel(field)}</label>
                <input type='file' id='nuevo_${field}' name='nuevo_${field}' class='nuevo_${field}_placeholder'>
                <span id='span_error_nuevo_${field}'><a id='error_nuevo_${field}'></a></span>
                <br>
            `)
            .join('');

        return `
            <form id='form_iu' action="" method="POST" enctype="multipart/form-data" class='formulario'>
                <label id='label_id_site' class='label_id_site'>Identificador</label>
                <input type='text' id='id_site' name='id_site' class='id_site_placeholder'>
                <span id='span_error_id_site'><a id='error_id_site'></a></span>
                <br>

                <label id='label_site_latitud' class='label_site_latitud'>Latitud</label>
                <input type='text' id='site_latitud' name='site_latitud' class='site_latitud_placeholder'>
                <span id='span_error_site_latitud'><a id='error_site_latitud'></a></span>
                <br>

                <label id='label_site_longitud' class='label_site_longitud'>Longitud</label>
                <input type='text' id='site_longitud' name='site_longitud' class='site_longitud_placeholder'>
                <span id='span_error_site_longitud'><a id='error_site_longitud'></a></span>
                <br>

                <label id='label_site_altitude' class='label_site_altitude'>Altitud</label>
                <input type='text' id='site_altitude' name='site_altitude' class='site_altitude_placeholder'>
                <span id='span_error_site_altitude'><a id='error_site_altitude'></a></span>
                <br>

                <label id='label_site_locality' class='label_site_locality'>Localidad</label>
                <input type='text' id='site_locality' name='site_locality' class='site_locality_placeholder'>
                <span id='span_error_site_locality'><a id='error_site_locality'></a></span>
                <br>

                <label id='label_site_provider_login' class='label_site_provider_login'>Proveedor</label>
                <input type='text' id='site_provider_login' name='site_provider_login' class='site_provider_login_placeholder'>
                <span id='span_error_site_provider_login'><a id='error_site_provider_login'></a></span>
                <br>

                ${photoBlocks}
            </form>
        `;
    }

    createForm_ADD() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_ADD');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        this.dom.hide_element('label_id_site');
        this.dom.hide_element_form('id_site');
        this.dom.hide_element('span_error_id_site');

        this.photoFields.forEach((field) => {
            this.dom.hide_element_form(field);
            this.dom.hide_element(`span_error_${field}`);
            this.dom.hide_element(`link_${field}`);
        });

        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }

    createForm_SEARCH() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_SEARCH');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

        this.photoFields.forEach((field) => {
            this.dom.hide_element_form(field);
            this.dom.hide_element(`link_${field}`);
            this.dom.hide_element_form(`nuevo_${field}`);
        });

        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang();
    }

    createForm_EDIT(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_EDIT');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        this.dom.rellenarvaloresform(fila);
        this.photoFields.forEach((field) => {
            this._setFileLink(field, fila[field]);
        });
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('id_site', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
        setLang();
    }

    createForm_DELETE(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_DELETE');

        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

        this.photoFields.forEach((field) => {
            this.dom.hide_element_form(`nuevo_${field}`);
        });
        this.dom.rellenarvaloresform(fila);
        this.photoFields.forEach((field) => {
            this._setFileLink(field, fila[field]);
        });
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang();
    }

    createForm_SHOWCURRENT(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_ubicacion_SHOWCURRENT');

        this.photoFields.forEach((field) => {
            this.dom.hide_element_form(`nuevo_${field}`);
        });
        this.dom.rellenarvaloresform(fila);
        this.photoFields.forEach((field) => {
            this._setFileLink(field, fila[field]);
        });
        this.dom.colocartodosreadonly('form_iu');
        setLang();
    }

    mostrarcambioatributo(atributo, valorentrada) {
        if (this.photoFields.includes(atributo)) {
            return this._renderFileCell(atributo, valorentrada);
        }
        return valorentrada;
    }

    ADD_id_site_validation() {
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }

    ADD_site_latitud_validation() {
        const value = this._parseNumber('site_latitud');
        if (value === null) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_format_KO');
            return 'site_latitud_format_KO';
        }
        if (value < -90 || value > 90) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_range_KO');
            return 'site_latitud_range_KO';
        }
        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }

    ADD_site_longitud_validation() {
        const value = this._parseNumber('site_longitud');
        if (value === null) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_format_KO');
            return 'site_longitud_format_KO';
        }
        if (value < -180 || value > 180) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_range_KO');
            return 'site_longitud_range_KO';
        }
        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }

    ADD_site_altitude_validation() {
        const value = this._parseNumber('site_altitude');
        if (value === null) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_format_KO');
            return 'site_altitude_format_KO';
        }
        if (value < -500 || value > 9000) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_range_KO');
            return 'site_altitude_range_KO';
        }
        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }

    ADD_site_locality_validation() {
        if (!(this.validations.min_size('site_locality', 3))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_min_size_KO');
            return 'site_locality_min_size_KO';
        }
        if (!(this.validations.max_size('site_locality', 120))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO');
            return 'site_locality_max_size_KO';
        }
        if (!(this.validations.format('site_locality', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9 ,.'-]+$"))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO');
            return 'site_locality_format_KO';
        }
        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }

    ADD_site_provider_login_validation() {
        if (!(this.validations.min_size('site_provider_login', 3))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_min_size_KO');
            return 'site_provider_login_min_size_KO';
        }
        if (!(this.validations.max_size('site_provider_login', 50))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO');
            return 'site_provider_login_max_size_KO';
        }
        if (!(this.validations.format('site_provider_login', '^[A-Za-z0-9_.-]+$'))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO');
            return 'site_provider_login_format_KO';
        }
        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }

    ADD_nuevo_site_north_photo_validation() {
        return this._validateNewPhoto('site_north_photo', true);
    }

    ADD_nuevo_site_south_photo_validation() {
        return this._validateNewPhoto('site_south_photo', true);
    }

    ADD_nuevo_site_east_photo_validation() {
        return this._validateNewPhoto('site_east_photo', true);
    }

    ADD_nuevo_site_west_photo_validation() {
        return this._validateNewPhoto('site_west_photo', true);
    }

    EDIT_id_site_validation() {
        return this._validateIdSiteStored();
    }

    EDIT_site_latitud_validation() {
        return this.ADD_site_latitud_validation();
    }

    EDIT_site_longitud_validation() {
        return this.ADD_site_longitud_validation();
    }

    EDIT_site_altitude_validation() {
        return this.ADD_site_altitude_validation();
    }

    EDIT_site_locality_validation() {
        return this.ADD_site_locality_validation();
    }

    EDIT_site_provider_login_validation() {
        return this.ADD_site_provider_login_validation();
    }

    EDIT_nuevo_site_north_photo_validation() {
        return this._validateNewPhoto('site_north_photo', false);
    }

    EDIT_nuevo_site_south_photo_validation() {
        return this._validateNewPhoto('site_south_photo', false);
    }

    EDIT_nuevo_site_east_photo_validation() {
        return this._validateNewPhoto('site_east_photo', false);
    }

    EDIT_nuevo_site_west_photo_validation() {
        return this._validateNewPhoto('site_west_photo', false);
    }

    SEARCH_id_site_validation() {
        if (this._isEmpty('id_site')) {
            this.dom.mostrar_exito_campo('id_site');
            return true;
        }
        if (!(this.validations.max_size('id_site', 20))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_max_size_KO');
            return 'id_site_max_size_KO';
        }
        if (!(this.validations.format('id_site', '^[A-Z0-9_]*$'))) {
            this.dom.mostrar_error_campo('id_site', 'id_site_format_KO');
            return 'id_site_format_KO';
        }
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }

    SEARCH_site_latitud_validation() {
        const valueRaw = document.getElementById('site_latitud').value.trim();
        if (valueRaw === '') {
            this.dom.mostrar_exito_campo('site_latitud');
            return true;
        }
        const value = Number(valueRaw.replace(',', '.'));
        if (Number.isNaN(value)) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_format_KO');
            return 'site_latitud_format_KO';
        }
        if (value < -90 || value > 90) {
            this.dom.mostrar_error_campo('site_latitud', 'site_latitud_range_KO');
            return 'site_latitud_range_KO';
        }
        this.dom.mostrar_exito_campo('site_latitud');
        return true;
    }

    SEARCH_site_longitud_validation() {
        const valueRaw = document.getElementById('site_longitud').value.trim();
        if (valueRaw === '') {
            this.dom.mostrar_exito_campo('site_longitud');
            return true;
        }
        const value = Number(valueRaw.replace(',', '.'));
        if (Number.isNaN(value)) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_format_KO');
            return 'site_longitud_format_KO';
        }
        if (value < -180 || value > 180) {
            this.dom.mostrar_error_campo('site_longitud', 'site_longitud_range_KO');
            return 'site_longitud_range_KO';
        }
        this.dom.mostrar_exito_campo('site_longitud');
        return true;
    }

    SEARCH_site_altitude_validation() {
        const valueRaw = document.getElementById('site_altitude').value.trim();
        if (valueRaw === '') {
            this.dom.mostrar_exito_campo('site_altitude');
            return true;
        }
        const value = Number(valueRaw.replace(',', '.'));
        if (Number.isNaN(value)) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_format_KO');
            return 'site_altitude_format_KO';
        }
        if (value < -500 || value > 9000) {
            this.dom.mostrar_error_campo('site_altitude', 'site_altitude_range_KO');
            return 'site_altitude_range_KO';
        }
        this.dom.mostrar_exito_campo('site_altitude');
        return true;
    }

    SEARCH_site_locality_validation() {
        if (this._isEmpty('site_locality')) {
            this.dom.mostrar_exito_campo('site_locality');
            return true;
        }
        if (!(this.validations.max_size('site_locality', 120))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_max_size_KO');
            return 'site_locality_max_size_KO';
        }
        if (!(this.validations.format('site_locality', "^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9 ,.'-]+$"))) {
            this.dom.mostrar_error_campo('site_locality', 'site_locality_format_KO');
            return 'site_locality_format_KO';
        }
        this.dom.mostrar_exito_campo('site_locality');
        return true;
    }

    SEARCH_site_provider_login_validation() {
        if (this._isEmpty('site_provider_login')) {
            this.dom.mostrar_exito_campo('site_provider_login');
            return true;
        }
        if (!(this.validations.max_size('site_provider_login', 50))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_max_size_KO');
            return 'site_provider_login_max_size_KO';
        }
        if (!(this.validations.format('site_provider_login', '^[A-Za-z0-9_.-]+$'))) {
            this.dom.mostrar_error_campo('site_provider_login', 'site_provider_login_format_KO');
            return 'site_provider_login_format_KO';
        }
        this.dom.mostrar_exito_campo('site_provider_login');
        return true;
    }

    ADD_submit_ubicacion() {
        let result = (
            this.ADD_site_latitud_validation() &
            this.ADD_site_longitud_validation() &
            this.ADD_site_altitude_validation() &
            this.ADD_site_locality_validation() &
            this.ADD_site_provider_login_validation() &
            this.ADD_nuevo_site_north_photo_validation() &
            this.ADD_nuevo_site_south_photo_validation() &
            this.ADD_nuevo_site_east_photo_validation() &
            this.ADD_nuevo_site_west_photo_validation()
        );
        return Boolean(result);
    }

    EDIT_submit_ubicacion() {
        let result = (
            this.EDIT_site_latitud_validation() &
            this.EDIT_site_longitud_validation() &
            this.EDIT_site_altitude_validation() &
            this.EDIT_site_locality_validation() &
            this.EDIT_site_provider_login_validation() &
            this.EDIT_nuevo_site_north_photo_validation() &
            this.EDIT_nuevo_site_south_photo_validation() &
            this.EDIT_nuevo_site_east_photo_validation() &
            this.EDIT_nuevo_site_west_photo_validation()
        );
        return Boolean(result);
    }

    SEARCH_submit_ubicacion() {
        let result = (
            this.SEARCH_id_site_validation() &
            this.SEARCH_site_latitud_validation() &
            this.SEARCH_site_longitud_validation() &
            this.SEARCH_site_altitude_validation() &
            this.SEARCH_site_locality_validation() &
            this.SEARCH_site_provider_login_validation()
        );
        return Boolean(result);
    }

    _setFileLink(field, filename) {
        const linkId = `link_${field}`;
        const href = this._fileBaseUrl(field) + (filename || '');
        this.dom.assign_property_value(linkId, 'href', href);
        if (filename) {
            this.dom.show_element(linkId, 'inline-block');
        } else {
            this.dom.hide_element(linkId);
        }
    }

    _renderFileCell(field, filename) {
        if (filename && filename !== '') {
            const href = this._fileBaseUrl(field) + filename;
            return `${filename} <a class="link_${field}" href="${href}" target="_blank"><img src="./iconos/FILE.png" class="icon_file_link"/></a>`;
        }
        return '-';
    }

    _fileBaseUrl(field) {
        return `http://193.147.87.202/ET2/filesuploaded/files_${field}/`;
    }

    _defaultPhotoLabel(field) {
        const orientation = this._photoOrientation(field);
        const defaults = {
            north: 'Foto norte',
            south: 'Foto sur',
            east: 'Foto este',
            west: 'Foto oeste'
        };
        return defaults[orientation] || 'Foto';
    }

    _defaultNewPhotoLabel(field) {
        const orientation = this._photoOrientation(field);
        const defaults = {
            north: 'Nueva foto norte',
            south: 'Nueva foto sur',
            east: 'Nueva foto este',
            west: 'Nueva foto oeste'
        };
        return defaults[orientation] || 'Nueva foto';
    }

    _photoOrientation(field) {
        const [, orientation] = field.split('_');
        return orientation || '';
    }

    _validateNewPhoto(field, required) {
        const nuevoId = `nuevo_${field}`;
        if (!this.validations.not_exist_file(nuevoId)) {
            if (required) {
                const errorCode = `${field}_required_KO`;
                this.dom.mostrar_error_campo(nuevoId, errorCode);
                return errorCode;
            }
            this.dom.mostrar_exito_campo(nuevoId);
            return true;
        }
        if (!this.validations.max_size_file(nuevoId, this.imageMaxSize)) {
            const errorCode = `${field}_max_size_KO`;
            this.dom.mostrar_error_campo(nuevoId, errorCode);
            return errorCode;
        }
        if (!this.validations.type_file(nuevoId, this.imageMimeTypes)) {
            const errorCode = `${field}_type_KO`;
            this.dom.mostrar_error_campo(nuevoId, errorCode);
            return errorCode;
        }
        if (!this.validations.format_name_file(nuevoId, this.imageNameRegex)) {
            const errorCode = `${field}_name_KO`;
            this.dom.mostrar_error_campo(nuevoId, errorCode);
            return errorCode;
        }
        this.dom.mostrar_exito_campo(nuevoId);
        return true;
    }

    _validateIdSiteStored() {
        if (this._isEmpty('id_site')) {
            this.dom.mostrar_error_campo('id_site', 'id_site_required_KO');
            return 'id_site_required_KO';
        }
        this.dom.mostrar_exito_campo('id_site');
        return true;
    }

    _isEmpty(id) {
        const value = document.getElementById(id).value;
        return value === null || value.trim() === '';
    }

    _parseNumber(id) {
        const raw = document.getElementById(id).value.trim();
        if (raw === '') {
            return null;
        }
        const value = Number(raw.replace(',', '.'));
        return Number.isNaN(value) ? null : value;
    }
}