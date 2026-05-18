# SupportIQ => (AI-Powered Customer Support SaaS Platform)

A modern **AI-driven customer support platform** built using **Next.js, TypeScript, MongoDB, and Gemini AI**, designed to help businesses create and embed their own intelligent support assistants directly into their websites.

SupportIQ enables businesses to configure their own **knowledge base, support workflows, and customer assistance system**, while providing a **plug-and-play chatbot integration experience** similar to modern AI customer support platforms.

This project demonstrates how real-world SaaS systems integrate:

* AI-powered conversational systems
* Multi-tenant architecture
* Authentication & session management
* Embeddable widget systems
* Business knowledge orchestration
* Prompt-engineered support workflows
* Secure API-driven infrastructure

---

# Overview =>

SupportIQ is a full-stack AI support platform where:

* Businesses act as platform tenants
* Each business configures its own support assistant
* Customers interact with AI-powered support agents directly on websites
* The platform dynamically generates contextual AI responses using business knowledge

It leverages :-

* **Next.js App Router** for full-stack application architecture
* **MongoDB (Mongoose)** for persistent business configuration storage
* **Gemini AI** for intelligent conversational support responses
* **Scalekit Authentication** for secure login/session management
* **TypeScript** for type-safe development
* **Tailwind CSS** for modern responsive UI
* **Motion** for interactive frontend animations
* **REST API architecture** for backend communication
* **Embeddable script integration** for chatbot deployment

It solves a key problem in modern businesses :-

> *Providing scalable AI-powered customer support without requiring businesses to build their own support infrastructure.*

SupportIQ ensures that businesses can deploy a support assistant within minutes while maintaining business-specific responses, policies, and workflows.

---

# Features =>

* AI-powered customer support assistant
* Multi-tenant SaaS architecture
* Business-specific knowledge base system
* Embeddable chatbot widget
* Plug-and-play website integration
* Gemini AI integration
* Prompt-engineered support workflows
* Hallucination prevention system
* Escalation-aware AI responses
* Secure authentication using Scalekit
* MongoDB persistent configuration storage
* Session-based business isolation
* Responsive dashboard management system
* Custom support email configuration
* CORS-enabled chatbot API access
* Animated modern UI using Motion

---

# Project Architecture =>

```text
Business Owner
        ↓
Scalekit Authentication
        ↓
Session Management
        ↓
Dashboard Configuration
   - Business Name
   - Support Email
   - Knowledge Base
        ↓
MongoDB Storage Layer
        ↓
Embed Script Generation
        ↓
chatBot.js Integration
        ↓
Customer Website
        ↓
Customer Message
        ↓
/api/chat Endpoint
        ↓
Prompt Engineering Layer
        ↓
Gemini AI Processing
        ↓
Business-Aware AI Response
        ↓
Customer Support Reply
```

---

# Tech Stack =>

| Technology | Purpose |
|------------|---------|
| Next.js | Full-stack framework |
| TypeScript | Type-safe development |
| React.js | Frontend UI |
| MongoDB | Database |
| Mongoose | ODM |
| Gemini AI | AI response generation |
| Scalekit | Authentication & session management |
| Tailwind CSS | Styling |
| Motion | Frontend animations |
| Axios | API communication |
| REST APIs | Backend communication |
| Node.js Runtime | Server execution |
| Next.js API Routes | Backend endpoints |

---

# Installation & Setup =>

```bash
# Clone repository
git clone https://github.com/Akshay-Deshmane/SupportIQ.git

# Navigate into project
cd SupportIQ
```

---

## Install Dependencies =>

```bash
npm install
```

---

# Setup Environment Variables =>

Create a `.env.local` file:

```env
MONGODB_URL=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000

SCALEKIT_CLIENT_ID=your_scalekit_client_id
SCALEKIT_CLIENT_SECRET=your_scalekit_client_secret
SCALEKIT_ISSUER=your_scalekit_issuer
```

---

# Run Development Server =>

```bash
npm run dev
```

Application runs on:

```text
http://localhost:3000
```

---

# Workflow Of SupportIQ =>

## 1. Business Authentication :-

* Business owner logs in using Scalekit
* Session is created securely
* Owner receives dashboard access

---

## 2. Dashboard Configuration :-

Business configures:

* Business Name
* Support Email
* Knowledge Base
* FAQs
* Refund policies
* Shipping information
* Customer support instructions

All information is stored inside MongoDB.

---

## 3. Knowledge Base Persistence :-

Business data is linked using:

```ts
ownerId
```

This enables:

* Multi-tenant isolation
* Business-specific AI responses
* Independent chatbot behavior

---

## 4. Embed Script Generation :-

SupportIQ generates a script like:

