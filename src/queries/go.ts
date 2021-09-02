/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export const symbols = `
(field_declaration
	name: (field_identifier) @field.name
)@field

(method_spec
	name: (field_identifier) @method.name
) @method

(type_alias
	name: (type_identifier) @string.name
) @string

(function_declaration
	name: (identifier) @function.name
) @function

(method_declaration
	name: (field_identifier) @method.name
) @method

;; variables defined in the package
(source_file
	(var_declaration
		(var_spec
			name: (identifier) @variable.name
		) @variable
	)
)

;; lots of type_spec, must be mutually exclusive
(type_spec 
	name: (type_identifier) @interface.name
	type: (interface_type)
) @interface

(type_spec 
	name: (type_identifier) @function.name
	type: (function_type)
) @function

(type_spec 
	name: (type_identifier) @struct.name
	type: (struct_type)
) @struct

(type_spec
	name: (type_identifier) @struct.name
	type: (map_type)
) @struct

(type_spec
	name: (type_identifier) @struct.name
	type: (pointer_type)
) @struct

(type_spec
	name: (type_identifier) @event.name
	type: (channel_type)
) @event
`;

export const usages = `
(call_expression
	function: [
		(identifier) @usage.function
		(selector_expression (field_identifier) @usage.function) 
	]
)

(selector_expression
	field: (field_identifier) @usage.field
)

(type_identifier) @usage
`;
