# StockY
 ### [StockY](https://stockx-clone.herokuapp.com/) is a full-stack Stockx Clone that is made the buy and list shoes. 
 
## Frontend technologies used:
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> 
<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /> 
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /> 
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /> 

## Backend technologies used:
<img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />   
<img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" />
<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />



## How to run app locally
* Run "git clone" with the copy/pasted repo link to own Repository.
* In Root Directory, run `pipenv install -r requirements.txt` to install dependencies.
* Run `pipenv shell`, `flask db init`,  `flask db migrate`, `flask db upgrade`, `flask seed all` (in this order).
* Run ` flask run` to start the backend.
* In a new terminal, cd into the "react-app" directory and run `npm install`
* Then run `npm start` to start the frontend (which will open a browser to localhost:3000)


## WikiLinks
* [Database Schema](https://github.com/jb3k/StockX-CLONE/wiki/Database-Schema)
* [Features](https://github.com/jb3k/StockX-CLONE/wiki/Feature-List)
* [Core User Stories](https://github.com/jb3k/StockX-CLONE/wiki/User-Stories)
* [Wireframes](https://github.com/jb3k/StockX-CLONE/wiki/Wireframes)



# Feature Walkthrough

## Home Page

* Here you can view all of the shoes that are currently in the database. 
* In the top right corner, you will see `Sign Up` and `Login` buttons to officially list or purchase shoes.

![image](./proposal-img/main2.png)
![image](./proposal-img/main1.png)


## Signup / Login Page

* Here you can create an account or click "Login as Demo User" to be automically logged in as a default user. 

![image](./proposal-img/login.png)
![image](./proposal-img/signup.png)


## Shoe Page

* Here you get a clear image of the shoe, along with related products, product detail, historical stats, along with the ability to buy or list shoes for users that are logged in. 

![image](./proposal-img/shoe1.png)



## Buy Shoe Page

* Here you can view the listed shoe and current lowest prices for each size.
* On the second page, you can put in your shipping information to get the shoe delivered. 


Page1
![image](./proposal-img/buypage1.png)
Page2
![image](./proposal-img/buypage2.png)


## Shoe Purchase Page

* Once you purchase a shoe, you will be directed to this page and will be allowed 24 hours to edit your address before the item is shipped and you can no longer edit / delete your purchase order. 

![image](./proposal-img/purchasepage.png)



## Sell Shoe Page

* Here you can pick what size shoe you want to list.
* On the second page, you pick what price you want to list your shoe at. 


Page1
![image](./proposal-img/sellpage1.png)
Page2
![image](./proposal-img/sellpage2.png)


## Shoe Listing Page

* Once you list a shoe, you will be brough to this page to see all of your current listings. 

![image](./proposal-img/listingpage.png)



## Future Plans

* I would like to implement the bonus features on my features list wiki page along with the ability to add shoes into the database. 
