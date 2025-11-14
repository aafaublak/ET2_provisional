class articulo extends EntidadAbstracta {
  constructor(esTest) {
    super(esTest);

    this.columnasamostrar = [
      "CodigoA",
      "AutoresA",
      "TituloA",
      "TituloR",
      "ISSN",
      "VolumenR",
      "PagIniA",
      "PagFinA",
      "FechaPublicacionR",
      "FicheropdfA",
      "EstadoA",
    ];

    this.mostrarespecial = ["FicheropdfA"];

    this.attributes = [
      "CodigoA",
      "AutoresA",
      "TituloA",
      "TituloR",
      "ISSN",
      "VolumenR",
      "PagIniA",
      "PagFinA",
      "FechaPublicacionR",
      "EstadoA",
      "FicheropdfA",
      "nuevo_FicheropdfA",
    ];

    this.fileMaxBytes = 2 * 1024 * 1024;
  }

  manual_form_creation() {
    return `
      <form id="form_iu" enctype="multipart/form-data" method="post" class="formulario">
        <div class="form_block" id="block_CodigoA">
          <label id="label_CodigoA" class="label_CodigoA" for="CodigoA"></label>
          <input id="CodigoA" name="CodigoA" type="text" class="CodigoA" />
          <span id="span_error_CodigoA"><a id="error_CodigoA"></a></span>
        </div>

        <div class="form_block">
          <label id="label_AutoresA" class="label_AutoresA" for="AutoresA"></label>
          <input id="AutoresA" name="AutoresA" type="text" class="AutoresA" />
          <span id="span_error_AutoresA"><a id="error_AutoresA"></a></span>
        </div>

        <div class="form_block">
          <label id="label_TituloA" class="label_TituloA" for="TituloA"></label>
          <input id="TituloA" name="TituloA" type="text" class="TituloA" />
          <span id="span_error_TituloA"><a id="error_TituloA"></a></span>
        </div>

        <div class="form_block">
          <label id="label_TituloR" class="label_TituloR" for="TituloR"></label>
          <input id="TituloR" name="TituloR" type="text" class="TituloR" />
          <span id="span_error_TituloR"><a id="error_TituloR"></a></span>
        </div>

        <div class="form_block">
          <label id="label_ISSN" class="label_ISSN" for="ISSN"></label>
          <input id="ISSN" name="ISSN" type="text" class="ISSN" />
          <span id="span_error_ISSN"><a id="error_ISSN"></a></span>
        </div>

        <div class="form_block">
          <label id="label_VolumenR" class="label_VolumenR" for="VolumenR"></label>
          <input id="VolumenR" name="VolumenR" type="text" class="VolumenR" />
          <span id="span_error_VolumenR"><a id="error_VolumenR"></a></span>
        </div>

        <div class="form_block">
          <label id="label_PagIniA" class="label_PagIniA" for="PagIniA"></label>
          <input id="PagIniA" name="PagIniA" type="text" class="PagIniA" />
          <span id="span_error_PagIniA"><a id="error_PagIniA"></a></span>
        </div>

        <div class="form_block">
          <label id="label_PagFinA" class="label_PagFinA" for="PagFinA"></label>
          <input id="PagFinA" name="PagFinA" type="text" class="PagFinA" />
          <span id="span_error_PagFinA"><a id="error_PagFinA"></a></span>
        </div>

        <div class="form_block">
          <label id="label_FechaPublicacionR" class="label_FechaPublicacionR" for="FechaPublicacionR"></label>
          <input id="FechaPublicacionR" name="FechaPublicacionR_visible" type="date" class="FechaPublicacionR" />
          <span id="span_error_FechaPublicacionR"><a id="error_FechaPublicacionR"></a></span>
          <input id="FechaPublicacionR_hidden" name="FechaPublicacionR" type="hidden" />
        </div>

        <div class="form_block">
          <label id="label_EstadoA" class="label_EstadoA" for="EstadoA"></label>
          <select id="EstadoA" name="EstadoA" class="EstadoA">
            <option value="Enviado" class="EstadoA_Enviado"></option>
            <option value="Revision" class="EstadoA_Revision"></option>
            <option value="Publicado" class="EstadoA_Publicado"></option>
          </select>
          <span id="span_error_EstadoA"><a id="error_EstadoA"></a></span>
        </div>

        <div class="form_block file_block">
          <label id="label_FicheropdfA" class="label_FicheropdfA" for="FicheropdfA"></label>
          <input id="FicheropdfA" name="FicheropdfA" type="text" class="FicheropdfA" readonly />
          <span id="span_error_FicheropdfA"><a id="error_FicheropdfA"></a></span>
          <a id="link_FicheropdfA" class="link_FicheropdfA" href="#" target="_blank">
            <img src="./iconos/FILE.png" class="icon_file" />
          </a>
        </div>

        <div class="form_block file_block">
          <label id="label_nuevo_FicheropdfA" class="label_nuevo_FicheropdfA" for="nuevo_FicheropdfA"></label>
          <input id="nuevo_FicheropdfA" name="nuevo_FicheropdfA" type="file" class="nuevo_FicheropdfA" />
          <span id="span_error_nuevo_FicheropdfA"><a id="error_nuevo_FicheropdfA"></a></span>
        </div>
      </form>
    `;
  }

  mostrarcambioatributo(attribute, value) {
    if (attribute === "FicheropdfA" && value) {
      const href = this.buildFileUrl("FicheropdfA", value);
      return `<a id="link_FicheropdfA_table" href="${href}" target="_blank"><img src="./iconos/FILE.png" class="icon_file"></a>`;
    }
    return value;
  }

  createForm_ADD() {
    this.setupForm("ADD", "text_form_articulo_ADD");

    this.toggleFileWidgets("ADD");
    this.configureCodigoAField("ADD");
    document.getElementById("EstadoA").value = "Publicado";

    setLang();
  }

  createForm_SEARCH() {
    this.setupForm("SEARCH", "text_form_articulo_SEARCH");

    this.toggleFileWidgets("SEARCH");
    this.configureCodigoAField("SEARCH");
    this.clearRequiredState(["CodigoA", "AutoresA", "TituloA", "TituloR", "ISSN", "VolumenR", "PagIniA", "PagFinA", "FechaPublicacionR"]);
    document.getElementById("EstadoA").value = "";
    setLang();
  }

  createForm_EDIT(fila) {
    this.setupForm("EDIT", "text_form_articulo_EDIT");

    const row = this.prepareRowForForm(fila);
    this.dom.rellenarvaloresform(row);
    this.syncHiddenFecha();

    this.configureCodigoAField("EDIT");
    this.dom.assign_property_value("CodigoA", "readonly", true);
    this.dom.assign_property_value("FicheropdfA", "readonly", true);
    this.updateFileLink("FicheropdfA", row.FicheropdfA);
    this.toggleFileWidgets("EDIT");

    setLang();
  }

  createForm_DELETE(fila) {
    this.setupForm("DELETE", "text_form_articulo_DELETE");

    const row = this.prepareRowForForm(fila);
    this.dom.rellenarvaloresform(row);
    this.syncHiddenFecha();
    this.configureCodigoAField("DELETE");
    this.updateFileLink("FicheropdfA", row.FicheropdfA);
    this.toggleFileWidgets("DELETE");
    this.dom.colocartodosreadonly("form_iu");

    setLang();
  }

  createForm_SHOWCURRENT(fila) {
    this.setupForm("SHOWCURRENT", "text_form_articulo_SHOWCURRENT");

    const row = this.prepareRowForForm(fila);
    this.dom.rellenarvaloresform(row);
    this.syncHiddenFecha();
    this.configureCodigoAField("SHOWCURRENT");
    this.updateFileLink("FicheropdfA", row.FicheropdfA);
    this.toggleFileWidgets("SHOWCURRENT");
    this.dom.colocartodosreadonly("form_iu");

    setLang();
  }

  configureCodigoAField(action) {
    const block = document.getElementById("block_CodigoA");
    const input = document.getElementById("CodigoA");
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
      this.dom.assign_property_value("CodigoA", "readonly", true);
    } else if (action === "SEARCH") {
      this.dom.assign_property_value("CodigoA", "readonly", false);
    }
  }

  ADD_submit_articulo() {
    const checks = [
      this.ADD_AutoresA_validation(),
      this.ADD_TituloA_validation(),
      this.ADD_TituloR_validation(),
      this.ADD_ISSN_validation(),
      this.ADD_VolumenR_validation(),
      this.ADD_PagIniA_validation(),
      this.ADD_PagFinA_validation(),
      this.ADD_FechaPublicacionR_validation(),
      this.ADD_EstadoA_validation(),
      this.ADD_nuevo_FicheropdfA_validation(),
    ];

    if (checks.every((result) => result === true)) {
      this.prepareFechaBeforeSubmit();
      this.ADD();
    }

    return false;
  }

  EDIT_submit_articulo() {
    const checks = [
      this.EDIT_AutoresA_validation(),
      this.EDIT_TituloA_validation(),
      this.EDIT_TituloR_validation(),
      this.EDIT_ISSN_validation(),
      this.EDIT_VolumenR_validation(),
      this.EDIT_PagIniA_validation(),
      this.EDIT_PagFinA_validation(),
      this.EDIT_FechaPublicacionR_validation(),
      this.EDIT_EstadoA_validation(),
      this.EDIT_nuevo_FicheropdfA_validation(),
    ];

    if (checks.every((result) => result === true)) {
      this.prepareFechaBeforeSubmit();
      this.EDIT();
    }

    return false;
  }

  DELETE_submit_articulo() {
    const checks = [
      this.DELETE_AutoresA_validation(),
      this.DELETE_TituloA_validation(),
      this.DELETE_TituloR_validation(),
      this.DELETE_ISSN_validation(),
      this.DELETE_VolumenR_validation(),
      this.DELETE_PagIniA_validation(),
      this.DELETE_PagFinA_validation(),
      this.DELETE_FechaPublicacionR_validation(),
      this.DELETE_EstadoA_validation(),
    ];

    if (checks.every((result) => result === true)) {
      this.prepareFechaBeforeSubmit();
      this.DELETE();
    }

    return false;
  }

  SEARCH_submit_articulo() {
    const checks = [
      this.SEARCH_CodigoA_validation(),
      this.SEARCH_AutoresA_validation(),
      this.SEARCH_TituloA_validation(),
      this.SEARCH_TituloR_validation(),
      this.SEARCH_ISSN_validation(),
      this.SEARCH_VolumenR_validation(),
      this.SEARCH_PagIniA_validation(),
      this.SEARCH_PagFinA_validation(),
      this.SEARCH_FechaPublicacionR_validation(),
      this.SEARCH_EstadoA_validation(),
    ];

    if (checks.every((result) => result === true)) {
      this.prepareFechaBeforeSubmit();
      this.SEARCH();
    }

    return false;
  }

  SHOWCURRENT_submit_articulo() {
    return false;
  }


  validateRequired(action, id, errorCode) {
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


  ADD_CodigoA_validation() {
    if (!this.validateRequired("ADD", "CodigoA", "CODIGOA_REQUIRED")) {
      return false;
    }
    if (!this.validateMinSize("CodigoA", 1, "CODIGOA_MIN_SIZE_KO")) {
      return false;
    }
    if (!this.validateMaxSize("CodigoA", 11, "CODIGOA_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("CodigoA", "^[0-9]{1,11}$", "CODIGOA_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("CodigoA");
  }

  EDIT_CodigoA_validation() {
    return this.ADD_CodigoA_validation();
  }

  DELETE_CodigoA_validation() {
    return this.finalizeSuccess("CodigoA");
  }

  SEARCH_CodigoA_validation() {
    const value = document.getElementById("CodigoA").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("CodigoA");
      return true;
    }
    if (!this.validateMinSize("CodigoA", 1, "CODIGOA_MIN_SIZE_KO")) {
      return false;
    }
    if (!this.validateMaxSize("CodigoA", 11, "CODIGOA_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("CodigoA", "^[0-9]{1,11}$", "CODIGOA_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("CodigoA");
  }

  ADD_AutoresA_validation() {
    if (!this.validateRequired("ADD", "AutoresA", "AUTORESA_REQUIRED")) {
      return false;
    }
    if (!this.validateMinSize("AutoresA", 1, "AUTORESA_MIN_SIZE_KO")) {
      return false;
    }
    if (!this.validateMaxSize("AutoresA", 200, "AUTORESA_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("AutoresA", "^[A-Za-zÁÉÍÓÚÜÑñ ,.;:-]{1,200}$", "AUTORESA_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("AutoresA");
  }

  EDIT_AutoresA_validation() {
    return this.ADD_AutoresA_validation();
  }

  DELETE_AutoresA_validation() {
    return this.finalizeSuccess("AutoresA");
  }

  SEARCH_AutoresA_validation() {
    const value = document.getElementById("AutoresA").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("AutoresA");
      return true;
    }
    if (!this.validateMaxSize("AutoresA", 200, "AUTORESA_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("AutoresA", "^[A-Za-zÁÉÍÓÚÜÑñ ,.;:-]{0,200}$", "AUTORESA_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("AutoresA");
  }

  ADD_TituloA_validation() {
    if (!this.validateRequired("ADD", "TituloA", "TITULOA_REQUIRED")) {
      return false;
    }
    if (!this.validateMinSize("TituloA", 1, "TITULOA_MIN_SIZE_KO")) {
      return false;
    }
    if (!this.validateMaxSize("TituloA", 100, "TITULOA_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("TituloA", "^[A-Za-zÁÉÍÓÚÜÑñ0-9 ,.;:()\\-]{1,100}$", "TITULOA_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("TituloA");
  }

  EDIT_TituloA_validation() {
    return this.ADD_TituloA_validation();
  }

  DELETE_TituloA_validation() {
    return this.finalizeSuccess("TituloA");
  }

  SEARCH_TituloA_validation() {
    const value = document.getElementById("TituloA").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("TituloA");
      return true;
    }
    if (!this.validateMaxSize("TituloA", 100, "TITULOA_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("TituloA", "^[A-Za-zÁÉÍÓÚÜÑñ0-9 ,.;:()\\-]{0,100}$", "TITULOA_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("TituloA");
  }

  ADD_TituloR_validation() {
    if (!this.validateRequired("ADD", "TituloR", "TITULOR_REQUIRED")) {
      return false;
    }
    if (!this.validateMinSize("TituloR", 1, "TITULOR_MIN_SIZE_KO")) {
      return false;
    }
    if (!this.validateMaxSize("TituloR", 100, "TITULOR_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("TituloR", "^[A-Za-zÁÉÍÓÚÜÑñ0-9 ,.;:()\\-]{1,100}$", "TITULOR_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("TituloR");
  }

  EDIT_TituloR_validation() {
    return this.ADD_TituloR_validation();
  }

  DELETE_TituloR_validation() {
    return this.finalizeSuccess("TituloR");
  }

  SEARCH_TituloR_validation() {
    const value = document.getElementById("TituloR").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("TituloR");
      return true;
    }
    if (!this.validateMaxSize("TituloR", 100, "TITULOR_MAX_SIZE_KO")) {
      return false;
    }
    if (!this.validateFormat("TituloR", "^[A-Za-zÁÉÍÓÚÜÑñ0-9 ,.;:()\\-]{0,100}$", "TITULOR_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("TituloR");
  }

  ADD_ISSN_validation() {
    if (!this.validateRequired("ADD", "ISSN", "ISSN_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("ISSN", "^\\d{4}-?\\d{3}[\\dxX]{1}$", "ISSN_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("ISSN");
  }

  EDIT_ISSN_validation() {
    return this.ADD_ISSN_validation();
  }

  DELETE_ISSN_validation() {
    return this.finalizeSuccess("ISSN");
  }

  SEARCH_ISSN_validation() {
    const value = document.getElementById("ISSN").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("ISSN");
      return true;
    }
    if (!this.validateFormat("ISSN", "^\\d{4}-?\\d{0,3}[\\dxX]{0,1}$", "ISSN_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("ISSN");
  }

  ADD_VolumenR_validation() {
    if (!this.validateRequired("ADD", "VolumenR", "VOLUMENR_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("VolumenR", "^[0-9]{1,4}$", "VOLUMENR_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("VolumenR");
  }

  EDIT_VolumenR_validation() {
    return this.ADD_VolumenR_validation();
  }

  DELETE_VolumenR_validation() {
    return this.finalizeSuccess("VolumenR");
  }

  SEARCH_VolumenR_validation() {
    const value = document.getElementById("VolumenR").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("VolumenR");
      return true;
    }
    if (!this.validateFormat("VolumenR", "^[0-9]{0,4}$", "VOLUMENR_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("VolumenR");
  }

  ADD_PagIniA_validation() {
    if (!this.validateRequired("ADD", "PagIniA", "PAGINIA_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("PagIniA", "^[0-9]{1,4}$", "PAGINIA_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("PagIniA");
  }

  EDIT_PagIniA_validation() {
    return this.ADD_PagIniA_validation() && this.ensurePageRange();
  }

  DELETE_PagIniA_validation() {
    return this.finalizeSuccess("PagIniA");
  }

  SEARCH_PagIniA_validation() {
    const value = document.getElementById("PagIniA").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("PagIniA");
      return true;
    }
    if (!this.validateFormat("PagIniA", "^[0-9]{0,4}$", "PAGINIA_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("PagIniA");
  }

  ADD_PagFinA_validation() {
    if (!this.validateRequired("ADD", "PagFinA", "PAGFINA_REQUIRED")) {
      return false;
    }
    if (!this.validateFormat("PagFinA", "^[0-9]{1,4}$", "PAGFINA_FORMAT_KO")) {
      return false;
    }
    if (!this.ensurePageRange()) {
      return false;
    }
    return this.finalizeSuccess("PagFinA");
  }

  EDIT_PagFinA_validation() {
    return this.ADD_PagFinA_validation();
  }

  DELETE_PagFinA_validation() {
    return this.finalizeSuccess("PagFinA");
  }

  SEARCH_PagFinA_validation() {
    const value = document.getElementById("PagFinA").value.trim();
    if (value.length === 0) {
      this.dom.mostrar_exito_campo("PagFinA");
      return true;
    }
    if (!this.validateFormat("PagFinA", "^[0-9]{0,4}$", "PAGFINA_FORMAT_KO")) {
      return false;
    }
    return this.finalizeSuccess("PagFinA");
  }

  ensurePageRange() {
    const inicio = parseInt(document.getElementById("PagIniA").value, 10);
    const fin = parseInt(document.getElementById("PagFinA").value, 10);
    if (!Number.isNaN(inicio) && !Number.isNaN(fin) && inicio > fin) {
      this.dom.mostrar_error_campo("PagFinA", "PAGFINA_RANGE_KO");
      return false;
    }
    return true;
  }

  ADD_FechaPublicacionR_validation() {
    return this.validateFechaPublicacionR(true);
  }

  EDIT_FechaPublicacionR_validation() {
    return this.validateFechaPublicacionR(true);
  }

  DELETE_FechaPublicacionR_validation() {
    return this.finalizeSuccess("FechaPublicacionR");
  }

  SEARCH_FechaPublicacionR_validation() {
    return this.validateFechaPublicacionR(false);
  }

  ADD_EstadoA_validation() {
    if (!this.validateRequired("ADD", "EstadoA", "ESTADOA_REQUIRED")) {
      return false;
    }
    const value = document.getElementById("EstadoA").value;
    if (!["Enviado", "Revision", "Publicado"].includes(value)) {
      this.dom.mostrar_error_campo("EstadoA", "ESTADOA_ENUM_KO");
      return false;
    }
    return this.finalizeSuccess("EstadoA");
  }

  EDIT_EstadoA_validation() {
    return this.ADD_EstadoA_validation();
  }

  DELETE_EstadoA_validation() {
    return this.finalizeSuccess("EstadoA");
  }

  SEARCH_EstadoA_validation() {
    const value = document.getElementById("EstadoA").value;
    if (value === "") {
      this.dom.mostrar_exito_campo("EstadoA");
      return true;
    }
    if (!["Enviado", "Revision", "Publicado"].includes(value)) {
      this.dom.mostrar_error_campo("EstadoA", "ESTADOA_ENUM_KO");
      return false;
    }
    return this.finalizeSuccess("EstadoA");
  }

  ADD_nuevo_FicheropdfA_validation() {
    const input = document.getElementById("nuevo_FicheropdfA");
    if (input.files.length === 0) {
      this.dom.mostrar_error_campo("nuevo_FicheropdfA", "FICHEROPDFA_FILE_REQUIRED");
      return false;
    }
    if (!this.validations.max_size_file("nuevo_FicheropdfA", this.fileMaxBytes)) {
      this.dom.mostrar_error_campo("nuevo_FicheropdfA", "FICHEROPDFA_MAX_SIZE_KO");
      return false;
    }
    if (!this.validations.type_file("nuevo_FicheropdfA", ["application/pdf"])) {
      this.dom.mostrar_error_campo("nuevo_FicheropdfA", "FICHEROPDFA_TYPE_KO");
      return false;
    }
    if (!this.validations.format_name_file("nuevo_FicheropdfA", "^[A-Za-z0-9_.-]+\\.pdf$")) {
      this.dom.mostrar_error_campo("nuevo_FicheropdfA", "FICHEROPDFA_NAME_KO");
      return false;
    }
    return this.finalizeSuccess("nuevo_FicheropdfA");
  }

  EDIT_nuevo_FicheropdfA_validation() {
    const input = document.getElementById("nuevo_FicheropdfA");
    if (input.files.length === 0) {
      this.dom.mostrar_exito_campo("nuevo_FicheropdfA");
      return true;
    }
    if (!this.validations.max_size_file("nuevo_FicheropdfA", this.fileMaxBytes)) {
      this.dom.mostrar_error_campo("nuevo_FicheropdfA", "FICHEROPDFA_MAX_SIZE_KO");
      return false;
    }
    if (!this.validations.type_file("nuevo_FicheropdfA", ["application/pdf"])) {
      this.dom.mostrar_error_campo("nuevo_FicheropdfA", "FICHEROPDFA_TYPE_KO");
      return false;
    }
    if (!this.validations.format_name_file("nuevo_FicheropdfA", "^[A-Za-z0-9_.-]+\\.pdf$")) {
      this.dom.mostrar_error_campo("nuevo_FicheropdfA", "FICHEROPDFA_NAME_KO");
      return false;
    }
    return this.finalizeSuccess("nuevo_FicheropdfA");
  }

  DELETE_nuevo_FicheropdfA_validation() {
    this.dom.mostrar_exito_campo("nuevo_FicheropdfA");
    return true;
  }

  SEARCH_nuevo_FicheropdfA_validation() {
    this.dom.mostrar_exito_campo("nuevo_FicheropdfA");
    return true;
  }

  SHOWCURRENT_nuevo_FicheropdfA_validation() {
    this.dom.mostrar_exito_campo("nuevo_FicheropdfA");
    return true;
  }


  setupForm(action, titleKey) {
    document.getElementById("contenedor_IU_form").innerHTML = this.manual_form_creation();
    this.dom.show_element("Div_IU_form", "block");
    this.setupFechaField();

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
    const label = document.getElementById("label_FicheropdfA");
    const text = document.getElementById("FicheropdfA");
    const span = document.getElementById("span_error_FicheropdfA");
    const link = document.getElementById("link_FicheropdfA");
    const newLabel = document.getElementById("label_nuevo_FicheropdfA");
    const newInput = document.getElementById("nuevo_FicheropdfA");
    const newSpan = document.getElementById("span_error_nuevo_FicheropdfA");

    switch (action) {
      case "ADD":
        this.dom.hide_element("label_FicheropdfA");
        this.dom.hide_element("FicheropdfA");
        this.dom.hide_element("span_error_FicheropdfA");
        this.dom.hide_element("link_FicheropdfA");
        this.showElement(newLabel);
        this.showElement(newInput);
        this.showElement(newSpan);
        break;
      case "EDIT":
        this.showElement(label);
        this.showElement(text);
        this.showElement(span);
        this.showElement(link);
        this.showElement(newLabel);
        this.showElement(newInput);
        this.showElement(newSpan);
        break;
      case "DELETE":
      case "SHOWCURRENT":
        this.showElement(label);
        this.showElement(text);
        this.showElement(span);
        this.showElement(link);
        this.dom.hide_element("label_nuevo_FicheropdfA");
        this.dom.hide_element("nuevo_FicheropdfA");
        this.dom.hide_element("span_error_nuevo_FicheropdfA");
        break;
      case "SEARCH":
        this.dom.hide_element("label_FicheropdfA");
        this.dom.hide_element("FicheropdfA");
        this.dom.hide_element("span_error_FicheropdfA");
        this.dom.hide_element("link_FicheropdfA");
        this.dom.hide_element("label_nuevo_FicheropdfA");
        this.dom.hide_element("nuevo_FicheropdfA");
        this.dom.hide_element("span_error_nuevo_FicheropdfA");
        break;
      default:
        break;
    }
  }

  showElement(element) {
    if (element) {
      element.style.display = "";
    }
  }

  prepareRowForForm(row) {

      const prepared = {};

      Object.keys(row).forEach((key) => {

          if (key === "EDIT" || key === "DELETE" || key === "SHOWCURRENT") return;

          const lower = key.toLowerCase();

          const map = {
            codigoa: "CodigoA",
            autoresa: "AutoresA",
            tituloa: "TituloA",
            titulor: "TituloR",
            issn: "ISSN",
            volumenr: "VolumenR",
            paginia: "PagIniA",
            pagfina: "PagFinA",
            fechapublicacionr: "FechaPublicacionR",
            ficheropdfa: "FicheropdfA",
            estadoa: "EstadoA"
          };


          const formId = map[lower];
          if (formId) {
              prepared[formId] = row[key];
          }
      });

      if (prepared.FicheroPdfA !== undefined) {
          prepared.FicheroPdfA = this.restoreFileName(prepared.FicheroPdfA, "FicheropdfA");
      }

      if (prepared.FechaPublicacionR !== undefined) {
          prepared.FechaPublicacionR = this.restoreDate(prepared.FechaPublicacionR);
      }

      return prepared;
  }

  restoreDate(value) {
    return this.normalizeFechaParaInput(value);
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

  clearRequiredState(ids) {
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.removeAttribute("required");
      }
    });
  }

  fileFolderSegment(attribute) {
    if (!attribute || attribute.length === 0) {
      return "";
    }
    return attribute.charAt(0).toLowerCase() + attribute.slice(1);
  }

  normalizeFechaParaInput(raw = "") {
    const trimmed = (raw ?? "").trim();
    if (!trimmed) {
      return "";
    }

    const isoMatch = trimmed.match(/^(\d{4}-\d{2}-\d{2})/);
    if (isoMatch) {
      return isoMatch[1];
    }

    const match = trimmed.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
    if (match) {
      const [, day, month, year] = match;
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }

    return trimmed;
  }

  validateFechaPublicacionR(required) {
    const id = "FechaPublicacionR";
    const input = document.getElementById(id);
    if (!input) {
      return true;
    }

    const normalized = this.normalizeFechaParaInput(input.value);
    input.value = normalized;

    if (!normalized) {
      if (!required) {
        this.dom.mostrar_exito_campo(id);
        this.syncHiddenFecha();
        return true;
      }
      this.dom.mostrar_error_campo(id, "FECHAPUBLICACIONR_REQUIRED");
      return false;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(normalized)) {
      this.dom.mostrar_error_campo(id, "FECHAPUBLICACIONR_FORMAT_KO");
      return false;
    }

    const fecha = new Date(normalized);
    if (Number.isNaN(fecha.getTime())) {
      this.dom.mostrar_error_campo(id, "FECHAPUBLICACIONR_FORMAT_KO");
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    fecha.setHours(0, 0, 0, 0);
    if (fecha > today) {
      this.dom.mostrar_error_campo(id, "FECHAPUBLICACIONR_FUTURE_KO");
      return false;
    }

    this.dom.mostrar_exito_campo(id);
    this.syncHiddenFecha();
    return true;
  }

  syncHiddenFecha() {
    const visible = document.getElementById("FechaPublicacionR");
    const hidden = document.getElementById("FechaPublicacionR_hidden");
    if (!visible || !hidden) {
      return;
    }

    const iso = this.normalizeFechaParaInput(visible.value);
    visible.value = iso;
    hidden.value = this.isoToDdMm(iso);
  }

  setupFechaField() {
    const visible = document.getElementById("FechaPublicacionR");
    if (!visible) {
      return;
    }

    visible.addEventListener("change", () => this.syncHiddenFecha());
    this.syncHiddenFecha();
  }

  isoToDdMm(value = "") {
    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) {
      return "";
    }
    return `${match[3]}/${match[2]}/${match[1]}`;
  }

  prepareFechaBeforeSubmit() {
    this.syncHiddenFecha();
  }
}
