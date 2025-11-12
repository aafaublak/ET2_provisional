// Tests for articulo
let articulo_def_tests = [
    // ADD
    ['articulo', 'AutoresA', 1, 'Autores con caracteres inválidos', 'ADD', 'AutoresA_format_KO', 'Caracteres no permitidos'],
    ['articulo', 'AutoresA', 2, 'Autores válidos', 'ADD', true, 'Autores correctos'],
    ['articulo', 'TituloA', 3, 'Título mínimo 5 caracteres', 'ADD', 'TituloA_min_size_KO', 'Título demasiado corto'],
    ['articulo', 'TituloA', 4, 'Título válido', 'ADD', true, 'Título correcto'],
    ['articulo', 'TituloR', 5, 'Título de revista demasiado corto', 'ADD', 'TituloR_min_size_KO', 'Título revista corto'],
    ['articulo', 'TituloR', 6, 'Título de revista válido', 'ADD', true, 'Título revista correcto'],
    ['articulo', 'VolumenR', 7, 'Volumen obligatorio', 'ADD', 'VolumenR_required_KO', 'Dato obligatorio'],
    ['articulo', 'VolumenR', 8, 'Volumen con caracteres inválidos', 'ADD', 'VolumenR_format_KO', 'Formato incorrecto'],
    ['articulo', 'VolumenR', 9, 'Volumen fuera de rango', 'ADD', 'VolumenR_range_KO', 'Volumen inválido'],
    ['articulo', 'VolumenR', 10, 'Volumen válido', 'ADD', true, 'Volumen correcto'],
    ['articulo', 'PagIniA', 11, 'Página inicial obligatoria', 'ADD', 'PagIniA_required_KO', 'Dato obligatorio'],
    ['articulo', 'PagIniA', 12, 'Página inicial con formato inválido', 'ADD', 'PagIniA_format_KO', 'Formato incorrecto'],
    ['articulo', 'PagIniA', 13, 'Página inicial fuera de rango', 'ADD', 'PagIniA_range_KO', 'Valor fuera de rango'],
    ['articulo', 'PagIniA', 14, 'Página inicial válida', 'ADD', true, 'Página inicial correcta'],
    ['articulo', 'PagFinA', 15, 'Página final obligatoria', 'ADD', 'PagFinA_required_KO', 'Dato obligatorio'],
    ['articulo', 'PagFinA', 16, 'Página final con formato inválido', 'ADD', 'PagFinA_format_KO', 'Formato incorrecto'],
    ['articulo', 'PagFinA', 17, 'Página final fuera de rango', 'ADD', 'PagFinA_range_KO', 'Valor fuera de rango'],
    ['articulo', 'PagFinA', 18, 'Página final menor que la inicial', 'ADD', 'PagFinA_order_KO', 'Orden incorrecto'],
    ['articulo', 'PagFinA', 19, 'Página final válida', 'ADD', true, 'Página final correcta'],
    ['articulo', 'FechaPublicacionR', 20, 'Fecha de publicación obligatoria', 'ADD', 'FechaPublicacionR_required_KO', 'Dato obligatorio'],
    ['articulo', 'FechaPublicacionR', 21, 'Formato de fecha con barras/mes sin cero', 'ADD', 'FechaPublicacionR_format_KO', 'Formato incorrecto'],
    ['articulo', 'FechaPublicacionR', 22, 'Fecha imposible (día fuera de rango)', 'ADD', 'FechaPublicacionR_value_KO', 'Fecha inválida'],
    ['articulo', 'FechaPublicacionR', 23, 'Fecha de publicación válida', 'ADD', true, 'Fecha correcta'],
    ['articulo', 'ISSN', 24, 'El ISSN debe seguir el formato 0000-0000', 'ADD', 'ISSN_format_KO', 'Formato incorrecto'],
    ['articulo', 'ISSN', 25, 'ISSN correcto', 'ADD', true, 'Formato válido'],
    ['articulo', 'EstadoA', 26, 'Solo estados permitidos', 'ADD', 'EstadoA_value_KO', 'Estado no permitido'],
    ['articulo', 'EstadoA', 27, 'Estado válido', 'ADD', true, 'Estado permitido'],
    ['articulo', 'nuevo_FicheropdfA', 28, 'El PDF es obligatorio en alta', 'ADD', 'FicheropdfA_required_KO', 'Archivo requerido'],
    ['articulo', 'nuevo_FicheropdfA', 29, 'Tipo de fichero permitido', 'ADD', 'FicheropdfA_type_KO', 'Tipo inválido'],
    ['articulo', 'nuevo_FicheropdfA', 30, 'Tamaño máximo permitido', 'ADD', 'FicheropdfA_max_size_KO', 'Archivo grande'],
    ['articulo', 'nuevo_FicheropdfA', 31, 'Nombre de fichero inválido', 'ADD', 'FicheropdfA_name_KO', 'Nombre inválido'],
    ['articulo', 'nuevo_FicheropdfA', 32, 'PDF válido', 'ADD', true, 'Archivo válido'],
    // EDIT
    ['articulo', 'AutoresA', 33, 'Autores inválidos en edición', 'EDIT', 'AutoresA_format_KO', 'Caracteres no permitidos'],
    ['articulo', 'AutoresA', 34, 'Autores válidos en edición', 'EDIT', true, 'Autores correctos'],
    ['articulo', 'TituloA', 35, 'Formato de título incorrecto en edición', 'EDIT', 'TituloA_format_KO', 'Formato incorrecto'],
    ['articulo', 'TituloA', 36, 'Título válido en edición', 'EDIT', true, 'Título correcto'],
    ['articulo', 'TituloR', 37, 'Título de revista inválido en edición', 'EDIT', 'TituloR_format_KO', 'Formato inválido'],
    ['articulo', 'TituloR', 38, 'Título de revista válido en edición', 'EDIT', true, 'Título revista correcto'],
    ['articulo', 'VolumenR', 39, 'Volumen fuera de rango en edición', 'EDIT', 'VolumenR_range_KO', 'Volumen inválido'],
    ['articulo', 'VolumenR', 40, 'Volumen válido en edición', 'EDIT', true, 'Volumen correcto'],
    ['articulo', 'PagIniA', 41, 'Página inicial con formato inválido en edición', 'EDIT', 'PagIniA_format_KO', 'Formato incorrecto'],
    ['articulo', 'PagIniA', 42, 'Página inicial válida en edición', 'EDIT', true, 'Página correcta'],
    ['articulo', 'PagFinA', 43, 'Página final con formato inválido en edición', 'EDIT', 'PagFinA_format_KO', 'Formato incorrecto'],
    ['articulo', 'PagFinA', 44, 'Página final menor que la inicial en edición', 'EDIT', 'PagFinA_order_KO', 'Orden incorrecto'],
    ['articulo', 'PagFinA', 45, 'Página final válida en edición', 'EDIT', true, 'Página correcta'],
    ['articulo', 'FechaPublicacionR', 46, 'Fecha obligatoria en edición', 'EDIT', 'FechaPublicacionR_required_KO', 'Dato obligatorio'],
    ['articulo', 'FechaPublicacionR', 47, 'Formato de fecha inválido en edición', 'EDIT', 'FechaPublicacionR_format_KO', 'Formato incorrecto'],
    ['articulo', 'FechaPublicacionR', 48, 'Fecha imposible en edición', 'EDIT', 'FechaPublicacionR_value_KO', 'Fecha inválida'],
    ['articulo', 'FechaPublicacionR', 49, 'Fecha válida en edición', 'EDIT', true, 'Fecha correcta'],
    ['articulo', 'nuevo_FicheropdfA', 50, 'Archivo opcional en edición', 'EDIT', true, 'Sin nuevo fichero'],
    ['articulo', 'nuevo_FicheropdfA', 51, 'Tipo incorrecto en edición', 'EDIT', 'FicheropdfA_type_KO', 'Tipo inválido'],
    ['articulo', 'nuevo_FicheropdfA', 52, 'Nombre inválido en edición', 'EDIT', 'FicheropdfA_name_KO', 'Nombre inválido'],
    // SEARCH
    ['articulo', 'CodigoA', 53, 'Código demasiado largo en búsqueda', 'SEARCH', 'CodigoA_max_size_KO', 'Código demasiado largo'],
    ['articulo', 'CodigoA', 54, 'Código válido en búsqueda', 'SEARCH', true, 'Valor búsqueda correcto'],
    ['articulo', 'AutoresA', 55, 'Autores con caracteres inválidos en búsqueda', 'SEARCH', 'AutoresA_format_KO', 'Caracteres no permitidos'],
    ['articulo', 'AutoresA', 56, 'Autores válidos en búsqueda', 'SEARCH', true, 'Autores correctos'],
    ['articulo', 'TituloA', 57, 'Título demasiado largo en búsqueda', 'SEARCH', 'TituloA_max_size_KO', 'Título demasiado largo'],
    ['articulo', 'TituloA', 58, 'Título válido en búsqueda', 'SEARCH', true, 'Título correcto'],
    ['articulo', 'TituloR', 59, 'Título de revista inválido en búsqueda', 'SEARCH', 'TituloR_format_KO', 'Formato incorrecto'],
    ['articulo', 'TituloR', 60, 'Título de revista válido en búsqueda', 'SEARCH', true, 'Título correcto'],
    ['articulo', 'VolumenR', 61, 'Volumen con caracteres en búsqueda', 'SEARCH', 'VolumenR_format_KO', 'Formato incorrecto'],
    ['articulo', 'VolumenR', 62, 'Volumen válido en búsqueda', 'SEARCH', true, 'Volumen correcto'],
    ['articulo', 'PagIniA', 63, 'Página inicial inválida en búsqueda', 'SEARCH', 'PagIniA_format_KO', 'Formato incorrecto'],
    ['articulo', 'PagIniA', 64, 'Página inicial válida en búsqueda', 'SEARCH', true, 'Página correcta'],
    ['articulo', 'PagFinA', 65, 'Página final inválida en búsqueda', 'SEARCH', 'PagFinA_format_KO', 'Formato incorrecto'],
    ['articulo', 'PagFinA', 66, 'Página final menor que la inicial en búsqueda', 'SEARCH', 'PagFinA_order_KO', 'Orden incorrecto'],
    ['articulo', 'PagFinA', 67, 'Página final válida en búsqueda', 'SEARCH', true, 'Página correcta'],
    ['articulo', 'FechaPublicacionR', 68, 'Formato de fecha inválido en búsqueda', 'SEARCH', 'FechaPublicacionR_format_KO', 'Formato incorrecto'],
    ['articulo', 'FechaPublicacionR', 69, 'Fecha inexistente en búsqueda', 'SEARCH', 'FechaPublicacionR_value_KO', 'Fecha inválida'],
    ['articulo', 'FechaPublicacionR', 70, 'Fecha válida en búsqueda', 'SEARCH', true, 'Fecha correcta'],
    ['articulo', 'ISSN', 71, 'ISSN inválido en búsqueda', 'SEARCH', 'ISSN_format_KO', 'Formato incorrecto'],
    ['articulo', 'ISSN', 72, 'ISSN válido en búsqueda', 'SEARCH', true, 'Formato válido'],
    ['articulo', 'EstadoA', 73, 'Estado inválido en búsqueda', 'SEARCH', 'EstadoA_value_KO', 'Estado no permitido'],
    ['articulo', 'EstadoA', 74, 'Estado válido en búsqueda', 'SEARCH', true, 'Estado permitido'],
];

