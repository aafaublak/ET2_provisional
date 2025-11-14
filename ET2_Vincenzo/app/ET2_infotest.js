
var alumnograduacion_def_tests = [
  ['alumnograduacion', 'login', 'input', 1, 'Login obligatorio en ADD', 'ADD', 'LOGIN_EMPTY_KO', 'El login es obligatorio'],
  ['alumnograduacion', 'login', 'input', 2, 'Login con menos de 4 caracteres', 'ADD', 'LOGIN_MIN_SIZE_KO', 'El login debe tener al menos 4 caracteres'],
  ['alumnograduacion', 'login', 'input', 3, 'Login superior a 15 caracteres', 'ADD', 'LOGIN_MAX_SIZE_KO', 'El login no puede superar los 15 caracteres'],
  ['alumnograduacion', 'login', 'input', 4, 'Login con caracteres no permitidos', 'ADD', 'LOGIN_FORMAT_KO', 'El login contiene caracteres no válidos'],
  ['alumnograduacion', 'login', 'input', 5, 'Login válido en EDIT', 'EDIT', true, 'Login válido'],
  ['alumnograduacion', 'password', 'input', 6, 'Password obligatoria en ADD', 'ADD', 'PASSWORD_EMPTY_KO', 'La contraseña es obligatoria'],
  ['alumnograduacion', 'password', 'input', 7, 'Password demasiado corta', 'ADD', 'PASSWORD_MIN_SIZE_KO', 'La contraseña debe tener 8 caracteres como mínimo'],
  ['alumnograduacion', 'password', 'input', 8, 'Password demasiado larga', 'ADD', 'PASSWORD_MAX_SIZE_KO', 'La contraseña supera la longitud permitida'],
  ['alumnograduacion', 'password', 'input', 9, 'Password con caracteres no permitidos', 'ADD', 'PASSWORD_FORMAT_KO', 'La contraseña contiene caracteres no permitidos'],
  ['alumnograduacion', 'password', 'input', 10, 'Password válida en EDIT', 'EDIT', true, 'Contraseña válida'],
  ['alumnograduacion', 'nombre', 'input', 11, 'Nombre obligatorio en ADD', 'ADD', 'NOMBRE_EMPTY_KO', 'El nombre es obligatorio'],
  ['alumnograduacion', 'nombre', 'input', 12, 'Nombre con menos de 2 caracteres', 'ADD', 'NOMBRE_MIN_SIZE_KO', 'El nombre debe tener al menos 2 caracteres'],
  ['alumnograduacion', 'nombre', 'input', 13, 'Nombre demasiado largo', 'ADD', 'NOMBRE_MAX_SIZE_KO', 'El nombre supera la longitud permitida'],
  ['alumnograduacion', 'nombre', 'input', 14, 'Nombre con caracteres no válidos', 'ADD', 'NOMBRE_FORMAT_KO', 'El nombre contiene caracteres no válidos'],
  ['alumnograduacion', 'nombre', 'input', 15, 'Nombre válido en ADD', 'ADD', true, 'Nombre válido'],
  ['alumnograduacion', 'apellidos', 'input', 16, 'Apellidos obligatorios en ADD', 'ADD', 'APELLIDOS_EMPTY_KO', 'Los apellidos son obligatorios'],
  ['alumnograduacion', 'apellidos', 'input', 17, 'Apellidos demasiado cortos', 'ADD', 'APELLIDOS_MIN_SIZE_KO', 'Los apellidos deben tener al menos 2 caracteres'],
  ['alumnograduacion', 'apellidos', 'input', 18, 'Apellidos demasiado largos', 'ADD', 'APELLIDOS_MAX_SIZE_KO', 'Los apellidos superan la longitud permitida'],
  ['alumnograduacion', 'apellidos', 'input', 19, 'Apellidos con caracteres no válidos', 'ADD', 'APELLIDOS_FORMAT_KO', 'Los apellidos contienen caracteres no permitidos'],
  ['alumnograduacion', 'apellidos', 'input', 20, 'Apellidos válidos en EDIT', 'EDIT', true, 'Apellidos válidos'],
  ['alumnograduacion', 'titulacion', 'select', 21, 'Titulación obligatoria en ADD', 'ADD', 'TITULACION_EMPTY_KO', 'Debe seleccionar una titulación'],
  ['alumnograduacion', 'titulacion', 'select', 22, 'Titulación no incluida en el catálogo', 'ADD', 'TITULACION_NOT_VALID_KO', 'La titulación indicada no es válida'],
  ['alumnograduacion', 'titulacion', 'select', 23, 'Titulación válida en EDIT', 'EDIT', true, 'Titulación válida'],
  ['alumnograduacion', 'dni', 'input', 24, 'DNI obligatorio en ADD', 'ADD', 'DNI_EMPTY_KO', 'El DNI/NIE es obligatorio'],
  ['alumnograduacion', 'dni', 'input', 25, 'DNI con formato inválido', 'ADD', 'DNI_FORMAT_KO', 'El formato del DNI/NIE no es correcto'],
  ['alumnograduacion', 'dni', 'input', 26, 'DNI con letra incorrecta', 'ADD', 'DNI_LETTER_KO', 'La letra del DNI no es válida'],
  ['alumnograduacion', 'dni', 'input', 27, 'DNI válido en EDIT', 'EDIT', true, 'DNI válido'],
  ['alumnograduacion', 'telefono', 'input', 28, 'Teléfono obligatorio en ADD', 'ADD', 'TELEFONO_EMPTY_KO', 'El teléfono es obligatorio'],
  ['alumnograduacion', 'telefono', 'input', 29, 'Teléfono con caracteres no numéricos', 'ADD', 'TELEFONO_FORMAT_KO', 'El teléfono solo puede contener dígitos'],
  ['alumnograduacion', 'telefono', 'input', 30, 'Teléfono con longitud distinta de 9', 'ADD', 'TELEFONO_FORMAT_KO', 'El teléfono debe tener 9 dígitos'],
  ['alumnograduacion', 'telefono', 'input', 31, 'Teléfono válido en EDIT', 'EDIT', true, 'Teléfono válido'],
  ['alumnograduacion', 'direccion', 'textarea', 32, 'Dirección obligatoria en ADD', 'ADD', 'DIRECCION_EMPTY_KO', 'La dirección es obligatoria'],
  ['alumnograduacion', 'direccion', 'textarea', 33, 'Dirección con caracteres no permitidos', 'ADD', 'DIRECCION_FORMAT_KO', 'La dirección contiene caracteres no válidos'],
  ['alumnograduacion', 'direccion', 'textarea', 34, 'Dirección válida en EDIT', 'EDIT', true, 'Dirección válida'],
  ['alumnograduacion', 'email', 'input', 35, 'Email obligatorio en ADD', 'ADD', 'EMAIL_EMPTY_KO', 'El correo electrónico es obligatorio'],
  ['alumnograduacion', 'email', 'input', 36, 'Email con formato incorrecto', 'ADD', 'EMAIL_FORMAT_KO', 'El formato del correo electrónico no es válido'],
  ['alumnograduacion', 'email', 'input', 37, 'Email válido en EDIT', 'EDIT', true, 'Email válido'],
  ['alumnograduacion', 'login', 'input', 38, 'Login vacío permitido en SEARCH', 'SEARCH', true, 'Login vacío permitido en búsqueda'],
  ['alumnograduacion', 'nuevo_fotoacto', 'inputfile', 39, 'Foto acto obligatoria en ADD', 'ADD', 'FOTOACTO_FILE_EMPTY_KO', 'Debe adjuntarse la foto del acto'],
  ['alumnograduacion', 'nuevo_fotoacto', 'inputfile', 40, 'Foto acto supera el tamaño máximo', 'ADD', 'FOTOACTO_FILE_SIZE_KO', 'La foto supera el tamaño admitido'],
  ['alumnograduacion', 'nuevo_fotoacto', 'inputfile', 41, 'Foto acto con tipo inválido', 'ADD', 'FOTOACTO_EXTENSION_KO', 'El tipo de fichero no es válido'],
  ['alumnograduacion', 'nuevo_fotoacto', 'inputfile', 42, 'Foto acto con nombre inválido', 'ADD', 'FOTOACTO_FORMAT_KO', 'El nombre del fichero no es válido'],
  ['alumnograduacion', 'nuevo_fotoacto', 'inputfile', 43, 'Foto acto válida', 'ADD', true, 'Foto válida']
];

