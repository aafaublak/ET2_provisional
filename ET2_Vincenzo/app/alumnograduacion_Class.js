class alumnograduacion extends EntidadAbstracta {
	constructor(esTest) {
		super(esTest);

		this.columnasamostrar = ['login', 'nombre', 'apellidos', 'titulacion', 'email', 'telefono'];
		this.mostrarespecial = ['fotoacto'];
		this.attributes = [
			'login',
			'password',
			'nombre',
			'apellidos',
			'titulacion',
			'dni',
			'telefono',
			'direccion',
			'email',
			'fotoacto',
			'nuevo_fotoacto'
		];

		this.fileBaseUrls = {
			fotoacto: 'http://193.147.87.202/ET2/filesuploaded/files_fotoacto/'
		};
	}

	manual_form_creation() {
		return `
			<form id="form_iu" class="formulario" method="POST" enctype="multipart/form-data">
				<label id="label_login" class="label_login">Login</label>
				<input type="text" id="login" name="alumnograduacion_login" />
				<span id="span_error_login"><a id="error_login"></a></span>
				<br>

				<label id="label_password" class="label_password">Password</label>
				<input type="password" id="password" name="alumnograduacion_password" />
				<span id="span_error_password"><a id="error_password"></a></span>
				<br>

				<label id="label_nombre" class="label_nombre">Nombre</label>
				<input type="text" id="nombre" name="alumnograduacion_nombre" />
				<span id="span_error_nombre"><a id="error_nombre"></a></span>
				<br>

				<label id="label_apellidos" class="label_apellidos">Apellidos</label>
				<input type="text" id="apellidos" name="alumnograduacion_apellidos" />
				<span id="span_error_apellidos"><a id="error_apellidos"></a></span>
				<br>

				<label id="label_titulacion" class="label_titulacion">Titulación</label>
				<select id="titulacion" name="alumnograduacion_titulacion">
					<option value="">--</option>
					<option value="GREI">GREI</option>
					<option value="GRIA">GRIA</option>
					<option value="MEI">MEI</option>
					<option value="MIA">MIA</option>
					<option value="PCEO">PCEO</option>
				</select>
				<span id="span_error_titulacion"><a id="error_titulacion"></a></span>
				<br>

				<label id="label_dni" class="label_dni">DNI/NIE</label>
				<input type="text" id="dni" name="alumnograduacion_dni" />
				<span id="span_error_dni"><a id="error_dni"></a></span>
				<br>

				<label id="label_telefono" class="label_telefono">Teléfono</label>
				<input type="text" id="telefono" name="alumnograduacion_telefono" />
				<span id="span_error_telefono"><a id="error_telefono"></a></span>
				<br>

				<label id="label_direccion" class="label_direccion">Dirección</label>
				<textarea id="direccion" name="alumnograduacion_direccion" rows="3"></textarea>
				<span id="span_error_direccion"><a id="error_direccion"></a></span>
				<br>

				<label id="label_email" class="label_email">Email</label>
				<input type="text" id="email" name="alumnograduacion_email" />
				<span id="span_error_email"><a id="error_email"></a></span>
				<br>

				<label id="label_fotoacto" class="label_fotoacto">Foto acto</label>
				<input type="text" id="fotoacto" name="alumnograduacion_fotoacto" readonly />
				<span id="span_error_fotoacto"><a id="error_fotoacto"></a></span>
				<a id="link_fotoacto" href="${this.fileBaseUrls.fotoacto}" target="_blank">
					<img src="./iconos/FILE.png" alt="file" />
				</a>
				<br>

				<label id="label_nuevo_fotoacto" class="label_nuevo_fotoacto">Nueva foto acto</label>
				<input type="file" id="nuevo_fotoacto" name="nuevo_fotoacto" accept=".jpg,.jpeg,.png" />
				<span id="span_error_nuevo_fotoacto"><a id="error_nuevo_fotoacto"></a></span>
			</form>
		`;
	}

	createForm_ADD() {
		this.prepareBaseForm('ADD');
		this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.ADD_submit_${this.nombreentidad}()`);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		this.hideFileName();
		this.dom.hide_element('link_fotoacto');
		const fotoField = document.getElementById('fotoacto');
		if (fotoField) {
			fotoField.value = '';
		}

		this.dom.colocarvalidaciones('form_iu', 'ADD');
		this.dom.colocarboton('ADD');

		setLang();
	}

	createForm_SEARCH() {
		this.prepareBaseForm('SEARCH');
		this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.SEARCH_submit_${this.nombreentidad}()`);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		this.dom.hide_element('link_fotoacto');
		this.dom.hide_element_form('nuevo_fotoacto');
		this.showFileName();

		this.dom.replaceSelectXEmptyInput('titulacion');

		this.dom.colocarvalidaciones('form_iu', 'SEARCH');
		this.dom.colocarboton('SEARCH');

		setLang();
	}

	createForm_EDIT(fila) {
		this.prepareBaseForm('EDIT');
		this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.EDIT_submit_${this.nombreentidad}()`);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		const normalizedFila = this.populateData(fila);
		this.showFileName();
		this.setupFileLink(normalizedFila.fotoacto);

		this.dom.colocarvalidaciones('form_iu', 'EDIT');
		this.dom.colocarboton('EDIT');

		setLang();
	}

	createForm_DELETE(fila) {
		this.prepareBaseForm('DELETE');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		const normalizedFila = this.populateData(fila);
		this.setupFileLink(normalizedFila.fotoacto);
		this.dom.colocartodosreadonly('form_iu');
		this.dom.hide_element_form('nuevo_fotoacto');

		this.dom.colocarboton('DELETE');
		setLang();
	}

	createForm_SHOWCURRENT(fila) {
		this.prepareBaseForm('SHOWCURRENT');

		const normalizedFila = this.populateData(fila);
		const pwdField = document.getElementById('password');
		if (pwdField && !pwdField.value) {
			pwdField.placeholder = '••••••••';
		}
		this.setupFileLink(normalizedFila.fotoacto);
		this.dom.colocartodosreadonly('form_iu');
		this.dom.hide_element_form('nuevo_fotoacto');

		setLang();
	}

	prepareBaseForm(action) {
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', `text_contenido_titulo_form_${this.nombreentidad}_${action}`);
	}

	populateData(fila) {
		this.showFileName();
		const normalized = this.normalizeFilaParaFormulario(fila);
		this.dom.rellenarvaloresform(normalized);
		return normalized;
	}

	showFileName() {
		document.getElementById('label_fotoacto').style.display = 'block';
		document.getElementById('fotoacto').style.display = 'block';
	}

	hideFileName() {
		this.dom.hide_element_form('fotoacto');
	}

	setupFileLink(valor) {
		if (valor) {
			this.dom.show_element('link_fotoacto', 'inline');
			this.dom.assign_property_value('link_fotoacto', 'href', `${this.fileBaseUrls.fotoacto}${valor}`);
		} else {
			this.dom.hide_element('link_fotoacto');
			this.dom.assign_property_value('link_fotoacto', 'href', this.fileBaseUrls.fotoacto);
		}
	}

	mostrarcambioatributo(atributo, valorentrada) {
		if (atributo === 'fotoacto' && valorentrada) {
			return `${valorentrada} <a class="link_fotoacto" href="${this.fileBaseUrls.fotoacto}${valorentrada}"><img src="./iconos/FILE.png" /></a>`;
		}
		return valorentrada;
	}

	normalizeFilaParaFormulario(fila = {}) {
		const safeValue = value => value ?? '';
		return {
			login: safeValue(fila.alumnograduacion_login ?? fila.login),
			password: safeValue(fila.alumnograduacion_password ?? fila.password),
			nombre: safeValue(fila.alumnograduacion_nombre ?? fila.nombre),
			apellidos: safeValue(fila.alumnograduacion_apellidos ?? fila.apellidos),
			titulacion: safeValue(fila.alumnograduacion_titulacion ?? fila.titulacion),
			dni: safeValue(fila.alumnograduacion_dni ?? fila.dni),
			telefono: safeValue(fila.alumnograduacion_telefono ?? fila.telefono),
			direccion: safeValue(fila.alumnograduacion_direccion ?? fila.direccion),
			email: safeValue(fila.alumnograduacion_email ?? fila.email),
			fotoacto: safeValue(fila.alumnograduacion_fotoacto ?? fila.fotoacto)
		};
	}

	// Validaciones ADD
	ADD_login_validation() { return this.validateLogin(); }
	ADD_password_validation() { return this.validatePassword(); }
	ADD_nombre_validation() { return this.validateNombre(); }
	ADD_apellidos_validation() { return this.validateApellidos(); }
	ADD_titulacion_validation() { return this.validateTitulacion(true); }
	ADD_dni_validation() { return this.validateDni(); }
	ADD_telefono_validation() { return this.validateTelefono(); }
	ADD_direccion_validation() { return this.validateDireccion(); }
	ADD_email_validation() { return this.validateEmail(); }
	ADD_fotoacto_validation() { return true; }
	ADD_nuevo_fotoacto_validation() { return this.validateFotoFile(true); }

	// Validaciones EDIT
	EDIT_login_validation() { return this.validateLogin(); }
	EDIT_password_validation() { return this.validatePassword(); }
	EDIT_nombre_validation() { return this.validateNombre(); }
	EDIT_apellidos_validation() { return this.validateApellidos(); }
	EDIT_titulacion_validation() { return this.validateTitulacion(true); }
	EDIT_dni_validation() { return this.validateDni(); }
	EDIT_telefono_validation() { return this.validateTelefono(); }
	EDIT_direccion_validation() { return this.validateDireccion(); }
	EDIT_email_validation() { return this.validateEmail(); }
	EDIT_fotoacto_validation() { return true; }
	EDIT_nuevo_fotoacto_validation() { return this.validateFotoFile(false); }

	// Validaciones SEARCH
	SEARCH_login_validation() { return this.validateLogin(false); }
	SEARCH_password_validation() { return this.validatePassword(false); }
	SEARCH_nombre_validation() { return this.validateNombre(false); }
	SEARCH_apellidos_validation() { return this.validateApellidos(false); }
	SEARCH_titulacion_validation() { return this.validateTitulacion(false); }
	SEARCH_dni_validation() { return this.validateDni(false); }
	SEARCH_telefono_validation() { return this.validateTelefono(false); }
	SEARCH_direccion_validation() { return this.validateDireccion(false); }
	SEARCH_email_validation() { return this.validateEmail(false); }
	SEARCH_fotoacto_validation() { return true; }
	SEARCH_nuevo_fotoacto_validation() { return true; }

	ADD_submit_alumnograduacion() {
		const result = (
			this.ADD_login_validation() &
			this.ADD_password_validation() &
			this.ADD_nombre_validation() &
			this.ADD_apellidos_validation() &
			this.ADD_titulacion_validation() &
			this.ADD_dni_validation() &
			this.ADD_telefono_validation() &
			this.ADD_direccion_validation() &
			this.ADD_email_validation() &
			this.ADD_nuevo_fotoacto_validation()
		);
		return Boolean(result);
	}

	EDIT_submit_alumnograduacion() {
		const result = (
			this.EDIT_login_validation() &
			this.EDIT_password_validation() &
			this.EDIT_nombre_validation() &
			this.EDIT_apellidos_validation() &
			this.EDIT_titulacion_validation() &
			this.EDIT_dni_validation() &
			this.EDIT_telefono_validation() &
			this.EDIT_direccion_validation() &
			this.EDIT_email_validation() &
			this.EDIT_nuevo_fotoacto_validation()
		);
		return Boolean(result);
	}

	SEARCH_submit_alumnograduacion() {
		return true;
	}

	validateLogin(required = true) {
		const id = 'login';
		const value = document.getElementById(id).value.trim();
		document.getElementById(id).value = value;
		if (!value) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'LOGIN_EMPTY_KO');
			return 'LOGIN_EMPTY_KO';
		}
		if (value.length < 4) {
			this.dom.mostrar_error_campo(id, 'LOGIN_MIN_SIZE_KO');
			return 'LOGIN_MIN_SIZE_KO';
		}
		if (value.length > 15) {
			this.dom.mostrar_error_campo(id, 'LOGIN_MAX_SIZE_KO');
			return 'LOGIN_MAX_SIZE_KO';
		}
		if (!/^[A-Za-z][A-Za-z0-9_]*$/.test(value)) {
			this.dom.mostrar_error_campo(id, 'LOGIN_FORMAT_KO');
			return 'LOGIN_FORMAT_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validatePassword(required = true) {
		const id = 'password';
		const value = document.getElementById(id).value.trim();
		document.getElementById(id).value = value;
		if (!value) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'PASSWORD_EMPTY_KO');
			return 'PASSWORD_EMPTY_KO';
		}
		if (value.length < 8) {
			this.dom.mostrar_error_campo(id, 'PASSWORD_MIN_SIZE_KO');
			return 'PASSWORD_MIN_SIZE_KO';
		}
		if (value.length > 64) {
			this.dom.mostrar_error_campo(id, 'PASSWORD_MAX_SIZE_KO');
			return 'PASSWORD_MAX_SIZE_KO';
		}
		if (!/^[A-Za-z0-9._-]+$/.test(value)) {
			this.dom.mostrar_error_campo(id, 'PASSWORD_FORMAT_KO');
			return 'PASSWORD_FORMAT_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateNombre(required = true) {
		return this.validateGenericText('nombre', 2, 25, /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/, 'NOMBRE', required);
	}

	validateApellidos(required = true) {
		return this.validateGenericText('apellidos', 2, 35, /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ\s]+$/, 'APELLIDOS', required);
	}

	validateDireccion(required = true) {
		return this.validateGenericText('direccion', required ? 5 : 0, 100, /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ0-9\s,./ºª-]*$/, 'DIRECCION', required);
	}

	validateEmail(required = true) {
		const id = 'email';
		const value = document.getElementById(id).value.trim();
		document.getElementById(id).value = value;
		if (!value) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'EMAIL_EMPTY_KO');
			return 'EMAIL_EMPTY_KO';
		}
		if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(value)) {
			this.dom.mostrar_error_campo(id, 'EMAIL_FORMAT_KO');
			return 'EMAIL_FORMAT_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateTitulacion(required = true) {
		const id = 'titulacion';
		const value = document.getElementById(id).value;
		const permitidos = ['GREI', 'GRIA', 'MEI', 'MIA', 'PCEO'];
		if (!value) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'TITULACION_EMPTY_KO');
			return 'TITULACION_EMPTY_KO';
		}
		if (!permitidos.includes(value)) {
			this.dom.mostrar_error_campo(id, 'TITULACION_NOT_VALID_KO');
			return 'TITULACION_NOT_VALID_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateTelefono(required = true) {
		const id = 'telefono';
		const value = document.getElementById(id).value.trim();
		document.getElementById(id).value = value;
		if (!value) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'TELEFONO_EMPTY_KO');
			return 'TELEFONO_EMPTY_KO';
		}
		if (!/^[0-9]{9}$/.test(value)) {
			this.dom.mostrar_error_campo(id, 'TELEFONO_FORMAT_KO');
			return 'TELEFONO_FORMAT_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateDni(required = true) {
		const id = 'dni';
		const value = document.getElementById(id).value.trim().toUpperCase();
		document.getElementById(id).value = value;

		if (!value) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'DNI_EMPTY_KO');
			return 'DNI_EMPTY_KO';
		}

		if (/^[0-9]{8}[A-Z]$/.test(value)) {
			if (!this.validateDniLetter(value)) {
				this.dom.mostrar_error_campo(id, 'DNI_LETTER_KO');
				return 'DNI_LETTER_KO';
			}
			this.dom.mostrar_exito_campo(id);
			return true;
		}
		if (/^[XYZ][0-9]{7}[A-Z]$/.test(value)) {
			if (!this.validateNieLetter(value)) {
				this.dom.mostrar_error_campo(id, 'NIE_LETTER_KO');
				return 'NIE_LETTER_KO';
			}
			this.dom.mostrar_exito_campo(id);
			return true;
		}

		this.dom.mostrar_error_campo(id, 'DNI_FORMAT_KO');
		return 'DNI_FORMAT_KO';
	}

	validateFotoFile(required) {
		const id = 'nuevo_fotoacto';
		const input = document.getElementById(id);
		const fotoField = document.getElementById('fotoacto');
		if (!input || input.files.length === 0) {
			if (fotoField) {
				fotoField.value = '';
			}
			if (required) {
				this.dom.mostrar_error_campo(id, 'FOTOACTO_FILE_EMPTY_KO');
				return 'FOTOACTO_FILE_EMPTY_KO';
			}
			this.dom.mostrar_exito_campo(id);
			return true;
		}
		const file = input.files[0];
		if (file.size > 2_000_000) {
			this.dom.mostrar_error_campo(id, 'FOTOACTO_FILE_SIZE_KO');
			return 'FOTOACTO_FILE_SIZE_KO';
		}
		if (!['image/jpeg', 'image/png'].includes(file.type)) {
			this.dom.mostrar_error_campo(id, 'FOTOACTO_EXTENSION_KO');
			return 'FOTOACTO_EXTENSION_KO';
		}
		if (!/^[A-Za-z0-9_-]{5,100}\.(jpg|jpeg|png)$/i.test(file.name)) {
			this.dom.mostrar_error_campo(id, 'FOTOACTO_FORMAT_KO');
			return 'FOTOACTO_FORMAT_KO';
		}
		if (fotoField) {
			fotoField.value = file.name;
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateGenericText(id, min, max, regex, prefix, required) {
		const value = document.getElementById(id).value.trim();
		document.getElementById(id).value = value;
		if (!value) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, `${prefix}_EMPTY_KO`);
			return `${prefix}_EMPTY_KO`;
		}
		if (min && value.length < min) {
			this.dom.mostrar_error_campo(id, `${prefix}_MIN_SIZE_KO`);
			return `${prefix}_MIN_SIZE_KO`;
		}
		if (max && value.length > max) {
			this.dom.mostrar_error_campo(id, `${prefix}_MAX_SIZE_KO`);
			return `${prefix}_MAX_SIZE_KO`;
		}
		if (regex && !regex.test(value)) {
			this.dom.mostrar_error_campo(id, `${prefix}_FORMAT_KO`);
			return `${prefix}_FORMAT_KO`;
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateDniLetter(value) {
		const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
		const letter = letters.charAt(parseInt(value.substring(0, 8), 10) % 23);
		return value.charAt(8) === letter;
	}

	validateNieLetter(value) {
		const map = { X: '0', Y: '1', Z: '2' };
		const replaced = map[value.charAt(0)] + value.substring(1, 8);
		return this.validateDniLetter(replaced + value.charAt(8));
	}
}