let articulo_tests_fields = [
    // ADD
    ['articulo', 'AutoresA', 1, 1, 'ADD', [{ AutoresA: 'Autor#1' }], 'AutoresA_format_KO'],
    ['articulo', 'AutoresA', 2, 2, 'ADD', [{ AutoresA: 'Autor Uno, Autor Dos' }], true],
    ['articulo', 'TituloA', 3, 3, 'ADD', [{ TituloA: 'Art' }], 'TituloA_min_size_KO'],
    ['articulo', 'TituloA', 4, 4, 'ADD', [{ TituloA: 'Articulo completo 2024' }], true],
    ['articulo', 'TituloR', 5, 5, 'ADD', [{ TituloR: 'Rev' }], 'TituloR_min_size_KO'],
    ['articulo', 'TituloR', 6, 6, 'ADD', [{ TituloR: 'Revista Ciencias' }], true],
    ['articulo', 'VolumenR', 7, 7, 'ADD', [{ VolumenR: '' }], 'VolumenR_required_KO'],
    ['articulo', 'VolumenR', 8, 8, 'ADD', [{ VolumenR: 'vol' }], 'VolumenR_format_KO'],
    ['articulo', 'VolumenR', 9, 9, 'ADD', [{ VolumenR: '10000' }], 'VolumenR_range_KO'],
    ['articulo', 'VolumenR', 10, 10, 'ADD', [{ VolumenR: '12' }], true],
    ['articulo', 'PagIniA', 11, 11, 'ADD', [{ PagIniA: '' }], 'PagIniA_required_KO'],
    ['articulo', 'PagIniA', 12, 12, 'ADD', [{ PagIniA: 'abc' }], 'PagIniA_format_KO'],
    ['articulo', 'PagIniA', 13, 13, 'ADD', [{ PagIniA: '10000' }], 'PagIniA_range_KO'],
    ['articulo', 'PagIniA', 14, 14, 'ADD', [{ PagIniA: '101' }], true],
    ['articulo', 'PagFinA', 15, 15, 'ADD', [{ PagIniA: '101', PagFinA: '' }], 'PagFinA_required_KO'],
    ['articulo', 'PagFinA', 16, 16, 'ADD', [{ PagIniA: '101', PagFinA: 'fin' }], 'PagFinA_format_KO'],
    ['articulo', 'PagFinA', 17, 17, 'ADD', [{ PagIniA: '101', PagFinA: '12000' }], 'PagFinA_range_KO'],
    ['articulo', 'PagFinA', 18, 18, 'ADD', [{ PagIniA: '101', PagFinA: '50' }], 'PagFinA_order_KO'],
    ['articulo', 'PagFinA', 19, 19, 'ADD', [{ PagIniA: '101', PagFinA: '150' }], true],
    ['articulo', 'FechaPublicacionR', 20, 20, 'ADD', [{ FechaPublicacionR: '' }], 'FechaPublicacionR_required_KO'],
    ['articulo', 'FechaPublicacionR', 21, 21, 'ADD', [{ FechaPublicacionR: '17/05/2024' }], true],
    ['articulo', 'FechaPublicacionR', 22, 22, 'ADD', [{ FechaPublicacionR: '2024-05-17' }], true],
    ['articulo', 'FechaPublicacionR', 23, 23, 'ADD', [{ FechaPublicacionR: '2024/5/7' }], 'FechaPublicacionR_format_KO'],
    ['articulo', 'FechaPublicacionR', 24, 24, 'ADD', [{ FechaPublicacionR: '2024/05/32' }], 'FechaPublicacionR_value_KO'],
    ['articulo', 'FechaPublicacionR', 25, 25, 'ADD', [{ FechaPublicacionR: '2024-5-7' }], 'FechaPublicacionR_format_KO'],
    ['articulo', 'FechaPublicacionR', 26, 26, 'ADD', [{ FechaPublicacionR: '0000-00-00' }], 'FechaPublicacionR_value_KO'],
    ['articulo', 'ISSN', 27, 27, 'ADD', [{ ISSN: '1234-123' }], 'ISSN_format_KO'],
    ['articulo', 'ISSN', 28, 28, 'ADD', [{ ISSN: '1234-1234' }], true],
    ['articulo', 'EstadoA', 29, 29, 'ADD', [{ EstadoA: 'BORRADO' }], 'EstadoA_value_KO'],
    ['articulo', 'EstadoA', 30, 30, 'ADD', [{ EstadoA: 'BORRADOR' }], true],
    // EDIT
    ['articulo', 'AutoresA', 31, 31, 'EDIT', [{ AutoresA: 'Autor@' }], 'AutoresA_format_KO'],
    ['articulo', 'AutoresA', 32, 32, 'EDIT', [{ AutoresA: 'Autor Editado' }], true],
    ['articulo', 'TituloA', 33, 33, 'EDIT', [{ TituloA: 'Titulo!' }], 'TituloA_format_KO'],
    ['articulo', 'TituloA', 34, 34, 'EDIT', [{ TituloA: 'Titulo Editado 2025' }], true],
    ['articulo', 'TituloR', 35, 35, 'EDIT', [{ TituloR: 'Rev!' }], 'TituloR_format_KO'],
    ['articulo', 'TituloR', 36, 36, 'EDIT', [{ TituloR: 'Revista Actualizada' }], true],
    ['articulo', 'VolumenR', 37, 37, 'EDIT', [{ VolumenR: '10000' }], 'VolumenR_range_KO'],
    ['articulo', 'VolumenR', 38, 38, 'EDIT', [{ VolumenR: '8' }], true],
    ['articulo', 'PagIniA', 39, 39, 'EDIT', [{ PagIniA: 'pag' }], 'PagIniA_format_KO'],
    ['articulo', 'PagIniA', 40, 40, 'EDIT', [{ PagIniA: '205' }], true],
    ['articulo', 'PagFinA', 41, 41, 'EDIT', [{ PagIniA: '205', PagFinA: 'fin' }], 'PagFinA_format_KO'],
    ['articulo', 'PagFinA', 42, 42, 'EDIT', [{ PagIniA: '205', PagFinA: '100' }], 'PagFinA_order_KO'],
    ['articulo', 'PagFinA', 43, 43, 'EDIT', [{ PagIniA: '205', PagFinA: '210' }], true],
    ['articulo', 'FechaPublicacionR', 44, 44, 'EDIT', [{ FechaPublicacionR: '' }], 'FechaPublicacionR_required_KO'],
    ['articulo', 'FechaPublicacionR', 45, 45, 'EDIT', [{ FechaPublicacionR: '17/05/2024' }], true],
    ['articulo', 'FechaPublicacionR', 46, 46, 'EDIT', [{ FechaPublicacionR: '2024-05-17' }], true],
    ['articulo', 'FechaPublicacionR', 47, 47, 'EDIT', [{ FechaPublicacionR: '2024/5/7' }], 'FechaPublicacionR_format_KO'],
    ['articulo', 'FechaPublicacionR', 48, 48, 'EDIT', [{ FechaPublicacionR: '2024/05/32' }], 'FechaPublicacionR_value_KO'],
    ['articulo', 'FechaPublicacionR', 49, 49, 'EDIT', [{ FechaPublicacionR: '2024-5-7' }], 'FechaPublicacionR_format_KO'],
    ['articulo', 'FechaPublicacionR', 50, 50, 'EDIT', [{ FechaPublicacionR: '0000-00-00' }], 'FechaPublicacionR_value_KO'],
    // SEARCH
    ['articulo', 'CodigoA', 51, 51, 'SEARCH', [{ CodigoA: 'ABCDEFGHIJKLM' }], 'CodigoA_max_size_KO'],
    ['articulo', 'CodigoA', 52, 52, 'SEARCH', [{ CodigoA: 'AR1' }], true],
    ['articulo', 'AutoresA', 53, 53, 'SEARCH', [{ AutoresA: 'Autor@' }], 'AutoresA_format_KO'],
    ['articulo', 'AutoresA', 54, 54, 'SEARCH', [{ AutoresA: 'Autor' }], true],
    ['articulo', 'TituloA', 55, 55, 'SEARCH', [{ TituloA: 'A'.repeat(151) }], 'TituloA_max_size_KO'],
    ['articulo', 'TituloA', 56, 56, 'SEARCH', [{ TituloA: 'Analisis' }], true],
    ['articulo', 'TituloR', 57, 57, 'SEARCH', [{ TituloR: 'Rev!' }], 'TituloR_format_KO'],
    ['articulo', 'TituloR', 58, 58, 'SEARCH', [{ TituloR: 'Revista' }], true],
    ['articulo', 'VolumenR', 59, 59, 'SEARCH', [{ VolumenR: 'vol' }], 'VolumenR_format_KO'],
    ['articulo', 'VolumenR', 60, 60, 'SEARCH', [{ VolumenR: '22' }], true],
    ['articulo', 'PagIniA', 61, 61, 'SEARCH', [{ PagIniA: 'pag' }], 'PagIniA_format_KO'],
    ['articulo', 'PagIniA', 62, 62, 'SEARCH', [{ PagIniA: '10' }], true],
    ['articulo', 'PagFinA', 63, 63, 'SEARCH', [{ PagFinA: 'fin' }], 'PagFinA_format_KO'],
    ['articulo', 'PagFinA', 64, 64, 'SEARCH', [{ PagIniA: '10', PagFinA: '5' }], 'PagFinA_order_KO'],
    ['articulo', 'PagFinA', 65, 65, 'SEARCH', [{ PagIniA: '10', PagFinA: '20' }], true],
    ['articulo', 'FechaPublicacionR', 66, 66, 'SEARCH', [{ FechaPublicacionR: '17/05/2024' }], true],
    ['articulo', 'FechaPublicacionR', 67, 67, 'SEARCH', [{ FechaPublicacionR: '2024-05-17' }], true],
    ['articulo', 'FechaPublicacionR', 68, 68, 'SEARCH', [{ FechaPublicacionR: '2024/5/7' }], 'FechaPublicacionR_format_KO'],
    ['articulo', 'FechaPublicacionR', 69, 69, 'SEARCH', [{ FechaPublicacionR: '2024/05/32' }], 'FechaPublicacionR_value_KO'],
    ['articulo', 'FechaPublicacionR', 70, 70, 'SEARCH', [{ FechaPublicacionR: '2024-5-7' }], 'FechaPublicacionR_format_KO'],
    ['articulo', 'FechaPublicacionR', 71, 71, 'SEARCH', [{ FechaPublicacionR: '0000-00-00' }], 'FechaPublicacionR_value_KO'],
    ['articulo', 'ISSN', 72, 72, 'SEARCH', [{ ISSN: '123-1234' }], 'ISSN_format_KO'],
    ['articulo', 'ISSN', 73, 73, 'SEARCH', [{ ISSN: '1234-1234' }], true],
    ['articulo', 'EstadoA', 74, 74, 'SEARCH', [{ EstadoA: 'APROBADO' }], 'EstadoA_value_KO'],
    ['articulo', 'EstadoA', 75, 75, 'SEARCH', [{ EstadoA: 'PUBLICADO' }], true],
];

