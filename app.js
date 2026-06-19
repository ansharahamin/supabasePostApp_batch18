let supabaseUrl = 'https://phgbkzvxbefidcrtagbt.supabase.co'
let supabaseKey = 'sb_publishable_xbv5T3RlyRtRymBO3pY69A_lTr1vU0s'
var supabase = window.supabase.createClient(supabaseUrl, supabaseKey)
window.onload = async function(){
const { data, error } = await supabase
  .from('Post App Table')
  .select('*')
  console.log(data, error);
  if(error){
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong with fetching data from database!",
});
  }else{

  }
}

var cardBg 
function deletePost(){
  var card = event.target.parentNode.parentNode
  card.remove()
}
function editPost(){
    var card = event.target.parentNode.parentNode
    var title =card.children[1].children[0].children[0].children[0].innerText
    var description =card.children[1].children[0].children[1].innerText
    document.getElementById("title").value = title
    document.getElementById("description").value = description
    card.remove()
  console.log(title, description);
}
function post(){
    var title = document.getElementById("title")
    var description = document.getElementById("description")
    console.log(title.value , description.value);
    var posts = document.getElementById("posts")
   if(title.value.trim() && description.value.trim()){
        data.forEach(post =>{
      //  var postContainer = document.querySelector('#posts')
      //  postContainer
       posts.innerHTML += `
     <div class="card mb-2">
              <div class="card-header">~Post</div>
              <div style="background-image:url(${[post.img-bg]})" class="card-body">
                <figure>
                  <blockquote class="blockquote">
                    <p>
                      ${post.title}
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    ${post.description}
                  </figcaption>
                </figure>
              </div>
              <div class="ms-auto m-2">
              <button onclick="editPost()" class="btn btn-success">Edit</button>
              <button onclick="deletePost()" class="btn btn-danger">Delete</button>
              </div>
            </div>
    `
    })
    
   }else{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Title & description can't be empty!",
});
   }
    title.value = ""
    description.value = ""
}
function selectImg(src){
    cardBg = src
    console.log(src, event.target.classList);
    // event.target.className += " selectedImg"
    var bgImg = document.getElementsByClassName("bgImg")
    for(var i = 0; i<bgImg.length; i++){
        console.log(bgImg[i].className);
        bgImg[i].className = "bgImg"
    }
    event.target.classList.add("selectedImg")
}