var alumnograduacion_tests_fields = [
  ['alumnograduacion', 'login', 1, 1, 'ADD', [{ login: '' }], 'LOGIN_EMPTY_KO'],
  ['alumnograduacion', 'login', 2, 2, 'ADD', [{ login: 'abc' }], 'LOGIN_MIN_SIZE_KO'],
  ['alumnograduacion', 'login', 3, 3, 'ADD', [{ login: 'UsuarioSumamenteLargo2025' }], 'LOGIN_MAX_SIZE_KO'],
  ['alumnograduacion', 'login', 4, 4, 'ADD', [{ login: 'user@2024' }], 'LOGIN_FORMAT_KO'],
  ['alumnograduacion', 'login', 5, 5, 'EDIT', [{ login: 'UsuarioValido25' }], true],
  ['alumnograduacion', 'password', 6, 6, 'ADD', [{ password: '' }], 'PASSWORD_EMPTY_KO'],
  ['alumnograduacion', 'password', 7, 7, 'ADD', [{ password: 'Clave12' }], 'PASSWORD_MIN_SIZE_KO'],
  ['alumnograduacion', 'password', 8, 8, 'ADD', [{ password: 'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP' }], 'PASSWORD_MAX_SIZE_KO'],
  ['alumnograduacion', 'password', 9, 9, 'ADD', [{ password: 'Clave#2024' }], 'PASSWORD_FORMAT_KO'],
  ['alumnograduacion', 'password', 10, 10, 'EDIT', [{ password: 'ClaveSegura2024' }], true],
  ['alumnograduacion', 'nombre', 11, 11, 'ADD', [{ nombre: '' }], 'NOMBRE_EMPTY_KO'],
  ['alumnograduacion', 'nombre', 12, 12, 'ADD', [{ nombre: 'A' }], 'NOMBRE_MIN_SIZE_KO'],
  ['alumnograduacion', 'nombre', 13, 13, 'ADD', [{ nombre: 'NombreExtremadamenteLargoParaUnaPersonaRealQueSuperaElLimite' }], 'NOMBRE_MAX_SIZE_KO'],
  ['alumnograduacion', 'nombre', 14, 14, 'ADD', [{ nombre: 'Juan2' }], 'NOMBRE_FORMAT_KO'],
  ['alumnograduacion', 'nombre', 15, 15, 'ADD', [{ nombre: 'Juan' }], true],
  ['alumnograduacion', 'apellidos', 16, 16, 'ADD', [{ apellidos: '' }], 'APELLIDOS_EMPTY_KO'],
  ['alumnograduacion', 'apellidos', 17, 17, 'ADD', [{ apellidos: 'L' }], 'APELLIDOS_MIN_SIZE_KO'],
  ['alumnograduacion', 'apellidos', 18, 18, 'ADD', [{ apellidos: 'ApellidoExtremadamenteLargoQueSuperaElLimiteDefinidoParaLaAplicacion' }], 'APELLIDOS_MAX_SIZE_KO'],
  ['alumnograduacion', 'apellidos', 19, 19, 'ADD', [{ apellidos: 'García3' }], 'APELLIDOS_FORMAT_KO'],
  ['alumnograduacion', 'apellidos', 20, 20, 'EDIT', [{ apellidos: 'Fernández López' }], true],
  ['alumnograduacion', 'titulacion', 21, 21, 'ADD', [{ titulacion: '' }], 'TITULACION_EMPTY_KO'],
  ['alumnograduacion', 'titulacion', 22, 22, 'ADD', [{ titulacion: 'MBA' }], 'TITULACION_NOT_VALID_KO'],
  ['alumnograduacion', 'titulacion', 23, 23, 'EDIT', [{ titulacion: 'MEI' }], true],
  ['alumnograduacion', 'dni', 24, 24, 'ADD', [{ dni: '' }], 'DNI_EMPTY_KO'],
  ['alumnograduacion', 'dni', 25, 25, 'ADD', [{ dni: '1234A' }], 'DNI_FORMAT_KO'],
  ['alumnograduacion', 'dni', 26, 26, 'ADD', [{ dni: '12345678A' }], 'DNI_LETTER_KO'],
  ['alumnograduacion', 'dni', 27, 27, 'EDIT', [{ dni: '12345678Z' }], true],
  ['alumnograduacion', 'telefono', 28, 28, 'ADD', [{ telefono: '' }], 'TELEFONO_EMPTY_KO'],
  ['alumnograduacion', 'telefono', 29, 29, 'ADD', [{ telefono: '61234A678' }], 'TELEFONO_FORMAT_KO'],
  ['alumnograduacion', 'telefono', 30, 30, 'ADD', [{ telefono: '61234567' }], 'TELEFONO_FORMAT_KO'],
  ['alumnograduacion', 'telefono', 31, 31, 'EDIT', [{ telefono: '698745632' }], true],
  ['alumnograduacion', 'direccion', 32, 32, 'ADD', [{ direccion: '' }], 'DIRECCION_EMPTY_KO'],
  ['alumnograduacion', 'direccion', 33, 33, 'ADD', [{ direccion: 'Calle Principal #45' }], 'DIRECCION_FORMAT_KO'],
  ['alumnograduacion', 'direccion', 34, 34, 'EDIT', [{ direccion: 'Rúa Nova 23, 4ºA' }], true],
  ['alumnograduacion', 'email', 35, 35, 'ADD', [{ email: '' }], 'EMAIL_EMPTY_KO'],
  ['alumnograduacion', 'email', 36, 36, 'ADD', [{ email: 'usuario@@dominio.com' }], 'EMAIL_FORMAT_KO'],
  ['alumnograduacion', 'email', 37, 37, 'EDIT', [{ email: 'alumno@udc.es' }], true],
  ['alumnograduacion', 'login', 38, 38, 'SEARCH', [{ login: '' }], true]
];

