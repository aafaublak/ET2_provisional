class ubicacion extends EntidadAbstracta {
  constructor(esTest) {
    super(esTest);

    this.photoFields = [
      "site_north_photo",
      "site_south_photo",
      "site_east_photo",
      "site_west_photo",
    ];

    this.columnasamostrar = [
      "id_site",
      "site_locality",
      "site_provider_login",
      "site_latitud",
      "site_longitud",
      "site_altitude",
      "site_north_photo",
      "site_south_photo",
      "site_east_photo",
      "site_west_photo",
    ];

    this.mostrarespecial = [...this.photoFields];

    this.attributes = [
      "id_site",
      "site_latitud",
      "site_longitud",
      "site_altitude",
      "site_locality",
      "site_provider_login",
      "site_north_photo",
      "nuevo_site_north_photo",
      "site_south_photo",
      "nuevo_site_south_photo",
      "site_east_photo",
      "nuevo_site_east_photo",
      "site_west_photo",
      "nuevo_site_west_photo",
    ];

    this.fileMaxBytes = 2 * 1024 * 1024;
  }

  manual_form_creation() {
    const photoBlocks = this.photoFields
      .map((field) => this.renderPhotoField(field))
      .join("");

    return `
      <form id="form_iu" enctype="multipart/form-data" method="post" class="formulario">
        <div class="form_block" id="block_id_site">
          <label id="label_id_site" class="label_id_site" for="id_site"></label>
          <input id="id_site" name="id_site" type="text" class="id_site" />
          <span id="span_error_id_site"><a id="error_id_site"></a></span>
        </div>

        <div class="form_block">
          <label id="label_site_latitud" class="label_site_latitud" for="site_latitud"></label>
          <input id="site_latitud" name="site_latitud" type="text" class="site_latitud" />
          <span id="span_error_site_latitud"><a id="error_site_latitud"></a></span>
        </div>

        <div class="form_block">
          <label id="label_site_longitud" class="label_site_longitud" for="site_longitud"></label>
          <input id="site_longitud" name="site_longitud" type="text" class="site_longitud" />
          <span id="span_error_site_longitud"><a id="error_site_longitud"></a></span>
        </div>

        <div class="form_block">
          <label id="label_site_altitude" class="label_site_altitude" for="site_altitude"></label>
          <input id="site_altitude" name="site_altitude" type="text" class="site_altitude" />
          <span id="span_error_site_altitude"><a id="error_site_altitude"></a></span>
        </div>

        <div class="form_block">
          <label id="label_site_locality" class="label_site_locality" for="site_locality"></label>
          <input id="site_locality" name="site_locality" type="text" class="site_locality" />
          <span id="span_error_site_locality"><a id="error_site_locality"></a></span>
        </div>

        <div class="form_block">
          <label id="label_site_provider_login" class="label_site_provider_login" for="site_provider_login"></label>
          <input id="site_provider_login" name="site_provider_login" type="text" class="site_provider_login" />
          <span id="span_error_site_provider_login"><a id="error_site_provider_login"></a></span>
        </div>

        ${photoBlocks}
      </form>
    `;
  }

  renderPhotoField(field) {
    const label = `label_${field}`;
    const input = field;
    const span = `span_error_${field}`;
    const anchor = `link_${field}`;
    const nuevoLabel = `label_nuevo_${field}`;
    const nuevoInput = `nuevo_${field}`;
    const nuevoSpan = `span_error_nuevo_${field}`;

    return `
      <div class="form_block file_block">
        <label id="${label}" class="${label}" for="${input}"></label>
        <input id="${input}" name="${input}" type="text" class="${input}" readonly />
        <span id="${span}"><a id="error_${input}"></a></span>
        <a id="${anchor}" class="${anchor}" href="#" target="_blank">
          <img src="./iconos/FILE.png" class="icon_file" />
        </a>
      </div>
      <div class="form_block file_block">
        <label id="${nuevoLabel}" class="${nuevoLabel}" for="${nuevoInput}"></label>
        <input id="${nuevoInput}" name="${nuevoInput}" type="file" class="${nuevoInput}" />
        <span id="${nuevoSpan}"><a id="error_${nuevoInput}"></a></span>
      </div>
    `;
  }

  mostrarcambioatributo(attribute, value) {
    if (this.photoFields.includes(attribute) && value) {
      const href = this.buildFileUrl(attribute, value);
      return `<a id="link_${attribute}_table" href="${href}" target="_blank"><img src="./iconos/FILE.png" class="icon_file"></a>`;
    }
    return value;
  }

  createForm_ADD() {
    this.setupForm("ADD", "text_form_ubicacion_ADD");
    this.configureIdSiteField("ADD");
    this.toggleFileWidgets("ADD");
    setLang();
  }

  createForm_SEARCH() {
    this.setupForm("SEARCH", "text_form_ubicacion_SEARCH");
    this.configureIdSiteField("SEARCH");
    this.toggleFileWidgets("SEARCH");
    this.clearOptionalSearch();
    setLang();
  }

  createForm_EDIT(fila) {
    this.setupForm("EDIT", "text_form_ubicacion_EDIT");
    const row = this.prepareRowForForm(fila);
    this.dom.rellenarvaloresform(row);
    this.configureIdSiteField("EDIT");
    this.dom.assign_property_value("id_site", "readonly", true);
    this.toggleFileWidgets("EDIT");
    this.photoFields.forEach((field) => {
      this.updateFileLink(field, row[field]);
    });
    setLang();
  }

  createForm_DELETE(fila) {
    this.setupForm("DELETE", "text_form_ubicacion_DELETE");
    const row = this.prepareRowForForm(fila);
    this.dom.rellenarvaloresform(row);
    this.configureIdSiteField("DELETE");
    this.toggleFileWidgets("DELETE");
    this.photoFields.forEach((field) => {
      this.updateFileLink(field, row[field]);
    });
    this.dom.colocartodosreadonly("form_iu");
    setLang();
  }

  createForm_SHOWCURRENT(fila) {
    this.setupForm("SHOWCURRENT", "text_form_ubicacion_SHOWCURRENT");
    const row = this.prepareRowForForm(fila);
    this.dom.rellenarvaloresform(row);
    this.configureIdSiteField("SHOWCURRENT");
    this.toggleFileWidgets("SHOWCURRENT");
    this.photoFields.forEach((field) => {
      this.updateFileLink(field, row[field]);
    });
    this.dom.colocartodosreadonly("form_iu");
    setLang();
  }

  configureIdSiteField(action) {
    const block = document.getElementById("block_id_site");
    const input = document.getElementById("id_site");
    if (!block || !input) {
      return;
    }

    if (action === "ADD") {
      block.style.display = "none";
    } else {
      block.style.display = "";
    }

    const readOnlyActions = ["EDIT", "DELETE", "SHOWCURRENT"];
    if (readOnlyActions.includes(action)) {
      this.dom.assign_property_value("id_site", "readonly", true);
    } else if (action === "SEARCH") {
      this.dom.assign_property_value("id_site", "readonly", false);
    }
  }

  ADD_submit_ubicacion() {
    const checks = [
      this.ADD_site_latitud_validation(),
      this.ADD_site_longitud_validation(),
      this.ADD_site_altitude_validation(),
      this.ADD_site_locality_validation(),
      this.ADD_site_provider_login_validation(),
      this.ADD_nuevo_site_north_photo_validation(),
      this.ADD_nuevo_site_south_photo_validation(),
      this.ADD_nuevo_site_east_photo_validation(),
      this.ADD_nuevo_site_west_photo_validation(),
    ];

    if (checks.every((result) => result === true)) {
      this.ADD();
    }
    return false;
  }

  EDIT_submit_ubicacion() {
    const checks = [
      this.EDIT_id_site_validation(),
      this.EDIT_site_latitud_validation(),
      this.EDIT_site_longitud_validation(),
      this.EDIT_site_altitude_validation(),
      this.EDIT_site_locality_validation(),
      this.EDIT_site_provider_login_validation(),
      this.EDIT_nuevo_site_north_photo_validation(),
      this.EDIT_nuevo_site_south_photo_validation(),
      this.EDIT_nuevo_site_east_photo_validation(),
      this.EDIT_nuevo_site_west_photo_validation(),
    ];

    if (checks.every((result) => result === true)) {
      this.EDIT();
    }
    return false;
  }

  DELETE_submit_ubicacion() {
    const checks = [
      this.DELETE_id_site_validation(),
      this.DELETE_site_latitud_validation(),
      this.DELETE_site_longitud_validation(),
      this.DELETE_site_altitude_validation(),
      this.DELETE_site_locality_validation(),
      this.DELETE_site_provider_login_validation(),
    ];
    if (checks.every((result) => result === true)) {
      this.DELETE();
    }
    return false;
  }

  SEARCH_submit_ubicacion() {
    const checks = [
      this.SEARCH_id_site_validation(),
      this.SEARCH_site_latitud_validation(),
      this.SEARCH_site_longitud_validation(),
      this.SEARCH_site_altitude_validation(),
      this.SEARCH_site_locality_validation(),
      this.SEARCH_site_provider_login_validation(),
    ];
    if (checks.every((result) => result === true)) {
      this.SEARCH();
    }
    return false;
  }

  SHOWCURRENT_submit_ubicacion() {
    return false;
  }



  validateRequired(id, errorCode) {
    const value = document.getElementById(id).value;
    if (value.trim().length === 0) {
      this.dom.mostrar_error_campo(id, errorCode);
      return false;
    }
    return true;
  }

  validateFormat(id, regexp, errorCode) {
    if (!this.validations.format(id, regexp)) {
      this.dom.mostrar_error_campo(id, errorCode);
      return false;
    }
    return true;
  }

  validateMaxSize(id, size, errorCode) {
    if (!this.validations.max_size(id, size)) {
      this.dom.mostrar_error_campo(id, errorCode);
      return false;
    }
    return true;
  }

  validateDecimalRange(id, min, max, errorCode) {
    const value = parseFloat(document.getElementById(id).value);
    if (Number.isNaN(value)) {
      this.dom.mostrar_error_campo(id, errorCode);
      return false;
    }
    if (value < min || value > max) {
      this.dom.mostrar_error_campo(id, errorCode);
      return false;
    }
    return true;
  }

  finalizeSuccess(id) {
    this.dom.mostrar_exito_campo(id);
    return true;
  }


  ADD_id_site_validation() {
    if (!this.validateRequired("id_site", "IDSITE_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("id_site", "^[0-9]{1,11}$", "IDSITE_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("id_site");
  }

  EDIT_id_site_validation() {
    return this.ADD_id_site_validation();
  }

  DELETE_id_site_validation() {
    return this.finalizeSuccess("id_site");
  }

  SEARCH_id_site_validation() {
    const value = document.getElementById("id_site").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("id_site");
      return true;
    }
    if (!this.validateFormat("id_site", "^[0-9]{0,11}$", "IDSITE_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("id_site");
  }

  ADD_site_latitud_validation() {
    if (!this.validateRequired("site_latitud", "LATITUD_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("site_latitud", "^-?[0-9]{1,3}\\.[0-9]{1,6}$", "LATITUD_FORMAT_KO")) {
      return false;
    }
    if (!this.validateDecimalRange("site_latitud", -90, 90, "LATITUD_RANGE_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_latitud");
  }

  EDIT_site_latitud_validation() {
    return this.ADD_site_latitud_validation();
  }

  DELETE_site_latitud_validation() {
    return this.finalizeSuccess("site_latitud");
  }

  SEARCH_site_latitud_validation() {
    const value = document.getElementById("site_latitud").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("site_latitud");
      return true;
    }
    if (!this.validateFormat("site_latitud", "^-?[0-9]{1,3}(\\.[0-9]{0,6})?$", "LATITUD_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_latitud");
  }

  ADD_site_longitud_validation() {
    if (!this.validateRequired("site_longitud", "LONGITUD_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("site_longitud", "^-?[0-9]{1,3}\\.[0-9]{1,6}$", "LONGITUD_FORMAT_KO")) {
      return false;
    }
    if (!this.validateDecimalRange("site_longitud", -180, 180, "LONGITUD_RANGE_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_longitud");
  }

  EDIT_site_longitud_validation() {
    return this.ADD_site_longitud_validation();
  }

  DELETE_site_longitud_validation() {
    return this.finalizeSuccess("site_longitud");
  }

  SEARCH_site_longitud_validation() {
    const value = document.getElementById("site_longitud").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("site_longitud");
      return true;
    }
    if (!this.validateFormat("site_longitud", "^-?[0-9]{1,3}(\\.[0-9]{0,6})?$", "LONGITUD_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_longitud");
  }

  ADD_site_altitude_validation() {
    if (!this.validateRequired("site_altitude", "ALTITUDE_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("site_altitude", "^-?[0-9]{1,4}$", "ALTITUDE_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_altitude");
  }

  EDIT_site_altitude_validation() {
    return this.ADD_site_altitude_validation();
  }

  DELETE_site_altitude_validation() {
    return this.finalizeSuccess("site_altitude");
  }

  SEARCH_site_altitude_validation() {
    const value = document.getElementById("site_altitude").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("site_altitude");
      return true;
    }
    if (!this.validateFormat("site_altitude", "^-?[0-9]{0,4}$", "ALTITUDE_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_altitude");
  }

  ADD_site_locality_validation() {
    if (!this.validateRequired("site_locality", "LOCALITY_REQUIRED")) {
      return false;
    }
    if (!this.validateMaxSize("site_locality", 40, "LOCALITY_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("site_locality", "^[A-Za-zÁÉÍÓÚÜÑñ0-9 .,'-]{1,40}$", "LOCALITY_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_locality");
  }

  EDIT_site_locality_validation() {
    return this.ADD_site_locality_validation();
  }

  DELETE_site_locality_validation() {
    return this.finalizeSuccess("site_locality");
  }

  SEARCH_site_locality_validation() {
    const value = document.getElementById("site_locality").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("site_locality");
      return true;
    }
    if (!this.validateMaxSize("site_locality", 40, "LOCALITY_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("site_locality", "^[A-Za-zÁÉÍÓÚÜÑñ0-9 .,'-]{0,40}$", "LOCALITY_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_locality");
  }

  ADD_site_provider_login_validation() {
    if (!this.validateRequired("site_provider_login", "PROVIDER_REQUIRED")) {
      return false;
    }
    if (!this.validateMaxSize("site_provider_login", 30, "PROVIDER_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("site_provider_login", "^[A-Za-z0-9_.-]{1,30}$", "PROVIDER_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_provider_login");
  }

  EDIT_site_provider_login_validation() {
    return this.ADD_site_provider_login_validation();
  }

  DELETE_site_provider_login_validation() {
    return this.finalizeSuccess("site_provider_login");
  }

  SEARCH_site_provider_login_validation() {
    const value = document.getElementById("site_provider_login").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("site_provider_login");
      return true;
    }
    if (!this.validateMaxSize("site_provider_login", 30, "PROVIDER_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("site_provider_login", "^[A-Za-z0-9_.-]{0,30}$", "PROVIDER_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("site_provider_login");
  }

  ADD_nuevo_site_north_photo_validation() {
    return this.validatePhotoRequired("nuevo_site_north_photo", "site_north_photo");
  }

  EDIT_nuevo_site_north_photo_validation() {
    return this.validatePhotoOptional("nuevo_site_north_photo");
  }

  DELETE_nuevo_site_north_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_north_photo");
    return true;
  }

  SEARCH_nuevo_site_north_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_north_photo");
    return true;
  }

  SHOWCURRENT_nuevo_site_north_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_north_photo");
    return true;
  }

  ADD_nuevo_site_south_photo_validation() {
    return this.validatePhotoRequired("nuevo_site_south_photo", "site_south_photo");
  }

  EDIT_nuevo_site_south_photo_validation() {
    return this.validatePhotoOptional("nuevo_site_south_photo");
  }

  DELETE_nuevo_site_south_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_south_photo");
    return true;
  }

  SEARCH_nuevo_site_south_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_south_photo");
    return true;
  }

  SHOWCURRENT_nuevo_site_south_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_south_photo");
    return true;
  }

  ADD_nuevo_site_east_photo_validation() {
    return this.validatePhotoRequired("nuevo_site_east_photo", "site_east_photo");
  }

  EDIT_nuevo_site_east_photo_validation() {
    return this.validatePhotoOptional("nuevo_site_east_photo");
  }

  DELETE_nuevo_site_east_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_east_photo");
    return true;
  }

  SEARCH_nuevo_site_east_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_east_photo");
    return true;
  }

  SHOWCURRENT_nuevo_site_east_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_east_photo");
    return true;
  }

  ADD_nuevo_site_west_photo_validation() {
    return this.validatePhotoRequired("nuevo_site_west_photo", "site_west_photo");
  }

  EDIT_nuevo_site_west_photo_validation() {
    return this.validatePhotoOptional("nuevo_site_west_photo");
  }

  DELETE_nuevo_site_west_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_west_photo");
    return true;
  }

  SEARCH_nuevo_site_west_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_west_photo");
    return true;
  }

  SHOWCURRENT_nuevo_site_west_photo_validation() {
    this.dom.mostrar_exito_campo("nuevo_site_west_photo");
    return true;
  }

  ADD_site_north_photo_validation() {
    this.dom.mostrar_exito_campo("site_north_photo");
    return true;
  }

  EDIT_site_north_photo_validation() {
    return this.ADD_site_north_photo_validation();
  }

  DELETE_site_north_photo_validation() {
    return this.ADD_site_north_photo_validation();
  }

  SEARCH_site_north_photo_validation() {
    return this.ADD_site_north_photo_validation();
  }

  SHOWCURRENT_site_north_photo_validation() {
    return this.ADD_site_north_photo_validation();
  }

  ADD_site_south_photo_validation() {
    this.dom.mostrar_exito_campo("site_south_photo");
    return true;
  }

  EDIT_site_south_photo_validation() {
    return this.ADD_site_south_photo_validation();
  }

  DELETE_site_south_photo_validation() {
    return this.ADD_site_south_photo_validation();
  }

  SEARCH_site_south_photo_validation() {
    return this.ADD_site_south_photo_validation();
  }

  SHOWCURRENT_site_south_photo_validation() {
    return this.ADD_site_south_photo_validation();
  }

  ADD_site_east_photo_validation() {
    this.dom.mostrar_exito_campo("site_east_photo");
    return true;
  }

  EDIT_site_east_photo_validation() {
    return this.ADD_site_east_photo_validation();
  }

  DELETE_site_east_photo_validation() {
    return this.ADD_site_east_photo_validation();
  }

  SEARCH_site_east_photo_validation() {
    return this.ADD_site_east_photo_validation();
  }

  SHOWCURRENT_site_east_photo_validation() {
    return this.ADD_site_east_photo_validation();
  }

  ADD_site_west_photo_validation() {
    this.dom.mostrar_exito_campo("site_west_photo");
    return true;
  }

  EDIT_site_west_photo_validation() {
    return this.ADD_site_west_photo_validation();
  }

  DELETE_site_west_photo_validation() {
    return this.ADD_site_west_photo_validation();
  }

  SEARCH_site_west_photo_validation() {
    return this.ADD_site_west_photo_validation();
  }

  SHOWCURRENT_site_west_photo_validation() {
    return this.ADD_site_west_photo_validation();
  }

  validatePhotoRequired(id, attribute) {
    const input = document.getElementById(id);
    if (input.files.length === 0) {
      this.dom.mostrar_error_campo(id, `${attribute.toUpperCase()}_FILE_REQUIRED`);
      return false;
    }
    if (!this.validations.max_size_file(id, this.fileMaxBytes)) {
      this.dom.mostrar_error_campo(id, `${attribute.toUpperCase()}_MAX_SIZE_KO`);
      return false;
    }
    if (
      !this.validations.type_file(id, ["image/jpeg", "image/png"])
    ) {
      this.dom.mostrar_error_campo(id, `${attribute.toUpperCase()}_TYPE_KO`);
      return false;
    }
    if (
      !this.validations.format_name_file(
        id,
        "^[A-Za-z0-9_.-]+\\.(jpg|jpeg|png)$"
      )
    ) {
      this.dom.mostrar_error_campo(id, `${attribute.toUpperCase()}_NAME_KO`);
      return false;
    }
    return this.finalizeSuccess(id);
  }

  validatePhotoOptional(id) {
    const input = document.getElementById(id);
    if (input.files.length === 0) {
      this.dom.mostrar_exito_campo(id);
      return true;
    }
    if (!this.validations.max_size_file(id, this.fileMaxBytes)) {
      this.dom.mostrar_error_campo(id, `${id.toUpperCase()}_MAX_SIZE_KO`);
      return false;
    }
    if (
      !this.validations.type_file(id, ["image/jpeg", "image/png"])
    ) {
      this.dom.mostrar_error_campo(id, `${id.toUpperCase()}_TYPE_KO`);
      return false;
    }
    if (
      !this.validations.format_name_file(
        id,
        "^[A-Za-z0-9_.-]+\\.(jpg|jpeg|png)$"
      )
    ) {
      this.dom.mostrar_error_campo(id, `${id.toUpperCase()}_NAME_KO`);
      return false;
    }
    return this.finalizeSuccess(id);
  }


  setupForm(action, titleKey) {
    document.getElementById("contenedor_IU_form").innerHTML = this.manual_form_creation();
    this.dom.show_element("Div_IU_form", "block");

    const form = document.getElementById("form_iu");
    form.setAttribute("onsubmit", `return entidad.${action}_submit_${this.nombreentidad}();`);
    form.setAttribute("action", `javascript:entidad.${action}();`);

    this.dom.colocarboton(action);
    this.dom.colocarvalidaciones("form_iu", action);

    const title = document.getElementById("class_contenido_titulo_form");
    title.className = "";
    title.classList.add(titleKey);
  }

  toggleFileWidgets(action) {
    this.photoFields.forEach((field) => {
      const label = `label_${field}`;
      const text = field;
      const span = `span_error_${field}`;
      const link = `link_${field}`;
      const nuevoLabel = `label_nuevo_${field}`;
      const nuevoInput = `nuevo_${field}`;
      const nuevoSpan = `span_error_nuevo_${field}`;

      switch (action) {
        case "ADD":
          this.dom.hide_element(label);
          this.dom.hide_element(text);
          this.dom.hide_element(span);
          this.dom.hide_element(link);
          this.showElement(nuevoLabel);
          this.showElement(nuevoInput);
          this.showElement(nuevoSpan);
          break;
        case "EDIT":
          this.showElement(label);
          this.showElement(text);
          this.showElement(span);
          this.showElement(link);
          this.showElement(nuevoLabel);
          this.showElement(nuevoInput);
          this.showElement(nuevoSpan);
          break;
        case "DELETE":
        case "SHOWCURRENT":
          this.showElement(label);
          this.showElement(text);
          this.showElement(span);
          this.showElement(link);
          this.dom.hide_element(nuevoLabel);
          this.dom.hide_element(nuevoInput);
          this.dom.hide_element(nuevoSpan);
          break;
        case "SEARCH":
          this.dom.hide_element(label);
          this.dom.hide_element(text);
          this.dom.hide_element(span);
          this.dom.hide_element(link);
          this.dom.hide_element(nuevoLabel);
          this.dom.hide_element(nuevoInput);
          this.dom.hide_element(nuevoSpan);
          break;
        default:
          break;
      }
    });
  }

  showElement(id) {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = "";
    }
  }

  prepareRowForForm(row) {

      const prepared = {};

      Object.keys(row).forEach((key) => {

          if (key === "EDIT" || key === "DELETE" || key === "SHOWCURRENT") return;

          let normalized = key.toLowerCase();

          if (normalized.startsWith("ubicacion_")) {
              normalized = normalized.replace("ubicacion_", "");
          }

          prepared[normalized] = row[key];
      });

      this.photoFields.forEach((field) => {
          const lower = field.toLowerCase();
          if (prepared[lower] !== undefined) {
              prepared[lower] = this.restoreFileName(prepared[lower], field);
          }
      });

      return prepared;
  }

  restoreFileName(value, attribute) {
    if (!value) {
      return "";
    }
    if (value.indexOf("href=") !== -1) {
      const regex = new RegExp(`files_${this.fileFolderSegment(attribute)}/([^"']+)`, "i");
      const matches = value.match(regex);
      if (matches && matches[1]) {
        return matches[1];
      }
    }
    return value;
  }

  updateFileLink(attribute, filename) {
    const link = document.getElementById(`link_${attribute}`);
    if (!link) {
      return;
    }
    if (filename) {
      link.style.display = "";
      link.setAttribute("href", this.buildFileUrl(attribute, filename));
    } else {
      this.dom.hide_element(`link_${attribute}`);
    }
  }

  buildFileUrl(attribute, filename) {
    if (!filename) {
      return "#";
    }
    return `http://193.147.87.202/ET2/filesuploaded/files_${this.fileFolderSegment(attribute)}/${filename}`;
  }

  fileFolderSegment(attribute) {
    if (!attribute || attribute.length === 0) {
      return "";
    }
    return attribute.charAt(0).toLowerCase() + attribute.slice(1);
  }

  clearOptionalSearch() {
    ["id_site", "site_latitud", "site_longitud", "site_altitude", "site_locality", "site_provider_login"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.removeAttribute("required");
      }
    });
  }
}
