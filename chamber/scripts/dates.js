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

async function fetchWeatherData() {
    const apiKey = 'c3f9a242eeaf09eaa796aa4b837e6881';
    const city = 'Logan,USA'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
    }
}

function displayWeatherData(data) {
    const temperature = document.getElementById('current-temperature');
    const description = document.getElementById('current-weather-description');


    temperature.textContent = `Current Temperature: ${data.main.temp}°C`;
    description.textContent = `Weather: ${data.weather[0].description}`;
}

fetchWeatherData();

document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        document.getElementById('meet-greet-banner').style.display = 'block';
    }
});

function closeBanner() {
    document.getElementById('meet-greet-banner').style.display = 'none';
}