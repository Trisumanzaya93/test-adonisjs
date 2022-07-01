# Test - Kasir Pintar


## Contents

- [API Endpoint](#api-endpoint)
- [Run Application](#run-application)
- [Postman Documentation](#postman-documentation)
- [Deployment](#deployment)
- [Related Projects](#related-projects)
- [Contributors](#contributors)

## API Endpoint

### Public

#### Login

Endpoint: `/login`

- Body
  | KEY | TYPEDATA |
  | --- | --- |
  | email | `string` |
  | password | `string` |

#### Register

Endpoint: `/register`

- Body
  | KEY | TYPEDATA |
  | --- | --- |
  | username | `string` |
  | email | `string` |
  | password | `string` |

#### All location

Endpoint: `/location`
Authorization :`bearer token`


#### Location by id

Endpoint: `/locationid`
Authorization :`bearer token`

- Body
  | KEY | TYPEDATA |
  | --- | --- |
  | id | `number` |


#### Location by kota_id

Endpoint: `/locationkotaid`
Authorization :`bearer token`

- Body
  | KEY | TYPEDATA |
  | --- | --- |
  | kota_id | `number` |

## How to Run the Application

### 1. Clone this repository

Clone this repository by run the following code:

```
$ git clone <this-repo-url>
```

### 2. Install dependency packages

Install dependency packages by run the following code inside project folder:

```
$ npm install
```
### 3. Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### 4. Run `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3333](http://localhost:3333) to view it in your browser.

## Postman Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5fe9078d3f60e0a9fd35?action=collection%2Fimport)




