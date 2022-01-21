export const formCrearPlatoValidation = (objForm) => {
    let errors = {};
    let formIsValid = true;
    
    if (!objForm.nombre) {
        formIsValid = false;
        errors["nombre"] = "*Por favor, ingrese un nombre";
    }
    
    if (!objForm.precio) {
        formIsValid = false;
        errors["precio"] = "*Por favor, ingrese una precio";
    }
    
    if (!objForm.categoria) {
        formIsValid = false;
        errors["categoria"] = "*Por favor, seleccione una categoria";
    }
    
    if (!objForm.imagen) {
        formIsValid = false;
        errors["imagen"] = "*Por favor, seleccione una imagen";
    }
    return {
        errors,
        formIsValid,
    };
}