var alumnograduacion_tests_files = [
  ['alumnograduacion', 'nuevo_fotoacto', 39, 1, 'ADD', 'not_exist_file', [], 'FOTOACTO_FILE_EMPTY_KO'],
  ['alumnograduacion', 'nuevo_fotoacto', 40, 2, 'ADD', 'max_size_file', [
    { format_name_file: 'acto.jpg' },
    { type_file: 'image/jpeg' },
    { max_size_file: 2500000 }
  ], 'FOTOACTO_FILE_SIZE_KO'],
  ['alumnograduacion', 'nuevo_fotoacto', 41, 3, 'ADD', 'type_file', [
    { format_name_file: 'acto_graduacion.jpg' },
    { type_file: 'image/gif' },
    { max_size_file: 150000 }
  ], 'FOTOACTO_EXTENSION_KO'],
  ['alumnograduacion', 'nuevo_fotoacto', 42, 4, 'ADD', 'format_name_file', [
    { format_name_file: 'acto 2024.jpg' },
    { type_file: 'image/jpeg' },
    { max_size_file: 180000 }
  ], 'FOTOACTO_FORMAT_KO'],
  ['alumnograduacion', 'nuevo_fotoacto', 43, 5, 'ADD', 'format_name_file', [
    { format_name_file: 'actoGraduacion2024.png' },
    { type_file: 'image/png' },
    { max_size_file: 320000 }
  ], true]
];