let articulo_tests_files = [
    // ADD
    ['articulo', 'nuevo_FicheropdfA', 1, 1, 'ADD', [], 'FicheropdfA_required_KO'],
    ['articulo', 'nuevo_FicheropdfA', 2, 2, 'ADD', [
        { format_name_file: 'paper.pdf' },
        { type_file: 'text/plain' },
        { max_size_file: 1000 }
    ], 'FicheropdfA_type_KO'],
    ['articulo', 'nuevo_FicheropdfA', 3, 3, 'ADD', [
        { format_name_file: 'paper.pdf' },
        { type_file: 'application/pdf' },
        { max_size_file: 5000000 }
    ], 'FicheropdfA_max_size_KO'],
    ['articulo', 'nuevo_FicheropdfA', 4, 4, 'ADD', [
        { format_name_file: 'paper#.pdf' },
        { type_file: 'application/pdf' },
        { max_size_file: 2000 }
    ], 'FicheropdfA_name_KO'],
    ['articulo', 'nuevo_FicheropdfA', 5, 5, 'ADD', [
        { format_name_file: 'articulo01.pdf' },
        { type_file: 'application/pdf' },
        { max_size_file: 2000 }
    ], true],
    // EDIT
    ['articulo', 'nuevo_FicheropdfA', 6, 6, 'EDIT', [], true],
    ['articulo', 'nuevo_FicheropdfA', 7, 7, 'EDIT', [
        { format_name_file: 'paper.pdf' },
        { type_file: 'text/plain' },
        { max_size_file: 1000 }
    ], 'FicheropdfA_type_KO'],
    ['articulo', 'nuevo_FicheropdfA', 8, 8, 'EDIT', [
        { format_name_file: 'articulo#.pdf' },
        { type_file: 'application/pdf' },
        { max_size_file: 2000 }
    ], 'FicheropdfA_name_KO'],
    ['articulo', 'nuevo_FicheropdfA', 9, 9, 'EDIT', [
        { format_name_file: 'revision2025.pdf' },
        { type_file: 'application/pdf' },
        { max_size_file: 2000 }
    ], true]
];

