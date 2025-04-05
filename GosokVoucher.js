document.addEventListener('DOMContentLoaded', function() {
    const scratchArea = document.getElementById('scratchArea');
    
    scratchArea.addEventListener('mousedown', startScratch);
    scratchArea.addEventListener('touchstart', startScratch);

    function startScratch(e) {
        e.preventDefault();
        scratchArea.addEventListener('mousemove', scratch);
        scratchArea.addEventListener('touchmove', scratch);
        
        document.addEventListener('mouseup', stopScratch);
        document.addEventListener('touchend', stopScratch);
        
        function scratch(event) {
            const rect = event.target.getBoundingClientRect();
            let x = event.clientX || event.touches[0].clientX;
            let y = event.clientY || event.touches[0].clientY;

            const offsetX = x - rect.left;
            const offsetY = y - rect.top;

            const ctx = scratchArea.getContext('2d');
            ctx.beginPath();
            ctx.arc(offsetX, offsetY, 20, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255 ,255 ,0)';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fill();
        }

        function stopScratch() {
            scratchArea.removeEventListener('mousemove', scratch);
            scratchArea.removeEventListener('touchmove', scratch);
            
            document.removeEventListener('mouseup', stopScratch);
            document.removeEventListener('touchend', stopScratch);
        }
    }
});

function resetVoucher() {
    const scratchArea = document.getElementById('scratchArea');
    const ctx = scratchArea.getContext('2d');
    ctx.clearRect(0 , 0 , 300 , 150);

    // Reset background image
    scratchArea.style.backgroundImage = 'url("https://via.placeholder.com/300x150?text=Gosok+disini")';
}
