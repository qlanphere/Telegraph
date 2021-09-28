const host = 'http://localhost'
const port = '3000'


const submit = document.getElementById('submit')


submit.addEventListener('click', (e) => post(e))

async function post(e) {

    e.preventDefault()
    
        let title = document.getElementById('title').value
        let fullName = document.getElementById('name').value
        let story = document.getElementById('story').value

        await inject(title,fullName,story)

        let url = `${host}:${port}/posts`

        let newPost = {
            title: title,
            name: fullName,
            story: story
        }
    
    const options =  {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
    const response = await fetch(url, options)
    await response.json()

    
    }
    catch (error) {
        console.log(error);
    }
}

function inject (title,fullName,story) {
    document.getElementById('newPost').style.display="none"

    const form = document.getElementById('post')

    const postTitle = document.createElement('h1')
    const postName = document.createElement('h2')
    const postStory = document.createElement('h2')

    postTitle.textContent = title
    postName.textContent = fullName
    postStory.textContent = story

    form.appendChild(postTitle)
    form.appendChild(postName)
    form.appendChild(postStory)

    

}