var articulo_def_tests = [
  ['articulo', 'autores', 'textarea', 1, 'Autores obligatorios en ADD', 'ADD', 'AUTORES_EMPTY_KO', 'El campo autores es obligatorio'],
  ['articulo', 'autores', 'textarea', 2, 'Autores demasiado cortos', 'ADD', 'AUTORES_MIN_SIZE_KO', 'Los autores deben tener al menos 3 caracteres'],
  ['articulo', 'autores', 'textarea', 3, 'Autores demasiado extensos', 'ADD', 'AUTORES_MAX_SIZE_KO', 'Los autores superan la longitud permitida'],
  ['articulo', 'autores', 'textarea', 4, 'Autores con caracteres no permitidos', 'ADD', 'AUTORES_FORMAT_KO', 'Los autores contienen caracteres no válidos'],
  ['articulo', 'autores', 'textarea', 5, 'Autores válidos en EDIT', 'EDIT', true, 'Autores válidos'],

  ['articulo', 'titulo_articulo', 'input', 6, 'Título de artículo obligatorio', 'ADD', 'TITULO_ARTICULO_EMPTY_KO'],
  ['articulo', 'titulo_articulo', 'input', 7, 'Título de artículo demasiado corto', 'ADD', 'TITULO_ARTICULO_MIN_SIZE_KO'],
  ['articulo', 'titulo_articulo', 'input', 8, 'Título de artículo demasiado largo', 'ADD', 'TITULO_ARTICULO_MAX_SIZE_KO'],
  ['articulo', 'titulo_articulo', 'input', 9, 'Título de artículo con caracteres no válidos', 'ADD', 'TITULO_ARTICULO_FORMAT_KO'],
  ['articulo', 'titulo_articulo', 'input', 10, 'Título de artículo válido', 'ADD', true],

  ['articulo', 'titulo_revista', 'input', 11, 'Título de revista obligatorio', 'ADD', 'TITULO_REVISTA_EMPTY_KO'],
  ['articulo', 'titulo_revista', 'input', 12, 'Título de revista demasiado corto', 'ADD', 'TITULO_REVISTA_MIN_SIZE_KO'],
  ['articulo', 'titulo_revista', 'input', 13, 'Título de revista demasiado largo', 'ADD', 'TITULO_REVISTA_MAX_SIZE_KO'],
  ['articulo', 'titulo_revista', 'input', 14, 'Título de revista con caracteres no válidos', 'ADD', 'TITULO_REVISTA_FORMAT_KO'],
  ['articulo', 'titulo_revista', 'input', 15, 'Título de revista válido en EDIT', 'EDIT', true],

  ['articulo', 'issn', 'input', 16, 'ISSN obligatorio', 'ADD', 'ISSN_EMPTY_KO'],
  ['articulo', 'issn', 'input', 17, 'ISSN con formato incorrecto', 'ADD', 'ISSN_FORMAT_KO'],
  ['articulo', 'issn', 'input', 18, 'ISSN válido', 'ADD', true],

  ['articulo', 'volumen', 'input', 19, 'Volumen obligatorio', 'ADD', 'VOLUMEN_EMPTY_KO'],
  ['articulo', 'volumen', 'input', 20, 'Volumen con formato incorrecto', 'ADD', 'VOLUMEN_FORMAT_KO'],
  ['articulo', 'volumen', 'input', 21, 'Volumen válido en EDIT', 'EDIT', true],

  ['articulo', 'pagina_inicio', 'input', 22, 'Página inicial obligatoria', 'ADD', 'PAGINA_INICIO_EMPTY_KO'],
  ['articulo', 'pagina_inicio', 'input', 23, 'Página inicial con formato incorrecto', 'ADD', 'PAGINA_INICIO_FORMAT_KO'],

  ['articulo', 'pagina_fin', 'input', 24, 'Página final obligatoria', 'ADD', 'PAGINA_FIN_EMPTY_KO'],
  ['articulo', 'pagina_fin', 'input', 25, 'Página final con formato incorrecto', 'ADD', 'PAGINA_FIN_FORMAT_KO'],
  ['articulo', 'pagina_fin', 'input', 26, 'Página final inferior a la inicial', 'ADD', 'PAGINA_FIN_RANGE_KO'],
  ['articulo', 'pagina_fin', 'input', 27, 'Rango de páginas válido', 'ADD', true],

  ['articulo', 'fecha_publicacion', 'input', 28, 'Fecha obligatoria', 'ADD', 'FECHA_PUBLICACION_EMPTY_KO'],
  ['articulo', 'fecha_publicacion', 'input', 29, 'Fecha con formato inválido (input date vacía)', 'ADD', 'FECHA_PUBLICACION_EMPTY_KO'],
  ['articulo', 'fecha_publicacion', 'input', 30, 'Fecha futura', 'ADD', 'FECHA_PUBLICACION_FUTURE_KO'],
  ['articulo', 'fecha_publicacion', 'input', 31, 'Fecha válida en EDIT', 'EDIT', true],

  ['articulo', 'estado', 'select', 32, 'Estado obligatorio', 'ADD', 'ESTADO_EMPTY_KO'],
  ['articulo', 'estado', 'select', 33, 'Estado no permitido', 'ADD', 'ESTADO_NOT_VALID_KO'],
  ['articulo', 'estado', 'select', 34, 'Estado válido en EDIT', 'EDIT', true],

  ['articulo', 'nuevo_ficheropdf', 'inputfile', 35, 'PDF obligatorio', 'ADD', 'FICHEROPDF_FILE_EMPTY_KO'],
  ['articulo', 'nuevo_ficheropdf', 'inputfile', 36, 'PDF excede tamaño', 'ADD', 'FICHEROPDF_FILE_SIZE_KO'],
  ['articulo', 'nuevo_ficheropdf', 'inputfile', 37, 'Extensión no permitida', 'ADD', 'FICHEROPDF_EXTENSION_KO'],
  ['articulo', 'nuevo_ficheropdf', 'inputfile', 38, 'Nombre inválido', 'ADD', 'FICHEROPDF_FORMAT_KO'],
  ['articulo', 'nuevo_ficheropdf', 'inputfile', 39, 'PDF válido', 'ADD', true],
  ['articulo', 'codigo', 'input', 40, 'Código vacío permitido en SEARCH', 'SEARCH', true, 'Código vacío permitido en búsqueda']
];


