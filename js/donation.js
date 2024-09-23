document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const donateInput = document.getElementById('donate-input').value;
    

    if (!isNaN(donateInput)){
        const donateMoney = document.getElementById('donate-money').innerText;
        
        const newDonateInput = parseFloat(donateInput);
        const newDonateMoney = parseFloat(donateMoney);
       const newDonation = newDonateMoney + newDonateInput;
         
        document.getElementById('donate-money').innerText = newDonation;
        
    }
    else(
        alert('Please Give A Valid Number. ')
    )
    
    
})