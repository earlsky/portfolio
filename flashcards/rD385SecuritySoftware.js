const flashcards = [
    { que: "Whis is the best for input validations?", 
        ans: `type() function is used to determine the type of an object.
        While not typically used for input validation directly, it can be used to check the type of user input to ensure it matches the expected data type.
        ex: check if input is a number: type(input) === "number"
        ex: check if input is a string: type(input) === "string"` },
    { que: "Which python function is prone to potential code injection attack?", 
        ans: `eval()` },
    { que: "Which python function prevent log injection attack?", 
        ans: `validate()` },
    { que: "What are two common defensive coding techniques?", 
        ans: `Check functional and preconditions and postconditions.` },
    { que: "Checking functional and preconditions and postconditions is best practice for...", 
        ans: `Defensive Coding` },
    { que: "An attacker exploits cross-site scripting vulnerability", 
        ans: `Access User's data` },
    { que: "A user masquerades as other users, what type of attack was used?", 
        ans: `Cross-Site Scripting` },
    { que: "Which method is used for SQL injection attack?", 
        ans: `Exploiting query parameters` },
    { que: "Exploiting query parameters causes what attack?", 
        ans: `SQL injection` },
    { que: "What is returned when using response.content?", 
        ans: `Returns raw binary content of the HTTP response as bytes.` },
    { que: "Which response method, when sent a request, returns information about the server's response and is delivered back to the console?", 
        ans: `response.content` },
    { que: "What can an attacker do with a log injection attacks?", 
        ans: `Sanitize outbound log messages.` },
    { que: "Which package is meant for internal use by Python for regression testing?", 
        ans: `test` },
    { que: "Which software testing relies on using old test cases?", 
        ans: `Regression testing` },
    { que: "When should regression testing be conducted?", 
        ans: `After some code changes` },
    { que: "What does cross-origin resource sharing(CORS) allow users to do?", 
        ans: `Override same starting policy for specific resources.` },
    { que: "Access Control Allow Origin client request to (server) www.client.url, what does server send back?", 
        ans: `ACAO client.url` },
    { que: "Which protocol caches a token after it has been acquired?", 
        ans: `MSAL(Microsoft Authentication Library)` },
    { que: "📁 https://quizlet.com/939052772/d385-software-security-and-testing-flash-cards/?funnelUUID=b8ba1dcc-461c-4cb6-a620-51c0f011cae3",
        ans: `📁` },
    { que: "⭐️ What is the primary defense against log injection attacks?", 
        ans: `Sanitize outbound log messages.` },
    { que: "An attacker exploits a cross-site scripting vulnerability. What is the attacker able to do?", 
        ans: `Access the user's data` },
    { que: "Which Python function is prone to potential code injection attack?", 
        ans: `eval()` },
    { que: "What are two common defensive coding techniques?", 
        ans: `Check functional and preconditions and postconditions.` },
    { que: "Which package is meant for internal use by Python for regression testing?", 
        ans: `test` },
    { que: "Which Python function is used for input validation?", 
        ans: `type()` },
    { que: "A security analyst has noticed a vulnerability in which an attacker took over multiple users' accounts. Which vulnerability did the security analyst encounter?", 
        ans: `Broken access control` },
    { que: `When creating a new user, an administrator must submit the following fields to an API endpoint:
        Name
        Email Address
        Password
        IsAdmin

        What is the best way to ensure the API is protected against privilege escalation?`, 
        ans: `Implement resource and field-level access control.` },
    { que: "Which method is used for a SQL injection attack?", 
        ans: `Exploiting query parameters` },
    { que: "Which response method, when sent a request, returns information about the server's response and is delivered back to the console?", 
        ans: `response.content` },
    { que: "What does cross-origin resource sharing (CORS) allow users to do?", 
        ans: `Override same starting policy for specific resources` },
    { que: "Which protocol caches a token after it has been acquired?", 
        ans: `MSAL(Microsoft Authentication Library)` },
    { que: "Status Code 200", 
        ans: `OK - Your request was successful` },
    { que: "Status Code 201", 
        ans: `CREATED - Your request was accepted, and the resources was created.` },
    { que: "Status Code 400", 
        ans: `BAD REQUEST: Your request is either wrong or missing something.` },
    { que: "Status Code 401", 
        ans: `UNAUTHORIZED - Your request requires additional permissions` },
    { que: "Status Code 403", 
        ans: `FORBIDDEN - website can be reached, but more permissions needed before accessing further` },
    { que: "Status Code 404", 
        ans: `NOT FOUND - The requested resource does not exist` },
    { que: "Status Code - 405", 
        ans: `METHOD NOT ALLOWED - The endpoint does not allow for that specific HTTP method` },
    { que: "Status Code - 500", 
        ans: `INTERNAL SERVER ERROR - Your request was not expected and probably broke something on the server side` },
    { que: "What type of content the server will respond with?", 
        ans: `Content-Type (header)` },
    { que: "What type of content the client can accept", 
        ans: `Accept (header)` },
    { que: "What software the server is using to communicate with the client", 
        ans: `Server (header)` },
    { que: "What software the client is using to communicate with the server", 
        ans: `User-Agent (header)` },
    { que: "Who's calling the API and what credentials they have", 
        ans: `Authentication (header)` },
    { que: "Which Python function is used to protect against log injection attacks?", 
        ans: `validate()` },
    { que: "A user masquerades as other users, what type of attack was used?", 
        ans: `Cross Site Scripting (XSS)` },
    { que: "Exploiting query parameters is an example of what attack?", 
        ans: `SQL Injection` },
    { que: "What is returned when using response.content?", 
        ans: `Raw binary content of the HTTP response as bytes` },
    { que: "What can an attacker do with a log injection attack?", 
        ans: `Injection of commands a parser can execute` },
    { que: "What can be used on the first (ungraded) page to view status codes", 
        ans: `help(http)` },
    { que: "Status code 401 is common with?", 
        ans: `API related errors` },
    { que: "Status code 403 is common when?", 
        ans: `NO HEADER is provided in the GET request` },
    { que: `A security analyst is reviewing code for improper input validation:
        isValidNumber = False
        while not isValidNumber:
            try:
                pickedNumber = int(input("Pick a number between 1 to 10: "))
                if pickedNumber >= 1 and pickedNumber <= 10:
                    isValidNumber = True
                except:
                    print('You must enter a valid number from 1 to 10')
                print('You picked the number ' + str(pickedNumber))
        Which type of input validation does this code show?`, 
        ans: `Type and Range check` },
    { que: `Consider the following penetration test:
        import requests
        urls = open("websites.txt", "r")
        for url in urls:
            url = url.strip()
            req = requests.get(url)
            print(url, 'report')
        try:
            transport_security = req.headers['Strict-Transport-Security']
        except:
            print('HSTS header not set properly')
        Which security vulnerability is shown?`, 
        ans: `Man-in-the-middle` },
    { que: `Consider the following assertion statement:
        def authorizeAdmin(usr):
            assert isinstance(usr, list) and usr != [], "no user found"
            assert 'admin' in usr, "No admin found"
            print("You are granted full access to the application")
        If __name__ == '__main__':
            authorizeAdmin(['user1'])
        What should be the response after running the code?`, 
        ans: `AssertionError: no admin found` },
    { que: `Consider the following API code snippet:
        import requests
        url = 'https://website.com/'
        result = requests.get(url)
        print(result.content.decode())
        Which status code will the server return?`, 
        ans: `403 - FORBIDDEN` },
    { que: `The user submits the following request to an API endpoint that requires a header:
        Which response code will the user most likely be presented with?`, 
        ans: `404 - NOT FOUND` },
    { que: "Indicates that the server could not find the requested resource. This typically happens when the URL is incorrect or the resource does not exist on the server.", 
        ans: `404 - NOT FOUND` },
    { que: "401 v 403", 
        ans: `Authentication v Authorization
        401: focuses on invalid/missing authentication credentials.
        403: focuses on valid authentication but insufficient authorization.` },
    { que: "", 
        ans: `` },
];