var articulo_tests_fields = [
  ['articulo', 'autores', 1, 1, 'ADD', [{ autores: '' }], 'AUTORES_EMPTY_KO'],
  ['articulo', 'autores', 2, 2, 'ADD', [{ autores: 'Au' }], 'AUTORES_MIN_SIZE_KO'],
  ['articulo', 'autores', 3, 3, 'ADD', [{ autores: 'Autor Uno, Autor Dos, Autor Tres, Autor Cuatro, Autor Cinco, Autor Seis, Autor Siete, Autor Ocho, Autor Nueve, Autor Diez, Autor Once, Autor Doce, Autor Trece,Autor Catorce, Autor Quince, Autor Dieciseis, Autor Diecisiete, Autor Dieciocho'}], 'AUTORES_MAX_SIZE_KO'],
  ['articulo', 'autores', 4, 4, 'ADD', [{ autores: 'Autor%Incorrecto' }], 'AUTORES_FORMAT_KO'],
  ['articulo', 'autores', 5, 5, 'EDIT', [{ autores: 'Ana Pérez; Juan López; Carla Rey' }], true],

  ['articulo', 'titulo_articulo', 6, 6, 'ADD', [{ titulo_articulo: '' }], 'TITULO_ARTICULO_EMPTY_KO'],
  ['articulo', 'titulo_articulo', 7, 7, 'ADD', [{ titulo_articulo: 'AI' }], 'TITULO_ARTICULO_MIN_SIZE_KO'],
  ['articulo', 'titulo_articulo', 8, 8, 'ADD', [{ titulo_articulo: 'Investigación en interfaces de usuario con metodologías centradas en la persona para entornos académicos del futuro' }], 'TITULO_ARTICULO_MAX_SIZE_KO'],
  ['articulo', 'titulo_articulo', 9, 9, 'ADD', [{ titulo_articulo: 'Artículo#1' }], 'TITULO_ARTICULO_FORMAT_KO'],
  ['articulo', 'titulo_articulo', 10, 10, 'ADD', [{ titulo_articulo: 'Interfaces de Usuario en Educación Superior' }], true],

  ['articulo', 'titulo_revista', 11, 11, 'ADD', [{ titulo_revista: '' }], 'TITULO_REVISTA_EMPTY_KO'],
  ['articulo', 'titulo_revista', 12, 12, 'ADD', [{ titulo_revista: 'UX' }], 'TITULO_REVISTA_MIN_SIZE_KO'],
  ['articulo', 'titulo_revista', 13, 13, 'ADD', [{ titulo_revista: 'Revista Internacional sobre Desarrollo de Interfaces y Experiencia de Usuario en Entornos Educativos Contemporáneos' }], 'TITULO_REVISTA_MAX_SIZE_KO'],
  ['articulo', 'titulo_revista', 14, 14, 'ADD', [{ titulo_revista: 'Revista UX#1' }], 'TITULO_REVISTA_FORMAT_KO'],
  ['articulo', 'titulo_revista', 15, 15, 'EDIT', [{ titulo_revista: 'Revista de Ingeniería de Software' }], true],

  ['articulo', 'issn', 16, 16, 'ADD', [{ issn: '' }], 'ISSN_EMPTY_KO'],
  ['articulo', 'issn', 17, 17, 'ADD', [{ issn: '12345678' }], 'ISSN_FORMAT_KO'],
  ['articulo', 'issn', 18, 18, 'ADD', [{ issn: '1234-567X' }], true],

  ['articulo', 'volumen', 19, 19, 'ADD', [{ volumen: '' }], 'VOLUMEN_EMPTY_KO'],
  ['articulo', 'volumen', 20, 20, 'ADD', [{ volumen: '12345' }], 'VOLUMEN_FORMAT_KO'],
  ['articulo', 'volumen', 21, 21, 'EDIT', [{ volumen: '12' }], true],

  ['articulo', 'pagina_inicio', 22, 22, 'ADD', [{ pagina_inicio: '' }], 'PAGINA_INICIO_EMPTY_KO'],
['articulo', 'pagina_inicio', 23, 23, 'ADD', [{ pagina_inicio: '12345' }], 'PAGINA_INICIO_FORMAT_KO'],

  ['articulo', 'pagina_fin', 24, 24, 'ADD', [{ pagina_fin: '' }], 'PAGINA_FIN_EMPTY_KO'],
  ['articulo', 'pagina_fin', 25, 25, 'ADD', [{ pagina_fin: '12345' }], 'PAGINA_FIN_FORMAT_KO'],
  ['articulo', 'pagina_fin', 26, 26, 'ADD', [{ pagina_inicio: '120' }, { pagina_fin: '110' }], 'PAGINA_FIN_RANGE_KO'],
  ['articulo', 'pagina_fin', 27, 27, 'ADD', [{ pagina_inicio: '34' }, { pagina_fin: '56' }], true],

  ['articulo', 'fecha_publicacion', 28, 28, 'ADD', [{ fecha_publicacion: '' }], 'FECHA_PUBLICACION_EMPTY_KO'],
  ['articulo', 'fecha_publicacion', 29, 29, 'ADD', [{ fecha_publicacion: '2024-13-xx' }], 'FECHA_PUBLICACION_EMPTY_KO'],
  ['articulo', 'fecha_publicacion', 30, 30, 'ADD', [{ fecha_publicacion: '2999-01-01' }], 'FECHA_PUBLICACION_FUTURE_KO'],
  ['articulo', 'fecha_publicacion', 31, 31, 'EDIT', [{ fecha_publicacion: '2023-10-15' }], true],

  ['articulo', 'estado', 32, 32, 'ADD', [{ estado: '' }], 'ESTADO_EMPTY_KO'],
  ['articulo', 'estado', 33, 33, 'ADD', [{ estado: 'En curso' }], 'ESTADO_NOT_VALID_KO'],
  ['articulo', 'estado', 34, 34, 'EDIT', [{ estado: 'Revision' }], true],
  ['articulo', 'codigo', 40, 35, 'SEARCH', [{ codigo: '' }], true]
];


