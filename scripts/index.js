$(() => {
    const form = $("#form")

    const nameInput = $("#name-input")
    const numberInput = $("#number-input")
    const monthInput = $("#month-input")
    const yearInput = $("#year-input")
    const cvcInput = $("#cvc-input")

    const nameDisplay = $("#name-display")
    const numberDisplay = $("#number-display")
    const monthDisplay = $("#month-display")
    const yearDisplay = $("#year-display")
    const cvcDisplay = $("#cvc-display")

    nameInput.on("keyup blur", (e) => {
        const value = e.target.value
        if (e.type === "keyup") {
            $(".name-err").remove()
            nameInput.removeClass("input-err")
            nameDisplay.text(value || "Jane Appleseed")
        } else if (e.type === "blur" && !value.match(/[^\s^\d]+\s[^\s^\d]+/)) {
            $(".name-err").remove()
            nameInput.addClass("input-err")
            if (value.length) {
                nameInput.after("<p class='error-msg name-err'>Wrong format</p>")
            } else {
                nameInput.after("<p class='error-msg name-err'>Can't be blank</p>")
            }
        }
    })

    numberInput.on("keyup blur", (e) => {
        const value = e.target.value
        if (e.type === "keyup") {
            $(".number-err").remove()
            numberInput.removeClass("input-err")
            numberDisplay.text(value || "0000 0000 0000 0000")
        } else if (e.type === "blur" && (!value.match(/^(\d{4}\s){3}(\d{4})/) || value.length > 19)) {
            $(".number-err").remove()
            numberInput.addClass("input-err")
            if (value.length) {
                numberInput.after("<p class='error-msg number-err'>Wrong format</p>")
            } else {
                numberInput.after("<p class='error-msg number-err'>Can't be blank</p>")
            }
        }
    })

    monthInput.on("keyup blur", (e) => {
        const value = e.target.value
        if (e.type === "keyup") {
            $(".month-err").remove()
            monthInput.removeClass("input-err")
            monthDisplay.text(value || "00")
        } else if (e.type === "blur" && (!value.match(/\d\d/) || value > 12 || value < 1)) {
            $(".month-err").remove()
            monthInput.addClass("input-err")
            if (value.length && value < 13 && value > 0) {
                monthInput.after("<p class='error-msg month-err'>Wrong format</p>")
            } else if (value) {
                monthInput.after("<p class='error-msg month-err'>Out of range</p>")
            } else {
                monthInput.after("<p class='error-msg month-err'>Can't be blank</p>")
            }
        }
    })

    yearInput.on("keyup blur", (e) => {
        const value = e.target.value
        if (e.type === "keyup") {
            $(".year-err").remove()
            yearInput.removeClass("input-err")
            yearDisplay.text(value || "00")
        } else if (e.type === "blur" && (!value.match(/\d\d/) || value.length > 2)) {
            $(".year-err").remove()
            yearInput.addClass("input-err")
            if (value.length) {
                yearInput.after("<p class='error-msg year-err'>Wrong format</p>")
            } else {
                yearInput.after("<p class='error-msg year-err'>Can't be blank</p>")
            }
        }
    })

    cvcInput.on("keyup blur", (e) => {
        const value = e.target.value
        if (e.type === "keyup") {
            $(".cvc-err").remove()
            cvcInput.removeClass("input-err")
            cvcDisplay.text(value || "000")
        } else if (e.type === "blur" && (!value.match(/(\d\d\d){1}/) || value.length > 3)) {
            $(".cvc-err").remove()
            cvcInput.addClass("input-err")
            if (value.length) {
                cvcInput.after("<p class='error-msg cvc-err'>Wrong format</p>")
            } else {
                cvcInput.after("<p class='error-msg cvc-err'>Can't be blank</p>")
            }
        }
    })
})

