const loadFriends= () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data=> displayFriends(data));
}
loadFriends()

const displayFriends = (data) =>{
    // console.log(data.results);
    const friends= data.results;
    const friendsDiv= document.getElementById('friend');
    for(const friend of friends){
        console.log(friend.name)
        const p = document.createElement('p');
        p.innerText = `Name : ${friend.name.first} ${friend.name.last} Email : ${friend.email}`;
        friendsDiv.appendChild(p);

        
    }
}