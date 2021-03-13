(function() {
	"use strict";

	const getJokesButton = document.getElementById('getData');
	getJokesButton.addEventListener('click', getData);

	// add to empty array before it will be pushed into localStorage
	let favorite = [];

	function displayFavorites() {
		let favoriteJokes = document.getElementById('favorites');
		let favoriteArray = listFavorite();
		let output = "";

		for (let i in favoriteArray) {
			output += `<li><input type='button' class='delete' id='${favoriteArray[i].id}' value='remove'/></span> User title: ${favoriteArray[i].joke}</li>`;
		}
		favoriteJokes.innerHTML = output;
		bindCheckBoxFavJoke(favoriteJokes.children);
	}

    // fetch data from api
	function getData() {
		let listOfJokes = document.getElementById("list-of-jokes"); 

		fetch('https://api.icndb.com/jokes/random/10')
			.then(function(res) {
				return res.json();
		}).then(function(data) { 
			// variable is undefined because it is not initialized. Therefore at some empty single quotes
			let result = '';
			console.log(data.value);
			data.value.forEach((joke, index) => {
				result +=
				`<li><input type="checkbox" class='inputCheckbox' id='${joke.id}'/> User title :  ${joke.joke}</li>`;
				listOfJokes.innerHTML = result;
			});
			bindCheckboxJoke(listOfJokes.children);
		}).catch(function(err) {
			console.log(err);
		});
	}

	function clickedButton() {
		getJokesButton.setAttribute('disabled', 'disabled');
		getJokesButton.classList.add('opacity');
	}

	function bindCheckboxJoke(listOfJokes) {
		for(let i = 0; i < listOfJokes.length; i++) {
			bindJokes(listOfJokes[i], addFavorite);
		} 
	}

	function bindCheckBoxFavJoke(favoriteJokes) {
		for (let i = 0; i < favoriteJokes.length; i++) {
			bindFavoriteJokes(favoriteJokes[i], removeFavorite);
		} 	 
	}
	
	let bindJokes = function(jokeItem, checkBoxEventHandler) {
		let checkbox = jokeItem.querySelector('input[type="checkbox"]');		
		checkbox.addEventListener('change', addFavorite);
	}

	let bindFavoriteJokes = function(jokeItem, checkBoxEventHandler) {
		let deleteButton = jokeItem.querySelector('.delete');
		deleteButton.addEventListener('click', removeFavorite);
	}

	let addFavorite = function() {
		let id = this.id;
		let joke = this.parentNode.innerText;
		this.disabled = true;
		addJokeToFavorite(id, joke);
	}

	let removeFavorite = function() {
		let id = this.id;
		let inputButton = this.parentNode.firstChild;
		inputButton.checked = false;
		inputButton.disabled = false;
		removeJokeFromFavorite(id);
	}

	let Item = function(jokeId, jokeText) {
		this.id = jokeId;
		this.joke = jokeText;
	}

	function addJokeToFavorite(id, joke) {
		// check duplicates by iterating 
		for (let i in favorite) {
			if(favorite.length < 5 || favorite[i].id !== id  ) {
				console.log('nothing happen');
				break;
			}
		}

		let norrisJoke = new Item(id, joke);

		if(favorite == null) {
    		favorite = [];
		}

		favorite.push(norrisJoke);
		saveFavorite();
		displayFavorites();
	}

	function removeJokeFromFavorite(id) {
		for (let i in favorite) {
			if(favorite[i].id === id) {
				favorite.splice(i, 1);
				break;
			}
		}
		saveFavorite();
		displayFavorites();
	}

	function listFavorite() {
		let favoriteCopy = [];
		for (let i in favorite) {
			let jokes = favorite[i];
			let jokesCopy = {};

			// using copy will avoid any strange error like accidentially overwriting some array, so therefore never use references in this case
			for (let p in jokes) {
				jokesCopy[p] = jokes[p];
			}
			favoriteCopy.push(jokesCopy);
		}
		return favoriteCopy;
	}		

	function saveFavorite() {
		localStorage.setItem('favoList', JSON.stringify(favorite));
	}

	function loadFavorites() {
		favorite = JSON.parse(localStorage.getItem('favoList'));
	}

	// You have to load the JSOn of course before 
	loadFavorites();
	displayFavorites();

	let start = document.getElementById('start');
	let stop = document.getElementById('stop');
	let pause = false;

	start.addEventListener('click', autoAddStart);
	stop.addEventListener('click', autoAddStop);

	function autoAddStart() {
		pause = true;
		console.log('start');
		// addJokeToFavorite(id, joke);
	}

	function autoAddStop() {
		pause = false;
		console.log('stop');
	}
})();

//	<!--Här under läggs ingredienserna in i HTML-->
//<div class="inner-body">
//<button id="getData">Ladda ingredienserna</button>

//<div class='inner-block'>

//<ul class='unordered-list' id="list-of-jokes">
//</ul>
//</div>

//		<div class='inner-block'>
//<h2>Dina val:</h2>
//<ul class='unordered-list' id="favorites">
//</ul>
//</div>