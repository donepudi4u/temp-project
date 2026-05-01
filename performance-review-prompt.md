You are a senior backend performance engineer.

Analyze this Spring Boot microservice (Java + MySQL) which acts as a lookup service.

Context:
- Table size in production: ~36 million rows
- Daily inserts: ~200K records
- Retention: 180 days
- Current SLA in non-prod: ~25 ms
- One column is JSON; fields are extracted from it to build response

Your tasks:

1. Identify performance bottlenecks in:
   - Database queries (JPA/SQL)
   - JSON column usage (JSON_EXTRACT or parsing in Java)
   - Missing or inefficient indexes
   - Full table scans or large range scans
   - N+1 query issues
   - Object mapping / serialization overhead

2. Review repository, service, and controller layers:
   - Check if unnecessary data is fetched from DB
   - Identify heavy object mapping or conversions
   - Detect synchronous/blocking calls
   - Suggest use of projections instead of full entities

3. JSON Column Analysis:
   - Compare performance impact of extracting fields from JSON vs storing them as separate indexed columns
   - Suggest generated columns or schema redesign if needed

4. Scalability Risks for 36M records:
   - Query patterns that will degrade with data growth
   - Missing pagination or limits
   - Risk of high latency under concurrent load

5. Database Optimization Suggestions:
   - Indexing strategy (composite indexes if needed)
   - Partitioning strategy (e.g., by date)
   - Query rewrites for better execution plans

6. Application Optimization:
   - Caching opportunities (e.g., Redis, in-memory)
   - Reducing payload size
   - Threading / connection pool tuning

7. Provide:
   - Specific code-level improvement suggestions
   - Refactored query examples
   - Estimated impact (low / medium / high)

Focus on practical improvements that will help maintain or improve SLA when scaling to tens of millions of records.