// Tests for ubicacion
let ubicacion_def_tests = [
    // ADD
    ['ubicacion', 'site_latitud', 1, 'Latitud numérica requerida', 'ADD', 'site_latitud_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_latitud', 2, 'Latitud dentro del rango', 'ADD', 'site_latitud_range_KO', 'Valor fuera de rango'],
    ['ubicacion', 'site_latitud', 3, 'Latitud correcta', 'ADD', true, 'Latitud válida'],
    ['ubicacion', 'site_longitud', 4, 'Longitud numérica requerida', 'ADD', 'site_longitud_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_longitud', 5, 'Longitud dentro del rango', 'ADD', 'site_longitud_range_KO', 'Valor fuera de rango'],
    ['ubicacion', 'site_longitud', 6, 'Longitud correcta', 'ADD', true, 'Longitud válida'],
    ['ubicacion', 'site_altitude', 7, 'Altitud numérica requerida', 'ADD', 'site_altitude_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_altitude', 8, 'Altitud dentro del rango', 'ADD', 'site_altitude_range_KO', 'Valor fuera de rango'],
    ['ubicacion', 'site_altitude', 9, 'Altitud correcta', 'ADD', true, 'Altitud válida'],
    ['ubicacion', 'site_locality', 10, 'Localidad demasiado corta', 'ADD', 'site_locality_min_size_KO', 'Longitud insuficiente'],
    ['ubicacion', 'site_locality', 11, 'Localidad demasiado larga', 'ADD', 'site_locality_max_size_KO', 'Longitud excedida'],
    ['ubicacion', 'site_locality', 12, 'Localidad con caracteres inválidos', 'ADD', 'site_locality_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_locality', 13, 'Localidad válida', 'ADD', true, 'Localidad correcta'],
    ['ubicacion', 'site_provider_login', 14, 'Proveedor muy corto', 'ADD', 'site_provider_login_min_size_KO', 'Longitud insuficiente'],
    ['ubicacion', 'site_provider_login', 15, 'Proveedor demasiado largo', 'ADD', 'site_provider_login_max_size_KO', 'Longitud excedida'],
    ['ubicacion', 'site_provider_login', 16, 'Proveedor con caracteres inválidos', 'ADD', 'site_provider_login_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_provider_login', 17, 'Proveedor válido', 'ADD', true, 'Proveedor correcto'],
    ['ubicacion', 'nuevo_site_north_photo', 18, 'Foto norte obligatoria', 'ADD', 'site_north_photo_required_KO', 'Archivo necesario'],
    ['ubicacion', 'nuevo_site_north_photo', 19, 'Tipo permitido foto norte', 'ADD', 'site_north_photo_type_KO', 'Tipo inválido'],
    ['ubicacion', 'nuevo_site_north_photo', 20, 'Foto norte válida', 'ADD', true, 'Archivo aceptado'],
    ['ubicacion', 'nuevo_site_south_photo', 21, 'Foto sur obligatoria', 'ADD', 'site_south_photo_required_KO', 'Archivo necesario'],
    ['ubicacion', 'nuevo_site_south_photo', 22, 'Tipo permitido foto sur', 'ADD', 'site_south_photo_type_KO', 'Tipo inválido'],
    ['ubicacion', 'nuevo_site_south_photo', 23, 'Foto sur válida', 'ADD', true, 'Archivo aceptado'],
    ['ubicacion', 'nuevo_site_east_photo', 24, 'Foto este obligatoria', 'ADD', 'site_east_photo_required_KO', 'Archivo necesario'],
    ['ubicacion', 'nuevo_site_east_photo', 25, 'Tipo permitido foto este', 'ADD', 'site_east_photo_type_KO', 'Tipo inválido'],
    ['ubicacion', 'nuevo_site_east_photo', 26, 'Foto este válida', 'ADD', true, 'Archivo aceptado'],
    ['ubicacion', 'nuevo_site_west_photo', 27, 'Foto oeste obligatoria', 'ADD', 'site_west_photo_required_KO', 'Archivo necesario'],
    ['ubicacion', 'nuevo_site_west_photo', 28, 'Tipo permitido foto oeste', 'ADD', 'site_west_photo_type_KO', 'Tipo inválido'],
    ['ubicacion', 'nuevo_site_west_photo', 29, 'Foto oeste válida', 'ADD', true, 'Archivo aceptado'],
    // EDIT
    ['ubicacion', 'site_latitud', 30, 'Latitud fuera de rango en edición', 'EDIT', 'site_latitud_range_KO', 'Valor fuera de rango'],
    ['ubicacion', 'site_latitud', 31, 'Latitud válida en edición', 'EDIT', true, 'Latitud válida'],
    ['ubicacion', 'site_longitud', 32, 'Longitud fuera de rango en edición', 'EDIT', 'site_longitud_range_KO', 'Valor fuera de rango'],
    ['ubicacion', 'site_longitud', 33, 'Longitud válida en edición', 'EDIT', true, 'Longitud válida'],
    ['ubicacion', 'site_altitude', 34, 'Altitud fuera de rango en edición', 'EDIT', 'site_altitude_range_KO', 'Valor fuera de rango'],
    ['ubicacion', 'site_altitude', 35, 'Altitud válida en edición', 'EDIT', true, 'Altitud válida'],
    ['ubicacion', 'site_locality', 36, 'Localidad demasiado corta en edición', 'EDIT', 'site_locality_min_size_KO', 'Longitud insuficiente'],
    ['ubicacion', 'site_locality', 37, 'Localidad demasiado larga en edición', 'EDIT', 'site_locality_max_size_KO', 'Longitud excedida'],
    ['ubicacion', 'site_locality', 38, 'Localidad inválida en edición', 'EDIT', 'site_locality_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_locality', 39, 'Localidad válida en edición', 'EDIT', true, 'Localidad válida'],
    ['ubicacion', 'site_provider_login', 40, 'Proveedor demasiado corto en edición', 'EDIT', 'site_provider_login_min_size_KO', 'Longitud insuficiente'],
    ['ubicacion', 'site_provider_login', 41, 'Proveedor demasiado largo en edición', 'EDIT', 'site_provider_login_max_size_KO', 'Longitud excedida'],
    ['ubicacion', 'site_provider_login', 42, 'Proveedor inválido en edición', 'EDIT', 'site_provider_login_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_provider_login', 43, 'Proveedor válido en edición', 'EDIT', true, 'Proveedor válido'],
    ['ubicacion', 'nuevo_site_north_photo', 44, 'Archivo norte opcional en edición', 'EDIT', true, 'Sin nuevo archivo'],
    ['ubicacion', 'nuevo_site_north_photo', 45, 'Tipo norte incorrecto en edición', 'EDIT', 'site_north_photo_type_KO', 'Tipo inválido'],
    ['ubicacion', 'nuevo_site_south_photo', 46, 'Archivo sur opcional en edición', 'EDIT', true, 'Sin nuevo archivo'],
    ['ubicacion', 'nuevo_site_south_photo', 47, 'Tipo sur incorrecto en edición', 'EDIT', 'site_south_photo_type_KO', 'Tipo inválido'],
    ['ubicacion', 'nuevo_site_east_photo', 48, 'Archivo este opcional en edición', 'EDIT', true, 'Sin nuevo archivo'],
    ['ubicacion', 'nuevo_site_east_photo', 49, 'Tipo este incorrecto en edición', 'EDIT', 'site_east_photo_type_KO', 'Tipo inválido'],
    ['ubicacion', 'nuevo_site_west_photo', 50, 'Archivo oeste opcional en edición', 'EDIT', true, 'Sin nuevo archivo'],
    ['ubicacion', 'nuevo_site_west_photo', 51, 'Tipo oeste incorrecto en edición', 'EDIT', 'site_west_photo_type_KO', 'Tipo inválido'],
    // SEARCH
    ['ubicacion', 'id_site', 52, 'Identificador demasiado largo en búsqueda', 'SEARCH', 'id_site_max_size_KO', 'Identificador demasiado largo'],
    ['ubicacion', 'id_site', 53, 'Identificador válido en búsqueda', 'SEARCH', true, 'Identificador correcto'],
    ['ubicacion', 'site_latitud', 54, 'Latitud no numérica en búsqueda', 'SEARCH', 'site_latitud_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_latitud', 55, 'Latitud válida en búsqueda', 'SEARCH', true, 'Latitud válida'],
    ['ubicacion', 'site_longitud', 56, 'Longitud fuera de rango en búsqueda', 'SEARCH', 'site_longitud_range_KO', 'Valor fuera de rango'],
    ['ubicacion', 'site_longitud', 57, 'Longitud válida en búsqueda', 'SEARCH', true, 'Longitud válida'],
    ['ubicacion', 'site_altitude', 58, 'Altitud no numérica en búsqueda', 'SEARCH', 'site_altitude_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_altitude', 59, 'Altitud válida en búsqueda', 'SEARCH', true, 'Altitud válida'],
    ['ubicacion', 'site_locality', 60, 'Localidad demasiado larga en búsqueda', 'SEARCH', 'site_locality_max_size_KO', 'Longitud excedida'],
    ['ubicacion', 'site_locality', 61, 'Localidad con caracteres inválidos en búsqueda', 'SEARCH', 'site_locality_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_locality', 62, 'Localidad válida en búsqueda', 'SEARCH', true, 'Localidad correcta'],
    ['ubicacion', 'site_provider_login', 63, 'Proveedor demasiado largo en búsqueda', 'SEARCH', 'site_provider_login_max_size_KO', 'Longitud excedida'],
    ['ubicacion', 'site_provider_login', 64, 'Proveedor con caracteres inválidos en búsqueda', 'SEARCH', 'site_provider_login_format_KO', 'Formato inválido'],
    ['ubicacion', 'site_provider_login', 65, 'Proveedor válido en búsqueda', 'SEARCH', true, 'Proveedor correcto']
];

