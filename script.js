document.addEventListener('scroll', function (event) {
            if (window.scrollY > document.documentElement.scrollHeight - window.innerHeight) {
                event.preventDefault();
            }
        });