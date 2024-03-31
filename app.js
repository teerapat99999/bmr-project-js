
    document.getElementById('con').addEventListener('click', function() {
        var weight = parseFloat(document.getElementById('inputwe').value);
        var height = parseFloat(document.getElementById('inputhe').value);
        var age = parseFloat(document.getElementById('inputage').value);
        var bmrResult = 0;
        
            if (document.getElementById('inputm').classList.contains('active')) {
                bmrResult = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
            } else if (document.getElementById('inputw').classList.contains('active')) {
                bmrResult = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
            }
            document.getElementById('result').innerHTML = bmrResult;
    });

    document.getElementById('inputm').addEventListener('click', function() {
        this.classList.add('active');
        document.getElementById('inputw').classList.remove('active');
    });

    document.getElementById('inputw').addEventListener('click', function() {
        this.classList.add('active');
        document.getElementById('inputm').classList.remove('active');
    });