let ubicacion_tests_fields = [
    // ADD
    ['ubicacion', 'site_latitud', 1, 1, 'ADD', [{ site_latitud: 'norte' }], 'site_latitud_format_KO'],
    ['ubicacion', 'site_latitud', 2, 2, 'ADD', [{ site_latitud: '95' }], 'site_latitud_range_KO'],
    ['ubicacion', 'site_latitud', 3, 3, 'ADD', [{ site_latitud: '42.5' }], true],
    ['ubicacion', 'site_longitud', 4, 4, 'ADD', [{ site_longitud: 'oeste' }], 'site_longitud_format_KO'],
    ['ubicacion', 'site_longitud', 5, 5, 'ADD', [{ site_longitud: '200' }], 'site_longitud_range_KO'],
    ['ubicacion', 'site_longitud', 6, 6, 'ADD', [{ site_longitud: '-8.7' }], true],
    ['ubicacion', 'site_altitude', 7, 7, 'ADD', [{ site_altitude: 'alto' }], 'site_altitude_format_KO'],
    ['ubicacion', 'site_altitude', 8, 8, 'ADD', [{ site_altitude: '9500' }], 'site_altitude_range_KO'],
    ['ubicacion', 'site_altitude', 9, 9, 'ADD', [{ site_altitude: '450.5' }], true],
    ['ubicacion', 'site_locality', 10, 10, 'ADD', [{ site_locality: 'Ab' }], 'site_locality_min_size_KO'],
    ['ubicacion', 'site_locality', 11, 11, 'ADD', [{ site_locality: 'L'.repeat(130) }], 'site_locality_max_size_KO'],
    ['ubicacion', 'site_locality', 12, 12, 'ADD', [{ site_locality: 'Localidad@' }], 'site_locality_format_KO'],
    ['ubicacion', 'site_locality', 13, 13, 'ADD', [{ site_locality: 'Vigo Centro' }], true],
    ['ubicacion', 'site_provider_login', 14, 14, 'ADD', [{ site_provider_login: 'ab' }], 'site_provider_login_min_size_KO'],
    ['ubicacion', 'site_provider_login', 15, 15, 'ADD', [{ site_provider_login: 'p'.repeat(55) }], 'site_provider_login_max_size_KO'],
    ['ubicacion', 'site_provider_login', 16, 16, 'ADD', [{ site_provider_login: 'prov er' }], 'site_provider_login_format_KO'],
    ['ubicacion', 'site_provider_login', 17, 17, 'ADD', [{ site_provider_login: 'provider_01' }], true],
    // EDIT
    ['ubicacion', 'site_latitud', 18, 18, 'EDIT', [{ site_latitud: '-100' }], 'site_latitud_range_KO'],
    ['ubicacion', 'site_latitud', 19, 19, 'EDIT', [{ site_latitud: '40.1' }], true],
    ['ubicacion', 'site_longitud', 20, 20, 'EDIT', [{ site_longitud: '190' }], 'site_longitud_range_KO'],
    ['ubicacion', 'site_longitud', 21, 21, 'EDIT', [{ site_longitud: '-7.6' }], true],
    ['ubicacion', 'site_altitude', 22, 22, 'EDIT', [{ site_altitude: '-600' }], 'site_altitude_range_KO'],
    ['ubicacion', 'site_altitude', 23, 23, 'EDIT', [{ site_altitude: '320.4' }], true],
    ['ubicacion', 'site_locality', 24, 24, 'EDIT', [{ site_locality: 'Lo' }], 'site_locality_min_size_KO'],
    ['ubicacion', 'site_locality', 25, 25, 'EDIT', [{ site_locality: 'L'.repeat(130) }], 'site_locality_max_size_KO'],
    ['ubicacion', 'site_locality', 26, 26, 'EDIT', [{ site_locality: 'Ciudad#1' }], 'site_locality_format_KO'],
    ['ubicacion', 'site_locality', 27, 27, 'EDIT', [{ site_locality: 'Ourense Centro' }], true],
    ['ubicacion', 'site_provider_login', 28, 28, 'EDIT', [{ site_provider_login: 'ad' }], 'site_provider_login_min_size_KO'],
    ['ubicacion', 'site_provider_login', 29, 29, 'EDIT', [{ site_provider_login: 'p'.repeat(55) }], 'site_provider_login_max_size_KO'],
    ['ubicacion', 'site_provider_login', 30, 30, 'EDIT', [{ site_provider_login: 'prov er' }], 'site_provider_login_format_KO'],
    ['ubicacion', 'site_provider_login', 31, 31, 'EDIT', [{ site_provider_login: 'provider-edit' }], true],
    // SEARCH
    ['ubicacion', 'id_site', 32, 32, 'SEARCH', [{ id_site: 'A'.repeat(21) }], 'id_site_max_size_KO'],
    ['ubicacion', 'id_site', 33, 33, 'SEARCH', [{ id_site: 'SITE' }], true],
    ['ubicacion', 'site_latitud', 34, 34, 'SEARCH', [{ site_latitud: 'oeste' }], 'site_latitud_format_KO'],
    ['ubicacion', 'site_latitud', 35, 35, 'SEARCH', [{ site_latitud: '45' }], true],
    ['ubicacion', 'site_longitud', 36, 36, 'SEARCH', [{ site_longitud: '-200' }], 'site_longitud_range_KO'],
    ['ubicacion', 'site_longitud', 37, 37, 'SEARCH', [{ site_longitud: '10' }], true],
    ['ubicacion', 'site_altitude', 38, 38, 'SEARCH', [{ site_altitude: 'altura' }], 'site_altitude_format_KO'],
    ['ubicacion', 'site_altitude', 39, 39, 'SEARCH', [{ site_altitude: '120.5' }], true],
    ['ubicacion', 'site_locality', 40, 40, 'SEARCH', [{ site_locality: 'L'.repeat(130) }], 'site_locality_max_size_KO'],
    ['ubicacion', 'site_locality', 41, 41, 'SEARCH', [{ site_locality: 'Loc@' }], 'site_locality_format_KO'],
    ['ubicacion', 'site_locality', 42, 42, 'SEARCH', [{ site_locality: 'Vigo' }], true],
    ['ubicacion', 'site_provider_login', 43, 43, 'SEARCH', [{ site_provider_login: 'p'.repeat(55) }], 'site_provider_login_max_size_KO'],
    ['ubicacion', 'site_provider_login', 44, 44, 'SEARCH', [{ site_provider_login: 'prov er' }], 'site_provider_login_format_KO'],
    ['ubicacion', 'site_provider_login', 45, 45, 'SEARCH', [{ site_provider_login: 'prov-01' }], true]
];

