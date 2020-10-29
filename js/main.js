var heading = document.getElementsByClassName('accordion');

for (var i = 0; i < heading.length; i++) {
    heading[i].addEventListener('click', function() {
        var desc = this.nextElementSibling;
        this.classList.toggle('active');

        if (desc.style.maxHeight)
            desc.style.maxHeight = null;
        else
            desc.style.maxHeight = desc.scrollHeight + "px";
    });

}