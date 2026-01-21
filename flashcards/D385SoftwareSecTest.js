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
    { que: "📁 Chapter 6: Design and Development (A4): SDL Activities and Best Practices",
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
    { que: "Secure Programmer: Software Testing - ",
        ans: `` },
    { que: "Secure Programmer: Software Testing - ",
        ans: `` },
    { que: "Secure Programmer: Software Testing - ",
        ans: `` },
    { que: "Secure Programmer: Software Testing - ",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - ",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - ",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - ",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - ",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - ",
        ans: `` },
    { que: "Defensive Programmer: Secure Testing - ",
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
    { que: "",
        ans: `` },
];