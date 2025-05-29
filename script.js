const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const newQuoteButton = document.getElementById('new-quote');

const url = "https://programming-quotesapi.vercel.app/api/random";

const apiKey = "57t/PF7zHdmhlyfMAwUPiQ==vN5BCHKMaLK7U278";
const apiUrl = "https://api.api-ninjas.com/v1/quotes";


async function getQuote(){
    quote.textContent = "Loading...";
    author.textContent = "";

    try{
        const response = await fetch(apiUrl,{
            headers: {"X-Api-Key": apiKey}
            
        });
        if(!response.ok){
            throw new Error(`API Error: ${response.status}`);
        }
        const data = await response.json();
        quote.textContent = `"${data[0].quote}"`;
        author.textContent = `"- ${data[0].author}"`;

    }catch(error){
        quote.innerHTML =`💀 Error: ${error.message}`
        console.error("Fetch error",error);
    }
}

newQuoteButton.addEventListener('click', getQuote);
 // Fetch a quote on page load
getQuote();