let ubicacion_tests_files = [
    // ADD
    ['ubicacion', 'nuevo_site_north_photo', 1, 1, 'ADD', [], 'site_north_photo_required_KO'],
    ['ubicacion', 'nuevo_site_north_photo', 2, 2, 'ADD', [
        { format_name_file: 'foto01.jpg' },
        { type_file: 'application/pdf' },
        { max_size_file: 1500 }
    ], 'site_north_photo_type_KO'],
    ['ubicacion', 'nuevo_site_north_photo', 3, 3, 'ADD', [
        { format_name_file: 'foto01.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 4000000 }
    ], 'site_north_photo_max_size_KO'],
    ['ubicacion', 'nuevo_site_north_photo', 4, 4, 'ADD', [
        { format_name_file: 'foto norte.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'site_north_photo_name_KO'],
    ['ubicacion', 'nuevo_site_north_photo', 5, 5, 'ADD', [
        { format_name_file: 'site_north.png' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], true],
    ['ubicacion', 'nuevo_site_south_photo', 6, 6, 'ADD', [], 'site_south_photo_required_KO'],
    ['ubicacion', 'nuevo_site_south_photo', 7, 7, 'ADD', [
        { format_name_file: 'foto_sur.jpg' },
        { type_file: 'application/pdf' },
        { max_size_file: 1500 }
    ], 'site_south_photo_type_KO'],
    ['ubicacion', 'nuevo_site_south_photo', 8, 8, 'ADD', [
        { format_name_file: 'foto_sur.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 4000000 }
    ], 'site_south_photo_max_size_KO'],
    ['ubicacion', 'nuevo_site_south_photo', 9, 9, 'ADD', [
        { format_name_file: 'foto sur.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'site_south_photo_name_KO'],
    ['ubicacion', 'nuevo_site_south_photo', 10, 10, 'ADD', [
        { format_name_file: 'site_south.png' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], true],
    ['ubicacion', 'nuevo_site_east_photo', 11, 11, 'ADD', [], 'site_east_photo_required_KO'],
    ['ubicacion', 'nuevo_site_east_photo', 12, 12, 'ADD', [
        { format_name_file: 'foto_este.jpg' },
        { type_file: 'application/pdf' },
        { max_size_file: 1500 }
    ], 'site_east_photo_type_KO'],
    ['ubicacion', 'nuevo_site_east_photo', 13, 13, 'ADD', [
        { format_name_file: 'foto_este.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 4000000 }
    ], 'site_east_photo_max_size_KO'],
    ['ubicacion', 'nuevo_site_east_photo', 14, 14, 'ADD', [
        { format_name_file: 'foto este.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'site_east_photo_name_KO'],
    ['ubicacion', 'nuevo_site_east_photo', 15, 15, 'ADD', [
        { format_name_file: 'site_east.png' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], true],
    ['ubicacion', 'nuevo_site_west_photo', 16, 16, 'ADD', [], 'site_west_photo_required_KO'],
    ['ubicacion', 'nuevo_site_west_photo', 17, 17, 'ADD', [
        { format_name_file: 'foto_oeste.jpg' },
        { type_file: 'application/pdf' },
        { max_size_file: 1500 }
    ], 'site_west_photo_type_KO'],
    ['ubicacion', 'nuevo_site_west_photo', 18, 18, 'ADD', [
        { format_name_file: 'foto_oeste.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 4000000 }
    ], 'site_west_photo_max_size_KO'],
    ['ubicacion', 'nuevo_site_west_photo', 19, 19, 'ADD', [
        { format_name_file: 'foto oeste.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'site_west_photo_name_KO'],
    ['ubicacion', 'nuevo_site_west_photo', 20, 20, 'ADD', [
        { format_name_file: 'site_west.png' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], true],
    // EDIT
    ['ubicacion', 'nuevo_site_north_photo', 21, 21, 'EDIT', [], true],
    ['ubicacion', 'nuevo_site_north_photo', 22, 22, 'EDIT', [
        { format_name_file: 'north_update.jpg' },
        { type_file: 'application/pdf' },
        { max_size_file: 1500 }
    ], 'site_north_photo_type_KO'],
    ['ubicacion', 'nuevo_site_north_photo', 23, 23, 'EDIT', [
        { format_name_file: 'north update.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'site_north_photo_name_KO'],
    ['ubicacion', 'nuevo_site_north_photo', 24, 24, 'EDIT', [
        { format_name_file: 'north_update.png' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], true],
    ['ubicacion', 'nuevo_site_south_photo', 25, 25, 'EDIT', [], true],
    ['ubicacion', 'nuevo_site_south_photo', 26, 26, 'EDIT', [
        { format_name_file: 'south_update.jpg' },
        { type_file: 'application/pdf' },
        { max_size_file: 1500 }
    ], 'site_south_photo_type_KO'],
    ['ubicacion', 'nuevo_site_south_photo', 27, 27, 'EDIT', [
        { format_name_file: 'south update.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'site_south_photo_name_KO'],
    ['ubicacion', 'nuevo_site_south_photo', 28, 28, 'EDIT', [
        { format_name_file: 'south_update.png' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], true],
    ['ubicacion', 'nuevo_site_east_photo', 29, 29, 'EDIT', [], true],
    ['ubicacion', 'nuevo_site_east_photo', 30, 30, 'EDIT', [
        { format_name_file: 'east_update.jpg' },
        { type_file: 'application/pdf' },
        { max_size_file: 1500 }
    ], 'site_east_photo_type_KO'],
    ['ubicacion', 'nuevo_site_east_photo', 31, 31, 'EDIT', [
        { format_name_file: 'east update.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'site_east_photo_name_KO'],
    ['ubicacion', 'nuevo_site_east_photo', 32, 32, 'EDIT', [
        { format_name_file: 'east_update.png' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], true],
    ['ubicacion', 'nuevo_site_west_photo', 33, 33, 'EDIT', [], true],
    ['ubicacion', 'nuevo_site_west_photo', 34, 34, 'EDIT', [
        { format_name_file: 'west_update.jpg' },
        { type_file: 'application/pdf' },
        { max_size_file: 1500 }
    ], 'site_west_photo_type_KO'],
    ['ubicacion', 'nuevo_site_west_photo', 35, 35, 'EDIT', [
        { format_name_file: 'west update.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'site_west_photo_name_KO'],
    ['ubicacion', 'nuevo_site_west_photo', 36, 36, 'EDIT', [
        { format_name_file: 'west_update.png' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], true]
];

// Tests for alumnograduacion
let alumnograduacion_def_tests = [
    // ADD
    ['alumnograduacion', 'login', 1, 'Login mínimo 4 caracteres', 'ADD', 'login_min_size_KO', 'Login corto'],
    ['alumnograduacion', 'login', 2, 'Login válido', 'ADD', true, 'Login correcto'],
    ['alumnograduacion', 'password', 3, 'Contraseña mínima de 8 caracteres', 'ADD', 'password_min_size_KO', 'Contraseña corta'],
    ['alumnograduacion', 'password', 4, 'Contraseña válida', 'ADD', true, 'Contraseña correcta'],
    ['alumnograduacion', 'dni', 5, 'DNI longitud incorrecta', 'ADD', 'dni_length_KO', 'Longitud incorrecta'],
    ['alumnograduacion', 'dni', 6, 'DNI correcto', 'ADD', true, 'Documento válido'],
    ['alumnograduacion', 'email', 7, 'Email formato incorrecto', 'ADD', 'email_format_KO', 'Formato inválido'],
    ['alumnograduacion', 'email', 8, 'Email válido', 'ADD', true, 'Email correcto'],
    ['alumnograduacion', 'nuevo_fotoacto', 9, 'Foto obligatoria', 'ADD', 'fotoacto_required_KO', 'Archivo requerido'],
    ['alumnograduacion', 'nuevo_fotoacto', 10, 'Foto válida', 'ADD', true, 'Archivo válido'],
    // EDIT
    ['alumnograduacion', 'login', 11, 'Login con caracteres inválidos en edición', 'EDIT', 'login_format_KO', 'Formato incorrecto'],
    ['alumnograduacion', 'login', 12, 'Login válido en edición', 'EDIT', true, 'Login correcto'],
    ['alumnograduacion', 'password', 13, 'Contraseña con caracteres inválidos en edición', 'EDIT', 'password_format_KO', 'Formato inválido'],
    ['alumnograduacion', 'password', 14, 'Contraseña válida en edición', 'EDIT', true, 'Contraseña correcta'],
    ['alumnograduacion', 'dni', 15, 'DNI inválido en edición', 'EDIT', 'dni_format_KO', 'Formato inválido'],
    ['alumnograduacion', 'dni', 16, 'DNI válido en edición', 'EDIT', true, 'Documento válido'],
    ['alumnograduacion', 'email', 17, 'Email inválido en edición', 'EDIT', 'email_format_KO', 'Formato incorrecto'],
    ['alumnograduacion', 'email', 18, 'Email válido en edición', 'EDIT', true, 'Email correcto'],
    ['alumnograduacion', 'nuevo_fotoacto', 19, 'Archivo opcional en edición', 'EDIT', true, 'Sin nuevo archivo'],
    ['alumnograduacion', 'nuevo_fotoacto', 20, 'Tipo incorrecto en edición', 'EDIT', 'fotoacto_type_KO', 'Tipo inválido'],
    // SEARCH
    ['alumnograduacion', 'login', 21, 'Login con caracteres inválidos en búsqueda', 'SEARCH', 'login_format_KO', 'Formato incorrecto'],
    ['alumnograduacion', 'login', 22, 'Login válido en búsqueda', 'SEARCH', true, 'Login correcto'],
    ['alumnograduacion', 'password', 23, 'Contraseña demasiado larga en búsqueda', 'SEARCH', 'password_max_size_KO', 'Contraseña demasiado larga'],
    ['alumnograduacion', 'password', 24, 'Contraseña válida en búsqueda', 'SEARCH', true, 'Contraseña correcta'],
    ['alumnograduacion', 'dni', 25, 'DNI demasiado largo en búsqueda', 'SEARCH', 'dni_length_KO', 'Longitud incorrecta'],
    ['alumnograduacion', 'dni', 26, 'DNI con formato incorrecto en búsqueda', 'SEARCH', 'dni_format_KO', 'Formato inválido'],
    ['alumnograduacion', 'dni', 27, 'DNI válido en búsqueda', 'SEARCH', true, 'Documento válido'],
    ['alumnograduacion', 'email', 28, 'Email formato incorrecto en búsqueda', 'SEARCH', 'email_format_KO', 'Formato inválido'],
    ['alumnograduacion', 'email', 29, 'Email válido en búsqueda', 'SEARCH', true, 'Email correcto'],
    // Cobertura adicional de campos restantes
    ['alumnograduacion', 'nombre', 30, 'Nombre demasiado corto en alta', 'ADD', 'nombre_min_size_KO', 'Nombre corto'],
    ['alumnograduacion', 'nombre', 31, 'Nombre válido en alta', 'ADD', true, 'Nombre válido'],
    ['alumnograduacion', 'apellidos', 32, 'Apellidos demasiado cortos en alta', 'ADD', 'apellidos_min_size_KO', 'Apellidos cortos'],
    ['alumnograduacion', 'apellidos', 33, 'Apellidos válidos en alta', 'ADD', true, 'Apellidos válidos'],
    ['alumnograduacion', 'titulacion', 34, 'Titulación fuera del catálogo', 'ADD', 'titulacion_value_KO', 'Titulación inválida'],
    ['alumnograduacion', 'titulacion', 35, 'Titulación válida', 'ADD', true, 'Titulación correcta'],
    ['alumnograduacion', 'direccion', 36, 'Dirección excede tamaño máximo', 'ADD', 'direccion_max_size_KO', 'Dirección demasiado larga'],
    ['alumnograduacion', 'direccion', 37, 'Dirección válida', 'ADD', true, 'Dirección aceptada'],
    ['alumnograduacion', 'nombre', 38, 'Nombre con caracteres inválidos en edición', 'EDIT', 'nombre_format_KO', 'Formato inválido'],
    ['alumnograduacion', 'nombre', 39, 'Nombre válido en edición', 'EDIT', true, 'Nombre correcto'],
    ['alumnograduacion', 'apellidos', 40, 'Apellidos con caracteres inválidos en edición', 'EDIT', 'apellidos_format_KO', 'Formato inválido'],
    ['alumnograduacion', 'apellidos', 41, 'Apellidos válidos en edición', 'EDIT', true, 'Apellidos correctos'],
    ['alumnograduacion', 'titulacion', 42, 'Titulación inválida en edición', 'EDIT', 'titulacion_value_KO', 'Titulación no permitida'],
    ['alumnograduacion', 'titulacion', 43, 'Titulación válida en edición', 'EDIT', true, 'Titulación permitida'],
    ['alumnograduacion', 'direccion', 44, 'Dirección inválida en edición', 'EDIT', 'direccion_format_KO', 'Formato incorrecto'],
    ['alumnograduacion', 'direccion', 45, 'Dirección válida en edición', 'EDIT', true, 'Dirección correcta'],
    ['alumnograduacion', 'nombre', 46, 'Nombre con caracteres inválidos en búsqueda', 'SEARCH', 'nombre_format_KO', 'Formato incorrecto'],
    ['alumnograduacion', 'nombre', 47, 'Nombre válido en búsqueda', 'SEARCH', true, 'Nombre correcto'],
    ['alumnograduacion', 'apellidos', 48, 'Apellidos con caracteres inválidos en búsqueda', 'SEARCH', 'apellidos_format_KO', 'Formato incorrecto'],
    ['alumnograduacion', 'apellidos', 49, 'Apellidos válidos en búsqueda', 'SEARCH', true, 'Apellidos correctos'],
    ['alumnograduacion', 'titulacion', 50, 'Titulación inválida en búsqueda', 'SEARCH', 'titulacion_value_KO', 'Titulación no válida'],
    ['alumnograduacion', 'titulacion', 51, 'Titulación válida en búsqueda', 'SEARCH', true, 'Titulación correcta'],
    ['alumnograduacion', 'direccion', 52, 'Dirección demasiado larga en búsqueda', 'SEARCH', 'direccion_max_size_KO', 'Dirección demasiado larga'],
    ['alumnograduacion', 'direccion', 53, 'Dirección válida en búsqueda', 'SEARCH', true, 'Dirección correcta']
];

let alumnograduacion_tests_fields = [
    // ADD
    ['alumnograduacion', 'login', 1, 1, 'ADD', [{ login: 'abc' }], 'login_min_size_KO'],
    ['alumnograduacion', 'login', 2, 2, 'ADD', [{ login: 'ALUM123' }], true],
    ['alumnograduacion', 'password', 3, 3, 'ADD', [{ password: 'short' }], 'password_min_size_KO'],
    ['alumnograduacion', 'password', 4, 4, 'ADD', [{ password: 'clave segura' }], true],
    ['alumnograduacion', 'dni', 5, 5, 'ADD', [{ dni: '1234567' }], 'dni_length_KO'],
    ['alumnograduacion', 'dni', 6, 6, 'ADD', [{ dni: '12345678Z' }], true],
    ['alumnograduacion', 'email', 7, 7, 'ADD', [{ email: 'correo-sin-arroba' }], 'email_format_KO'],
    ['alumnograduacion', 'email', 8, 8, 'ADD', [{ email: 'usuario@example.com' }], true],
    // EDIT
    ['alumnograduacion', 'login', 9, 9, 'EDIT', [{ login: 'user!' }], 'login_format_KO'],
    ['alumnograduacion', 'login', 10, 10, 'EDIT', [{ login: 'ALUM456' }], true],
    ['alumnograduacion', 'password', 11, 11, 'EDIT', [{ password: 'clave123' }], 'password_format_KO'],
    ['alumnograduacion', 'password', 12, 12, 'EDIT', [{ password: 'clave segura' }], true],
    ['alumnograduacion', 'dni', 13, 13, 'EDIT', [{ dni: '12345678A' }], 'dni_format_KO'],
    ['alumnograduacion', 'dni', 14, 14, 'EDIT', [{ dni: '12345678Z' }], true],
    ['alumnograduacion', 'email', 15, 15, 'EDIT', [{ email: 'correo-sin-arroba' }], 'email_format_KO'],
    ['alumnograduacion', 'email', 16, 16, 'EDIT', [{ email: 'edicion@example.com' }], true],
    // SEARCH
    ['alumnograduacion', 'login', 17, 17, 'SEARCH', [{ login: 'user!' }], 'login_format_KO'],
    ['alumnograduacion', 'login', 18, 18, 'SEARCH', [{ login: 'ALUM' }], true],
    ['alumnograduacion', 'password', 19, 19, 'SEARCH', [{ password: 'a'.repeat(65) }], 'password_max_size_KO'],
    ['alumnograduacion', 'password', 20, 20, 'SEARCH', [{ password: 'busqueda' }], true],
    ['alumnograduacion', 'dni', 21, 21, 'SEARCH', [{ dni: '123456789A' }], 'dni_length_KO'],
    ['alumnograduacion', 'dni', 22, 22, 'SEARCH', [{ dni: '1234A' }], 'dni_format_KO'],
    ['alumnograduacion', 'dni', 23, 23, 'SEARCH', [{ dni: '12345678' }], true],
    ['alumnograduacion', 'email', 24, 24, 'SEARCH', [{ email: 'correo-sin-arroba' }], 'email_format_KO'],
    ['alumnograduacion', 'email', 25, 25, 'SEARCH', [{ email: 'usuario@example.com' }], true],
    // Cobertura adicional de campos restantes
    ['alumnograduacion', 'nombre', 26, 26, 'ADD', [{ nombre: 'A' }], 'nombre_min_size_KO'],
    ['alumnograduacion', 'nombre', 27, 27, 'ADD', [{ nombre: 'Ana María' }], true],
    ['alumnograduacion', 'apellidos', 28, 28, 'ADD', [{ apellidos: 'Li' }], 'apellidos_min_size_KO'],
    ['alumnograduacion', 'apellidos', 29, 29, 'ADD', [{ apellidos: 'Pérez Gómez' }], true],
    ['alumnograduacion', 'titulacion', 30, 30, 'ADD', [{ titulacion: 'INVALID' }], 'titulacion_value_KO'],
    ['alumnograduacion', 'titulacion', 31, 31, 'ADD', [{ titulacion: 'MIA' }], true],
    ['alumnograduacion', 'direccion', 32, 32, 'ADD', [{ direccion: 'A'.repeat(101) }], 'direccion_max_size_KO'],
    ['alumnograduacion', 'direccion', 33, 33, 'ADD', [{ direccion: 'Rúa do Franco, 10' }], true],
    ['alumnograduacion', 'nombre', 34, 34, 'EDIT', [{ nombre: 'Ana123' }], 'nombre_format_KO'],
    ['alumnograduacion', 'nombre', 35, 35, 'EDIT', [{ nombre: 'Ana María' }], true],
    ['alumnograduacion', 'apellidos', 36, 36, 'EDIT', [{ apellidos: 'García1' }], 'apellidos_format_KO'],
    ['alumnograduacion', 'apellidos', 37, 37, 'EDIT', [{ apellidos: 'García Pérez' }], true],
    ['alumnograduacion', 'titulacion', 38, 38, 'EDIT', [{ titulacion: 'INVALIDA' }], 'titulacion_value_KO'],
    ['alumnograduacion', 'titulacion', 39, 39, 'EDIT', [{ titulacion: 'PCEO' }], true],
    ['alumnograduacion', 'direccion', 40, 40, 'EDIT', [{ direccion: 'Calle@Principal' }], 'direccion_format_KO'],
    ['alumnograduacion', 'direccion', 41, 41, 'EDIT', [{ direccion: 'Avda. Principal 15' }], true],
    ['alumnograduacion', 'nombre', 42, 42, 'SEARCH', [{ nombre: 'Ana123' }], 'nombre_format_KO'],
    ['alumnograduacion', 'nombre', 43, 43, 'SEARCH', [{ nombre: 'Ana' }], true],
    ['alumnograduacion', 'apellidos', 44, 44, 'SEARCH', [{ apellidos: 'Pérez1' }], 'apellidos_format_KO'],
    ['alumnograduacion', 'apellidos', 45, 45, 'SEARCH', [{ apellidos: 'Pérez' }], true],
    ['alumnograduacion', 'titulacion', 46, 46, 'SEARCH', [{ titulacion: 'BAD' }], 'titulacion_value_KO'],
    ['alumnograduacion', 'titulacion', 47, 47, 'SEARCH', [{ titulacion: 'GREI' }], true],
    ['alumnograduacion', 'direccion', 48, 48, 'SEARCH', [{ direccion: 'A'.repeat(101) }], 'direccion_max_size_KO'],
    ['alumnograduacion', 'direccion', 49, 49, 'SEARCH', [{ direccion: 'Praza Maior 3' }], true]
];

let alumnograduacion_tests_files = [
    // ADD
    ['alumnograduacion', 'nuevo_fotoacto', 1, 1, 'ADD', [], 'fotoacto_required_KO'],
    ['alumnograduacion', 'nuevo_fotoacto', 2, 2, 'ADD', [
        { format_name_file: 'acto.jpg' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], 'fotoacto_type_KO'],
    ['alumnograduacion', 'nuevo_fotoacto', 3, 3, 'ADD', [
        { format_name_file: 'acto gala.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'fotoacto_name_KO'],
    ['alumnograduacion', 'nuevo_fotoacto', 4, 4, 'ADD', [
        { format_name_file: 'acto2024.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], true],
    // EDIT
    ['alumnograduacion', 'nuevo_fotoacto', 5, 5, 'EDIT', [], true],
    ['alumnograduacion', 'nuevo_fotoacto', 6, 6, 'EDIT', [
        { format_name_file: 'acto2024.jpg' },
        { type_file: 'image/png' },
        { max_size_file: 1500 }
    ], 'fotoacto_type_KO'],
    ['alumnograduacion', 'nuevo_fotoacto', 7, 7, 'EDIT', [
        { format_name_file: 'acto gala.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], 'fotoacto_name_KO'],
    ['alumnograduacion', 'nuevo_fotoacto', 8, 8, 'EDIT', [
        { format_name_file: 'acto2025.jpg' },
        { type_file: 'image/jpeg' },
        { max_size_file: 1500 }
    ], true]
];