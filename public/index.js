// Your code here
window.onload = async () => {
    try {
        const newHeader = document.createElement('h1')
        newHeader.innerHTML = 'Kitten Pic';
        document.body.appendChild(newHeader)

        const res = await fetch ('https://api.thecatapi.com/v1/images/search');

        const data = await res.json()
        console.log(data)
        const url = data[0].url;
        console.log(url)

        const newPic = document.createElement('img');
        newPic.src = url;
        newPic.alt = "Kitten Pic";
        document.body.appendChild(newPic);

    } catch (error) {
        console.error(`Error retriving Cat Picture`, error)
    }
}