var articulo_tests_files = [
  ['articulo', 'nuevo_ficheropdf', 35, 1, 'ADD', 'not_exist_file', [], 'FICHEROPDF_FILE_EMPTY_KO'],
  ['articulo', 'nuevo_ficheropdf', 36, 2, 'ADD', 'max_size_file', [
    { format_name_file: 'publicacion.pdf' },
    { type_file: 'application/pdf' },
    { max_size_file: 6000000 }
  ], 'FICHEROPDF_FILE_SIZE_KO'],
  ['articulo', 'nuevo_ficheropdf', 37, 3, 'ADD', 'type_file', [
    { format_name_file: 'publicacion.png' },
    { type_file: 'image/png' },
    { max_size_file: 200000 }
  ], 'FICHEROPDF_EXTENSION_KO'],
  ['articulo', 'nuevo_ficheropdf', 38, 4, 'ADD', 'format_name_file', [
    { format_name_file: 'articulo final.pdf' },
    { type_file: 'application/pdf' },
    { max_size_file: 150000 }
  ], 'FICHEROPDF_FORMAT_KO'],
  ['articulo', 'nuevo_ficheropdf', 39, 5, 'ADD', 'format_name_file', [
    { format_name_file: 'publicacion_vol1.pdf' },
    { type_file: 'application/pdf' },
    { max_size_file: 4500000 }
  ], true]
];


