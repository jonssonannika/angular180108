
import 'zone.js';
import 'reflect-metadata';

switch(document.body.getAttribute("data-demoid")){
	
		case "animation": require("./animation/main.ts"); break;
		case "animation_keyframe": require("./animation_keyframe/main.ts"); break;
		case "asyncpipe": require("./asyncpipe/main.ts"); break;
		case "autofocus": require("./autofocus/main.ts"); break;
		case "autofocus_clever": require("./autofocus_clever/main.ts"); break;
		case "catch_event": require("./catch_event/main.ts"); break;
		case "catch_event_variable": require("./catch_event_variable/main.ts"); break;
		case "checkbox": require("./checkbox/main.ts"); break;
		case "childinput": require("./childinput/main.ts"); break;
		case "childoutput": require("./childoutput/main.ts"); break;
		case "class-many": require("./class-many/main.ts"); break;
		case "class-single": require("./class-single/main.ts"); break;
		case "composition": require("./composition/main.ts"); break;
		case "composition_scoped": require("./composition_scoped/main.ts"); break;
		case "computedprop": require("./computedprop/main.ts"); break;
		case "conditionalclass": require("./conditionalclass/main.ts"); break;
		case "confirm": require("./confirm/main.ts"); break;
		case "confirm_hook": require("./confirm_hook/main.ts"); break;
		case "csstest": require("./csstest/main.ts"); break;
		case "dropdown": require("./dropdown/main.ts"); break;
		case "elementmanip": require("./elementmanip/main.ts"); break;
		case "elementmanipcomp": require("./elementmanipcomp/main.ts"); break;
		case "forloop": require("./forloop/main.ts"); break;
		case "form": require("./form/main.ts"); break;
		case "form_reactive": require("./form_reactive/main.ts"); break;
		case "hashref": require("./hashref/main.ts"); break;
		case "hellochanging": require("./hellochanging/main.ts"); break;
		case "hellosomeone": require("./hellosomeone/main.ts"); break;
		case "helloworld": require("./helloworld/main.ts"); break;
		case "highlighter": require("./highlighter/main.ts"); break;
		case "hostbinding": require("./hostbinding/main.ts"); break;
		case "hostlistener": require("./hostlistener/main.ts"); break;
		case "if": require("./if/main.ts"); break;
		case "ifelse": require("./ifelse/main.ts"); break;
		case "ifelsetemplate": require("./ifelsetemplate/main.ts"); break;
		case "initializeprops": require("./initializeprops/main.ts"); break;
		case "injection_class": require("./injection_class/main.ts"); break;
		case "injection_class_dep_inject": require("./injection_class_dep_inject/main.ts"); break;
		case "injection_value_factory_dep": require("./injection_value_factory_dep/main.ts"); break;
		case "injection_value_opaque": require("./injection_value_opaque/main.ts"); break;
		case "injection_value_string": require("./injection_value_string/main.ts"); break;
		case "input": require("./input/main.ts"); break;
		case "interpolation": require("./interpolation/main.ts"); break;
		case "jsondebug": require("./jsondebug/main.ts"); break;
		case "methodvsgetter": require("./methodvsgetter/main.ts"); break;
		case "pagination": require("./pagination/main.ts"); break;
		case "passingelements": require("./passingelements/main.ts"); break;
		case "passingelements_split": require("./passingelements_split/main.ts"); break;
		case "pipe": require("./pipe/main.ts"); break;
		case "property": require("./property/main.ts"); break;
		case "read_attribute_bind": require("./read_attribute_bind/main.ts"); break;
		case "read_attribute_brackets": require("./read_attribute_brackets/main.ts"); break;
		case "read_attribute_interpolation": require("./read_attribute_interpolation/main.ts"); break;
		case "read_interpolation_dynamic": require("./read_interpolation_dynamic/main.ts"); break;
		case "read_interpolation_static": require("./read_interpolation_static/main.ts"); break;
		case "router": require("./router/main.ts"); break;
		case "style-many": require("./style-many/main.ts"); break;
		case "style-single": require("./style-single/main.ts"); break;
		case "submitname_binding": require("./submitname_binding/main.ts"); break;
		case "submitname_ref": require("./submitname_ref/main.ts"); break;
		case "submitname_streams": require("./submitname_streams/main.ts"); break;
		case "submitname_viewchild": require("./submitname_viewchild/main.ts"); break;
		case "superhero_naive": require("./superhero_naive/main.ts"); break;
		case "superhero_ngmodel_short": require("./superhero_ngmodel_short/main.ts"); break;
		case "superhero_ngmodel_verbose": require("./superhero_ngmodel_verbose/main.ts"); break;
		case "switch": require("./switch/main.ts"); break;
		case "todo": require("./todo/main.ts"); break;
		case "twoway": require("./twoway/main.ts"); break;
		case "unless": require("./unless/main.ts"); break;
		case "validation": require("./validation/main.ts"); break;
		case "validation_reactive": require("./validation_reactive/main.ts"); break;
		case "view_event_on": require("./view_event_on/main.ts"); break;
}
