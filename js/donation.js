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
        alert('Please Give A Valid Number. ')
    )   
})