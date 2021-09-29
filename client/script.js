const host = 'http://localhost'
const port = '3000'


const submit = document.getElementById('submit')


submit.addEventListener('click', (e) => post(e))

window.addEventListener('hashchange', updateContent);

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

    while(form.firstChild) {
        form.firstChild.remove()
    }

    const postTitle = document.createElement('h1')
    const postName = document.createElement('p')
    const postStory = document.createElement('h2')

    postTitle.textContent = title
    postName.textContent = fullName
    postStory.textContent = story

    form.appendChild(postTitle)
    form.appendChild(postName)
    form.appendChild(postStory)

}

function updateContent(){
    let hash = window.location.hash.substring(1);
    
    let url = `${host}:${port}/posts/${hash}`

    fetch(url)
    .then((r) => r.json())
    .then((data) => {
        let title = data.title
        let name = data.name
        let story = data.story

        inject(title,name,story)
    })
}