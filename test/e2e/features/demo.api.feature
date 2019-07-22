Feature: API Testing
    As a user, I want to test demo api

    @api
    Scenario Outline: user gets valid response from api
        Given user checks api is up and running
        When  user want to get data by id="<id>"
        Then  user recieves "<response_code>" response from the api
        Examples:
            | id | response_code |
            | 1  | 403           |
            | 2  | 200           |