document.addEventListener('DOMContentLoaded', function() {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const previewFrame = document.getElementById('preview-frame');
    
    // Contoh kode default
    htmlCode.value = '<!DOCTYPE html>\n<html>\n<head>\n  <title>Contoh</title>\n</head>\n<body>\n  <h1>Selamat Datang!</h1>\n  <p>Edit kode untuk melihat perubahan langsung.</p>\n</body>\n</html>';
    cssCode.value = 'body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n  text-align: center;\n}\n\nh1 {\n  color: #2c3e50;\n}';
    jsCode.value = '// JavaScript akan dieksekusi setelah DOM dimuat\nconsole.log("Preview aktif!");';
    
    // Fungsi untuk memperbarui preview
    function updatePreview() {
        const html = htmlCode.value;
        const css = cssCode.value;
        const js = jsCode.value;
        
        const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
        
        preview.open();
        preview.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
            </html>
        `);
        preview.close();
    }
    
    // Event listeners untuk pembaruan real-time
    [htmlCode, cssCode, jsCode].forEach(editor => {
        editor.addEventListener('input', updatePreview);
    });
    
    // Inisialisasi preview pertama kali
    updatePreview();
});
