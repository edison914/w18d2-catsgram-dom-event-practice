// Your code here
window.onload = async () => {
    const newHeader = document.createElement('h1')
    const newPic = document.createElement('img');
    const newImgButton = document.createElement('button')

    const fetchNewCatImg = async () => {
        try {

            newHeader.innerHTML = 'Kitten Pic';
            const res = await fetch ('https://api.thecatapi.com/v1/images/search');

            const data = await res.json()
            console.log(data)
            const url = data[0].url;
            console.log(url)

            newPic.src = url;
            newPic.alt = "Kitten Pic";

        } catch (error) {
            console.error(`Error retriving Cat Picture`, error)
        }
    }

    fetchNewCatImg();

    newImgButton.textContent = "Click me for a new cat!"
    newImgButton.addEventListener('click', fetchNewCatImg)

    document.body.appendChild(newHeader);
    document.body.appendChild(newPic);
    document.body.appendChild(newImgButton);
}
