import emailjs from "@emailjs/browser";

export function sendMail(formElement: HTMLFormElement | null): boolean {
    formElement != null ?
    emailjs.sendForm("service_dmy2jci", "template_gmjvb2h", formElement, "2ZfQ8_J4Kqo1otKdv")  :
    null;
    return formElement != null;
}