var ubicacion_def_tests = [
  ['ubicacion', 'site_latitud', 'input', 5, 'Latitud obligatoria', 'ADD', 'LATITUD_EMPTY_KO', 'La latitud es obligatoria'],
  ['ubicacion', 'site_latitud', 'input', 6, 'Latitud con formato incorrecto', 'ADD', 'LATITUD_FORMAT_KO', 'La latitud debe tener formato decimal con seis decimales'],
  ['ubicacion', 'site_latitud', 'input', 7, 'Latitud fuera de rango permitido', 'ADD', 'LATITUD_RANGE_KO', 'La latitud debe estar entre -90 y 90'],
  ['ubicacion', 'site_latitud', 'input', 8, 'Latitud válida', 'ADD', true, 'Latitud válida'],
  ['ubicacion', 'site_longitud', 'input', 9, 'Longitud obligatoria', 'ADD', 'LONGITUD_EMPTY_KO', 'La longitud es obligatoria'],
  ['ubicacion', 'site_longitud', 'input', 10, 'Longitud con formato incorrecto', 'ADD', 'LONGITUD_FORMAT_KO', 'La longitud debe tener formato decimal con seis decimales'],
  ['ubicacion', 'site_longitud', 'input', 11, 'Longitud fuera de rango permitido', 'ADD', 'LONGITUD_RANGE_KO', 'La longitud debe estar entre -180 y 180'],
  ['ubicacion', 'site_longitud', 'input', 12, 'Longitud válida', 'ADD', true, 'Longitud válida'],
  ['ubicacion', 'site_altitude', 'input', 13, 'Altitud obligatoria', 'ADD', 'ALTITUD_EMPTY_KO', 'La altitud es obligatoria'],
  ['ubicacion', 'site_altitude', 'input', 14, 'Altitud con formato incorrecto', 'ADD', 'ALTITUD_FORMAT_KO', 'La altitud debe ser un entero'],
  ['ubicacion', 'site_altitude', 'input', 15, 'Altitud fuera de rango permitido', 'ADD', 'ALTITUD_RANGE_KO', 'La altitud debe estar entre -500 y 9000'],
  ['ubicacion', 'site_altitude', 'input', 16, 'Altitud válida', 'ADD', true, 'Altitud válida'],
  ['ubicacion', 'site_locality', 'input', 17, 'Localidad obligatoria', 'ADD', 'LOCALITY_EMPTY_KO', 'La localidad es obligatoria'],
  ['ubicacion', 'site_locality', 'input', 18, 'Localidad demasiado corta', 'ADD', 'LOCALITY_MIN_SIZE_KO', 'La localidad debe tener al menos 2 caracteres'],
  ['ubicacion', 'site_locality', 'input', 19, 'Localidad demasiado larga', 'ADD', 'LOCALITY_MAX_SIZE_KO', 'La localidad supera la longitud permitida'],
  ['ubicacion', 'site_locality', 'input', 20, 'Localidad con caracteres no válidos', 'ADD', 'LOCALITY_FORMAT_KO', 'La localidad contiene caracteres no permitidos'],
  ['ubicacion', 'site_locality', 'input', 21, 'Localidad válida en EDIT', 'EDIT', true, 'Localidad válida'],
  ['ubicacion', 'site_provider_login', 'input', 22, 'Login de proveedor obligatorio', 'ADD', 'PROVIDER_LOGIN_EMPTY_KO', 'El login del proveedor es obligatorio'],
  ['ubicacion', 'site_provider_login', 'input', 23, 'Login de proveedor demasiado corto', 'ADD', 'PROVIDER_LOGIN_MIN_SIZE_KO', 'El login del proveedor debe tener al menos 3 caracteres'],
  ['ubicacion', 'site_provider_login', 'input', 24, 'Login de proveedor demasiado largo', 'ADD', 'PROVIDER_LOGIN_MAX_SIZE_KO', 'El login del proveedor supera la longitud permitida'],
  ['ubicacion', 'site_provider_login', 'input', 25, 'Login de proveedor con caracteres no válidos', 'ADD', 'PROVIDER_LOGIN_FORMAT_KO', 'El login del proveedor contiene caracteres no permitidos'],
  ['ubicacion', 'site_provider_login', 'input', 26, 'Login de proveedor válido', 'ADD', true, 'Login de proveedor válido'],
  ['ubicacion', 'site_latitud', 'input', 27, 'Latitud vacía permitida en SEARCH', 'SEARCH', true, 'Latitud vacía permitida en búsqueda'],
  ['ubicacion', 'nuevo_site_north_photo', 'inputfile', 28, 'Foto norte obligatoria', 'ADD', 'SITE_NORTH_PHOTO_FILE_EMPTY_KO', 'Debe adjuntarse la foto norte'],
  ['ubicacion', 'nuevo_site_north_photo', 'inputfile', 29, 'Foto norte supera el tamaño máximo', 'ADD', 'SITE_NORTH_PHOTO_FILE_SIZE_KO', 'La foto norte supera el tamaño permitido'],
  ['ubicacion', 'nuevo_site_north_photo', 'inputfile', 30, 'Foto norte con tipo no permitido', 'ADD', 'SITE_NORTH_PHOTO_EXTENSION_KO', 'La foto norte debe ser JPG o PNG'],
  ['ubicacion', 'nuevo_site_north_photo', 'inputfile', 31, 'Foto norte con nombre inválido', 'ADD', 'SITE_NORTH_PHOTO_FORMAT_KO', 'El nombre del fichero de la foto norte no es válido'],
  ['ubicacion', 'nuevo_site_north_photo', 'inputfile', 32, 'Foto norte válida', 'ADD', true, 'Foto norte válida'],
  ['ubicacion', 'nuevo_site_south_photo', 'inputfile', 33, 'Foto sur obligatoria', 'ADD', 'SITE_SOUTH_PHOTO_FILE_EMPTY_KO', 'Debe adjuntarse la foto sur'],
  ['ubicacion', 'nuevo_site_south_photo', 'inputfile', 34, 'Foto sur válida', 'ADD', true, 'Foto sur válida'],
  ['ubicacion', 'nuevo_site_east_photo', 'inputfile', 35, 'Foto este obligatoria', 'ADD', 'SITE_EAST_PHOTO_FILE_EMPTY_KO', 'Debe adjuntarse la foto este'],
  ['ubicacion', 'nuevo_site_east_photo', 'inputfile', 36, 'Foto este válida', 'ADD', true, 'Foto este válida'],
  ['ubicacion', 'nuevo_site_west_photo', 'inputfile', 37, 'Foto oeste obligatoria', 'ADD', 'SITE_WEST_PHOTO_FILE_EMPTY_KO', 'Debe adjuntarse la foto oeste'],
  ['ubicacion', 'nuevo_site_west_photo', 'inputfile', 38, 'Foto oeste válida', 'ADD', true, 'Foto oeste válida']
];

