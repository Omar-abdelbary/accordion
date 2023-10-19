

let accordion_headers = document.querySelectorAll(".accordion .accordion-content .accordion-header");
let contents = document.querySelectorAll(".accordion .accordion-content .accordion-body");
let icons = document.querySelectorAll(".accordion .accordion-content .accordion-header i");

for (let i = 0; i < contents.length; i++) {
    accordion_headers[i].addEventListener("click", function () {
        contents[i].classList.toggle('d-block');
        icons[i].classList.toggle('fa-chevron-up');
    });
}


