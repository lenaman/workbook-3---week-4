// window.onload = function () {
//     const baseCarRentalRate = 29.99;
//     const surchargeUnder25 = 0.30; 5

//     const estimateBtn = document.getElementById('estimateBtn');

//     estimateBtn.onclick = function () {
//         const days = parseInt(document.getElementById('days').value) || 0;

   
//         let carRentalCost = baseCarRentalRate * days;

//         let optionsCost = 0;
//         const electronicToll = document.getElementById('electronicToll').checked ? parseFloat(document.getElementById('electronicToll').value) : 0;
//         const gps = document.getElementById('gps').checked ? parseFloat(document.getElementById('gps').value) : 0;
//         const roadside = document.getElementById('roadside').checked ? parseFloat(document.getElementById('roadside').value) : 0;
//         optionsCost = (electronicToll + gps + roadside) * days;

//         let under25Cost = 0;
//         const isUnder25 = document.querySelector('input[name="under25"]:checked').value === 'yes';
//         if (isUnder25) {
//             under25Cost = carRentalCost * surchargeUnder25;
//         }

//         const totalDue = carRentalCost + optionsCost + under25Cost;

//         document.getElementById('carRentalCost').textContent = carRentalCost.toFixed(2);
//         document.getElementById('optionsCost').textContent = optionsCost.toFixed(2);
//         document.getElementById('under25Cost').textContent = under25Cost.toFixed(2);
//         document.getElementById('totalDue').textContent = totalDue.toFixed(2);
//     };
// };

let displayChangeBtn = 