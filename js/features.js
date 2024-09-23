document.getElementById('donation-page').addEventListener('click', function(){
    document.getElementById('donation').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
})
document.getElementById('donation-history').addEventListener('click',function(){
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('donation').classList.add('hidden');
})

