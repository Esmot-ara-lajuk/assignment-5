document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault();

    const donateInput = document.getElementById('donate-input').value;
    

    if (!isNaN(donateInput)){
        const donateMoney = document.getElementById('donate-money').innerText;

        const totalMoney = document.getElementById('total-money').innerText;

        const title =document.getElementById('card-title');
       
        const newDonateInput = parseFloat(donateInput);
        const newDonateMoney = parseFloat(donateMoney);
        const remainingBalance = parseFloat(totalMoney);
       const newDonation = newDonateMoney + newDonateInput;
        const newRemainingBalance = remainingBalance - newDonateInput;

        document.getElementById('donate-money').innerText = newDonation;
        document.getElementById('total-money').innerText =newRemainingBalance;

        const p =document.createElement('p');
        p.innerText = `${newDonateInput} Taka is donated for ${title}`;
        console.log(p);
        document.getElementById('history').appendChild(p);

        alert('Congratulation, You Have successfully Donated.')
        
    }
    else(
        alert('Please Give A Valid Number.')
    )   
})

/* Feni Donation */
document.getElementById('feni-donation-button').addEventListener('click',function(event){
    event.preventDefault();
    
    const feniDonationInput = document.getElementById('feni-donate-input').value;

    if(!isNaN(feniDonationInput)){
        const donateFeni = document.getElementById('donate-feni').innerText;
        const totalMoney = document.getElementById('total-money').innerText;
        
        const newFeniDonateInput = parseFloat(feniDonationInput);
        const newDonateFeni = parseFloat(donateFeni);
        const remainingBalance = parseFloat(totalMoney);

        const newFeniDonation = newFeniDonateInput +newDonateFeni;
        const newRemainingBalance = remainingBalance - newFeniDonateInput;

        document.getElementById('donate-feni').innerText = newFeniDonation;
        document.getElementById('total-money').innerText = newRemainingBalance;

        alert('Congratulation, You Have successfully Donated.')
    }

    else{
        alert('Please Give A Valid Number.')
    }
})

/* QUOTA DONATION */

document.getElementById('quota-donation-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const quotaDonationInput = document.getElementById('quota-donation-input').value;

    if(!isNaN(quotaDonationInput)){
        const donateQuota =document.getElementById('donate-quota').innerText;
        const totalMoney =document.getElementById('total-money').innerText;

        const newQuotaDonateInput = parseFloat(quotaDonationInput);
        const newDonateQuota = parseFloat(donateQuota);
        const remainingBalance = parseFloat(totalMoney);

        const newQuotaDonation = newQuotaDonateInput + newDonateQuota;
        const newRemainingBalance = remainingBalance - newQuotaDonateInput;

        document.getElementById('donate-quota').innerText = newQuotaDonation;
        document.getElementById('total-money').innerText = newRemainingBalance;

        alert('Congratulation, You Have successfully Donated.')
    }
    else{
        alert('Please Give A Valid Number.')
    }
})