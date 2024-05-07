const primaryColorPicker = document.getElementById('primaryColor');
        const secondaryColorPicker = document.getElementById('secondaryColor');
        const accentColorPicker = document.getElementById('accentColor');
        const backgroundColorPicker = document.getElementById('backgroundColor');
        const primaryBox = document.getElementById('primaryBox');
        const secondaryBox = document.getElementById('secondaryBox');
        const accentBox = document.getElementById('accentBox');
        const backgroundBox = document.getElementById('backgroundBox');
    
        function updateColor(element, color) {
            element.style.backgroundColor = color;
        }
    
        function updatePalette() {
            updateColor(primaryBox, primaryColorPicker.value);
            updateColor(secondaryBox, secondaryColorPicker.value);
            updateColor(accentBox, accentColorPicker.value);
            updateColor(backgroundBox, backgroundColorPicker.value);
        }
    
        primaryColorPicker.addEventListener('input', updatePalette);
        secondaryColorPicker.addEventListener('input', updatePalette);
        accentColorPicker.addEventListener('input', updatePalette);
        backgroundColorPicker.addEventListener('input', updatePalette);
    
        // Initial update
        updatePalette();