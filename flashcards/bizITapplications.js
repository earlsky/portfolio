const flashcards = [
    { que: "Service",
        ans: `Facilitates outcomes for a customer w limited costs to them...
    a means of enabling value co-creation by facilitating outcomes that customers want to achieve,
    without the customer having to manage sepcific costs and risks` },
    { que: "Utility",
        ans: `What the service does`
    },
    { que: "Warranty",
        ans: `How the service performs`
    },
    { que: "Customer",
        ans: `role that defines requirements for a service and takes responsibility for the outcomes of service consumption`
    },
    { que: "User",
        ans: `the role that uses services`
    },
    { que: "Service management",
        ans: `set of service capabilities`
    },
    { que: "Sponsor",
        ans: `role that authorizes budget for service...consumption`
    },
    { que: "Cost",
        ans: `amount spent...the amount of money spent on a specific activity or resource`
    },
    { que: "Organization",
        ans: `person or group with its own functions...responsibilities, authorities, and relationships to achieve its objectives`
    },
    { que: "Outcome",
        ans: `Result for stakeholder... a result for a stakeholder enabled by one or more outputs`
    },
    { que: "Output",
        ans: `Deliverable of an activity... a tangible or intangible deliverable of an activity`
    },
    { que: "Risk",
        ans: `possible events that could cause harm or loss...
        or make it more difficult to achieve objectives`
    },
    { que: "Utility",
        ans: `Functionality to meet a need...
        functionality offered by a product or service to meet a particular need.
        Utility can be summarized by "What the service DOES" and determine whether a service 
        is "fit for PURPOSE"`
    },
    { que: "Warranty",
        ans: `Assurance that requirements will be met...
        assuracne that a product or service will meet agreed requirements.
        Warranty can be summarized by "how the service PERFORMS" and can be used to determine where a service
        is "fit for USE"`
    },
    { que: "Service offering",
        ans: `may include goods, resources, and service actions...
        a formal description of one or more services designed to address the needs of a target consumer group.
        A service offering may include goods, access to resources, and service actions`
    },
    { que: "Service relationship management",
        ans: `Joint activities performed by providers and consumers...
        joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings`
    },
    { que: "Service consumption",
        ans: `consuming services... service consumption include:
        Management of the consumer's resources needed to use the service.
        Service actions performed by users including utilizing the provider's resources, and requesting service actions to be fultilled.
        Service consumption may include receiving (acquiring) of goods`
    },
    { que: "Focus on value (4.3.1)",
        ans: `everything that the organizaiton does needs to map, directly/indirectly, to value for the stakeholders
        The focus on value principle encompasses many perspectives, including the experience of customers and users`
    },
    { que: "Start where you are (4.3.2)",
        ans: `do not start from scratch and build something new without considering what is already available to be leveraged.
        There is likely to be a great deal in the current services, processes, programs, projects, and people that can be used to create the desired outcome
        The current state should be investigated and observed directly to make sure it is fully understood`
    },
    { que: "Progress iteratively with feedback (4.3.3)",
        ans: `do not attempt to do everything at once. Even huge initiatives must be accomplished iteratively`
    },
    { que: "Collaborate and promote visibility (4.3.4)",
        ans: `working together across boundaries produces results that have greater buy-in, more relevance to objectives, and increased likelihood of long-term success.
        Achieving objectives requires information, understanding, and trust.
        Work and consequences should be made visible, hidden agendas avoided, and information shared to the greatest degree possible`
    },
    { que: "Think and work holistically (4.3.5)",
        ans: `No service or element used to provide a service, stands alone.
        The outcomes achieved by the service provider and service consumer will suffer unless the organization works on the service as a whole, not just on its parts.
        Results are delivered to internal and external customers through the effective and efficient management and dynamic integration information, technology, organization, people, practices, partners,
        and agreements, which should all be coordinated to proved a defined value`
    },
    { que: "Keep it simple and practical (4.3.6)",
        ans: `if a process, service, action or metric fails to provide value or produce a useful outcome, elimitnate it.
        In a process or procedure, use the minimum number of steps necessary to accomplish the objective(s).
        Always use outcome-based thinking to produce practical solutions that deliver results`
    },
    { que: "Optimize and automate (4.3.7)",
        ans: `resources of all types, particularly HR, should be used to their best effect.
        Eliminate anything that is truly wasteful and use technology to achieve whatever it is capable of.
        Human intervention should only happen where it really contributes value`
    },
    { que: "Organization and people (3.1)",
        ans: `One of the four dimensions of service management:
        it ensures that the way an organization is structured and managed, as well as its roles, responsibilities, and systems of authority and communication, is well defined and supports its overall strategy and operating model`
    },
    { que: "Information and technology (3.2)",
        ans: `One of the four dimensions of service management:
        it includes the information and knowledge used to deliver services, and the information and technologies used to manage all aspects of the service value system`
    },
    { que: "Partners and suppliers (3.3)",
        ans: `One of the four dimensions of service management:
        it encompasses the relationships an organization has with other organizations that are involved in the design, development, deployment, delivery, support, and/or continual improvement of servicies`
    },
    { que: "Value streams and processes (3.4)",
        ans: `one of the four dimensions of service management. It defines the activities, workflows, controls, and procedures needed to achieve the agreed objectives`
    },
    { que: "Describe ITIL service value system(SVS) (4.1)",
        ans: `ITIL SVS describes how all the components and activities of the organization work together as a system to enable value creation. Each organization's SVS has interfaces w other organizations, forming an ecosystem that can in turn facilitate value for those organizations, their customers, and other stakeholders
        ITIL SVS includes the following components:
        - Guiding principles
        - Governance
        - Service value chain
        - Practices
        - Continual improvement`
    },
    { que: "Describe the interconnected nature of the service value chain and how this supports value streams: (4.5)",
        ans: `ITIL service value chain: an operating model for service providers that covers all the key activities required to effectively manage products and services.`
    },
    { que: "The six value chain activities: (4.5 p82)",
        ans: `plan, improve, engage, design & transition, obtain/build, deliver & support (PIEDOD)`
    },
    { que: "Plan (4.5.1 p87)",
        ans: `service value chain activity that ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services across the organization`
    },
    { que: "Improve (4.5.2 p87)",
        ans: `service value chain activity that ensures continual improvements of products, services, and practices across all value chain activities and the four dimensions of service management`
    },
    { que: "Engage (4.5.3 p88)",
        ans: `service value chain activity that provides a good understanding of stakeholder needs, transparency, continual engagement, and good relationships with all stakeholders`
    },
    { que: "Design & transition (4.5.4 p89)",
        ans: `service value chain activity that ensures products and services continually meet stakeholder expectations for quality, costs, and time to market`
    },
    { que: "Obtain/build (4.5.5 p90)",
        ans: `service value chain activity that ensures service components are available when and where they are needed and that they meet agreed specifications`
    },
    { que: "Deliver & support (4.5.6 p91)",
        ans: `service value chain activity that ensures services are delivered and supported according to agreed specifications and stakeholders' expectations`
    },
    { que: "ITIL practices (5.1.2 p)",
        ans: ``
    },
    { que: "Information security management practice (5.1.3)",
        ans: `to protect the information needed by the organization to conduct its business. This includes understanding and managing risks to the confidentiality, integrity, and availability of information, as well as other aspects of information security such as authentication(ensuring someone is who they claim to be) and non-repudiation(ensuring that someone can't deny that they took an action)`
    },
    { que: "Relationship management practice (5.1.9)",
        ans: `to establish and nurture the links between the organization and its stakeholders at strategic and tactical levels. It includes the identification, analysis, monitoring, and continual improvement of relationships with and between stakeholders`
    },
    { que: "Supplier management practice (5.1.13)",
        ans: `to ensure that the organization's suppliers and their performances are managed appropriately to support the provision of seamless, quality products and services. This includes creating closer, more collaborative relationships with key suppliers to uncover and realize new value and reduce the risk of failure`
    },
    { que: "IT asset management practice (5.2.6)",
        ans: `to plan and manage the full lifecycle of all IT assets. The practice helps the organization:
        maximize value, 
        control costs, 
        manage risks, 
        support decision-making about purchase, re-use, retirement, & disposal of assets, 
        and meet regulatory & contractual requirements`
    },
    { que: "Monitoring and event management practice (5.2.7)",
        ans: `to systematically observe services and service components, and record and report selected changes of state identified as events. This practice identifies and prioritizes infrastructure, services, business processes, and information security events, and establishes the appropriate response to those events, including responding to conditions that may lead to potential faults or incidents`
    },
    { que: "Release management practice (5.2.9)",
        ans: `to make new and changed services and features available for use. This includes the planning, scheduling, and controlling of the movement of releases to test and live environments. The primary goal of this practice is to protect the integrity of the live environment and to ensure that the correct components are released`
    },
    { que: "Service configuration management practice (5.2.11)",
        ans: `to ensure that accurate and reliable information about the configuration of services, and the configuration items (CIs) that support them, is available when and where it is needed. This includes information on how CIs are configured and the relationships between them`
    },
    { que: "Deployment management practice (5.3.1)",
        ans: `to move new or changed hardware, software, documentation, processes, or any other component to live environments. It may also be used to deploy components to other environments for testing or staging`
    },
    { que: "Distinct approaches for Deployment management (5.3.1)",
        ans: `phased deployment,
        continuous delivery,
        big bang deployment,
        pull deployment`
    },
    { que: "Deployment management: phased deployment",
        ans: `The new or changed components are deployed to just part of the production environment at a time, for example to users in one office, or one country. This operation is repeated as many times as needed until the deployment is complete.`
    },
    { que: "Deployment management: continuous delivery",
        ans: `Components are integrated, tested, and deployed when they are needed, providing frequent opportunities for customer feedback loops.`
    },
    { que: "Deployment management: big bang deployment",
        ans: `New or changed components are deployed to all targets at the same time. This approach is sometimes needed when dependencies prevent the simultaneous use of both the old and new components. For example, there could be a database schema change that is not compatible with previous versions of some components.`
    },
    { que: "Deployment management: pull deployment",
        ans: `New or changed software is made available in a controlled repository, and users download the software to client devices when they choose. This allows users to control the timing of updates, and can be integrated with service request management to enable users to request software only when it is needed.`
    },
    { que: "Continual improvement practice (5.1.2 p110)",
        ans: `to align the organization's practices and services with changing business needs through the ongoing identification and improvement of services, service components, practices, or any element involved in the efficient and effective management of products and services`
    },
    { que: "Change enablement/control practice (5.2.4)",
        ans: `to maximize the number of successful service and product changes by ensuring that risks have been properly assessed, authorizing changes to proceed, and managing the change schedule`
    },
    { que: "Incident management practice (5.2.5)",
        ans: `to minimize the negative impact of incidents by restoring normal service operation as quickly as possible.`
    },
    { que: "Problem management practice (5.2.8 p174)",
        ans: `to reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors`
    },
    { que: "Service request management practice (5.2.16 p207)",
        ans: `to support the agreed quality of a service by handling all pre-defined, user-initiated service requests in an effective and user-friendly manner`
    },
    { que: "Service desk practice (5.2.14 p199)",
        ans: `to capture demand for incident resolution and service requests. It should also be the point of communication for the service provider with all its users`
    },
    { que: "Service level management practice (5.2.15 p202)",
        ans: `to set clear business-based targets for service levels, and to ensure that delivery of services is properly assessed, monitored, and managed against these targets`
    },
    { que: "IT asset (5.2.6 p167)",
        ans: `any financially valuable component that can contribute to the delivery of an IT product or service. This includes hardware, software, documentation, information, and people, as well as formal intangibles such as licenses, service contracts, and warranties`
    },
    { que: "Event (5.2.7 p170)",
        ans: `any change of state that has significance for the management of a service or other configuration item (CI). Events are typically recognized through notifications created by an IT service, CI, or monitoring tool`
    },
    { que: "Configuration item (CI) (5.2.11 p187)",
        ans: `any component that needs to be managed in order to deliver an IT service. Information about each CI is recorded in a configuration record within the configuration management system (CMS) and is maintained throughout its lifecycle by service configuration management. CIs include IT services, hardware, software, buildings, people, and formal documentation such as process documentation and SLAs`
    },
    { que: "Change (5.2.4 p160)",
        ans: `the addition, modification, or removal of anything that could have a direct or indirect effect on services`
    },
    { que: "Incident (5.2.5 p163)",
        ans: `an unplanned interruption to a service, or a reduction in the quality of a service.
        Incidents have an impact on users or business processes, and must be resolved so that normal business activity can take place.`
    },
    { que: "Problem (5.2.8 p175)",
        ans: `a cause, or potential cause, of one or more incidents.
        Problems are the causes of incidents.
        They require investigation and analysis to identify the causes, develop workarounds, and recommend longer-term resolutions.
        This reduces the number and impact of future incidents`
    },
    { que: "Known error (5.2.8 p175)",
        ans: `a problem that has been analyzed and for which a root cause is identified. A known error has a documented workaround or a permanent solution`
    },
    { que: "Continual improvement(detailed)(5.1.2 p110)",
        ans: ``
    },
    { que: "Change enablement/control(detailed)(5.2.4 p159)",
        ans: ``
    },
    { que: "Incident management(detailed)(5.2.5 p163)",
        ans: ``
    },
    { que: "Problem management(detailed)(5.2.8 p174)",
        ans: ``
    },
    { que: "Service request management(detailed)(5.2.16 p207)",
        ans: ``
    },
    { que: "Service desk(detailed)(5.2.14 p199)",
        ans: ``
    },
    { que: "Service level management(detailed)(5.2.15)",
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
]