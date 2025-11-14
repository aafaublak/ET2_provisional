class alumnograduacion extends EntidadAbstracta {
  constructor(esTest) {
    super(esTest);

    this.allowedTitulaciones = ["GREI", "GRIA", "MEI", "MIA", "PCEO"];

    this.columnasamostrar = [
      "login",
      "nombre",
      "apellidos",
      "titulacion",
      "dni",
      "telefono",
      "email",
      "fotoacto",
    ];

    this.mostrarespecial = ["fotoacto"];

    this.attributes = [
      "login",
      "password",
      "nombre",
      "apellidos",
      "titulacion",
      "dni",
      "telefono",
      "direccion",
      "email",
      "fotoacto",
      "nuevo_fotoacto",
    ];

    this.fileMaxBytes = 2 * 1024 * 1024;
  }

  manual_form_creation() {
    return `
      <form id="form_iu" enctype="multipart/form-data" method="post" class="formulario">
        <div class="form_block">
          <label id="label_login" class="label_login" for="login"></label>
          <input id="login" name="login" type="text" class="login" />
          <span id="span_error_login"><a id="error_login"></a></span>
        </div>

        <div class="form_block">
          <label id="label_password" class="label_password" for="password"></label>
          <input id="password" name="password" type="password" class="password" />
          <span id="span_error_password"><a id="error_password"></a></span>
        </div>

        <div class="form_block">
          <label id="label_nombre" class="label_nombre" for="nombre"></label>
          <input id="nombre" name="nombre" type="text" class="nombre" />
          <span id="span_error_nombre"><a id="error_nombre"></a></span>
        </div>

        <div class="form_block">
          <label id="label_apellidos" class="label_apellidos" for="apellidos"></label>
          <input id="apellidos" name="apellidos" type="text" class="apellidos" />
          <span id="span_error_apellidos"><a id="error_apellidos"></a></span>
        </div>

        <div class="form_block">
          <label id="label_titulacion" class="label_titulacion" for="titulacion"></label>
          <select id="titulacion" name="titulacion" class="titulacion">
            <option value="" class="titulacion_placeholder"></option>
            <option value="GREI" class="titulacion_GREI"></option>
            <option value="GRIA" class="titulacion_GRIA"></option>
            <option value="MEI" class="titulacion_MEI"></option>
            <option value="MIA" class="titulacion_MIA"></option>
            <option value="PCEO" class="titulacion_PCEO"></option>
          </select>
          <span id="span_error_titulacion"><a id="error_titulacion"></a></span>
        </div>

        <div class="form_block">
          <label id="label_dni" class="label_dni" for="dni"></label>
          <input id="dni" name="dni" type="text" class="dni" />
          <span id="span_error_dni"><a id="error_dni"></a></span>
        </div>

        <div class="form_block">
          <label id="label_telefono" class="label_telefono" for="telefono"></label>
          <input id="telefono" name="telefono" type="text" class="telefono" />
          <span id="span_error_telefono"><a id="error_telefono"></a></span>
        </div>

        <div class="form_block">
          <label id="label_direccion" class="label_direccion" for="direccion"></label>
          <textarea id="direccion" name="direccion" class="direccion" rows="3"></textarea>
          <span id="span_error_direccion"><a id="error_direccion"></a></span>
        </div>

        <div class="form_block">
          <label id="label_email" class="label_email" for="email"></label>
          <input id="email" name="email" type="text" class="email" />
          <span id="span_error_email"><a id="error_email"></a></span>
        </div>

        <div class="form_block file_block">
          <label id="label_fotoacto" class="label_fotoacto" for="fotoacto"></label>
          <input id="fotoacto" name="fotoacto" type="text" class="fotoacto" readonly />
          <span id="span_error_fotoacto"><a id="error_fotoacto"></a></span>
          <a id="link_fotoacto" class="link_fotoacto" href="#" target="_blank">
            <img src="./iconos/FILE.png" class="icon_file" />
          </a>
        </div>

        <div class="form_block file_block">
          <label id="label_nuevo_fotoacto" class="label_nuevo_fotoacto" for="nuevo_fotoacto"></label>
          <input id="nuevo_fotoacto" name="nuevo_fotoacto" type="file" class="nuevo_fotoacto" />
          <span id="span_error_nuevo_fotoacto"><a id="error_nuevo_fotoacto"></a></span>
        </div>
      </form>
    `;
  }

  mostrarcambioatributo(attribute, value) {
    if (attribute === "fotoacto" && value) {
      const href = this.buildFileUrl("fotoacto", value);
      return `<a id="link_fotoacto_table" href="${href}" target="_blank"><img src="./iconos/FILE.png" class="icon_file"></a>`;
    }
    return value;
  }

  createForm_ADD() {
    this.setupForm("ADD", "text_form_alumnograduacion_ADD");
    this.toggleFileWidgets("ADD");
    setLang();
  }

  createForm_SEARCH() {
    this.setupForm("SEARCH", "text_form_alumnograduacion_SEARCH");
    this.toggleFileWidgets("SEARCH");
    document.getElementById("titulacion").value = "";
    setLang();
  }

  createForm_EDIT(fila) {
    this.setupForm("EDIT", "text_form_alumnograduacion_EDIT");
    const row = this.prepareRowForForm(fila);
    this.dom.rellenarvaloresform(row);
    this.dom.assign_property_value("login", "readonly", true);
    this.updateFileLink("fotoacto", row.fotoacto);
    this.toggleFileWidgets("EDIT");
    setLang();
  }

  createForm_DELETE(fila) {
    this.setupForm("DELETE", "text_form_alumnograduacion_DELETE");
    const row = this.prepareRowForForm(fila);
    this.dom.rellenarvaloresform(row);
    this.updateFileLink("fotoacto", row.fotoacto);
    this.toggleFileWidgets("DELETE");
    this.dom.colocartodosreadonly("form_iu");
    setLang();
  }

  createForm_SHOWCURRENT(fila) {
    this.setupForm("SHOWCURRENT", "text_form_alumnograduacion_SHOWCURRENT");
    const row = this.prepareRowForForm(fila);
    this.dom.rellenarvaloresform(row);
    this.updateFileLink("fotoacto", row.fotoacto);
    this.toggleFileWidgets("SHOWCURRENT");
    this.dom.colocartodosreadonly("form_iu");
    setLang();
  }

  ADD_submit_alumnograduacion() {
    const checks = [
      this.ADD_login_validation(),
      this.ADD_password_validation(),
      this.ADD_nombre_validation(),
      this.ADD_apellidos_validation(),
      this.ADD_titulacion_validation(),
      this.ADD_dni_validation(),
      this.ADD_telefono_validation(),
      this.ADD_direccion_validation(),
      this.ADD_email_validation(),
      this.ADD_nuevo_fotoacto_validation(),
    ];
    if (checks.every((result) => result === true)) {
      console.log("All validations passed. Proceeding with ADD operation.");
      this.syncPrefixedHiddenFields();
      this.ADD();
    }
    return false;
  }

  EDIT_submit_alumnograduacion() {
    const checks = [
      this.EDIT_login_validation(),
      this.EDIT_password_validation(),
      this.EDIT_nombre_validation(),
      this.EDIT_apellidos_validation(),
      this.EDIT_titulacion_validation(),
      this.EDIT_dni_validation(),
      this.EDIT_telefono_validation(),
      this.EDIT_direccion_validation(),
      this.EDIT_email_validation(),
      this.EDIT_nuevo_fotoacto_validation(),
    ];
    if (checks.every((result) => result === true)) {
      this.syncPrefixedHiddenFields();
      this.EDIT();
    }
    return false;
  }

  DELETE_submit_alumnograduacion() {
    const checks = [
      this.DELETE_login_validation(),
      this.DELETE_password_validation(),
      this.DELETE_nombre_validation(),
      this.DELETE_apellidos_validation(),
      this.DELETE_titulacion_validation(),
      this.DELETE_dni_validation(),
      this.DELETE_telefono_validation(),
      this.DELETE_direccion_validation(),
      this.DELETE_email_validation(),
    ];
    if (checks.every((result) => result === true)) {
      this.syncPrefixedHiddenFields();
      this.DELETE();
    }
    return false;
  }

  SEARCH_submit_alumnograduacion() {
    const checks = [
      this.SEARCH_login_validation(),
      this.SEARCH_password_validation(),
      this.SEARCH_nombre_validation(),
      this.SEARCH_apellidos_validation(),
      this.SEARCH_titulacion_validation(),
      this.SEARCH_dni_validation(),
      this.SEARCH_telefono_validation(),
      this.SEARCH_direccion_validation(),
      this.SEARCH_email_validation(),
    ];
    if (checks.every((result) => result === true)) {
      this.syncPrefixedHiddenFields();
      this.SEARCH();
    }
    return false;
  }

  SHOWCURRENT_submit_alumnograduacion() {
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

  validateMinSize(id, size, errorCode) {
    if (!this.validations.min_size(id, size)) {
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

  validateFormat(id, regexp, errorCode) {
    if (!this.validations.format(id, regexp)) {
      this.dom.mostrar_error_campo(id, errorCode);
      return false;
    }
    return true;
  }

  finalizeSuccess(id) {
    this.dom.mostrar_exito_campo(id);
    return true;
  }


  ADD_login_validation() {
    if (!this.validateRequired("login", "LOGIN_REQUIRED")) {
      return false;
    }
    if (!this.validateMinSize("login", 4, "LOGIN_MIN_SIZE_KO")) {
      return false;
    }
    if (!this.validateMaxSize("login", 15, "LOGIN_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("login", "^[A-Za-z]+$", "LOGIN_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("login");
  }

  EDIT_login_validation() {
    return this.ADD_login_validation();
  }

  DELETE_login_validation() {
    return this.finalizeSuccess("login");
  }

  SEARCH_login_validation() {
    const value = document.getElementById("login").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("login");
      return true;
    }
    if (!this.validateMaxSize("login", 15, "LOGIN_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("login", "^[A-Za-z]*$", "LOGIN_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("login");
  }

  ADD_password_validation() {
    if (!this.validateRequired("password", "PASSWORD_REQUIRED")) {
      return false;
    }
    const pass = document.getElementById("password").value;
    if (pass.length < 8) {
        this.dom.mostrar_error_campo("password", "PASSWORD_MIN_SIZE_KO");
        return false;
    }
    if (pass.length > 64) {
        this.dom.mostrar_error_campo("password", "PASSWORD_MAX_SIZE_KO");
        return false;
    }
    if (!this.validateFormat("password", "^[A-Za-z0-9]+$", "PASSWORD_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("password");
  }

  EDIT_password_validation() {
    return this.ADD_password_validation();
  }

  DELETE_password_validation() {
    return this.finalizeSuccess("password");
  }

  SEARCH_password_validation() {
    const value = document.getElementById("password").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("password");
      return true;
    }
    const pass = document.getElementById("password").value;
    if (pass.length > 64) {
        this.dom.mostrar_error_campo("password", "PASSWORD_MAX_SIZE_KO");
        return false;
    }
    if (!this.validateFormat("password", "^[A-Za-z0-9]*$", "PASSWORD_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("password");
  }

  ADD_nombre_validation() {
    if (!this.validateRequired("nombre", "NOMBRE_REQUIRED")) {
      return false;
    }
    if (!this.validateMinSize("nombre", 2, "NOMBRE_MIN_SIZE_KO")) {
      return false;
    }
    if (!this.validateMaxSize("nombre", 25, "NOMBRE_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("nombre", "^[A-Za-zÁÉÍÓÚÜÑñ ]+$", "NOMBRE_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("nombre");
  }

  EDIT_nombre_validation() {
    return this.ADD_nombre_validation();
  }

  DELETE_nombre_validation() {
    return this.finalizeSuccess("nombre");
  }

  SEARCH_nombre_validation() {
    const value = document.getElementById("nombre").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("nombre");
      return true;
    }
    if (!this.validateMaxSize("nombre", 25, "NOMBRE_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("nombre", "^[A-Za-zÁÉÍÓÚÜÑñ ]*$", "NOMBRE_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("nombre");
  }

  ADD_apellidos_validation() {
    if (!this.validateRequired("apellidos", "APELLIDOS_REQUIRED")) {
      return false;
    }
    if (!this.validateMinSize("apellidos", 2, "APELLIDOS_MIN_SIZE_KO")) {
      return false;
    }
    if (!this.validateMaxSize("apellidos", 35, "APELLIDOS_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("apellidos", "^[A-Za-zÁÉÍÓÚÜÑñ ]+$", "APELLIDOS_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("apellidos");
  }

  EDIT_apellidos_validation() {
    return this.ADD_apellidos_validation();
  }

  DELETE_apellidos_validation() {
    return this.finalizeSuccess("apellidos");
  }

  SEARCH_apellidos_validation() {
    const value = document.getElementById("apellidos").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("apellidos");
      return true;
    }
    if (!this.validateMaxSize("apellidos", 35, "APELLIDOS_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("apellidos", "^[A-Za-zÁÉÍÓÚÜÑñ ]*$", "APELLIDOS_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("apellidos");
  }

  ADD_titulacion_validation() {
    if (!this.validateRequired("titulacion", "TITULACION_REQUIRED")) {
      return false;
    }
    const value = document.getElementById("titulacion").value;
    if (!this.allowedTitulaciones.includes(value)) {
      this.dom.mostrar_error_campo("titulacion", "TITULACION_ENUM_KO");
      return false;
    }
    return this.finalizeSuccess("titulacion");
  }

  EDIT_titulacion_validation() {
    return this.ADD_titulacion_validation();
  }

  DELETE_titulacion_validation() {
    return this.finalizeSuccess("titulacion");
  }

  SEARCH_titulacion_validation() {
    const value = document.getElementById("titulacion").value;
    if (value === "") {
      this.dom.mostrar_exito_campo("titulacion");
      return true;
    }
    if (!this.allowedTitulaciones.includes(value)) {
      this.dom.mostrar_error_campo("titulacion", "TITULACION_ENUM_KO");
      return false;
    }
    return this.finalizeSuccess("titulacion");
  }

  ADD_dni_validation() {
    if (!this.validateRequired("dni", "DNI_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("dni", "^[0-9]{8}[A-Za-z]$|^[XYZxyz][0-9]{7}[A-Za-z]$", "DNI_FORMAT_KO")) {
      return false;
    }
    if (!this.validateDniLetter("dni")) {
      return false;
    }
    return this.finalizeSuccess("dni");
  }

  EDIT_dni_validation() {
    return this.ADD_dni_validation();
  }

  DELETE_dni_validation() {
    return this.finalizeSuccess("dni");
  }

  SEARCH_dni_validation() {
    const value = document.getElementById("dni").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("dni");
      return true;
    }
    if (!this.validateFormat("dni", "^[0-9]{0,8}[A-Za-z]?$|^[XYZxyz]?[0-9]{0,7}[A-Za-z]?$", "DNI_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("dni");
  }

  ADD_telefono_validation() {
    if (!this.validateRequired("telefono", "TELEFONO_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("telefono", "^[0-9]{9}$", "TELEFONO_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("telefono");
  }

  EDIT_telefono_validation() {
    return this.ADD_telefono_validation();
  }

  DELETE_telefono_validation() {
    return this.finalizeSuccess("telefono");
  }

  SEARCH_telefono_validation() {
    const value = document.getElementById("telefono").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("telefono");
      return true;
    }
    if (!this.validateFormat("telefono", "^[0-9]{0,9}$", "TELEFONO_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("telefono");
  }

  ADD_direccion_validation() {
    if (!this.validateRequired("direccion", "DIRECCION_REQUIRED")) {
      return false;
    }
    const dir = document.getElementById("direccion").value;
    if (dir.length > 150) {
      this.dom.mostrar_error_campo("direccion", "DIRECCION_MAX_SIZE_KO");
      return false;
    }
    if (!this.validateFormat("direccion", "^[A-Za-zÁÉÍÓÚÜÑñ0-9 .,\\-#/]+$", "DIRECCION_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("direccion");
  }

  EDIT_direccion_validation() {
    return this.ADD_direccion_validation();
  }

  DELETE_direccion_validation() {
    return this.finalizeSuccess("direccion");
  }

  SEARCH_direccion_validation() {
    const value = document.getElementById("direccion").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("direccion");
      return true;
    }
    const dir = document.getElementById("direccion").value;
    if (dir.length > 150) {
      this.dom.mostrar_error_campo("direccion", "DIRECCION_MAX_SIZE_KO");
      return false;
    }
    if (!this.validateFormat("direccion", "^[A-Za-zÁÉÍÓÚÜÑñ0-9 .,\\-#/]*$", "DIRECCION_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("direccion");
  }

  ADD_email_validation() {
    if (!this.validateRequired("email", "EMAIL_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("email", "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$", "EMAIL_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("email");
  }

  EDIT_email_validation() {
    return this.ADD_email_validation();
  }

  DELETE_email_validation() {
    return this.finalizeSuccess("email");
  }

  SEARCH_email_validation() {
    const value = document.getElementById("email").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("email");
      return true;
    }
    if (!this.validateFormat("email", "^[A-Za-z0-9._%+-]*@?[A-Za-z0-9.-]*\\.?[A-Za-z]{0,}$", "EMAIL_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("email");
  }

  ADD_nuevo_fotoacto_validation() {
    const input = document.getElementById("nuevo_fotoacto");
    if (input.files.length === 0) {
      this.dom.mostrar_error_campo("nuevo_fotoacto", "FOTOACTO_FILE_REQUIRED");
      return false;
    }
    if (!this.validations.max_size_file("nuevo_fotoacto", this.fileMaxBytes)) {
      this.dom.mostrar_error_campo("nuevo_fotoacto", "FOTOACTO_MAX_SIZE_KO");
      return false;
    }
    if (!this.validations.type_file("nuevo_fotoacto", ["image/jpeg"])) {
      this.dom.mostrar_error_campo("nuevo_fotoacto", "FOTOACTO_TYPE_KO");
      return false;
    }
    if (!this.validations.format_name_file("nuevo_fotoacto", "^[A-Za-z0-9_.-]+\\.[jJ][pP][gG]$")) {
      this.dom.mostrar_error_campo("nuevo_fotoacto", "FOTOACTO_NAME_KO");
      return false;
    }
    return this.finalizeSuccess("nuevo_fotoacto");
  }

  EDIT_nuevo_fotoacto_validation() {
    const input = document.getElementById("nuevo_fotoacto");
    if (input.files.length === 0) {
      this.dom.mostrar_exito_campo("nuevo_fotoacto");
      return true;
    }
    if (!this.validations.max_size_file("nuevo_fotoacto", this.fileMaxBytes)) {
      this.dom.mostrar_error_campo("nuevo_fotoacto", "FOTOACTO_MAX_SIZE_KO");
      return false;
    }
    if (!this.validations.type_file("nuevo_fotoacto", ["image/jpeg"])) {
      this.dom.mostrar_error_campo("nuevo_fotoacto", "FOTOACTO_TYPE_KO");
      return false;
    }
    if (!this.validations.format_name_file("nuevo_fotoacto", "^[A-Za-z0-9_.-]+\\.[jJ][pP][gG]$")) {
      this.dom.mostrar_error_campo("nuevo_fotoacto", "FOTOACTO_NAME_KO");
      return false;
    }
    return this.finalizeSuccess("nuevo_fotoacto");
  }

  DELETE_nuevo_fotoacto_validation() {
    this.dom.mostrar_exito_campo("nuevo_fotoacto");
    return true;
  }

  SEARCH_nuevo_fotoacto_validation() {
    this.dom.mostrar_exito_campo("nuevo_fotoacto");
    return true;
  }

  SHOWCURRENT_nuevo_fotoacto_validation() {
    this.dom.mostrar_exito_campo("nuevo_fotoacto");
    return true;
  }

  ADD_fotoacto_validation() {
    this.dom.mostrar_exito_campo("fotoacto");
    return true;
  }

  EDIT_fotoacto_validation() {
    return this.ADD_fotoacto_validation();
  }

  DELETE_fotoacto_validation() {
    return this.ADD_fotoacto_validation();
  }

  SEARCH_fotoacto_validation() {
    return this.ADD_fotoacto_validation();
  }

  SHOWCURRENT_fotoacto_validation() {
    return this.ADD_fotoacto_validation();
  }

  validateDniLetter(id) {
    const value = document.getElementById(id).value.toUpperCase();
    const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    let number = value.slice(0, -1);
    let letter = value.slice(-1);

    if (number.startsWith("X")) {
      number = number.replace("X", "0");
    } else if (number.startsWith("Y")) {
      number = number.replace("Y", "1");
    } else if (number.startsWith("Z")) {
      number = number.replace("Z", "2");
    }

    const numeric = parseInt(number, 10);
    if (Number.isNaN(numeric)) {
      this.dom.mostrar_error_campo(id, "DNI_FORMAT_KO");
      return false;
    }
    const expected = letters[numeric % 23];
    if (expected !== letter.toUpperCase()) {
      this.dom.mostrar_error_campo(id, "DNI_LETTER_KO");
      return false;
    }
    return true;
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
    switch (action) {
      case "ADD":
        this.dom.hide_element("label_fotoacto");
        this.dom.hide_element("fotoacto");
        this.dom.hide_element("span_error_fotoacto");
        this.dom.hide_element("link_fotoacto");
        this.showElement("label_nuevo_fotoacto");
        this.showElement("nuevo_fotoacto");
        this.showElement("span_error_nuevo_fotoacto");
        break;
      case "EDIT":
        this.showElement("label_fotoacto");
        this.showElement("fotoacto");
        this.showElement("span_error_fotoacto");
        this.showElement("link_fotoacto");
        this.showElement("label_nuevo_fotoacto");
        this.showElement("nuevo_fotoacto");
        this.showElement("span_error_nuevo_fotoacto");
        break;
      case "DELETE":
      case "SHOWCURRENT":
        this.showElement("label_fotoacto");
        this.showElement("fotoacto");
        this.showElement("span_error_fotoacto");
        this.showElement("link_fotoacto");
        this.dom.hide_element("label_nuevo_fotoacto");
        this.dom.hide_element("nuevo_fotoacto");
        this.dom.hide_element("span_error_nuevo_fotoacto");
        break;
      case "SEARCH":
        this.dom.hide_element("label_fotoacto");
        this.dom.hide_element("fotoacto");
        this.dom.hide_element("span_error_fotoacto");
        this.dom.hide_element("link_fotoacto");
        this.dom.hide_element("label_nuevo_fotoacto");
        this.dom.hide_element("nuevo_fotoacto");
        this.dom.hide_element("span_error_nuevo_fotoacto");
        break;
      default:
        break;
    }
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

      if (normalized.startsWith("alumnograduacion_")) {
        normalized = normalized.replace("alumnograduacion_", "");
      }

      prepared[normalized] = row[key];
    });

    if (prepared.fotoacto !== undefined) {
      prepared.fotoacto = this.restoreFileName(prepared.fotoacto, "fotoacto");
    }

    prepared.password = "******";

    return prepared;
  }

  syncPrefixedHiddenFields() {
      const form = document.getElementById("form_iu");
      if (!form) return;

      const prefix = "alumnograduacion_";

      const campos = [
          "login",
          "password",
          "nombre",
          "apellidos",
          "titulacion",
          "dni",
          "telefono",
          "direccion",
          "email",
          "fotoacto",
          "nuevo_fotoacto"
      ];

      campos.forEach((campo) => {
          const base = form.elements[campo];
          if (!base) return;

          const prefName = prefix + campo;

          let hidden = form.querySelector(
              `input[type="hidden"][name="${prefName}"]`
          );

          if (!hidden) {
              hidden = document.createElement("input");
              hidden.type = "hidden";
              hidden.id = prefName;
              hidden.name = prefName;
              form.appendChild(hidden);
          }

          if (campo === "nuevo_fotoacto") {
              const file = base.files?.[0];
              hidden.value = file ? file.name : "";
              return;
          }

          hidden.value = base.value;
      });
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
}
