let profTemp = document.createElement('template')


getUser(sessionStorage.getItem('user-id'))
.then(user=>{


    profTemp.innerHTML = 
` 
<style>
.profile .header
{
  padding: 1.4rem;
  background-color: var(--blue-dark);
  color: var(--white);
  display: flex;
  gap: 2rem;
}

.profile
{
    background-color: var(--white);
}

.profile .profile-img
{
    display: grid;
    place-items: center;
    background-color: var(--grey-light);
    margin: auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 1rem;
}

.profile .profile-img img
{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}
.profile .profile-img img:hover
{
    cursor: pointer;
}
</style>


<div class='profile'>
<div class="header">
 
<h2> <slot name="arrow"/> </h2>
<h2>Profile</h2>

</div>

<div class="profile-img">
  <img src="${user.img}" alt="img" />
</div>

<div class="additions"><div>  
<div> <my-card title="Username"  name="${user.name}"/>  </div>
 
<div> <my-card title="Cell" name="${user.cell}"/>  </div>
<div> <my-card title="Status"  name="${user.status}"/>  </div>

</div>


</div>`

})


class Profile extends HTMLElement 
{
    constructor()
    {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(profTemp.content.cloneNode(true))
    }
}

window.customElements.define('my-profile', Profile)