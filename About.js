document.getElementById('downloadCv').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = "C:/Users/User/Downloads/cynthia jepngetich Resume.pdf"; 
    link.download = 'cynthia jepngetich Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
