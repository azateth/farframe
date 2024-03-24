document.getElementById('giveawayForm').onsubmit = function(event) {
    event.preventDefault();
    const comment = document.getElementById('comment').value;
    localStorage.setItem('userVotes', comment.split(' ')[0]); // Assuming "X $degen" format
    window.location.href = 'page2.html';
};

function boostVotes(boost) {
    let votes = parseInt(localStorage.getItem('userVotes'), 10);
    votes = boost ? votes * 3 : votes;
    alert(`You now have ${votes} votes.`);
    // Redirect to a confirmation page or reset form as needed
}
