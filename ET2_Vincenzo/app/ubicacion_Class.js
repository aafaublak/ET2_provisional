class ubicacion extends EntidadAbstracta {
	constructor(esTest) {
		super(esTest);

		this.columnasamostrar = ['id_site', 'site_locality', 'site_provider_login'];
		this.mostrarespecial = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
		this.attributes = [
			'id_site',
			'site_latitud',
			'site_longitud',
			'site_altitude',
			'site_locality',
			'site_provider_login',
			'site_north_photo',
			'nuevo_site_north_photo',
			'site_south_photo',
			'nuevo_site_south_photo',
			'site_east_photo',
			'nuevo_site_east_photo',
			'site_west_photo',
			'nuevo_site_west_photo'
		];

		this.fileFields = ['site_north_photo', 'site_south_photo', 'site_east_photo', 'site_west_photo'];
		this.fileBaseUrls = {
			site_north_photo: 'http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/',
			site_south_photo: 'http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/',
			site_east_photo: 'http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/',
			site_west_photo: 'http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/'
		};
	}

	manual_form_creation() {
		return `
			<form id="form_iu" class="formulario" method="POST" enctype="multipart/form-data">
				<label id="label_id_site" class="label_id_site">Identificador sitio</label>
				<input type="number" id="id_site" name="id_site" min="1" />
				<span id="span_error_id_site"><a id="error_id_site"></a></span>
				<br>

				<label id="label_site_latitud" class="label_site_latitud">Latitud</label>
				<input type="text" id="site_latitud" name="site_latitud" />
				<span id="span_error_site_latitud"><a id="error_site_latitud"></a></span>
				<br>

				<label id="label_site_longitud" class="label_site_longitud">Longitud</label>
				<input type="text" id="site_longitud" name="site_longitud" />
				<span id="span_error_site_longitud"><a id="error_site_longitud"></a></span>
				<br>

				<label id="label_site_altitude" class="label_site_altitude">Altitud</label>
				<input type="text" id="site_altitude" name="site_altitude" />
				<span id="span_error_site_altitude"><a id="error_site_altitude"></a></span>
				<br>

				<label id="label_site_locality" class="label_site_locality">Localidad</label>
				<input type="text" id="site_locality" name="site_locality" />
				<span id="span_error_site_locality"><a id="error_site_locality"></a></span>
				<br>

				<label id="label_site_provider_login" class="label_site_provider_login">Proveedor</label>
				<input type="text" id="site_provider_login" name="site_provider_login" />
				<span id="span_error_site_provider_login"><a id="error_site_provider_login"></a></span>
				<br>

				${this.renderPhotoField('site_north_photo')}
				${this.renderPhotoField('site_south_photo')}
				${this.renderPhotoField('site_east_photo')}
				${this.renderPhotoField('site_west_photo')}
			</form>
		`;
	}

	renderPhotoField(field) {
		return `
			<label id="label_${field}" class="label_${field}">${field}</label>
			<input type="text" id="${field}" name="${field}" readonly />
			<span id="span_error_${field}"><a id="error_${field}"></a></span>
			<a id="link_${field}" href="${this.fileBaseUrls[field]}" target="_blank">
				<img src="./iconos/FILE.png" alt="file" />
			</a>
			<br>
			<label id="label_nuevo_${field}" class="label_nuevo_${field}">Nuevo ${field}</label>
			<input type="file" id="nuevo_${field}" name="nuevo_${field}" accept=".jpg,.jpeg,.png" />
			<span id="span_error_nuevo_${field}"><a id="error_nuevo_${field}"></a></span>
			<br>
		`;
	}

	createForm_ADD() {
		this.prepareBaseForm('ADD');
		this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.ADD_submit_${this.nombreentidad}()`);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		this.dom.hide_element_form('id_site');
		document.getElementById('id_site').disabled = true;

		this.hideFileNames();
		this.fileFields.forEach(field => this.dom.hide_element(`link_${field}`));

		this.dom.colocarvalidaciones('form_iu', 'ADD');
		this.dom.colocarboton('ADD');
		setLang();
	}

	createForm_SEARCH() {
		this.prepareBaseForm('SEARCH');
		this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.SEARCH_submit_${this.nombreentidad}()`);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		this.fileFields.forEach(field => {
			this.dom.hide_element(`link_${field}`);
			this.dom.hide_element_form(`nuevo_${field}`);
			this.showSingleFileName(field);
		});

		this.dom.colocarvalidaciones('form_iu', 'SEARCH');
		this.dom.colocarboton('SEARCH');
		setLang();
	}

	createForm_EDIT(fila) {
		this.prepareBaseForm('EDIT');
		this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.EDIT_submit_${this.nombreentidad}()`);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		this.populateData(fila);
		this.setupFileLinks(fila);

		this.dom.colocarvalidaciones('form_iu', 'EDIT');
		this.dom.colocarboton('EDIT');
		setLang();
	}

	createForm_DELETE(fila) {
		this.prepareBaseForm('DELETE');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		this.populateData(fila);
		this.setupFileLinks(fila);
		this.dom.colocartodosreadonly('form_iu');
		this.fileFields.forEach(field => this.dom.hide_element_form(`nuevo_${field}`));
		this.dom.colocarboton('DELETE');
		setLang();
	}

	createForm_SHOWCURRENT(fila) {
		this.prepareBaseForm('SHOWCURRENT');

		this.populateData(fila);
		this.setupFileLinks(fila);
		this.dom.colocartodosreadonly('form_iu');
		this.fileFields.forEach(field => this.dom.hide_element_form(`nuevo_${field}`));
		setLang();
	}

	prepareBaseForm(action) {
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form', 'block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', `text_contenido_titulo_form_${this.nombreentidad}_${action}`);
	}

	populateData(fila) {
		this.showFileNames();
		this.dom.rellenarvaloresform(fila);
	}

	hideFileNames() {
		this.fileFields.forEach(field => this.dom.hide_element_form(field));
	}

	showFileNames() {
		this.fileFields.forEach(field => this.showSingleFileName(field));
	}

	showSingleFileName(field) {
		document.getElementById(`label_${field}`).style.display = 'block';
		document.getElementById(field).style.display = 'block';
	}

	setupFileLinks(fila) {
		this.fileFields.forEach(field => {
			const valor = fila[field];
			const linkId = `link_${field}`;
			if (valor) {
				this.dom.show_element(linkId, 'inline');
				this.dom.assign_property_value(linkId, 'href', `${this.fileBaseUrls[field]}${valor}`);
			} else {
				this.dom.hide_element(linkId);
				this.dom.assign_property_value(linkId, 'href', this.fileBaseUrls[field]);
			}
		});
	}

	mostrarcambioatributo(atributo, valorentrada) {
		if (this.fileFields.includes(atributo) && valorentrada) {
			return `${valorentrada} <a class="link_${atributo}" href="${this.fileBaseUrls[atributo]}${valorentrada}"><img src="./iconos/FILE.png" /></a>`;
		}
		return valorentrada;
	}

	// Validaciones ADD
	ADD_id_site_validation() { return this.validateIdSite(); }
	ADD_site_latitud_validation() { return this.validateLatitud(); }
	ADD_site_longitud_validation() { return this.validateLongitud(); }
	ADD_site_altitude_validation() { return this.validateAltitud(); }
	ADD_site_locality_validation() { return this.validateLocality(); }
	ADD_site_provider_login_validation() { return this.validateProviderLogin(); }
	ADD_site_north_photo_validation() { return true; }
	ADD_nuevo_site_north_photo_validation() { return this.validatePhotoFile('site_north_photo', true); }
	ADD_site_south_photo_validation() { return true; }
	ADD_nuevo_site_south_photo_validation() { return this.validatePhotoFile('site_south_photo', true); }
	ADD_site_east_photo_validation() { return true; }
	ADD_nuevo_site_east_photo_validation() { return this.validatePhotoFile('site_east_photo', true); }
	ADD_site_west_photo_validation() { return true; }
	ADD_nuevo_site_west_photo_validation() { return this.validatePhotoFile('site_west_photo', true); }

	// Validaciones EDIT
	EDIT_id_site_validation() { return this.validateIdSite(); }
	EDIT_site_latitud_validation() { return this.validateLatitud(); }
	EDIT_site_longitud_validation() { return this.validateLongitud(); }
	EDIT_site_altitude_validation() { return this.validateAltitud(); }
	EDIT_site_locality_validation() { return this.validateLocality(); }
	EDIT_site_provider_login_validation() { return this.validateProviderLogin(); }
	EDIT_site_north_photo_validation() { return true; }
	EDIT_nuevo_site_north_photo_validation() { return this.validatePhotoFile('site_north_photo', false); }
	EDIT_site_south_photo_validation() { return true; }
	EDIT_nuevo_site_south_photo_validation() { return this.validatePhotoFile('site_south_photo', false); }
	EDIT_site_east_photo_validation() { return true; }
	EDIT_nuevo_site_east_photo_validation() { return this.validatePhotoFile('site_east_photo', false); }
	EDIT_site_west_photo_validation() { return true; }
	EDIT_nuevo_site_west_photo_validation() { return this.validatePhotoFile('site_west_photo', false); }

	// Validaciones SEARCH
	SEARCH_id_site_validation() { return this.validateIdSite(false); }
	SEARCH_site_latitud_validation() { return this.validateLatitud(false); }
	SEARCH_site_longitud_validation() { return this.validateLongitud(false); }
	SEARCH_site_altitude_validation() { return this.validateAltitud(false); }
	SEARCH_site_locality_validation() { return this.validateLocality(false); }
	SEARCH_site_provider_login_validation() { return this.validateProviderLogin(false); }
	SEARCH_site_north_photo_validation() { return true; }
	SEARCH_nuevo_site_north_photo_validation() { return true; }
	SEARCH_site_south_photo_validation() { return true; }
	SEARCH_nuevo_site_south_photo_validation() { return true; }
	SEARCH_site_east_photo_validation() { return true; }
	SEARCH_nuevo_site_east_photo_validation() { return true; }
	SEARCH_site_west_photo_validation() { return true; }
	SEARCH_nuevo_site_west_photo_validation() { return true; }

	ADD_submit_ubicacion() {
		const result = (
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
		const result = (
			this.EDIT_id_site_validation() &
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
		return true;
	}

	validateIdSite(required = true) {
		const id = 'id_site';
		const value = document.getElementById(id).value.trim();
		document.getElementById(id).value = value;
		if (!value) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'ID_SITE_EMPTY_KO');
			return 'ID_SITE_EMPTY_KO';
		}
		const numero = Number(value);
		if (!Number.isInteger(numero)) {
			this.dom.mostrar_error_campo(id, 'ID_SITE_FORMAT_KO');
			return 'ID_SITE_FORMAT_KO';
		}
		if (numero < 1 || numero > 99999999) {
			this.dom.mostrar_error_campo(id, 'ID_SITE_RANGE_KO');
			return 'ID_SITE_RANGE_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateLatitud(required = true) {
		return this.validateCoordinate('site_latitud', 'LATITUD', -90, 90, required);
	}

	validateLongitud(required = true) {
		return this.validateCoordinate('site_longitud', 'LONGITUD', -180, 180, required);
	}

	validateAltitud(required = true) {
		const id = 'site_altitude';
		const value = document.getElementById(id).value.trim();
		document.getElementById(id).value = value;
		if (!value) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'ALTITUD_EMPTY_KO');
			return 'ALTITUD_EMPTY_KO';
		}
		if (!/^-?\d{1,4}$/.test(value)) {
			this.dom.mostrar_error_campo(id, 'ALTITUD_FORMAT_KO');
			return 'ALTITUD_FORMAT_KO';
		}
		const numero = Number(value);
		if (numero < -500 || numero > 9000) {
			this.dom.mostrar_error_campo(id, 'ALTITUD_RANGE_KO');
			return 'ALTITUD_RANGE_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateLocality(required = true) {
		return this.validateGenericText('site_locality', 2, 40, /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ0-9\s-]+$/, 'LOCALITY', required);
	}

	validateProviderLogin(required = true) {
		return this.validateGenericText('site_provider_login', 3, 30, /^[A-Za-z0-9_.-]+$/, 'PROVIDER_LOGIN', required);
	}

	validateCoordinate(id, prefix, min, max, required) {
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
		if (!/^-?\d{1,3}\.\d{1,6}$/.test(value)) {
			this.dom.mostrar_error_campo(id, `${prefix}_FORMAT_KO`);
			return `${prefix}_FORMAT_KO`;
		}
		const numero = Number(value);
		if (numero < min || numero > max) {
			this.dom.mostrar_error_campo(id, `${prefix}_RANGE_KO`);
			return `${prefix}_RANGE_KO`;
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validatePhotoFile(field, required) {
		const id = `nuevo_${field}`;
		const input = document.getElementById(id);
		if (!input || input.files.length === 0) {
			if (required) {
				this.dom.mostrar_error_campo(id, `${field.toUpperCase()}_FILE_EMPTY_KO`);
				return `${field.toUpperCase()}_FILE_EMPTY_KO`;
			}
			this.dom.mostrar_exito_campo(id);
			return true;
		}
		const file = input.files[0];
		if (file.size > 3_000_000) {
			this.dom.mostrar_error_campo(id, `${field.toUpperCase()}_FILE_SIZE_KO`);
			return `${field.toUpperCase()}_FILE_SIZE_KO`;
		}
		if (!['image/jpeg', 'image/png'].includes(file.type)) {
			this.dom.mostrar_error_campo(id, `${field.toUpperCase()}_EXTENSION_KO`);
			return `${field.toUpperCase()}_EXTENSION_KO`;
		}
		if (!/^[A-Za-z0-9_-]{5,80}\.(jpg|jpeg|png)$/i.test(file.name)) {
			this.dom.mostrar_error_campo(id, `${field.toUpperCase()}_FORMAT_KO`);
			return `${field.toUpperCase()}_FORMAT_KO`;
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
}
