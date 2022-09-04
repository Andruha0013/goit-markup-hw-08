(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
        inputPhone: document.querySelector("#phone"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.inputPhone.addEventListener("change",clearPhonenumber);


    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }

    function clearPhonenumber()
    {
        refs.inputPhone.value=refs.inputPhone.value.replace(/\-|\(|\)/g,"");
    }

})();