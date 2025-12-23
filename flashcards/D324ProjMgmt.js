const flashcards = [
    { que:"Project Life Cycle phases",
        ans:`Concept/Delivery, Initiation, Planning, Execution, Closing` },
    { que:"Project Life Cycle - Concept/Delivery Phase",
        ans:`Decide if project is practical. Analyze financial returns, feasibility, implementation options.` },
    { que:"Project Life Cycle - Initiation Phase",
        ans:`outline project, identify parties with vested interest, bring project team together to kick off project work. Draft high-level summary of project goals and timeline.` },
    { que:"Project Life Cycle - Planning Phase",
        ans:`Turn project goals into detailed plan. Team define all activities needed to complete. PM will manage team logistics and ensure adequate resources. Have project work schedule and performance metrics for tracking progress.` },
    { que:"Project Life Cycle - Execution Phase",
        ans:`Team delivers work. Team writes code, configure systems, or build a house. Create supporting materials and coordinate with each other to complete the work. PM monitors progress, measure performance, find and solve problems, maintain records, create reports.` },
    { que:"Project Life Cycle - Closing Phase",
        ans:`project winds down and ensuring everything is ready to close. Confirm project is thorough, update documentation, create financial summary. Request official approval to close project.` },
    { que:"Sections of Business Case",
        ans:`Executive Summary, 
        Problem Statement, 
        Problem Analysis, 
        Options, 
        Project Definition, 
        Financial Overview, 
        Recommendation` },
    { que:"Sections of Business Case - Executive Summary",
        ans:`brief synopsis of the business case. Gives overview of main points including problem statement, solution, expected results.` },
    { que:"Sections of Business Case - Problem Statement",
        ans:`shares details about the problem. Presents thorough analysis of current situation and the business problem, opportunity, or unmet need. Problem statement describes something that will change due to this project.` },
    { que:"Sections of Business Case - Problem Analysis",
        ans:`Provides context about why the project should be a priority. Include historical performance data, environmental assessment, other evidence to support the business case.` },
    { que:"Sections of Business Case - Options",
        ans:`describes several approaches to solving the problem. Compares solutions against each other with pros/cons. Every business case includes two options: do nothing and the project will propose in the recommendation. "Alternatives identification" is a simple step that adds depth to your business case.` },
    { que:"Sections of Business Case - Project Definition",
        ans:`includes additional information about proposed project. Ex: contain details about the project scope, resources needed, milestones, implementation timeline.` },
    { que:"Sections of Business Case - Financial Overview",
        ans:`covers economic impacts of the project. Ex: project cost, where money will come from, what company can gain. This section contains cost-benefit analysis or ROI analysis and risks and assumptions.` },
    { que:"Sections of Business Case - Recommendation",
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
    { que:"Scrum Process",
        ans:`1. The product owner prioritizes work into a product backlog.
        2. The Scrum team selects the top items in the backlog. The top items create a sprint backlog, which will deliver a working product that helps solve the top problem in the product backlog.
        3. The Scrum team and stakeholders review the sprint results and adapt the product and the team’s approach for the next sprint.
        4. The steps repeat as long as the product backlog exists.`},
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
    { que:"Scrum roles - Scrum Team",
        ans:`includes Scrum master, product owner, developers` },
    { que:"Scrum roles - Product Owner",
        ans:`creates, maintains, owns product backlog.` },
    { que:"Scrum roles - Scrum Master",
        ans:`agile team's Scrum coach; help team, product owner, and organization improve applying Scrum.` },
    { que:"Scrum roles - Developers",
        ans:`any job title or function that helps Scrum team produce value.` },
    { que:"Key Scrum Artifacts and Terms",
        ans:`Product backlog, Product goal, Sprint backlog, Sprint goal, Increment.` },
    { que:"Scrum Artifacts - Product Backlog",
        ans:`an ordered list of product changes or enhancements.` },
    { que:"Scrum Artifacts - Product goal",
        ans:`describe product's longer-term target.` },
    { que:"Scrum Artifacts - Sprint backlog",
        ans:`Scrum team's plan for upcoming sprint.` },
    { que:"Scrum Artifacts - Sprint goal",
        ans:`describe objective that team plans to meet to advance toward product goal.` },
    { que:"Scrum Artifacts - Increment",
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
    { que:"Product Ownership - Roles",
        ans:`Product Owner, Project Manager, Product Manager` },
    { que:"Product Owner",
        ans:`Product owners work within agile teams. They identify how to improve a product and are accountable for creating the most valuable product possible. A product owner tends to own a product for the entire product’s life cycle.` },
    { que:"Project Manager",
        ans:`They form a team for a short duration to achieve a specific objective. The PM is responsible for a project only as long as it is active.` },
    { que:"Product Manager",
        ans:`works in any framework. Product managers serve a more strategic function than product owners or PMs. Product managers oversee products and therefore exist for a product’s entire life cycle. They define the product strategy and create roadmaps to show how it will improve and change over time. The PM identifies projects and product changes. They often generate ideas that lead to new work for both PMs and product owners.` },
    { que:"Project Team Roles And Responsibilities",
        ans:`Project Manager, Business Analyst (BA), Architect, Developer/Engineer, Tester/Quality Assurance(QA), Customer/End-user, Vendor, Stakeholder, Subject Matter Expert(SME)` },
    { que:"Project Manager responsibilities",
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
        ans:`in your organization, BAs are a functional group that supports projects. ex: one BA might work on up to four teams at a time, so they would allocate 25% of their time to your project.` },
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
        20. Budget: share anticipated project costs. The charter doesn’t need to include an entire budget. But, the total figure should be accurate enough that the project sponsor and stakeholders can make an informed decision.` },
    { que:"Project Scope Statement",
        ans:`expands on the scope provided in the project charter. Where the project charter includes a summarized scope and major boundaries and deliverables, the scope statement includes detailed descriptions of multiple elements.` },
    { que:"Elements of a Preliminary Scope Statement",
        ans:`Project Scope Description: summarize the project’s intent and purpose. This section summarizes the project vision contents of the project charter.
        Project Acceptance Criteria: list the success criteria of the project. Acceptance criteria are the measurable outcomes of success. 
        Project Deliverables (In Scope): set the project boundaries and identify what the team will deliver. The items listed here are in scope, and your project plan will need to ensure they are completed.
        Project Exclusions (Out of Scope): set the project boundaries, and identify what the team will not deliver. Use this section as a clarification point, and identify the items most likely to cause scope creep throughout the project.
        Assumptions: Treat this as a living document, and update the list as assumptions are proven true or false and new assumptions arise.
        Constraints: list the known constraints and maintain the list throughout the project. Items might move between the assumptions and constraints section.` },
    { que:"Records Management Plan - Types of Records",
        ans:`Project Management Artifacts: the artifacts used to manage the project, such as the project budget and stakeholder engagement plan.
        Project Artifacts: the documents created to move the project along, such as the requirements documentation and blueprints.
        Legal Documents: legally binding agreements.
        Communications: meeting notes, status reports, and written communications generate communications records.` },
    { que:"Records Management Plan - Types of Data",
        ans:`Public data: no restrictions. Ex: information on company website and in public records.
        Internal data: available to anybody within the company. It isn’t necessarily secret, and exposing this data wouldn’t violate laws or trust. Ex: work procedures and project plans.
        Confidential data: Limited access. The information is only available to authorized users either on a role or case-by-case basis. Ex: Personnel records.
        Restricted data: top secret, and access is severely restricted. This is the highest-security information. Criminal charges against unauthorized users or face charges if leak information. Ex: research, top-secret projects, user’s passwords.` },
    { que:"Requirements for Records Management Plan",
        ans:`The plan needs to comply with organizational policy.
        Records need to be organized and easy to find.
        Plan needs to make information accessible
        Information needs to be inaccessible to unauthorized users.
        Plan needs to establish accepted communication channels` },
    { que:"Elements of a Records Management Plan",
        ans:`Creation: define naming conventions, file owners, and who can create files
        Storage and Retrieval: identify where the team will store files and the file organizational structure. Address the process for adding new versions and managing old versions.
        Archival and Disposition: define how to handle duplicate files and outdated files.` },
    { que:"Project Kickoff",
        ans:`Marks end of initiation phase.` },
    { que:"Communication Methods",
        ans:`Synchronous aka "Real-Time": ex: live video conference.
        Asynchronous: delay in information exchange. Ex: email.
        Written: exchanges through handwritten or typed messages. Ex: emails, memos, chat messages.
        Verbal aka "Oral": face-to-face conversations, phone calls, group meetings.
        Nonverbal: body language and appearance.
        Formal: official communication channels. Ex: help desk systems, company memos.
        Informal: unofficial information flows in organization. ex: casual convo between coworkers, group chatter before meeting.` },
    { que:"Meeting Roles",
        ans:`Attendees / Target Audience: include people necessary to make decisions or contribute knowledge
        Facilitator: guides meeting's progress. They know the meeting's purpose and agenda.
        Scribe: records the meeting for meeting minutes, action items, follow-ups.` },
    { que:"Informative Meetings",
        ans:`disseminate information. Ex:
        Demonstrations/Presentations
        Status: "project status meetings" give update on progress.
        Stand-ups: "daily stand-ups" popularized by Scrum as Daily Scrum.` },
    { que:"Decisive Meetings",
        ans:`aka "decision-making meetings". Ex:
        Task Setting: when you need individuals to complete activities outside of a meeting, you can use a task-setting meeting to plan the work.
        Project Steering Committee Meeting: includes the PM and executive stakeholders; your steering committee is the voice of the customer. They are a governing body, and while they don’t manage the project, they have a vested interest in its success. They offer support and guidance throughout the project’s life cycle, such as sharing insights on how to increase adoption.
        Refinement: aka "product/backlog refinement meetings", maintain backlog's relevancy, adjusting task priorities.` },
    { que:"Collaborative Meetings",
        ans:`most interactive meeting. Attendees work together to accomplish common goal, such as creating a plan, solving a problem, or designing a new system.
        Ex: Focus Groups, Workshops, Joint Application Development, Brainstorming` },
    { que:"Collaborative Meetings - Focus Groups",
        ans:`use to gather requirements for customers. Moderators use diff techniques to facilitate focus groups:
        Single-Moderator: uses one moderator, who facilitates the session and monitors interactions. May recruit helper to take notes / record the session.
        Dual-Moderator: two moderators. One is the lead facilitator and keeps the interactions flowing. The other serves as a quality check; tracking the topics and ensure the group covers all the content.
        Dueling-Moderator: two moderators. Both moderators are actively engaged in facilitation and take opposite views. This technique generally draws out the most viewpoints.
        Two-Way: allows one group to observe another focus group’s session. This technique gives the focus group more perspective and can create more complex responses.
        Respondent-Moderator:uses participants as moderators, creating dynamic energy with many new ideas. This format can rotate moderators or select a single moderator. Rotating also minimizes a single moderator's impact.` },
    { que:"Collaborative Meetings - Workshops",
        ans:`a working session where a group with shared interests gathers to exchange information and conduct research.
        Define the workshop’s ground rules, which are team agreements regarding how they will operate and treat each other.
        Engage the participants in setting success criteria.
        Encourage questions.
        Use icebreakers.
        Use breakouts for large groups.
        After the workshop, ask for feedback from the participants.` },
    { que:"Collaborative Meetings - Joint Application Development(JAD)",
        ans:`aka "joint application review": are a specific type of workshop.
        JAD describes a product design approach that involves the customer in the design process. Therefore, a JAD workshop is a working session where the team and customer meet and design a product together.` },
    { que:"Collaborative Meetings - Brainstorming",
        ans:`allows a group to generate many ideas rapidly. A group reviews a problem or proposal, then creates as many ideas as possible that could help solve the problem or meet the goal.` },
    { que:"Brainstorming Techniques",
        ans:`Rapid brainstorming: gives team members a short time limit to write down 3–5 ideas. The time limit should be brief enough to create a sense of urgency but long enough for everybody to capture their thoughts.
        Reverse brainstorming: occurs when you look at a problem from different angles. With reverse brainstorming, you would brainstorm ideas for why you could never solve the problem.
        Stop-and-go brainstorming: combats the quantity-over-quality issue. First, the team brainstorms for a short period, perhaps ten minutes, and then they stop brainstorming to review and refine the results. Next, they start brainstorming and repeat the cycle. This method gives the team time to generate ideas.
        Round-robin brainstorming: gives every participant an equal voice. Each person offers one idea on the topic. The group critiques the ideas after everybody contributes once, then the process repeats. This method works well if some attendees dominate the conversation.` },
    { que:"Meeting Artifacts",
        ans:`Agenda
        Timebox 
        Action Items 
        Meeting Minutes 
        Follow-Up` },
    { que:"Meeting Artifacts - Agenda",
        ans:`includes meeting's purpose and schedule of activities/topics. Sets expectations for attendees.` },
    { que:"POWER Start Agenda Technique",
        ans:`Purpose: Describe reason for the meeting.
        Outcomes: List expected results/deliverables that the team will create.
        What’s in It for Me (WIIFM): Explain how the meeting will benefit the attendees.
        Engagement: Describe how attendees can or should participate in the meeting.
        Roles/Responsibilities: Explain what responsibilities various attendees will have. For example, list the facilitator, explain that SMEs will create diagrams, and everybody will brainstorm ideas.` },
    { que:"Meeting Artifacts - Timebox",
        ans:`a fixed maximum amount of time, and you already see timeboxes everywhere. Ex: a wall calendar has one box for each day.` },
    { que:"Meeting Artifacts - Action Items",
        ans:`tasks that somebody will complete after the meeting. The team may identify new or open tasks and missing information during the session. Capture these items on an action item list so that the group can remember to do them later.` },
    { que:"Meeting Artifacts - Meeting Minutes",
        ans:`a written record of key points. 
        Ex: governance meetings require formal meeting minutes, including timestamps, an official roll call, approvals, and new business.` },
    { que:"Meeting Artifacts - Follow-Up",
        ans:`follow-up email is the avenue for sharing the meeting minutes and additional information. A follow-up email closes the meeting by expressing appreciation for the attendees’ time.` },
    { que:"Communication Challenges",
        ans:`Language Barriers.
        Time Zones and Geographical Factors.
        Technological Factors: discomfort with software or lack of access to technology or services.
        Cultural Differences: shared social customs, behavior, habits, beliefs.` },
    { que:"Team Life Cycle",
        ans:`Forming: team members come together for the first time. People tend to be excited/polite in this phase, but minimally productive.
        Storming: Members are figuring out their roles and finding each other’s flaws and differences in the storming stage. Every little problem in the process gets amplified and questioned in this stage.
        Norming: Conflict slows, and productivity starts to increase, in the norming stage.
        Performing: Productivity is highest in performing stage. Team members understand their roles, trust each other, and work together effectively.
        Adjourning: the project work finishes, the team breaks apart, and the members move on to new projects.` },
    { que:"Conflict Management (two types)",
        ans:`substantive: task-based conflict, such as disagreements over goals, projects, or processes.
        emotional: Conflicts around relationships and feelings, such as due to personality, working styles, insecurity, and envy.` },
    { que:"Causes of Conflict",
        ans:`Personality Differences
        Personal Issues
        External Factors
        Competition Over Resources
        Conflicting Priorities
        Conflicting Proposals
        Communication Issues` },
    { que:"Conflict Resolution Strategies",
        ans:`Smoothing
        Forcing
        Compromising
        Collaborating
        Avoiding` },
    { que:"Smoothing",
        ans:`"accommodating" style that redirects attention away from conflict. Ex: minor disagreements such as color theme.` },
    { que:"Forcing",
        ans:`"dominating" style where you manage conflict by deciding what needs to happen to fix the issue. Ex: Emergencies.` },
    { que:"Compromising",
        ans:`both parties meet in the middle. Nobody gets everything they want but all receive something.` },
    { que:"Collaborating",
        ans:`"win-win situation", parties work together that works for everyone. This is most complex approach` },
    { que:"Avoiding",
        ans:`ignores the conflict. Use when issue isn't hurting team or resolving issue won't help team.` },
    { que:"Conflict Escalation (stage 1-3) win-win, facilitation helpful",
        ans:`1. Tension: conflict often not voiced or not recognized as conflict.
        2. Debate: parties begin trying to convince each other of their views.
        3. Actions replace words: there are no more discussions. Actions underline each party's stance. Empathy shrinks.` },
    { que:"Conflict Escalation (stage 4-6) win-loss, mediation helpful",
        ans:`4. Coalitions: parties look for supporters. The original issue becomes unimportant. Now it's about winning.
        5. Loss of face: opponents are disparaged. Exaggerations and lies circulate.
        6. Threats: parties try to gain control with threats.` },
    { que:"Conflict Escalation (stage 7-9) lose-lose, forcible intervention needed",
        ans:`7. Limited destruction: opponents are not seen as human. Parties are fine with losing if their opponent loses more.
        8. Annihilation: opponents and their supporters are destroyed by any means necessary.
        9. Abyss: the parties careen together into disaster. Destruction of self is acceptable as long as the opponent is also completely destroyed.` },
    { que:"Software Installation Options - Overview",
        ans:`Cloud-based: aka "online software/installation", used through internet.
        On-Premise: is installed in cloud or on premise on buyer's hardware, such as server/computer.
        Local Installation: variation of on-premises installation, this is a common model for personal computers. A local installation means the software is installed on the computer or device that will use the software.` },
    { que:"Software Installation Options - User Access",
        ans:`Cloud: benefits the users because it works across various devices via an internet browser, allowing people to use their preferred hardware but still access the tools they need.
        On-Premise: users access the software through an application on their devices. Users may need to connect to their company network to install or use the software if the installation occurs on a network server.
        Local Install: user accesses the software from the single device it is installed on. They can access the software without a network or internet connection.` },
    { que:"Software Installation Options - Pricing Model",
        ans:`Cloud: pay recurring fee for latest version of the product. Cloud offers more scalability because they purchase licenses and don’t have other investments. Cloud is an operational expense (OpEx), which is easier to budget.
        On-Premise: buyer makes initial investment, may include long-term capital expense (CapEx). Buyer purchases licenses and storage hardware, but minimal ongoing costs.
        Local Install: requires purchase of software. Technically requires hardware, but doesn’t accrue hardware expenses, since software is installed on existing equipment.` },
    { que:"Software Installation Options - Overhead",
        ans:`Cloud: lower overhead requirements than on-premise hosting. IT staff will configure the installation and optimize cloud capabilities.
        On-Premise: buyer is responsible for installation, upgrades, storage, and maintenance, which requires IT staff. As a result, on-premises implementations lead to higher staffing costs and delayed updates. But, company has control/flexibility on configurations and upgrades.
        Local Install: require significant overhead. A staff member installs every instance of software on one machine at a time. Updates occur one machine at a time and at the user’s discretion.` },
    { que:"Software Installation Options - Advantages",
        ans:`Cloud: low-maintenance option. The provider manages all updates and security measures, so the buyer enjoys lower IT overhead and up-to-date software.
        On-Premise: allows companies to have total control over the software. This method can have lower long-term costs because all the expenses occur once or infrequently.
        Local Install: provide reliable access to software because you can use the software offline. It can improve security by providing exclusive access to the software and data.` },
    { que:"Software Installation Options - Disadvantages",
        ans:`Cloud: requires an internet connection, and users working with large data sets or on slow networks might experience latency. Low short-term costs but have higher long-term costs.
        On-Premise: requires investment, which the company cannot recoup. For example, you have to buy enough software, and if you buy too much, you can’t return the licenses for a refund. In addition, you need enough server space. In another instance, if your server needs to grow and shrink throughout the year, you must purchase enough space to accommodate the largest storage requirement.
        Local Install: software is only available on that computer. You cannot access the software from another device, and any personalization remains on that device only.` },
    { que:"Project Tools",
        ans:`Ticketing or Case Management: organized way to manage records of customer problems. Also referred to as a "case management" or "help desk" system, this product type combines workflows and user interfaces to create a one-stop experience.
        Project Management Scheduling Tools: software allows you to create comprehensive project schedules easily. Project management software include many features, such as task planning, workflow automation, and resource allocation. ` },
    { que:"Meeting Tools",
        ans:`Calendaring Tools
        Real-Time Surveys and Polls: gather simple info quickly from large group of people.
        Print Media: Physical materials. Ex: posters, brochures, training manual.
        Conferencing Platforms: software used for video conferencing.` },
    { que:"Productivity Tools",
        ans:`Text Editor: minimal functionality and features.
        Word Processing: more functionality than text editor.
        Spreadsheets, works with data in tables.
        Presentation: slide decks, which are visual pages that tell a story.
        Diagramming: create visual representations of processes, systems, objects, structures, ideas, information.` },
    { que:"Commom Diagrams",
        ans:`Gantt Chart
        Flowchart
        Decision Tree
        Data Flow Diagram
        Mind Map
        Quadrant Diagram` },
    { que:"Commom Diagrams - Gantt Chart",
        ans:`bar chart that shows time across the horizontal axis and a list of tasks or activities on the vertical axis. The bars represent the time that each activity will occur. You can also show milestones, deadlines, and dependencies between activities. A Gantt chart creates a visual project schedule.` },
    { que:"Commom Diagrams - Flowchart",
        ans:`"process flow" or "process diagram." This chart visualizes a process, and can compress complicated work instructions into a few charts. Project teams often create multiple flowcharts to show how a project affects processes. Commonly used in process analysis.
        Describes a process that could include many decisions.` },
    { que:"Commom Diagrams - Decision Tree",
        ans:`represents a single decision that could have many outcomes. Use a decision tree when a single decision requires consideration of many factors.` },
    { que:"Commom Diagrams - Data Flow Digram",
        ans:`shows how information flows through a process/system. Works well for audience with technical and nontechnical expertise.` },
    { que:"Commom Diagrams - Mind Map",
        ans:`visualizes categories of informatioin around a single theme.` },
    { que:"Commom Diagrams - Quadrant Diagram",
        ans:`includes many implementations that use the same concept.` },
    { que:"Collaboration Tools",
        ans:`Real-Time, Multi-Authoring Editing Software: allows multiple users to update the same file simultaneously.
        File Sharing Platforms: allows you to post a file in a single location and grant access to one or more users.
        Workflow and E-Signature Platforms: allow to sign documents using internet and electronic devies(smartphone, tablets, laptops).
        Wiki and Knowledge Base: "wiki" is a collaborative product where everybody with knowledge can contribute to its contents. There may be reviewers and fact-checkers.
        "knowledge base" is more curated than a wiki; specific authors contribute to the knowledge base and cover particular topics. As a result, knowledge bases appear more polished and consistent than wikis.
        Whiteboard: creates virtual creative space. Offers blank canvas to accomplish creative tasks.` },
    { que:"Communication Platforms",
        ans:`Email
        Chat or Chat Messaging
        Short Message Service (SMS)
        Face-to-Face Meeting
        Telephone
        Video Call or Videoconference
        Enterprise Social Media: internal communication networks.` },
    { que:"Communication Plan Elements",
        ans:`Communication Goals
        Stakeholders
        Team Members
        Communication Artifacts, Ex: dashboard snapshopts, presentations, links to file, text summaries.
        Communication Channels, Ex: host a meeting to review a presentation and send text summaries via email.
        Communication Recipients: person receiving the communication. Note formality of each artifact.
        Communication Frequency: how often.
        Communication Outcomes: for each artifact, define what you need to happen in that exchange.` },
    { que:"Develop Communication Plan Steps",
        ans:`1. Identify stakeholders
        2. Identify stakeholder communication preferences
        3. Create project communication plan
        4. Share and finalize the plan
        5. Schedule everything
        6. Revise the plan.` },
    { que:"Escalation Plan Sections",
        ans:`Category: describes type of escalation. Ex: may include type of work to be done or a decision needed
        Level: indicates escalation order. Ex: Level 1 is first point of contact, Level 2 is next person in chain of command.
        Escalation Owner: The person responsible for managing the escalation at each level.
        Trigger: conditions that initiate escalation.` },
    { que:"Communication Security",
        ans:`Public Data: no restrictions
        Confidential Data: limited access. Only available to authorized users or case-by-case.
        Critical Data: top secret.` },
    { que:"Communication Integrity",
        ans:`means the message shared matches reality.
        Capturing Information: communication and project progress will happen verbally through formal reviews and casual conversations.
        Centralizing Information: create summarized communication artifact to gather conversations in a single place to keep track of crucial decisions.
        Reflecting Reality: communication artifacts are a summary of project progress, conversations, and decisions. The documents should reflect the actual progress of a project at all times. ` },
    { que:"Solution Designs)",
        ans:`High-Level Design(HLD): created in analysis phase and assess techincal feasibility. Project sponsor, solution architect, and technical staff create HLD. Defines nonfunctional requirements(NFRs).
        Low-Level Design(LLD): a technical decision-making document, created in design phase. Solution architect and SMEs create LLD.` },
    { que:"Functional vs Nonfunctional Requirements",
        ans:`Functional: product features, user interfaces, administration processes, and implementation support or training. Tangible elements that make the system work.
        NFRs: system's attributes, the abstract noun; "-ilities", of software` },
    { que:"NFR Examples 1/3",
        ans:`Usability: refers to how user friendly the solution is.
        Maintainability: how easy it is to change the solution later. Systems or code can be "brittle." Brittle code has low maintainability because it breaks easily.
        Scalability: how easy it is to grow/shrink the solution as needs change.` },
    { que:"NFR Examples 2/3",
        ans:`Availability or reliability: how long the system is running in a given time.
        Extensibility: is how easy it is to add new features without changing what is already in place.
        Security: refers to how the solution and the company’s assets are protected. Authentication methods, data classification, user access, and administration procedures are part of the security requirements.` },
    { que:"NFR Examples 3/3",
        ans:`Portability or compatibility: evaluates how well the solution can work within the existing environment. The solution components need to communicate with each other and other platforms in the company, including data exchanges, operating systems, software, and hardware.
        Compliance: refers to the need for the solution to comply with applicable regulations.` },
    { que:"Solution Design Approach - Environmental Factors",
        ans:`Functional Requirements
        NFRs
        Constraints
        Software Products
        Hardware Requirements` },
    { que:"Sections of a Solution Design Document",
        ans:`Overview
        Audience
        Purpose
        References
        Glossary
        Summary of Existing Functionality
        Functional Requirements Details
        NFR Details
        Assumptions and Prerequisites
        HLD: visuals(process flowcharts and data flow diagrams) to describe systems and integrations.
        LLD
        Impact Analysis
        Out-of-Scope
        Risks and Mitigation
        Appendix: optional` },
    { que:"IT Infrastructure 1/2",
        ans:`Multitiered Architecture: aka "N-tier architecture", modular software design, which divides software into layers, or tiers. Increases modularity to make systems resilient.
        Single tier is typical for test and small production environments.
        Networking and Connectivity: how users and components in a system connect. Includes network configurations, protocols, access rules, hardware, cabling, switches, routers.` },
    { que:"IT Infrastructure 2/2",
        ans:`Storage: a storage plan includes a physical location with temperature/humiditiy control.
        Database: are data storage systems that organize electronic information into structured tables. Analysts and engineers intentionally design databases, making it easier to retrieve and interpret data.
        Data Warehouse: an extensive database used for reporting and analytics. Ex: companies use data warehouses to create dashboards for monitoring company performance. Project teams create data warehouses and use them to analyze problems and solutions.
        Documentation: includes all the diagrams and information about the IT infrastructure. includes network diagrams and extensive server information, such as location, maintenance instructions, and addresses, and scripts, procedures, communications, maintenance, and end-of-life schedules.` },
    { que:"Cloud Models",
        ans:`delivered either locally or over internet. Local delivery is "on-premises computing," and internet delivery is "cloud computing." Cloud service model is desirable because it's easy to set up and maintain. Has higher availability and scalability.` },
    { que:"Cloud Model Types",
        ans:`Infrastructure as a Service(IaaS): basic computing resources (servers, networks, storage).
        Platform as a Service(PaaS): delivers development tools (ex: software environments). PaaS includes infrastructure from IaaS and middleware and tools developers need to create finished product.
        Software as a Service: complete software stack. Contains the infrastructure, environments, and actual product the end-user will use.
        Anything as a Service:(XaaS): general term for any cloud computing service.` },
    { que:"Enterprise Resource Planning(ERP)",
        ans:`refers how companies acquire, manage, and consume resources.` },
    { que:"Financial Systems",
        ans:`subset of ERPs that encompass the financial aspects. They track financial resources, including budgets, spending, and cost estimates. ` },
    { que:"Customer Relationship Management(CRM)",
        ans:`software helps companies track and manage customer interactions. The idea behind CRM is that exchanges with customers aren’t single transactions. Instead, companies should form relationships with customers and would-be customers to build loyalty and increase revenue.` },
    { que:"Electronic Document Management System(EDMS) and Records Management System(RMS)",
        ans:`EDMS is not just an electronic filing cabinet; this software builds in workflows and other features to create streamlined processes.` },
    { que:"Content Management System(CMS)",
        ans:`user-friendly systems that allow more users to complete historically complex activities. A CMS applies a simple user interface and hides all the code and complexity from the end-user.` },
    { que:"Data Classification",
        ans:`Public Data: least sensitive. No restrictions and publicly available. Ex: press releases, content of the company website, job postings.
        Internal data: available to anybody within the company and therefore is minimally sensitive. It isn’t public facing, but exposing this data wouldn’t violate laws or consumer trust.
        Confidential data: sensitive data with limited access. Information only available to authorized users/role or case-by-case basis. 
        Restricted data: most sensitive data. Access severely restricted and granted on need-to-know basis with strict business justification. Company likely to bring criminal charges against unauthorized users or face charges if inadvertently leaks the information.` },
    { que:"Data Handling Considerations: Sensitive Data",
        ans:`Personally identifiable information (PII) includes data that could reveal a person’s identity.
        Personal health information (PHI) is federally protected in USA. HIPAA requires organizations to protect against unauthorized access and disclosure of sensitive health information.` },
    { que:"Data Handling Consideration: Country-, State-, and Province-Specific Privacy Regulations",
        ans:`General Data Protection Regulation (GDPR) is a data privacy and security law in the European Union (EU). It includes 11 chapters of regulations and is widely considered the strictest privacy law. This law protects people located in the EU. 
        The California Privacy Rights Act protects the data of California residents. The Consumer Data Protection Act in Virginia offers data rights and protection to Virginia residents. Both share many similarities with GDPR.` },
    { que:"Data Handling Consideration: IP and Trade Secrets",
        ans:`Intellectual Property(IP): asset type that refers to creations of the mind. In business, it comprises the inventions and creative assets that the company owns. IP includes four asset types: patents, copyrights, trademarks, and trade secrets.
        Trade Secrets: specific type of IP, an asset that gives the company a competitive advantage but hasn’t been registered with a copyright, trademark, or patent. Ex: food recipe, search engine algorithm.` },
    { que:"Digital Security",
        ans:`Resource Access and Permissions: Electronic resources (ex: applications, network folders) are accessible to authorized users. System administrators or service providers create multiple user roles for each application to provide varying access levels.
        Remote Access Restrictions: Employees/contractors need to connect with company network while offsite. Remote access allows employees to work from various locations. Remote access increases flexibility but could expose company network if security measures are not in place. May require VPN usage.
        Multifactor Authentication(MFA): added layer of security that requires user to present to access a remote system or resource. It requires two or more credentials across three categories:
        Something you know: a password, email address, or PIN.
        Something you have: a mobile device, badge, or other token.
        Something you are: a fingerprint, face, or voice.` },
    { que:"Physical/Operational Security",
        ans:`Removable Media: ortable storage devices that can be plugged in and removed while a computer is running, such as USB drives.
        Mobile Device: a portable media type, and many corporate applications are available on mobile devices. Mobile access helps the company because employees can be more productive. Companies require mobile device management (MDM) software, which allows IT functions to monitor and remotely erase compromised mobile devices.
        Facility Access: Networks are easier to break into from inside the building. Company assets are everywhere; computers, documents in people’s offices are available. Companies grant facility access only to authorized users.
        Background Screening/Checks: helps organizations confirm hiring requirements; person’s education, certifications, references. Also verifies person’s identity and may investigate criminal history and previous employment.
        National Security Information and Clearance Requirements: may require handling information related to national defense or foreign relations. In the United States, this is called national security information, and access is highly restricted.
        Four clearance levels: Confidential, Secret, Top Secret, and Sensitive Compartmented Information(SCI).` },
    { que:"Types of Resources",
        ans:`Human Resources: Internal human resources are called "labor," external human resources are services.
        Physical Resources: goods needed in a project, including the equipment, software, office supplies, workspaces, buildings, vehicles, and other assets.
        Capital Resources: money` },
    { que:"Resource Sourcing Methods",
        ans:`Internal Sourcing: affordable but less available than external resources.
        External Sourcing: expensive but more available than internal resources.
        Procurement Plan: if a project needs external resources.` },
    { que:"Resource Allocation Methods",
        ans:`Dedicated Resources: work on one project only and nothing else.
        Shared Resources: work across multiple projects at once.` },
    { que:"Resource Life Cycle",
        ans:`Acquisition Phase: company brings resources into the company in the acquisition phase. Goods are procured, and people are recruited and hired.
        Maintenance (and Monitoring) Phase: Resources are not self-sustaining. After acquired, they need updates, maintenance, evaluation. Equipment needs upkeep, repairs, upgrades, inventory tracking. Software needs security patches, updates, and managing licenses.
        Improvement Phase: improve performance/effectiveness of resources. Equipment is adjusted and reconfigured, software is enhanced. Employees review processes and procedures to make efficient and cost effective
        Retirement Phase: Equipment breaks down/retires to make room for newer model, software goes out of service or invalid.` },
    { que:"Resource Retirement Examples",
        ans:`End of Life Software(EOL): no more updates/maintainence for the software after EOL date. If company uses EOL software, vendor cannot help with troubleshooting, configurations, maintenance.
        Hardware Decommissioning: hardware is ready for decommissioning ex: Failure to turn on, Random shutdowns or stoppages, Declining KPIs (ex: uptime or speed), EOL notice from manufacturer. Increasing maintenance requests (maintenance becomes more expensive than replacement).
        Succession Planning: practice where companies create a plan for who would replace roles in a company if vacated. Succession planning doesn’t identify one person who would replace somebody; it identifies current role’s knowledge, skills, responsibilities. Then documents processes and provides training/development to people who fit the role.` },
    { que:"Needs Assessment Process",
        ans:`1. Understand the project’s requirements: identify project’s objective, success criteria, milestones, deliverables. 
        2. Identify the current resources.
        3. Identify any resource gaps: aka "gap identification".
        4. Address the gaps` },
    { que:"Resource Optimization Techniques",
        ans:`Resource Smoothing: attempts to reduce variation of resource usage from one time period to the next.
        Resource Leveling: reduces variation and allows the project timeline to extend.` },
    { que:"Fishbone Diagram",
        ans:`"Ishikawa diagram" or "cause and effect diagram.
        A simple tool that visualizes how various factors impact a single outcome. 
        A fishbone diagram has a single problem on the far right of the diagram, in the fish’s head. 
        On the left of the diagram are various branches representing categories of potential causes for the problem; these branches look like the fish’s ribs."` },
    { que:"Skills Matrix",
        ans:`a visual tool for assessing the current state of a team's skills. Identify all the skills needed for a project, and record them on the matrix. Then, each person assesses their competency level.` },
    { que:"Histogram",
        ans:`a chart used in statistical analysis. The horizontal axis shows a fixed series of continuous data, and vertical axis shows the varying frequency that each value on the horizontal axis occurs. Each column is sized relative to others based on frequency. ` },
    { que:"Resource Management Process",
        ans:`Estimate the Necessary Resources
        Secure Resources
        Train Team Members
        Allocate Resources
        Monitor and Adjust the Resource Allocations` },
    { que:"Compare Risk, Issues, and Changes",
        ans:`Risk: something that you think will happen that you don’t control.
        Issue: something that is already happening that you don’t control. "Issue Management"documents issues after they arise and recovers from them.
        Change: modification to a project’s scope, budget, or timeline via an adjustment in project activities or resources.` },
    { que:"Risk Management Overview",
        ans:`1. Identify the Risk: list all potential risks.
        2. Analyze the Risk: Determine how likely a risk event will happen; the probability. If risk were to happen, identify how it would impact this project, other projects, and organization. This process is known as "effect-based risk classification".
        3. Treat the Risk: Create risk management strategy for every risk.
        4. Monitor the Risk` },
    { que:"Risk Assessment Meeting",
        ans:`theme of the meeting is “What If”?”` },
    { que:"Common Internal Risks",
        ans:`New Projects: company might approve a new, higher-priority project.
        Digital Transformation: assess the current technology stack and adopt modern products.
        New Management: 
        Reorganization: "organizational restructuring," cause reporting structure and job titles to change.
        Merger and Acquisition(M&A): one company purchases another company, combining into a new entity` },
    { que:"Common External Risks",
        ans:`Infrastructure End-Of-Life (EOL): no longer supported/maintained by the vendor.
        Major Cybersecurity Incident: aka "data breach" or "cyber-attack," when hackers steal data, seize control of systems, or modify data.
        Regulatory Environment Changes: business must adhere to laws, taxes, and rules. Different regulations exist for various industries, locations, business sizes, and incorporation types. Regulation environment changes often, and compliance failures result in adverse impacts. Compliance failures are illegal and subject to legal action. Organizations assigned fines, remediation plans, reinspection, or even shutdown orders. ` },
    { que:"Qualitative Risk Analysis",
        ans:`subjective; based on how people perceive and interpret the risk. Use simple scales, ex: 1–10, low-medium-high.` },
    { que:"Quantitative Risk Analysis",
        ans:`objective; uses verifiable data to assign scores to project risks. Reliable if source data is accurate. However, takes longer to compile and measure.` },
    { que:"Interconnectivity",
        ans:`how risks interact with each other and create ripple effects across a project. Nothing exists in isolation, every risk could potentially influence multiple aspects of a project if it were to occur.` },
    { que:"Detectability",
        ans:`how quickly a risk would be identified if it were to occur. High detectability risks offer clear signals when a risk event occurs or will occur. Low detectability risks will occur with little to no warning.` },
    { que:"Probability and Impact",
        ans:`Probability: measures the chances of a risk occurring. "Probability Scale" uses a numerical or relative scale. The numerical scale runs from 0 to 1, where 1 equals a 100% chance of occurrence.
        Impact: measures how the risk would affect the business if it were to occur. "Impact scale" uses either a numerical or relative scale. You can create a multidimensional impact assessment to measure how the risk impacts multiple measures, such as cost, time, or scope.` },
    { que:"Failure Mode and Effects Analysis(FMEA)",
        ans:`a structured risk analysis tool used frequently in manufacturing operations and product design. It is a detailed analysis of a single process that identifies multiple risks. An FMEA scores each risk’s probability, impact, and detectability to create a prioritized risk list.` },
    { que:"Scenario Analysis",
        ans:`"situational analysis" or "what-if analysis." A process where you generate potential events and evaluate the impact.` },
    { que:"Negative Risk Strategies",
        ans:`Avoid/Avoidance: prevent a risk from ever happening. Risk avoidance detours around anything that could cause the event. Ex: people who are afraid to lose money in the stock market don’t invest.
        Mitigate/Mitigation: reduces the impact or probability of a risk. Includes improving processes and creating backup plans. Most common risk response. Ex: every time you put on your seatbelt, lock your door, or put a case on your cell phone.
        Transer/Transference: assigns the risk to a third party. The risk moves financial responsibility for a risk to somebody else, but the risk might still happen to you. Ex: insurance.
        Accept/Acceptance: “do nothing” approach. You accept the consequences. Risk acceptance can be the most logical and financial sense. You don’t have to prevent every risk.` },
    { que:"Positive Risk Strategies",
        ans:`Exploit/Exploitation: taking steps to guarantee the event will happen. The opposite of risk avoidance, exploitation seeks it out. Ex: you want to test a collaboration software so you contact the PM and ask to join the test group.
        Enhance/Enhancement: increases the positive effects of the risk. The opposite of risk mitigation. Mitigation tries to suppress impact, enhancement maximize the benefits. Ex: you want the company to purchase collaboration software so you watch demos and identify uses and features.
        Share/haring: finding others who would benefit from the risk and sharing it with them. Sharing a risk increases probability that you will benefit as well. Ex: you encourage others to request collaboration software, which increases your likelihood of receiving it.
        Accept/Acceptance: “do nothing” approach. You enjoy it if it happens and receive no benefits if it doesn’t. Acceptance is valid when the risk is of low value, difficult to treat, or generates a low return on investment. Ex: the IT division is considering purchasing a collaboration application; you could wait and see if they implement it.` },
    { que:"Mitigation and Contingency Plans",
        ans:`Mitigation: a strategy for reducing the impact of negative risks and increasing the benefits of positive risks. Includes the actions, owners, timing, and funding necessary to optimize a risk’s impact.
        Contingency: "fallback plan" or "backup plan." Part of the "contingent response strategy" for how to react when risk occurs, created before risk occurs but implemented at occurrence.` },
    { que:"Risk Register",
        ans:`Information gathered during the risk management process:
        Risk ID
        Risk description
        Risk analysis summary
        Impact, priority, or other scoring criteria
        Risk priority or ranking
        Risk owner
        Risk response or treatment` },
    { que:"Risk Report",
        ans:`shares information about a project’s risk management process: 
        Current project risk status
        Total number of known risks
        Trends
        Summary of realized risks
        Financial impacts as a result of realized risks
        Timeline impacts as a result of realized risks
        Scope impacts as a result of realized risks
        Notable emerging risks
        Notable timely and high-impact risks
        Forecasted risk status` },
    { que:"Risk Management Plan",
        ans:`This document defines how the PM will manage risks.` },
    { que:"Risk Management Plan Elements 1/2",
        ans:`Approach: Describe how the process will work and which analysis tools will be used. Include any specific terminology, such as if you are choosing to use “threat” and “opportunity” instead of “negative risk” and “positive risk.”
        Risk Identification Plan: Include a plan for how the team will identify risks. The risk identification plan can include multiple activities and sources, but it should have a clear focus.
        Risk Register: Identify where you will store and manage risks.` },
    { que:"Risk Management Plan Elements 2/3",
        ans:`Risk Breakdown Structure(RBS): Identify which categories you will use to classify the nature of the risks in an RBS.
        Risk Assessment Strategy: Specify how the team will score risks, including criteria and scales. Include definitions for any qualitative scales.
        Risk Response Strategy: Summarize the risk response options used to manage risks.` },
    { que:"Risk Management Plan Elements 3/3",
        ans:`Roles and Responsibilities: Name the roles and responsibilities for the entire risk management process. Include clear responsibilities for the risk owners and the risk manager.
        Funding: List any financial factors, such as funding availability, funding needs, or resource requirements.
        Risk Monitoring: Describe how you and the risk owners will identify and track risks.
        Schedule: Outline the timing of all risk management activities.` },
    { que:"Transition Plan Elements",
        ans:`Roles and responsibilities
        Transition schedule
        Maintenance schedule
        Training: Identify operational training requirements and delivery channels, such as SMEs or computer-based training.
        Activities
        Tools and techniques: List specific tools, techniques, or processes the operations team will need longterm.
        Product documentation
        Asset turnover plan` },
    { que:"Common Project Milestones",
        ans:`Project approval
        Project kickoff
        Solution design approval
        Project schedule approval
        Project phase transition
        Sprint demos
        Release
        Any approval events, such as from the client or stakeholder
        Sprint goals` },
    { que:"Work Breakdown Structure(WBS)",
        ans:`use "decomposition" to break projects into manageable pieces.` },
    { que:"Work Breakdown Structure - Key Terms",
        ans:`Task: the action completed to deliver project work.
        Activity: 
        Work: 
        Project schedule: includes WBS deliverables, timing, and resource needs.
        Deliverables: outcomes of the project.` },
    { que:"Sections of a Work Breakdown Structure",
        ans:`Elements: deliverables in a WBS.
        Work Package: "terminal element". Lowest element in the branch/leg; an element without a child element is a work package.
        Level: layer of the WBS where an element resides.
        Numbering Scheme: "code of accounts", a sequential numbering scheme: each level is separated by a decimal point and restarts at 1. (1.1 1.2, 1.3; 1.3.1; 2.1, 2.2; 2.2.1).
        Leg: group of elements with a shared ancestor. The lowest elements in a leg will roll up to equal everything in the highest level of the leg.
        Branch: one or more elements that do not represent the whole top-level element in the branch.` },
    { que:"Work Breakdown Structure Design Guidelines",
        ans:`Mutually Exclusive, Collectively Exhaustive: organization and problem-solving method. Each element exists without overlapping anything else, which makes it mutually exclusive.
        100% Rule: the WBS includes 100% of the project work. Sounds similar to MECE, but it's different. This rule means the WBS includes exactly 100% of the project work, nothing more, nothing less.
        Plan Around Outcomes: WBS should include outcomes instead of tasks. Tasks are too detailed for a WBS, taking creative freedom away from the team members.` },
    { que:"Work Breakdown Structure Creation Process 1/2",
        ans:`1. Determine Scope: Review project scope on project charter, scope statement, statement of work (SOW), and terms of reference.
        2. Identify the Deliverables: deliverables need to capture the full scope of the project. These will turn into WBS elements.
        3. Identify the Team Members: you identify new deliverables and work packages, add people with the necessary skills to your team.` },
    { que:"Work Breakdown Structure Creation Process 2/2",
        ans:`4. Build Level 2: This level sets the grouping or construction method.
        5. Build Remaining Levels: Use the design guidelines to continue breaking work down into new levels. When you reach a point where you don't need to break it down again, you've reached the work package.
        6. Build WBS Dictionary:
        Work package ID, name, description
        Assigned to
        Date of assignment
        Due date
        Estimated cost` },
    { que:"Product Backlog Versus Project Backlog",
        ans:`Backlog is the body of work that a team will complete. The backlog owner continually refines and modifies the backlog. Project backlogs has a fixed start/end date, but product owner fills product backlog as long as the product is active.` },
    { que:"Work Breakdown Structure Versus Project Backlog",
        ans:`WBS and project backlog share similarities. Neither creates activities; both create deliverables.
        WBS and project schedule will balance scope, time, and cost. Agile embraces flexible scope but fixes time and cost through agile ceremonies. WBS details are stored in a WBS dictionary, and product backlog details are stored in the backlog items.
        A WBS assumes that scope, time, and cost are fixed and works to control them. A project backlog uses agile ceremonies to fix time and cost.` },
    { que:"Agile Project Backlogs",
        ans:`backlogs requires a similar breakdown process as WBS, but backlog breaks down into epics, features, and user stories.
        Epic: a large deliverable often triggered by a business case.
        Feature: smaller than an epic but sizeable; usually lasts 1–3 iterations.
        User Story: the smallest agile deliverable. It is equivalent to a work package in both size and spirit. A user story does not describe how to do something, but it describes the expected outcome of completing the story.` },
    { que:"Dependencies and Sequencing",
        ans:`Dependency describes a relationship between activities. If two activities have a dependent relationship, one activity cannot start or finish until the other activity starts or finishes.
        A single dependency involves two activities in a specific sequence. The activity that starts first is called the predecessor, the activity that starts second is the successor. Predecessor precedes the successor.` },
    { que:"Dependency Sequencing Types",
        ans:`Finish-to-Start(FS): Most common. Activity 1 finishes before Activity 2 starts.
        Start-to-Start(SS): Activity 1 starts, Activity 2 starts after.
        Finish-to-Finish(FF): Activity 1 finishes, Activity 2 finishes after.
        Start-to-Finish(SF): Most rare. Activity 1 starts in order for Activity 2 to finish.` },
    { que:"Dependency Logic Types - Mandatory v Discretionary",
        ans:`Mandatory Dependency: "hard logic dependency", is unavoidable. Ex: you cannot start painting a wall until the wall is built.
        Discretionary Dependency: "soft logic dependency", is a preference. Ex: a strategy for optimizing efficiency, lowering costs, or improving quality.` },
    { que:"Dependency Logic Types - External v Internal",
        ans:`External Dependency: outside the control of the organization. Ex: waiting for the internet provider to upgrade the network.
        Internal Dependency: under your organization's control. Ex: waiting for legal team to review contracts before operation.` },
    { que:"Estimation Techniques - Top-Down v Bottom-Up",
        ans:`Top-Down: creates an estimate of the entire project or key deliverables. Then estimates are cascaded down to the activities. Top-down estimating is less accurate than other techniques. 
        Bottom-Up: creates estimates at the lowest-level activities, work packages, and user stories. Then, the individual estimates are added together to create a project estimate. Bottom-up estimate is time consuming but more accurate than top-down estimate. ` },
    { que:"Estimation Techniques - Analogous v Parametric",
        ans:`Analogous: a top-down approach that uses historical data. For example, suppose you are estimating a marketing campaign project. If your previous similar projects lasted for six weeks, you could reasonably estimate that this project will last six weeks.
        Parametric: augments either bottom-up or top-down estimates with historical data. It uses known variables, such as cost per hour and the number of hours, to create a custom estimate for a project. For instance, suppose you need to create four new advertisements for an ad campaign. Usually, you can complete a single advertisement in two hours. Using a parametric model, you can estimate that it will take eight hours to complete the four campaigns.` },
    { que:"Estimation Techniques - Three-Point Estimating",
        ans:`Used in combination with other estimating techniques. Factors multiple scenarios to create average estimate.
        You collect three values: (O)ptimistic, (P)essimistic, and (M)ost likely.
        Estimate = (O + M + P) / 3` },
    { que:"Estimate Time and Effort",
        ans:`Duration: the time between when a work package starts and when it ends.
        Task Hours: more specific time measurement than duration. 
        Story points are an estimating technique used in agile teams, so it would apply to user stories and not work packages. A story point is an abstract measure representing the relative complexity, risk, and uncertainty of the work needed to deliver a story. 
        Story points values use modified Fibonacci sequence: 1,2,3,5,8,13. ` },
    { que:"Assign Resources",
        ans:`Clarity: 
        Parity: 
        Discovery: 
        Validity: ` },
    { que:"Responsibility Assignment Matrix(RAM)",
        ans:`Responsible (R). The person who will do the work.
        Accountable (A). The person who will be held accountable for the final work.
        Consulted (C). The person who can offer expertise on the work but will not work on it directly.
        Informed (I). The person who needs to know when the work is done.` },
    { que:"Project Schedule",
        ans:`the activities required to complete the project work. ` },
    { que:"Project Network Diagrams",
        ans:`compact, visual model of the project schedule; it is also called a "project schedule network diagram." It shows the project activities, duration, and dependencies on a simple chart using arrows and same-sized rectangles.
        Three diagrams: precedence diagram method (PDM), Program Evaluation and Review Technique (PERT), and critical path method (CPM). ` },
    { que:"Project Network Diagram - Precedence Diagram Method",
        ans:`a popular project diagram style. PDM diagrams use rectangles and arrows to show the dependencies between activities. A PDM is useful for visualizing activities and dependencies.
        Sketch a PDM chart to focus on the activities, sequencing, and dependencies. Then, you can layer in duration and calculations using another diagram technique.` },
    { que:"Project Network Diagram - Program Evaluation and Review Technique(PERT)",
        ans:`represents duration, activities, and dependencies. PERT chart uses the same diagramming style as PDM, with rectangles for activities and arrows for dependencies. PERT estimate is a weighted factor. 
        PERT estimate requires three duration estimates for each activity:
        Optimistic (O) is the duration if things goes right.
        Pessimistic (P) is the duration if things goes wrong.
        Most Likely (M) is the duration that will probably happen.
        PERT = ((O + 4M + P) / 6)` },
    { que:"Project Network Diagram - Critical Path Method(CPM)",
        ans:`incorporates duration, activities, dependencies, PERT estimates, and additional calculations. CPM analyzes a project schedule to identify the dependent activity sequence with the longest duration. This sequence represents the shortest total project duration, known as the critical path. For this reason, CPM is also called "critical path analysis." Critical path analysis is practical when a project has a fixed timeline.` },
    { que:"CPM Analysis Process 1-2/7",
        ans:`1. Diagram the activities and dependencies.
        2. Calculate the PERT estimate duration for each activity. (O + 4M + P) / 6` },
    { que:"CPM Analysis Process 3/7 - Calc ES and EF",
        ans:`3. Complete forward pass to calculate early start(ES) and early finish(EF).
        Early Start (ES): the earliest an activity can start based on predecessor activities.
        ES = take the maximum EF of immediate predecessor.
        Early Finish (EF): the earliest an activity. t = duration of activity.
        EF = ES + t` },
    { que:"CPM Analysis Process 4/7 - Calc LS and LF",
        ans:`4. Complete a backward pass to calculate late start(LS) and late finish(LF).
        Late Start (LS) is the latest an activity can start and still allow the project to finish on time.
        LF = the minimum LS of all successors.
        Late Finish (LF) is the latest an activity can finish and still allow the project to finish on time. t = duration of activity.
        LS = LF - t` },
    { que:"CPM Analysis Process 5/7 - Calc TF",
        ans:`5. Calculate the total float (TF): the amount of time an activity can wait to start without impacting the total project timeline. aka "slack" because it measures the unused time in the schedule.
        TF = LS - ES
        TF = LF - EF` },
    { que:"CPM Analysis Process 6/7 - Calc FF",
        ans:`6. Calculate the free float (FF): the amount of time an activity can wait to start without impacting any other activities. Mathematically, FF is the amount of time an activity can delay without encroaching on the early start of any subsequent activities.
        FF(1) = the minimum ES of all direct successors - EF(1)` },
    { que:"CPM Analysis Process 7/7 - Identify Critical Path",
        ans:`7. Identify the critical path.
        Critical Path = list of all activities where (TF = 0)` },
    { que:"Usefulness of CPM Outputs",
        ans:`1. Project Duration
        2. Critical Path
        3. Total Float (TF)
        4. Free Float (FF): ` },
    { que:"Minimum Viable Product(MVP)",
        ans:`early version of a product. The MVP has enough functionality to demonstrate how a product will operate so that early adopters can use the product and provide feedback. The MVP is functional but not complete. ` },
    { que:"Detailed Scope Statement",
        ans:`"preliminary scope statement" is prepared in the initiation phase with unknowns, fewer details, general ideas.
        By the end of planning phase, team will know project scope in detail, creating Detailed Scope Statement.` },
    { que:"Elements of a Detailed Scope Statement",
        ans:`Project Scope Description
        Project Acceptance Criteria
        Project Deliverables (In Scope)
        Project Exclusions (Out of Scope)
        Assumptions
        Constraints
        ---
        OPTIONAL FIELDS:
        Milestones
        Requirements
        Tasks
        Risks
        Budget
        Estimates and Estimation Methods` },
    { que:"Estimate Costs",
        ans:`Project costs include direct and indirect costs. 
        Direct costs: are created as a result of a project. Ex: specific resource or activity, such as an equipment rental and materials cost. 
        Indirect costs: are overhead costs that support operations, including your project. You cannot trace exactly how much of an indirect cost is incurred by a project. Ex: utilities, building supplies, and management staff.` },
    { que:"Project Reserves",
        ans:`Contingency Reserve: "contingency buffer"; a calculated buffer of time and cost that covers documented risks. These risks are “known unknowns,” which we know about, but don’t know if they will happen. PM can authorize use of contingency reserves.
        Management Reserve: additional sum of time or money that covers “unknown unknowns”; setbacks that we have not forecasted and do not know if they will happen. Senior management has authority over management reserves. PM can access these reserves after escalating issue and obtaining approval.` },
    { que:"Methods for Calculating Reserves",
        ans:`Reserve Analysis: accommodates multiple methods for calculating contingency reserves, each with benefits/drawbacks.
        Percentage of the Project's Cost: a simple calculation that uses a percentage of the project’s cost estimate. This method is for smaller organizations/projects. 3–10% reserve is sufficient.
        Monte Carlo Analysis: popular simulation technique. Uses three-point estimate to create probability distribution. You need the optimistic, most likely, and pessimistic estimates for each project activity.` },
    { que:"Methods for Calculating Reserves - EMV",
        ans:`Expected Monetary Value(EMV): requires each risk’s probability and impact assessment. First, the probability and the financial impact of occurrence are multiplied for each risk. Then, the EMV for each risk is summed to calculate the project’s contingency buffer. EMV is helpful for large, expensive projects with many risks.
        EMV = Probability x Impact
        ex: Risk Activity 1 | Probability: 20% | Impact: -$5000 | EMV: -$1000
            Risk Activity 2 | Probability: 35% | Impact: -$7000 | EMV: -$2450
            Risk Activity 3 | Probability: 45% | Impact: -$8250 | EMV: -$3712.50
            Total EMV = -$7162.50
            Contingency Reserve = $7162.50` },
    { que:"Methods for Calculating Reserves - Decision Tree Analysis",
        ans:`Decision Tree Analysis: in contingency planning; is a quantitative decision-making tool.
        Three parts:
        1. Decision: decision tree asks one question.
        2. Option: have 2+ ways responding to the decision.
        3. Outcome: each options generates 2+ outcomes.
        EMV = Probability × Impact
        ---
        EMV(A1) = 70% × (-10,000) = -$7,000
        EMV(A2) = 30% × (-50,000) = -$15,000
        EMV(A) = -$22,000
        ---
        EMV(B1) = 90% × (-5,000) = -$4,500
        EMV(B2) = 10% × (-100,000) = -$10,000
        EMV(B) = -$14,500
        ---
        Choose lower-cost option, EMV(B)` },
    { que:"Project Baselines",
        ans:`baseline aids the "change control process". Scope tends to change, and the baseline is the source of truth for the original scope. When significant change requests come in, you can reference the baseline to evaluate the impact. It can also justify renegotiating contracts or rebaselining the project.
        Scope baseline: original scope from detailed scope statement. It includes project’s key deliverables.
        Schedule baseline: the total project duration captured from project schedule.
        Cost baseline: the expected costs plus contingency reserves. Represents total project cost within PM’s control.` },
    { que:"How to Create a Baseline",
        ans:`1. Set the scope and key deliverables. ex: Scope Baseline: All new appliances in matching color scheme; New countertops; New flooring; Painted walls; Tiled backsplash.
        2. Create a schedule with a project duration and deadline. ex: Schedule Baseline: 8 weeks
        3. Sum the project cost estimate and contingency reserve to create the cost baseline. ex: Cost Baseline: $25,000
        4. Obtain stakeholder approval.` },
    { que:"Project Budget",
        ans:`a summary of all resource costs. It is the total project cost, including the cost estimate, contingency reserve, and management reserve.` },
    { que:"Budget Considerations",
        ans:`Manage the reserves: Represent the cost estimate, contingency reserve, and management reserve as separate categories.
        Maintain your documentation: Many calculations and decisions go into creating the project estimates. Keep a separate document with the reasoning for each estimate so you can refer to it if an estimate is wrong or needs to change.
        Keep the budget updated: Update budget when changes occur. It’s easy to forget details, and tracking down missing information is not a good use of time. ` },
    { que:"Quality Assurance(QA)",
        ans:`set of processes that touch every part of a project. Ex: software testing, customer surveys, and hiring practices.` },
    { que:"QA Plan",
        ans:`created in planning phase, used throughout project. Describes how the team will ensure the project outputs meet the project’s requirements.` },
    { que:"QA plan answers several questions...",
        ans:`If we do this work, how will we verify that it meets expectations?
        If this risk were to occur, how would we prevent quality defects from escaping?
        This process could create defects. How can we prevent defects?
        If our process isn’t working, how can we recognize and improve it?
        If our customer finds a defect, how will we recover?` },
    { que:"QA Plan Contents",
        ans:`Quality Standards: document any industry or regulatory standards that apply to the project. Ex: health codes.
        Quality Objectives: list measurable quality targets. The project will have quality metrics, ex: on-time delivery and number of defects.
        Roles and Responsibilities: identify the people responsible for managing the program, adhering to standards, and evaluating products against the standards.
        Deliverables and Approach: identify deliverables and processes subject to QA activities. Then, list QC activities, standards, and when they will occur for each deliverable or process.` },
    { que:"QA Plan - Verification Activities",
        ans:`Verification: objectively confirms that the deliverable meets quality standards. Verification compares the project against documented standards.
        Retrospectives: "lessons learned"; when meeting to reflect on their performance and improve.
        Inspection: Quality Control(QC) tool, where you examine finished product and compare to expected results by running user acceptance tests(UATs).
        Audits: type of inspection process that reviews processes to identify issues.` },
    { que:"Types of Software Tests - Automated v Manual Testing",
        ans:` Automated testing: runs faster than a person could, which allows a developer to run more tests more frequently. In addition, it enables practices such as continuous integration, and it increases the confidence in the software’s quality. But, need people to build and maintain automated tests.
        Manual testing: time consuming and expensive. Requires people every step of the test. Creates capacity limit on development; continuous integration(CI) will not succeed in manual testing. People tend to skip manual tests or resist building the feature. But manual testing is adaptive as people detect software appearance and work around it.` },
    { que:"Types of Software Tests - Unit Testing",
        ans:`Unit testing: measures smallest piece of functionality in software. Each component/unit is tested. Works well with modular coding where developers reuse code. Unit tests run as the developer writes code and are highly valuable. ` },
    { que:"Types of Software Tests - Regression Testing",
        ans:`Regression testing: when making changes to existing code, run regression tests to ensure that the new code does not break existing functionality. Regression testing doesn't introduce new tests, but reruns existing tests.` },
    { que:"Types of Software Tests - Smoke Testing",
        ans:`runs a high-level system test. Runs after the code is compiled into a build and before deployment and release. These tests confirm that the main features are working before detailed tests run. This test method detects a flawed build before the team invests time in testing smaller components. Ex: a shopping website needs to show items, add items to a cart, and check out items. A smoke test will ensure that these features work because, if they don’t, no other tests will matter, since the site can’t perform its core functions.` },
    { que:"Types of Software Tests - User Acceptance Testing(UAT)",
        ans:`evaluates the final outputs against specifications. If this test passes, you can safely assume a user will accept the product. In addition, UAT tests whether a product would satisfy the business requirements if it were released to production.` },
    { que:"Types of Software Tests - Performance Testing",
        ans:`measure the system’s performance. They evaluate if the system is stable and fast enough to work under various workloads. Performance tests usually measure expected conditions. ex: measuring how a website responds to 0–5,000 simultaneous users.` },
    { que:"Types of Software Tests - Stress Testing",
        ans:`a specific type of performance testing. Most performance tests measure performance under expected conditions. but stress testing evaluates how a system performs when it reaches or exceeds the expected workload. ex: if website expects 5,000 simultaneous users, a stress test will measure 4,500–25,000 simultaneous users.` },
    { que:"Create a Test Plan",
        ans:`test plan is a reference that describes how a project will verify the project’s outputs meet expectations. It includes test strategy, specific schedule of events, tests to run, and necessary resources. Includes manual and automated tests. Created in the project planning phase, and quality testers reference and update it throughout the project. It describes expected standards and how the tests will measure against them.
        Both quality tester and developer ensure "verified deliverables" meet project requirements.` },
    { que:"Test Plan Elements",
        ans:`Scope: scope is a compressed form of the project scope.
        Types: test types section identifies how the team will test the deliverables. It lists the types of tests used in the project, what they will test for, and when they are used.
        Schedule: schedule includes when testing will start and end. It includes dates for each test category.
        Resources: includes the systems and people needed to complete testing and all activities in the test plan. 
        Envinronment: "test environment" mimics the production environment, but failures in the test environment do not impact the product’s end-users. Outline the necessary configurations, hardware, and software needed for a test environment. 
        Tools: list all the software requirements under tools and a brief reason for use for reporting test results, recording defects, and sharing progress.
        Defect Management: include clear expectations for defect handling. ex: specify which system to use for recording, when to record a defect, and which information to capture. 
        Risk Management: summarizes those risks relevant to the testing process
        Exit Parameters: explains what the end of testing looks like. ` },
    { que:"Validation Activities",
        ans:`Service Level Agreement(SLA): is as close to a guarantee as you get in service. 
        It's a service contract that specifies performance expectations and consequences of failing to meet expectations. 
        Ex: cloud provider will offer SLA of 99.999% uptime and credit subscription costs for downtime exceeding 0.001%.` },
    { que:"Project Management Plan",
        ans:`a set of documents that describes what the team will deliver and how they will deliver them. It also reviews how the PM will manage the project and how the team will measure success. This lesson and several previous lessons discussed how to build each of these tools.` },
    { que:"Project Management Plan Contents",
        ans:`Detailed Scope Statement
        WBS or Backlog
        Resource Plan
        Project Schedule
        Quality Management Plan
        Risk Management Plan
        Communication Plan
        Stakeholder Management Plan
        Project Baselines
        Project Budget
        Project Plan Approval` },
    { que:"Procurement management ",
        ans:`starts as early as discovery phase and lasts until the last contract is closed` },
    { que:"Procurement Process Steps",
        ans:`Determine needs: PM defines the procurement requirements needed to meet the project’s objective.
        Submit a purchase requisition: PM formally requests help from the procurement team to acquire resources.
        Complete the solicitation process:procurement specialist prepares a request to solicit quotes, bids, or proposals from vendors. 
        Evaluate and select vendors: evaluation committee will review and score the vendor proposals on predetermined, objective criteria.
        Manage orders: procurement specialist or PM generates purchase orders (POs), and the vendor begins work in response. 
        Manage records and payments: accounting, purchasing, and procurement teams review order records.` },
    { que:"Common Procurement Artifacts",
        ans:`Purchase Order (PO): a customer request for specific goods or services.
        Master Service Agreement(MSA): an overarching document that defines the terms of a vendor–buyer relationship. It establishes general logistics that don’t apply to a specific project, such as payment terms, termination provisions, and ethical statements.
        Contracts v POs often get confused: Procurement contract establishes agreement to purchase something at some point. Contract is fulfilled through one or more POs.` },
    { que:"Resource Procurement Methods",
        ans:`Build: Using your resources to create it. It includes designing, building, and implementing a product, including cost of securing resources.
        Buy: You purchase from a third party, and ownership transfers from the seller to you.
        Lease: a fixed-term contract where you pay initial fee and regular recurring payments for duration of the lease. A lease includes additional costs for interest, fees, maintenance, and repairs.
        Subscription / Pay-as-You-Go: You can rent/subscribe to a resource, "pay-as-you-go" purchasing model. subscription is an all-inclusive rental model where you pay a flat fee for access to a resource for a set duration. A subscription includes all fees, maintenance, and repairs. Subscriptions have the lowest initial costs of all the options mentioned here. However, subscription costs accrue for as long as you use the product. Subscription providers manage all updates for you. This model works well when you want a low-maintenance option with the latest models or for short-term or low-volume use, pilot activities, or a small budget.` },
    { que:"Exploratory Procurement Documents",
        ans:`Request for Information(RFI): used to learn more about solutions before initiating the solicitation process. Vendor responds to an RFI with more information about their products or services.
        Request for Proposal(RFP): used to solicit multiple vendor proposals for a solution.
        Request for Bid(RFB): solicits proposals like RFP, but vendors compete on price. Since you cannot factor in other criterias, this works best for straightforward work and commodity items (ex: office supplies). 
        Request for Quote: an exclusively financial proposal. A formal document requesting pricing information for detailed, specific requirements, such as supplies or labor. Vendors respond with pricing models that describe delivering the project scope and coss.` },
    { que:"Procurement Statement of Work(SOW)",
        ans:`a formal document that outlines the work a vendor needs to deliver. It’s included with an RFP to provide additional information about the project. It clarifies the scope, sets expectations, and outlines technical requirements.` },
    { que:"3 types of Statement of Work(SOW)",
        ans:`Design: is process prescriptive. Outlines how to deliver the work, and it sets resource and performance requirements at each stage. 
        Functional: is outcome focused. lists the requirements of a finished product only. How to deliver the work is left to the vendor, which can propose alternative approaches or scope adjustments.
        Performance: describes the expected outcomes along with minimum performance standards. It is more fixed than a functional SOW, but it is still outcome focused and flexible for vendors.` },
    { que:"Terms of Reference(TOR)",
        ans:`a specific version of an SOW. Similar to SOW, but focuses on deliverables, and TOR focuses on relationships. SOW involves working together, TOR involves delivering work. TOR resembles a functional SOW, focusing on objectives. TOR is used in consulting/professional services, where value is derived from the relationship, ` },
    { que:"Procurement Market Research",
        ans:`collecting information about the product, service, suppliers, and industry trends. Market research firms specialize in gathering industry information through benchmarking studies; final reports are available to subscibers or the public.` },
    { que:"Competitive Analysis",
        ans:`discussed alongside market research because they look at the same information from different angles. Market research identifies vendors that provide goods/services. Competitive analysis compares vendors against each other. It evaluates how firms compete in the market. Competitive analysis is a practical recurring procurement activity. ` },
    { que:"Predetermined Clients",
        ans:`Developers create products for specific audience, predetermined clients. The predetermined client could be a model user or preferred configuration that optimizes product’s performance. Understanding the product’s predetermined clients can help you compare the potential usefulness of two or more options.` },
    { que:"Capital v Operational Expenses",
        ans:`CapEx: permanent assets, such as data centers, vehicles, and equipment. Organizations rarely purchase them, making them noticeable purchases that fall outside the company’s typical operating budget. Capital purchases require intensive capital budgeting because of the high cost. CapEx assets depreciate over multiple years on the accounting register and income statements. Therefore, disposal of such assets must be reported for proper accounting.
        OpEx: organization’s regular expenses; (ex: salaries, taxes, and recurring expenses, (ex: subscriptions, rentals, utilities)). OpEx are already built into the budget and do not depreciate. Acquiring/disposing OpEx assets is more feasible/flexible.` },
    { que:"Review Current Vendor Options - Preexisting Contracts",
        ans:`Your organization has active contracts with many vendors. After defining a project’s requirements, the procurement specialist will review these contracts to determine if any of the vendors are a good fit for your needs. Preexisting contracts are more efficient than bidding and awarding a new contract. But, leveraging a preexisting contract only works when a vendor has the capacity, capability, and interest in delivering the work. An established vendor will still require a TOR or SOW for your project’s requirements. You may need to create a separate document or modify their existing material.` },
    { que:"Review Current Vendor Options - Prequalified Vendors",
        ans:`may have prequalified vendors, which have been initially vetted to confirm that they meet basic requirements to work with the organization. The procurement team keeps their information on file in a qualified vendors list and can invite them to participate in an RFP when appropriate. Prequalified vendors can onboard faster, which streamlines the procurement process. Prequalification is mutually beneficial because it expands professional networks.` },
    { que:"Financial Evaluation Techniques",
        ans:`Vendor selection is an objective due diligence process. The evaluation panel can use several "vendor evaluation techniques" to select a vendor. The evaluation method and "source selection criteria" are finalized before the RFP is sent to create a fair vendor selection process. An evaluation committee can apply multiple evaluation techniques in the same vendor selection process.` },
    { que:"Financial Evaluation Techniques - Best-Value v Lowest-Cost",
        ans:`"lowest-cost" price evaluation technique compares all bids on price exclusively. The vendor that quotes the lowest cost receives the contract. This technique only works when there is no discernible difference between vendors like commoditized product/service.
        Best-value evaluation considers cost and additional performance factors in selecting the vendor that provides the most value at a reasonable cost. A flexible vendor evaluation model that allows evaluators to consider qualifications, vendor reputation, and approach. Best-value procurement can reduce risk in a project because it allows you to select highly qualified vendors. It is a preferred method when you expecting variations between vendors. Ex: if vendors sell unique solutions or have different ways of designing or implementing solutions, a complex model like best-value procurement is preferable to the lowest cost.` },
    { que:"Financial Evaluation Techniques - Cost-Benefit Analysis(CBA)",
        ans:`a project analysis technique. It compares the cost of a project against expected financial benefits it delivers. The project is a good investment if the benefit exceeds the cost total, according to the CBA.
        CBA needs to include comprehensive data. Costs also include direct costs; ex: consulting fees, vendor expenses, and capital costs. Includes indirect costs, ex: training, costs incurred downstream/upstream, and changes in overhead costs. The monetary value of benefits needs to be thorough as well. ` },
    { que:"Practical Evaluation Techniques - Physical v Financial Capacity",
        ans:`capacity evaluation" considers if vendor meets the demands of the contract. Physical capacity refers to the volume of work a vendor can produce for your contract. Volume can refer to units sold, consulting hours, or any other resource unit of measure. Ex: if you need 1,000 units per month, you would select vendors with the capacity to sell you at least 1,000 units per month. If you require a full-time consultant, you would evaluate if the vendor can provide a dedicated consultant.
        "Physical capacity evaluations" considers current and long-term growth projections; you can also include an extended projection that arises from scenario planning. Ex: your project expects 1,000 units per month in regular growth models and 15,000 units in unprecedented models. If you selected a vendor that can accommodate up to 2,000 units, you would have an unresolved capacity risk should the 15,000-unit scenario occur.
        "Financial capacity evaluation" measures the firm’s financial stability, or vendor viability. Vendor relationships are long-term affairs, so you want to work with vendors that intend to exist for a while. A financial evaluation reviews the vendor’s financial statements and credit documentation. You can also review public documentation, such as bankruptcy filings and mergers.` },
    { que:"Vendor Qualifications",
        ans:`an evaluation process that compares the buying organization’s requirements against the vendor’s ability to provide them. A qualified vendor must be able to deliver goods or services to the expected standards, and will need to prove that they meet requirements throughout the contract.` },
    { que:"Fit Evaluation Techniques - Demonstration",
        ans:`vendor demonstration, aka "demo" or "product demo." Is an interactive session where the vendor demonstrates their solution. Demonstrations are particularly popular when procuring software. A demonstration gives you more interactive information about a product, such as its design and ease of use.` },
    { que:"Fit Evaluation Techniques - Technical Approach",
        ans:`technical approach to vendor selection requires evaluators to compare vendor submissions to the project requirements. A technical evaluation is a highly structured event. Technical evaluators score a product strictly against the criteria outlined in the solicitation and nothing else. Vendors offering products above and beyond the requirements do not receive a higher score.
        References: After selecting final vendor and before signing a contract, the procurement specialist conducts reference checks with a vendor’s other clients. First, procurement specialist inquires about the client’s experience with the vendor. Next, procurement analyst asks how they interact, which technology they use, and why they work with the vendor. They also inquire about the vendor’s performance, including their responsiveness, work quality, on-time performance, and cost management. A reference check reveals information from the source you might not receive elsewhere.` },
    { que:"Fixed Price Contracts",
        ans:`"lump sum contract", agrees for fixed scope of work and places most of the contract risk on the vendor. Ex: if materials cost increases, the vendor would not receive more money to cover that. Therefore, their profit margins would shrink. A fixed-price contract is suitable when the contract’s scope will not change.` },
    { que:"3 types of Fixed-Price Contracts",
        ans:`firm fixed-price (FFP),
        fixed-price incentive fee (FPIF),
        fixed-price with economic price adjustment (FP-EPA).` },
    { que:"Firm Fixed-Price(FFP) Contract",
        ans:`sets an expectation with the vendor to deliver on time. In exchange, they will receive the total price offered in the contract. Buyers prefer this contract because it controls costs better than any other fixed-price model. Vendors assume the most risk with this contract type, but it works well if they can deliver work at a lower cost than the buyer estimated.` },
    { que:"Fixed-Price Incentive Fee(FPIF) Contract",
        ans:`buyer can add incentives to a fixed-price contract. An incentive is an additional payment for meeting targets. Ex: an FPIF could have a deadline of 24 months but offer a 5% bonus for completing in 20 months or less. You can use an incentive for any measurable target, such as time, quality, or system uptime. ` },
    { que:"Fixed-Price with Economic Price Adjustment(FP-EPA) Contract",
        ans:`a fixed-price contract that factors inflation. Each year, the fixed price increases by a certain amount or percentage to cover average inflation costs. Vendors enjoy FP-EPA contracts because it stabilizes their profit margins by providing additional allowances to cover rising resource costs. Buyers benefit from FP-EPA because it still controls costs, and vendors are more likely to sign long-term contracts. FP-EPA is suitable for multi-year contracts where resource costs are expected to increase over time.` },
    { que:"Cost-Plus Contracts",
        ans:`"cost-reimbursable contract", pays for all resource costs needed to complete the work plus a fee to the vendor, representing the vendor’s profit margin. The cost-plus contract places most of the risk on the buyer. The buyer pays for all expenses and will pay for increased material costs. The buyer also pays for the vendor’s poor (or efficient) resource management. A cost-plus contract works well when a project has a flexible scope because the buyer can stop the work when they meet their needs—or run out of funds.` },
    { que:"Four types of Cost-Plus Contracts",
        ans:`cost-plus fixed fee (CPFF), 
        cost-plus incentive fee (CPIF), 
        cost-plus award fee (CPAF), 
        cost-plus percentage of cost (CPPC).` },
    { que:"Cost-Plus Fixed Fee(CPFF) Contract",
        ans:`vendor receives a fixed fee for the work. Fee will not alter if there's change in scope, costs, or performance. CPFF contracts are appealing to vendors when a project is otherwise unattractive.` },
    { que:"Cost-Plus Incentive Fee(CPIF) Contract",
        ans:`eases risk for the vendor. But, the vendor will receive a larger payout for the increased risk. Incentive calculations use clear, objective measures, and the entire formula structure is built into the contract. This format reduces disputes and ambiguity for both parties.` },
    { que:"Cost-Plus Award Fee (CPAF) Contract",
        ans:`Used when project team struggles to define objective performance metrics. It pays costs plus a fee adjusted for performance. A CPAF contract includes performance goals in the contract, but the goals are not easily measurable. Therefore, the organization subjectively assesses the vendor’s performance and adjusts the fee accordingly. If the vendor fails to meet expectations, they will not receive payment.` },
    { que:"CPAF and CPIF contracts sound similar",
        ans:`but have two key differences. First, CPAF uses subjective measures, and CPIF uses an objective formula. Second, the payment awarded in a CPAF is not open to negotiation, but either party can dispute the award in a CPIF contract.
        Buyers prefer a CPAF contract when the vendor is a risk, such as if they are new to the field. Vendors prefer CPAF when they know they can exceed the project’s requirements. A CPAF contract increases the risk of a project going over budget, since the award is unknown until the final payment.` },
    { que:"Cost-Plus Percentage of Cost(CPPC) Contract",
        ans:`a vendor receives a fee equal to a percentage of all costs. This contract pays vendors relative to the amount of work they do or the value of their work. A vendor prefers this type of contract for high-value projects and projects where predicting a final cost is difficult. A CPPC contract contains no total cost, which increases risk for buyers. Buyers prefer this contract when costs are well understood and under control. This contract also benefits buyers when they want to focus on other elements, such as performance or quality. It’s also helpful when the buyer wants the ability to change materials, such as upgrading the flooring material in a remodeling project.` },
    { que:"Hybrid Contracts - Unit Price Contract",
        ans:`"measurement" or "remeasurement" contract. Works well when purchasing definable, same-sized bundles of work. The buyer agrees to pay a fixed price per work unit delivered. The vendors set their unit costs and include all their expenses and profit. This term contract model works well when you need to purchase repetitive work and the quantity or scope is unknown at the start of the project. Unit price generally higher than bulk price, ` },
    { que:"Hybrid Contracts - Time and Materials (T&M) Contract",
        ans:`when a project has a fixed cost and a flexible scope. The buyer pays materials and labor costs up to the maximum price listed in the contract. Labor costs are charged by the hour and use a fixed hourly rate defined in the contract. The vendors set their hourly costs and incorporate expenses and profit. Buyers prefer this when they want to control the maximum cost but would like to retain flexibility during project execution. ` },
    { que:"Contract Terms - Warranty",
        ans:`the vendor’s commitment to resolving defects. It describes how long the vendor expects its product to be defect free and defines how it will remedy the situation if something fails.` },
    { que:"Contract Terms - Warranty Elements",
        ans:`Length: warranty is valid for a specific duration. Ex: one year.
        Scope: warranty covers failures resulting from the production process. Ex: warranty applies if your cell phone’s Wi-Fi antenna suddenly fails. But will not cover if you accidentally run over your phone with your car.
        Remediation: vendors define what they will do; a refund, replacement, or both.
        Limitations and Exclusions: vendor identifies the boundaries of their responsibility. Warranty lists limitations of coverage or excluded situations. A vendor recognize warranties only with proof of purchase or exclude coverage if a product is being used in a way not intended. 
        Commencement: highly relevant for projects. For example, a software implementation warranty in a project procurement could include free remediation for failures. The commencement clause describes when this warranty goes into effect, alleviating disputes.` },
    { que:"Contract Terms - Nondisclosure Agreement (NDA)",
        ans:`you agree that you won’t share specific information with others. An NDA allows you to exchange sensitive or valuable information yet remain relatively confident that it will remain private.` },
    { que:"Certain events trigger the need for an NDA:",
        ans:`New product development: both parites sign if collaborating on new product/design.
        Nonpublic information: if vendor accesses nonpublic information, NDA can protect proprietary and sensitive data.
        Facilities: request an NDA if the vendor will access your facilities, where they can see proprietary processes, equipment, or information.
        Consulting: consultants should sign an NDA for their clients because the consulting process naturally leads to sharing nonpublic information.` },
    { que:"Vendor Management - Rules of Engagement",
        ans:`operating agreements for how the vendor and project team will work together to deliver a project. They include expectations for communication, decision-making, conflict resolution, and roles and responsibilities and guidelines for recognition and celebration. Good rules of engagement create respectful interactions with the team to increase productivity.
        Vendors have contractual obligations, and failing to meet a deliverable could delay their compensation or constitute a "breach of contract"(Failure to meet obligations of a contract resulting in damages paid to the injured party, litigation, or other ramifications). ` },
    { que:"Vendor Management - Monitor Performance",
        ans:`track quantifiable vendor performance, ex: adherence to SLAs. You will track a vendor’s performance over time. Performance trends help you determine the severity of a missed SLA. ex: a single missed SLA from an otherwise high-performing vendor is not as worrisome as a consistent downward trend in performance.` },
    { que:"Vendor Management - Approve Deliverables",
        ans:`approval involves reviewing the work delivered and comparing the quality against the standards. The PM approves deliverables; this is the official signal that the work meets expectations. In addition, approving deliverables indicates that the vendor is eligible to collect payment when the work is tied to contract terms.` },
    { que:"Maintaining Project Momentum",
        ans:`Start Strong: Start the project with a clear vision. Know why the project matters and what it needs to deliver. You should be able to talk about the project in under 30 sec.
        Set the Pace: PM reiterates deadlines and sets expectations for the team. They also set cadences and maintain them. Ex: if you set a monthly meeting cadence, don’t cancel half the meetings, becuase it will create a perception that the cadence is every two months, and work will slow.
        Look Forward: PM’s should look ahead to tomorrow’s work and clear potential roadblocks. Ex: if developers rely on the operations team to release a product, you would keep in contact with the operations team and look for potential issues, such as down environments and staffing issues. Then you can clear the issues, monitor them for improvement, adjust your schedule, or warn your team.
        Motivate the Team: PM needs to know the value of the project better than anyone else, it’s their mission to ensure the team understands its importance. Convey the purpose of every deadline and milestone to ensure that people doing the work have the motivation to meet the goals. Recognize the team’s hard work, and celebrate successes at every retrospective, milestone, or phase gate review.` },
    { que:"Requirements Traceability Matrix(RTM)",
        ans:`Traceability measures how well you can follow the path of something. Ex: cat walking in snow leaves trail prints; high traceability. Cat walking in concrete sidewalk leaves little-no trace; low traceability.
        Traceability is a necessity, incase a drug recall occurs, you can trace back using lot codes.` },
    { que:"Time and Work Tracking Tools - Project Management Applications",
        ans:`designed to track projects and plan the needed activities. It includes the ability to create tasks and track owners, progress, and deadlines. Usually includes a duration but not a time estimate.` },
    { que:"Time and Work Tracking Tools - Time Tracking Applications",
        ans:`a detailed data collection tool and tracks how long it takes to complete tasks. Includes ability to create projects/tasks, similar to "project management application". But, users also track their hours worked and associate them with specific tasks/projects. PMs use time tracking applications to measure project’s completion progress. ` },
    { que:"Time and Work Tracking Tools - Project and Time Tracking Applications",
        ans:`Both applications include beneficial features; ex: report generation, that simplify communication processes. Users also track their activity progress within both tools at varying levels of detail. So you can review progress and create reports without contacting each individual for updates` },
    { que:"Time and Work Tracking Tools - Task Board",
        ans:`a visual task tracking tool (ex: Kanban board). Task board shows each work item as a card, and the cards are organized into lanes by their work states. Activity owners move the cards across the board, from a “to do” state to a “finished” state as they finish work. A task board is also easy to update; users drag and drop cards to update the status. ` },
    { que:"Version Control Tool",
        ans:`are traceability tools for source code. They track/manage code changes by automatically tracking what changed, when, and by whom. They retain previous code versions to revert to a working version when necessary.` },
    { que:"Event Logs - Issue Log",
        ans:`event happening in a project that you do not control. An issue log tracks/manages issues. The log helps you organize and prioritize the list to focus on the highest-priority items because you won’t have enough time and resources to address everything. For each issue; record a description, date found, who found it. Then prioritize the list and capture the plan for addressing it. Finally, record the owner, and track any changes to the issue.` },
    { que:"Event Logs - Issue Log fields",
        ans:`Issue Number
        Description
        Priority
        Impact
        Raised By (the person who reported the issue)
        Owner (the person who will fix the issue)
        Status
        Date Found
        Date Closed
        Comments` },
    { que:"Event Logs - Defect Log",
        ans:`occurs when a product was built assuming it would meet a requirement but fails to do so. A defect is an issue found in software development, used primarily in software projects.` },
    { que:"Event Logs - Defect Log fields",
        ans:`Defect Number
        Description
        Failed Test(s)
        How to Reproduce
        Priority (Urgent, High, Medium, Low)
        Impact (Critical, High, Medium, Low)
        Found By
        Owner (the person who will resolve the defect)
        Status (ex: New, In Progress, Fixed, Won't Fix, Closed, Blocked)
        Date Found
        Date Fixed
        Comments` },
    { que:"Event Logs - Change Log",
        ans:`project change occurs when the project’s activities differ from the project plan. Change happens in every project. That includes both requests, such as a request for a new feature, and unplanned changes, such as a team member leaving. You will not implement every change request you receive. However, you should record and evaluate changes to identify those that would improve a project.` },
    { que:"Event Logs - Change Log fields",
        ans:`Change Number
        Description
        Requested Type
        Priority
        Impact
        Requested By
        Owner
        Status
        Date Requested/Identified
        Date Implemented
        Comments` },
    { que:"Burnup v Burndown Charts",
        ans:`these charts manage scope and time. Both charts are easy to create and read and used internally by teams.
        Burnup and burndown charts plot two values: target and actual work. Each chart is a "line chart" or a "line and column chart". For simplicity, this course will use the line and column chart. The project timeline runs along the horizontal axis. The vertical axis visualizes the amount of work, measured in task hours or story points.` },
    { que:"Burnup Chart",
        ans:`measures the total amount of work "completed" each day. A line represents the target for completed work. It starts at zero on the first day of the project, and the last day has all the work. Initially, it creates a straight line, though the line will vary if you add or remove work later in the project. Like constructing a skyscraper or climbing a mountain, the work builds up.` },
    { que:"Burndown Chart",
        ans:`measures how much work is "remaining" each day. A line represents the target for the day. The first day of the project plots all work remaining, and the last day plots no work remaining. Initially, it creates a straight line, though the line will vary if you add or remove work later in the project. Like a lit candle, the work “burns down” to zero. A burndown chart focuses on the end goal. It works well with a fixed timeline, like in agile teams.` },
    { que:"Velocity v Throughput Charts",
        ans:`Agile teams use velocity and throughput charts to set their work goals in future sprints. These measure a team’s historical performance data. Teams use their historical performance as a predictor of future performance. Any team that tracks work items can use throughput because it measures the number of work items completed. Velocity is only used by teams that measure work with story points.` },
    { que:"Throughput Charts",
        ans:`measures the number of items completed per iteration. Chart contains previous iterations and plots average for the iterations. Teams use it to review historical performance and set goals for the upcoming sprint. Ex: the throughput chart shows that they deliver an average of 13 user stories per sprint. So they should include approximately 13 stories in the next iteration.` },
    { que:"Velocity Charts",
        ans:`measures how many story points are completed per iteration. Chart contains previous iterations and plots average for the iterations. Teams use it to review historical performance and set goals for the upcoming sprint. Ex: a team’s velocity chart shows that they usually deliver an average of 21 story points. So they should plan for no more than 21 story points at the next iteration.` },
    { que:"Team Meetings - Team Status Meeting",
        ans:`"team touchpoint meeting"; the team’s regular recurring meeting. The purpose is to update the project’s overall progress and solve problems. Team use this time to review problems and brainstorm solutions. This is a working meeting than a stakeholder meeting.` },
    { que:"Team Meetings - Team Status Meeting agenda",
        ans:`Open action items
        Status updates
        Task updates
        Open risks and issues
        New risks and issues
        Scope, time, and cost performance
        RACI updates` },
    { que:"Team Meetings - Sprint Planning",
        ans:`Sprint Planning is held regularly with Scrum.
        Held at beginning of each sprint, the team plans their work for upcoming sprint. First; set sprint capacity using historical throughput/velocity. Next; review top priority items in the backlog and break them into smaller work items. Then add items to sprint plan to fill sprint to capacity; these items form the sprint backlog.` },
    { que:"Team Meetings - Sprint Planning agenda",
        ans:`Project goal review.
        Issues, defects, and changes that could affect the project plan.
        Sprint target (velocity or throughput).
        Sprint backlog development.` },
    { que:"Stakeholder Meetings",
        ans:`occurs less frequently than the team meeting. The purpose is to report on the project’s overall progress, gather feedback, and highlight what stakeholders will see next. A stakeholder meeting should summarize everything and leave most of the time for discussion. Be prepared to answer perceptive questions about the project.
        PM facilitate status reports for internal/external stakeholders. Adjust meeting’s agenda and tone for each audience. External meetings are restrained than internal meetings. External audience doesn’t know about the internal workings of your organization, so don't include specific departments or issues. External meeting focuses on externally visible deliverables and milestones. You might discuss development milestones with internal stakeholders, you would only tell stakeholders about the go-live event for software.` },
    { que:"External Stakeholder Meeting agenda",
        ans:`High-level project status.
        Project roadmap or upcoming releases.
        Major milestones and deadlines.
        Next steps.
        Feedback solicitation.` },
    { que:"Internal Stakeholder Meeting agenda",
        ans:`High-level project status.
        Critical roadblocks, risks, and issues.
        Major milestones and deadlines.
        Scope, time, and cost performance.
        Next steps.
        Feedback solicitation.` },
    { que:"Conditional Meetings",
        ans:`meetings that don’t happen on a recurring schedule. These conditional meetings occur on request or requesting support from a specific group.` },
    { que:"Phase Gate Meetings",
        ans:`phase gate review meeting is held at every phase gate. A phase gate meeting occurs when the project moves from one phase to the next. The end of the project is moving from the closing phase to a closed state, so it’s also a phase gate. This meeting aims to prove that the project has met all requirements for the current phase and is ready to move to the next phase. You will review project’s deliverables, lessons learned, and plans for the future. You can also recognize the team and celebrate successes.` },
    { que:"Phase gate meetings end with one of three decisions",
        ans:`1. All phase criteria are met, and the project can move to the next phase (or close in the final stage).
        2. The project hasn’t met all phase criteria and needs to stay in the current phase.
        3. The project is no longer viable and is canceled.` },
    { que:"Conditional Meetings - Change Control Meeting",
        ans:`used to review change requests. The project manager won’t facilitate this meeting if organization has a change control board (CCB). Instead, you new change requests to this meeting and present them to the board. Prepare an analysis of the change, recommendations, and implementation plans if approved. The board will approve/deny the change, and update the change log and project plan accordingly.` },
    { que:"Conditional Meetings - Ad Hoc Reporting",
        ans:`could be a meeting where you share project information with an audience or a request for data. Purpose of ad hoc report depends. Ex: you might be called to highlight the project at an event, or a stakeholder might need an updated report for one of their activities. Analysts often use project data and might contact you for information. If your reports are good, people will notice and want to use the information for their decision-making activities. Ad hoc requests are a compliment to your skills. Best way to prepare for ad hoc requests is to keep your data updated and your reports easy to create. ` },
    { que:"Providing Project Team Performance Feedback - Feedback Process",
        ans:`feedback loop is a process cycle where you inspect and improve a system.
        1. Gather Feedback. Gather work performance information from multiple objective and subjective sources.
        2. Analyze Feedback. Review and summarize the information, and clarify details whenever needed. Develop proposals for expectations.
        3. Act on Feedback. Share the information with the affected parties. Identify what will change, if anything. Set a change plan.
        4. Follow Up. Watch to see how the feedback and changes affect the process. Verify if the change had the intended affect. Then, follow up with the individuals to praise successes and review setbacks.` },
    { que:"Providing Project Team Performance Feedback - Feedback Sources",
        ans:`Performance Metrics: Generate project performance reports, and you can glean helpful feedback. Analyze the data to identify specific successes and failures.
        Stakeholder Comments: Stakeholders will provide feedback throughout the project via meetings, emails, and informal conversations. Summarize and disseminate that information to your team.
        Observation: monitor project’s operations and inevitably see people deviate from a process or improve a system. Look for how each person is contributing to the product, and take note.
        Teammate Feedback: Teammates know how a person is affecting the project. Solicit comments from teammates through formal feedback systems or one-on-one meetings. Observe how teammates interact and look for opportunities to amplify positive feedback. Summarize this information, and share anonymously.
        Lessons Learned: lessons learned or retrospective sessions generate extensive amount of feedback. The entire team is present and receives the feedback together. But, you can monitor the feedback and look for trends that support other feedback you’ve gathered.` },
    { que:"Tips for Delivering Feedback",
        ans:`Make sure people know what to do with the information.
        Be sensitive to potential reactions when delivering feedback.
        Manage the timing for sharing feedback.
        Select an appropriate delivery method.
        Share a balance of positive and negative feedback.
        Be comfortable giving feedback.` },
    { que:"Issue Management Process",
        ans:`Identify the issue: Find and record issues in an issue log.
        Analyze: Determine the issue’s cause and impact and prioritize all issues.
        Resolve: Decide what to do about the issue and do it.
        Monitor: Confirm the issue is resolved and close it.` },
    { que:"Issue Management Process - Identify the Issue",
        ans:`Add every issue to the issue log promptly. A simple issue tracking process makes it more likely that issues will appear in the log before they are forgotten.
        Review the "points of escalation" aka "escalation points" for each issue. Notify increasingly higher levels of authority as a single issue accordingly to escalation points. Ex: when system is down for 15min: escalate to Tech Support Supervisor...30min: ++Communications and Operations Manager...60min: ++Systems Engineering Director and Operations Director.` },
    { que:"Issue Management Process - Analyze the Issue",
        ans:`Conduct root cause analysis to determine why the issue is occurring. Then, review the issue log to look for other symptoms. Ex: cold virus causes many symptoms, you may learn that a single root cause creates multiple issues.
        Root Cause Analysis: technique to determine true cause of an issue.` },
    { que:"Issue Management Process - Analyze the Issue - Scatter Diagram",
        ans:`Scatter Diagram "scatter plot": demonstrates relationships between two variables on the (x,y) axis.
        Scatter Diagram - Positive Correlation: when one variable increases, the other also increases.
        Scatter Diagram - Negative Correlation: when one variable increases, the other decreases.
        Scatter Diagram - No Correlation: when one variable increases, no clear relationship.` },
    { que:"Issue Management Process - Analyze the Issue - Run Chart",
        ans:`Run Chart "time series plot": a time-based line graph that shows time/sequence on horizontal axis and values on vertical axis.` },
    { que:"Issue Management Process - Analyze the Issue - Pareto Chart",
        ans:`Pareto Principle asserts that you can solve most problems by fixing a small portion of the root causes. The 80/20 rule is a simple way to describe the principle: 80% of issues are created by 20% of the causes.` },
    { que:"Issue Management Process - Analyze the Issue - 5 Whys",
        ans:`a simple root cause analysis tool that looks beyond the surface issue to uncover hidden root causes
        Define the Problem: Clearly define the problem.
        1. Why is this problem happening?
        2. Why is that?
        3. Why?
        4. Why?
        5. Why?` },
    { que:"Issue Management Process - Analyze the Issue - Fishbone",
        ans:`useful during issue resolution process. Fishbone or "Ishikawa diagram" looks like the bones of a fish. It is helpful for identifying multiple potential causes for a single problem. The fish’s head contains the problem, and the ribs contain possible related causes. You can use standard categories, such as the 6Ps (policy, process, people, plant, program, and product), or create categories customized to your issue.` },
    { que:"Issue Prioritization Tools - Issue Severity",
        ans:`Issue Severity: reflects how it will impact the end-users of a product. Severity measures extensiveness of issue's effect using simple scale:
        Critical: system is completely inaccessible or nonfunctional. Needs immediate attention from operations, support, and management. Critical issue blocks customers from using application.
        Major: system is working, but one or more features are unavailable. Major issues require update as soon as practical.
        Minor: all key features work, but not as expected. Users can access all features, but may need a "workaround".
        Low: basic functionality is present. Cosmetic defects do not affect functionality but should be resolved for branding, consistency, or improved user experience. Spelling errors and formatting errors are examples of low-severity issues.` },
    { que:"Issue Prioritization Tools - Urgency",
        ans:`Urgency: measures the time sensitivity of an issue; should tell you how soon the issue needs to be addressed. The urgency reflects both effects and expectations. The effects are how soon the issue will affect the business or end-users, reflecting how often users access this service.
        Critical: resolve immediately. critically urgent issue means customers expected it to be fixed already or need it fixed now.
        Major: resolve within hours. Major urgency means the issue should be resolved within hours if you want to avoid impacting the customer/business. 
        Medium: resolve within days. 
        Minor: resolve when convenient. Fix when it is practical. Minor issues can run for weeks or months before affecting the business, if they affect it at all.` }, 
    { que:"Issue Prioritization Tools - Impact on Project",
        ans:`Impact: is a measure of quantity. Measures how much/many are affected by an issue. Consider how the issue will affect the scope, schedule, or budget. Customize the scope of the impact assessment. Ex: your organization may assess project impact based on cost and schedule only if it operates with a flexible scope.
        High: project may not finish. An issue with high impact could put the project at risk. Issues in this category would prevent the team from completing the deliverables. It might finish but is drastically behind schedule or over budget. 
        Medium: project may be delayed. Will have a noticeable yet tolerable effect on the project. 
        Low: project will likely be fine. No noticeable effect on the total project. ` },
    { que:"Issue Prioritization Tools - Scope of Impact on Organization",
        ans:`measures how many people or items are affected by this issue. Uses a simple scale. Often associated with set quantities.
        High: impacts most. An issue with high organizational impact will affect many people or many quantities.
        Medium: impacts many. Might affect several users or segment. Should be resolved soon, but medium impact means most users can work unimpeded. It might affect several batches of goods that can still be quarantined.
        Low: impacts few. An issue with a low impact on the organization would have minimal effect on its operations. ` },
    { que:"Issue Prioritization Tools - Issue Escalation",
        ans:`a process that ensures critical risks and issues receive appropriate follow-up.
        High: plan in place, has been escalated. High rated issue has an escalation plan and has been escalated. Issues in this category have more people working on them and following up on them. 
        Medium: plan in place, not been escalated. Medium rated issue has an escalation plan in place, but hasn’t been activated yet. If unresolved, it would be escalated and then move to a high rating.
        Low: no plan to escalate. Low rated issues do not have an issue escalation plan. These issues may be routine that they are resolved before escalation. ` },
    { que:"Issue Prioritization Tools - Issue Prioritization",
        ans:`use a descriptive scale to assist with the initial evaluation, paired with numerical value (1-9; 9 is highest/critical). 
        Ex: Numerical Scale: 9-3-1
        Impact on Project: High-Medium-Low
        Impact on Organization: High-Medium-Low
        Issue Escalation: High-Medium-Low 
        ---
        Ex: Numerical Scale: 9-7-3-1
        Severity: Critical-Major-Minor-Low
        Urgency: Critical-Major-Medium-Minor ` },
    { que:"Issue Management Process - Resolve the Issue",
        ans:`Review the escalation plan to determine if the issue has been addressed on it already.
        Assign an owner to each issue. The issue owner will determine how to resolve the issue and hold final accountability for the issue. ` },
    { que:"Issue Management Process - Monitor the Issue",
        ans:`The "issue resolution plan" requires multiple monitoring activities:
        Monitoring resolved issues to make sure they stay resolved.
        Monitoring open issues to ensure they aren’t more problematic than expected.
        Monitoring project performance to identify new issues.
        Verify Issue Resolution: Verify and approve each completed resolution. Look for performance data or feedback to confirm the resolution. Another SME or process owner may verify the resolutions as well.
        Remove Workarounds: use a workaround in the issue management process, an alternate approach to completing work that circumvents an inconvenience or problem
        Complete Outcome Documentation: Close the issue in the issue log. Update issue log with notes about how the issue was resolved and its impact on the project. You can then change the issue’s status to a closed/resolved.` },
    { que:"Control Charts",
        ans:`statistical charts that tracks variation in a process. Chart does not consider targets or goals, it shows if the process is performing as usual. A process performing “in control” has acceptable amount of variation. Conversely, a process with unacceptable levels of variation is not performing as expected and is "out of control."
        Chart looks like a run chart with additional data. Also a time-based line graph. It uses all the data you would use in a run chart and more. Time/sequence is on horizontal axis, output is on vertical axis. ` },
    { que:"Control Charts - Control Limits",
        ans:`1. center line (CL) is the mean of the actual values graphed.
        2. upper control limit (UCL), highest expected value for the process, when under control.
        3. lower control limit (LCL), lowest expected value for the process, when under control.` },
    { que:"Control Charts - Variations",
        ans:`Variation is neutral; it simply represents a deviation from past, expected performance. However, you want process performance to change over time. 
        Common Cause Variation - variation expected to see. Control limits are built around common cause variation. You can eliminate it with enough budget and focus, but it’s not the focus for most projects. Attempting to remove common cause variation usually leads to overcorrection. It worsens performance over time unless you are working on a variation-reduction process. If not, you can accept common cause variation as part of the cost of the process.
        Special Cause Variation - variation you want to detect when monitoring a project. Special causes are unique events that changed something about a process and created an unusual outcome. When you find a special cause event, you should analyze the cause of the variation. Then you can decide if you want to preserve or prevent the variation in the future.` },
    { que:"Change Control",
        ans:`change Control process: a formal series of artifacts and procedures that tracks modifications to a project, product, or system. Change control accepts requests, evaluates them, and approves/denies them.
        Change Control process(4 phases):
        Initiate the request.
        Evaluate impacts.
        Decide on an outcome.
        Implement the change.` },
    { que:"Benefits of Change Control",
        ans:`change control process keeps the project aligned to the business needs.
        Change control improves traceability for project requirements.
        Change control simplifies work. It sets a standard process for how stakeholders request project changes.
        Change control eliminates confusion. Changes will happen whether you use change control or not.` },
    { que:"Reasons for Change Requests",
        ans:`Inconsistencies: request changes to create a more stable, consistent plan.
        Aggressive Goals: Projects often start with nearly unattainable goals, known as "stretch goals." At some point in the project, you may realize that a goal is too aggressive. You can change the goals to reflect the most likely project outcomes.
        Team Improvements: improves their systems at every retrospective, phase gate, and lessons learned event. Team may identify new ways to approach the project and submit change requests.
        Strategic Changes: organization’s strategic direction may switch in the middle of your project. Redirect a project to protect it from cancellation.
        Scope: When a project delivers more or less work than originally intended, a scope change can bring it back into alignment.
        Product Change: could drive change in your project. Product and project changes are different yet interrelated events.` },
    { que:"Scope Change v Scope Creep",
        ans:`Scope creep: is unapproved change.
        Scope change: is approved project change.` },
    { que:"Control Change - Initiate the Change Request",
        ans:`Change requests process uses 2 documents: "change request form" and "change log".
        Change request form fields:
        Project Name
        Date Requested
        Description
        Reason for Change
        Priority
        Impact
        Requested By
        Owner
        Deadline(s), If Applicable
        Comments` },
    { que:"Change Control - Evaluate Impacts",
        ans:`PM conducts a thorough impact assessment for every change that moves past the preliminary review. The review completed in the previous step clarified the request and removed unnecessary ones because this evaluation is more complex and time consuming. They analyze the change request to understand how it would affect the project’s resources, budget, scope, and schedule. They also work with the project team to define the potential work packages and resource requirements.` },
    { que:"Change Control - Software Change Approval",
        ans:`Software Change Approval:
        Technical Approval:
        Product Owner Approval:
        Architectural Approval` },
    { que:"Change Control - Implement the Change",
        ans:`Communicate the Change Status: After deciding on the change request’s outcome, PM will inform the team, and the team uses this information to plan how they can incorporate the change.
        Update the Project Plan: PM updates the project plan. The extent of updates will depend on the nature of the change. For example, you may need to update the schedule, deliverable, or budget. You may also need to update the RACI, business case, or stakeholder management plan. The PM role includes evaluating approved changes and resolving all the potential impacts.
        Validate the Change Implementation: The project manager, change requester, and change reviewer will validate the change implementation. 
        Communicate Change Deployment: After validation, PM will notify the stakeholders of the completed change to ensure they are updated on the current project condition. They also include changes in recurring meetings and reports, such as the project status report.` },
    { que:"IT Change Delivery Methods",
        ans:`Maintenance Windows "downtime windows": changes require taking a system offline, meaning end-users cannot access it, and it will not perform services. Companies prefer to limit downtime and maximize uptime. Intentional changes are planned downtime events, but it’s still downtime.
        Releases: Software changes reach the end-users through a release. A software release is the version of a product that is accessible to end-users in a production environment. 
        Customer Notifications: Customers are notified of upcoming software changes via maintenance notifications. Customers need to be aware of any maintenance windows because they may experience disruptions and outages. Advance notice allows users to plan their usage accordingly. ` },
    { que:"ITIL category changes",
        ans:`Standard: recurring, routine changes with set policies and procedures. These are the tasks that don’t require additional approval/communication. Do not need to notify customers of these changes.
        Normal: modifications that do not have a set process and do not happen often. Planned in advance and often require customer notifications to varying degrees. 
        Emergency: unplanned, recovery events. Rarely give advance notice, but can notify customers during/after the event. ` },
    { que:"IT Change Risk Mitigation",
        ans:`Rollback Plans: When new change doesn’t work in production, a "rollback" removes all of the new changes. Rollback plan provides how to roll back the system and whom to contact.
        Release Validation Checks: QA team conducts tests when a release succeeds and new software is in production. These post-production release validations confirm that the production software behaves as expected. The QA team verifies functionality and validate that the product meets the requirements.
        QA Testing:
        1. QA team tests all changes in a test environment, and the test environment should match the production environment exactly. Any inconsistencies between the environments could allow a release to work in one and fail in the other.
        2. Use manual deployments as eployment procedures flow in a specific sequence, and breaking the sequence can cause problems in production.
        3. Test environment uses a smaller set of example data, so it may not test for every scenario possible.
        4. Impacts frequently change, particularly in large systems. For example, thousands of people continually create releases and modify code in an extensive, interconnected system, such as an operating system or search engine.` },
    { que:"IT Environments - Tiered Software Architecture",
        ans:`environment is also called a "stage" or "tier" which creates separate environments to work on a product without affecting the production environment, customer, source code at risk.
        Three basic tier types that cover DevOps cycle:
        1. software is developed in the "development environment"; available locally to a single user. This environment allows the developer to make changes to the code.
        2. beta stage is a "test environment". When satisfied with the changes, the developer will push code from their development environment to the beta environment, which is a copy of the live product that is not connected to live data.
        3. When the release works in beta, it’s ready for "production environment". The production stage is the live environment that end-users can see. When you open a website or app, you are looking at its production environment. ` },
    { que:"Measure Performance - Scope Burndown Chart",
        ans:`` },
    { que:"Measure Performance - Budget Burndown Chart",
        ans:`` },
    { que:"Measure Performance - Project Performance Gap Analysis",
        ans:`` },
    { que:"Measure Performance - Contingency Reserve Utilization",
        ans:`` },
    { que:"Measure Performance - Earned Value Management (EVM)",
        ans:`` },
    { que:"Measure Performance - Calculating the Base EVM Metrics",
        ans:`` },
    { que:"Measure Performance - EVM: Cost Performance Metrics",
        ans:`` },
    { que:"Measure Performance - EVM: Forecasting Performance",
        ans:`` },
    { que:"Rebaseline and Revise the Baseline",
        ans:`
        Rebaseline: 
        Revised Baseline: ` },
    { que:"Update the Schedule and Budget",
        ans:`` },
    { que:"Types of Project Schedules",
        ans:`Executive Schedule: 
        Milestone Schedule: 
        Detailed Schedule: ` },
    { que:"Distribute the Schedule",
        ans:`Set a Schedule Maintenance Cadence: The team will review the detailed schedule as often as they plan work. Ex: agile project team running one-week iterations will review the schedule once weekly. The project sponsor may review the executive schedule monthly/quarterly.` },
    { que:"Distribute the Schedule - Schedule maintenance tasks include the following",
        ans:`Review the critical path
        Review resource utilization, including contingency reserves utilization
        Review the current sprint plan
        Update the project schedule
        Publish updated project schedules
        Review project dashboards
        Prepare project status reports` },
    { que:"Project Dashboards",
        ans:`A "business dashboard" works just like a car dashboard. It contains visual elements that describe specific information about the business. It is a visual summary of comprehensive data from many sources. It displays the few things you need to know to monitor performance or accomplish a goal. You can create dashboards for anything with summarizable data. You might see dashboards for projects, products, programs, departments, or teams.
        Project Dashboards start with Key Performance Indicators (KPIs), which measures how likely a project is to meet its goals.
        KPI ex:
        Number of Users
        Revenue Generated
        Performance to Budget
        Cost per Requirement
        Cost Variance (CV)
        Schedule Variance (SV)` },
    { que:"Project Dashboards - Dashboards v Reports",
        ans:`A dashboard continually updates, reports are periodically updated. Dashboards are interactive, reports are static. A report contains a snapshot of a dashboard plus additional information because reports are larger than dashboards. Dashboards and reports are intended to be clear and brief, but dashboards are aggressively compressed. Good dashboards is a single screen.` },
    { que:"Types of Project Dashboards - Executive Project Dashboard",
        ans:`executive-level dashboard have compressed information. It's reviewed monthly or less so it doesn't need daily information. Exec Dashboards provide quick answers to critical questions.
        Executive dashboard will answer one or more of the following:
        Why does this project matter?: display relevant business value measure, ex: Revenue Generated.
        Is this project on time, on budget, and in scope?: display graphics showing schedule, budget, and scope snapshots.
        Was this project a worthwhile investment?: might display ROI.
        Will this project put the organization at risk?: could display high-impact risks or issues` },
    { que:"Types of Project Dashboards - Team Project Dashboard",
        ans:`team-level dashboard is tactical and more detailed than an executive dashboard, but team still uses it to make decisions. eam’s dashboard centers around the work.
        Team dashboard answers one or more of the following:
        What do we need to do next?: display a list of upcoming tasks.
        Is anybody overutilized or underutilized?: show resource utilization for the week or iteration.
        What are our deadlines?: list activity deadlines and milestones.
        Are we on track to finish on time?: summarize the schedule deficit or surplus.` },
    { que:"Types of Project Dashboards - Project Manager Project Dashboard",
        ans:`PM needs to anticipate what is on the executive dashboard and summarize what the team will use. Their dashboard include expanded measure of the executive dashboard metrics that provides more detail and updates more often. 
        PM dashboard answers one or more of the following:
        Does the project team have everything they need to succeed?: include resource utilization summaries.
        Is this project on time, under budget, and in scope, or are any of these metrics performing worse than usual?: include trending scope, budget, and schedule graphics.
        What impediments are the team likely to face next?: list upcoming dependencies.
        What are the upcoming milestones?: list the project timeline or milestone list.
        What needs my attention?: list issues, change requests, and risks with upcoming deadlines.` },
    { que:"Dashboard Design Principles",
        ans:`dashboards contain mix of graphic tiles, lists, gauges, and information blocks. The appearance and data depend on the purpose and audience.
        Intuitive: person with minimal training should be able to look at a dashboard and interpret the information. Should be as easy to read as a stop sign/traffic signal.
        Actionable: The owner should know when they need to do something within 30 seconds of looking at the dashboard. They might not know what is causing an issue; problems require research.
        Relevance: should contain information the audience needs to know to make good decisions. It's a good practice to start with the audience's needs and build a dashboard around them.
        Timely: dashboard supports effective decision-making by providing relevant, objective data. Information needs to refresh as often as you need to look at it.
        Brevity: should contain as little information as is required. Too much information will distract the user with unnecessary metrics.
        Accuracy: Data quality assesses how likely the data is to reflect reality based on its accuracy, timeliness, and completeness. Use high-quality data in dashboards because you have to trust the data to make decisions with it.
        Sustainability: Consider long-term impacts of a dashboard. A highly manual dashboard isn't likely to be maintained or updated often. It will also have more accuracy issues. Dashboard automatically updates as the source data is updated.` },
    { que:"Organizational Change Management(OCM)",
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
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
    { que:"",
        ans:`` },
]