const searchuser = document.getElementById('search-user');
const uii = new ui()

searchuser.addEventListener('keyup',(e) =>{
const input = e.target.value
if(input !== ''){
const profile = new github()
profile.getuser(input).then((data) =>{
if(data.profiledata.message === 'Not Found'){
  uii.showalert('user not found','alert alert-danger')

}else{
uii.showuser(data.profiledata)
uii.showrepos(data.profilerepodata)
}

})
}
else{

uii.clearprofile();

}
})
