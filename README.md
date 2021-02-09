# Getting started
To get the Node server running locally:

- Clone this repo
- Download and run Docker
- Open terminal and run these following commands
	- `docker build -t postgres-image .` to build the database's Docker image
	- `docker run -d --name postgres-container -p 5555:5432 postgres-image` to run a Docker container setup with the database
	- `npm install` to install all required dependencies
	- `npm run dev` to start the local server
- Now the server should start listening on `http://localhost:3000`

# API

## /properties
Used to collect a Token for a registered User.

**URL** : `/properties`

**Method** : `GET`

The `sortby` parameter is optional. It will return the properties sorted by the newest by default. 

The supported fields to sort by are

- price 
- bedrooms


**Data example**

```json
{
    "sortby": "price
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
"properties": [
    {
        "id": 330,
        "sale_type": "MLS Listing",
        "property_type": "Condo/Co-op",
        "property_address": "901 Bayshore #206",
        "city": "San Francisco",
        "state_or_province": "CA",
        "price": 240000,
        "beds": 1,
        "baths": 1
    },
    {
        "id": 81,
        "sale_type": "MLS Listing",
        "property_type": "Condo/Co-op",
        "property_address": "195 7th St #410",
        "city": "San Francisco",
        "state_or_province": "CA",
        "price": 420000,
        "beds": 0,
        "baths": 1
    },....
]
}
```


## /property/:propId
Returns all the details related to a specific property.

**URL** : `/properties`

**URL Parameters** : `propId=[integer]` where `propId` is the ID of the  property

**Method** : `GET`


## Success Response

**Code** : `200 OK`

**Content example**

```json
{
	"id": 4,
	"sale_type": "MLS Listing",
	"property_type": "Single Family Residential",
	"property_address": "148 Saturn St",
	"city": "San Francisco",
	"state_or_province": "CA",
	"zip_or_postal_code": "94114",
	"price": 975000,
	"beds": 1,
	"baths": 1.5,
	"property_location": "San Francisco",
	"square_feet": 1005,
	"lot_size": 2217,
	"year_built": 1906,
	"days_on_market": 1,
	"hoa_month": 370,
	"property_status": "Active",
	"source_url": "http://www.redfin.com/CA/San-Francisco/148-Saturn-St-94114/home/671009",
	"sourcee": "San Francisco MLS",
	"mls_no": "421517049",
	"latitude": 37.7628338,
	"longitude": -122.4437049
}
```





