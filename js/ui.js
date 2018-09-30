class ui{
constructor(){
this.show = document.querySelector('#user');

}
showuser(user){
this.show.innerHTML = `
<div class="card card-body mb-3">
<h2 class="display-4">${user.name}</h2>
<div class="row">
<div class="col-md-3">
<img class="img-fluid mb-2" src="${user.avatar_url}">
<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
</div>
<div class="col-md-9">
<span class="badge badge-primary m-2">Public Repos:${user.public_repos}</span>
<span class="badge badge-secondary m-2">Public Gists:${user.public_gists}</span>
<span class="badge badge-success m-2">Public Follower:${user.followers}</span>
<span class="badge badge-success m-2">Public Following:${user.following}</span>
<br><br>
<ul class="list-group">
<li class="list-group-item">Company:${user.company}</li>
<li class="list-group-item">Blog:${user.blog}</li>
<li class="list-group-item">Location:${user.location}</li>
<li class="list-group-item">Last Update:${user.updated_at}</li>
<li class="list-group-item">Member Since:${user.created_at}</li>


</ul>
</div>

</div>



</div>
<h3 class="page-heading mb-3">Latest Repose</h3>
<div id="repos"></div>

`

}
clearprofile(){

  this.show.innerHTML = ''
}
showalert(msg,clas){
  this.clearAlert()
const div = document.createElement('div')
div.appendChild(document.createTextNode(msg))
div.className = clas;
const comtainer = document.querySelector('.searchcontainer');
const  search = document.querySelector('.search');
comtainer.insertBefore(div,search)

setTimeout(()=>{
this.clearAlert()

},3000)



}
clearAlert(){

const current = document.querySelector('.alert')
if(current){
current.remove()

}

}
showrepos(repos){
let out = ''
repos.forEach(element => {
  out += `
  <div class="card card-body mb-2">
  <div class="row">
  <div class="col-md-6">
  <a href="${element.html_url}" target="_blank">${element.name}</a>
  </div>
  <div class="col-md-6">
  <span class="badge badge-primary m-2">Stars:${element.stargazers_count}</span>
<span class="badge badge-secondary m-2">Watcher:${element.watchers_count}</span>
<span class="badge badge-success m-2">forks:${element.forks_count}</span>
  
  </div>
  </div>
  
  
  </div>
  
  `


});
document.querySelector('#repos').innerHTML = out
}



}