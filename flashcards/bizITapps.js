const flashcards = [
    { que: "Service management",
        ans: `a set of specialized organizational capabilities for enabling value for customers in the form of services` 
    },
    { que: "Purpose of an Organization",
        ans: `to create value for stakeholders`
    },
    { que: "Value",
        ans: `perceived benefits, usefulness, and importance of something` 
    },
    { que: "Value is subjective",
        ans: `based on the stakeholder's perception`
    },
    { que: "Value is co-created",
        ans: `through relationship between service provider and service consumer`
    },
    { que: "Organization",
        ans: `A person or a group of people that has its own functions with responsibilities, authorities, and relationships to achieve its objectives.`
    },
    { que: "Purpose of an organization",
        ans: `to generate value for stakeholders`
    },
    { que: "Service providers",
        ans: `When provisioning services, an organization takes on the role of the service provider. 
        The provider can be external to the consumer’s organization, or they can both be part of the same organization.` 
    },
    { que: "Service consumers",
        ans: `When receiving services, an organization takes on the role of the service consumer.`
    },
    { que: "3 types of service consumers",
        ans: `Customer,
        User,
        Sponsor,`
    },
    { que: "Customer",
        ans: `A person who defines the requirements for a service and takes responsibility for the outcomes of service consumption.` 
    },
    { que: "User",
        ans: `A person who uses services.`
    },
    { que: "Sponsor",
        ans: `A person who authorizes budget for service consumption.` 
    },
    { que: "Services",
        ans: `A means of ENABLING value CO-CREATION by facilitating outcomes that customers want to achieve, without the customer having to MANAGE specific COSTS and RISKS.`
    },
    { que: "Product",
        ans: `A configuration of an ORGANIZATION'S RESOURCES designed to offer value for a consumer.` 
    },
    { que: "Services that an organization provides...",
        ans: `are based on ONE or MORE PRODUCTS`
    },
    { que: "Service offering",
        ans: `A formal description of ONE or MORE SERVICES, designed to ADDRESS the NEEDS of a TARGET CONSUMER group. A service offering may include goods, access to resources, and service actions.`
    },
    { que: "Serivce offering may include...",
        ans: `Goods,
        Access to resources,
        Service actions`
    },
    { que: "Output",
        ans: `A TANGIBLE or INTANGIBLE DELIVERABLE of an activity.` 
    },
    { que: "Outcome",
        ans: `A result for a stakeholder enabled by ONE or MORE OUTPUTS.`
    },
    { que: "Cost",
        ans: `The amount of money spent on a specific activity or resource.` 
    },
    { que: "From service consumer perspective, there are 2 costs...",
        ans: `Cost REMOVED from the consumer by the service.
        Cost IMPOSED on the consumer by the service.`
    },
    { que: "Risk",
        ans: `A possible event that could cause harm or loss, or make it more difficult to achieve objectives. 
        Can also be defined as uncertainty of outcome, and can be used in the context of measuring the probability of positive outcomes as well as negative outcomes.`
    },
    { que: "Utility",
        ans: `FUNCTIONALITY offered by a product or service to meet a particular need. "What the SERVICE DOES" and can be determine whether a service is "fit for PURPOSE"` 
    },
    { que: "Warranty",
        ans: `ASSURANCE that a product or service will meet agreed requirements. "How the service PERFORMS" and can be used to determine where a service is "fit for USE"`
    },
    { que: "4 Dimensions of Service Management (VOIP)",
        ans: `Organizations and people.
        Information and technology.
        Partners and suppliers.
        Value streams and processes.` 
    },
    { que: "Value stream",
        ans: `A series of steps an organization undertakes to create and deliver products and services to consumers.`
    },
    { que: "Process",
        ans: `A set of interrelated or interacting activities that transform inputs into outputs. 
        A process takes one or more defined inputs and turns them into defined outputs. 
        Processes define the sequence of actions and their dependencies.` 
    },
    { que: "External factors influencing an organization (PESTLE)",
        ans: `Political, 
        Economic,
        Social,
        Technological,
        Legal,
        Environmental`
    },
    { que: "Service Value System (SVS) includes 5 components...",
        ans: `Guiding principles,
        Governance,
        Service value chain,
        Practices,
        Continual improvement.`
    },
    { que: "Guiding principles",
        ans: `a recommendation that guides an organization in all circumstances, regardless of changes to its goals, strategies, type of work, or management structure. A gudiing principle is universal and enduring.` 
    },
    { que: "Governance",
        ans: `The means by which an organization is directed and controlled.`
    },
    { que: "Service value chain",
        ans: `A set of interconnected activities that an organization performs to deliver a valuable product or service to its consumers and to facilitate value realization.`
    },
    { que: "Practices",
        ans: `Sets of organizational resources designed for performing work or accomplishing an objective.`
    },
    { que: "Continual improvement",
        ans: `A recurring organizational activity performed at all levels to ensure that an organization’s performance continually meets stakeholders’ expectations`
    },
    { que: "What are the 7 guiding principles",
        ans: `Focus on value.
        Start where you are.
        Progress iteratively with feedback.
        Collaborate and promote visibility.
        Think and work holistically.
        Keep it simple and practical.
        Optimize and automate.`
    },
    { que: "Focus on value",
        ans: `All activities conducted by the organization should link back, directly or indirectly, to value for itself, its customers, and other stakeholders.` 
    },
    { que: "Start where you are",
        ans: `Do not start over without first considering what is already available to be leveraged.`
    },
    { que: "Progress iteratively with feedback",
        ans: `Resist temptation to do everything at once. Even huge initiatives can be accomplished iteratively. By organizing work into smaller, manageable sections that can be executed and completed in a timely manner, the focus on each effort will be sharper and easier to maintain.` 
    },
    { que: "Collaborate and promote visibility",
        ans: `Working together across boundaries produces results that have greater buy-in, more relevance to objectives, and better likelihood of long-term success.
        Collaboration helps to break down silos and enables the knowledge and experience of all stakeholders to be leveraged.`
    },
    { que: "Think and work holistically",
        ans: `Understand of how all the parts of an organization work together in an integrated way` 
    },
    { que: "Keep it simple and practical",
        ans: `If a process, service, action, or metric fails to provide value or produce a useful outcome, eliminate it.`
    },
    { que: "Optimize and automate",
        ans: `Resources of all types, particularly human resources, should be used to their best effect. Eliminate anything that is wasteful or that does not produce value.` 
    },
    { que: "6 Service Value Chain Activities: (PIEDOD)",
        ans: `plan,
        improve,
        engage,
        design and transition,
        obtain/build,
        deliver and support.`
    },
    { que: "Plan",
        ans: `Ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions of service management and all PRODUCTS and SERVICES ACROSS the ORGANIZATION.` 
    },
    { que: "Improve",
        ans: `Ensure continual improvement of products, services, and practices across all value chain activities and the four dimensions of service management.`
    },
    { que: "Engage",
        ans: `Provide a good understanding of stakeholder needs, transparency, and continual engagement and good relationships with all stakeholders.` 
    },
    { que: "Design and Transition",
        ans: `Ensure that products and services continually meet stakeholder expectations for QUALITY, COSTS, and TIME TO MARKET.`
    },
    { que: "Obtain/Build",
        ans: `Ensure that service components are available when and where they are needed, and that they meet agreed specifications.` 
    },
    { que: "Deliver and Support",
        ans: `Ensure that services are delivered and supported according to AGREED SPECIFICATIONS and stakeholders’ EXPECTATIONS.`
    },
    { que: "Continual Improvement Model (7 steps)",
        ans: `What is the vision?
        Where are we now?
        Where do we want to be?
        How do we get there?
        Take action.
        Did we get there?
        How do we keep the momentum going?` 
    },
    { que: "What is the vision?",
        ans: `Business vision, mission, goals, and objectives.`
    },
    { que: "Where are we now?",
        ans: `Perform baseline assessments` 
    },
    { que: "Where do we want to be?",
        ans: `Define measureable targets.`
    },
    { que: "How do we get there?",
        ans: `Define the improvement plan.`
    },
    { que: "Take action",
        ans: `Execute improvement actions.`
    },
    { que: "Did we get there?",
        ans: `Evaluate metrics and KPIs.`
    },
    { que: "15 ITIL Practices:",
        ans: `Information Security Management,
        Relationship Management,
        Supplier Management,
        IT Asset Management,
        Monitoring and Event Management,
        Release Management,
        Service Configuration Management,
        Deployment Management,
        * Continual Improvement,
        * Change Enablement/Control,
        * Incident Management,
        * Problem Management,
        * Service Request Management,
        * Service Desk,
        * Service Level Management` 
    },
    { que: "* Continual Improvement is the responsibility of...",
        ans: `everyone`
    },
    { que: "* Continual Improvement Register (CIR)",
        ans: `A database or structured document to track and manage improvement ideas from identification through to final action` 
    },
    { que: "* Responsible for embedding continual improvement",
        ans: `Senior management`
    },
    { que: "Information Security Management",
        ans: `protecting the information needed by the organization to conduct its business.` 
    },
    { que: "Information Security Management: 3 main concepts (CIA)",
        ans: `Confidentiality,
        Integrity,
        Availability` 
    },
    { que: "Information Security authentication",
        ans: `ensuring someone is who they claim to be` 
    },
    { que: "Information Security non-repudiation",
        ans: `ensuring someone can't deny that they took action`
    },
    { que: "Security is established by means of...",
        ans: `policies, processes, behaviors, risk management, and controls` 
    },
    { que: "Security must maintain a balance between...",
        ans: `Prevention,
        Detection,
        Correction` 
    },
    { que: "Prevention",
        ans: `Ensuring that security breaches do not occur` 
    },
    { que: "Detection",
        ans: `Rapidly and reliably detecting incidents that can't be prevented` 
    },
    { que: "Correction",
        ans: `Recovering from incidents after they are detected`
    },
    { que: "Relationship Management",
        ans: `to establish and nurture the links between the organization and its stakeholders at strategic and tactical levels.`
    },
    { que: "Supplier Management",
        ans: `Ensure organization's suppliers and their performances are managed appropriately to support the provision of products and services. Includes collaborative relationships with suppliers to uncover new value and reduce risk of failure.`
    },
    { que: "Supplier Management 4 sourcing strategies",
        ans: `Insourcing,
        Outsourcing,
        Single source or partnership,
        Multi-sourcing` 
    },
    { que: "Insourcing",
        ans: `products or services are developed and/or delivered internally by the organization`
    },
    { que: "Outsourcing",
        ans: `process of having external suppliers provide products or services that were previously provided internally`
    },
    { que: "Singer source or partnership",
        ans: `Procurement of product/service from one supplier. `
    },
    { que: "Multi-sourcing",
        ans: `Procurement of product/service from more than one independent supplier`
    },
    { que: "Organization should evaluate and select suppliers based on...",
        ans: `Importance and impact,
        Risk,
        Costs` 
    },
    { que: "Importance and impact",
        ans: `the value of the service to the business, provided by the supplier`
    },
    { que: "* Change Enablement/Control",
        ans: `to maximize the number of successful service and product changes by ensuring that risks have been properly assessed, authorizing changes to proceed, and managing the change schedule.`
    },
    { que: "* Change",
        ans: `Change is the addition, modification, or removal of anything that could have a direct or indirect effect on services.` 
    },
    { que: "* There are 3 types of changes",
        ans: `Standard change,
        Normal change,
        Emergency change`
    },
    { que: "* Standard change",
        ans: `low-risk, PRE-AUTHORIZED changes that are well understood and fully documented, and can be implemented without needing addtional authorization.`
    },
    { que: "* Normal change",
        ans: `NEED TO BE scheduled, assessed, and authorized following a process.`
    },
    { que: "* Emergency change",
        ans: `not scheduled, must be implemented ASAP, for example to resolve an incident or implement a SECURITY patch.`
    },
    { que: "* Incident Management Practice",
        ans: `to minimize the negative impact of incidents by restoring normal service operation as quickly as possible.`
    },
    { que: "* Incident",
        ans: `an unplanned interruption to a service or reduction in the quality of a service.` 
    },
    { que: "* Swarming",
        ans: `to help manage incidents more effectively, a team-based approach where the focus is on quickly assembling the right people with the right skills to resolve the incident as quickly as possible.`
    },
    { que: "* Few incidents will be resolved by...",
        ans: `the users themselves, using self-help tools.`
    },
    { que: "* Some incidents will be resolved by...",
        ans: `Service Desk` 
    },
    { que: "* Complex incidents will be resolved by...",
        ans: `escalation to support teams`
    },
    { que: "* Incidents can be escalated to...",
        ans: `suppliers or partners, who offer support for their poducts and services` 
    },
    { que: "* All incidents have formal process for...",
        ans: `logging and managing incidents.`
    },
    { que: "* Separate processes for managing...",
        ans: `MAJOR incidents, and information SECURITY incidents.` 
    },
    { que: "* IT Asset Management help the organization:",
        ans: `maximize value,
        control costs,
        manage risks,
        support decision-making about purchase, re-use, retirement, and disposal of IT assets,
        meet regulatory and contractual requirements.`
    },
    { que: "* IT asset",
        ans: `any FINANCIALLY VALUABLE component that can contribute to the delivery of an IT product or service.` 
    },
    { que: "Monitoring and Event Management",
        ans: `to systematically observe services and service components, and record and report selected changes of state identified as events. Responds to events that could lead to potential faults or incidents.`
    },
    { que: "Event",
        ans: `any change of state that has significance for the management of a service or other configuration item (CI). Events are typically recognized through notifications created by an IT service, configuration item, or monitoring tool.` 
    },
    { que: "* Problem Management",
        ans: `to reduce likelihood and impact of incidents by identifying actual and potential causes of incidents and managing workarounds and known errors.`
    },
    { que: "* Problem",
        ans: `a cause, or potential cause, of ONE OR MORE INCIDENTS.` 
    },
    { que: "* Known error",
        ans: `a problem that has been analyzed but has not been resolved.`
    },
    { que: "* 3 Phases of problem management",
        ans: `Problem identification,
        Problem control,
        Error control` 
    },
    { que: "* Workaround",
        ans: `a solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available. Some workarounds reduce the likelihood of incidents.`
    },
    { que: "Release Management",
        ans: `to make new and changed services and features available for use.` 
    },
    { que: "Release",
        ans: `a version of a service or other configuration item (CI), or a collection of CIs, that is made available for use.`
    },
    { que: "Service Configuration Management",
        ans: `to ensure that accurate and reliable information about the configuration of services, and the CIs that support them, is available when and where it is needed. This includes information on how CIs are configured and the relationships between them.` 
    },
    { que: "Configuration Item (CI)",
        ans: `any component that needs to be managed in order to deliver an IT service.` 
    },
    { que: "* Service Desk",
        ans: `to capture demand for incident resolution and service requests. It should also be the entry point and single point of contact for the service provider with all its users.`
    },
    { que: "* Service Desk require training and competencies in...",
        ans: `technical and business areas. In particular, demonstrate excellent customer service skills` 
    },
    { que: "* Virtual service desk requires sophisticated supporting technology, involving...",
        ans: `complex routing and escalation; these solutions are often cloud-based.`
    },
    { que: "* Service Level Management",
        ans: `to set clear business-based targets for service levels, and to ensure that delivery of services is properly assessed, monitored, and managed against these targets.` 
    },
    { que: "* Service level",
        ans: `one or more metrics that define expected or achieved service quality.`
    },
    { que: "* Service Level Agreement (SLA)",
        ans: `a documented agreement between a service provider and a customer that identifies both services required and the expected level of service.` 
    },
    { que: "* Service Request Management",
        ans: `to support the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner.`
    },
    { que: "* Service request",
        ans: `a request from a user or user's authorized representative that initiates a service action which has been agreed as a normal part of service delivery.` 
    },
    { que: "* Service request may include...",
        ans: `service delivery action (provide report, replace toner cartridge),
        information (how to create document, find out office hours),
        provision of resource/service (provide phone/laptop to new employee),
        access to resource/service (provide access to file/folder),
        feedback, compliments, complaints.`
    },
    { que: "Deployment Management",
        ans: `to move new or changed hardware, software, documentation, processes, or any other component to live environments. It may also be involved in deploying components to other environments for testing or staging.` 
    },
    { que: "What are the 4 deployment approaches?",
        ans: `Phased deployment,
        Continuous delivery,
        Big bang deployment,
        Pull deployment`
    },
    { que: "Phased deployment",
        ans: `new or changed components are deployed to just part of the production environment at a time, for example to users in one office, or one country. This operation is repeated as many times as needed until the deployment is complete.` 
    },
    { que: "Continuous delivery",
        ans: `components are integrated, tested, and deployed to just part of the production environment at a time, for ex: to users in one office, or one country. This operation is repeated as many times as needed until the deployment is complete.`
    },
    { que: "Big bang deployment",
        ans: `new or changed components are deployed to all targets at the same time. This approach is sometimes needed when dependencies prevent the simultaneous use of both the old and new components. For ex: there could be a database schema change that is not compatible with previous versions of some components.` 
    },
    { que: "Pull deployment",
        ans: `New or changed software is made available in a controlled repository, and users download the software to client devices when they choose. This allows users to control the timing of updates, and can be integrated with service request management to enable users to request software only when it is needed.`
    }
]