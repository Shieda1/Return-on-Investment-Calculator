// https://calculator.swiftutors.com/return-on-investment-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const returnonInvestmentRadio = document.getElementById('returnonInvestmentRadio');
const TotalGainLossRadio = document.getElementById('TotalGainLossRadio');
const investmentAmountRadio = document.getElementById('investmentAmountRadio');
const earnedAmountRadio = document.getElementById('earnedAmountRadio');

let returnonInvestment;
let investmentAmount = v1;
let earnedAmount = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

returnonInvestmentRadio.addEventListener('click', function() {
  variable1.textContent = 'Investment Amount';
  variable2.textContent = 'Earned Amount';
  investmentAmount = v1;
  earnedAmount = v2;
  result.textContent = '';
});

TotalGainLossRadio.addEventListener('click', function() {
  variable1.textContent = 'Investment Amount';
  variable2.textContent = 'Earned Amount';
  investmentAmount = v1;
  earnedAmount = v2;
  result.textContent = '';
});

investmentAmountRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Investment';
  variable2.textContent = 'Earned Amount';
  returnonInvestment = v1;
  earnedAmount = v2;
  result.textContent = '';
});

earnedAmountRadio.addEventListener('click', function() {
  variable1.textContent = 'Return on Investment';
  variable2.textContent = 'Investment Amount';
  returnonInvestment = v1;
  investmentAmount = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(returnonInvestmentRadio.checked)
    result.textContent = `Return on Investment = ${computeReturnonInvestment().toFixed(2)} %`;
  
  else if(TotalGainLossRadio.checked)
    result.textContent = `Total Gain/Loss = ${computeTotalGainLoss().toFixed(2)}`;

  else if(investmentAmountRadio.checked)
    result.textContent = `Investment Amount = ${computeInvestmentAmount().toFixed(2)}`;

  else if(earnedAmountRadio.checked)
    result.textContent = `Earned Amount = ${computeEarnedAmount().toFixed(2)}`;
})

// calculation

function computeReturnonInvestment() {
  return ((Number(earnedAmount.value) - Number(investmentAmount.value)) / Number(investmentAmount.value)) * 100;
}

function computeTotalGainLoss() {
  return Number(earnedAmount.value) - Number(investmentAmount.value);
}

function computeInvestmentAmount() {
  return Number(decliningBalanceDepreciation.value) / Number(depreciationRate.value);
}

function computeEarnedAmount() {
  return ((Number(returnonInvestment.value) / 100) * Number(investmentAmount.value)) + Number(investmentAmount.value);
}