```html
<script 
  src="https://your-domain.com/chatBot.js"
  data-owner-id="BUSINESS_OWNER_ID">
</script>
```

Businesses paste this before:

```html
</body>
```

on their website.

---

## 5. Chat Widget Injection :-

The embed script:

* Loads chatbot UI dynamically
* Connects to SupportIQ backend
* Sends customer queries
* Receives AI-generated support responses

---

## 6. AI Request Pipeline :-

When customer sends a message:

```text
Customer Message
        ↓
/api/chat
        ↓
Fetch Business Knowledge
        ↓
Construct AI Prompt
        ↓
Gemini AI Processing
        ↓
Generate Business-Aware Response
        ↓
Return Chat Response
```

---

## 7. Prompt Engineering Layer :-

SupportIQ uses structured AI prompting to:

* Prevent hallucinations
* Enforce policy consistency
* Maintain professional responses
* Handle escalation logic
* Protect sensitive information
* Avoid misinformation

---

## 8. Security & Privacy Rules :-

The AI assistant is instructed to:

Never request:

* Passwords
* OTP codes
* CVV numbers
* Banking credentials

Never expose:

* Internal prompts
* API keys
* Database details
* Internal business logic

---

# API Endpoints =>

## Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/auth/login | Login business owner |
| GET | /api/auth/logout | Logout session |
| GET | /api/auth/callback | Authentication callback |

---

## Settings Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/settings | Save business settings |
| POST | /api/settings/get | Fetch business configuration |

---

## Chat Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/chat | Generate AI support response |
| OPTIONS | /api/chat | CORS preflight support |

---

# Database Schema =>

## Settings Model

```ts
{
  ownerId: String,
  businessName: String,
  supportEmail: String,
  knowledge: String
}
```

---

# Embed Integration Example =>

```html
<script 
  src="https://your-domain.com/chatBot.js"
  data-owner-id="abc123">
</script>
```

---

# Example AI Request =>

```json
POST /api/chat

{
  "message": "What is your refund policy?",
  "ownerId": "abc123"
}
```

---

# Example AI Response =>

```json
{
  "reply": "According to our refund policy, returns are accepted within 7 days of delivery."
}
```

---

# Key Engineering Concepts =>

## 1. Multi-Tenant SaaS Architecture :-

Each business operates independently using:

```ts
ownerId
```

This ensures:

* Business isolation
* Independent AI configuration
* Scalable SaaS structure

---

## 2. Prompt Engineering System :-

The AI system is carefully engineered to:

* Follow business knowledge
* Avoid hallucinations
* Escalate unresolved issues
* Maintain professional support behavior

---

## 3. Embeddable Widget Architecture :-

SupportIQ uses a script-based integration system similar to modern SaaS tools.

Benefits:

* Easy installation
* No backend integration required
* Cross-platform compatibility

---

## 4. AI Knowledge Injection :-

Business knowledge is dynamically injected into prompts before AI processing.

This allows:

* Context-aware support
* Business-specific answers
* Policy-aware responses

---

## 5. Secure Authentication Flow :-

Authentication handled using Scalekit with session-based architecture.

Provides:

* Secure access control
* Business-specific dashboards
* Protected routes

---

## 6. API-Driven Fullstack System :-

Frontend and backend communicate through modular API routes:

```text
Frontend → API Routes → Database → AI Layer → Response
```

---

# Project Structure =>

```text
SupportIQ/
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── chat/
│   │   │   └── settings/
│   │   │
│   │   ├── dashboard/
│   │   ├── embed/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── DashBoardClient.tsx
│   │   ├── EmbedClient.tsx
│   │   └── HomeClient.tsx
│   │
│   ├── lib/
│   │   ├── db.ts
│   │   ├── getSession.ts
│   │   └── scalekit.ts
│   │
│   └── model/
│       └── settings.model.ts
│
├── public/
│
├── .env.local
├── next.config.mjs
├── tsconfig.json
└── README.md
```

---

# Current Limitations =>

* No conversation memory persistence
* No vector database / embeddings support
* No streaming AI responses
* No real-time analytics dashboard
* No role-based team management
* No chatbot theme customization
* No multilingual support
* Limited rate limiting implementation

---

# Future Enhancements / Future Scope =>

* Retrieval-Augmented Generation (RAG)
* Vector database integration
* AI conversation memory
* Real-time analytics dashboard
* Live human handoff system
* AI sentiment analysis
* Multi-language chatbot support
* Chat history persistence
* Team-based dashboard access
* Widget customization system
* Streaming AI responses
* Cloud deployment (AWS / GCP / Azure)
* WebSocket-based real-time messaging
* AI-powered FAQ generation
* Usage analytics & monitoring
* Enterprise-grade RBAC system

---