const flashcards = [
    { que: "What is IT service management, and why is important? (1.1)",
        ans: ``
    },
    { que: "What is value and how is it created? (1.1)",
        ans: ``
    },
    { que: "What is the purpose of ITIL 4? (1.2)",
        ans: `ITIL 4 provides the guidance organizations need to address the new service management challenges and utilize the potential of modern technology.
        It is designed to ensure a flexible, coordinated and integrated system for the effective governance and management of IT-enabled services.`
    },
    { que: "What are the two key components of the ITIL 4 framework? (1.3)",
        ans: `ITIL service value system (SVS) and the four dimensions model.`
    },
    { que: "Explain SVS (1.3)",
        ans: `Service Value System (SVS) describes how all the components and activities of an organization work together to facilitate value creation through IT-enabled services.`
    },
    { que: "Identify the core components of the SVS (1.3)",
        ans: `ITIL service value chain, 
        the ITIL practices, 
        the guiding principles, 
        governance,
        continual improvement.`
    },
    { que: "What is a demand (1.3)",
        ans: ``
    },
    { que: "For holistic approach to service management, what are the four dimensions that need to be considered? (1.3.2)",
        ans: `organizations and people,
        information and technology,
        partners and suppliers,
        value streams and processes.`
    },
    { que: "Define Service Management (2.0)",
        ans: `a set of specialized organizational capabilities for enabling value to customers in the form of services.`
    },
    { que: "What is the purpose of an organization? (2.1)",
        ans: `to create value for stakeholders in the form of products and services.`
    },
    { que: "Define value (2.1)",
        ans: `the PERCEIVED benefits, usefulness, and importance of something.`
    },
    { que: "Who is value subject to? (2.1)",
        ans: `value is subject to the perceptioin of the stakeholders, wheter they be customers or consumers of a service, or part of the service provider organization(s). Value can be subjective.`
    },
    { que: "Explain co-creation of value (2.1.1)",
        ans: ``
    },
    { que: "Define Organization (2.2)",
        ans: `a person or group of people that has its own functions with responsibilities, authorities, and relationships to achieve its objectives`
    },
    { que: "Explain Service Provider (2.2)",
        ans: `When provisioning services, an organization takes on the role of the service provider. The provider can be external to the consumer's organization, or they can be both be part of the same organization`
    },
    { que: "What is Service Consumer? (2.2)",
        ans: `When receiving services, an organization takes on the role of the service consumer`
    },
    { que: "What is Service Consumption? (2.2)",
        ans: `Service consumer is a generic role that is used to simplify the definition and description of the structure of service relationships.
        In practice, there are more specific roles in "service consumption", such as customers, users, and sponsors.
        These roles can be separate or combined`
    },
    { que: "Who is a Sponsor? (2.2)",
        ans: `a person who authorizes budget for service consumption`
    },
    { que: "Who is a Customer? (2.2)",
        ans: `a person who defines the requirements for a service and takes responsiblity for the outcomes of service consumption`
    },
    { que: "Who is a User? (2.2)",
        ans: `a person who uses services`
    },
    { que: "Are customers and users always the same? (2.2)",
        ans: `Not always (p23)`
    },
    { que: "What is performance in terms of service delivery? (2.2)",
        ans: ``
    },
    { que: "Define Stakeholder (2.2)",
        ans: `Examples include individual employees of the provider organization, partners and suppliers, investors and shareholders, government organizations such as regulators, and social groups`
    },
    { que: "Define Service (2.3)",
        ans: `a means of enabliing value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks`
    },
    { que: "Define Product (2.3)",
        ans: `a configuration of an organization's resources designed to offer value for a consumer`
    },
    { que: "How does an organization create value through products and services? (2.3)",
        ans: ``
    },
    { que: "What are some examples of organizational resources? (2.3)",
        ans: ``
    },
    { que: "What is a service offering? (2.3)",
        ans: `a formal description of one or more services, designed to address the needs of a target consumer group.
        A service offering may include goods, access to resources, and service actions`
    },
    { que: "What are some examples of service offerings? (2.3)",
        ans: `goods supplied to a consumer (ex: mobile phone).
        Access to resources granted or licensed to consumer under agreed terms and conditions(mobile network, network storage).
        Service actions performed to address consumers' needs(user support)`
    },
    { que: "What is a service relationship? (2.4)",
        ans: `a cooperation between a service provider and service consumer.
        Service relationships include service provision, service consumption, and service relationship management`
    },
    { que: "Why are service relationships important? (2.4)",
        ans: ``
    },
    { que: "What is service relationship management? (2.4)",
        ans: `Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings`
    },
    { que: "What is service provision? (2.4)",
        ans: `activities performed by an organization to provide services.
        Includes: management of provider's resources, configured to deliver the service.
        Ensure access to resources for users.
        Fulfill agreed service actions.
        Service level management and continual improvement.`
    },
    { que: "What is service consumption? (2.4)",
        ans: `activities performed by an organization to consume services.
        Includes: management of the consumer's resources needed to use the service.
        Service actions performed by users, including utilizaing the provider's resources, and requesting service actions to be fulfilled.
        May include receiving(acquiring) goods`
    },
    { que: "What is the difference betweeen an outcome and an output? (2.5)",
        ans: `Outcome: a result for a stakeholder enabled by one or more outputs.
        Output: a tangible/intangle deliverable of an activity`
    },
    { que: "What part does service relationship management play in risk relationships? (2.5)",
        ans: ``
    },
    { que: "What is cost? (2.5.2)",
        ans: `the amount of money spent on a specific activity or resource`
    },
    { que: "What types of costs are involved in service relationships? (2.5.2)",
        ans: `costs removed from the consumer by the service (a part of the value proposition).
        This may include costs of staff, technology, other resources, which the consumer does not need to provide.
        Costs impose on the consumer by the service (costs of service consumption).`
    },
    { que: "What is risk? (2.5.3)",
        ans: `a possible event that could cause harm or loss, or make it more difficult to achieve objectives.
        Can be defined as uncertainty of outcome, and can be used in the context of measuring the probability of positive outcomes as well as negative outcomes.`
    },
    { que: "What is an event in terms of risk? (2.5.3)",
        ans: ``
    },
    { que: "What are two types of risks that concern service consumers? (2.5.3)",
        ans: `1 Risks removed from a consumer by the service(part of the value proposition). 
        May include failure of the consumer's server hardware or lack of staff availability.
        2 Risks imposed on a consumer by the service (risks of service consumption).
        An example would be a service provider ceasing to trade, or experiencing a security breach.`
    },
    { que: "What is a critical success factor(CSF)? (2.5.3)",
        ans: `a necessary precondition for the achievement of intended results`
    },
    { que: "Define utility (2.5.4)",
        ans: `the functionality offered by a product or service to meet a particular need.
        Utility can be summarized as 'WHAT the service DOES' and used to determine whether a service is 'fit for PURPOSE'.`
    },
    { que: "Define warranty (2.5.4)",
        ans: `assurance that a product or service will meet agreed requirements.
        Warranty can be summarized as 'HOW the service PERFORMS' and used to determine whether a service is 'fit for USE'.`
    },
    { que: "Explain how warranty relates to service levels (2.5.4)",
        ans: `Waranty often relates to service levels aligned with the needs of service consumers.
        Based on format agreement, or may be a marketing message or brand image.`
    },
    { que: "What is outsourcing? (2.5.4)",
        ans: `the process of having external suppliers provide products and services that were previously provided internally`
    },
    { que: "What are the four dimensions of service management? (3.0)",
        ans: `organizations and people,
        information and technology,
        partners and suppliers,
        value streams and processes.`
    },
    { que: "What happens if an organization fails to properly address all four dimensions? (3.0)",
        ans: `failing to address all four dimensions properly may result in services becoming undeliverable, or not meeting expectations of quality or efficiency.
        Ex: failing to consider the value streams and processes dimension holistically can lead to wasteful work, duplication of efforts, or work that conflicts with what is deing done elsewhere in the organization.`
    },
    { que: "Why is the organizations and people dimension important? (3.1)",
        ans: `The complexity of organizations is growing, and it is important to ensure that the way an organization is structured and managed, as well as its roles, responsibilities, and systems of authority and communication, is well defined and supports its overall strategy and operating model`
    },
    { que: "What is the information and technology dimension? What are some considerations for organizations? (3.2)",
        ans: `When applied to the SVS, the information and technology dimension includes the information and knowledge necessary for the management of services, as well as the technologies required. It also incorporates the relationships between different components of the SVS, such as the inputs and outputs of activities and practices.`
    },
    { que: "What is cloud computing? (3.2)",
        ans: `a model for enabling on-demand network access to a shared pool of configurable computing resources that can be rapidly provided with minimal management effort or provider interation`
    },
    { que: "Why is the partners and suppliers dimension important? (3.3)",
        ans: `Partners and suppliers dimension encompasses an organization's relationships with other organizations that are involved in the design, development, deployment, delivery, support, and/or continual improvement of services.
        It also incorporates contracts and other agreements between the organization and its partners or suppliers`
    },
    { que: "Explain factors that may influence an organization's strategy when using suppliers: (3.3 p47)",
        ans: `Strategic focus: organizations may prefer to focus on their core competency and outsource non-core functions to third parties.
        Corporate culture: organizations may have historical preference for one approach over another.
        Resource scarcity: if resource or skillset is in short supply, it may be difficult for the service provider to acquire what's needed without engaging a supplier.
        Cost concerns
        Subject matter expertise: service provider may believe it's less risky to use supplier that's already an expertise versus developing and maintaining SME in house.
        External constraints: Govt regulation or policy, industry codes of conduct, and social, political or legal constraints may impact an organization's supplier strategy.
        Demand patterns: customer activity or demand for services may be seasonal or demonstrate high degrees of variability.`
    },
    { que: "What is contained in the value streams and processes dimension? (3.4)",
        ans: `how parts of the organization work in an integrated and coordinated way to enable value creation through products and services.
        Focuses on what activities the organization undertakes and how they are organized, as well as how the organization ensures that it is enabling value creation for all stakeholders efficiently and effetively.`
    },
    { que: "Define value stream (3.4.1 p49)",
        ans: `a series of steps that an organization uses to create and deliver products and services to a service consumer.
        A value stream is a combination of the organization's value chain activities.`
    },
    { que: "What is a process? (3.4)",
        ans: `a set of interrelated or interacting activities that transform inputs to outputs.
        a process takes one or more defined inputs and turns them into defined outputs.
        Processes define the sequence of actions and their dependencies.`
    },
    { que: "How do external factors impact service management? (3.5)",
        ans: `analyze external factors by using PESTLE (political, economic, social, technological, legal, environmental) framework.
        Ex: Govt and societal attitudes toward environmentally friendly products/services may result in organization investing to meet environmentally friendly expectations.
        Ex: Economic and societal factors to create free tier, premium tier, and sometimes a 'family plan'.
        Data protection laws or regulations (like General Data Protection Regulation(GDPR) from European Union) have changed how companies collect, process, access, store customer data.`
    },
    { que: "What is the Service Value System (SVS)? (4.0)",
        ans: `describes the inputs to this system(opportunity and demand), the elements of this system(organizational governance, service management, continual improvement, organization's capabilities and resources), and the outputs(achievement of organizational objectives and value for the organization, its)`
    },
    { que: "What are the 5 components of the SVS? #1 (4.0)",
        ans: `Guiding principles: Recommendations that can guide an organization in all circumstances, regardless of changes to its goals, strategies, type of work, or management structure.`
    },
    { que: "What are the 5 components of the SVS? #2 (4.0)",
        ans: `Governance: The means by which an organization is directed and controlled.`
    },
    { que: "What are the 5 components of the SVS? #3 (4.0)",
        ans: `Service Value Chain: A set of interconnected activities that an organization performs to deliver a valuable product or service to its consumers and to facilitate value realization.`
    },
    { que: "What are the 5 components of the SVS? #4 (4.0)",
        ans: `Practices: Sets of organizational resources designed for performing work or accomplishing an objective.`
    },
    { que: "What are the 5 components of the SVS? #5 (4.0)",
        ans: `Continual Improvement: A recurring organizational activity performed at all levels to ensure that an organization's performance continually meets stakeholders' expectations.
        ITIL 4 supports continual improvement with the ITIL continual improvement model.`
    },
    { que: "What is a shared vision? (4.0)",
        ans: `a defined aspiration of what the organization would like to become in the future.`
    },
    { que: "What are challenges of a siloed organization? (4.0 p55)",
        ans: `Silos can be resistant to change and can prevent easy access to information and specialized expertise that exists across the organization, which reduce efficiency, and increase both cost and risk.
        Silos can also create barriers to communication and collaboration, which can lead to inefficiencies, errors, and missed opportunities.`
    },
    { que: "Explain opportunity, demand, and value in terms of SVS (4.2)",
        ans: `Opportunity: represents options/possibilities to add value for stakeholders or improve the organization.
        Demand: the need/desire for products and services among internal and external consumers.
        Value: the perceived benefits, usefulness, and importance of something.`
    },
    { que: "What are the differences between internal and external customers? (4.2)",
        ans: `Internal customers: customer who works for the same organization as the service provider. ex: HR department requesting a new IT service.
        External customers: customer who works for an organization other than the service provider. ex: a bank using a third-party IT service provider to manage its IT infrastructure.`
    },
    { que: "Explain demand in terms of input into the SVS (4.2)",
        ans: ``
    },
    { que: "Who drives demand? (4.2)",
        ans: ``
    },
    { que: "What is a guiding principle? (4.3 p58)",
        ans: `a recommendation that guides an organization in all circumstances, regardless of changes to its goals, strategies, type of work, or management structure.
        A guiding principle is universal and enduring.`
    },
    { que: "Focus On Value: Describe the Focus on value guiding principle (4.3)",
        ans: `Everything the organization does needs to map, directly or indirectly, to value for the stakeholders.
        The focus on value principle encompasses many perspectives, including the experience of the customers and users.`
    },
    { que: "Focus On Value: Describe the Agile development, and how it complements the ITIL framework (4.3)",
        ans: ``
    },
    { que: "Focus On Value: Describe DevOps development, and how it complements the ITIL framework (4.3)",
        ans: ``
    },
    { que: "Focus On Value: Provide some examples of value (4.3)",
        ans: ``
    },
    { que: "Focus On Value: Explain customer experience (CX) (4.3.1.3)",
        ans: `defined as the entirety of the interactions a customer has with an organization and its products. This experience can determine how the customer feels about the organization and its products and services.`
    },
    { que: "Focus On Value: Provide example of how an organization might Focus on Value (4.3.1.4 p63)",
        ans: ``
    },
    { que: "Start Where You Are: Explain the Start where you are guiding principle (4.3)",
        ans: `Do not start from scratch and build something new without first considering what is already available to be leveraged.`
    },
    { que: "Start Where You Are: Elaborate on the role of measurement in respect to the Start Where You Are guiding principle (4.3.2 p65)",
        ans: ``
    },
    { que: "Start Where You Are: Provide examples of how this principle might be applied in an organization (4.3)",
        ans: ``
    },
    { que: "Progress Iteratively With Feedback: Explain the Progress Iteratively With Feedback guiding principle (4.3)",
        ans: `Do not attempt to do everything at once. Even huge initiatives must be accomplished iteratively.`
    },
    { que: "Progress Iteratively With Feedback: What is a feedback loop? (4.3.3.1)",
        ans: `technique whereby the outputs of one part of a system are used as inputs to the same part of the system.`
    },
    { que: "Progress Iteratively With Feedback: Why is feedback important to performanace? (4.3.3.)",
        ans: ``
    },
    { que: "Progress Iteratively With Feedback: How do iteration and feeeback work together? Provide examples (4.3.3.2)",
        ans: `allows for:
        greater flexibility,
        faster responses to customer and business needs,
        the ability to discover and respond to failure earlier,
        an overall improvement in quality`
    },
    { que: "Progress Iteratively With Feedback: Provide examples of how this principle might be applied in an organization (4.3)",
        ans: ``
    },
    { que: "Collaborate And Promote Visibility: Explain the Collaborate and Promote Visibility guiding principle (4.3)",
        ans: `Working together across boundaries produces results that have greater buy-in, more relevance to objectives, and better likelihood of long-term success.`
    },
    { que: "Collaborate And Promote Visibility: Provide examples of collaboration across business groups in an organization (4.3)",
        ans: ``
    },
    { que: "Collaborate And Promote Visibility: What is collaboration and visibility important when working on a project? (4.3.4)",
        ans: `When initiatives involve the right poeple in the correct roles, efforts benefit from better buy-in, more relevance (because better information is available for decision-making) and increased likelihood of long-term success.`
    },
    { que: "Collaborate And Promote Visibility: Provide examples of how this principle might be applied in an organization (4.3)",
        ans: ``
    },
    { que: "Think And Work Holistically: Explain the Think and Work Holistically guiding principle (4.3)",
        ans: `No service, or element used to provide a service, stands alone. Outcomes achieved by the service provider and service consumer will suffer unless the organization works on the service as a whole, not just on its parts.`
    },
    { que: "Think And Work Holistically: Provide examples of how this principle might be applied in an organization (4.3)",
        ans: ``
    },
    { que: "Keep It Simple And Practical: Explain the Keep It Simple and Practical guiding principle (4.3)",
        ans: `If a process, service, action, or metric fails to provide value or produce a useful outcome, eliminate it. In a process or procedure, use the minimum number of steps necessary to accomplish the objectives. Always use outcome-based thinking to produce practical solutions that deliver results.`
    },
    { que: "Keep It Simple And Practical: Provide examples of how this principle might be applied in an organization (4.3)",
        ans: ``
    },
    { que: "Optimize And Automate: Explain the Optimize and Automate guiding principle (4.3)",
        ans: `Resources of all types, particularly HR, should be used to their best effect. Eliminate anything that is truly wasteful and use technology to achieve whatever it is capabale of. Human intervention should only happen where it really contributes value.`
    },
    { que: "Optimize And Automate: What is the difference between optimization and automation? (4.3)",
        ans: ``
    },
    { que: "Optimize And Automate: What is continuous deployment? (4.3.7.2 p78)",
        ans: `integrated set of practices and tools used to deploy software changes into the production environment. These software changes have already passed pre-defined automated tests.`
    },
    { que: "Optimize And Automate: What is a baseline measure? (4.3.7.3 p79)",
        ans: `a report or metric that serves as a starting point against which progress or change can be assessed.`
    },
    { que: "Explain the role of governance in the SVS (4.4.2 p81)",
        ans: ``
    },
    { que: "Provide examples of governance in an organization (4.4.1 p80)",
        ans: `may be a board of directors or executive managers who take on separate governance role when they are performing governance activities.`
    },
    { que: "What is Service Value Chain (SVC)? (4.5 p82)",
        ans: ``
    },
    { que: "How does the Service Value Chain relate to the SVS? (4.5)",
        ans: ``
    },
    { que: "PLAN: Key message: (4.5.1)",
        ans: `The purpose of the plan value chain activity is to ensure a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services across the organization.`
    },
    { que: "PLAN: Key inputs: (4.5.1)",
        ans: `Policies, requirements, and constraints provided by the organization's governing body.
        Consolidated demands and opportunities provided by "engage".
        Value chain performance information, improvement status reports, and improvement initiatives from "improve".
        Knowledge and information about new and changed products and services from "design and transition" and "obtain/build".
        Knowledge and information about third-party service components from "engage"`
    },
    { que: "PLAN: Key outputs: (4.5.1)",
        ans: `Strategic, tactical, operational plans.
        Portfolio decisions for "design and transition".
        Architectures and policies for "design and transition".
        Improvement opportunities for "improve".
        A product and service portfolio for "engage".
        Contract and agreement requirements for "engage".`
    },
    { que: "IMPROVE: Key message: (4.5.2)",
        ans: `The purpose of the improve value chain activity is to ensure continual improvement of products, services, and practices across all value chain activities and the four dimensions of service management.`
    },
    { que: "IMPROVE: Key inputs: (4.5.2)",
        ans: `Product and service performance information provided by "deliver and support"
        Stakeholders' feedback provided by "engage".
        Performance information and improvement opportunities provided by all value chain activities.
        Knowlede and information about new and changed products and services from "design and transition", and "obtain/build".
        Knowledge and information about third-party service components from "engage".`
    },
    { que: "IMPROVE: Key outputs: (4.5.2)",
        ans: `Improvement initiatives for all value chain activities.
        Value chain performance information for "plan" and the governing body
        Improvement status reports for all value chain activities
        Contract and agreement requirements for "engage"
        Service performance information for "design and transition".`
    },
    { que: "ENGAGE: Key message: (4.5.3 p88)",
        ans: `Purpose of the engage value chain activity is to provide a good understanding of stakeholder needs, transparency, and continual engagement and good relationships with all stakeholders.`
    },
    { que: "ENGAGE: Key inputs: (4.5.3)",
        ans: ``
    },
    { que: "ENGAGE: Key outputs: (4.5.3)",
        ans: ``
    },
    { que: "DESIGN & TRANSITION: Key message: (4.5.4 p89)",
        ans: `The purpose fo the design and transition value chain activity is to ensure that products and services continually meet stakeholder expectations for quality, costs, and time to market.`
    },
    { que: "DESIGN & TRANSITION: Key inputs: (4.5.4)",
        ans: ``
    },
    { que: "DESIGN & TRANSITION: Key outputs: (4.5.4)",
        ans: ``
    },
    { que: "OBTAIN/BUILD: Key message: (4.5.5 p90)",
        ans: `The purpose of the obtain/build value chain activity is to ensure that service components are available when and where they are needed, and meet agreed specifications.`
    },
    { que: "OBTAIN/BUILD: Key inputs: (4.5.5)",
        ans: ``
    },
    { que: "OBTAIN/BUILD: Key outputs: (4.5.5)",
        ans: ``
    },
    { que: "DELIVER & SUPPORT: Key message: (4.5.6)",
        ans: `The purpose of the deliver and support value chain activity is to ensure that services are delivered and supported according to agreed specifications and stakeholders' expectations.`
    },
    { que: "DELIVER & SUPPORT: Key inputs: (4.5.6)",
        ans: ``
    },
    { que: "DELIVER & SUPPORT: Key outputs: (4.5.6)",
        ans: ``
    },
    { que: "What is the continual improvement model? (4.6.1)",
        ans: `The model is simple/flexible and easy to use in Agile culture as in a more traditional waterfall culture.`
    },
    { que: "Continual improvement: Step 1: What is the vision? Key message (4.6.4.1)",
        ans: `Each improvement initiative should support the organization's goals and objectives.
        The first step of the continual improvement model is to define the vision of the intiative.
        This provides context for all subsequent decisions and links individual actions to the organization's vision for the future`
    },
    { que: "Continual improvement: Step 1: What is the vision? Focus (4.6)",
        ans: `The organization's vision and objectives need to be translated for the specific business unit, department, team, and/or individual, so that the context, objectives, and boundaries for any improvement initiative are understood.`
    },
    { que: "Continual improvement: Step 1: What is the vision? Outcomes (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 2: Where are we now? Key message (4.6.1.3)",
        ans: `The success of an improvement initiative depends on a clear and accurate understanding of the starting point and the impact of the initiative. An improvment can be thought of as a journey from Point A to Point B, and this step clearly defines what Point A looks like. A journey cannot be mapped out if the starting point is not known.`
    },
    { que: "Continual improvement: Step 2: Where are we now? Focus (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 2: Where are we now? Outcomes (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 3: Where do we want to be? Key message (4.6)",
        ans: `Just as the previous step (Step 2) describes Point A on the improvement journey, Step 3 outlines what Point B, the target state for the next step of the journey, should look like. A journey cannot be mapped out if the destination is not clear.`
    },
    { que: "Continual improvement: Step 3: Where do we want to be? Focus (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 3: Where do we want to be? Outcomes (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 4: How do we get there? Key message (4.6.1.4 p97)",
        ans: `The plan for Step 4 can be straightforward and direct route to the completing a single simple improvement, or it may be more involved. The most effective approach to executing the improvement may not be clear, and it will sometimes be necessary to design experiments that will test which options have the most potential.`
    },
    { que: "Continual improvement: Step 4: How do we get there? Focus (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 4: How do we get there? Outcomes (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 5: Take action. Key message (4.6.1.5)",
        ans: `In Step 5 the plan for improvement is acted upon. This could involve a traditional waterfall-style approach, but it could be more appropriate to follow an Agile approach by experimenting, iterating, changing directions, or even going back to previous steps.`
    },
    { que: "Continual improvement: Step 5: Take action. Focus (4.6.1.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 5: Take action. Outcomes (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 6: Did we get there? Key message (4.6.1.6)",
        ans: `Too often, once an improvement plan is set in motion, it is assumed that the expected benefits have been achieved, and that attention can be redirected to the next initiative. In reality, the path to improvement is filled with various obstacles, so access must be validated.`
    },
    { que: "Continual improvement: Step 6: Did we get there? Focus (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 6: Did we get there? Outcomes (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 7: How do we keep the momentum going? Key message (4.6.1.7)",
        ans: `If the improvement has delivered the expected value, the focus of the initiative should shift to marketing these successes and reinforcting any new methods introduced. This is to ensure that the progress made will not be lost and to build support and momentum for the next improvements.`
    },
    { que: "Continual improvement: Step 7: How do we keep the momentum going? Focus (4.6)",
        ans: ``
    },
    { que: "Continual improvement: Step 7: How do we keep the momentum going? Outcomes (4.6)",
        ans: ``
    },
    { que: "Continual Improvement: Key message: (5.1.2 p110)",
        ans: `The purpose of the continual improvement practice is to align the organization's practices and services with changing business needs through the ongoing improvement of products, services, and practices, or any element involved in the management of products and services.`
    },
    { que: "Continual Improvement: What is a SWOT Analysis (5.1.2)",
        ans: `Strengths, weaknesses, opportunities, and threats`
    },
    { que: "Continual Improvement: Who is responsible for continual improvement? (5.1.2)",
        ans: ``
    },
    { que: "Continual Improvement: SVC contirbution: Plan (5.1.2)",
        ans: ``
    },
    { que: "Continual Improvement: SVC contirbution: Engage (5.1.2)",
        ans: ``
    },
    { que: "Continual Improvement: SVC contirbution: Design & Transition (5.1.2)",
        ans: ``
    },
    { que: "Continual Improvement: SVC contirbution: Obtain/Build (5.1.2)",
        ans: ``
    },
    { que: "Continual Improvement: SVC contirbution: Deliver & Support (5.1.2)",
        ans: ``
    },
    { que: "Information Security Management: Key message: (5.1.3)",
        ans: `The purpose of the information security management practice is to protect the information needed by the organization to conduct its business. This includes understanding and managing risks to the confidentiality, integrity, and availability of information, as well as other aspects of information security such as authentication (ensuring someone is who they claim to be) and non-repudiation (ensuring that someone can't deny that they took action).`
    },
    { que: "Information Security Management: SVC: Plan (5.1.3)",
        ans: ``
    },
    { que: "Information Security Management: SVC: Engage (5.1.3)",
        ans: ``
    },
    { que: "Information Security Management: SVC: Design & Transition (5.1.3)",
        ans: ``
    },
    { que: "Information Security Management: SVC: Obtain/Build (5.1.3)",
        ans: ``
    },
    { que: "Information Security Management: SVC: Deliver & Support (5.1.3)",
        ans: ``
    },
    { que: "Relationship Management: Key message: (5.1.9 p130)",
        ans: `The purpose of the relationsihp management practice is to establish and nurture the links between the organization and its stakeholders at strategic and tactical levels. It includes the identification, analysis, monitoring, and continual improvement of relationships with and between stakeholders.`
    },
    { que: "Relationship Management: What does it mean to escalate something? (5.1.9)",
        ans: `the act of sharing awareness or transferring ownership of an issue or work item.`
    },
    { que: "Relationship Management: SVC: Plan (5.1.9)",
        ans: ``
    },
    { que: "Relationship Management: SVC: Engage (5.1.9)",
        ans: ``
    },
    { que: "Relationship Management: SVC: Design & Transition (5.1.9)",
        ans: ``
    },
    { que: "Relationship Management: SVC: Obtain/Build (5.1.9)",
        ans: ``
    },
    { que: "Relationship Management: SVC: Deliver & Support (5.1.9)",
        ans: ``
    },
    { que: "Supplier Management: Key message: (5.1.13)",
        ans: ``
    },
    { que: "Supplier Management: SVC: Plan (5.1.13)",
        ans: ``
    },
    { que: "Supplier Management: SVC: Engage (5.1.13)",
        ans: ``
    },
    { que: "Supplier Management: SVC: Design & Transition (5.1.13)",
        ans: ``
    },
    { que: "Supplier Management: SVC: Obtain/Build (5.1.13)",
        ans: ``
    },
    { que: "Supplier Management: SVC: Deliver & Support (5.1.13)",
        ans: ``
    },
    { que: "Change Enablement: Key message: (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: What is change? (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: What are the three types of changes? (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: Which change could be fulfilled by the Service Desk? (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: What is the change authority? (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: Shoudl there be only 1 change authority in an organization? (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: SVC: Plan (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: SVC: Engage (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: SVC: Design & Transition (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: SVC: Obtain/Build (5.2.4)",
        ans: ``
    },
    { que: "Change Enablement: SVC: Deliver & Support (5.2.4)",
        ans: ``
    },
    { que: "Incident Management: Key message: (5.2.5)",
        ans: ``
    },
    { que: "Incident Management: What is an incident? (5.2.5)",
        ans: ``
    },
    { que: "Incident Management: Is a major incident managed as part of incident management? (5.2.5)",
        ans: ``
    },
    { que: "Incident Management: Explain swarming (5.2.5)",
        ans: ``
    },
    { que: "Incident Management: SVC: Plan (5.2.5)",
        ans: ``
    },
    { que: "Incident Management: SVC: Engage (5.2.5)",
        ans: ``
    },
    { que: "Incident Management: SVC: Design & Transition (5.2.5)",
        ans: ``
    },
    { que: "Incident Management: SVC: Obtain/Build (5.2.5)",
        ans: ``
    },
    { que: "Incident Management: SVC: Deliver & Support (5.2.5)",
        ans: ``
    },
    { que: "IT Asset Management: Key message: (5.2.6)",
        ans: ``
    },
    { que: "IT Asset Management: What is an IT asset? (5.2.6)",
        ans: ``
    },
    { que: "IT Asset Management: How is an IT asset different and similar to a configuration item (CI)? (5.2.6)",
        ans: ``
    },
    { que: "IT Asset Management: What is an asset register? (5.2.6)",
        ans: ``
    },
    { que: "IT Asset Management: SVC: Plan (5.2.6)",
        ans: ``
    },
    { que: "IT Asset Management: SVC: Engage (5.2.6)",
        ans: ``
    },
    { que: "IT Asset Management: SVC: Design & Transition (5.2.6)",
        ans: ``
    },
    { que: "IT Asset Management: SVC: Obtain/Build (5.2.6)",
        ans: ``
    },
    { que: "IT Asset Management: SVC: Deliver & Support (5.2.6)",
        ans: ``
    },
    { que: "Monitoring and Event Management: Key message: (5.2.7)",
        ans: ``
    },
    { que: "Monitoring and Event Management: What is an event? (5.2.7)",
        ans: ``
    },
    { que: "Monitoring and Event Management: Can you explain how the guiding principle of optimize and automate could be used in this practice? (5.2.7)",
        ans: ``
    },
    { que: "Monitoring and Event Management: SVC: Plan (5.2.7)",
        ans: ``
    },
    { que: "Monitoring and Event Management: SVC: Engage (5.2.7)",
        ans: ``
    },
    { que: "Monitoring and Event Management: SVC: Design & Transition (5.2.7)",
        ans: ``
    },
    { que: "Monitoring and Event Management: SVC: Obtain/Build (5.2.7)",
        ans: ``
    },
    { que: "Monitoring and Event Management: SVC: Deliver & Support (5.2.7)",
        ans: ``
    },
    { que: "Problem Management: Key message: (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: What is a problem? (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: What is known error? (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: What is error control? (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: What is a workaround? (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: How are incident management and problem management similar? (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: SVC: Plan (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: SVC: Engage (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: SVC: Design & Transition (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: SVC: Obtain/Build (5.2.8)",
        ans: ``
    },
    { que: "Problem Management: SVC: Deliver & Support (5.2.8)",
        ans: ``
    },
    { que: "Release Management: Key message: (5.2.9)",
        ans: ``
    },
    { que: "Release Management: What is a release? (5.2.9)",
        ans: ``
    },
    { que: "Release Management: Explain Agile/DevOps and Blue/green releases (5.2.9)",
        ans: ``
    },
    { que: "Release Management: Explain waterfall (5.2.9)",
        ans: ``
    },
    { que: "Release Management: SVC: Plan (5.2.9)",
        ans: ``
    },
    { que: "Release Management: SVC: Engage (5.2.9)",
        ans: ``
    },
    { que: "Release Management: SVC: Design & Transition (5.2.9)",
        ans: ``
    },
    { que: "Release Management: SVC: Obtain/Build (5.2.9)",
        ans: ``
    },
    { que: "Release Management: SVC: Deliver & Support (5.2.9)",
        ans: ``
    },
    { que: "Service Configuration Management: Key message: (5.2.11)",
        ans: ``
    },
    { que: "Service Configuration Management: What is a service catalog? (5.2.11)",
        ans: ``
    },
    { que: "Service Configuration Management: What is a configuration record? (5.2.11)",
        ans: ``
    },
    { que: "Service Configuration Management: How does service configuration management assist an organization be more efficient? (5.2.11)",
        ans: ``
    },
    { que: "Service Configuration Management: SVC: Plan (5.2.11)",
        ans: ``
    },
    { que: "Service Configuration Management: SVC: Engage (5.2.11)",
        ans: ``
    },
    { que: "Service Configuration Management: SVC: Design & Transition (5.2.11)",
        ans: ``
    },
    { que: "Service Configuration Management: SVC: Obtain/Build (5.2.11)",
        ans: ``
    },
    { que: "Service Configuration Management: SVC: Deliver & Support (5.2.11)",
        ans: ``
    },
    { que: "Service Desk: Key message: (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: Why is it important for the service desk to have a good understanding of the business? (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: What is the impact of increased automation on this practice? (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: What is a virtual service desk? (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: What is a follow the sun service desk model? (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: What is technical debt? (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: SVC: Plan (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: SVC: Engage (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: SVC: Design & Transition (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: SVC: Obtain/Build (5.2.14)",
        ans: ``
    },
    { que: "Service Desk: SVC: Deliver & Support (5.2.14)",
        ans: ``
    },
    { que: "Service Level Management: Key message: (5.2.15)",
        ans: ``
    },
    { que: "Service Level Management: What is a service level agreement (SLA)? (5.2.15)",
        ans: ``
    },
    { que: "Service Level Management: What is the watermelon SLA effect? (5.2.15)",
        ans: ``
    },
    { que: "Service Level Management: How does this practice use customer engagement and feedback? (5.2.15)",
        ans: ``
    },
    { que: "Service Level Management: SVC: Plan (5.2.15)",
        ans: ``
    },
    { que: "Service Level Management: SVC: Engage (5.2.15)",
        ans: ``
    },
    { que: "Service Level Management: SVC: Design & Transition (5.2.15)",
        ans: ``
    },
    { que: "Service Level Management: SVC: Obtain/Build (5.2.15)",
        ans: ``
    },
    { que: "Service Level Management: SVC: Deliver & Support (5.2.15)",
        ans: ``
    },
    { que: "Service Request Management: Key message: (5.2.16)",
        ans: ``
    },
    { que: "Service Request Management: What is a service request? (5.2.16)",
        ans: ``
    },
    { que: "Service Request Management: SVC: Plan (5.2.16)",
        ans: ``
    },
    { que: "Service Request Management: SVC: Engage (5.2.16)",
        ans: ``
    },
    { que: "Service Request Management: SVC: Design & Transition (5.2.16)",
        ans: ``
    },
    { que: "Service Request Management: SVC: Obtain/Build (5.2.16)",
        ans: ``
    },
    { que: "Service Request Management: SVC: Deliver & Support (5.2.16)",
        ans: ``
    },
    { que: "Deployment Management: Key message: (5.3.1)",
        ans: ``
    },
    { que: "Deployment Management: What is the difference between deployment and release? (5.3.1)",
        ans: ``
    },
    { que: "Deployment Management: What is phased deployment? (5.3.1)",
        ans: ``
    },
    { que: "Deployment Management: What is continuous delivery? (5.3.1)",
        ans: ``
    },
    { que: "Deployment Management: What is pull deployment? (5.3.1)",
        ans: ``
    },
    { que: "Deployment Management: SVC: Plan (5.3.1)",
        ans: ``
    },
    { que: "Deployment Management: SVC: Engage (5.3.1)",
        ans: ``
    },
    { que: "Deployment Management: SVC: Design & Transition (5.3.1)",
        ans: ``
    },
    { que: "Deployment Management: SVC: Obtain/Build (5.3.1)",
        ans: ``
    },
    { que: "Deployment Management: SVC: Deliver & Support (5.3.1)",
        ans: ``
    }
]