const host = 'http://localhost'
const port = '3000'


const submit = document.getElementById('submit')


submit.addEventListener('click', (e) => post(e))

async function post(e) {

    e.preventDefault()
    
        let title = document.getElementById('title').value
        let fullName = document.getElementById('name').value
        let story = document.getElementById('story').value

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