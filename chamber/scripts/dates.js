async function loadMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const container = document.getElementById('members-container');

    members.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'member';
        memberElement.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}">${member.website}</a>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.otherInfo}</p>
        `;
        container.appendChild(memberElement);
    });
}

loadMembers();

document.getElementById('grid-view-btn').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('grid-view');
    document.getElementById('members-container').classList.remove('list-view');
});

document.getElementById('list-view-btn').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('list-view');
    document.getElementById('members-container').classList.remove('grid-view');
});
