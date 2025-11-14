var textos_EN = {
	// general texts
	'text_titulo_app': 'ET2 UI Interface',
	'text_titulo_menu': 'Menu options',
	'text_titulo_pie': 'Footer',
	'label_seleccioncolumnas': 'Select columns',

	// menu
	'text_menu_alumnograduacion': 'Graduation students',
	'text_menu_articulo': 'Articles',
	'text_menu_ubicacion': 'Locations',

	// page titles
	'text_titulo_page_alumnograduacion': 'Graduation students management',
	'text_titulo_page_articulo': 'Scientific articles management',
	'text_titulo_page_ubicacion': 'Locations management',

	// form headings alumnograduacion
	'text_contenido_titulo_form_alumnograduacion_ADD': 'Add student',
	'text_contenido_titulo_form_alumnograduacion_EDIT': 'Edit student',
	'text_contenido_titulo_form_alumnograduacion_DELETE': 'Remove student',
	'text_contenido_titulo_form_alumnograduacion_SHOWCURRENT': 'Student detail',
	'text_contenido_titulo_form_alumnograduacion_SEARCH': 'Search students',

	// form headings articulo
	'text_contenido_titulo_form_articulo_ADD': 'Add article',
	'text_contenido_titulo_form_articulo_EDIT': 'Edit article',
	'text_contenido_titulo_form_articulo_DELETE': 'Remove article',
	'text_contenido_titulo_form_articulo_SHOWCURRENT': 'Article detail',
	'text_contenido_titulo_form_articulo_SEARCH': 'Search articles',

	// form headings ubicacion
	'text_contenido_titulo_form_ubicacion_ADD': 'Add location',
	'text_contenido_titulo_form_ubicacion_EDIT': 'Edit location',
	'text_contenido_titulo_form_ubicacion_DELETE': 'Remove location',
	'text_contenido_titulo_form_ubicacion_SHOWCURRENT': 'Location detail',
	'text_contenido_titulo_form_ubicacion_SEARCH': 'Search locations',

	// labels alumnograduacion
	'label_login': 'Login',
	'label_password': 'Password',
  
	'label_nombre': 'First name',
	'label_apellidos': 'Last name',
	'label_titulacion': 'Degree',
	'label_dni': 'ID/NIE',
	'label_telefono': 'Phone',
	'label_direccion': 'Address',
	'label_email': 'Email',
	'label_fotoacto': 'Ceremony photo',
	'label_nuevo_fotoacto': 'New ceremony photo',

	// labels articulo
	'label_codigo': 'Code',
	'label_autores': 'Authors',
	'label_titulo_articulo': 'Article title',
	'label_titulo_revista': 'Journal title',
	'label_issn': 'ISSN',
	'label_volumen': 'Volume',
	'label_pagina_inicio': 'Start page',
	'label_pagina_fin': 'End page',
	'label_fecha_publicacion': 'Publication date',
	'label_estado': 'Status',
	'label_ficheropdf': 'PDF file',
	'label_nuevo_ficheropdf': 'New PDF',

	// labels ubicacion
	'label_id_site': 'Identifier',
	'label_site_latitud': 'Latitude',
	'label_site_longitud': 'Longitude',
	'label_site_altitude': 'Altitude',
	'label_site_locality': 'Locality',
	'label_site_provider_login': 'Provider login',
	'label_site_north_photo': 'North photo',
	'label_nuevo_site_north_photo': 'New north photo',
	'label_site_south_photo': 'South photo',
	'label_nuevo_site_south_photo': 'New south photo',
	'label_site_east_photo': 'East photo',
	'label_nuevo_site_east_photo': 'New east photo',
	'label_site_west_photo': 'West photo',
	'label_nuevo_site_west_photo': 'New west photo',

	// errors alumnograduacion
	'LOGIN_EMPTY_KO': 'Login is required.',
	'LOGIN_MIN_SIZE_KO': 'Login must contain at least 4 characters.',
	'LOGIN_MAX_SIZE_KO': 'Login must not exceed 15 characters.',
	'LOGIN_FORMAT_KO': 'Login can only contain letters, digits or underscore, beginning with a letter.',
	'PASSWORD_EMPTY_KO': 'Password is required.',
	'PASSWORD_MIN_SIZE_KO': 'Password must contain at least 8 characters.',
	'PASSWORD_MAX_SIZE_KO': 'Password must not exceed 64 characters.',
	'PASSWORD_FORMAT_KO': 'Password can only contain letters, digits, dot, dash or underscore.',

	'NOMBRE_EMPTY_KO': 'First name is required.',
	'NOMBRE_MIN_SIZE_KO': 'First name must contain at least 2 characters.',
	'NOMBRE_MAX_SIZE_KO': 'First name must not exceed 25 characters.',
	'NOMBRE_FORMAT_KO': 'First name can only contain letters and spaces.',

	'APELLIDOS_EMPTY_KO': 'Last name is required.',
	'APELLIDOS_MIN_SIZE_KO': 'Last name must contain at least 2 characters.',
	'APELLIDOS_MAX_SIZE_KO': 'Last name must not exceed 35 characters.',
	'APELLIDOS_FORMAT_KO': 'Last name can only contain letters and spaces.',

	'DIRECCION_EMPTY_KO': 'Address is required.',
	'DIRECCION_MIN_SIZE_KO': 'Address must contain at least 5 characters.',
	'DIRECCION_MAX_SIZE_KO': 'Address must not exceed 100 characters.',
	'DIRECCION_FORMAT_KO': 'Address contains invalid characters.',

	'EMAIL_EMPTY_KO': 'Email is required.',
	'EMAIL_FORMAT_KO': 'Invalid email format.',

	'TITULACION_EMPTY_KO': 'Degree selection is required.',
	'TITULACION_NOT_VALID_KO': 'Selected degree is not valid.',

	'TELEFONO_EMPTY_KO': 'Phone is required.',
	'TELEFONO_FORMAT_KO': 'Phone must contain exactly 9 digits.',

	'DNI_EMPTY_KO': 'ID/NIE is required.',
	'DNI_LETTER_KO': 'Invalid control letter for ID.',
	'NIE_LETTER_KO': 'Invalid control letter for NIE.',
	'DNI_FORMAT_KO': 'Invalid ID/NIE format.',

	'FOTOACTO_FILE_EMPTY_KO': 'You must upload an image.',
	'FOTOACTO_FILE_SIZE_KO': 'Image must be smaller than 2MB.',
	'FOTOACTO_EXTENSION_KO': 'Only JPG or PNG images are allowed.',
	'FOTOACTO_FORMAT_KO': 'File name can only contain letters, digits, dash and underscore.',

	// errors articulo
	'CODIGO_EMPTY_KO': 'Code is required.',
	'CODIGO_FORMAT_KO': 'Code must be an integer number.',
	'CODIGO_RANGE_KO': 'Code must be between 1 and 99,999,999.',
	'AUTORES_EMPTY_KO': 'Authors are required.',
	'AUTORES_MIN_SIZE_KO': 'Authors must contain at least 3 characters.',
	'AUTORES_MAX_SIZE_KO': 'Authors must not exceed 200 characters.',
	'AUTORES_FORMAT_KO': 'Authors contain invalid characters.',
	'TITULO_ARTICULO_EMPTY_KO': 'Article title is required.',
	'TITULO_ARTICULO_MIN_SIZE_KO': 'Article title must contain at least 3 characters.',
	'TITULO_ARTICULO_MAX_SIZE_KO': 'Article title must not exceed 100 characters.',
	'TITULO_ARTICULO_FORMAT_KO': 'Article title contains invalid characters.',
	'TITULO_REVISTA_EMPTY_KO': 'Journal title is required.',
	'TITULO_REVISTA_MIN_SIZE_KO': 'Journal title must contain at least 3 characters.',
	'TITULO_REVISTA_MAX_SIZE_KO': 'Journal title must not exceed 100 characters.',
	'TITULO_REVISTA_FORMAT_KO': 'Journal title contains invalid characters.',
	'ISSN_EMPTY_KO': 'ISSN is required.',
	'ISSN_FORMAT_KO': 'ISSN must follow the format 1234-5678.',
	'VOLUMEN_EMPTY_KO': 'Volume is required.',
	'VOLUMEN_FORMAT_KO': 'Volume must contain up to 4 digits.',
	'PAGINA_INICIO_EMPTY_KO': 'Start page is required.',
	'PAGINA_INICIO_FORMAT_KO': 'Start page must contain up to 4 digits.',
	'PAGINA_FIN_EMPTY_KO': 'End page is required.',
	'PAGINA_FIN_FORMAT_KO': 'End page must contain up to 4 digits.',
	'PAGINA_FIN_RANGE_KO': 'End page must be greater than or equal to the start page.',
	'FECHA_PUBLICACION_EMPTY_KO': 'Publication date is required.',
	'FECHA_PUBLICACION_FORMAT_KO': 'Publication date is not valid.',
	'FECHA_PUBLICACION_FUTURE_KO': 'Publication date cannot be in the future.',
	'ESTADO_EMPTY_KO': 'Status is required.',
	'ESTADO_NOT_VALID_KO': 'Selected status is not valid.',
	'FICHEROPDF_FILE_EMPTY_KO': 'PDF file is required.',
	'FICHEROPDF_FILE_SIZE_KO': 'PDF file must be smaller than 5MB.',
	'FICHEROPDF_EXTENSION_KO': 'Only PDF files are allowed.',
	'FICHEROPDF_FORMAT_KO': 'PDF file name can only contain letters, digits, dash and underscore.',

	// errors ubicacion
	'ID_SITE_EMPTY_KO': 'Identifier is required.',
	'ID_SITE_FORMAT_KO': 'Identifier must be an integer.',
	'ID_SITE_RANGE_KO': 'Identifier must be between 1 and 99,999,999.',
	'LATITUD_EMPTY_KO': 'Latitude is required.',
	'LATITUD_FORMAT_KO': 'Latitude must be a decimal number with 6 decimals.',
	'LATITUD_RANGE_KO': 'Latitude must be between -90 and 90.',
	'LONGITUD_EMPTY_KO': 'Longitude is required.',
	'LONGITUD_FORMAT_KO': 'Longitude must be a decimal number with 6 decimals.',
	'LONGITUD_RANGE_KO': 'Longitude must be between -180 and 180.',
	'ALTITUD_EMPTY_KO': 'Altitude is required.',
	'ALTITUD_FORMAT_KO': 'Altitude must be an integer.',
	'ALTITUD_RANGE_KO': 'Altitude must be between -500 and 9000.',
	'LOCALITY_EMPTY_KO': 'Locality is required.',
	'LOCALITY_MIN_SIZE_KO': 'Locality must contain at least 2 characters.',
	'LOCALITY_MAX_SIZE_KO': 'Locality must not exceed 40 characters.',
	'LOCALITY_FORMAT_KO': 'Locality contains invalid characters.',
	'PROVIDER_LOGIN_EMPTY_KO': 'Provider login is required.',
	'PROVIDER_LOGIN_MIN_SIZE_KO': 'Provider login must contain at least 3 characters.',
	'PROVIDER_LOGIN_MAX_SIZE_KO': 'Provider login must not exceed 30 characters.',
	'PROVIDER_LOGIN_FORMAT_KO': 'Provider login contains invalid characters.',

	'SITE_NORTH_PHOTO_FILE_EMPTY_KO': 'North photo is required.',
	'SITE_NORTH_PHOTO_FILE_SIZE_KO': 'North photo must be smaller than 3MB.',
	'SITE_NORTH_PHOTO_EXTENSION_KO': 'North photo must be JPG or PNG.',
	'SITE_NORTH_PHOTO_FORMAT_KO': 'Invalid file name for north photo.',

	'SITE_SOUTH_PHOTO_FILE_EMPTY_KO': 'South photo is required.',
	'SITE_SOUTH_PHOTO_FILE_SIZE_KO': 'South photo must be smaller than 3MB.',
	'SITE_SOUTH_PHOTO_EXTENSION_KO': 'South photo must be JPG or PNG.',
	'SITE_SOUTH_PHOTO_FORMAT_KO': 'Invalid file name for south photo.',

	'SITE_EAST_PHOTO_FILE_EMPTY_KO': 'East photo is required.',
	'SITE_EAST_PHOTO_FILE_SIZE_KO': 'East photo must be smaller than 3MB.',
	'SITE_EAST_PHOTO_EXTENSION_KO': 'East photo must be JPG or PNG.',
	'SITE_EAST_PHOTO_FORMAT_KO': 'Invalid file name for east photo.',

	'SITE_WEST_PHOTO_FILE_EMPTY_KO': 'West photo is required.',
	'SITE_WEST_PHOTO_FILE_SIZE_KO': 'West photo must be smaller than 3MB.',
	'SITE_WEST_PHOTO_EXTENSION_KO': 'West photo must be JPG or PNG.',
	'SITE_WEST_PHOTO_FORMAT_KO': 'Invalid file name for west photo.',

	// generic
	'RECORDSET_VACIO': 'There are no results for your search.'
};
