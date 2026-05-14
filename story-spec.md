You are acting as a Senior Solution Architect and Java Spring Boot Technical Lead.

Your task is to generate a detailed technical specification document for implementing the Jira story described below.

IMPORTANT:
- First understand the complete existing application architecture.
- Read and analyze all relevant project context/copilot instruction files available in the repository.
- Identify existing retry implementations, resilience patterns, retry template beans, interceptors, AOPs, DB utility classes, repository patterns, transaction boundaries, and configuration standards already used in the application.
- Reuse existing patterns instead of introducing inconsistent implementations.
- Follow existing coding conventions, naming standards, package structure, logging standards, exception handling standards, and configuration management approaches used in the project.

Your output should ONLY be a technical specification document.
Do NOT generate implementation code yet.

--------------------------------------------------
JIRA STORY
--------------------------------------------------

[PASTE JIRA STORY DESCRIPTION HERE]

--------------------------------------------------
ACCEPTANCE CRITERIA
--------------------------------------------------

[PASTE ACCEPTANCE CRITERIA HERE]

--------------------------------------------------
TASKS TO PERFORM
--------------------------------------------------

1. Analyze Current Application
- Understand the microservice architecture
- Identify:
  - database interaction layers
  - repository patterns
  - service layer structure
  - retry mechanisms already available
  - retry template beans
  - resilience4j usage
  - transaction management
  - async/event processing flows
  - mysql interaction patterns
  - common utility frameworks
  - logging and monitoring patterns

2. Identify Retry Candidates
Determine:
- Which DB operations qualify for retries
- Which operations should NEVER be retried
- Read vs write retry considerations
- Idempotency considerations
- Transaction rollback impacts
- High-risk duplicate update scenarios
- Timeout and deadlock retry opportunities
- Retry exclusion scenarios

3. Design Retry Strategy
Define:
- exponential backoff strategy
- retry counts
- initial interval
- multiplier
- max interval
- exception types eligible for retry
- non-retryable exceptions
- configuration externalization strategy
- environment-specific tuning strategy

4. Impact Analysis
Document:
- impacted modules
- impacted classes
- impacted APIs
- impacted database operations
- backward compatibility concerns
- performance considerations
- thread blocking considerations
- transactional side effects
- observability/logging impacts

5. Logging and Monitoring
Define:
- retry logging format
- correlation IDs
- metrics to capture
- actuator/monitoring enhancements
- alerting recommendations

6. Testing Strategy
Define:
- unit testing scenarios
- integration testing scenarios
- failure simulation approach
- transient DB failure test cases
- deadlock retry tests
- retry exhaustion scenarios
- performance testing considerations

7. Deliver Final Specification Document
Generate the document with the following sections:

- Story Overview
- Existing System Understanding
- Current Retry Mechanisms Found
- Technical Design
- Retry Strategy
- Exception Handling Strategy
- Configuration Changes
- Application Flow Changes
- Impacted Components
- Sequence Flow
- Logging & Monitoring
- Edge Cases
- Risks & Mitigations
- Testing Strategy
- Deployment Considerations
- Rollback Considerations
- Open Questions/Assumptions

IMPORTANT GUIDELINES:
- Do not assume architecture blindly.
- Derive conclusions from actual project analysis.
- Mention assumptions explicitly if code context is unclear.
- Prefer extending existing retry framework instead of creating duplicate frameworks.
- Avoid overengineering.
- Ensure solution is production-grade and enterprise-ready.
- Keep the specification implementation-oriented and developer-friendly.
