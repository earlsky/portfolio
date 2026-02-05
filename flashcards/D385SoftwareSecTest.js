const flashcards = [
    { que: "2.1.1: Application Logging",
        ans: `Event Logs: record events as they occur.
        Transaction Logs: frequently used with databases to track data changes.
        Message Logs: track public/private chat messages.
        Server Logs: track non-user-specific activities by server.` },
    { que: "Preventing, Responding to Incidents p834-845",
        ans: `` },
    { que: "Security Logs",
        ans: `records access to resources(files,folders,printers)` },
    { que: "System Logs",
        ans: `record system events(when system starts/stops, services start/stop, when service attributes are modded).
        Attackers can shutdown/start system with USB drive and steal data without record of data access.
        Attackers can stop services that monitor the system and access the system without logs recording their actions.
        Attackers can modify attributes of logs.
        Ex: service might be set to Disabled, but attacker can change it to Manual` },
    { que: "Application Logs",
        ans: `Record info for specific applications. Ex: database devs choose to record when someone accesses specific data objects such as tables/views.` },
    { que: "Firewall Logs",
        ans: `Record events related to traffic reaching the firewall, including traffic that firewall allows/blocks. They log packet info (source and destination IP address)` },
    { que: "Proxy Logs",
        ans: `proxy servers improve internet access performance for users and control websites users can visit. Proxy logs have ability to record what sites users visit and how much time they spend on the sites. Can record when users attempt to visit prohibited sites.` },
    { que: "Change Logs",
        ans: `record change requests, approvals, actual changes.
        Can help with disaster recovery, ex: administrators and technicians use change logs to return a system to last known state after a disaster.` },
    { que: "Protecting Log Data",
        ans: `Personnel in the company can use logs to re-create events leading up to and during an incident, but only if logs haven't been modified. If attackers modify the logs, they can erase their activity, nullifying the value of the data. The file information is no longer accurate.
        Protect log files against unauthorized access/modifications.
        Common to store copies of logs on central system, such as security information and event management(SIEM) system for protection.
        National Institue of Standards and Technology(NIST) publishes info on IT security, including Federal Information Processing Standards(FIPS) publications.` },
    { que: "Role of Monitoring",
        ans: `increases accountability, helps investigations, basic troubleshooting.` },
    { que: "Audit Trails",
        ans: `Records information about events and stored in databases or log files.
        Security professionals extract info from audit trail to dis/prove culpability. Can examine and trace events forward/reverse order.
        The flexibility helps tracking down problems, performance issues, attacks, intrusions, security breaches, coding errors, other policy violations.` },
    { que: "Monitoring and Accountability",
        ans: `Monitoring ensure subjects(users/employees) are held accountable for their actions.
        Users claim identity(with username) and prove identity(authentication), and audit trails record their activity while logged in.` },
    { que: "Monitoring and Investigations.",
        ans: `Make sure logs have accurate timestamps. Common method is internal Network Time Protocol(NTP) server synced to trusted time source (public NTP server).` },
    { que: "Monitoring and Problem Identification",
        ans: `Audit trails offer details about recorded events, useful for administrators. They record system failures, OS bugs, software errors, malicious attacks. Log files can capture memory contents when app/system crashes. This helps pinpoint cause of event; ex: if system crashes due to faulty memory, crash dump files diagnose the problem.` },
    { que: "Monitoring Techniques",
        ans: `Monitoring: process of reviewing logs for something specific.Log analysis: detailed and systematic form of monitoring which the logged information is analyzed.` },
    { que: "Security Information and Event Management(SIEM)",
        ans: `"security event management(SEM)", "security information management(SIM)": are tools that provide centaralized logging and real-time analysis of events occurring on systems throughtout an organization. They include agents installed on remote systems that monitor alarm triggers.` },
    { que: "Syslog",
        ans: `RFC 5424, Syslog Protocol, sends event notifications. Centralized syslog server receives syslog messages from devices on a network.` },
    { que: "Sampling",
        ans: `"data extraction": the process of extracting specifics from a large collection of data to construct meaningful representation or summary of a whole. Sampling is a form of data reduction to glean valuable information.` },
    { que: "Clipping Levels",
        ans: `form of nonstatistical sampling. Selects events that exceed "clipping level", a predefined threshold for the event.
        Ex: failed logon attempts are common. Instead of alarming every failed logon, clipping level can be set to raise alarm on five logon attempts within 30-minute period.
        Monitoring system alarms when baseline is exceeded.` },
    { que: "Other Monitoring Tools",
        ans: `ex: CCTV record events on tape for later review.` },
    { que: "Keystroke Monitoring",
        ans: `records keystrokes a user performs on a physical keyboard. Records using hardware or software know as "keylogger".
        Video recorder perform visual monitoring.
        Attackers use keystroke monitoring for malicious purposes
        Keystroke monitoring is compared to wiretapping..` },
    { que: "Traffic and Trend Analysis",
        ans: `form of monitoring that examine flow of packets than packet contents. These processes are aka "network flow monitoring".` },
    { que: "Log Management",
        ans: `refers to all methods used to collect, process, protect log entries.
        SIEM collects and aggregates log entries, then analyzes entries and report suspicious events. After systems forwards log entries to SIEM, it deletes the log entries. But they're not deleted right away, instead use "rollover logging" aka "circular logging" or "log cycling". It begins overwriting old events. ` },
    { que: "Egress Monitoring",
        ans: `traffic leaving a network to the internet. Can detect unauthorized transfer of data outside organization aka "data exfiltration". Methods to detect/prevent data exfil are data loss prevention (DLP) techniques and monitoring for steganography.` },
    { que: "Steganography",
        ans: `allows attackers to embed messages within files (graphic/audio files). Possible to detect steganography attempts if you have both original file and fild you suspect has hidden message.` },
    { que: "Digital Watermark",
        ans: `secretly embedded marker in a digital file. Ex: movie studios digitally mark copies of moives sent to different distributors. Each copy has different mark, if any distributors released pirated copies, the studio can identify which.` },
    { que: "📁 logging - Logging facility for Python",
        ans: `https://docs.python.org/3/library/logging.html` },
    { que: "Debugging",
        ans: `when code is not working right, a developer debugs their code by instrumenting, executing, and inspecting the code.` },
    { que: "Why is debugging important?",
        ans: `improve efficiency of an application by optimizing performance and improving logic.` },
    { que: "Debugging Techniques",
        ans: `Printing out or displaying values of variables and state at certain times during the execution of an application.
        Changing the state of a program to make it do different things. Aka altering the "path" of the program.
        Stepping through the execution of a program line by line.
        Breakpoints.
        Trace Points
        Stopping the program at certain events.
        Viewing the output of a program in a debugger window.` },
    { que: "Debugging Tools - pdb",
        ans: `most commonly-used debugger built into the Python standard library and is the one most developers come across first when trying to debug their programs.` },
    { que: "Debugging Tools - Web-PDB",
        ans: `provides a web-based user interface for pdb to make it easier to understand what is happening while inspecting your running code.` },
    { que: "Debugging Tools - wdb",
        ans: `uses WebSockets to allow you to debug running Python code from a web browser.` },
    { que: "Debugging Tools - Pyflame",
        ans: `a profiling tool that generates flame graphs for executing Python program code.` },
    { que: "Debugging Tools - objgraph",
        ans: `uses graphviz to draw the connections between Python objects running in an application` },
    { que: "📁 Debugging and Profiling - python docs",
        ans: `https://docs.python.org/3/library/debug.html` },
    { que: "📁 Hacking and Securing Python Applications web site",
        ans: `https://qwiet.ai/hacking-and-securing-python-applications/` },
    { que: "XML External Entity (XXE) Attack",
        ans: `when attackers exploit an XML parser to read arbitrary files on your server. Using an XXE, attackers might also be able to retrieve user information, configuration files, or other sensitive information like AWS credentials. To prevent XXE attacks, you need to explicitly disable these functionalities.` },
    { que: "Insecure Deserialization",
        ans: `Serialization: process which an object in programming language is converted into a format that can be saved to the database or transferred over a network. 
        Deserialization: the opposite: when serialized object is read from a file or the network and converted back into an object.
        Insecure deserialization: when attacker manipulate the serialized object and cause unintended consequences in the program’s flow. Insecure deserialization bug will often result in authentication bypass, denial of service, or arbitrary code execution.
        To prevent insecure deserialization, keep an eye out for patches and keep dependencies up to date. Helps to avoid using serialized objects and use sime simple data types(strings/arrays) instead.` },
    { que: "Remote Code Execution (RCE)",
        ans: `when attackers execute their code on your machine. This can happen through command injection vulnerabilities. They are a type of remote code execution that happens when user input is concatenated directly into system command. The application cannot distinguish between where user input is and where system command is, so the application executes user input as code. Attacker will be able to execute arbitrary commands on the machine.
        To prevent command injection is to implement robust input validation in the form of an allowlist. ` },
    { que: "SQL Injection",
        ans: `attacker injects data to manipulate SQL commands. When the application does not validate user input properly, attackers can insert characters special to the SQL language to mess with the query’s logic, thereby executing arbitrary SQL code.
        SQL injections allow attacker code to change the structure of application’s SQL queries to steal/modify data, or execute arbitrary commands in the underlying operating system. Best way to prevent SQL injections is to use parameterized statements, which makes SQL injection virtually impossible.` },
    { que: "NoSQL Injection",
        ans: `NoSQL(Not Only SQL) databases, don’t use SQL language. NoSQL injection refers to attacks that inject data into the logic of these database. These attacks can lead to authentication bypass and remote code execution.` },
    { que: "LDAP Injection",
        ans: `Lightweight Directory Access Protocol (LDAP): way of querying a directory service about the system’s users and devices. Ex: it’s used to query Microsoft’s Active Directory. When an application uses untrusted input in LDAP queries, attackers can submit crafted inputs that cause malicious effects. Using LDAP injection, attackers can bypass authentication and mess with the data in the directory. Use parameterized queries to prevent LDAP injection. ` },
    { que: "Log Injection",
        ans: `Attackers often modify log files to cover up their tracks during an attack. Log injection is one of the ways attackers can change your log files. It happens when the attacker tricks the application into writing fake entries in your log files.
        Log injection often happens when the application does not sanitize newline characters “\n” in input written to logs. Attackers can make use of the new line character to insert new entries into application logs. Another way attackers can exploit user input in logs is that they can inject malicious HTML into log entries to attempt to trigger an XSS on the browser of the admin who views the logs.
        To prevent log injection attacks, you need a way to distinguish between real log entries, and fake log entries injected by the attacker. One way to do this is by prefixing each log entry with extra meta-data like a timestamp, process ID, and hostname. You should also treat the contents of log files as untrusted input and validate it before accessing or operating on it.` },
    { que: "Mail Injection",
        ans: `web applications send emails to users based on their actions. For instance, if you subscribed to a feed on a news outlet, the website might send you a confirmation with the name of the feed.
        Mail injection happens when the application employs user input to determine which addresses to send emails to. This can allow spammers to use your server to send bulk emails to users or enable scammers to conduct social engineering campaigns via your email address. ` },
    { que: "Template Injection",
        ans: `Template engines are a type of software used to determine the appearance of a web page. These web templates, written in template languages such as Jinja, provide developers with a way to specify how a page should be rendered by combining application data with web templates. Together, web templates and template engines allow developers to separate server-side application logic from client-side presentation code during web development.
        Template injection refers to injection into web templates. Depending on the permissions of the compromised application, attackers might be able to use the template injection vulnerability to read sensitive files, execute code, or escalate their privileges on the system.` },
    { que: "Regex Injection",
        ans: `regular expression(regex) is a special string that describes a search pattern in text. ex: applications let users provide their own regex patterns for the server to execute or build a regex with user input. Regex injection or regular expression denial of service attack (ReDoS), happens when an attacker provides a regex engine with a pattern that takes a long time to evaluate.
        Regex injection can be prevented by not generating regex patterns from user input, and by constructing well-designed regex patterns whose required computing time does not grow exponentially as the text string grows. ` },
    { que: "XPath Injection",
        ans: `a query language for XML documents(SQL for XML). XPath is used to query and perform operations on data stored in XML documents. For example, XPath can be used to retrieve salary information of employees stored in an XML document. It can also be used to perform numeric operations or comparisons on that data.
        An attack that injects into XPath expressions in order to alter the outcome of the query. Like SQL injection, it can be used to bypass business logic, escalate user privilege, and leak sensitive data. Since applications often use XML to communicate sensitive data across systems and web services, these are the places that are the most vulnerable to XPath injections. Similar to SQL injection, you can prevent XPath injection by using parameterized queries.` },
    { que: "Header Injection",
        ans: `when HTTP response headers are dynamically constructed from untrusted input. Depending on which response header the vulnerability affects, header injection can lead to cross-site scripting, open redirect, and session fixation.
        Ex: if Location header can be controlled by a URL parameter, attackers can cause an open redirect by specifying their malicious site in the parameter. Attackers might even be able to execute malicious scripts on the victim’s browser, or force victims to download malware by sending completely controlled HTTP responses to the victim via header injection. Prevent header injections by avoiding writing user input into response headers, stripping new-line characters from user input (newline characters are used to create new HTTP response headers), and using an allowlist to validate header values.` },
    { que: "Session Injection and Insecure Cookies",
        ans: `Session injection is a type of header injection. If an attacker can manipulate the contents of their session cookie, or steal someone else’s cookies, they can trick the application into thinking that they are someone else. There are three main ways that an attacker can obtain someone else’s session: session hijacking, session tampering, and session spoofing.` },
    { que: "Session hijacking",
        ans: `the attacker stealing someone else session cookie and using it as their own. Attackers often steal session cookies with XSS or MITM (man-in-the-middle) attacks.` },
    { que: "Session tampering",
        ans: `when attackers can change their session cookie to change how the server interprets their identity. This happens when the session state is communicated in the cookie and the cookie is not properly signed or encrypted.` },
    { que: "“Spoof” sessions",
        ans: `Attackers "spoof sessions when session IDs are predictable. Attackers forge valid session cookies and log in as someone else. Preventing these session management pitfalls requires multiple layers of defense."` },
    { que: "Host Header Poisoning",
        ans: `Web servers often host multiple different websites on the same IP address. After an HTTP request arrives at an IP address, the server will forward the request to the host specified in the Host header. Although Host headers are typically set by a user’s browser, it’s still user-provided input and thus should not be trusted.
        If a web application does not validate the Host header before using it to construct addresses, attackers can launch a range of attacks, like XSS, server-side request forgery _(_SSRF), and web cache poisoning attacks via the Host header. For instance, if the application uses the Host header to determine the location of scripts, the attacker could submit a malicious Host header to make the application execute a malicious script:
        String scriptURL = "https://" + properties.getProperty("host") + "/script.js"; ` },
    { que: "Sensitive Data Leaks",
        ans: `when an application fails to properly protect sensitive information, giving users access to information they shouldn’t have available to them. This sensitive information can include technical details that aid an attack, like software version numbers, internal IP addresses, sensitive filenames, and file paths. It could also include source code that allows attackers to conduct a source code review on the application. Sometimes, the application leaks private information of users, such as their bank account numbers, email addresses, and mailing addresses.
        Some common ways that an application can leak sensitive technical details are through descriptive response headers, descriptive error messages with stack traces or database error messages, open directory listings on the system’s file system, and revealing comments in HTML and template files.` },
    { que: "Authentication Bypass",
        ans: `Authentication is proving one’s identity before executing sensitive actions or accessing sensitive data. If authentication is not implemented correctly on an application, attackers can exploit misconfigurations to gain access to functionalities.` },
    { que: "Improper Access Control",
        ans: `Authentication bypass issues are essentially improper access control. Improper access control occurs anytime when access control in an application is improperly implemented and can be bypassed by an attacker. However, access control comprises of more than authentication. While authentication asks a user to prove their identity: “Who are you?”, authorization asks the application “What is this user allowed to do?”. Proper authentication and authorization together ensure that users cannot access functionalities outside of their permissions.
        There are several ways of configuring authorization for users: role-based access control, ownership-based access control, access control lists, and more. ` },
    { que: "Directory Traversal",
        ans: `another type of improper access control. When attackers can view, modify, or execute files they shouldn’t have access to by manipulating file paths in user-input fields. This process involves manipulating file path variables the application uses to reference files by adding the ../ characters or other special characters to the file path. The ../ sequence refers to the parent directory of the current directory in Unix systems, so by adding it to a file path, you can often reach system files outside the web directory.
        Attackers use directory traversals to access sensitive files(configuration files, log files, and source code). To prevent directory traversals, you should validate user input that is inserted into file paths, or avoid direct references to file names and use indirect identifiers` },
    { que: "Arbitrary File Writes",
        ans: `work similarly to directory traversals. If an application writes files to the underlying machine and determines the output file name via user input, attackers might be able to create arbitrary files on any path they want, or overwrite existing system files. Attackers might be able to alter critical system files like password files or log files, or add their own executables into script directories.
        The best way to mitigate this risk is by not creating file names based on any user input, including session information, HTTP input, or anything that the user controls. You should control the file name, path, and extension for every created file. For instance, you can generate a random alphanumeric filename every time the user needs to generate a unique file. You can also strip user input of special characters before creating the file. ` },
    { que: "Denial of Service Attacks",
        ans: `"DoS attacks", disrupts the target machine so that legitimate users cannot access its services. Attackers can launch DoS attacks by exhausting all the server’s resources, crashing processes, or making too many HTTP requests at once.
        Denial of service attacks are hard to defend against. To minimize your risk by making it as difficult as possible for attackers, you can deploy a firewall that offers DoS protection, and prevent logic-based DoS attacks by setting limits on file sizes and disallowing certain file types. ` },
    { que: "Encryption Vulnerabilities",
        ans: `one of the most severe vulnerabilities that can happen in an application. Encryption vulnerabilities refer to when encryption and hashing are not properly implemented. This can lead to widespread data leaks and authentication bypass through session spoofing.
        common mistakes developers make when implementing encryption on a site:
        Using weak algorithms.
        Using the wrong algorithm for the purpose.
        Creating custom algorithms.
        Generating weak random numbers.
        Mistaking encoding for encryption.` },
    { que: "Insecure TLS Configuration and Improper Certificate Validation",
        ans: `make sure that your application in transmitting data properly. A good way of making sure that you are communicating over the Internet securely is to use HTTPS with a modern version of transport layer security (TLS) and a secure cipher suite.
        During this process, you need to ensure that you are communicating with a trusted machine, and not a malicious third-party. TLS uses digital certificates as the basis of its public key encryption, and you need to validate these certificates before establishing the connection with the third-party. You should verify that the server you are trying to connect to has a certificate that is issued by a trusted certificate authority (CA) and that none of the certificates in the certificate chain are expired.` },
    { que: "Mass Assignment",
        ans: `the practice of assigning values to multiple variables or object properties all at once. Mass assignment vulnerabilities happen when the application automatically assigns user input to multiple program variables or objects. This is a feature in many application frameworks designed to simplify application development.
        However, this feature sometimes allows attackers to overwrite, modify, or create new program variables or object properties at will. This can lead to authentication bypass, and manipulation of program logic. To prevent mass assignments, you can disable the mass assignment feature with the framework you are using, or use a whitelist to only allow assignment on certain properties or variables.` },
    { que: "Open Redirects",
        ans: `Websites often need to automatically redirect their users. This happens when unauthenticated users try to access a page that requires logging in. The website will usually redirect those users to thelogin page, and then return them to their original location after they are authenticated.
        During an open-redirect attack, an attacker tricks the user into visiting an external site by providing them with a URL from the legitimate site that redirects somewhere else. This can lead users to believe that they are still on the original site, and help scammers build a more believable phishing campaign.
        To prevent open redirects, you need to make sure the application doesn’t redirect users to malicious locations. For instance, you can disallow offsite redirects completely by validating redirect URLs. There are many other ways of preventing open redirects, like checking the referrer of requests, or using page indexes for redirects. But because it’s difficult to validate URLs, open redirects remain a prevalent issue in modern web applications.` },
    { que: "Cross-Site Request Forgery(CSRF)",
        ans: ` client-side technique used to attack other users of a web application. Using CSRF, attackers can send HTTP requests that pretend to come from the victim, carrying out unwanted actions on a victim’s behalf. For example, an attacker could change your password or transfer money from your bank account without your permission.
        Unlike open redirects, a surefire way of preventing CSRF: using a combination of CSRF tokens and SameSite cookies, and avoid using GET requests for state-changing actions.` },
    { que: "Server-Side Request Forgery(SSRF)",
        ans: `a vulnerability that happens when an attacker is able to send requests on behalf of a server. It allows attackers to “forge” the request signatures of the vulnerable server, therefore assuming a privileged position on a network, bypassing firewall controls, and gaining access to internal services.
        Depending on the permissions given to the vulnerable server, an attacker might be able to read sensitive files, make internal API calls, and access internal services like hidden admin panels. The easiest way to prevent SSRF vulnerabilities is to never make outbound requests based on user input. But if you do need to make outbound requests based on user input, you’ll need to validate those addresses before initiating the request.` },
    { que: "Trust Boundary Violations",
        ans: `where untrusted user input enters a controlled environment. Ex: an HTTP request is considered untrusted input until it has been validated by the server.
        There should be a clear distinction between how you store, transport, and process trusted and untrusted input. Trust boundary violations happen when this distinction is not respected, and trusted and untrusted data are confused with each other. For instance, if trusted and untrusted data are stored in the same data structure or database, the application will start confusing the two. In this case, untrusted data might be mistakenly seen as validated.
        A good way to prevent trust boundary violation is to never write untrusted input into session stores until it is verified. ` },
    { que: "📁 Python Static Code Analysis",
        ans: `https://rules.sonarsource.com/python/RSPEC-5145/`
    },
    { que: "Logging should not be vulnerable to injection attacks",
        ans: `Log injection occurs when an application fails to sanitize untrusted data used for logging.
        An attacker can forge log content to prevent an organization from being able to trace back malicious activities.
        What is the potential impact?:
        If attacker insert arbitrary data into a log file, the integrity of the chain of events being recorded are compromised.
        This occurs because attackers inject the log entry separator of the logger framework, commonly newlines, and thus insert artificial log entries.
        Other attacks could also occur requiring only field pollution, such as cross-site scripting (XSS) or code injection (for example, Log4Shell) if the logged data is fed to other application components, which may interpret the injected data differently.
        The focus of this rule is newline character replacement. `
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "",
        ans: ``
    },
    { que: "📁 Python Security Considerations",
        ans: `https://docs.python.org/3/library/security_warnings.html` },
    { que: "base64 in RFC 4648",
        ans: `` },
    { que: "base64.b64code(s,altchars=None,validate=False)",
        ans:`Deocde the Base64 encoded bytes-like object or ASCII string s and return decoded bytes.
        Optional altchars must be bytes-like object or ASCII length of 2 which specifies alternative alphabet used instead of + and / characters.
        If "validate" is "False" (the default), characters that are neither in normal base-64 alphabet nor the alternative alphabet ` },
    { que: "hashlib - Secure hashes and message digests",
        ans: `` },
    { que: "hashlib: all constructors take 'usedforsecurity' keyword-only",
        ans: `` },
    { que: "http.server: HTTP servers",
        ans: `` },
    { que: "logging: Logging configuration uses eval()",
        ans: `` },
    { que: "multiprocessing: connection.recv() uses pickle",
        ans: `` },
    { que: "pickle: Restricting globals in pickle",
        ans: `` },
    { que: "random: use secrets",
        ans: `` },
    { que: "shelve: based on pickle and unsuitable for dealing w untrusted sources",
        ans: `` },
    { que: "ssl/tls security considerations",
        ans: `` },
    { que: "subprocess security considerations",
        ans: `` },
    { que: "tempfile: mktemp deprecated to vulnerability to race conditions",
        ans: `` },
    { que: "xml security",
        ans: `` },
    { que: "zipfile: cause disk volume exhaustion",
        ans: `` },
    { que: "📁 Defensive Programming",
        ans: `https://swcarpentry.github.io/python-novice-inflammation/10-defensive.html
        Assume mistakes will happen and guard against them. This is defensive programming,` },
    { que: "Assertions",
        ans: `Common way of defensive programming that checks itself as it runs.
        Code checks itself as it runs. An assertion is simply a statement that something must be true at a certain point in a program. When Python sees one, it evaluates the assertion’s condition. If it’s true, Python does nothing, but if it’s false, Python halts the program immediately and prints the error message if one is provided. ` },
    { que: "Assertion Categories",
        ans: `Precondition: must be true at the start of a function in order for it to work correctly.
        Postcondition: function guarantees is true when it finishes.
        Invariant: always true at particular point inside a piece of code.` },
    { que: "General Defensive Coding Concepts - Fundamental Concepts",
        ans: `Never trust data.
        Validate everything.
        Robust error handling.
        Unconstrained - Constrain input as much as possible.
        Unfiltered - all inputs must be filtered.
        Clean code.
        Test early/often.` },
    { que: "Computer Emergency Response Team(CERT) Top 10 Secure Coding Practices - Part A",
        ans: `1. Input Validation: Be suspicious of all external data sources, including user-controlled files, command line arguments, and network interfaces. Proper validation can eliminate the majority of software vulnerabilities.
        2. Heed Compiler Warnings: Compile code using the highest available warning level and address all warnings by modifying the code. Supplement this with static and dynamic analysis tools.
        3. Architect and Design for Security Policies: Create a software architecture that enforces security policies. For example, if a system requires different privileges at different times, divide it into distinct subsystems with specific privilege sets.
        4. Keep it Simple: Favor simple and small designs. Complexity increases the risk of implementation, configuration, and use errors, making security assurance more difficult.
        5. Default Deny: Base access decisions on permission rather than exclusion. By default, access should be denied, and the protection scheme should specify only the conditions under which it is permitted.` },
    { que: "Computer Emergency Response Team(CERT) Top 10 Secure Coding Practices - Part B",
        ans: `6. Adhere to the Principle of Least Privilege: Ensure every process executes with only the minimum set of privileges necessary for its job. Limit the duration that elevated permissions are held.
        7. Sanitize Data Sent to Other Systems: Cleanse all data passed to complex subsystems like command shells, relational databases , or off-the-shelf components to prevent injection attacks (e.g., SQL or command injection).
        8. Practice Defense in Depth: Implement multiple defensive strategies. If one layer of defense fails, others should be in place to prevent or limit the impact of an exploit.
        9. Use Effective Quality Assurance (QA) Techniques: Incorporate security-focused QA such as fuzz testing, penetration testing, and independent source code audits. Independent reviews can often catch invalid assumptions made by developers.
        10. Adopt a Secure Coding Standard: Apply a formal secure coding standard tailored to your target development language and platform. ` },
    { que: "Defensive Coding - Basic Concepts",
        ans: `All Data is Important: until proven otherwise. Does not mean all data is equal.
        All Data is Tainted: until proven otherwise. Assume it's tainted, until you verify it's clean.
        All Code is Insecure: until proven otherwise. Unless you coded it yourself.` },
    { que: "Open Source Security Testing Methodology Manual(OSSTMM)",
        ans: `Purpose: Any Security Testing.
        Peer Reviewed: Institute for Security and Open Methodologies(ISECOM).` },
    { que: "OSSTMM - Software Security Testing Approaches",
        ans: `Project Scope:
        Confidentiality:
        Change Process: Any changes must go through formal change control process.
        Test Plan:
        Test Process:
        Reporting Standards: What to report.` },
    { que: "Flaw Hypothesis Methodology(FHM)",
        ans: `Hypothesis: testable educated guess.
        Prioritize list: Probability: Difficulty, Discoverability, Damage (that could be caused by it).
        Test from List: Types of Testing: White Box(Tester has full knowledge of the code), Black Box(no knowledge), Gray Box(some knowledge).` },
    { que: "Six Sigma (Quality Methodology)(DMAIC)",
        ans: `Define: Define your goals, processes, what you want to measure.
        Measure:
        Analyze: 
        Improve:
        Control: mitigating risks and maintain quality.` },
    { que: "Six Sigma (DMADV)",
        ans: `Define:
        Measure:
        Analyze:
        Design:
        Verify: that new design accopmlishes goal.` },
    { que: "📁 Gentle Introduction to Unit Testing in Python",
        ans: `https://machinelearningmastery.com/a-gentle-introduction-to-unit-testing-in-python/` },
    { que: "Intro to Unit Testing Python (5 Parts)",
        ans: `What are unit tests and why are they important?
        What is Test Driven Development(TDD)?
        Using Python's built-in PyUnit framework.
        Using PyTest library.
        Unit testing in action.` },
    { que: "What Are Unit Tests and Why Are They Important?",
        ans: `Unit Test: checks single component of code, usually modularized as a function, and ensures that it performs as expected. Unit tests help isolate errors.` },
    { que: "Test Driven Development(TDD)(3 Rules)",
        ans: `You are not allowed to write any production code unless it is to make a failing unit test pass.
        You are not allowed to write any more of a unit test than is sufficient to fail, and compilation failures are failures.
        You are not allowed to write any more production code than is sufficient to pass the one failing unit test.` },
    { que: "Using Python's Built-In PyUnit Framework",
        ans: `PyUnit is Python’s built-in unit testing framework and Python’s version of JUnit testing framework for Java. To build a test file, import "unittest" library to use PyUnit` },
    { que: "Using PyTest Library",
        ans: `alternative to built-in unittest module. To start PyTest, you need to install it: pip install pytest.
        Like PyUnit, PyTest has a lot of other functionality that allow you to build comprehensive and advanced unit tests.` },
    { que: "Unit Testing in Action",
        ans: `When doing machine learning that consumes stock market data, having unit teset framework helps you identify data preprocessing is working as expected.
        Building unit tests seem time consuming/tedious, but are critical part of CI pipeline and tools for catching bugs early before moving further down the pipeline and become costly to address.` },
    { que: "📁 unittest - Unit testing framework",
        ans: `https://docs.python.org/3/library/unittest.html` },
    { que: "unittest",
        ans: `inspired by JUnit and major unit testing frameworks in other languages. Supports test automation, sharing of setup and shutdown code for tests, aggregation of tests into collections, and independence of the tests from reporting framework.` },
    { que: "unittest - test fixture",
        ans: `represents the preparation needed to perform one or more tests, and any associated cleanup actions. This may involve, for example, creating temporary or proxy databases, directories, or starting a server process.` },
    { que: "unittest - test case",
        ans: `the individual unit of testing. It checks for a specific response to a particular set of inputs. unittest provides a base class, TestCase, which may be used to create new test cases.` },
    { que: "unittest - test suite",
        ans: `a collection of test cases, test suites, or both. It is used to aggregate tests that should be executed together.` },
    { que: "unittest - test runner",
        ans: `a component which orchestrates the execution of tests and provides the outcome to the user. The runner may use a graphical interface, a textual interface, or return a special value to indicate the results of executing the tests.` },
    { que: "Defensive Programmer: Advanced Concepts - Session Management",
        ans: `What is a Session? 
        Interactive HTTP(Stateless)
        Temporary
        Two or more devices: 
        Necessary for stateless communication` },
    { que: "Maintain Session",
        ans: `Session ID: use pseudo random number generator algorithm to prevent session hijacking.
        Cookies: saves session. Not bad if not managed correctly: shouldn't contain PII, passwords, credit card data, etc. Should be encrypted.
        Session Expiration: few minutes generally okay. Website that requires filling out tax information should be elongated to a few hours. But should eventually expire incase user forgets to close browser.` },
    { que: "Secure Sessions",
        ans: `Use HTTPS: http encrypted with transport layer security(TLS). Use only if maintaining session data.
        Tokens: use to authenticate the person. As soon as token is used, needs to be invalidated on server side to prevent someone using the same authentication token to perform session hijacking.
        Expire: Everything expires(cookies, session IDs, tokens) naturally(nothing lasts forever). Gives attacker short time to attack the server's system.` },
    { que: "📁 Complete Penetration Testing Guide with Sample Test Cases",
        ans: `https://www.softwaretestinghelp.com/penetration-testing-guide/` },
    { que: "Penetration Testing",
        ans: `process of identifying security vulnerabilities in application by evaluating system/network with different malicious techniques. Weak points of system are exploited by authorized simulated attack.
        Penetration test aka "pen test", penetration tester aka "ethical hacker"` },
    { que: "What is Penetration Testing?",
        ans: `Penetration test will tell whether existing defensive measures employed on the system are strong enough to prevent security breaches. Penetration test reports suggest countermeasures which can be taken to reduce risk of system being hacked.` },
    { que: "Causes of Vulnerability - Design/Development Errors",
        ans: `flaws in design of hardware/software. These bugs put business-critical data at risk of exposure.` },
    { que: "Causes of Vulnerability - Poor System Configuration",
        ans: `If the system is poorly configured, then it can introduce loopholes through which attackers can enter into the system & steal the information.` },
    { que: "Causes of Vulnerability - Human errors",
        ans: `improper disposal of documents, leaving the documents unattended, coding errors, insider threats, sharing passwords over phishing sites, etc. can lead to security breaches.` },
    { que: "Causes of Vulnerability - Connectivity",
        ans: `If the system is connected to an unsecured network (open connections) then it comes within the reach of hackers.` },
    { que: "Causes of Vulnerability - Complexity",
        ans: `security vulnerability rises in proportion to the complexity of a system. The more features a system has, the more are the chances of the system being attacked.` },
    { que: "Causes of Vulnerability - Password",
        ans: `Passwords should not be shared with anyone at any cost and passwords should be changed periodically. In spite of these instructions, at times people reveal their passwords to others, write them down somewhere and keep easy passwords that can be guessed.` },
    { que: "Causes of Vulnerability - User Input",
        ans: `ex: SQL injection, buffer overflows, etc. The data received electronically through these methods can be used to attack the receiving system.` },
    { que: "Causes of Vulnerability - Management",
        ans: `Security is hard & expensive to manage. Sometimes organizations lack behind in proper risk management and hence vulnerability gets induced in the system.` },
    { que: "Causes of Vulnerability - Lack of training to staff",
        ans: `leads to human errors and other vulnerabilities.` },
    { que: "Causes of Vulnerability - Communication",
        ans: `Channels like mobile networks, internet, telephone opens up security theft scope.` },
    { que: "Penetration Testing Tools/Companies",
        ans: `Automated tests identify stanadard vulnerabilities.
        Pentest tools verify security loopholes by examining data encryption techniques and figuring out hard-coded values(usernames/passwords).` },
    { que: "Criteria for selecting best penetration tool:",
        ans: `Easy to deploy, configure and use.
        Scans your system easily.
        Categorizes vulnerabilities based on severity that need an immediate fix.
        Be able to automate the verification of vulnerabilities.
        Re-verifies the exploits found previously.
        Generates detailed vulnerability reports and logs.` },
    { que: "Why Penetration Testing?",
        ans: `WannaCry ransomware attack locked computers around th world and demanded ransom payments via Bitcoin.` },
    { que: "Penetration Testing is mainly required for:",
        ans: `Financial or critical data that must be secured while transferring it between different systems or over the network.
        Many clients are asking for pen testing as part of the software release cycle.
        To secure user data.
        To find security vulnerabilities in an application.
        To discover loopholes in the system.
        To assess the business impact of successful attacks.
        To meet the information security compliance in the organization.
        To implement an effective security strategy within the organization.
        Big organizations look for PCI(Payment Card Industry) compliance certifications before doing business with third-party clients` },
    { que: "What Shoudl Be Tested?",
        ans: `Software(OS, services, applications)
        Hardware
        Network
        Processes
        End-user behavior` },
    { que: "Penetration Testing Types - Social Engineering Test",
        ans: `make a person reveal sensitive information like passwords, business-critical data, etc. These tests are mostly done through phone or internet and it targets certain helpdesks, employees & processes.
        Human errors are main causes of security vulnerability. Security standards/policies should be followed by all staff members to avoid social engineering penetration attempts. Never mention sensitive information via email/phone. Security audits identify and correct process flaws.` },
    { que: "Penetration Testing Types - Web Application Test",
        ans: `Using software methods, can verify if application is exposed to security vulnerabilities. It checks security vulnerability of web apps and software programs positioned in the target environment.` },
    { que: "Penetration Testing Types - Physical Penetration Test",
        ans: `applied to protect sensitive data. This is generally used in military and government facilities. All physical network devices and access points are tested for the possibility of any security breach. This test is not very relevant to the scope of software testing.` },
    { que: "Penetration Testing Types - Network Services Test",
        ans: `most commonly performed penetration tests where openings in the network are identified by which entry is being made in the systems on the network to check what kind of vulnerabilities are there. Can be done locally/remotely.` },
    { que: "Penetration Testing Types - Client-side Test",
        ans: `aims to search and exploit vulnerabilities in client-side software programs.` },
    { que: "Penetration Testing Types - Remote dial-up war dial",
        ans: `searches for modems in the environment and tries to log in to the systems connected through these modems by password guessing or brute-forcing.` },
    { que: "Penetration Testing Types - Wireless Security Test",
        ans: `discovers open, unauthorized and less secure hotspots or Wi-Fi networks and connects through them.` },
    { que: "Types of Penetration Testing - Black Box",
        ans: `tester assesses the target system, network or process without the knowledge of its details. They just have a very high level of inputs like URL or company name using which they penetrate the target environment. No code is being examined in this method.` },
    { que: "Types of Penetration Testing - White Box",
        ans: `tester is equipped with complete details about the target environment – Systems, network, OS, IP address, source code, schema, etc. It examines the code and finds out design & development errors. It is a simulation of an internal security attack.` },
    { que: "Types of Penetration Testing - Grey Box",
        ans: `tester has limited details about the target environment. It is a simulation of external security attacks.` },
    { que: "Pen Testing Techniques",
        ans: `Manual Penetration.
        Using Automated penetration testing tools.
        Combination of both, manual/automated processes.` },
    { que: "Manual Penetration Test",
        ans: `It’s difficult to find all vulnerabilities using automated tools. There are some vulnerabilities that can only be identified by manual scan. Penetration testers can perform better attacks on applications based on their skills and knowledge of the system being penetrated.
        Methods like social engineering can be done by humans. Manual checks include design, business logic as well as code verification.` },
    { que: "Penetration Test Process - Data Collection",
        ans: `Various methods including Google search are used to get target system data. One can use the web page source code analysis technique to get more info about the system, software and plugin versions.
        There are many free tools and services available in the market which can give you information like database or table names, DB versions, software versions, the hardware used and various third-party plugins used in the target system.` },
    { que: "Penetration Test Process - Vulnerability Assessment",
        ans: `Based on the data collected in the first step, one can find the security weakness in the target system. This helps penetration testers to launch attacks using identified entry points in the system.` },
    { que: "Penetration Test Process - Actual Exploit",
        ans: `a crucial step. It requires special skills and techniques to launch an attack on the target system. Experienced penetration testers can use their skills to launch an attack on the system.` },
    { que: "Penetration Test Process - Result in analysis and report preparation",
        ans: `After completion of penetration tests, detailed reports are prepared for taking corrective actions. All identified vulnerabilities and recommended corrective methods are listed in these reports. You can customize the vulnerability report format (HTML, XML, MS Word or PDF) as per your organization’s needs.` },
    { que: "📁 Penetration testing methodologies and standards",
        ans: `https://www.ibm.com/think/insights/pen-testing-methodology` },
    { que: "Top Penetration Testing Methodologies - Open-Source Security Testing Methodology Manual(OSSTMM)",
        ans: `one of the most popular standards of penetration testing. This methodology is peer-reviewed for security testing and was created by the Institute for Security and Open Methodologies (ISECOM).
        The method is based on a scientific approach to pen testing with accessible and adaptable guides for testers. The OSSTMM includes key features, such as an operational focus, channel testing, metrics and trust analysis in its methodology.
        OSSTMM provides a framework for network penetration testing and vulnerability assessment for pen testing professionals. It is meant to be a framework for providers to find and resolve vulnerabilities, such as sensitive data and issues surrounding authentication.` },
    { que: "Top Penetration Testing Methodologies - Open Web Application Security Project(OWASP)",
        ans: `an open-source organization dedicated to web application security.
        organization’s goal is to make all its material free and easily accessible for anyone who wants to improve their own web application security. OWASP has its own Top 10 , which is a well-maintained report outlining the biggest security concerns and risks to web applications, such as cross-site scripting, broken authentication and getting behind a firewall. OWASP uses the top 10 list as a basis for its OWASP Testing Guide.
        The guide is divided into three parts: OWASP testing framework for web application development, web application testing methodology and reporting. The web application methodology can be used separately or as a part of the web testing framework for web application penetration testing, mobile application penetration testing, API penetration testing, and IoT penetration testing.` },
    { que: "Top Penetration Testing Methodologies - Penetration Testing Execution Standard(PTES)",
        ans: `a comprehensive penetration testing method.
        designed by a team of information security professionals and is made up of seven main sections covering all aspects of pen testing. The purpose of PTES is to have technical guidelines to outline what organizations should expect from a penetration test and guide them throughout the process, starting at the pre-engagement stage.
        PTES aims to be the baseline for penetration tests and provide a standardized methodology for security professionals and organizations. The guide provides a range of resources, such as best practices in each stage of the penetration testing process, from start to finish. Some key features of PTES are exploitation and post exploitation. Exploitation refers to the process of gaining access to a system through penetration techniques such as social engineering and password cracking. Post exploitation is when data is extracted from a compromised system and access is maintained` },
    { que: "Top Penetration Testing Methodologies - Information System Security Assessment Framework(ISSAF)",
        ans: ` pen testing framework supported by the Information Systems Security Group (OISSG).
        This methodology is no longer maintained and is likely not the best source for the most up-to-date information. However, one of its main strengths is that it links individual pen testing steps with specific pen testing tools. This type of format can be a good foundation for creating an individualized methodology.` },
    { que: "Top Penetration Testing Methodologies - National Institute of Standards and Technology(NIST)",
        ans: `a cybersecurity framework that provides a set of pen testing standards for the federal government and outside organizations to follow. NIST is an agency within the U.S. Department of Commerce and should be considered the minimum standard to follow.
        NIST penetration testing aligns with the guidance sent by NIST. To comply with such guidance, organizations must perform penetration tests following the pre-determined set of guidelines.` },
    { que: "Pen Testing Stages",
        ans: `Set Scope
        Start Test
        Report Findings` },
    { que: "Pen Testing Stages - Set Scope",
        ans: `Before pen test begins: the testing team and the company set a scope for the test. The scope outlines which systems will be tested, when the testing will happen, and the methods pen testers can use. The scope also determines how much information the pen testers will have ahead of time.` },
    { que: "Pen Testing Stages - Start Test",
        ans: `test scoping plan and assess vulnerabilities and functionality. In this step: network and vulnerability scanning can be done to get a better understanding of the organization’s infrastructure. Internal testing and external testing can be done depending on the organization’s needs. There are a variety of tests the pen testers can do, including a black-box test, white-box test, and gray-box test. Each provides varying degrees of information about the target system.
        Once overview of the network is established, testers can analyze the system and applications within the scope. In this step: pen testers gather as much information as possible to understand any misconfigurations.` },
    { que: "Pen Testing Stages - Report Findings",
        ans: `report and debrief. In this step: develop a penetration testing report with all the findings from the pen test outlining the vulnerabilities identified. The report should include a plan for mitigation and the potential risks if remediation does not occur.` },
    { que: "Defensive Programmer: Defensive Techniques - Exception Handling",
        ans: `Principles: Trap All Errors, Specific Error Handling, Trap On Site
        Error Messages: Meaningful, Not Too Much, Actionable` },
    { que: "Defensive Programmer: Defensive Techniques - Validation",
        ans: `What to Validate: User Input(SQL Injection), Internal Data, External Source.
        When to Validate: Before data is used, When data moves.` },
    { que: "Defensive Programmer: Defensive Techniques - Reliability",
        ans: `Uptime: 7days/wk or few hours? What percentage(99.99% - 4 nines).
        Responsiveness: How long to deliver info from pressing button on web app, also consider GPS systems(how often app is updating).
        Accurate` },
    { que: "Defensive Programmer: Defensive Techniques - Resiliency",
        ans: `Resistant to failure
        Handles unexpected situations
        Stable operations` },
    { que: "Defensive Programmer: Defensive Techniques - Recovery",
        ans: `Recovers, Resumes` },
    { que: "Defensive Programmer: Defensive Techniques - CDI/UDI",
        ans: `Constrained/Unconstrained Data Interface CDI/UDI.
        Generally the less free form text, the better.
        More Secure: stops some attacks.
        More User Friendly: ease of use.
        Starts Data Validation: narrows possible input.
        CDI: Reduces Text(you want filtering and data validation), Constrain Flow(cannot do Part C without completing Part A & B), Easy to Flow` },
    { que: "Defensive Programmer: Defensive Techniques - Parameter Checking",
        ans: `is both data validation and data filtering.
        What Parameters to Check: Function parameters, Constructor parameters, Data parameters.
        What Data Parameters to Check: Data Type(string/integer), Size(Mb v Gb), Format(.jpg, .txt, )` },
    { que: "Defensive Programmer: Defensive Techniques - Trusting Software Components",
        ans: `Libraries, Visual Components, Services.
        Any data coming from third-party must be validated.
        Validate data from those components.
        Strong exception handling.
        Testing those tools.` },
    { que: "Defensive Programmer: Defensive Techniques - Intelligent Code Re-Use",
        ans: `When to Re-Use: Broad application
        How to Re-Use: Compartmentalize` },
    { que: "Secure Programmer: Software Testing - Testing Methodologies",
        ans: `Testing Approaches: Static v Dynamic v Passive.
        Knowledge: White box v Black v Gray.
        Alpha testing(early preliminary testing, expecting bugs), Beta testing(product has gone through internal testing and ready for user testing).
        Concepts: Variance, Quality, Verification/Validation` },
    { que: "Secure Programmer: Software Testing - Unit Testing",
        ans: `General Features of Unit Testing: Done early: as soon as a unit is complete.
        Done by developer: before it moves on.
        Done less formally: usually fewer formal protocols.` },
    { que: "Secure Programmer: Software Testing - Integration Testing",
        ans: `Approaches: Big bang(putting 6 components together), Bottom-up, Top-down, Sandwich.
        Issues: When to integrate, Who does the testing, What method.
        Integration Patterns: Client/server integration, Collaboration integration, Distributed services integration, Layer integration.` },
    { que: "Secure Programmer: Software Testing - Regression Testing",
        ans: `Issues: Prioritization, Test Selection, Who Tests.` },
    { que: "Secure Programmer: Software Testing - User Acceptance Testing(UAT)",
        ans: `SME, Tester
        Problems: Training, Focus, Bias.
        Requirements: Standard(what is the goal?), Resources(how much and how long?), Criteria(What is acceptance)` },
    { que: "Secure Programmer: Software Testing - Roles and Responsibilities in Testing",
        ans: `Questions: Who? When? What?
        User Roles, Tester Roles, Developer Roles, Management Roles` },
    { que: "Secure Programmer: Software Testing - Specific Testing Methods",
        ans: `Ad Hoc Testing(banging away on the software)
        Installation Testing()
        Usability Testing()
        Development Testing()` },
    { que: "📁 Ch6: Design and Development (A4): SDL Activities and Best Practices",
        ans: `https://research.ebsco.com/c/25xrgu/ebook-viewer/pdf/w7zcbuv3kz/page/pp_161?location=https%25253A%25252F%25252Fresearch.ebsco.com%25252Fc%25252F25xrgu%25252Fsearch%25252Fdetails%25252Fw7zcbuv3kz%25253FisDashboardExpanded%25253Dfalse%252526limiters%25253DFT%2525253AY%252526q%25253D9781466560956%252526searchMode%25253Dall&auth-callid=c66f46b3-43d6-449f-babb-d49e38bfe87d` },
    { que: "Static Analysis",
        ans: `analyzes the source code prior to compiling, provides a scalable method of security code review, and helps ensure that secure coding policies are being followed. ` },
    { que: "Dynamic Analysis",
        ans: `monitors application behavior and ensures that the software functionality works as designed.` },
    { que: "Fuzz Testing",
        ans: `specialized form of Dynamic analysis, induces program failure by deliberately introducing malformed or random data to an application and can be used as an effective and low-cost way of finding potential security issues prior to release and potentially throughout the SDL process.` },
    { que: "6.1 A4 Policy Compliance Analysis",
        ans: `` },
    { que: "Security Test Case Execution - QA security testing should look for:",
        ans: `Plaintext passwords/weak passwords in configuration files.
        Default accounts on the stack(Apache, Tomcat, OS).
        Sensitive information in log files.
        Input validation (XSS, SQLi).
        Parameter tampering for Web applications.
        Insecure services used by the software team(ex: Telnet).
        Security configurations for various services(ex: NFS)` },
    { que: "Security Test Case Execution - Two primary perspectives:",
        ans: `1. Security mechanisms are tested to ensure that their functionality is properly implemented.
        2. Security testing is conducted in relation to understanding and simulating attacker's approach as identified during threat modeling and other associated risk-based analyses.` },
    { que: "Security Test Case Execution - Categories",
        ans: `1. Benchmarks: these tests are used to compare estimates to actual results.
        2. Scheduled tests: include mandatory requirements to validate security of the software and associated system(s) being tested, which must be conducted regardless of whether security issues or vulnerabilities are detected or tuning is required.
        3. Exploratory tests: emphasizes personal freedom and responsibility of the individual tester to continually optimize quality of their work by treating test-related learning, test design, test execution, test result interpretation as mutually supportive activities that run in parallel throughout the project.` },
    { que: "Sucessful security test execution plan assumes:",
        ans: `person has done a detailed risk analysis to evaluate the software and system(s) with which it will be asociated.
        Test assets have been developed as part of the risk management plan and development of a security engineering/development test strategy.` },
    { que: "Successful security test execution includes:",
        ans: `Baseline and benchmark tests have been performed to ensure that obvious security issues have been identified early in the testing cycle.
        Automated test scripts have been validated as correct.
        Re-benchmarking testing has been conducted after tuning.
        Basis for future test comparison has been created.
        Results of the security test case execution have been analyzed.` },
    { que: "Code Review Cycle",
        ans: `1. Identify Security Code Review Objectives.
        2. Perform Preliminary Scan.
        3. Review Code for Security Issues.
        4. Review for Security Issues Unique to the Architecture.`},
    { que: "Ideal flow of activities for code review success(by Chmielewski et al. via MSDN Magazine):",
        ans: `Threat Modeling: understand code and data flows; identify high-risk areas and entry points.
        Code Reviews: document findings appropriately, as well as the process itself.
        Resolve Problems: cooperate with owners of code on applying fixes and further efforts.
        Learn the Lesson: update tools, educate development teams, improve processes, plan future iterations.` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - Secure Testing Concepts",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - Secure Unit Testing",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - Secure Regression Testing",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - Secure Integration Testing",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - Security Metrics",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - Tracking Security Bugs",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - ",
        ans: `` },
    { que: "Python Logging Levels",
        ans: `50: CRITICAL: serious error.
        40: ERROR: serious problem.
        30: WARNING: something unexpected or potential future problem. default level.
        20: INFO: confirmation of expected operation, used for general applciation flow information.
        10: DEBUG: detailed information for developers during troubleshooting.
        0: NOTSET: no level set; logger defers to parent.`},
    { que: "Ch1 Full Stack Python Security: Cryptography, TLS, Attack Resistance",
        ans: `` },
    { que: "Attack Surface - entry point: user of the system, the system itself, or network between the user and the system",
        ans: `Ex: Reflective cross-site scripting (XSS).
        Social engineering (ex: phishing, smishing).
        Cross-site request forgery.
        Open redirect attack.` },
    { que: "Attack Surface - attacker targets the system as entry point",
        ans: `This form of attack is designed to take advantage of a system with insufficient input validation.
        Ex: Structured Query Language(SQL) injection.
        Remote code execution.
        Host header attack
        Denial of service` },
    { que: "Attack Surface - attacker targets user and system together as entry point",
        ans: `ex: persistant cross-site scripting.
        clickjacking` },
    { que: "Attack Surface - attacker uses network or network device between user and system as entry point",
        ans: `ex: Man-in-the-middle attack.
        Replay attack` },
    { que: "Data integrity",
        ans: `aka "message integrity": ensures data is free of accidental corruption(bit rot).
        Data integrity guarantees data is read the way it's written. Data reader can verify the integrity fo the data regardless of who authored it.` },
    { que: "Authentication",
        ans: `answers, "who are you?". The act of verifying identity of someone/something via username/password.
        Machines can be authenticated (ex: continuous integration server authenticates before it pulls changes from code repository).` },
    { que: "Data authentication",
        ans: `aka "message authentication": ensures data reader can verify identity of data writer.` },
    { que: "Nonrepudiation",
        ans: `answers "who did what?". It's the assurance that an individual/organization has no way of denying their actions.
        Nonrepudiation can be applied to any activity, but crucial for online transactions and legal agreements.` },
    { que: "Authorization",
        ans: `aka "access control", often confused with "authentication". Authentication answers "who are you?", Authorization answers "what can you do?".
        Reading spreadsheet, sending email, canceling an order are actions a user may or may not be authorized to do.` },
    { que: "Confidentiality",
        ans: `answers "who can access this?". Ensures that 2+ parties can exchange data privately. Info transmitted confidentially cannot be read/interpreted by unauthorized parties.` },
    { que: "Security Fundamentals (Building Block:Solutions)(1/2)",
        ans: `Data Integrity: Secure networking protocols, Version control, Package management
        Authentication: User authentication, System authentication.
        Data Authentication: User registration, User-login workflows, Password-reset workflows, User-session management.` },
    { que: "Security Fundamentals (Building Block:Solutions)(2/2)",
        ans: `Nonrepudiation: Online tractions, Digital signatures, Trusted third parties.
        Authorization: User authorization, System-to-system authorization, Filesystem-access authorization.
        Confidentiality: Encryption algorithms, Secure networking protocols.` },
    { que: "hashlib module",
        ans: `Cryptographic hashing
        https://docs.python.org/3/library/hashlib.html` },
    { que: "secrets module",
        ans: `Secure random number generation
        https://docs.python.org/3/library/secrets.html` },
    { que: "hmac module",
        ans: `Hash-based message authentication
        https://docs.python.org/3/library/hmac.html` },
    { que: "os and subprocess modules",
        ans: `Gateways to the OS
        https://docs.python.org/3/library/os.html
        https://docs.python.org/3/library/subprocess.html` },
    { que: "argon2-cffi",
        ans: `function used to protect passwords
        https://pypi.org/project/argon2-cffi/` },
    { que: "cryptography",
        ans: `package for common cryptography functions
        https://pypi.org/project/cryptography/` },
    { que: "defusedxml",
        ans: `safe way to parse XML
        https://pypi.org/project/defusedxml/` },
    { que: "Gunicorn",
        ans: `web server gateway interface (Python)
        https://gunicorn.org/` },
    { que: "Pipenv",
        ans: `Python package manager with many security features
        https://pypi.org/project/pipenv/` },
    { que: "requests",
        ans: `easy-to-use HTTP library
        https://pypi.org/project/requests/` },
    { que: "requests-oauthlib",
        ans: `client-side OAuth 2.0 implementation
        https://pypi.org/project/requests-oauthlib/` },
    { que: "📁 Digging for Security Bugs / Vulnerabilities in Python Applications",
        ans: `https://www.tripwire.com/state-of-security/digging-for-security-bugs-vulnerabilities-in-python-applications` },
    { que: "High Risk Python Security Vulnerabilities",
        ans: `SQL Injections(SQLi)
        Cross Site Scripting(XSS)
        Cross Site Request Forgery(CSRF)
        LDAP (Lightweight Directory Access Protocol) Injections
        Command Injections
        XPathi` },
    { que: "SQL Injections(SQLi)(4 subclasses)",
        ans: `execute SQL statements for application at backend database server.
        1. In-band SQL Injection/Classic SQLi
        2. Inferential/Blind SQL Injection
        3. DBMS SQLi
        4. Compounded SQLi(ex: Strom Worm):
            1. SQLi with inadequate authentication
            2. SQLi with DDoS attacks
            3. SQLi with DNS hijacking
            4. SQLi with XSS` },
    { que: "Cross Site Scripting (XSS)",
        ans: `malicious user tricks web application to steal stored cookies, saved passwords, and script code that served unsuspecting users of that application.` },
    { que: "Cross Site Request Forgery (CSRF)",
        ans: `occurs when a compromised website is forced to perform an action by another logged-in user like clicking on a button. Also, includes hacking/logging into of a website with others' login credentials.` },
    { que: "LDAP (Lightweight Directory Access Protocol) Injections",
        ans: `occurs when a malicious user inserts/modifies LDAP statements that lead to speculations.` },
    { que: "Command Injections",
        ans: `malicious user executes OS commands on a web server by abusing it in order to insert their own commands to gain complete control over the server.` },
    { que: "XPathi",
        ans: `occurs when a malevolent user intentionally passes data to a website. They can use that interaction to find out how the data is structured in XML, or they can access secured data that they can’t access normally.` },
    { que: "Security Scanners (1/2)",
        ans: `1. Python Taint (PYT) - Static Analysis Tool
        2. Tinfoil Security Website Scanner
        3. Bandit - AST Based Static Analyzer
        4. Pyntch - Static Code Analyzer
        5. Spaghetti Security Scanner
        6. Rough Auditing Tools for Security (RATS)` },
    { que: "Security Scanners (2/2)",
        ans: `7. PyDbgEng - Windows Debugging Engine's Python Wrapper
        8. python-ptrace
        9. vdb / vtrace - Debugger for Exploit Malware Analysis
        10. Immunity Debugger - Python Penetration Testing Tool
        11. Mona.py - Open Immunity Debugger` },
    { que: "Python Taint (PYT) - Static Analysis Tool",
        ans: `used for identifying command injection, XSS, SQLi, interprocedural, path traversal HTTP attacks in Python web apps. Python Taint is based on the Control flow graphs, data flow analysis and fixed points that are theoretical foundations built using the Flask framework.` },
    { que: "Tinfoil Security Website Scanner",
        ans: `security scanner for Python & Django that helps find holes in web servers and applications and also tells you the ways to fix them.` },
    { que: "Bandit - AST Based Static Analyzer",
        ans: `OpenStack security linter that identifies the common security risks in Python programming. It is distributed using pip. To install bandit from source, we can use the command python setup.py install after downloading the pypi source tarball. You can even access the reports from bandit.` },
    { que: "Pyntch - Static Code Analyzer",
        ans: `(PYthoN Type CHecker) helps in detecting runtime errors such as exceptions, not found attributes and variable type missmatchings. It supports Python 2.x currently. It won’t address style issues like Pychecker or Pyflakes, but it works pretty fast and efficient in scanning thousands of lines within a minute.` },
    { que: "Spaghetti Security Scanner",
        ans: `open-source web application security scanner. Detects default files, misconfigurations, and insecure files, and it supports numerous frameworks including Django, CherryPy, CakePHP, etc. Tool is capable of finding attacks like admin panel, cookie security, credit card/email/private IP disclosures, SQL injections, ShellShock, Struts-shock, Apache ModStatus, Anonymous cipher, and others.` },
    { que: "Rough Auditing Tools for Security (RATS)",
        ans: `free tool that scans languages like C, C++, PHP, Perl and Python and emphasizes the errors that are related to security like TOC (Time of Check), TOU (Time of Use), Buffer overflows and Acunetix. Manual code introspection is still important, but this tool still greatly assists us.` },
    { que: "PyDbgEng - Windows Debugging Engine's Python Wrapper",
        ans: `helps debugging user mode, kernel mode, software/hardware breakpoints, etc. With help of PyDbgEbg, you can do fault injection, fuzzing of applications, and unpacking executables automatically.` },
    { que: "python-ptrace",
        ans: `opensource debugging tool that uses ptrace developed and written in Python. Here, ptrace works as an tracer that hands the system calls in Linux, BSD and Darwin.` },
    { que: "vdb / vtrace - Debugger for Exploit Malware Analysis",
        ans: `VDB refers to a dynamic debugging element; vtrace refers to a platform that's used in debugging frameworks implemented in Python. Vdb utilizes vtrace.` },
    { que: "Immunity Debugger - Python Penetration Testing Tool",
        ans: `uses python scripts and supports Windows with Graphical user interface and command line debuggers.` },
    { que: "Mona.py - Open Immunity Debugger",
        ans: `a PyCommand that replaces the pvefindaddr and resolves performance issues.` },
    { que: "📁 Ch2 Full Stack Python Security: Cryptography, TLS, Attack Resistance",
        ans: `` },
    { que: "Hash Function",
        ans: `Has input/output. Input to a hash function is "message". Message can be any form of data.
        Output of hash function is a large number. The number has many names(ex: hash value, hash, hash code, digest, message digest) which is represented as alphanumeric strings.` },
    { que: "Hash function properties(3)",
        ans: `Deterministic behavior.
        Fixed-length hash values.
        Avalanche effect.` },
    { que: "Hash function - deterministic",
        ans: `for given input, hash function always produces same output.
        Hash function is repeatable, not random.` },
    { que: "Fixed-Length Hash Values",
        ans: `lengths of messages doesn't affect the length of the hash value. Different messages will give different hash values, but each hash value will always be an integer.` },
    { que: "Avalanche Effect",
        ans: `when small differences between messages result in large differences between hash values.` },
    { que: "Cryptographic Hash Function - must meet 3 add'l criterias:",
        ans: `One-way function property aka "preimage resistance"
        Weak collision resistance aka "second preimage resistance"
        Strong collision resistance "collision resistance"` },
    { que: "Cryptographic Hash Function - One-way function property aka 'preimage resistance'",
        ans: `a function is one-way if it's easy to invoke and difficult to reverse engineer.
        If attacker obtains hash value, we want it difficult to figure out the message, aka "infeasible". Where attacker's only option to reverse engineer is "brute force".` },
    { que: "Cryptographic Hash Function - Collision Resistance",
        ans: `hash values for different messages have same length, but never same value...but when there's rare occurence of same hash value, it's called "collision".` },
    { que: "Cryptographic Hash Function - Weak Collision Resistance",
        ans: `if hash function is given a message, it is infeasible to identify second message that hashes same hash value. ex: if attacker has one input, it must be infeasible. Weak collision resistance is bound to particular message.` },
    { que: "Cryptographic Hash Function - Strong Collision Resistance",
        ans: `if hash function is infeasible to find any collision whatsoever. Strong collision resistance applies to any pair of messages.` },
    { que: "pigeonhole principle",
        ans: `messages can have "any" length; hash values can have "one" length. The set of all possible messages will always be larger than set of all possible hash values.`},
    { que: "Data Integrity",
        ans: `aka "message integrity", is the assurance that data is free of unintended modification. Answers, "has the data changed?".` },
    { que: "Choosing cryptographic hash function",
        ans: `Python ships "hashlib" module. "algorithms_guaranteed" contains every hash function.
        >>> import hashlib 
        >>> sorted(hashlib.algorithms_guaranteed) ['blake2b', 'blake2s', 'md5', 'sha1', 'sha224', 'sha256', 'sha384', 'sha3_224', 'sha3_256', 'sha3_384', 'sha3_512', 'sha512', 'shake_128', 'shake_256']` },
    { que: "Which hash functions are safe?",
        ans: `SHA-2
        SHA-3
        BLAKE2` },
    { que: "SHA-2",
        ans: `comprised of SHA-224, SHA-256, SHA-384, SHA-512.
        SHA-256 and SHA-512 is core of the family.
        SHA-256 is 256 bits long, which is more likely to be unique and less likely to collide.` },
    { que: "SHA-3",
        ans: `composed of SHA3-224, SHA3-256, SHA3-384, SHA3-512, SHAKE128, SHAKE256.
        Considered successor of SHA-2, but may not find much support as SHA-2.` },
    { que: "BLAKE2",
        ans: `not popular as SHA-2/SHA-3, but advantage is, BLAKE2 leverages modern CPU to hash quickly. Consider BLAKE2 to hash large data. 
        Composed of BLAKE2b and BLAKE2s. 
        BLAKE2b is optimized for 64-bit. BLAKE2s is optimized for 8- to 32-bit platforms.` },
    { que: "Unsafe hash functions",
        ans: `Insecure hash functions are preserved for maintaining backward compatibility for legacy systems.
        Unsafe hash functions of "algorithms_guaranteed":
        MD5
        SHA-1` },
    { que: "MD5",
        ans: `obsolete 128-bit hash function in early 1990s.` },
    { que: "SHA-1",
        ans: `obsolete 160-bit hash function developed by NSA in mid-1990s.SHA-1 was used to verify data integrity in version control systems such as Git and Mercurial.` },
    { que: "Dos/Don'ts of choosing hash function:",
        ans: `SHA-256 for general-purpose cryptographic hashing.
        SHA3-256 in high security environments, but expect less support than SHA-256.
        BLAKE2 to hash large messages/data.
        Never use MD5/SHA1 for security purposes.` },
    { que: "Cryptographic hashing in Python",
        ans: `import hashlib
        named = hashlib.sha256() ... Named Constructor
        generic = hashlib.new('sha256') ... Generic Constructor
        
        hash_function.digest() ... returns hash value as bytes.
        hash_function.hexdigest() ... returns hash value as string.` },
    { que: "📁 Ch3 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Keyed Hashing",
        ans: `Keyed Hashing` },
    { que: "Data authentication",
        ans: `aka "message authentication", ensures data reader can verify the identity of the writer.
        Functionality requires 2 things: a key and a keyed hash function.` },
    { que: "Key generation",
        ans: `Every key should be hard to guess if to remain a secret.
        Key types(2): random numbers and passphrases.` },
    { que: "Random Numbers",
        ans: `use "os.urandom" function as cryptographically secure random number source. This function accepts an integer size and returns "size" random bytes.
        >>> import os 
        >>> os.urandom(16)` },
    { que: "'secrets' module for random-number generation",
        ans: `>>> from secrets import token_bytes, token_hex, token_urlsafe 
        >>> token_bytes(16) ... generates 16 random bytes.
        token_hex(16) ... generates 16 random bytes of hexadecimal text
        token_urlsafe(16) ... generates 16 random bytes of URL-safe text.` },
    { que: "📁 Ch4 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Symmetric Encryption",
        ans: `Encryption begins with plaintext.
        Plaintext: information readily comprehensible.
        Encryption: obfuscation of plaintext with purpose of hiding info from unauthorized parties.
        Ciphertext: obfuscated output of encryption.
        Decryption: transforms ciphertext back to plaintext (inverse of encryption).
        Cipher: algo for encrypting/decrypting data. Every cipher requires a key.` },
    { que: "python 'cryptography' package divided API into 2 levels:",
        ans: `hazardous materials layer: complex low-level API.
        recipes layer: simple high-level API` },
    { que: "Hazardous Material Layer",
        ans: `complex low-level API, living beneath "dcryptography.hazmat". Be cautious when using API in production. Use only if 100% sure. Requires in-depth knkowledge of cryptography.` },
    { que: "Valid use for hazardous material layer:",
        ans: `Encrypt files too big to fit into memory.
        Might be forced to process data with rare encryption algorithm.` },
    { que: "Recipes Layer",
        ans: `Simple high-level API. Use whenever possible, fall back to hazmat layer only when necessary. This API satisfies most encryption needs.` },
    { que: "Fernet",
        ans: `a symmetric encryption method implemented in recipes layer.Defines encryption protocol designed to resist tampering in interoperable way.
        Protocol is encapsulated by class, "Fernet", beneath cryptography.fernet.` },
    { que: "Fernet class",
        ans: `designed as general purpose tool for encrypting/decrypting data. "Fernet.generate_key" method generates 32 random bytes. "Fernet init" method accepts this key.
        >>> from cryptography.fernet import Fernet
        >>> key = Fernet.generate_key() 
        >>> fernet = Fernet(key)` },
    { que: "Fernet.encrypt method",
        ans: `doesn't just encrypt plaintext, but hashes ciphertext with HMAC-SHA256(causes ciphertext becoming a message).
        Ciphertext and hash value are returned together as "fernet token":
        >>> token = fernet.encrypt(b'plaintext')` },
    { que: "Fernet.decrypt method",
        ans: `extracts ciphertext from fernet token and authenticates it with HMAC-SHA256. 
        If new hash values doesn't match old hash value in fernet token, "InvalidToken" exception is raised.
        If hash values match, ciphertext is decrypted and returned:
        >>> fernet.decrypt(token) b'plaintext'` },
    { que: "Key rotation",
        ans: `used to retire one key with another. It decommissions old key, all ciphertext is decrypted and re-encrypted with new key. Reason key is rotated when person leaves organization.` },
    { que: "MultiFernet",
        ans: `method for key rotation. MultiFernet decrypts everything encrypted with old key and re-encrypts with new key. Once every token is re-encrypted with new key, old key is retired.` },
    { que: "Symmetric Encryption",
        ans: `when encryption algorithm encrypts and decrypts with same key (like one wrapped by Fernet). Symmetric encryption algorithms are further subdivided into: block ciphers and stream ciphers.` },
    { que: "Block Ciphers",
        ans: `encrypts paintext as series of fixed-length block. Each block of plaintext is encrypted to a block of ciphertext. Block size depends on encryption algorithm. Larger blocks are considered more secure.` },
    { que: "popular Block Ciphers",
        ans: `Triple DES
        Blowfish
        Twofish
        Advanced Encryption Standard` },
    { que: "Triple DES(3DES)",
        ans: `adaptation of Data Encryption Standard(DES), uses DES three times, earning reputation for being slow.
        3DES uses 64-bit block size and key size of 56, 112, 168 bits.
        WARNING: deprecated by NIST and OpenSSL (don't use!)` },
    { que: "Blowfish",
        ans: `uses 64-bit block size and variable key size (32 to 448 bits).
        One of the first major royalty-free encryption algorithms without patent.
        WARNING: Blowfish recommends using Twofish.` },
    { que: "Twofish",
        ans: `Blowfish successor.
        Uses 128-bit block size and key size of 128, 192, 256 bits.` },
    { que: "Advanced Encryption Standard (Rijndael)",
        ans: `Rijndael is encryption algorithm standardized by NIST. Rijndael adopted the name Advanced Encryption Standard for winning competition title.` },
    { que: "Advanced Encryption Standard(AES)",
        ans: `only symmetric encryption algorithm for typical programmer.
        Algorithm uses 128-bit block size and key size of 128, 192, 256 bits.
        Applications of AES encryption include: networking protocols(ex: HTTPS), compression, filesystems, hashing, virtual private networks(VPNs)` },
    { que: "Stream Ciphers",
        ans: `plaintext is processed as stream of individual bytes; one byte in, one byte out.
        Good for encrypting continuous or unknown amounts of data. Often used by networking protocols.` },
    { que: "Stream Ciphers examples",
        ans: `RC4 and ChaCha.
        RC4: has vulnerabilities discovered.
        ChaCha: secure and fast.` },
    { que: "Encryption Modes",
        ans: `Symmetric encryption algorithms run different modes. Each with strengths and weaknesses.` },
    { que: "Electronic Codebook (ECB) mode",
        ans: `simplest mode. Exceptionally weak. ECB mode encrypts identical plaintext blocks into identical ciphertext blocks, meaning easy for attack to infer patterns in plaintext from ciphertext.
        WARNING: do not encrypt data with ECB mode in production.` },
    { que: "Cipher Block Chaining (CBC) mode",
        ans: `ensures each change in block affects ciphertext of all subsequent blocks.
        CBC produces different ciphertexts when encryption plaintexts, by individualizing plaintext with "initializing vector(IV)".` },
    { que: "Summary: 📁 Ch4 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Symmetric Encryption",
        ans: `Encryption ensures confidentiality.
        Fernet is safe and easy way to symmetrically encrypt and authenticate data.
        MultiFernet makes key rotation less difficult.
        Symmetric encryption algorithms use same key for encryption and decryption.
        AES is first and last choice for symmetric encryption.` },
    { que: "📁 Ch5 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Asymmetric Encryption",
        ans: `Chapter covers:
        Introducing key-distribution problem.
        Demonstrating asymmetric encryption with "cryptography" package.
        Ensuring nonrepudiation with digital signatures.` },
    { que: "Key-Distribution Problem",
        ans: `Symmetric encryption works when encryptor and decryptor are same party, but it doesn't scale well. Key distribution is a recursive problem as sender of a message constantly encrypts keys in order to send message to receiver. Alternatively, could manage different keys correlating for different person.` },
    { que: "Asymmetric Encryption",
        ans: `Solves key-distribution problem. If encryption algo, like AES, encrypts/decrypts with same key, it's "symmetric". If encryption algo encrypts/decrypts with two different keys, it's "asymmetric". The keys are referred as "key pair".` },
    { que: "Key Pair",
        ans: `compose of "private key" and "public key". Private key is hidden by the owner. Public key is distributed to anyone; not secret. Private key decrypts what public key encrypts.` },
    { que: "RSA Public-Key Encryption",
        ans: `RSA stands for last names of creators(Rivest, Shamir, Adleman).
        $ openssl genpkey -algorithm RSA \ ... generates RSA key.
        -out private_key.pem \ ... generates private-key file to path.
        -pkeyopt rsa_keygen_bits:3072 .. key size is 3072 bits.
        RSA key is much larger than AES key(256 bits).` },
    { que: "Nonrepudiation",
        ans: `when a system prevents participant from denying their actions. Ex: point-of-sales feature nonrepudiation a way to legally bind business partners to fulfill end of agreements. Uses third party, such as legal authority, to verify transactions.` },
    { que: "Digital Signatures",
        ans: `goes beyond data authentication and data integrity nonrepudiation. Answers: Who sent the message? Has the message been modified in transit?
        Digital signatures combine hash function with public-key encryption.
        Hash value and sender's private key is the "input" to asymmetric encryption algorithm; "output" is message sender's digital signature.
        Goal of digital signature is nonrepudiation, not confidentiality.` },
    { que: "RSA Digital Signatures in Python",
        ans: `code signs message with SHA-256, RSA public-key encryption, padding scheme(probabilistic signature scheme(PSS)). "RSAPrivateKey.sign" method combines all three":
        >>> import json from cryptography.hazmat.primitives.asymmetric >>> import padding from cryptography.hazmat.primitives >>> import hashes
        >>> message = b'from Bob to Alice'
        >>> padding_config = padding.PSS(mgf=padding.MGF1(hashes.SHA256()), salt_length=padding.PSS.MAX_LENGTH)
        >>> private_key = load_rsa_private_key()
        >>> signature = private_key.sign(message, padding_config, hashes.SHA256())
        >>> signed_msg = {'message': list(message), 'signature': list(signature),}
        >>> outbound_msg_to_alice = json.dumps(signed_msg)` },
    { que: "RSA Digital Signature Verification",
        ans: `After Alice receives Bob's message and digital signature, she does three things:
        1. She hashes the message.
        2. Decrypts the signature with Bob's public key.
        3. Compares hash values` },
    { que: "Elliptic-Curve Digital Signatures",
        ans: `Like RSA key pairs, elliptic-curve key pairs sign data and verify signatures; but unlike RSA key pairs, elliptic-curve key pairs do not asymmetrically encrypt data.
        ` },
    { que: "📁 SUMMARY Ch5 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Asymmetric Encryption",
        ans: `Asymmetric encryption algo use diff keys for encryption/decryption.
        Public-key encryption is a solution to the key-distribution problem.
        RSA key pairs are classic and secure way to asymmetrically encrypt data.
        Digital signatures guarantee nonrepudiation.
        Elliptic-curve digital signatures are more efficient than RSA digital signatures.` },
    { que: "VIDEO: Defensive Programmer: Cryptography",
        ans: `https://wgu.percipio.com/courses/b3fafebc-4d2f-416e-9d52-848b548c4c4e/videos/dd3681a2-9b65-468c-89a2-dacd752ca2b4` },
    { que: "📁 Ch6 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Transport Layer Security(TLS)",
        ans: `Ch6 covers:
        Resisting man-in-the-middle attacks.
        Understanding the Transport Layer Security Handshake.
        Building, configuring, running Django web app.
        Installing public-key certificate with Gunicorn.
        Securing HTTP, email, database traffic with Transport Layer Security.` },
    { que: "Secure Sockets Layer(SSL)",
        ans: `insecure predecessor to Transport Layer Security(TLS). SSL may be dead but survives in method signatures, command-line arguments, module names. APIs preserve SSL name for backwards compatibility. Programmers refer to SSL, but mean TLS.` },
    { que: "Hypertext Transfer Protocol Secure(HTTPS)",
        ans: `is HTTP over SSL/TLS. HTTP is point-to-point protocol for transferring data(ex: web pages, images, videos)` },
    { que: "Man-In-The-Middle Attack",
        ans: `attacker takes control of position between two vulnerable parties. The position can be network segment or intermediary system.
        Two forms: Passive/Active.` },
    { que: "Passive MITM attack",
        ans: `Eve launches passive MITM attack after gaining access to Bob's wireless network. Bob sends HTTP resquests to bank.alice.com, bank.alice.com sends HTTP responses to Bob. Eve passively intercepts the requests/responses(Bob's password and personal info).
        TLS cannot protect Bob's wireless network, but provides confidentiality, by encrypting conversation between sender/receiver.` },
    { que: "Active MITM attack",
        ans: `Eve gains access to intermediary network device between Bob and bank.alice.com. Eve can listen/modify conversations (When Bob sends $10 to alice, Eve modifies to send $10 to Eve).
        TLS cannot protect network device between sender/receiver, but prevent attacker impersonating sender/receiver. sender/receiver should use HTTP over TLS to communicate securely.` },
    { que: "TLS handshake",
        ans: `a point-to-point, client/server protocol. TLS connection starts with handshake between client/server. 
        Handshake is initiated by the client, which performs 3 tasks:
        1. Cipher suite negotiation.
        2. Key exchange.
        3. Server authentication.` },
    { que: "Cipher suite negotiation",
        ans: `TLS is application of encryption and hashing.The client and server must agree on set of algos(cipher suite).
        TLS 1.3 spec cipher suites(5):
        TLS_AES_128_CCM_8_SHA256
        TLS_AES_128_CCM_SHA256
        TLS_AES_128_GCM_SHA256
        TLS_AES_128_GCM_SHA384
        TLS_CHACHA20_POLY1305_SHA256` },
    { que: "Cipher Suite - Three Segments",
        ans: `1st segment: TLS_
        2nd segment: encryption algo(AES_128_GCM / CHACHA20_POLY1305) AES 128-bit GCM mode
        3rd segment: hashing algo(_SHA256)` },
    { que: "Key exchange",
        ans: `client/server exchanges key, which is used with encryption algorithm of cipher suite.
        TLS key exchange is ex: of key-distribution problem, but TLS 1.3 solves it with Diffie-Hellman method.` },
    { que: "Diffie-Hellman(DH) Key Exchange",
        ans: `method that allows two parties to establish shared key over insecure channel, which is solution to key-distribution problem.` },
    { que: "Simplified version of DH method",
        ans: `1. sender/receiver agree on two parameters.
        2. sender/receiver generate private key.
        3. sender/receiver derive public key from parameters and their private key.
        4. sender/receiver openly exchange public keys.
        5. sender/receiver independently compute shared secret key.` },
    { que: "Server authentication",
        ans: `What good is private conversation if you can't verify the identify of the other person? TLS is means of "authentication" in addition to privacy. Authentication is bidirectional and optional.
        ` },
    { que: "PUBLIC-KEY CERTIFICATES",
        ans: `resembles driver's license(you identify with a driver's license); a server identifies itself with a public-key certificate. Your driver's lic is issued by a government agency; a certificate is issued to key owner by certificate authority. License is scrutinized by police officer before you're trusted; certificate is scrutinized by browser before server is trusted.` },
    { que: "HTTP with Django",
        ans: `Django is Python web app framework. App can serve web page over HTTP, but has no support for confidentiality / server authentication, which is vulnerable to MITM attacks and needs to be converted from HTTP to HTTPS.` },
    { que: "HTTPS with Gunicorn.",
        ans: `host public-key certificate with Gunicorn(Python implementation of Web Server Gateway Interface(WSGI) protocol).
        Gunicorn automatically uses installed certificate to serve Django traffic over HTTPS.` },
    { que: "📁 SUMMARY Ch6 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Transport Layer Security(TLS)",
        ans: `SSL, TLS, HTTPS are not synonyms.
        MITM attacks come in two: passive/active.
        TLS handshake establishes a cipher suite, shared key, server authentication.
        Diffie-Hellman method is efficient solution to key-distribution problem.
        Public-key certificate is analogous to your driver's license.
        Django isn't responsible for HTTPS; Gunicorn is.
        TLS authentication applies to both client/server.
        TLS protects database and email traffic in addition to HTTP.` },
    { que: "📁 Ch7 Full Stack Python Security: Cryptography, TLS, Attack Resistance - HTTP Session Management",
        ans: `Chapter covers:
        Understanding HTTP cookies
        Configuring HTTP sessions in Django
        Choosing HTTP session-state persistence strategy.
        Preventing remote code-execution attacks and replay attacks.` },
    { que: "What are HTTP sessions?",
        ans: `used on web apps to isolate traffic, context, and state of each user. The basis for every form of online transaction.
        User's browser stores their session ID with every subsequent request.
        If someone steals a session ID, they can use to impersonate someone else.` },
    { que: "Session Sniffing",
        ans: `Malicious network eavesdroppers target HTTP sites to steal session ID, waiting for user to log in, hijacking user's account over HTTPS.
        Django prevents session sniffing by changing identifier when user logs in, whether protocol is HTTP/S.
        Best defense: use HTTPS for entire website.` },
    { que: "HTTP cookies",
        ans: `small texts mananged/stored by browser, typically created by server.
        Websites/browsers communicate session IDs with cookies. When new user session is created, server sends session ID to browser as a cookie.` },
    { que: "Set-Cookie response header - multiple directives",
        ans: `Secure
        Domain
        Max-Age` },
    { que: "Secure directive",
        ans: `Servers resist MITM attacks by sending session ID cookie with Secure directive which prohibits browser from sending cookie back to server over HTTP.
        Set-Cookie: sessionid=<session-id-value>; Secure` },
    { que: "Domain directive",
        ans: `use when want to control which hosts the browser should send session ID to.
        Set-Cookie: sessionid=<session-id-value>; Domain=example.com` },
    { que: "Max-Age directive",
        ans: `server sends Max-Age directive to declare expiration time for cookie.
        Set-Cookie: sessionid=<session-id-value>; Max-Age=1209600.
        When cookie expires, browser no longer echo it back to site it came from.` },
    { que: "Browser-length sessions",
        ans: `if cookie is set without Max-Age directive, browser will keep cookie alive as long as tab stays open. Session can't be hijacked after user closes browser tab.` },
    { que: "Setting cookies programmatically",
        ans: `from django.http import HttpResponse
        response = HttpResponse() response.set_cookie('cookie-name', 'cookie-value', secure=True, domain='alice.com', max_age=42)
        1. browser sends this cookie over HTTPS.
        2. alice.com and all subdomains will receive this cookie.
        3. after 42 seconds, cookie expires.` },
    { que: "Session-state persistence",
        ans: `Django models user session with API via session object, behaving like Python dict (storing values by key).
        Session state is created, read, updated, deleted through API.
        Django manages session-state persistance. If session is modified during request life cycle, Django serializes and persists the modifications. Abstraciton layer for de/serialization is session serializer.` },
    { que: "Session serializer",
        ans: `Django delegates de/serialization of session state to configurable component, configured by SESSION_SERIALIZER setting:
        JSONSerializer (default session serializer),
        PickleSerializer` },
    { que: "JSONSerializer",
        ans: `transforms session state to and from JSON, allowing you to compose session state with Python data types(int, str, dict, list).
        1. Serializes a Python dict
        2. Serialized JSON
        3. Deserializes JSON
        4. Deserialized Python dict` },
    { que: "PickleSerializer",
        ans: `transforms session state to/from byte streams.1. Serializes an application-defined object
        2. Serialized byte stream
        3. Deserializeds byte stream
        4. Deserialized object` },
    { que: "JSONSerializer v PickleSerializer",
        ans: `JSONSerializer: secure/safe, but cannot serialize arbitrary Python objects.
        PickleSerializer: can serialize arbitrary Python objects but with severe risk.` },
    { que: "Django automatically persists serialized session state with session engine",
        ans: `Session engine: configurable abstract layer for underlying data source through 5 options:
        1. Simple cache-based sessions
        2. Write-through cache-based sessions
        3. Database-based sessions (default option)
        4. File-based sessions
        5. Signed-cookie sessions` },
    { que: "Simple cache-based sessions",
        ans: `store session state in cache service using Memcached/Redis. Cache services store data in memory than disk, meaning store/load data from Memcached/Redis quickly, but risk occasional data loss. Ex: if cache service runs out of free space, it will write new data over least recently accessed data. If cache is restarted, all data is lost.
        Strength of cache service: speed.
        Weakness: data loss` },
    { que: "Write-through cache-based sessions",
        ans: `combine cache service and database to manage session state. Django writes session state to cache service, "write through", the database, meaning session state is persistent, at expense of write performance. When reading session state, it reads cache service first, using database as last resort.` },
    { que: "Database-based session engine",
        ans: `bypasses Django's cache integration. This is useful if chosen to forgo the overhead of integrating your application with cache service.` },
    { que: "File-based session engine",
        ans: `this option is insecure, each file-backed session is serialized to single file. Session ID is in filename, and session state is stored unencrypted. Anyone with read access to filesystem can hijack session or view session state.` },
    { que: "Cookie-based session engine",
        ans: `stores session state in sesion ID cookie. Session ID cookie doesn't just "identify" the session; it "is" the session.
        Instead of storing session locally, Django serializes and sends whole thing to browser, then deserializes payload when browser echoes back on subsequent requests.` },
    { que: "Cookie-based sesison engine (downsides)",
        ans: `Cookie size limitations
        Unauthorized access to session state
        Replay attacks
        Remote code-execution attacks` },
    { que: "Cookie-Based Session Engine - Cookie Size Limitations",
        ans: `filesystems/databases store large amounts of data; cookies do not.
        RFC 6265 requires HTTP client to support "4096 bytes per cookie", meaning serialized cookie-based Django session should remain below 4KB.` },
    { que: "Cookie-Based Session Engine - Unauthorized access to session state",
        ans: `cookie-based, hashes outbound session state; does not encrypt session state. It guarantees integrity, not confidentiality.` },
    { que: "Cookie-Based Session Engine - Replay Attacks",
        ans: `cookie-based, uses HMAC function to authenticate inbound session state, telling the server who original author of payload is, but this cannot tell the server if the payload received is latest version of payload. Meaning the browser can't get away with modifying session ID cookie, but browser can replay older versions (attacker exploits this limitation with "replay attack").
        Ex: An ecommerce website gives one-time discount to new users, attacker is new to website and eligible for discount (session state reflects this). Attacker saves local copy of session state, makes purchase with one-time discount. Now ineligible for discount, attacker replays session state copy for additional discounts, this is "replay attack". Replay attacks can be used to forge automated teller machines(ATM) transactions, unlock vehicles, open garage doors, bypass voice-recognition authentication.` },
    { que: "Cookie-Based Session Engine - Remote Code-Execution Attacks",
        ans: `Combining cookie-based sessions with PickleSerializer can be exploited if attacker have SECRET_KEY setting.
        Execute malicious attack:
        1. Write malicious code.
        2. Hash malicious code with HMAC function and SECRET_KEY.
        3. Send malicious code and has value to website as session cookie.
        4. Watch website execute attacker's malicious code.` },
    { que: "📁 SUMMARY Ch7 Full Stack Python Security: Cryptography, TLS, Attack Resistance - HTTP Session Management",
        ans: `Servers set session IDs on browsers with Set-Cookie response header.
        Browsers send session IDs to servers with Cookie request header.
        Use Secure, Domain, Max-Age directives to resist online attacks.
        Django supports 5 ways to store session state.
        Django supports 6 ways to cache data.
        Replay attacks abuse cookie-based sessions.
        Remote code-execution attacks abuse PickleSerializer.
        Django uses SECRET_KEY setting for keyed hashing, not encryption.` },
    { que: "📁 SUMMARY Ch8 Full Stack Python Security: Cryptography, TLS, Attack Resistance - User Authentication",
        ans: `covers:
        Registering/Activating new user accounts.
        Installing/Creating Django apps.
        Logging into/out of your project.
        Accessing user profile information.
        Testing authentication.` },
    { que: "User Registration",
        ans: `leverage "django-registration". User-registration is two-step process: Create, Activate.
        User enters user-registration workflow with request for user-registration form. User submits form with username, email address, password. Server creates inactive account, redirects him to registration confirmation page, sends user account activation email. User verifies email address to activate account.
        User account workflow - 3 building blocks:
        Views
        Models
        Templates` },
    { que: "User account workflow - Views",
        ans: `Django maps each request to a "view", a request handler. Views can be implemented by a class/function.` },
    { que: "User account workflow - Models",
        ans: `an object-relational mapping class. Models bridge the gap between object-oriented world of your application and relational database(where you store data).
        "Model class" is analogous to database table.
        Model class "attribute" is analogous to database table column.
        Model "object" is analogous to database table row.Views use models in CRUD database records.` },
    { que: "User account workflow - Templates",
        ans: `represents response of request. Views/Models are written in Python, Template is written in HTML and simple templating syntax.` },
    { que: "Django application server",
        ans: `Uses model-view-template architecture(MVT), roughly equiv to model-view-controller(MVC) architecture.` },
    { que: "MVT v MVC",
        ans: `Model | Model: Object-relational mapping layer.
        View | Controller: Request handler responsible for logic/orchestration.
        Template | View: Response content production.` },
    { que: "Django project",
        ans: `collection of configuration files(settings.py, urls.py, 1+ Django apps)` },
    { que: "Django app",
        ans: `modular component of Django project. Each component responsible for discrete set of functionality(ex: user registration).` },
    { que: "User Authentication",
        ans: `Use multifactor authentication(MFA):
        One-time password(OTP).
        Keyfob, access badge, smartcard.
        Biometric factors(fingerprints, facial recognition).
        Resist urge to build security yourself(error prone).
        Avoid OTPs via text/voicemail(telephone networks are insecure).
        Avoid questions like, "what is mother's maiden name or pet name?"(could search on social media).` },
    { que: "📁 SUMMARY Ch8 Full Stack Python Security: Cryptography, TLS, Attack Resistance - HTTP Session Management",
        ans: `Verify user's email with two-step user-registration workflow.
        Views, Models, Templates are building blocks of Django web development.
        Don't reinvent the wheel; authenticate users with built-in Django components.
        Prohibit anonymous access to restricted resources.
        Authentication is no excuse for untested functionality.` },
    { que: "📁 Ch9 Full Stack Python Security: Cryptography, TLS, Attack Resistance - User Password Management",
        ans: `covers:
        Changing, validating, resetting user passwords.
        Resisting breaches with salted hashing.
        Resisting brute-force attacks with key derivation functions.
        Migrating hashed passwords.` },
    { que: "Password-change workflow",
        ans: `Django's PasswordChangeView contains 3 required fields: user's password, new password, new password confirmation.` },
    { que: "Password storage - 3 approaches",
        ans: `Plaintext
        Ciphertext
        Hash value` },
    { que: "Password storage - Plaintext",
        ans: `bad practice; attacker has access to user account once gaining access to password store.
        Attacker can be outside the organization or employee(ex: system administrator)` },
    { que: "Password storage - Ciphertext",
        ans: `not much improvemnt over plaintext.
        ex: system encrypts each password and stores as ciphertext. When user logs in, system encrypts reproduced password and compares ciphertext to the ciphertext in storage.` },
    { que: "Password storage - Hash value",
        ans: `used by modern authetication systems.
        When you log in, system compares hash value of reproduced password to hash value in storage.` },
    { que: "Malicious tools for password cracking:",
        ans: `Common password lists: hashing every possible common password.
        Hash function determinism: hash values for one user is the same as another so both users have same password.
        Rainbow tables: large table of messages(password) mapped to precomputed hash values` },
    { que: "Salted hashing",
        ans: `way to compute different hash value from 2+ identical messages.
        "salt": random string of bytes that accompany message as input to hash function.` },
    { que: "Salt is hashing what initialization vector is to encryption:",
        ans: `Salts individualize hash values; IVs individualize ciphertexts.
        Salted hash value is useless if sale is lost; ciphertext is useless if IV is lost.
        Salt or IV is stored unobfuscated with the hash value or ciphertext.
        Neither salt or IV should be reused.` },
    { que: "Password-reset workflow - 4 components",
        ans: `PasswordResetView
        PasswordResetDoneView
        PasswordResetConfirmView
        PasswordResetCompleteView` },
    { que: "📁 Ch9 SUMMARY Full Stack Python Security: Cryptography, TLS, Attack Resistance - User Password Management",
        ans: `Don't reinvent the wheel; change/reset user passwords with Django components.
        Enforce/fine-tune password policy with password validation.
        Resist brute-force attacks with salted hashing.
        Don't hash passwords with regular hash function; use key derivation function(Argon2).
        Migrate legacy password hash values with Django data migration.
        Password-reset workflows are another application of data authentication and keyed hashing.` },
    { que: "📁 Ch10 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Authorization",
        ans: `covers:
        Creating superusers and permissions
        Managing group membership
        Enforcing application-level authorization with Django
        Testing authorization logic` },
    { que: "Authentication v Authorization",
        ans: `Authentication(authn): who the user is.
        Authorization(authz): what the user can do.
        Authentication is prerequisite for authorization.` },
    { que: "Permission",
        ans: `atomic form of authorization.` },
    { que: "📁 SUMMARY Ch10 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Authorization",
        ans: `Authentication is who you are; Authorization is what you can do.
        Users, groups, and permissions are building blocks of authorization.
        WhiteNoise is simple/efficient way to serve static resources.
        Django's administration console enables superusers to manage users.
        Prefer high-level authorization APIs over low-level APIs.
        In general, enforce authorization via standalone permissions; grant authorization via group membership.` },
    { que: "📁 Ch11 Full Stack Python Security: Cryptography, TLS, Attack Resistance - OAuth 2",
        ans: `covers:
        Registering OAuth client.
        Requesting authorization to protected resources.
        Granting authorization without exposing authentication credentials.
        Accesing protected resources.` },
    { que: "OAuth 2 - social login",
        ans: `when visiting website and allows to sign in using Google, Facebook, Twitter` },
    { que: "OAuth terms",
        ans: `"protected resource": Google account info.
        "Resource owner": entity, usually end user with power to authorize access to protected resource.
        "OAuth client": example.com, a third-party entity that can access protected resource when permitted by resource owner.
        "authorization server": hosted by Google, allows resource owner to authorize third-party access to protected resource.
        "resource server" aka "APIs": hosted by Google, guards protected resource.` },
    { que: "Grant Types",
        ans: `how resource owner grants access to protected source.` },
    { que: "Grant Types (4)",
        ans: `Authorization Code grants: accomodate websites, mobile apps, browser-based apps.
        Implicit grants: was recommended for mobile/browser-based app, but now abandoned.
        Password grants: remove the need for authorization server by requiring resource owner to provide credentials through third party.
        Client Credentials grants: apply when resource owner and third party are same entity.` },
    { que: "Authorization Code Flow - 4 phases",
        ans: `1. Requesting authorization.
        2. Granting authorization.
        3. Performing token exchange.
        4. Accessing protected resources.` },
    { que: "1. Requesting Authorization",
        ans: `OAuth client requests authorization from resource owner by sending them to authorization server via link, HTTP redirect, or Javascript, directing resource owner to "authorization URL". This address of authorization form hosted by authorization server.` },
    { que: "2. Granting Authorization",
        ans: `resource owner grants access to OAuth client through authorization server. Resource owner grants access by submitting authorization form, and redirected to URL known as, "redirect URI".` },
    { que: "3. Performing Token Exchange",
        ans: `OAuth client exchanges authorization code for access token. Code is sent straight back to where it came from, the authorization server, along with OAuth client registration credentials.` },
    { que: "4. Accessing Protected Resources",
        ans: `OAuth client uses access token to access protected resource. This request carries access token in header. Resource server is responsible for validating access token. If token is valid, OAuth client is given access to protected resource.` },
    { que: "📁 Ch11 SUMMARY Full Stack Python Security: Cryptography, TLS, Attack Resistance - OAuth 2",
        ans: `You can share your data without sharing your password.
        Authorization code flow is by far the most commonly used OAuth grant type.
        An authorization code is exchanged for an access token.
        Reduce risk by limiting access tokens by time and scope.
        Scope is requested by OAuth client, defined by authorization server, enforced by resource server.` },
    { que: "📁 Learning Advanced API Concepts",
        ans: `https://realpython.com/python-api/#learning-advanced-api-concepts` },
    { que: "Authentication",
        ans: `wide range(ex: API keys, Basic Authentication, OAuth).
        Calling API without credentials returns "401 Unauthorized" or "403 Forbidden" status code` },
    { que: "API Keys",
        ans: `most common level of authentication. Keys are used to identify API user/customer and trace your use of API. API keys are sent as request header or query parameter.` },
    { que: "OAuth API",
        ans: `used every time an app/platform has "Login With Google" or "Continue With Facebook" option.` },
    { que: "Pagination",
        ans: `Sending data back/forth between clients cost "bandwidth". Servers cope with multiple requests using "Pagination".
        Pagination: splitting large amounts of data into multiple smaller pieces using "page attribute"(defines which page you're currently requesting), "size attribute"(defines size of each page).` },
    { que: "Rate Limiting",
        ans: `people with bad intentions abuse APIs, so use technique called "rate limiting"; restricts number of requests in a given time frame.` },
    { que: "📁 Ch12 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Working with the OS",
        ans: `covers:
        Enforcing filesystem-level authorization with "os" module.
        Creating temp files with "tempfile" module.
        Invoking external executables with "subprocess" module
        Resisting shell injection and command injection.` },
    { que: "Filesystem-level authorization",
        ans: `involes less work than application-level authorization because you don't need to enforce anything; your os does this.` },
    { que: "Asking for permission",
        ans: `a coding style, "easier to ask for forgiveness than permission(EAFP)", assumes preconditions are true, then catches exceptions when false.
        EAFP is opposite coding style, "look before you leap(LBYL)".
        EAFP is characterized by try/except statements.
        LBYL is characterized by if/then statements.
        EAFP is optimistic.
        LBYL is pessimistic.` },
    { que: "Working with temp files",
        ans: `Use Python's native module, "tempfile".
        tempfile.TemporaryFile function is preferred way.` },
    { que: "Using subprocess module",
        ans: `Python's answer to external executables.` },
    { que: "📁 Ch12 SUMMARY Full Stack Python Security: Cryptography, TLS, Attack Resistance - Working with the OS",
        ans: `Prefer high-level authorization utilities over low-level methods.
        Choose between EAFP/LBYL coding styles on case-by-case.
        Wanting to invoke external executable is different from needing to.
        Between Python/PyPI, there is usually alternative for commands you want.
        If you execute a command, unlikely command needs a shell.` },
    { que: "📁 Python Security Practices You Should Maintain",
        ans: `https://www.securecoding.com/blog/python-security-practices-you-should-maintain/` },
    { que: "Use Recent Major Version of Python",
        ans: `Old versions of python will no longer receive security updates.` },
    { que: "Use Virtual Environment",
        ans: `prevents conflict in Python modules and have same modules both on local/production environments.
        Prevents malicious Python dependencies in projects and shipping same to production by using 'pip freeze' to generate requirements.txt.
        To create virtual environment use Virtualenv or Pipenv.` },
    { que: "Import Packages the Right Way",
        ans: `"Absolute imports" specifies path of resource, while "relative import" specifies resource to be imported relative to current location of project.
        /* Absolute import */
        from package1 import module1
        from package1.module2 import function1
        /* Relative import */
        from .some_module import some_class
        from ..some_package import some_function` },
    { que: "Relative Imports - Implicit v Explicit",
        ans: `Implicit: doesn't specify resource path relative to current module.
        Explicit: specifies exact path of module relative to current module.
        Implicit import is disapproved/removed from Python 3.
        Ensure using absolute import or explicit relative import:
        from safe_module import package, function, class
        from ..relative_module import package, function, class` },
    { que: "String Formatting in Python",
        ans: `use Template class:
        from string import Template
        name_template = Template("Hello, my name is $name.")
        greeting = name_template.substitute(name="Tobi")` },
    { que: "Handle Python HTTP Requests Safely",
        ans: `building project that requires sending HTTP requests contains risks.` },
    { que: "Look Out for Exploited/Malicious Packages",
        ans: `Most packages are published to PyPl and serves as code repository and do not go through security reviews/checks.
        Consider using security tools to scan Py dependencies to screen for exploted packages.` },
    { que: "Handling Data Deserialization Safely",
        ans: `use packages that ensures safety of data in sandbox before deserializing data. One option is use package, PyCrypto, as it securely deserializing your data and prevent running arbitrary code.
        Same for Pickle and YAML data type. 
        Pickle serialize/deserialize Py object structure.
        Use PyYAML package for YAML data type.` },
    { que: "Keep Up-To Date Open Source Vulnerabilities in Your Python Packages",
        ans: `to prevent/rid of open source vulnerabilites is having the latest update.` },
    { que: "🎥 Secure Programmer: Intro to Programming Standards",
        ans: `` },
    { que: "General Standards",
        ans: `IEEE 610.12: Standard Glossary of Software Engineering Technology.
        IEEE 12207: Software Life Cycle Processes.
        IEEE 1045: Standard for Software Productivity Metrics.` },
    { que: "Testing and Quality Standards",
        ans: `IEEE 1008: Standard for Software Unit Testing.
        IEEE 1012 Standard for Software Verification and Validation.
        IEEE 1028: Standard for Software Reviews.
        IEEE 1061: Standard for Software Quality Metrics Methodology.` },
    { que: "Maintenance and Documentation Standards",
        ans: `IEEE 1042: Guide to Software Configuration Management.
        IEEE 1219: Standard for Software Maintenance.
        IEEE 1063: Standard for Software User Documentation.` },
    { que: "NIST SP 800-27 Life Cycle",
        ans: `Initiation
        Development/Acquisition
        Implementation
        Operation/Maintenance` },
    { que: "ISO/IEC 15504",
        ans: `Incomplete
        Performed
        Managed
        Established
        Predictable
        Optimized` },
    { que: "ISO 29110",
        ans: `Systems and Software Life Cycle Profiles and Guidelines for Very Small Entities(VSEs):
        Overview
        Framework for profile preparation
        Certification and assessment guidance
        Profile specifications
        Management, engineering and services delivery guidelines ` },
    { que: "ISO Standards",
        ans: `ISO 14598: Software Product Evaluation
        ISO 15026: Systems and Software Integrity Levels
        ISO 15939: Software Measurement Process` },
    { que: "IEEE Standards",
        ans: `IEEE 830: Recommended Practice for Software Requirements Specifications
        IEEE 1016: Standard for Information Technology, Systems Design, Software Design, Descriptions
        IEEE 1008: Standard for Unit Testing
        IEEE 1219: Standard for Software Maintenance` },
    { que: "Types of Requirements",
        ans: `Stakeholder Requests
        Business Rules
        Regulatory
        Limitations` },
    { que: "FURPS model",
        ans: `Functionality
        Usability
        Reliability
        Performance
        Supportability` },
    { que: "Requirements Concepts",
        ans: `Elicitation
        Analysis
        Tracing
        Verifying` },
    { que: "Requirements Gathering Techniques - Essential Techniques",
        ans: `Brainstorming 
        Focus Group
        Observation
        Interview
        Prototyping
        Reverse Engineering` },
    { que: "Requirements Gathering Techniques - Classify Requirements",
        ans: `Criticality
        Rationale
        Key Driving Requirement
        Prioritize` },
    { que: "Requirements Gathering Techniques - Be Alert For",
        ans: `Dependency requirements
        Physical environment
        Non-functional requirements
        All stakeholders have been consulted` },
    { que: "Quality and Change Management - Quality Perspectives",
        ans: `I know it when I see it: is horrible
        Possessess desired features
        Fitness for use
        Conforms to requirements` },
    { que: "Quality and Change Management - Change Management",
        ans: `Step 1: Request for Change
        Step 2: Change Approval Board
        Step 3: Document` },
    { que: "Quality and Change Management - ISO 9126",
        ans: `Software Quality Characteristics Criteria:
        Functionality (most important)
        Reliability
        Usability
        Efficiency
        Maintainability
        Portability (least important)` },
    { que: "IEEE 730: Standard for Software Quality",
        ans: `Establish Software Quality Assurance(SQA) framework
        SQA Planning
        SQA Closing
        SQA Activites/Tasks` },
    { que: "📁 Ch13 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Never Trust Input",
        ans: `covers:
        Validating Python dependencies with Pipenv
        Parsing YAML safely with PyYAML
        Parsing XML safely with defusedxml
        Preventing DoS attacks, Host head attacks, open redirects, SQL injection
        ...
        Attacks have different forms of input: package dependencies, YAML, XML, HTTP, SQL.
        Goals of these attacks: data corruption, privilege escalation, unauthorized data access.
        "Input validation" is antidote for these attacks.` },
    { que: "Package management with Pipenv",
        ans: `Pipenv installs third-party packages from package repository(ex: PyPI). Package repositories are significant portion of attacks.
        When Pipenv retrieves package, it hashes inbound package artifact and compares hash values, if hash values match, Pipenv assumes package is unmodified and safe to install.` },
    { que: "YAML Remote Code Execution",
        ans: `reminisce remote code-execution attack; attacker embeds malicious code into pickled/serialized Python object, then disguises code as cookie-based HTTP session state into a server. Server then kills itself executing the malicious code with PickleSerializer.
        This is the same with YAML; same attack, different data format.`},
    { que: "apply PLP to PyYAML via Loaders (4)",
        ans: `Loaders are listed starting with least to powerful, also supports more features and carries more risk than previous one:
        BaseLoader: supports Python objects(ex: strings, lists).
        SafeLoader: supports Python objects and standard YAML tags.
        FullLoader: Full YAML language support(the default).
        UnsafeLoader: Full YAML language support and arbituary function calls.` },
    { que: "XML Entity Expansion",
        ans: `"Entity Delaration": allows you to define and name arbitrary data in XML document.
        "Entitty Reference": a placeholder, allowing to embed entity in XML document.
        Normally, XML entity contains few characters, imagine if entity contained 5000 characters.` },
    { que: "Quadratic Blowup Attack",
        ans: `weaponizes XML entity expansion.
        if entity was 43 characters long, but entity was referred 10 times. Quadratic blowup reference count orders of magnitude larger.
        Ex: if entity is 1MB, and referenced 1024 times, document will weigh 1GB.
        This malicious input is, "memory bomb"` },
    { que: "Billion Laughs Attack",
        ans: `aka "exponential blowup expansion attack", similar to quadratic attack, but more effective. This attack exploits XML entity that references other entities.` },
    { que: "Vulnerable packages to quadratic blowups / billion laughs attacks",
        ans: `minidom, pulldom, sax, etree`},
    { que: "Defusing memory bombs",
        ans: `resist memory bombs with Python library, "defusedxml"` },
    { que: "Denial of Service(DoS)",
        ans: `designed to overwhelm system with excessive resource consumption. The resources targeted: memory, storage space, network bandwidth, CPU. Goal for DoS is to deny users access to service by compromising availability of the system.
        Web server (ex: NGINX), or load-balancing solution (AWS Elastic Load Balancing), resist DoS attacks.` },
    { que: "Host Header Attacks",
        ans: `occurs when web application trusts HTTP Host Header in incoming requests and uses it to generate links, redirects, or construct URLs without proper validation. (ex: sending password reset to attacker's email)` },
    { que: "Open Redirect Attacks",
        ans: `Attacker wants to steal money: attacker creates impersonation of person's bank and sends email to that person, that person is redirected to attacker's impersonated bank site and victim enters log in credentials. Attacker logs in to bank and steals money.
        Victim has been phished:
        Phishing: arrive via email.
        Smishing: arrive via Short Message Service(SMS).
        Vishing: arrive via voicemail.` },
    { que: "SQL Injection",
        ans: `Your project relay data between user and relational databse, if there's no user input validation, pose exploitation for SQL injection.
        Attacker use SQL injection by submitting malicious SQL code as input in a vulnerable system, which allows attackers to destroy, modify, gain unauthorized access to data.` },
    { que: "Raw SQL Queries",
        ans: `Django model class refers query interface by property named objects, this interface accomodates raw SQL queries with method called raw, which accepts raw SQL and returns set of model instances. Attacker can escalate user's privileges.` },
    { que: "Database Connection Queries",
        ans: `Django allows to execute raw SQL queries directly through database connection. Useful if your query doesn't belong to single model class, or want to execute UPDATE, INSERT, DELETE statement.` },
    { que: "📁 Ch13 SUMMARY Full Stack Python Security: Cryptography, TLS, Attack Resistance - Never Trust Input",
        ans: `Hashing and data integrity effectively resist package injection attacks.
        Parsing YAML can be just as dangerous as parsing pickle.
        XML isn't just ugly; parsing it from untrusted source can bring down a system.
        You can resist low-level DoS attacks with your web server and load balancer.
        You can resist high-level DoS attacks with your Web Server Gateway Interface(WSGI) or application server.
        Open redirect attacks enable phishing scams and man-in-the-middle attacks.
        Object-relational mapping effectively resists SQL injection.` },
    { que: "📁 Ch14 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Cross-Site Scripting Attacks",
        ans: `covers:
        Validating input with forms and models.
        Escaping special characters with template engine.
        Restricting browser capabilities with response headers.` },
    { que: "What is XSS",
        ans: `attacker injects malicious code into browser of another user. 
        Malicious code can be in HTML, CSS, JS.
        Arrive in many vectors: body, URL, or header of HTTP request.` },
    { que: "XSS subcategories(3)",
        ans: `Persistent
        Reflected
        DOM-Based` },
    { que: "Persistent XSS",
        ans: `Systems designed to share user content(ex: forums,blogs,social media sites) are prone to Persistent XSS. Attacker will lure victims to injected content via email/chat.` },
    { que: "Reflected XSS",
        ans: `Attacker sends malicious code in URL or HTTP header, and victim clicks on the link. The malicious code is reflected back to the victim's browser and executed.` },
    { que: "DOM-Based XSS",
        ans: `Attacker injects malicious code into DOM of victim's browser. The malicious code is executed in the victim's browser without being sent to the server.` },
    { que: "Input Validation - Django messaging app:",
        ans: `AuthenticatedMessage: Your existing model class.
        CreateAuthenticatedMessageView: new view class.
        authenticatedmessage_form.html: new template.` },
    { que: "Input sanitization",
        ans: `attempt to cleanse, or scrub data from untrusted source. Programmer scans input for malicious content, if found, is removed by modifying the input.` },
    { que: "Escaping Output",
        ans: `most effective XSS defense. Sites resist XSS by escaping special HTML characters. ex: < (escaped to &lt;), ' (escaped to &apos;), " (escaped to &quot;), & (escaped to &amp;).` },
    { que: "HTTP Response Headers",
        ans: `this layer prevent attacks and limit damage. Main idea is restricting browser capabilities.
        3 angles:
        Disabling JavaScript access to cookies.
        Disabling MIME sniffing.
        Using X-XSS-Protection header.` },
    { que: "Disable JavaScript access to cookies",
        ans: `Attackers attempt to access victim's session ID cookie, an XSS goal.` },
    { que: "Disable MIME type sniffing",
        ans: `MIME type sniffing is a browser feature that attempts to guess the content type of a resource based on its content. Disabling this feature prevents attackers from tricking browsers into executing malicious content.` },
    { que: "X-XSS-Protection header",
        ans: `This header enables the browser's built-in XSS protection mechanism. It can be set to '0' to disable protection, or '1' to enable it.
        ex: X-XSS-Protection: 1; mode=block` },
    { que: "📁 SUMMARY Ch14 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Cross-Site Scripting Attacks",
        ans: `XSS comes in 3 flavors: Persistent, Reflected, and DOM-Based.
        XSS isn't limited to JS; HTML/CSS are weaponized as well.
        One layer of defense will eventually get you compromised.
        Validate user input; don't sanitize it.
        Escaping output is the most important layer of defense.
        Servers use response headers to protect users by limiting browser capabilities.` },
    { que: "📁 Validating and Sanitizing user inputs on python projects REST api",
        ans: `https://dev.to/mrkanthaliya/validating-and-sanitizing-user-inputs-on-python-projects-rest-api-5a4` },
    { que: "Validation",
        ans: `User input data validation is important when developing a project. It keeps data clean and prevents malicious data being sent with requests using intercept tools like Burp Suite.
        Python package helps in validating API request is Schema.
        ex: from schema import Schema, Optional, And, Use` },
    { que: "Sanitization",
        ans: `Once user inputs are validated, data needs to be sanitized with HTML sanitizing library that escapes or strips markup and attributes (Bleach).
        Adding sanitization helps eliminate XSS attacks.
        ex: import Bleach
        bleach.clean('an <script>evil()</script> example')
        u'an &lt;script&gt;evil()&lt;/script&gt; example'` },
    { que: "📁 Ch15 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Content Security Policy",
        ans: `covers:
        Composing content security policy with fetch, navigation, document directives.
        Deploying CSP with django-csp.
        Detecting CSP violations with reporting directives.
        Resisting XSS and man-in-the-middle attacks.` },
    { que: "Content Security Policy (CSP)",
        ans: `standard that servers/browsers adhere to, to send/receive security policies. Policy restricts what browser can do with response. To protect user/server, policy restrictions are designed to prevent/mitigate web attacks.` },
    { que: "CSP accomodates this balance with 3 directive categories:",
        ans: `Fetch directives
        Navigation directives
        Document directives` },
    { que: "Fetch Directives",
        ans: `most commonly used. Limits how browser can fetch resources (scripts, stylesheets, images, etc) which avoid/minimize XSS attacks.` },
    { que: "default-src directive",
        ans: `browser falls back to default-src when doesn't receive explicit fetch directive for given content type.` },
    { que: "script-src directive",
        ans: `applies to JavaScript resources. Can be set to 'self', 'none', or specific domains.
        Avoid unsafe-eval source(this permits browser to evaluate and execute JavaScript expression from string)
        Following are potential attack vectors:
        eval(string) function
        new Function(string)
        window.setTimeout(string,x)
        window.setInterval(string,x)` },
    { que: "style-src directive",
        ans: `controls how browser process CSS.` },
    { que: "img-src directive",
        ans: `how browser fetch images. Content Delivery Networks (CDNs) are often useful for sites hosting images and static content from third-party domains.
        Hosting static content from CDN decrease load times, cut costs, counteract traffic spikes.` },
    { que: "📁 SUMMARY Ch15 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Content Security Policy",
        ans: `Policies are composed of directives; directives are composed of sources.
        Each additional source expands attack surface.
        An origin is defined by the protocol, host, and port of URL.
        A nonce source strikes balanace between none and unsafe-inline.
        CSP is one of the cheapest layers of defense you can invest in.
        Reporting directives inform you when other defense layers have failed.` },
    { que: "📁 Ch16 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Cross-Site Request Forgery (CSRF)",
        ans: `covers:
        Managing session ID usage.
        Following state management conventions.
        Validating the Referer header.
        Sending, receiving, verifying CSRF tokens.` },
    { que: "Cross-Site Request Forgery (CSRF) attack",
        ans: `airms to trick victim into sending forged request to vulnerable website. CSRF resistance distinguish a forged request from a legitimate one, via request headers, response headers, cookies, state management conventions; "defense in depth" is not optional.` },
    { que: "What is request forgery?",
        ans: `Request forgery is an attack where an attacker tricks a user into submitting a request they didn't intend to submit. The attacker exploits the user's authenticated session to perform unauthorized actions on their behalf.` },
    { que: "📁 SUMMARY Ch16 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Cross-Site Request Forgery (CSRF)",
        ans: `Secure site can differetiate intentional request from forged request.
        None and Strict occuput opposite ends of SameSite risk spectrum.
        Lax is a reasonable trade-off, between the risk of None and Strict.
        Other programmers, standards bodies, browser vendors, and web frameworks agree: follow proper state management conventions.
        Don't validate request method in function when you declare it in a class.
        Simple "Referer" header validation and complex token validation are both effective forms of CSRF resistance.` },
    { que: "📁 Ch17 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Cross-Origin Resource Sharing (CORS)",
        ans: `covers:
        Understanding the same-origin policy(SOP).
        Sending/receiving simple CORS requests.
        Implementing CORS with django-cors-headers.
        Sending/receiving preflighted CORS requests.` },
    { que: "same-origin policy (SOP)",
        ans: `SOP is a security mechanism that restricts how web pages can make requests to other domains or subdomains. It prevents malicious websites from making unauthorized requests to a user's authenticated session on another domain.` },
    { que: "CORS",
        ans: `Cross-Origin Resource Sharing is a mechanism that allows web applications to make requests to resources from different origins (domains, subdomains, ports). It is implemented through HTTP headers that define which origins are allowed to access resources on the server.` },
    { que: "CORS with django-cors-headers",
        ans: `django-cors-headers is a Django package that helps implement CORS in Django applications. It provides middleware and settings to configure CORS headers for different origins and request types.` },
    { que: "📁 SUMMARY Ch17 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Cross-Origin Resource Sharing (CORS)",
        ans: `The internet would be a very dangerous place without the SOP.
        CORS can be thought of as a way to relax the SOP.
        Simple CORS use cases are accommodated by Access-Control-Allow-Origin.
        The browser precedes a potentially harmful CORS request with a preflight request.
        Host all shared resources with common URL path prefix.` },
    { que: "📁 Ch18 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Clickjacking",
        ans: `covers:
        Configuring X-Frame-Options headers.
        Configuring frame-ancestors Content Security Policy(CSP) directive.` },
    { que: "clickjacking",
        ans: `Clickjacking is an attack where a malicious website tricks a user into clicking on a hidden or disguised element on another website. This can lead to unauthorized actions being performed on the user's behalf.` },
    { que: "X-Frame-Options header",
        ans: `use to resist clickjacking. ` },
    { que: "Content-Security-Policy header",
        ans: `supports directive named, "frame-ancestors", a modern solution to preventing clickjacking.` },
    { que: "📁 SUMMARY Ch18 Full Stack Python Security: Cryptography, TLS, Attack Resistance - Clickjacking",
        ans: `same-origin policy doesn't apply to clickjacking because the request isn't cross-origin.
        Cross-site request forgery checks cannot prevent clickjacking because the request isn't cross-site.
        X-Frame-Options and Content-Security-Policy response headers effectively resist clickjacking.
        X-Frame Options has been obsoleted by Content-Security-Policy.
        Subscribe to influencers, news feeds, advisories to keep skills current.` },
    { que: "📁 CH4: Adding Security Practices within SDLC lifecycle",
        ans: `1. Devs must be given training on principles, methods, importance of security software programming.
        2. They can be properly trained to check OWASP(OpenWebApplicationSecurityProject) Top 10 security risks for their web apps.
        3. Project Managers/Architects must be place importance use of latest tech that are up-to-date.
        4. Automation: implement automated tests in the project.` },
    { que: "📁 Software Engineering, Security and Vulnerabilities",
        ans: `` },
    { que: "Capability Maturity Model Integration (CMMI)",
        ans: `defines level of agility/effectiveness of developement solution.
        Maturity Levels:
        Level 1: Ad hoc: process is unpredictable, poorly controlled, and reactive.
        L2: Repeatability: process is characterized for projects and is often reactive.
        L3: Quantitative: process is characterized for the organization and is proactive.
        L4: Qualitative: process is highly automated, measured and controlled.
        L5: Optimized: all of previous level and improved further.` },
    { que: "📁 Calling Your First API Using Python: Status Codes",
        ans: `https://realpython.com/python-api/#status-codes` },
    { que: "Status Code 200",
        ans: `OK: The request was successful.` },
    { que: "Status Code 201",
        ans: `Created: The request was successful and a new resource was created.` },
    { que: "Status Code 400",
        ans: `Bad Request: The request is either wrong or missing something.` },
    { que: "Status Code 401",
        ans: `Unauthorized: The request requires user authentication or additional permissions.` },
    { que: "Status Code 404",
        ans: `Not Found: The requested resource does not exist.` },
    { que: "Status Code 405",
        ans: `Method Not Allowed: The endpoint doesn't allow for that specific HTTP method.` },
    { que: "Status Code 500",
        ans: `Internal Server Error: The server encountered an error while processing the request, or your request wasn't expected and probably broke something on the server side.` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
    { que: "",
        ans: `` },
];