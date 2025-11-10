class alumnograduacion extends EntidadAbstracta {
    constructor(esTest) {
        super(esTest);
        this.nombreentidad = 'alumnograduacion';
        this.columnasamostrar = ['login', 'nombre', 'apellidos', 'titulacion', 'email'];
        this.mostrarespecial = ['fotoacto'];
        this.attributes = [
            'login',
            'password',
            'nombre',
            'apellidos',
            'titulacion',
            'dni',
            'direccion',
            'email',
            'fotoacto',
            'nuevo_fotoacto'
        ];
        this.titulaciones = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
        this.fotoMimeTypes = ['image/jpeg'];
        this.fotoNameRegex = '^[A-Za-z0-9.]{7,40}$';
        this.fotoMaxSize = 2000000;
    }

    manual_form_creation() {
        return `
            <form id='form_iu' action="" method="POST" enctype="multipart/form-data" class='formulario'>
                <label id='label_login' class='label_login'>Login</label>
                <input type='text' id='login' name='login' class='login_placeholder'>
                <span id='span_error_login'><a id='error_login'></a></span>
                <br>

                <label id='label_password' class='label_password'>Contraseña</label>
                <input type='password' id='password' name='password' class='password_placeholder'>
                <span id='span_error_password'><a id='error_password'></a></span>
                <br>

                <label id='label_nombre' class='label_nombre'>Nombre</label>
                <input type='text' id='nombre' name='nombre' class='nombre_placeholder'>
                <span id='span_error_nombre'><a id='error_nombre'></a></span>
                <br>

                <label id='label_apellidos' class='label_apellidos'>Apellidos</label>
                <input type='text' id='apellidos' name='apellidos' class='apellidos_placeholder'>
                <span id='span_error_apellidos'><a id='error_apellidos'></a></span>
                <br>

                <label id='label_titulacion' class='label_titulacion'>Titulación</label>
                <select id='titulacion' name='titulacion'>
                    <option value='GREI' class='titulacion_option_GREI'>GREI</option>
                    <option value='GRIA' class='titulacion_option_GRIA'>GRIA</option>
                    <option value='MEI' class='titulacion_option_MEI'>MEI</option>
                    <option value='MIA' class='titulacion_option_MIA'>MIA</option>
                    <option value='PCEO' class='titulacion_option_PCEO'>PCEO</option>
                </select>
                <span id='span_error_titulacion'><a id='error_titulacion'></a></span>
                <br>

                <label id='label_dni' class='label_dni'>DNI/NIE</label>
                <input type='text' id='dni' name='dni' class='dni_placeholder'>
                <span id='span_error_dni'><a id='error_dni'></a></span>
                <br>

                <label id='label_direccion' class='label_direccion'>Dirección</label>
                <textarea id='direccion' name='direccion' rows='3' class='direccion_placeholder'></textarea>
                <span id='span_error_direccion'><a id='error_direccion'></a></span>
                <br>

                <label id='label_email' class='label_email'>Email</label>
                <input type='text' id='email' name='email' class='email_placeholder'>
                <span id='span_error_email'><a id='error_email'></a></span>
                <br>

                <label id='label_fotoacto' class='label_fotoacto'>Foto acto</label>
                <input type='text' id='fotoacto' name='fotoacto' class='fotoacto_placeholder' readonly>
                <a id='link_fotoacto' class='link_fotoacto' href='http://193.147.87.202/ET2/filesuploaded/files_fotoacto/' target='_blank' rel='noopener'>
                    <img src='./iconos/FILE.png' class='icon_file_link'/>
                </a>
                <span id='span_error_fotoacto'><a id='error_fotoacto'></a></span>
                <br>

                <label id='label_nuevo_fotoacto' class='label_nuevo_fotoacto'>Nueva foto</label>
                <input type='file' id='nuevo_fotoacto' name='nuevo_fotoacto' class='nuevo_fotoacto_placeholder'>
                <span id='span_error_nuevo_fotoacto'><a id='error_nuevo_fotoacto'></a></span>
                <br>
            </form>
        `;
    }

    createForm_ADD() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_ADD');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.ADD_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

        this.dom.hide_element_form('fotoacto');
        this.dom.hide_element('link_fotoacto');

        this.dom.colocarvalidaciones('form_iu', 'ADD');
        this.dom.colocarboton('ADD');
        setLang();
    }

    createForm_SEARCH() {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SEARCH');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.SEARCH_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

        this.dom.hide_element_form('fotoacto');
        this.dom.hide_element('link_fotoacto');
        this.dom.hide_element_form('nuevo_fotoacto');
        this.dom.replaceSelectXEmptyInput('titulacion');
        this.dom.assign_class_value('titulacion', 'titulacion_placeholder_search');

        this.dom.colocarvalidaciones('form_iu', 'SEARCH');
        this.dom.colocarboton('SEARCH');
        setLang();
    }

    createForm_EDIT(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_EDIT');

        this.dom.assign_property_value('form_iu', 'onsubmit', 'return entidad.EDIT_submit_' + this.nombreentidad + '()');
        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

        this.dom.rellenarvaloresform(fila);
        this.dom.assign_property_value('link_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_fotoacto/' + fila.fotoacto);
        if (fila.fotoacto) {
            this.dom.show_element('link_fotoacto', 'inline-block');
        } else {
            this.dom.hide_element('link_fotoacto');
        }
        this.dom.colocarvalidaciones('form_iu', 'EDIT');
        this.dom.assign_property_value('login', 'readonly', 'true');
        this.dom.colocarboton('EDIT');
        setLang();
    }

    createForm_DELETE(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_DELETE');

        this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

        this.dom.hide_element_form('nuevo_fotoacto');
        this.dom.rellenarvaloresform(fila);
        this.dom.assign_property_value('link_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_fotoacto/' + fila.fotoacto);
        if (fila.fotoacto) {
            this.dom.show_element('link_fotoacto', 'inline-block');
        } else {
            this.dom.hide_element('link_fotoacto');
        }
        this.dom.colocartodosreadonly('form_iu');
        this.dom.colocarboton('DELETE');
        setLang();
    }

    createForm_SHOWCURRENT(fila) {
        document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
        this.dom.show_element('Div_IU_form', 'block');
        this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
        this.dom.assign_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form_alumnograduacion_SHOWCURRENT');

        this.dom.hide_element_form('nuevo_fotoacto');
        this.dom.rellenarvaloresform(fila);
        this.dom.assign_property_value('link_fotoacto', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_fotoacto/' + fila.fotoacto);
        if (fila.fotoacto) {
            this.dom.show_element('link_fotoacto', 'inline-block');
        } else {
            this.dom.hide_element('link_fotoacto');
        }
        this.dom.colocartodosreadonly('form_iu');
        setLang();
    }

    mostrarcambioatributo(atributo, valorentrada) {
        if (atributo === 'fotoacto') {
            if (valorentrada && valorentrada !== '') {
                return `${valorentrada} <a class="link_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_fotoacto/${valorentrada}" target="_blank"><img src="./iconos/FILE.png" class="icon_file_link"/></a>`;
            }
            return '-';
        }
        return valorentrada;
    }

    ADD_login_validation() {
        if (!(this.validations.min_size('login', 4))) {
            this.dom.mostrar_error_campo('login', 'login_min_size_KO');
            return 'login_min_size_KO';
        }
        if (!(this.validations.max_size('login', 15))) {
            this.dom.mostrar_error_campo('login', 'login_max_size_KO');
            return 'login_max_size_KO';
        }
        if (!(this.validations.format('login', '^[A-Za-z0-9]{4,15}$'))) {
            this.dom.mostrar_error_campo('login', 'login_format_KO');
            return 'login_format_KO';
        }
        this.dom.mostrar_exito_campo('login');
        return true;
    }

    ADD_password_validation() {
        const value = document.getElementById('password').value;
        if (value.length < 8) {
            this.dom.mostrar_error_campo('password', 'password_min_size_KO');
            return 'password_min_size_KO';
        }
        if (value.length > 64) {
            this.dom.mostrar_error_campo('password', 'password_max_size_KO');
            return 'password_max_size_KO';
        }
        if (!(this.validations.format('password', '^[A-Za-z ]+$'))) {
            this.dom.mostrar_error_campo('password', 'password_format_KO');
            return 'password_format_KO';
        }
        this.dom.mostrar_exito_campo('password');
        return true;
    }

    ADD_nombre_validation() {
        if (!(this.validations.min_size('nombre', 2))) {
            this.dom.mostrar_error_campo('nombre', 'nombre_min_size_KO');
            return 'nombre_min_size_KO';
        }
        if (!(this.validations.max_size('nombre', 25))) {
            this.dom.mostrar_error_campo('nombre', 'nombre_max_size_KO');
            return 'nombre_max_size_KO';
        }
        if (!(this.validations.format('nombre', "^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$"))) {
            this.dom.mostrar_error_campo('nombre', 'nombre_format_KO');
            return 'nombre_format_KO';
        }
        this.dom.mostrar_exito_campo('nombre');
        return true;
    }

    ADD_apellidos_validation() {
        if (!(this.validations.min_size('apellidos', 2))) {
            this.dom.mostrar_error_campo('apellidos', 'apellidos_min_size_KO');
            return 'apellidos_min_size_KO';
        }
        if (!(this.validations.max_size('apellidos', 35))) {
            this.dom.mostrar_error_campo('apellidos', 'apellidos_max_size_KO');
            return 'apellidos_max_size_KO';
        }
        if (!(this.validations.format('apellidos', "^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$"))) {
            this.dom.mostrar_error_campo('apellidos', 'apellidos_format_KO');
            return 'apellidos_format_KO';
        }
        this.dom.mostrar_exito_campo('apellidos');
        return true;
    }

    ADD_titulacion_validation() {
        const value = document.getElementById('titulacion').value;
        if (!this.titulaciones.includes(value)) {
            this.dom.mostrar_error_campo('titulacion', 'titulacion_value_KO');
            return 'titulacion_value_KO';
        }
        this.dom.mostrar_exito_campo('titulacion');
        return true;
    }

    ADD_dni_validation() {
        const value = document.getElementById('dni').value.trim().toUpperCase();
        if (value.length !== 9) {
            this.dom.mostrar_error_campo('dni', 'dni_length_KO');
            return 'dni_length_KO';
        }
        if (!this._validateDniNie(value)) {
            this.dom.mostrar_error_campo('dni', 'dni_format_KO');
            return 'dni_format_KO';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }

    ADD_direccion_validation() {
        const value = this._getValue('direccion');
        if (value.length > 100) {
            this.dom.mostrar_error_campo('direccion', 'direccion_max_size_KO');
            return 'direccion_max_size_KO';
        }
        if (!(this.validations.format('direccion', "^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,.\-]*$"))) {
            this.dom.mostrar_error_campo('direccion', 'direccion_format_KO');
            return 'direccion_format_KO';
        }
        this.dom.mostrar_exito_campo('direccion');
        return true;
    }

    ADD_email_validation() {
        if (!(this.validations.max_size('email', 40))) {
            this.dom.mostrar_error_campo('email', 'email_max_size_KO');
            return 'email_max_size_KO';
        }
        if (!(this.validations.format('email', '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'))) {
            this.dom.mostrar_error_campo('email', 'email_format_KO');
            return 'email_format_KO';
        }
        this.dom.mostrar_exito_campo('email');
        return true;
    }

    ADD_nuevo_fotoacto_validation() {
        if (!(this.validations.not_exist_file('nuevo_fotoacto'))) {
            this.dom.mostrar_error_campo('nuevo_fotoacto', 'fotoacto_required_KO');
            return 'fotoacto_required_KO';
        }
        if (!(this.validations.max_size_file('nuevo_fotoacto', this.fotoMaxSize))) {
            this.dom.mostrar_error_campo('nuevo_fotoacto', 'fotoacto_max_size_KO');
            return 'fotoacto_max_size_KO';
        }
        if (!(this.validations.type_file('nuevo_fotoacto', this.fotoMimeTypes))) {
            this.dom.mostrar_error_campo('nuevo_fotoacto', 'fotoacto_type_KO');
            return 'fotoacto_type_KO';
        }
        if (!(this.validations.format_name_file('nuevo_fotoacto', this.fotoNameRegex))) {
            this.dom.mostrar_error_campo('nuevo_fotoacto', 'fotoacto_name_KO');
            return 'fotoacto_name_KO';
        }
        this.dom.mostrar_exito_campo('nuevo_fotoacto');
        return true;
    }

    EDIT_login_validation() {
        return this.ADD_login_validation();
    }

    EDIT_password_validation() {
        if (this._isEmpty('password')) {
            this.dom.mostrar_exito_campo('password');
            return true;
        }
        return this.ADD_password_validation();
    }

    EDIT_nombre_validation() {
        return this.ADD_nombre_validation();
    }

    EDIT_apellidos_validation() {
        return this.ADD_apellidos_validation();
    }

    EDIT_titulacion_validation() {
        return this.ADD_titulacion_validation();
    }

    EDIT_dni_validation() {
        return this.ADD_dni_validation();
    }

    EDIT_direccion_validation() {
        return this.ADD_direccion_validation();
    }

    EDIT_email_validation() {
        return this.ADD_email_validation();
    }

    EDIT_nuevo_fotoacto_validation() {
        if (!(this.validations.not_exist_file('nuevo_fotoacto'))) {
            this.dom.mostrar_exito_campo('nuevo_fotoacto');
            return true;
        }
        if (!(this.validations.max_size_file('nuevo_fotoacto', this.fotoMaxSize))) {
            this.dom.mostrar_error_campo('nuevo_fotoacto', 'fotoacto_max_size_KO');
            return 'fotoacto_max_size_KO';
        }
        if (!(this.validations.type_file('nuevo_fotoacto', this.fotoMimeTypes))) {
            this.dom.mostrar_error_campo('nuevo_fotoacto', 'fotoacto_type_KO');
            return 'fotoacto_type_KO';
        }
        if (!(this.validations.format_name_file('nuevo_fotoacto', this.fotoNameRegex))) {
            this.dom.mostrar_error_campo('nuevo_fotoacto', 'fotoacto_name_KO');
            return 'fotoacto_name_KO';
        }
        this.dom.mostrar_exito_campo('nuevo_fotoacto');
        return true;
    }

    SEARCH_login_validation() {
        if (this._isEmpty('login')) {
            this.dom.mostrar_exito_campo('login');
            return true;
        }
        if (!(this.validations.max_size('login', 15))) {
            this.dom.mostrar_error_campo('login', 'login_max_size_KO');
            return 'login_max_size_KO';
        }
        if (!(this.validations.format('login', '^[A-Za-z0-9]*$'))) {
            this.dom.mostrar_error_campo('login', 'login_format_KO');
            return 'login_format_KO';
        }
        this.dom.mostrar_exito_campo('login');
        return true;
    }

    SEARCH_password_validation() {
        const value = document.getElementById('password').value;
        if (value.trim() === '') {
            this.dom.mostrar_exito_campo('password');
            return true;
        }
        if (value.length > 64) {
            this.dom.mostrar_error_campo('password', 'password_max_size_KO');
            return 'password_max_size_KO';
        }
        if (!(this.validations.format('password', '^[A-Za-z ]*$'))) {
            this.dom.mostrar_error_campo('password', 'password_format_KO');
            return 'password_format_KO';
        }
        this.dom.mostrar_exito_campo('password');
        return true;
    }

    SEARCH_nombre_validation() {
        if (this._isEmpty('nombre')) {
            this.dom.mostrar_exito_campo('nombre');
            return true;
        }
        if (!(this.validations.max_size('nombre', 25))) {
            this.dom.mostrar_error_campo('nombre', 'nombre_max_size_KO');
            return 'nombre_max_size_KO';
        }
        if (!(this.validations.format('nombre', "^[A-Za-zÁÉÍÓÚáéíóúÑñ ]*$"))) {
            this.dom.mostrar_error_campo('nombre', 'nombre_format_KO');
            return 'nombre_format_KO';
        }
        this.dom.mostrar_exito_campo('nombre');
        return true;
    }

    SEARCH_apellidos_validation() {
        if (this._isEmpty('apellidos')) {
            this.dom.mostrar_exito_campo('apellidos');
            return true;
        }
        if (!(this.validations.max_size('apellidos', 35))) {
            this.dom.mostrar_error_campo('apellidos', 'apellidos_max_size_KO');
            return 'apellidos_max_size_KO';
        }
        if (!(this.validations.format('apellidos', "^[A-Za-zÁÉÍÓÚáéíóúÑñ ]*$"))) {
            this.dom.mostrar_error_campo('apellidos', 'apellidos_format_KO');
            return 'apellidos_format_KO';
        }
        this.dom.mostrar_exito_campo('apellidos');
        return true;
    }

    SEARCH_titulacion_validation() {
        const value = document.getElementById('titulacion').value;
        if (value === '') {
            this.dom.mostrar_exito_campo('titulacion');
            return true;
        }
        if (!this.titulaciones.includes(value)) {
            this.dom.mostrar_error_campo('titulacion', 'titulacion_value_KO');
            return 'titulacion_value_KO';
        }
        this.dom.mostrar_exito_campo('titulacion');
        return true;
    }

    SEARCH_dni_validation() {
        const value = document.getElementById('dni').value.trim();
        if (value === '') {
            this.dom.mostrar_exito_campo('dni');
            return true;
        }
        if (value.length > 9) {
            this.dom.mostrar_error_campo('dni', 'dni_length_KO');
            return 'dni_length_KO';
        }
        if (!this._validatePartialDni(value)) {
            this.dom.mostrar_error_campo('dni', 'dni_format_KO');
            return 'dni_format_KO';
        }
        this.dom.mostrar_exito_campo('dni');
        return true;
    }

    SEARCH_direccion_validation() {
        const value = this._getValue('direccion');
        if (value.trim() === '') {
            this.dom.mostrar_exito_campo('direccion');
            return true;
        }
        if (value.length > 100) {
            this.dom.mostrar_error_campo('direccion', 'direccion_max_size_KO');
            return 'direccion_max_size_KO';
        }
        if (!(this.validations.format('direccion', "^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ,.\-]*$"))) {
            this.dom.mostrar_error_campo('direccion', 'direccion_format_KO');
            return 'direccion_format_KO';
        }
        this.dom.mostrar_exito_campo('direccion');
        return true;
    }

    SEARCH_email_validation() {
        if (this._isEmpty('email')) {
            this.dom.mostrar_exito_campo('email');
            return true;
        }
        if (!(this.validations.max_size('email', 40))) {
            this.dom.mostrar_error_campo('email', 'email_max_size_KO');
            return 'email_max_size_KO';
        }
        if (!(this.validations.format('email', '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]*$'))) {
            this.dom.mostrar_error_campo('email', 'email_format_KO');
            return 'email_format_KO';
        }
        this.dom.mostrar_exito_campo('email');
        return true;
    }

    ADD_submit_alumnograduacion() {
        let result = (
            this.ADD_login_validation() &
            this.ADD_password_validation() &
            this.ADD_nombre_validation() &
            this.ADD_apellidos_validation() &
            this.ADD_titulacion_validation() &
            this.ADD_dni_validation() &
            this.ADD_direccion_validation() &
            this.ADD_email_validation() &
            this.ADD_nuevo_fotoacto_validation()
        );
        return Boolean(result);
    }

    EDIT_submit_alumnograduacion() {
        let result = (
            this.EDIT_login_validation() &
            this.EDIT_password_validation() &
            this.EDIT_nombre_validation() &
            this.EDIT_apellidos_validation() &
            this.EDIT_titulacion_validation() &
            this.EDIT_dni_validation() &
            this.EDIT_direccion_validation() &
            this.EDIT_email_validation() &
            this.EDIT_nuevo_fotoacto_validation()
        );
        return Boolean(result);
    }

    SEARCH_submit_alumnograduacion() {
        let result = (
            this.SEARCH_login_validation() &
            this.SEARCH_password_validation() &
            this.SEARCH_nombre_validation() &
            this.SEARCH_apellidos_validation() &
            this.SEARCH_titulacion_validation() &
            this.SEARCH_dni_validation() &
            this.SEARCH_direccion_validation() &
            this.SEARCH_email_validation()
        );
        return Boolean(result);
    }

    _isEmpty(id) {
        const value = document.getElementById(id).value;
        return value === null || value.trim() === '';
    }

    _getValue(id) {
        const element = document.getElementById(id);
        return element ? element.value : '';
    }

    _validateDniNie(value) {
        const dniRegex = /^\d{8}[A-Z]$/;
        const nieRegex = /^[XYZ]\d{7}[A-Z]$/;
        if (!(dniRegex.test(value) || nieRegex.test(value))) {
            return false;
        }
        const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let number = value;
        if (nieRegex.test(value)) {
            const map = { X: '0', Y: '1', Z: '2' };
            number = map[value[0]] + value.substring(1);
        }
        const numeric = parseInt(number.substring(0, 8), 10);
        const expected = letters[numeric % 23];
        return expected === value[value.length - 1];
    }

    _validatePartialDni(value) {
        const pattern = /^[A-Za-z0-9]*$/;
        return pattern.test(value) && value.length <= 9;
    }
}