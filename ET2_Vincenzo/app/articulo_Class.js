class articulo extends EntidadAbstracta {
	constructor(esTest) {
		super(esTest);

		this.columnasamostrar = ['codigo', 'titulo_articulo', 'titulo_revista', 'estado', 'fecha_publicacion'];
		this.mostrarespecial = ['fecha_publicacion', 'ficheropdf'];
		this.attributes = [
			'codigo',
			'autores',
			'titulo_articulo',
			'titulo_revista',
			'issn',
			'volumen',
			'pagina_inicio',
			'pagina_fin',
			'fecha_publicacion',
			'estado',
			'ficheropdf',
			'nuevo_ficheropdf'
		];

		this.fileBaseUrls = {
			ficheropdf: 'http://193.147.87.202/ET2/filesuploaded/files_ficheropdf/'
		};
	}

	manual_form_creation() {
		return `
			<form id="form_iu" class="formulario" method="POST" enctype="multipart/form-data">
				<label id="label_codigo" class="label_codigo">Código</label>
				<input type="number" id="codigo" name="CodigoA" min="1" />
				<span id="span_error_codigo"><a id="error_codigo"></a></span>
				<br>

				<label id="label_autores" class="label_autores">Autores</label>
				<textarea id="autores" name="AutoresA" rows="2"></textarea>
				<span id="span_error_autores"><a id="error_autores"></a></span>
				<br>

				<label id="label_titulo_articulo" class="label_titulo_articulo">Título artículo</label>
				<input type="text" id="titulo_articulo" name="TituloA" />
				<span id="span_error_titulo_articulo"><a id="error_titulo_articulo"></a></span>
				<br>

				<label id="label_titulo_revista" class="label_titulo_revista">Título revista</label>
				<input type="text" id="titulo_revista" name="TituloR" />
				<span id="span_error_titulo_revista"><a id="error_titulo_revista"></a></span>
				<br>

				<label id="label_issn" class="label_issn">ISSN</label>
				<input type="text" id="issn" name="ISSN" placeholder="1234-5678" />
				<span id="span_error_issn"><a id="error_issn"></a></span>
				<br>

				<label id="label_volumen" class="label_volumen">Volumen</label>
				<input type="text" id="volumen" name="VolumenR" />
				<span id="span_error_volumen"><a id="error_volumen"></a></span>
				<br>

				<label id="label_pagina_inicio" class="label_pagina_inicio">Página inicio</label>
				<input type="text" id="pagina_inicio" name="PagIniA" />
				<span id="span_error_pagina_inicio"><a id="error_pagina_inicio"></a></span>
				<br>

				<label id="label_pagina_fin" class="label_pagina_fin">Página fin</label>
				<input type="text" id="pagina_fin" name="PagFinA" />
				<span id="span_error_pagina_fin"><a id="error_pagina_fin"></a></span>
				<br>

				<label id="label_fecha_publicacion" class="label_fecha_publicacion">Fecha publicación</label>
				<input type="date" id="fecha_publicacion" name="fecha_publicacion_visible" placeholder="YYYY-MM-DD"/>
				<input type="hidden" id="fecha_publicacion_hidden" name="FechaPublicacionR" />
				<input type="hidden" id="fecha_publicacion_hidden" name="fecha_publicacion" />
				<span id="span_error_fecha_publicacion"><a id="error_fecha_publicacion"></a></span>
				<br>

				<label id="label_estado" class="label_estado">Estado</label>
				<select id="estado" name="EstadoA">
					<option value="">--</option>
					<option value="Enviado">Enviado</option>
					<option value="Revision">Revisión</option>
					<option value="Publicado">Publicado</option>
				</select>
				<span id="span_error_estado"><a id="error_estado"></a></span>
				<br>

				<label id="label_ficheropdf" class="label_ficheropdf">Fichero PDF</label>
				<input type="text" id="ficheropdf" name="FicheropdfA" readonly />
				<span id="span_error_ficheropdf"><a id="error_ficheropdf"></a></span>
				<a id="link_ficheropdf" href="${this.fileBaseUrls.ficheropdf}" target="_blank">
					<img src="./iconos/FILE.png" alt="file" />
				</a>
				<br>

				<label id="label_nuevo_ficheropdf" class="label_nuevo_ficheropdf">Nuevo PDF</label>
				<input type="file" id="nuevo_ficheropdf" name="nuevo_ficheropdf" accept=".pdf" />
				<span id="span_error_nuevo_ficheropdf"><a id="error_nuevo_ficheropdf"></a></span>
			</form>
		`;
	}

	createForm_ADD() {
		this.prepareBaseForm('ADD');
		this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.ADD_submit_${this.nombreentidad}()`);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		this.dom.hide_element_form('codigo');
		document.getElementById('codigo').disabled = true;

		this.hideFileName();
		this.dom.hide_element('link_ficheropdf');

		this.dom.colocarvalidaciones('form_iu', 'ADD');
		this.dom.colocarboton('ADD');
		setLang();
	}

	async ADD() {
		this.prepareFechaBeforeSubmit();
		return super.ADD();
	}

	createForm_SEARCH() {
		this.prepareBaseForm('SEARCH');
		this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.SEARCH_submit_${this.nombreentidad}()`);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		this.dom.hide_element('link_ficheropdf');
		this.dom.hide_element_form('nuevo_ficheropdf');
		this.showFileName();

		this.dom.colocarvalidaciones('form_iu', 'SEARCH');
		this.dom.colocarboton('SEARCH');
		setLang();
	}

	createForm_EDIT(fila) {
		this.prepareBaseForm('EDIT');
		this.dom.assign_property_value('form_iu', 'onsubmit', `return entidad.EDIT_submit_${this.nombreentidad}()`);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		this.populateData(fila);
		this.setupFileLink(fila.FicheropdfA ?? fila.ficheropdf);

		this.dom.colocarvalidaciones('form_iu', 'EDIT');
		this.dom.colocarboton('EDIT');
		setLang();
	}

	async EDIT() {
		this.prepareFechaBeforeSubmit();
		return super.EDIT();
	}

	createForm_DELETE(fila) {
		this.prepareBaseForm('DELETE');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		this.populateData(fila);
		this.setupFileLink(fila.FicheropdfA ?? fila.ficheropdf);
		this.dom.colocartodosreadonly('form_iu');
		this.dom.hide_element_form('nuevo_ficheropdf');
		this.dom.colocarboton('DELETE');
		setLang();
	}

	createForm_SHOWCURRENT(fila) {
		this.prepareBaseForm('SHOWCURRENT');

		this.populateData(fila);
		this.setupFileLink(fila.FicheropdfA ?? fila.ficheropdf);
		this.dom.colocartodosreadonly('form_iu');
		this.dom.hide_element_form('nuevo_ficheropdf');
		setLang();
	}

	prepareBaseForm(action) {
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.setupFechaField();
		this.dom.show_element('Div_IU_form', 'block');
		this.dom.remove_class_value('class_contenido_titulo_form', 'text_contenido_titulo_form');
		this.dom.assign_class_value('class_contenido_titulo_form', `text_contenido_titulo_form_${this.nombreentidad}_${action}`);
	}

	populateData(fila) {
		this.showFileName();
		this.dom.rellenarvaloresform(this.normalizeFilaParaFormulario(fila));
		this.syncHiddenFecha();
	}

	showFileName() {
		document.getElementById('label_ficheropdf').style.display = 'block';
		document.getElementById('ficheropdf').style.display = 'block';
	}

	hideFileName() {
		this.dom.hide_element_form('ficheropdf');
	}

	setupFileLink(valor) {
		if (valor) {
			this.dom.show_element('link_ficheropdf', 'inline');
			this.dom.assign_property_value('link_ficheropdf', 'href', `${this.fileBaseUrls.ficheropdf}${valor}`);
		} else {
			this.dom.hide_element('link_ficheropdf');
			this.dom.assign_property_value('link_ficheropdf', 'href', this.fileBaseUrls.ficheropdf);
		}
	}

	normalizeFilaParaFormulario(fila = {}) {
		const safeValue = value => value ?? '';
		return {
			codigo: safeValue(fila.CodigoA ?? fila.codigo),
			autores: safeValue(fila.AutoresA ?? fila.autores),
			titulo_articulo: safeValue(fila.TituloA ?? fila.titulo_articulo),
			titulo_revista: safeValue(fila.TituloR ?? fila.titulo_revista),
			issn: safeValue(fila.ISSN ?? fila.issn),
			volumen: safeValue(fila.VolumenR ?? fila.volumen),
			pagina_inicio: safeValue(fila.PagIniA ?? fila.pagina_inicio),
			pagina_fin: safeValue(fila.PagFinA ?? fila.pagina_fin),
			fecha_publicacion: this.normalizeFechaParaInput(safeValue(fila.FechaPublicacionR ?? fila.fecha_publicacion)),
			fecha_publicacion_hidden: this.isoToDdMm(this.normalizeFechaParaInput(safeValue(fila.FechaPublicacionR ?? fila.fecha_publicacion))),
			estado: safeValue(fila.EstadoA ?? fila.estado),
			ficheropdf: safeValue(fila.FicheropdfA ?? fila.ficheropdf)
		};
	}

	mostrarcambioatributo(atributo, valorentrada) {
		switch (atributo) {
			case 'fecha_publicacion':
				if (!valorentrada) return valorentrada;
				const [y, m, d] = valorentrada.split('-');
				return `${d}/${m}/${y}`;
			case 'ficheropdf':
				if (!valorentrada) return valorentrada;
				return `${valorentrada} <a class="link_ficheropdf" href="${this.fileBaseUrls.ficheropdf}${valorentrada}"><img src="./iconos/FILE.png" /></a>`;
			default:
				return valorentrada;
		}
	}

	// Validaciones ADD
	ADD_codigo_validation() { return this.validateCodigo(); }
	ADD_autores_validation() { return this.validateAutores(); }
	ADD_titulo_articulo_validation() { return this.validateTituloArticulo(); }
	ADD_titulo_revista_validation() { return this.validateTituloRevista(); }
	ADD_issn_validation() { return this.validateIssn(); }
	ADD_volumen_validation() { return this.validateVolumen(); }
	ADD_pagina_inicio_validation() { return this.validatePaginaInicio(); }
	ADD_pagina_fin_validation() { return this.validatePaginaFin(); }
	ADD_fecha_publicacion_validation() { return this.validateFechaPublicacion(); }
	ADD_estado_validation() { return this.validateEstado(true); }
	ADD_ficheropdf_validation() { return true; }
	ADD_nuevo_ficheropdf_validation() { return this.validatePdfFile(true); }

	// Validaciones EDIT
	EDIT_codigo_validation() { return this.validateCodigo(); }
	EDIT_autores_validation() { return this.validateAutores(); }
	EDIT_titulo_articulo_validation() { return this.validateTituloArticulo(); }
	EDIT_titulo_revista_validation() { return this.validateTituloRevista(); }
	EDIT_issn_validation() { return this.validateIssn(); }
	EDIT_volumen_validation() { return this.validateVolumen(); }
	EDIT_pagina_inicio_validation() { return this.validatePaginaInicio(); }
	EDIT_pagina_fin_validation() { return this.validatePaginaFin(); }
	EDIT_fecha_publicacion_validation() { return this.validateFechaPublicacion(); }
	EDIT_estado_validation() { return this.validateEstado(true); }
	EDIT_ficheropdf_validation() { return true; }
	EDIT_nuevo_ficheropdf_validation() { return this.validatePdfFile(false); }

	// Validaciones SEARCH
	SEARCH_codigo_validation() { return this.validateCodigo(false); }
	SEARCH_autores_validation() { return this.validateAutores(false); }
	SEARCH_titulo_articulo_validation() { return this.validateTituloArticulo(false); }
	SEARCH_titulo_revista_validation() { return this.validateTituloRevista(false); }
	SEARCH_issn_validation() { return this.validateIssn(false); }
	SEARCH_volumen_validation() { return this.validateVolumen(false); }
	SEARCH_pagina_inicio_validation() { return this.validatePaginaInicio(false); }
	SEARCH_pagina_fin_validation() { return this.validatePaginaFin(false); }
	SEARCH_fecha_publicacion_validation() { return this.validateFechaPublicacion(false); }
	SEARCH_estado_validation() { return this.validateEstado(false); }
	SEARCH_ficheropdf_validation() { return true; }
	SEARCH_nuevo_ficheropdf_validation() { return true; }

	ADD_submit_articulo() {
		const result = (
			this.ADD_autores_validation() &
			this.ADD_titulo_articulo_validation() &
			this.ADD_titulo_revista_validation() &
			this.ADD_issn_validation() &
			this.ADD_volumen_validation() &
			this.ADD_pagina_inicio_validation() &
			this.ADD_pagina_fin_validation() &
			this.ADD_fecha_publicacion_validation() &
			this.ADD_estado_validation() &
			this.ADD_nuevo_ficheropdf_validation()
		);
		return Boolean(result);
	}

	EDIT_submit_articulo() {
		const result = (
			this.EDIT_codigo_validation() &
			this.EDIT_autores_validation() &
			this.EDIT_titulo_articulo_validation() &
			this.EDIT_titulo_revista_validation() &
			this.EDIT_issn_validation() &
			this.EDIT_volumen_validation() &
			this.EDIT_pagina_inicio_validation() &
			this.EDIT_pagina_fin_validation() &
			this.EDIT_fecha_publicacion_validation() &
			this.EDIT_estado_validation() &
			this.EDIT_nuevo_ficheropdf_validation()
		);
		return Boolean(result);
	}

	SEARCH_submit_articulo() {
		return true;
	}

	validateCodigo(required = true) {
		const id = 'codigo';
		const normalized = this.normalizeDigitOnlyValue(document.getElementById(id).value);
		document.getElementById(id).value = normalized;
		if (!normalized) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'CODIGO_EMPTY_KO');
			return 'CODIGO_EMPTY_KO';
		}
		const numero = Number(normalized);
		if (!Number.isInteger(numero)) {
			this.dom.mostrar_error_campo(id, 'CODIGO_FORMAT_KO');
			return 'CODIGO_FORMAT_KO';
		}
		if (numero < 1 || numero > 99999999) {
			this.dom.mostrar_error_campo(id, 'CODIGO_RANGE_KO');
			return 'CODIGO_RANGE_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateAutores(required = true) {
		return this.validateGenericText('autores', 3, 200, /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ0-9,.;\s-]+$/, 'AUTORES', required);
	}

	validateTituloArticulo(required = true) {
		return this.validateGenericText('titulo_articulo', 3, 100, /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ0-9,.;:"'()\s-]+$/, 'TITULO_ARTICULO', required);
	}

	validateTituloRevista(required = true) {
		return this.validateGenericText('titulo_revista', 3, 100, /^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ0-9,.;:"'()\s-]+$/, 'TITULO_REVISTA', required);
	}

	validateIssn(required = true) {
		const id = 'issn';
		const normalized = this.normalizeIssnValue(document.getElementById(id).value);
		document.getElementById(id).value = normalized;
		if (!normalized) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'ISSN_EMPTY_KO');
			return 'ISSN_EMPTY_KO';
		}
		if (!/^\d{4}-[\dX]{4}$/.test(normalized)) {
			this.dom.mostrar_error_campo(id, 'ISSN_FORMAT_KO');
			return 'ISSN_FORMAT_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateVolumen(required = true) {
		const id = 'volumen';
		const normalized = this.normalizeDigitOnlyValue(document.getElementById(id).value);
		document.getElementById(id).value = normalized;
		if (!normalized) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'VOLUMEN_EMPTY_KO');
			return 'VOLUMEN_EMPTY_KO';
		}
		if (!/^\d{1,4}$/.test(normalized)) {
			this.dom.mostrar_error_campo(id, 'VOLUMEN_FORMAT_KO');
			return 'VOLUMEN_FORMAT_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validatePaginaInicio(required = true) {
		const id = 'pagina_inicio';
		return this.validatePagina(id, 'PAGINA_INICIO', required);
	}

	validatePaginaFin(required = true) {
		const id = 'pagina_fin';
		const result = this.validatePagina(id, 'PAGINA_FIN', required);
		if (result !== true) {
			return result;
		}
		const inicio = Number(this.normalizeDigitOnlyValue(document.getElementById('pagina_inicio').value));
		const fin = Number(this.normalizeDigitOnlyValue(document.getElementById('pagina_fin').value));
		if (Number.isInteger(inicio) && Number.isInteger(fin) && fin < inicio) {
			this.dom.mostrar_error_campo(id, 'PAGINA_FIN_RANGE_KO');
			return 'PAGINA_FIN_RANGE_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validatePagina(id, prefix, required) {
		const normalized = this.normalizeDigitOnlyValue(document.getElementById(id).value);
		document.getElementById(id).value = normalized;
		if (!normalized) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, `${prefix}_EMPTY_KO`);
			return `${prefix}_EMPTY_KO`;
		}
		if (!/^\d{1,4}$/.test(normalized)) {
			this.dom.mostrar_error_campo(id, `${prefix}_FORMAT_KO`);
			return `${prefix}_FORMAT_KO`;
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validateFechaPublicacion(required = true) {
		const id = 'fecha_publicacion';
		const normalized = this.normalizeFechaParaInput(document.getElementById(id).value);
		document.getElementById(id).value = normalized;
		if (!normalized) {
			if (!required) {
				this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'FECHA_PUBLICACION_EMPTY_KO');
			return 'FECHA_PUBLICACION_EMPTY_KO';
		}
		const fecha = new Date(normalized);
		if (Number.isNaN(fecha.getTime())) {
			this.dom.mostrar_error_campo(id, 'FECHA_PUBLICACION_FORMAT_KO');
			return 'FECHA_PUBLICACION_FORMAT_KO';
		}
		const hoy = new Date();
		if (fecha > hoy) {
			this.dom.mostrar_error_campo(id, 'FECHA_PUBLICACION_FUTURE_KO');
			return 'FECHA_PUBLICACION_FUTURE_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

		validateEstado(required = true) {
			const id = 'estado';
			const value = document.getElementById(id).value;
			const permitidos = ['Enviado', 'Revision', 'Revisión', 'Publicado'];
			if (!value) {
				if (!required) {
					this.dom.mostrar_exito_campo(id);
				return true;
			}
			this.dom.mostrar_error_campo(id, 'ESTADO_EMPTY_KO');
			return 'ESTADO_EMPTY_KO';
		}
		if (!permitidos.includes(value)) {
			this.dom.mostrar_error_campo(id, 'ESTADO_NOT_VALID_KO');
			return 'ESTADO_NOT_VALID_KO';
		}
		this.dom.mostrar_exito_campo(id);
		return true;
	}

	validatePdfFile(required) {
		const id = 'nuevo_ficheropdf';
		const input = document.getElementById(id);
		if (!input || input.files.length === 0) {
			if (required) {
				this.dom.mostrar_error_campo(id, 'FICHEROPDF_FILE_EMPTY_KO');
				return 'FICHEROPDF_FILE_EMPTY_KO';
			}
			this.dom.mostrar_exito_campo(id);
			return true;
		}
		const file = input.files[0];
		if (file.size > 5_000_000) {
			this.dom.mostrar_error_campo(id, 'FICHEROPDF_FILE_SIZE_KO');
			return 'FICHEROPDF_FILE_SIZE_KO';
		}
		if (file.type !== 'application/pdf') {
			this.dom.mostrar_error_campo(id, 'FICHEROPDF_EXTENSION_KO');
			return 'FICHEROPDF_EXTENSION_KO';
		}
		if (!/^[A-Za-z0-9_-]{5,80}\.pdf$/i.test(file.name)) {
			this.dom.mostrar_error_campo(id, 'FICHEROPDF_FORMAT_KO');
			return 'FICHEROPDF_FORMAT_KO';
		}
		document.getElementById('ficheropdf').value = file.name;
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

	normalizeIssnValue(raw = '') {
		const cleaned = (raw ?? '')
			.normalize('NFKC')
			.trim()
			.replace(/[‐–—−]/g, '-')
			.replace(/[^\dXx-]/g, '');
		return cleaned.toUpperCase();
	}

	normalizeDigitOnlyValue(raw = '') {
		return (raw ?? '')
			.normalize('NFKC')
			.replace(/[^\d]/g, '');
	}

	normalizeFechaParaInput(raw = '') {
		const trimmed = (raw ?? '').trim();
		if (!trimmed) {
			return '';
		}
		if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
			return trimmed;
		}
		const match = trimmed.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
		if (match) {
			const [, month, day, year] = match;
			return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
		}
		return trimmed;
	}

	syncHiddenFecha() {
		const visible = document.getElementById('fecha_publicacion');
		const hidden = document.getElementById('fecha_publicacion_hidden');
		if (!visible || !hidden) return;
		const iso = this.normalizeFechaParaInput(visible.value);
		visible.value = iso;
		hidden.value = this.isoToDdMm(iso);
	}

	setupFechaField() {
		const visible = document.getElementById('fecha_publicacion');
		if (!visible) return;
		visible.addEventListener('change', () => this.syncHiddenFecha());
		this.syncHiddenFecha();
	}

	isoToDdMm(value = '') {
		const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
		if (!match) return '';
		return `${match[3]}/${match[2]}/${match[1]}`;
	}

	prepareFechaBeforeSubmit() {
		this.syncHiddenFecha();
	}
}
