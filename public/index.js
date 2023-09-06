// Your code here
window.onload = () => {
    const newHeader = document.createElement('h1')
    newHeader.innerHTML = 'Kitten Pic';
    const newPic = document.createElement('img');
    const newImgButton = document.createElement('button')
    const upvoteButton = document.createElement('button')
    const downvoteButton = document.createElement('button')
    const popScoreText = document.createElement('div');
    const divforVote = document.createElement('div');


    const commentInput = document.createElement('input');
    commentInput.placeholder = 'Enter your comment';
    const commentSubmit = document.createElement('button');
    commentSubmit.textContent = 'Submit comment'
    const commentUl= document.createElement('ul')


    let popScore = 0;

    const fetchNewCatImg = async () => {
        try {
            const res = await fetch ('https://api.thecatapi.com/v1/images/search');

            const data = await res.json()
            //console.log(data)
            const url = data[0].url;
            console.log(url)

            newPic.src = url;
            newPic.alt = "Kitten Pic";

            popScore = 0;
            updateScore();
            commentInput.value = ''
        } catch (error) {
            console.error(`Error retriving Cat Picture`, error)
        }
    }

    const upVote = () => {
        popScore++;
        //console.log(popScore)
        updateScore()
    }

    const downVote = () => {
        popScore--;
        updateScore()
    }

    const updateScore = () => {
        popScoreText.innerHTML = `Popularity Score: ${popScore}`
    }

    const addedComment = () => {
        const text = commentInput.value;
        if (text !== '') {
            const commentLi = document.createElement('li');
            commentLi.textContent = text;
            commentUl.appendChild(commentLi);
            commentInput.value = ''
        }

    }

    fetchNewCatImg();

    newImgButton.textContent = "Click for a new cat!"
    newImgButton.addEventListener('click', fetchNewCatImg)

    upvoteButton.textContent = "Upvote"
    upvoteButton.addEventListener('click', upVote)

    downvoteButton.textContent = "Downvote"
    downvoteButton.addEventListener('click', downVote)

    commentSubmit.addEventListener('click', addedComment)

    document.body.appendChild(newHeader);
    document.body.appendChild(newPic);
    document.body.appendChild(newImgButton);
    document.body.appendChild(popScoreText);
    document.body.appendChild(divforVote);
    divforVote.appendChild(upvoteButton);
    divforVote.appendChild(downvoteButton);

    document.body.appendChild(commentInput);
    document.body.appendChild(commentSubmit);
    document.body.appendChild(commentUl);

}
