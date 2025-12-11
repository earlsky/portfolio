const flashcards = [
    { que:"Project Life Cycle phases",
        ans:`Concept/Delivery, Initiation, Planning, Execution, Closing` },
    { que:"Concept/Delivery Phase",
        ans:`Decide if project is practical. Analyze financial returns, feasibility, implementation options.` },
    { que:"Initiation Phase",
        ans:`outline project, identify parties with vested interest, bring project team together to kick off project work. Draft high-level summary of project goals and timeline.` },
    { que:"Planning Phase",
        ans:`Turn project goals into detailed plan. Team define all activities needed to complete. PM will manage team logistics and ensure adequate resources. Have project work schedule and performance metrics for tracking progress.` },
    { que:"Execution Phase",
        ans:`Team delivers work. Team writes code, configure systems, or build a house. Create supporting materials and coordinate with each other to complete the work. PM monitors progress, measure performance, find and solve problems, maintain records, create reports.` },
    { que:"Closing Phase",
        ans:`project winds down and ensuring everything is ready to close. Confirm project is thorough, update documentation, create financial summary. Request official approval to close project.` },
    { que:"Sections of Business Case",
        ans:`Executive Summary, 
        Problem Statement, 
        Problem Analysis, 
        Options, 
        Project Definition, 
        Financial Overview, 
        Recommendation` },
    { que:"Executive Summary",
        ans:`brief synopsis of the business case. Gives overview of main points including problem statement, solution, expected results.` },
    { que:"Problem Statement",
        ans:`shares details about the problem. Presents thorough analysis of current situation and the business problem, opportunity, or unmet need. Problem statement describes something that will change due to this project.` },
    { que:"Problem Analysis",
        ans:`Provides context about why the project should be a priority. Include historical performance data, environmental assessment, other evidence to support the business case.` },
    { que:"Options",
        ans:`describes several approaches to solving the problem. Compares solutions against each other with pros/cons. Every business case includes two options: do nothing and the project will propose in the recommendation. "Alternatives identification" is a simple step that adds depth to your business case.` },
    { que:"Project Definition",
        ans:`includes additional information about proposed project. Ex: contain details about the project scope, resources needed, milestones, implementation timeline.` },
    { que:"Financial Overview",
        ans:`covers economic impacts of the project. Ex: project cost, where money will come from, what company can gain. This section contains cost-benefit analysis or ROI analysis and risks and assumptions.` },
    { que:"Recommendation",
        ans:`narrows downs options to best solution with justification.` },
    { que:"Current state",
        ans:`describes what is happening now.` },
    { que:"Future state",
        ans:`describes what the business will look like after implementing the project.` },
    { que:"Return on Investment(ROI)",
        ans:`a standard financial analysis tool
        ROI = (NetProfit / Cost) x 100
        ROI = ((Revenue - Cost) / Cost) x 100
        ROI = ((Financial Value - Project Cost) / Project Cost) x 100` },
    { que:"ROI 3 main values",
        ans:`Benefit = financial value or revenue.
        Cost = project cost or project expense.
        Net Profit = difference between the benefit and the cost.` },
    { que:"Financial Assumptions",
        ans:`factors you believed to be true already.` },
    { que:"Financial Risks",
        ans:`events you think could happen.` },
    { que:"Environmental factors",
        ans:`how the organization impacts natural world.` },
    { que:"Social factors",
        ans:`how company develops relationships and treats people.` },
    { que:"Governance factors",
        ans:`how the company operates, including policies, transparency, structure.` },
    { que:"Corporate Identity",
        ans:`Includes its vision, mission statement, values, and brand.` },
    { que:"Types of Work",
        ans:`Operational Work: Routine, predictable, repetitive.
        Project Work: Accomplishes something new.` },
    { que:"Types of Organizational Structures",
        ans:`Functional, Projectized, Matrix` },
    { que:"Functional Organization Structure",
        ans:`divides organization by areas of expertise/specialization.
        PMs coordinates the project, but have little authority over people or cost.` },
    { que:"Projectized Organization Structure",
        ans:`organization pool resources around projects. PMs lead each team vs specialized managers. Also fewer layers and branches.` },
    { que:"Matrix Organization Structure",
        ans:`Include functional leaders and specialized roles, however organization hires PMs and sponsors projects` },
    { que:"Matrix organizations subtypes",
        ans:`Weak matrix: functional manager retains all budget and staff management responsibilities.
        Strong matrix: PM has substantial control over the budget` },
    { que:"Level of Project Manager Authority in Organizational Structures",
        ans:`No Authority <- Functional Org - Weak Matrix Org - Strong Matrix Org - Projectized Org -> Total Authority` },
    { que:"Projects in a Program",
        ans: `a project has a single objective, while a program has multiple related objectives.`},
    { que:"Project Management Roles",
        ans:`Project Manager, Program Manager, Project Management Office(PMO)` },
    { que:"Project Manager",
        ans:`leads project throughout the project life cycle` },
    { que:"Program Manager",
        ans:`lead programs, related to groups of projects` },
    { que:"PMO",
        ans:`functional department for all PMs in a company. Oversees project "performance management" and tracks metrics for projects throughout the organization.` },
    { que:"PMO Types",
        ans:`Supportive, Controlling, Directive` },
    { que:"Supportive PMO",
        ans:`provides support when requested. PMO is library of project information.` },
    { que:"Controlling PMO",
        ans:`more involved than supportive PMO, actively monitors project performance.` },
    { que:"Directive PMO",
        ans:`most controlling PMO type, sets rules for everybody in the company.` },
    { que:"Project Influencer Roles",
        ans:`Project Stakeholder, Senior Management, Sponsor, Customer, End User` },
    { que:"Project Stakeholder",
        ans:`anybody with vested interest in a project` },
    { que:"Senior Management",
        ans:`highest level of leadership in an organization.` },
    { que:"Sponsor",
        ans:`accountable for a project` },
    { que:"Customer",
        ans:`recieve the benefits from the project. Two types (Internal and External)` },
    { que:"Internal Customer",
        ans:`customers work inside the project organization.` },
    { que:"External Customer",
        ans:`customers outside the organization.` },
    { que:"End-User",
        ans:`the person who interacts with project's final output.` },
    { que:"Waterfall phases",
        ans:`Requirements: define project requirements
        Design: convert requirements into design specifications
        Implementation: complete necessary work
        Testing: verify work completed meets requirements and quality specifications.
        Delivery: this phase is referred to as "deployment" in software project.
        Maintenance: solves issues as they arise` },
    { que:"Agile Developments",
        ans:`Iterative, Incremental, Iterative & Incremental` },
    { que:"Iterative Development",
        ans:`cycle of improvement; something is built, inspected, improved upon next iteration. Develop small parts of features and improve them often.` },
    { que:"Incremental",
        ans:`features and completed and released often throughout the project. Build all of one of the features and release it.` },
    { que:"Iterative and Incremental Development (IID)",
        ans:`Build one feature at a time; build small sections at a time, review progress, adapt approach. Only release feature to production when appropriate.` },
    { que:"Scrum",
        ans:`A lightweight, customer centric framework. 
        Uses "empiricism", which encourages teams to make decisions based on what they see and know. Stands out as "all-or-nothing" framework, meaning you use all parts of Scrum.` },
    { que:"Scrum Values",
        ans:`commitment, focus, openness, respect, courage` },
    { que:"Scrum pillars",
        ans:`transparency, inspection, adaptation` },
    { que:"Scrum 4 step process",
        ans:`1. Product owner prioritizes work into product backlog.
        2. Scrum team selects top items in backlog. Top items create sprint backlog, which deliver working product to help solve top problem in product backlog.
        3. Scrum team and stakeholders review sprint results and adapt the product and the team's approach for next sprint.
        4. The steps repeat as long as the product backlog exists.` },
    { que:"Scrum roles",
        ans:`Scrum team, Product owner, Scrum master, Developers` },
    { que:"Scrum Team",
        ans:`includes Scrum master, product owner, developers` },
    { que:"Product Owner",
        ans:`creates, maintains, owns product backlog.` },
    { que:"Scrum Master",
        ans:`agile team's Scrum coach; help team, product owner, and organization improve applying Scrum.` },
    { que:"Developers",
        ans:`any job title or function that helps Scrum team produce value.` },
    { que:"Key Scrum Artifacts and Terms",
        ans:`Product backlog, Product goal, Sprint backlog, Sprint goal, Increment.` },
    { que:"Product Backlog",
        ans:`an ordered list of product changes or enhancements.` },
    { que:"Product goal",
        ans:`describe product's longer-term target.` },
    { que:"Sprint backlog",
        ans:`Scrum team's plan for upcoming sprint.` },
    { que:"Sprint goal",
        ans:`describe objective that team plans to meet to advance toward product goal.` },
    { que:"Increment",
        ans:`a complete body of work that meets the definition of done and moves toward the product goal.` },
    { que:"Scrum Events",
        ans:`Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective` },
    { que:"Sprint",
        ans:`Scrum iteration and the container for all other Scrum events. Fixed lengths (one week - one month)` },
    { que:"Sprint Planning",
        ans:`product owner discusses highest priority items in product backlog and how they relate to product goal.` },
    { que:"Daily Scrum",
        ans:`developers meet to review progress toward sprint goal and plan next 24h of work. Lasts 15min every working day.` },
    { que:"Sprint Review",
        ans:`agile team shares their progress with stakeholders.` },
    { que:"Sprint Retrospective",
        ans:`team inspects how they worked in the past sprint and identifies improvement opportunities. Retrospective doesn't focus on product, but focus on improving how team works together.` },
    { que:"Kanban (agile development methodology) core practices",
        ans:`Visualize work: create. Kanban board displaying phases that work moves through on your team.
        Limit WIP: Too much work is overwhelming. Context switching lowers productivity and degrades work environment; so limiting WIP allows team to focus.
        Make policies explicit: clear policies create a shared understanding of the work and workflow.
        Manage flow: look for and eliminate bottlenecks in your workflow.
        Implement feedback loops: build feedback into the system to stay informed about the system's performance.
        Improve collaboratively, evolve experimentally: use scientific method to test ideas and measure the results in the Kanban signals.` },
    { que:"Kanban's recognizable feature",
        ans:`the Kanban board: visualizes all work, WIP limits, work policies. Three main phases: To Do, In Progress, Done... but can add phases such as To Do, In Progress, "Review", Done.` },
    { que:"Kanban 4 part workflow",
        ans:`1. Product owner prioritizes and orders the backlog.
        2. Team member selects the top-ordered item in the backlog and pulls it into progress.
        3. Team moves the work item through the workflow, keeping within the WIP limits.
        4. When team is ready to start new work, they select the next item in the backlog.` },
    { que:"Extreme programming (XP)",
        ans:`An agile software development framework. Believes in 40hr workweek with frequent releases and customer centricity.` },
    { que:"XP 5 values",
        ans:`Communication 
        Simplicity
        Feedback
        Respect
        Courage` },
    { que:"XP roles",
        ans:`Customer: decides which features are needed now and which are needed next.
        Tracker: captures metrics, measures progress, looks for improvement opportunities.
        Coach: mentors team members who to use XP practices.` },
    { que:"XP Practices",
        ans:`Pair programming
        Ten-minute build
        Continuous integration
        Test-first programming
        Incremental design
        Sit together
        Whole team
        On-Site Customer
        Energized work
        Stories aka "user stories"
        Weekly cycle
        Quarterly cycle
        Slack: don't fill to capacity` },
    { que:"DevOps",
        ans:`Eliminates barrier between development and operations. includes culture of integrating development and operations and delivering work as often as needed. DevOps increases throughput with automation and decreases bugs through early detection.` },
    { que:"CI/CD",
        ans:`Continuous integration/continuous deployment: a core DevOps practice that drives all other improvements.` },
    { que:"Continuous Integration (CI)",
        ans:`Individual developers check their code into the main branch frequently, and automated tests run against the new code.` },
    { que:"Continuous delivery (CD)",
        ans:`The process after continuous integration; it prepares the code for release to production.` },
    { que:"Continuous deployment (CD)",
        ans:`fully automated alternative to continuous delivery. After integration, the continuous deployment process prepares the code for production release and deploys it to production.` },
    { que:"DevSecOps",
        ans:`As speed of DevOps increases, IT security risk would increase if it didn't keep pace.` },
    { que:"Scaled Agile Framework (SAFe)",
        ans:`Agile team: 3-10 cross-functional people work together to deliver increments of value.
        Agile release train (ART): in large companies, multiple agile teams work together to create large products. Ex: an agile team of 8 people wouldn't work alone to create a new operating system.
        Iteration: Scrum refers as Sprint, XP teams refer as Weekly Cycle. SAFe recommends 1-4 week iterations.
        Program Increment (PI): lasts 8-12 weeks, not three months.
        Program Increment Planning (PI Planning): similar to sprint planning for single Scrum team.` },
    { que:"SDLC 7 Phases",
        ans:`Planning: outline project and define software's scope and purpose
        Requirements: define resources needed for the project.
        Design & Prototyping: define how software needs to work, which programming language to use, which security protocols to use, how user interface behaves. Create low-function prototype to elaborate on design. Initiate risk management plan.
        Development: create software
        Testing: run tests to ensure software performs as expected.
        Analyze: assess risks, issues, changes of SDLC
        Operations & Maintenance: support the software as long as it's in production.` },
    { que:"SDLC Models",
        ans:`Waterfall, Iterative, Spiral, Agile` },
    { que:"Waterfall SDLC",
        ans:`rigid and not responsive to change. Suitable for predetermined tech stacks and short projects, not for long-term complex projects.` },
    { que:"Iterative SDLC",
        ans:`iterative and sequential hybrid model. Middle stages (requirements through testing) iterate as needed.` },
    { que:"Spiral SDLC",
        ans:`risk-centric iterative. Most complex and resource intensive model, advise to manage cost and scope closely. Doesn't work well for projects with limited resources.` },
    { que:"Agile SDLC",
        ans:`iterative, customer-centric. Similar to spiral, but customer views results after every iteration. Agile doesn't work well for projects with critical budget, time, scope limitations.` },
    { que:"Projects in Controlled Environments (PRINCE2)",
        ans:`Process-based project management methodology. Includes more upper management than other methodologies.` },
    { que:"PRINCE2 Roles & Responsibilities",
        ans:`Team manager
        Project board
        Executive
        Senior user
        Senior supplier` },
    { que:"Team Manager (PRINCE2)",
        ans:`on large project teams, a team manager joins the project management team. They help the PM by supervising the teams and managing the quality of outputs.` },
    { que:"Project board (PRINCE2)",
        ans:`accountable for a project. The board authorizes resources and funding, supports the PM, and is ultimately responsible for the project. The project board includes three roles: executive, senior user, and senior supplier.` },
    { que:"Executive",
        ans:`a member of upper management and represents a business perspective. The executive is also the deciding member of the project board, and they own the project’s business case. Each project board has one executive` },
    { que:"Senior user",
        ans:`represents the customer’s perspective. A project board will have one or more senior users.` },
    { que:"Senior supplier",
        ans:`represents the supplier or implementation partner’s perspective. One or more senior suppliers sit on the project board.` },
    { que:"PRINCE2’s structure",
        ans:`principles, themes, processes, and tailoring to suit the needs of the project environment. The methodology uses "7 principles, 7 themes, and 7 processes" to move the project forward by defining the approach, artifacts, and activities that do so.` },
    { que:"PRINCE2 Principles",
        ans:`1. Continued business justification
        2. Learn from experience
        3. Defined roles and responsibilities
        4. Manage by stages
        5. Manage by exception
        6. Focus on products
        7. Tailor to suit the product` },
    { que:"PRINCE2 Themes",
        ans:`1. Business case: use the business case to provide continued business justification.
        2. Organization: define and document the roles and responsibilities.
        3. Quality: define product quality to help the team focus on the product.
        4. Plans: maintain a project plan, and measure project performance.
        5. Risk: document and manage risks throughout the project.
        6. Change: track changes, and obtain approval before adding them to the plan.
        7. Progress: regularly track and measure the project’s progress so you can keep the project on track and address exceptions immediately.` },
    { que:"PRINCE2 Processes",
        ans:`1. Starting up: initiate the business and determine a project’s viability.
        2. Initiating: define the project’s aspects: scope, costs, time scales, risk, quality, and benefits.
        3. Directing: the product board provides oversight, including approving the project at stage boundaries. The project board decides when a project is ready to close.
        4. Controlling a stage: this stage includes the PM’s day-to-day activities. The PM breaks the project into tasks and oversees progress. They respond to and escalate issues when they arise
        5. Managing delivery: the PM measures the project’s performance. They also verify quality and obtain approvals of completed work.
        6. Managing a stage boundary: the PM prepares project updates and updates the project plan. The project board reviews the project data and decides if it should advance to the next stage or not. The project team captures lessons learned.
        7. Closing: the PM completes closing materials, turns over completed work, and closes the project.` },
    { que:"Product Owner",
        ans:`Product owners work within agile teams. They identify how to improve a product and are accountable for creating the most valuable product possible. A product owner tends to own a product for the entire product’s life cycle.` },
    { que:"Project Manager",
        ans:`They form a team for a short duration to achieve a specific objective. The PM is responsible for a project only as long as it is active.` },
    { que:"Product Manager",
        ans:`works in any framework. Product managers serve a more strategic function than product owners or PMs. Product managers oversee products and therefore exist for a product’s entire life cycle. They define the product strategy and create roadmaps to show how it will improve and change over time. The PM identifies projects and product changes. They often generate ideas that lead to new work for both PMs and product owners.` },
    { que:"Project Manager PM responsibilities",
        ans:`Build project team and secure resources.
        Build project charter and define project scope.
        Establish project logs and processes, including: issue log, change log, risk register
        Ensure project deliverables are met.
        Prepare/Deliver project status.
        Track project's progress and status, including performance to schedule and performance to budget.
        Manage vendor performance and relationships.` },
    { que:"Business Analyst (BA)",
        ans:`Improves final product. BAs hold unique role between business and technical teams. They understand business direction and company priorities and familiar with software environment. As result, they operate as translator between business and IT.` },
    { que:"BA responsibilities",
        ans:`Help define the project.
        Gather business and technical requirements.
        Ensure requirements stay aligned with project/business needs.
        Interpret business and technical requirements.
        Verify project deliverables against requirements.
        Assist with testing and validation.` },
    { que:"Architect",
        ans:`An umbrella term for many designer roles in an organization. Ex: enterprise architects, software architects, and solution architects support IT projects and operations. Architects design solutions; they look across an organization at how different systems work together and ensure projects adhere to solution requirements.` },
    { que:"Architect responsibilities",
        ans:`Contribute to solution design.
        Build system blueprints.
        Evaluate systems against organizational standards, such as information security.` },
    { que:"Developer/Engineer",
        ans:`Developers and engineers represent multiple roles that create the final product. Each software engineer or developer possesses specialized expertise in their field. Ex: software developers create the front-end and back-end, write the code, and create the products.` },
    { que:"Developer/Engineer responsibilities",
        ans:`Write code to expected standards.
        Build products according to the blueprints, project plan, or sprint backlog.
        Report on development progress to the PM or product owner.` },
    { que:"Tester/Quality Assurance(QA)",
        ans:`Test and quality assurance specialists help ensure code quality. They work closely with developers throughout to build in quality, and they help prevent errors from escaping into production.` },
    { que:"Tester/Quality Assurance(QA)) responsibilities",
        ans:`Write tests against requirements.
        Run tests on completed code to find defects and bugs.` },
    { que:"Customer / End-user",
        ans:`Some project teams will include a customer or end-user on the team. While this isn’t required, they can offer valuable insight.` },
    { que:"Customer / End-user responsibilities",
        ans:`Offer end-user perspective about the final product’s usability.
        Suggest new features or the next development priority in the project.
        Collaborate with team members to design the product.` },
    { que:"Vendor",
        ans:`Often referred to as "suppliers" or "business partners," vendors are external to the company. Your organization pays vendors to provide support, services, or goods needed for the project. Any third party you work with to procure resources is a vendor, and you may work with none or many vendors on a single project. You may include vendors on your project team, but it’s just as common not to have them. In either scenario, consider their impact and responsibilities while you build the project team and plan.` },
    { que:"Vendor responsibilities",
        ans:`Provide the work outlined in the contract. For instance, the deliverables could include delivery and setup, configuration, technical support, or advisory services.
        Maintain the service-level agreements (SLAs) outlined in the contract.
        Maintain clear lines of communication and productive relationships.` },
    { que:"Stakeholder",
        ans:`We often think of stakeholders as recipients; after all, they are the people or groups affected by projects. However, they carry responsibilities for the project as well. Factor in their impact and responsibilities, and it will help you plan for building effective working relationships with them.` },
    { que:"Stakeholder responsibilities ",
        ans:`Understand the project’s purpose and how it will affect them.
        Be transparent about their support or lack thereof for the project.
        Provide timely feedback about the project’s progress and direction.` },
    { que:"Subject Matter Expert (SME)",
        ans:`SME is a general label for anybody who is a respected expert in their field. The SME is the person you turn to when you need somebody to explain a complex topic simply or solve advanced issues.` },
    { que:"Features of Extended Team Members",
        ans:`Percentage of Time
        Availability by Phase
        Available on Request` },
    { que:"Percentage of Time",
        ans:`n your organization, BAs are a functional group that supports projects. ex: one BA might work on up to four teams at a time, so they would allocate 25% of their time to your project.` },
    { que:"Availability by Phase",
        ans:`Your organization has a quality improvement team that moves through the organization as consultants. You can request a quality improvement consultant for the project’s execution phase. You would not include their availability in other project stages in this scenario.` },
    { que:"Available on Request",
        ans:`Your organization runs many projects and has a small accounting team. Accountants are available during any project phase but only work on financial tasks. In this case, you would add their availability to the resource plan only when you have financial activities for them to complete. You would also need to coordinate with them to ensure they are available.` },
    { que:"Build Project Team",
        ans:`Position
        Core/Extended Member
        Availability
        Subteam or Grouping
        Project Responsibilities
        Preferred Contact Methods
        Manager
        Organization` },
    { que:"Sections of a Project Organizational Chart",
        ans:`Sponsor: list the sponsor or sponsors of the project.
        Steering Committee: list the members of the steering committee/advisory group.
        Project Manager: at the top of the main chart is the PM.
        Logical Groupings: group the team members in a way that makes sense for your project.
        Solid and Dotted Lines: use solid lines to show a reporting relationship and dotted lines to show an indirect management relationship.` },
    { que:"responsibility assignment matrix (RAM) or RACI chart",
        ans:`Responsible: completes the work.
        Accountable: ultimately accountable for the work. Work isn’t complete until they approve it. It’s best to have only one accountable person for each activity because it creates clarity of authority.
        Consulted: acts as a consultant. They are a SME who can provide advice or direction. They may also review and quality check work for the responsible group.
        Informed: receives updates but doesn’t interact with the tasks.` },
    { que:"Stakeholder Engagement Plan",
        ans:`organizes project management activities, and the PM is the primary audience. The project manager benefits from the thought and effort that goes into creating the plan. Creating the plan requires the PM to think through the project’s impact and talk to stakeholders.` },
    { que:"Stakeholder Engagement Steps",
        ans:`1. Identify the stakeholders
        2. Prioritize the stakeholders
        3. Understand stakeholders
        4. Develop a stakeholder engagement plan` },
    { que:"1. Identify the stakeholders",
        ans:`create a list of all the people and groups who could be stakeholders. Use a brainstorming approach at first; write down every idea and refine the list later. Summarize stakeholders into a shortlist of groups or categories. If your stakeholder is a group, identify the person(s) who will represent the stakeholders. Remember that the project team members are also stakeholders.` },
    { que:"2. Prioritize the stakeholders",
        ans:`categorize and prioritize stakeholders. The highest-priority stakeholders need frequent and active engagement, and the lowest-priority stakeholders require minimal attention.
        High Power/High Impact: have the most to gain and the most power.
        High Power/Low Impact: have enough influence that they could derail a project if they wanted.
        Low Power/High Impact: have little power to change a project, so they are less likely to disrupt it.
        Low Power/Low Impact: have little power or impact on the project. You are likely to find the lowest level of interest in this quadrant, but the situation could change.` },
    { que:"3. Understand stakeholders",
        ans:`talk to your stakeholders, and learn about their expectations. Find out who is supportive, what concerns they have, and how much they know about the project. Of course, you will eventually work with stakeholders who are not supportive. In these instances, hear out their concerns and try to address them. Find out if resistant stakeholders are likely to move to supportive. If they aren’t, evaluate the risk they pose to your project and how to manage it. For instance, a high-power, high-impacted stakeholder who is against the project will need to be monitored closely.` },
    { que:"4. Develop a stakeholder engagement plan",
        ans:`summarize what you’ve learned about the stakeholders in a stakeholder register, and describe how you will engage with them.` },
    { que:"Stakeholder Register fields",
        ans:`Stakeholder: list the person or group.
        Point of Contact: if the stakeholder is not a person, list the person who represents the stakeholder.
        Power: list the power level from the Power/Impact Grid.
        Influence: list their impact level from the Power/Impact Grid.
        Project Phase: list the project phases that you will need to engage with them.
        Engagement Needs: describe what they need or why they are a key stakeholder. For example, this section could include why they strongly influence the project.
        Engagement Approach: list the type of engagement you will conduct from the Power/Impact Grid.
        Methods: capture how you will communicate with them.
        Frequency: list a descriptive term of how often you will engage with the stakeholder. For example, use options such as occasional, less frequent, frequent, and very frequent.` },
    { que:"Key Performance Indicator (KPI)",
        ans:`measure only the most crucial measures. They are measured regularly in an ongoing manner. You can create KPIs for a project, process, or organization.` },
    { que:"Lagging indicators",
        ans:`are reflective measures. Ex:
        Test and build lead time
        Number of defects released to production
        Number of internal promotions
        Revenue
        Change adoption effectiveness` },
    { que:"Leading indicators",
        ans:`are predictive measures. Ex:
        Number of automated tests
        Number of bugs fixed in test
        Employee development program participation
        Advertisement clickthrough rate
        Change management quality` },
    { que:"SMART Objective",
        ans:`Specific: should explain exactly what needs to change.
        Measurable: needs to include a quantifiable metric, so that you can know when you’ve met the goal.
        Achievable: meant to be realistic. Therefore, ensure the goal is within the realm of possibility.
        Relevant: needs to have a purpose. In an organization, it should align with business strategy or business priorities.
        Time-Bound: needs to have a target end date.` },
    { que:"Objective and Key Results (OKR)",
        ans:`to achieve tremendous results quickly. OKRs are meant to be aspirational and slightly out of reach, they drive teams to deliver value that they didn’t think was possible.` },
    { que:"OKRs create a two-part goal statement composed of:",
        ans:`"Objective" is a qualitative goal statement. It doesn’t need to be as measurable as KPIs or SMART objectives. The Objective portion of the OKR tells the story about what the goal is for and why it matters.
        "Key Results" are quantitative measures of success. The key results will look similar to SMART objectives. They describe what you need to do to meet the goal.` },
    { que:"Selecting a Performance Measure Method",
        ans:`SMART is a method for writing solid goals. You can apply the technique to any goal in any framework.
        KPIs are long-term, operational metrics that describe the health of the system. KPIs help you stabilize and protect systems.
        OKRs are used to create shorter-term goals and generate change, where KPIs won’t change until the project ends or the process changes. An OKR exists long enough to achieve a target, and then a new OKR is created to reach the next goal.` },
    { que:"Timeline Charts",
        ans:`Milestone Charts aka "Project Timeline"
        Project Road Maps
        Gantt Charts` },
    { que:`Milestone Charts aka "Project Timeline"`,
        ans:`have more detail than a roadmap but are not exhaustive enough to form a plan. Milestone charts describe the milestone events, which are project checkpoints. They look like a timeline and plot deadlines, check-ins, and critical dates over the course of the project.` },
    { que:"Project Road Maps",
        ans:`are high-level documents that share major progress points, such as new feature rollouts. A road map is highly visual and resembles the format and level of detail that you might read in a press release. This visual works well for executive summaries.` },
    { que:"Gantt Charts",
        ans:`are highly detailed project plans. They show tasks and time in a grid to create a visual schedule view in a unique bar chart that shows time across the x-axis and a list of tasks or activities on the y-axis. The bars represent the time that each activity will occur. Additionally, Gantt charts show relationships and dependencies between tasks. Where roadmaps and milestones show events, Gantt charts show the tasks needed to reach the events. The team will use the Gantt chart during the planning, execution, and closing phases because it helps them plan and deliver the work.` },
    { que:"Project Charter",
        ans:`created in initiation phase,  brief, formal document that outlines the project parameters. It helps the team, stakeholders, sponsor, and PM agree on why the project matters and what needs to happen.` },
    { que:"Tips for Creating a Project Charter",
        ans:`Use a template.
        Keep the document short and simple: Use visual elements, such as graphs, charts, and bulleted lists.
        Use clear, concise language: Make the most of the limited page space available to you.
        Collaborate with team members to create a realistic timeline and risk assessment: Review the charter drafts with your project sponsor to ensure alignment before distributing the finished product.` },
    { que:"Project Charter Template Sections - General Project Information",
        ans:`1. Project Name: give the project a short title. This name will appear on subsequent reports and dashboards.
        2. Description: write a short sentence that expands on the project name to describe the project. This field will also appear on reports and dashboards, so you want something straightforward and understandable.
        3. Version Number and Date: track the revision history according to your company’s requirements.
        4. Project Manager: list just the PM’s name here. You will provide additional information later in the charter.
        5. Project Sponsor: list just the sponsor's name here. You will provide additional information later in the charter.` },
    { que:"Project Charter Template Sections - Project Vision",
        ans:`6. Objectives: identify the specific milestones or targets. The objectives should be clear, observable, and measurable; in other words, you should know when they have been met.
        7. Purpose: the business case for the project. List organizational priorities that this project will affect, such as the strategic plans or enterprise-level objectives.
        8. Preliminary Scope: set the project boundaries, and clearly state what is in and out of scope. List only high-level deliverables in this section because you will refine the content in the scope statement.
        9. Success Criteria: identify the measures of success for the project. Usually, you will list the time, cost, scope, and quality constraints.
        10. Expected Benefits: describe how the business will change as a result of completing the project.` },
    { que:"Project Charter Template Sections - Organization Overview",
        ans:`11. Stakeholders: the main stakeholders are the people who can make or break the project. The stakeholder engagement plan will list more people and groups. At this stage, look for those who will have the most influence/experience the most impact from this project.
        12. Customers and End-Users: describe who will either use or purchase the project’s outputs. This section doesn’t include names; use a general description (groups, demographics, divisions). Note if they are internal/external to the organization.
        13. Project Roles: list the PM and project sponsor. List the project board, steering committee, or other governing bodies that will oversee this project. Include high-level responsibilities as well.
        14. Team Members: list each member’s name, role, and responsibilities on the project.
        15. Project Organization: create a project organization chart to show the project team and reporting structure.` },
    { que:"Project Charter Template Sections - Implementation Overview",
        ans:`16. Timeline and Milestones: capture a general timeline and critical milestones. Later, you will create a detailed project schedule to show all activities and milestones.
        17. Resource Requirements: summarize the resources you will need for the project. Identify the labor, equipment, materials, and capital required.
        18. Risks: list the risks that stakeholders and sponsors will be most interested in. The risks listed here will not replace the risk register. Usually, this list will include high-impact and high-probability risks.
        19. Assumptions and Constraints: list the assumptions and constraints that the project will operate within, because it helps you manage expectations with the project sponsor and stakeholders. Assumptions and constraints are similar; they are both factors that will affect the project plan. They differ because constraints are known truths, and assumptions are assumed to be true. 
        20. Budget: share anticipated project costs. The charter doesn’t need to include an entire budget. However, the total figure should be accurate enough that the project sponsor and stakeholders can make an informed decision.` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
]