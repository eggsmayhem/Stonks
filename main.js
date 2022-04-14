//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

// let desiredDate = document.querySelector('input').value
// let desiredDate = '2021-04-21'
// chosenDate = document.querySelector('#inputvalue').value

let contentDisplay = document.querySelector('.content')

let desiredDate;

function getFetch(){
  desiredDate = document.querySelector('input').value
  const url = 'https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json'
  let arr = [];
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        for (let i=0; i<data.length; i++) {
            if (data[i].transaction_date===desiredDate) {
                arr.push(`<b>Representative</b>: ${data[i].representative}`)
                arr.push('<br>')
                // data[i].asset_description.splice(0,1)
                arr.push(`<b>Company</b>: ${data[i].asset_description}`)
                arr.push('<br>')
                arr.push(`<b>Ticker</b>: ${data[i].ticker}`)
                arr.push('<br>')
                arr.push(`<b>Amount</b>: ${data[i].amount}`)
                arr.push('<br>')
                arr.push(`<b>Exchange type</b>: ${data[i].type}`)
                arr.push('<br>')
                arr.push(`<b>Transaction date</b>: ${data[i].transaction_date}`)
                arr.push('<br>')
                arr.push('<br>')
            }
        }
        console.log(arr);
        contentDisplay.innerHTML = arr; 

        // the below works, so the problem is with the if conditional

        // for (let i=0; i<data.length; i++) {
        //     arr.push(data[i].representative)
        //     arr.push(data[i].asset_description)
        //     arr.push(data[i].ticker)
        //     arr.push(data[i].amount)
        //     arr.push(data[i].type)
        // }
        // console.log(arr);

        // contentDisplay.innerText = arr;
        // arr.push(data[1].representative)
        // arr.push(data[1].asset_description)
        // arr.push(data[1].ticker)
        // arr.push(data[1].amount)
        // arr.push(data[1].type)
    
        // console.log(arr)
        // console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// let arr = [];

// for (let i=0; i<data.length; i++) {
//     if (data[i].disclosure_date===desiredDate) {
//         arr.push(data[i].representative)
//         arr.push(data[i].asset_description)
//         arr.push(data[i].ticker)
//         arr.push(data[i].amount)
//         arr.push(data[i].type)
//     }
// }