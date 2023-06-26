//your JS code here. If required.

    const colorSelect = document.getElementById('colorSelect');
    const selectedIndex = colorSelect.selectedIndex;
  document.querySelector('input[type="button"]').addEventListener('click', function() {
   
    colorSelect.remove(selectedIndex);
  });
