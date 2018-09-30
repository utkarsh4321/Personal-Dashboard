class github{
constructor(){
this.client_id = 'b053c1bd38b1390e133d'
this.secret_id = '7dc7b837d7d1dcf0f48e4f653a189fa0bf4af61f'
this.repos_count = 5;
this.repos_sort = 'created:asc'
}
async getuser(user){

const profile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.secret_id}`)

const profiledata = await profile.json()
const profilerepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.secret_id}`);
const profilerepodata = await profilerepo.json()


return {
profiledata,
profilerepodata
}
}


}