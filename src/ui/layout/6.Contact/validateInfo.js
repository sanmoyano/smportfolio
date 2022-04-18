export default function validateInfo(info) {
    let errors = {};

    if (!info.name.trim()) {
        errors.name = "Name is required";
    } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        errors.name = "Name must be letters only";
    }

    if (!info.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(info.email)) {
        errors.email = "Email must be valid";
    }

    return errors;
}