var ubicacion_tests_fields = [
  ['ubicacion', 'site_latitud', 5, 5, 'ADD', [{ site_latitud: '' }], 'LATITUD_EMPTY_KO'],
  ['ubicacion', 'site_latitud', 6, 6, 'ADD', [{ site_latitud: '43,362300' }], 'LATITUD_FORMAT_KO'],
  ['ubicacion', 'site_latitud', 7, 7, 'ADD', [{ site_latitud: '95.000000' }], 'LATITUD_RANGE_KO'],
  ['ubicacion', 'site_latitud', 8, 8, 'ADD', [{ site_latitud: '43.362345' }], true],
  ['ubicacion', 'site_longitud', 9, 9, 'ADD', [{ site_longitud: '' }], 'LONGITUD_EMPTY_KO'],
  ['ubicacion', 'site_longitud', 10, 10, 'ADD', [{ site_longitud: 'abc' }], 'LONGITUD_FORMAT_KO'],
  ['ubicacion', 'site_longitud', 11, 11, 'ADD', [{ site_longitud: '190.000000' }], 'LONGITUD_RANGE_KO'],
  ['ubicacion', 'site_longitud', 12, 12, 'ADD', [{ site_longitud: '-7.555555' }], true],
  ['ubicacion', 'site_altitude', 13, 13, 'ADD', [{ site_altitude: '' }], 'ALTITUD_EMPTY_KO'],
  ['ubicacion', 'site_altitude', 14, 14, 'ADD', [{ site_altitude: '123.5' }], 'ALTITUD_FORMAT_KO'],
  ['ubicacion', 'site_altitude', 15, 15, 'ADD', [{ site_altitude: '9500' }], 'ALTITUD_RANGE_KO'],
  ['ubicacion', 'site_altitude', 16, 16, 'ADD', [{ site_altitude: '320' }], true],
  ['ubicacion', 'site_locality', 17, 17, 'ADD', [{ site_locality: '' }], 'LOCALITY_EMPTY_KO'],
  ['ubicacion', 'site_locality', 18, 18, 'ADD', [{ site_locality: 'A' }], 'LOCALITY_MIN_SIZE_KO'],
  ['ubicacion', 'site_locality', 19, 19, 'ADD', [{ site_locality: 'LocalidadConNombreDemasiadoExtensoQueSuperaElLimite' }], 'LOCALITY_MAX_SIZE_KO'],
  ['ubicacion', 'site_locality', 20, 20, 'ADD', [{ site_locality: 'Localidad#1' }], 'LOCALITY_FORMAT_KO'],
  ['ubicacion', 'site_locality', 21, 21, 'EDIT', [{ site_locality: 'Narón' }], true],
  ['ubicacion', 'site_provider_login', 22, 22, 'ADD', [{ site_provider_login: '' }], 'PROVIDER_LOGIN_EMPTY_KO'],
  ['ubicacion', 'site_provider_login', 23, 23, 'ADD', [{ site_provider_login: 'ab' }], 'PROVIDER_LOGIN_MIN_SIZE_KO'],
  ['ubicacion', 'site_provider_login', 24, 24, 'ADD', [{ site_provider_login: 'ProveedorConNombreRealmenteExcesivoParaElSistema123' }], 'PROVIDER_LOGIN_MAX_SIZE_KO'],
  ['ubicacion', 'site_provider_login', 25, 25, 'ADD', [{ site_provider_login: 'prov@site' }], 'PROVIDER_LOGIN_FORMAT_KO'],
  ['ubicacion', 'site_provider_login', 26, 26, 'ADD', [{ site_provider_login: 'infra_prov' }], true],
  ['ubicacion', 'site_latitud', 27, 27, 'SEARCH', [{ site_latitud: '' }], true]
];

var ubicacion_tests_files = [
  ['ubicacion', 'nuevo_site_north_photo', 28, 1, 'ADD', 'not_exist_file', [], 'SITE_NORTH_PHOTO_FILE_EMPTY_KO'],
  ['ubicacion', 'nuevo_site_north_photo', 29, 2, 'ADD', 'max_size_file', [
    { format_name_file: 'norte.jpg' },
    { type_file: 'image/jpeg' },
    { max_size_file: 3200000 }
  ], 'SITE_NORTH_PHOTO_FILE_SIZE_KO'],
  ['ubicacion', 'nuevo_site_north_photo', 30, 3, 'ADD', 'type_file', [
    { format_name_file: 'norte.svg' },
    { type_file: 'image/svg+xml' },
    { max_size_file: 120000 }
  ], 'SITE_NORTH_PHOTO_EXTENSION_KO'],
  ['ubicacion', 'nuevo_site_north_photo', 31, 4, 'ADD', 'format_name_file', [
    { format_name_file: 'foto norte.jpg' },
    { type_file: 'image/jpeg' },
    { max_size_file: 180000 }
  ], 'SITE_NORTH_PHOTO_FORMAT_KO'],
  ['ubicacion', 'nuevo_site_north_photo', 32, 5, 'ADD', 'format_name_file', [
    { format_name_file: 'siteNorth01.jpg' },
    { type_file: 'image/jpeg' },
    { max_size_file: 2000000 }
  ], true],
  ['ubicacion', 'nuevo_site_south_photo', 33, 6, 'ADD', 'not_exist_file', [], 'SITE_SOUTH_PHOTO_FILE_EMPTY_KO'],
  ['ubicacion', 'nuevo_site_south_photo', 34, 7, 'ADD', 'format_name_file', [
    { format_name_file: 'siteSouth01.png' },
    { type_file: 'image/png' },
    { max_size_file: 450000 }
  ], true],
  ['ubicacion', 'nuevo_site_east_photo', 35, 8, 'ADD', 'not_exist_file', [], 'SITE_EAST_PHOTO_FILE_EMPTY_KO'],
  ['ubicacion', 'nuevo_site_east_photo', 36, 9, 'ADD', 'format_name_file', [
    { format_name_file: 'siteEast01.jpg' },
    { type_file: 'image/jpeg' },
    { max_size_file: 400000 }
  ], true],
  ['ubicacion', 'nuevo_site_west_photo', 37, 10, 'ADD', 'not_exist_file', [], 'SITE_WEST_PHOTO_FILE_EMPTY_KO'],
  ['ubicacion', 'nuevo_site_west_photo', 38, 11, 'ADD', 'format_name_file', [
    { format_name_file: 'siteWest01.png' },
    { type_file: 'image/png' },
    { max_size_file: 380000 }
  ], true]
];
